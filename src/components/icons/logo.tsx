import * as React from 'react';

const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 40"
    preserveAspectRatio="xMinYMid meet"
    style={{ overflow: 'visible' }}
    {...props}
  >
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <text
      x="0"
      y="30"
      fontFamily="'Poppins', sans-serif"
      fontSize="30"
      fontWeight="600"
      fill="url(#logo-gradient)"
    >
      Success Point
    </text>
  </svg>
);

export default Logo;
