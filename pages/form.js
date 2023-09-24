import { useCallback } from "react";
import { useRouter } from "next/router";

const Form = () => {
  const router = useRouter();

  const onTabScanClick = useCallback(() => {
    router.push("/scan");
  }, [router]);

  const onMenuClick = useCallback(() => {
    router.push("/menu");
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

          <div className="w-[550px] flex flex-row items-start justify-start space-x-3 text-darkolivegreen mt-5">
            <div
              className="flex-1 rounded-3xs bg-whitesmoke-300 flex flex-row py-4 px-6 items-center justify-center cursor-pointer text-darkgray"
              onClick={onTabScanClick}
            >
              <img
                className="relative w-8 h-8 overflow-hidden shrink-0"
                alt=""
                src="/bodyscanfill3.svg"
              />
              <div className="relative">Scan KTP</div>
            </div>
            <div className="flex-1 rounded-3xs bg-honeydew flex flex-row py-4 px-6 items-center justify-center border-[1px] border-solid border-darkolivegreen">
              <img
                className="relative w-8 h-8 overflow-hidden shrink-0"
                alt=""
                src="/fileeditfill2.svg"
              />
              <div className="relative">Isi form</div>
            </div>
          </div>
          <div className="rounded-3xs bg-whitesmoke-300 w-[550px] flex flex-row my-4 py-4 px-6 box-border items-start justify-start text-left text-5xl text-dimgray">
            <div className="flex-1 relative leading-[46px]">
              <input
                type="text"
                className="w-full outline-none border-none bg-transparent py-4 text-5xl"
                placeholder="Masukkan nama (Sesuai KTP)"
              />
            </div>
          </div>
          <div className="rounded-3xs bg-whitesmoke-300 w-[550px] flex flex-row py-4 px-6 box-border items-start justify-start text-left text-5xl text-dimgray">
            <div className="flex-1 relative leading-[46px]">
              <input
                type="number"
                className="w-full outline-none border-none bg-transparent py-4 text-5xl"
                placeholder="Masukkan No KTP"
              />
            </div>
          </div>

          <div
            onClick={onMenuClick}
            className="rounded-3xs bg-darkolivegreen w-[550px] flex flex-row mt-4 p-6 box-border items-start justify-start cursor-pointer"
          >
            <b className="flex-1 relative leading-[46px] text-center">Masuk</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
