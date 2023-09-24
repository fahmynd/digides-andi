import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/router";

const Bumper = () => {
  const router = useRouter();
  const videoRef = useRef(null);

  const onFrameContainerClick = useCallback(() => {
    router.push("/start");
  }, [router]);

  useEffect(() => {
    // Play the video when the component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Handle autoplay error, if any
        console.error("Autoplay error:", error);
      });
    }
  }, []);

  return (
    <>
      <div className="relative bg-mintcream w-full h-screen overflow-hidden text-left text-33xl text-white font-mukta">
        <video
          ref={videoRef}
          className="rounded-3xs w-screen h-screen object-cover"
          alt=""
          src="https://samplelib.com/lib/preview/mp4/sample-30s.mp4"
          autoplay
          muted
          loop
        >
          Your browser does not support the video tag.
        </video>
        <div
          className="absolute bottom-0 bg-darkolivegreen w-screen h-[100px] flex flex-row py-2.5 px-8 box-border items-center justify-center gap-[30px] cursor-pointer"
          onClick={onFrameContainerClick}
        >
          <b className="relative">KLIK UNTUK MEMULAI</b>
          <img
            className="relative w-[55px] h-[55px] overflow-hidden shrink-0"
            alt=""
            src="/arrowrightcirclefill1.svg"
          />
        </div>
      </div>
    </>
  );
};

export default Bumper;
