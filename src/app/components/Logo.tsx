'use client';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Plumb Line Symbol */}
      <path
        d="M20 10 L20 40 M15 35 L20 40 L25 35"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="20"
        cy="10"
        r="3"
        fill="currentColor"
        className="text-primary"
      />
      
      {/* Text */}
      <text
        x="40"
        y="30"
        className="text-2xl font-bold fill-current"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        PlumbLine
        <tspan className="text-primary">HR</tspan>
      </text>
    </svg>
  );
} 