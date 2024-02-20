import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      const t1 = gsap.timeline();
      const boxes = gsap.utils.toArray(".title");
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(boxes, {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(boxes, {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });
    },
    { scope: container }
  );
  return (
    <div className="relative" ref={container}>
      <div
        id="intro-slider"
        className="absolute top-0 left-0 bg-gray-200 w-full h-screen p-10 flex flex-col gap-4"
      >
        <p className="title text-5xl text-gray-900">Fron-End</p>
        <p className="title text-5xl text-gray-900">Fron-End</p>
        <p className="title text-5xl text-gray-900">Fron-End</p>
      </div>
      <div className="bg-gray-950 h-screen flex flex-col justify-center items-center">
        <h1 id="welcome" className="text-gray-100 text-5xl">
          Welcome.
        </h1>
      </div>
    </div>
  );
};

export default App;
