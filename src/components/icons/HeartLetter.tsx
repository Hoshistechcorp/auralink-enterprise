import { forwardRef, type SVGProps } from "react";

/** Envelope with a heart-shaped flap — "Love Letter" icon.
 *  forwardRef so it slots in wherever a LucideIcon is expected. */
const HeartLetter = forwardRef<
  SVGSVGElement,
  SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number | string }
>(({ size = 24, strokeWidth = 2, ...props }, ref) => (
  <svg
    ref={ref}
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
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M12 13.2 L4 7.6 c-1.2 -.85 -1.3 -2.6 -.2 -3.6 1 -.9 2.6 -.7 3.4 .3 L12 9 l4.8 -4.7 c.8 -1 2.4 -1.2 3.4 -.3 1.1 1 1 2.75 -.2 3.6 Z" />
  </svg>
));

HeartLetter.displayName = "HeartLetter";

export default HeartLetter;
