import { useCallback } from "react";
import { useRouter } from "next/router";

const Start = () => {
  const router = useRouter();

  const onScanClick = useCallback(() => {
    router.push("/scan");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-screen overflow-hidden text-left text-13xl text-white font-mukta">
      <img
        className="absolute top-[0px] left-[0px] w-full h-screen object-cover"
        alt=""
        src="/screenshot-20230614-at-431-11@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(13,_86,_42,_0.5),_rgba(32,_85,_26,_0.48)_52.02%,_rgba(255,_199,_0,_0.32))] w-full h-screen" />
      <div className="absolute top-[52px] left-[50px] rounded-xl bg-darkolivegreen flex flex-row py-4 px-4 items-center justify-start gap-[14px]">
        <img
          className="relative w-[106px] h-[106px] object-cover"
          alt=""
          src="/image-33@2x.png"
        />
        <div className="relative leading-[31px]">
          <p className="m-0 font-semibold">Pemerintah Desa Balantang</p>
          <p className="m-0 text-[17px]">
            Kec. Malili Kab. Luwu Timur - Provinsi Sulawesi Selatan
          </p>
        </div>
      </div>
      <div
        className="absolute bottom-5 bg-white w-screen h-[80px] flex flex-row py-2.5 px-[50px] box-border items-center justify-end gap-[30px] cursor-pointer text-33xl text-darkolivegreen"
        onClick={onScanClick}
      >
        <b className="relative text-13xl">KLIK UNTUK MEMULAI</b>
        <img
          className="relative w-[55px] h-[55px] overflow-hidden shrink-0"
          alt=""
          src="/arrowrightcirclefill.svg"
        />
      </div>
      <div className="absolute top-[296px] right-[53px] text-[52px] font-semibold text-right">
        Selamat Datang
      </div>
      <div className="absolute top-[372px] right-[53px] text-[33px] font-semibold text-right">
        di Layanan Mandiri (La-Mandi)
      </div>
      <img
        className="absolute bottom-0 left-[96px] w-[450px] h-[450px] object-cover"
        alt=""
        src="/image-2@2x.png"
      />
    </div>
  );
};

export default Start;
