import { useCallback } from "react";
import { useRouter } from "next/router";

const ScanKtp = () => {
  const router = useRouter();

  const onFormClick = useCallback(() => {
    router.push("/form");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-screen overflow-hidden text-center text-13xl text-white font-mukta">
      <img
        className="absolute top-[0px] left-[0px] w-[50%] h-screen object-cover"
        alt=""
        src="/screenshot-20230614-at-431-1@2x.png"
      />
      <div className="absolute top-[100vh] left-[50%] [background:linear-gradient(180deg,_rgba(13,_86,_42,_0.65),_rgba(13,_86,_42,_0))] w-[50%] h-screen [transform:_rotate(180deg)] [transform-origin:0_0]" />
      <div className="absolute top-[67%] w-1/2">
        <b className="mx-auto text-5xl leading-[30px] text-center">
          <p className="m-0">PEMERINTAH DESA BALANTANG</p>
          <p className="m-0">KEC. MALILI KAB. LUWU TIMUR</p>
        </b>
      </div>
      <div className="absolute top-[54%] w-1/2">
        <b className="mx-auto text-13xl leading-[46px]">
          LAYANAN MANDIRI DESA (LA-MANDI)
        </b>
      </div>
      <div className="absolute top-[21%] w-1/2">
        <img
          className="mx-auto w-[200px] h-[200px] object-cover"
          alt=""
          src="/image-3@2x.png"
        />
      </div>
      <div className="absolute top-[59%] w-1/2">
        <img
          className="mx-auto w-[341.33px] h-[5.33px]"
          alt=""
          src="/line-1.svg"
        />
      </div>
      <div className="absolute right-0 w-1/2 h-full flex items-center justify-center">
        <div className="mx-auto text-left">
          <b className="text-21xl leading-[46px] text-gray-200">
            Selamat Datang
          </b>
          <div className="text-5xl leading-[46px] text-darkslategray">
            Silahkan isi data anda terlebih dahulu.
          </div>

          <div className="w-[550px] flex flex-row items-start justify-start space-x-3 text-darkgray mt-5">
            <div className="flex-1 rounded-3xs bg-honeydew flex flex-row py-4 px-6 items-center justify-center text-darkolivegreen border-[1px] border-solid border-darkolivegreen">
              <div className="relative w-[164px] h-[53px]">
                <img
                  className="absolute top-[10.5px] left-[0px] w-8 h-8 overflow-hidden"
                  alt=""
                  src="/bodyscanfill2.svg"
                />
                <div className="absolute top-[0px] left-[42px]">Scan KTP</div>
              </div>
            </div>
            <div
              className="flex-1 rounded-3xs bg-whitesmoke-300 flex flex-row py-4 px-6 items-center justify-center gap-[10px] cursor-pointer"
              onClick={onFormClick}
            >
              <img
                className="relative w-8 h-8 overflow-hidden shrink-0"
                alt=""
                src="/fileeditfill1.svg"
              />
              <div className="relative">Isi form</div>
            </div>
          </div>
          <div className="text-center">
            <img className="w-[330px]" alt="" src="/group-301.svg" />
          </div>
          <div className="text-5xl text-center text-black">
            Silahkan tempelkan KTP anda pada
            <br />
            alat scan dibawah
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanKtp;
