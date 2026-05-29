import type { SVGProps } from "react";

/** Envelope with a heart-shaped flap — "Love Letter" icon. */
const HeartLetter = ({
  size = 24,
  strokeWidth = 2,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number | string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Envelope body */}
    <rect x="3" y="7" width="18" height="13" rx="2" />
    {/* Heart-shaped flap rising from the top of the envelope */}
    <path d="M3 8.2 L12 14 L21 8.2" opacity="0" />
    <path d="M12 13.2 L4 7.6 c-1.2 -.85 -1.3 -2.6 -.2 -3.6 1 -.9 2.6 -.7 3.4 .3 L12 9 l4.8 -4.7 c.8 -1 2.4 -1.2 3.4 -.3 1.1 1 1 2.75 -.2 3.6 Z" />
  </svg>
);

export default HeartLetter;
