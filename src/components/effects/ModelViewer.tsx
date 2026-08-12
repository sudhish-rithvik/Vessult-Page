/* eslint-disable react/no-unknown-property */
import { Suspense, useRef, useLayoutEffect, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree, invalidate } from '@react-three/fiber';
import {
  OrbitControls,
  useGLTF,
  useProgress,
  Html,
  Environment,
  ContactShadows,
} from '@react-three/drei';
import * as THREE from 'three';

const isTouch =
  typeof window !== 'undefined' &&
  ('ontouchstart' in window || navigator.maxTouchPoints > 0);

const deg2rad = (d: number) => (d * Math.PI) / 180;
const INERTIA = 0.925;
const PARALLAX_MAG = 0.05;
const PARALLAX_EASE = 0.12;
const HOVER_MAG = deg2rad(6);
const HOVER_EASE = 0.15;

/* ── Loading indicator ─────────────────────────────────────────── */
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <span
        style={{
          color: '#2563EB',
          fontFamily: 'monospace',
          fontSize: 14,
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
        }}
      >
        Loading 3D Model… {Math.round(progress)}%
      </span>
    </Html>
  );
}

/* ── Zoom controls (desktop only) ──────────────────────────────── */
function DesktopControls({
  pivot,
  min,
  max,
  zoomEnabled,
}: {
  pivot: THREE.Vector3;
  min: number;
  max: number;
  zoomEnabled: boolean;
}) {
  const ref = useRef<any>(null);
  useFrame(() => ref.current?.target.copy(pivot));
  return (
    <OrbitControls
      ref={ref}
      makeDefault
      enablePan={false}
      enableRotate={false}
      enableZoom={zoomEnabled}
      minDistance={min}
      maxDistance={max}
    />
  );
}

/* ── Inner model scene (must be inside Canvas + Suspense) ──────── */
function ModelInner({
  url,
  xOff,
  yOff,
  pivot,
  initYaw,
  initPitch,
  autoRotate,
  autoRotateSpeed,
  fadeIn,
  onLoaded,
}: {
  url: string;
  xOff: number;
  yOff: number;
  pivot: THREE.Vector3;
  initYaw: number;
  initPitch: number;
  autoRotate: boolean;
  autoRotateSpeed: number;
  fadeIn: boolean;
  onLoaded?: () => void;
}) {
  const outer = useRef<THREE.Group>(null!);
  const inner = useRef<THREE.Group>(null!);
  const { camera } = useThree();

  const vel = useRef({ x: 0, y: 0 });
  const tHov = useRef({ x: 0, y: 0 });
  const cHov = useRef({ x: 0, y: 0 });
  const tPar = useRef({ x: 0, y: 0 });
  const cPar = useRef({ x: 0, y: 0 });

  const { scene } = useGLTF(url);
  const content = useMemo(() => scene.clone(), [scene]);

  const pivotW = useRef(new THREE.Vector3());

  useLayoutEffect(() => {
    if (!content || !inner.current || !outer.current) return;

    const g = inner.current;
    g.updateWorldMatrix(true, true);

    const box = new THREE.Box3().setFromObject(g);
    const sphere = box.getBoundingSphere(new THREE.Sphere());
    const s = 1 / (sphere.radius * 2);
    g.position.set(-sphere.center.x, -sphere.center.y, -sphere.center.z);
    g.scale.setScalar(s);

    g.traverse((o: any) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
        if (fadeIn && o.material) {
          o.material = o.material.clone();
          o.material.transparent = true;
          o.material.opacity = 0;
        }
      }
    });

    g.getWorldPosition(pivotW.current);
    pivot.copy(pivotW.current);
    outer.current.rotation.set(initPitch, initYaw, 0);

    if (fadeIn) {
      let t = 0;
      const id = setInterval(() => {
        t += 0.05;
        const v = Math.min(t, 1);
        g.traverse((o: any) => {
          if (o.isMesh && o.material) o.material.opacity = v;
        });
        invalidate();
        if (v >= 1) {
          clearInterval(id);
          onLoaded?.();
        }
      }, 16);
      return () => clearInterval(id);
    } else {
      onLoaded?.();
    }
  }, [content]);

  useEffect(() => {
    if (isTouch) return;
    const mm = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      tPar.current = { x: -nx * PARALLAX_MAG, y: -ny * PARALLAX_MAG };
      tHov.current = { x: ny * HOVER_MAG, y: nx * HOVER_MAG };
      invalidate();
    };
    window.addEventListener('pointermove', mm);
    return () => window.removeEventListener('pointermove', mm);
  }, []);

  useFrame((_, dt) => {
    if (!outer.current) return;
    let need = false;

    const phx = cHov.current.x;
    const phy = cHov.current.y;
    cHov.current.x += (tHov.current.x - cHov.current.x) * HOVER_EASE;
    cHov.current.y += (tHov.current.y - cHov.current.y) * HOVER_EASE;
    cPar.current.x += (tPar.current.x - cPar.current.x) * PARALLAX_EASE;
    cPar.current.y += (tPar.current.y - cPar.current.y) * PARALLAX_EASE;

    const ndc = pivotW.current.clone().project(camera);
    ndc.x += xOff + cPar.current.x;
    ndc.y += yOff + cPar.current.y;
    outer.current.position.copy(ndc.unproject(camera));

    outer.current.rotation.x += cHov.current.x - phx;
    outer.current.rotation.y += cHov.current.y - phy;

    if (autoRotate) {
      outer.current.rotation.y += autoRotateSpeed * dt;
      need = true;
    }

    outer.current.rotation.y += vel.current.x;
    outer.current.rotation.x += vel.current.y;
    vel.current.x *= INERTIA;
    vel.current.y *= INERTIA;
    if (Math.abs(vel.current.x) > 1e-4 || Math.abs(vel.current.y) > 1e-4) need = true;

    if (
      Math.abs(cPar.current.x - tPar.current.x) > 1e-4 ||
      Math.abs(cPar.current.y - tPar.current.y) > 1e-4 ||
      Math.abs(cHov.current.x - tHov.current.x) > 1e-4 ||
      Math.abs(cHov.current.y - tHov.current.y) > 1e-4
    )
      need = true;

    if (need) invalidate();
  });

  return (
    <group ref={outer}>
      <group ref={inner}>
        <primitive object={content} />
      </group>
    </group>
  );
}

