import lottie, { AnimationItem } from "lottie-web"; // Import AnimationItem type
import { useEffect, useRef } from "react";

const LottieAnimation = () => {
     const containerRef = useRef<HTMLDivElement>(null);

     useEffect(() => {
          const loadLottie = async () => {
               if (containerRef.current) {
                    const animation: AnimationItem = lottie.loadAnimation({
                         container: containerRef.current,
                         renderer: "svg",
                         loop: true,
                         autoplay: true,
                         path: "/bZ2ZkJX3Ug.json",
                    });
               }
          };

          loadLottie();
     }, []);

     return (
          <div className="w-full flex items-center justify-center">
               <div className="w-[50%] lottie-animation" ref={containerRef}></div>
          </div>
     );
};

export default LottieAnimation;
