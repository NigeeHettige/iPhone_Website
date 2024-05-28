import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateWithGSAP } from "../utils/animation";
import { exploreVideo } from "../utils";

const Features = () => {
  const videoRef = useRef();
  useGSAP(() => {
    animateWithGSAP("#features_title", { y: 0, opacity: 1 });
  }, []);
  return (
    <section className="h-full common-padding bg-zinc relative owerflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 className="section-heading" id="features_title">
            Explore the full story
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">iPhone</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              Forged in titanium
            </h2>
          </div>
          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
                muted
                autoPlay
                preload="none"
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col w-full relative">
                <div className="feature-video-container">
                    <div className=""></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