/* ── Public ModelViewer component ──────────────────────────────── */
export interface ModelViewerProps {
  url?: string;
  modelPath?: string;
  width?: number | string;
  height?: number | string;
  modelXOffset?: number;
  modelYOffset?: number;
  defaultRotationX?: number;
  defaultRotationY?: number;
  defaultZoom?: number;
  minZoomDistance?: number;
  maxZoomDistance?: number;
  enableManualZoom?: boolean;
  ambientIntensity?: number;
  keyLightIntensity?: number;
  fillLightIntensity?: number;
  rimLightIntensity?: number;
  environmentPreset?: string;
  fadeIn?: boolean;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  showScreenshotButton?: boolean;
  enableMouseParallax?: boolean;
  enableHoverRotation?: boolean;
  enableManualRotation?: boolean;
  onModelLoaded?: () => void;
}

const ModelViewer = ({
  url,
  modelPath,
  width = '100%',
  height = '100%',
  modelXOffset = 0,
  modelYOffset = 0,
  defaultRotationX = -50,
  defaultRotationY = 20,
  defaultZoom = 0.6,
  minZoomDistance = 0.5,
  maxZoomDistance = 10,
  enableManualZoom = false,
  ambientIntensity = 0.4,
  keyLightIntensity = 1,
  fillLightIntensity = 0.5,
  rimLightIntensity = 0.8,
  environmentPreset = 'city',
  fadeIn = false,
  autoRotate = false,
  autoRotateSpeed = 0.3,
  showScreenshotButton: _showScreenshotButton = false,
  onModelLoaded,
}: ModelViewerProps) => {
  const targetUrl = url || modelPath || '';
  const pivot = useRef(new THREE.Vector3()).current;
  const camZ = Math.min(Math.max(defaultZoom, minZoomDistance), maxZoomDistance);

  if (!targetUrl) return null;

  return (
    <div style={{ width, height, position: 'relative', overflow: 'hidden' }}>
      <Canvas
        shadows
        frameloop="demand"
        camera={{ fov: 50, position: [0, 0, camZ], near: 0.01, far: 100 }}
        style={{ background: 'transparent' }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.outputColorSpace = THREE.SRGBColorSpace;
        }}
      >
        {environmentPreset !== 'none' && (
          <Environment preset={environmentPreset as any} background={false} />
        )}
        <ambientLight intensity={ambientIntensity} />
        <directionalLight position={[5, 5, 5]} intensity={keyLightIntensity} castShadow />
        <directionalLight position={[-5, 2, 5]} intensity={fillLightIntensity} />
        <directionalLight position={[0, 4, -5]} intensity={rimLightIntensity} />
        <ContactShadows position={[0, -0.5, 0]} opacity={0.25} scale={10} blur={2} />

        <Suspense fallback={<Loader />}>
          <ModelInner
            url={targetUrl}
            xOff={modelXOffset}
            yOff={modelYOffset}
            pivot={pivot}
            initYaw={deg2rad(defaultRotationX)}
            initPitch={deg2rad(defaultRotationY)}
            autoRotate={autoRotate}
            autoRotateSpeed={autoRotateSpeed}
            fadeIn={fadeIn}
            onLoaded={onModelLoaded}
          />
        </Suspense>

        {!isTouch && (
          <DesktopControls
            pivot={pivot}
            min={minZoomDistance}
            max={maxZoomDistance}
            zoomEnabled={enableManualZoom}
          />
        )}
      </Canvas>
    </div>
  );
};

export default ModelViewer;
