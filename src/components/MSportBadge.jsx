const M_COLORS = {
  lightBlue: '#6CACE4',
  darkBlue: '#1C69D4',
  red: '#E7222E',
};

function MSportStripes({ height = 48, className = '' }) {
  const width = height * 0.55;
  const gap = height * 0.06;
  const stripeW = (width - gap * 2) / 3;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className={className}
      aria-hidden="true"
    >
      {[M_COLORS.lightBlue, M_COLORS.darkBlue, M_COLORS.red].map((fill, i) => (
        <polygon
          key={fill}
          points={`
            ${i * (stripeW + gap)},${height}
            ${i * (stripeW + gap) + stripeW * 0.22},0
            ${i * (stripeW + gap) + stripeW * 0.78},0
            ${i * (stripeW + gap) + stripeW},${height}
          `}
          fill={fill}
        />
      ))}
    </svg>
  );
}

function MSportBadge({
  size = 120,
  variant = 'dark',
  showStripes = true,
  showLetter = true,
  className = '',
}) {
  const height = size * 0.42;
  const stripeWidth = size * 0.38;
  const letterColor = variant === 'dark' ? '#ffffff' : '#0c1018';

  return (
    <svg
      viewBox="0 0 200 84"
      width={size}
      height={height}
      className={className}
      role="img"
      aria-label="M Sport"
    >
      <defs>
        <linearGradient id="m-sport-shine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.12" />
        </linearGradient>
      </defs>

      {showStripes && (
        <g transform="skewX(-12)">
          <rect x="8" y="10" width="28" height="64" rx="1" fill={M_COLORS.lightBlue} />
          <rect x="40" y="10" width="28" height="64" rx="1" fill={M_COLORS.darkBlue} />
          <rect x="72" y="10" width="28" height="64" rx="1" fill={M_COLORS.red} />
          <rect x="8" y="10" width="92" height="64" rx="1" fill="url(#m-sport-shine)" />
        </g>
      )}

      {showLetter && (
        <text
          x={showStripes ? 118 : 20}
          y="62"
          fill={letterColor}
          fontSize="58"
          fontWeight="800"
          fontStyle="italic"
          fontFamily="'Plus Jakarta Sans', 'Arial Black', system-ui, sans-serif"
          letterSpacing="-2"
        >
          M
        </text>
      )}
    </svg>
  );
}

export { MSportBadge, MSportStripes, M_COLORS };
export default MSportBadge;
