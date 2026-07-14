// Fundo decorativo fixo: teias de aranha nos cantos + textura halftone de quadrinho.
// Puramente CSS/SVG (sem imagens) para manter o carregamento leve no mobile.

function WebCorner({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="white" strokeOpacity="0.16" strokeWidth="1.5">
        <path d="M0,0 L200,200" />
        <path d="M0,40 L140,200" />
        <path d="M0,80 L90,200" />
        <path d="M0,120 L45,200" />
        <path d="M40,0 L200,140" />
        <path d="M80,0 L200,90" />
        <path d="M120,0 L200,45" />
        <path d="M0,0 Q100,20 200,0" />
        <path d="M0,0 Q90,90 0,200" />
        <path d="M0,0 Q90,90 200,0" />
        <path d="M15,15 Q90,90 15,180" />
        <path d="M30,30 Q95,95 30,160" />
        <path d="M15,15 Q90,90 180,15" />
        <path d="M30,30 Q95,95 160,30" />
      </g>
    </svg>
  );
}

export default function WebBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-halftone opacity-40" />
      <WebCorner className="absolute -left-6 -top-6 h-40 w-40 sm:h-56 sm:w-56" />
      <WebCorner className="absolute -right-6 -top-6 h-40 w-40 rotate-90 sm:h-56 sm:w-56" />
      <WebCorner className="absolute -bottom-6 -left-6 h-40 w-40 -rotate-90 sm:h-56 sm:w-56" />
      <WebCorner className="absolute -bottom-6 -right-6 h-40 w-40 rotate-180 sm:h-56 sm:w-56" />
    </div>
  );
}
