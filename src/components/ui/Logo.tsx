interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  showTagline?: boolean
  onClick?: () => void
  useImage?: boolean
}

export function VessultLogoMark({ size = 36, className = '' }: { size?: number; className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="Vessult Logo"
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: 'contain' }}
      className={className}
    />
  )
}

export function Logo({
  className = '',
  size = 'md',
  showTagline = false,
  onClick,
  useImage = true,
}: LogoProps) {
  const heightMap = {
    sm: 'h-8 md:h-9',
    md: 'h-10 md:h-12',
    lg: 'h-16 md:h-20',
  }

  const markSizeMap = {
    sm: 30,
    md: 40,
    lg: 64,
  }

  if (useImage) {
    return (
      <div
        onClick={onClick}
        className={`inline-flex items-center gap-3 cursor-pointer group select-none ${className}`}
      >
        <img
          src="/logo.png"
          alt="Vessult Systems"
          className={`${heightMap[size]} w-auto object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]`}
        />
      </div>
    )
  }

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 cursor-pointer group select-none ${className}`}
    >
      <div className="relative">
        <VessultLogoMark
          size={markSizeMap[size]}
          className="transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span
            className="font-bold tracking-[0.18em] leading-none text-white transition-colors group-hover:text-sky-400"
            style={{
              fontFamily: "'Stack Sans Text', sans-serif",
              fontSize: size === 'sm' ? '14px' : size === 'md' ? '18px' : '26px',
            }}
          >
            VESSULT
          </span>
        </div>
        <div className="flex items-center justify-between gap-1 mt-1">
          <span className="h-px bg-slate-600 flex-1" />
          <span
            className="tracking-[0.38em] leading-none uppercase text-slate-400"
            style={{
              fontFamily: "'Stack Sans Text', sans-serif",
              fontSize: size === 'sm' ? '8px' : size === 'md' ? '10px' : '14px',
            }}
          >
            SYSTEMS
          </span>
          <span className="h-px bg-slate-600 flex-1" />
        </div>
        {showTagline && (
          <div
            className="text-[9px] tracking-[0.25em] text-slate-400 mt-1 uppercase"
            style={{ fontFamily: "'Stack Sans Text', sans-serif" }}
          >
            AI | VISION SYSTEMS | IoT
          </div>
        )}
      </div>
    </div>
  )
}
