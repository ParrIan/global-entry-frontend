import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ProblemScroll.css"

const ProblemScroll = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)");
    const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");
    gsap.set(photos, {yPercent: 101});
    const allPhotos = gsap.utils.toArray(".desktopPhoto");

    // Create media query
    let mm = gsap.matchMedia();

    // Desktop setup
    mm.add("(min-width: 600px)", () => {
      console.log("desktop");

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right"
      });

      // Create scrolltrigger for each details section
      details.forEach((detail, index) => {
        let headline = detail.querySelector("h3");
        let animation = gsap.timeline()
          .to(photos[index], {yPercent: 0})
          .set(allPhotos[index], {autoAlpha: 0});

        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: animation,
          scrub: true,
          markers: false
        });
      });

      return () => {
        console.log("mobile");
      };
    });

    // Cleanup
    return () => {
      mm.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <>
      <div className="w-full h-[10vh] bg-gray-50 flex items-center justify-center">
        <div className="inline-block px-5 py-2.5 bg-white rounded-full border-3 border-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          <span className="text-sm font-bold text-gray-900">😤 The Problem</span>
        </div>
      </div>

      <div className="gallery flex bg-gray-50">
        <div className="left w-1/2">
          <div className="desktopContent mx-auto w-4/5">
            <div className="desktopContentSection min-h-screen flex flex-col justify-center">
              <div className="flex items-start mb-4">
                <span className="text-6xl mr-4">😫</span>
              </div>
              <h3 className="text-3xl font-black mb-4 text-gray-900">Manual Refreshing Doesn't Work</h3>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Constantly checking the CBP website is time-consuming and frustrating. You'll spend hours hitting refresh, and still miss available slots when they appear.
              </p>
            </div>

            <div className="desktopContentSection min-h-screen flex flex-col justify-center">
              <div className="flex items-start mb-4">
                <span className="text-6xl mr-4">🎲</span>
              </div>
              <h3 className="text-3xl font-black mb-4 text-gray-900">Appointments Are Unpredictable</h3>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                New slots can appear at any time of day or night. Without 24/7 monitoring, you're playing a guessing game you can't win.
              </p>
            </div>

            <div className="desktopContentSection min-h-screen flex flex-col justify-center">
              <div className="flex items-start mb-4">
                <span className="text-6xl mr-4">🏃‍♂️</span>
              </div>
              <h3 className="text-3xl font-black mb-4 text-gray-900">Competition Is Fierce</h3>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                When appointments do become available, hundreds of people are competing for the same slots. Every second counts!
              </p>
            </div>
          </div>
        </div>

        <div className="right h-screen w-1/2 flex flex-col justify-center">
          {/* Mobile content */}
          <div className="mobileContent hidden w-[80vw]">
            <div className="mobilePhoto bg-white w-[80vw] h-[80vw] mt-12 rounded-3xl border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
              <span className="text-8xl">😫</span>
            </div>
            <h3 className="text-3xl font-black my-4 text-gray-900">Manual Refreshing Doesn't Work</h3>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              Constantly checking the CBP website is time-consuming and frustrating. You'll spend hours hitting refresh, and still miss available slots when they appear.
            </p>

            <div className="mobilePhoto bg-white w-[80vw] h-[80vw] mt-12 rounded-3xl border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
              <span className="text-8xl">🎲</span>
            </div>
            <h3 className="text-3xl font-black my-4 text-gray-900">Appointments Are Unpredictable</h3>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              New slots can appear at any time of day or night. Without 24/7 monitoring, you're playing a guessing game you can't win.
            </p>

            <div className="mobilePhoto bg-white w-[80vw] h-[80vw] mt-12 rounded-3xl border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
              <span className="text-8xl">🏃‍♂️</span>
            </div>
            <h3 className="text-3xl font-black my-4 text-gray-900">Competition Is Fierce</h3>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              When appointments do become available, hundreds of people are competing for the same slots. Every second counts!
            </p>
          </div>

          {/* Desktop photos - these will be where your colorful animations go */}
          <div className="desktopPhotos w-[40vw] h-[40vw] rounded-3xl relative overflow-hidden shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] border-4 border-gray-900">
            <div className="desktopPhoto bg-white absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <span className="text-8xl mb-4 block">😫</span>
                <p className="font-bold text-xl text-gray-900">Manual refresh animation here</p>
              </div>
            </div>
            <div className="desktopPhoto bg-white absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <span className="text-8xl mb-4 block">🎲</span>
                <p className="font-bold text-xl text-gray-900">Unpredictable timing animation here</p>
              </div>
            </div>
            <div className="desktopPhoto bg-white absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <span className="text-8xl mb-4 block">🏃‍♂️</span>
                <p className="font-bold text-xl text-gray-900">Competition animation here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[10vh] bg-gray-50"></div>
    </>
  );
};

export default ProblemScroll;