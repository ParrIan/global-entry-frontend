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
      <div className="w-full h-[0vh]"></div> {/*Title will go here make the 0 a + # */}
      <div className="gallery flex">
        <div className="left w-1/2">
          <div className="desktopContent mx-auto w-4/5">
            <div className="desktopContentSection min-h-screen flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Manual Refreshing Doesn't Work</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Constantly checking the CBP website is time-consuming and frustrating, and you'll likely miss available slots.
              </p>
            </div>
            <div className="desktopContentSection min-h-screen flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Appointments Are Unpredictable</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                New slots can appear at any time of day or night, making them nearly impossible to catch manually.
              </p>
            </div>
            <div className="desktopContentSection min-h-screen flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Competition Is Fierce</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                When appointments do become available, hundreds of people are competing for the same slots.
              </p>
            </div>
          </div>
        </div>
        <div className="right h-screen w-1/2 flex flex-col justify-center">
          {/* Mobile content */}
          <div className="mobileContent hidden w-[80vw]">
            <div className="mobilePhoto bg-red-600 w-[80vw] h-[80vw] mt-12 rounded-2xl"></div>
            <h3 className="text-2xl font-bold my-4">Manual Refreshing Doesn't Work</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Constantly checking the CBP website is time-consuming and frustrating, and you'll likely miss available slots.
            </p>

            <div className="mobilePhoto bg-green-600 w-[80vw] h-[80vw] mt-12 rounded-2xl"></div>
            <h3 className="text-2xl font-bold my-4">Appointments Are Unpredictable</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              New slots can appear at any time of day or night, making them nearly impossible to catch manually.
            </p>

            <div className="mobilePhoto bg-blue-500 w-[80vw] h-[80vw] mt-12 rounded-2xl"></div>
            <h3 className="text-2xl font-bold my-4">Competition Is Fierce</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              When appointments do become available, hundreds of people are competing for the same slots.
            </p>
          </div>

          {/* Desktop photos */}
          <div className="desktopPhotos w-[40vw] h-[40vw] rounded-2xl relative overflow-hidden shadow-lg">
            <div className="desktopPhoto bg-red-600 absolute inset-0"></div>
            <div className="desktopPhoto bg-green-600 absolute inset-0"></div>
            <div className="desktopPhoto bg-blue-500 absolute inset-0"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-[0vh]"></div>
    </>
  );
};

export default ProblemScroll;