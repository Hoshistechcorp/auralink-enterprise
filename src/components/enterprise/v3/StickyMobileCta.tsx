import { useEffect, useState } from "react";
import ClaimLinkBar from "./ClaimLinkBar";

const StickyMobileCta = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`sm:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-[#FFF7ED]/95 backdrop-blur-md border-t-2 border-[#111] transition-transform ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <ClaimLinkBar variant="sticky" placeholder="yourbusiness" />
    </div>
  );
};

export default StickyMobileCta;
