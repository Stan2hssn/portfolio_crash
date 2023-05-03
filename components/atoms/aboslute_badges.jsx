import Container from "@templates/Container";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { classNames } from "@utils/class_names";

export default function AbsoluteBadges() {
  const animationTextIn = "animationTextIn";
  const animationTextOut = "animationTextOut";
  const animationRound = "animationRound";
  const copyOut = "copyOut";
  const copyIn = "copyIn";

  const tl = gsap.timeline({ paused: true });
  const tl2 = gsap.timeline({ paused: true });
  const tl3 = gsap.timeline({ paused: true });

  useEffect(() => {
    animation();
  }, []);

  function animation() {
    tl2
      .to(".animationRound", {
        scale: 1.8,
        duration: 0.4,
        ease: "power2.inOut",
      })
      .to(".secondAnimation", {
        scale: 0.9,
        duration: 0.2,
        ease: "power2.inOut",
      });
    tl.to(".animationTextIn", {
      y: "-1rem",
      opacity: "0",
      gap: "1.5rem",
      duration: 0.3,
      ease: "power2.inOut",
    })
      .to(".animationTextIn", {
        display: "none",
        duration: 0,
      })
      .to(".animationTextOut", {
        display: "flex",
        duration: 0,
      })
      .to(".animationTextOut", {
        gap: "0.5rem",
        opacity: "1",
        y: "0rem",
        duration: 0.3,
        ease: "power2.inOut",
      });
  }

  function GsapIn() {
    tl.play();
    tl2.play();
    console.log("enter");
  }

  function GsapOut() {
    tl.reverse();
    tl2.reverse();
    tl3.reverse();
    console.log("out");
  }
  async function Clicked() {
    await navigator.clipboard.writeText("stan.husson@edu.gobelins.fr");

    tl3
      .to(".copyOut", {
        y: "0.5rem",
        opacity: "0",
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(".copyOut", {
        display: "none",
        duration: 0,
      })
      .to(".copyIn", {
        display: "flex",
        duration: 0,
      })
      .to(".copyIn", {
        y: "0rem",
        opacity: "1",
        duration: 0.3,
        ease: "power2.inOut",
      });
    tl3.play();
  }

  return (
    <Container
      size="lg"
      expend="absolute sm:fixed flex-row w-full mb-8 sm:mb-16 bottom-0 left-0 justify-start z-[900]"
      intern="flex justify-end sm:justify-start w-full"
    >
      <div
        className="relative flex flex-col w-40 h-40 rounded-full items-center justify-center z-[100] cursor-pointer"
        onMouseEnter={GsapIn}
        onMouseLeave={GsapOut}
        onClick={Clicked}
      >
        <div className="flex flex-col z-[100]">
          <div
            className={classNames(
              "relative flex flex-col gap-2 items-center",
              animationTextIn
            )}
          >
            <p
              className={classNames(
                "flex font-sans text-description_sm text-center text-content-grey_900 uppercase z-[100]",
                animationTextIn
              )}
            >
              Open <br /> to work
            </p>
            <p
              className={classNames(
                "flex font-sans text-body text-center text-content-grey_900 uppercase z-[100]",
                animationTextIn
              )}
            >
              -Aug 2023
            </p>
          </div>
        </div>
        <div className="flex flex-col z-[100]">
          <div
            className={classNames(
              "relative flex-col items-center hidden gap-6 opacity-0 translate-y-4",
              animationTextOut
            )}
          >
            <p
              className={classNames(
                "flex font-sans text-description_sm text-center text-content-grey_900 uppercase z-100 translate-y-6",
                animationTextOut
              )}
            >
              stan.husson
              <br /> @edu.gobelins.fr
            </p>
            <div
              className={classNames(
                "flex flex-col items-center h-4 font-sans text-body text-center text-content-grey_900 uppercase z-100 translate-y-4 ",
                animationTextOut
              )}
            >
              <p
                className={classNames(
                  "flex font-sans text-body text-center text-content-grey_900 uppercase z-100",
                  animationTextOut,
                  copyOut
                )}
              >
                Click to copy
              </p>
              <p
                className={classNames(
                  "hidden opacity-0 font-sans text-body text-center text-semantic-purple uppercase z-100 translate-y-2 whitespace-nowrap",
                  copyIn
                )}
              >
                Copied to clipboard
              </p>
            </div>
          </div>
        </div>
        <span className="absolute flex self-center w-40 h-40 rounded-full z-0 pointer-events-none secondAnimation">
          <div
            className={classNames(
              "absolute flex items-center justify-center w-40 h-40"
            )}
          >
            <svg
              className="origin-center animate-spinSlow1"
              width="126"
              height="140"
              viewBox="0 0 176 190"
            >
              <ellipse
                cx="85.063"
                cy="96.6351"
                rx="85.063"
                ry="96.6351"
                transform="matrix(0.871356 0.490652 -0.48698 0.873413 60.8088 -31.3015)"
                fill="#EEEEEE"
                fillOpacity="0.3"
              />
            </svg>
          </div>

          <div
            className={classNames(
              "absolute flex items-center justify-center w-40 h-40",
              animationRound
            )}
          >
            <svg
              className="origin-center animate-spinSlow2"
              width="141"
              height="140"
              viewBox="0 0 251 220"
            >
              <ellipse
                cx="125.119"
                cy="109.937"
                rx="109.340"
                ry="125.119"
                transform="rotate(90 125.119 109.937)"
                fill="#EEEEEE"
                fillOpacity="0.5"
              />
            </svg>
          </div>

          <div
            className={classNames(
              "absolute flex items-center justify-center w-40 h-40",
              animationRound
            )}
          >
            <svg
              className="origin-center animate-spinSlow3"
              width="138"
              height="144"
              viewBox="0 0 248 224"
            >
              <ellipse
                cx="109.402"
                cy="125.339"
                rx="109.402"
                ry="125.339"
                transform="matrix(-0.340509 0.939515 -0.940418 -0.345502 278.621 52.5823)"
                fill="#EEEEEE"
                fillOpacity="0.7"
              />
            </svg>
          </div>

          <div
            className={classNames(
              "absolute flex items-center justify-center w-40 h-40",
              animationRound
            )}
          >
            <svg
              className="origin-center animate-spinSlow4"
              width="135"
              height="137"
              viewBox="0 0 237 250"
            >
              <ellipse
                cx="118.233"
                cy="124.904"
                rx="117.921"
                ry="124.904"
                fill="#EEEEEE"
              />
            </svg>
          </div>
        </span>
      </div>
    </Container>
  );
}
