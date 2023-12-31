import Head from "next/head";

const MainMenu = () => {
  return (
    <>
      <Head>
        <title>Main Menu</title>
      </Head>
      <div className="text-left text-13xl text-gray-400 font-mukta">
        <div className="absolute top-[35px] rounded-xl flex flex-row items-center justify-start gap-[10px] text-9xl">
          <img
            className="relative left-[50px] w-[90px] h-[90px] object-cover"
            alt=""
            src="/image-32@2x.png"
          />
          <div className="relative left-[50px] leading-[31px]">
            <p className="m-0 font-semibold">Pemerintah Desa Balantang</p>
            <p className="m-0 text-[17px]">
              Kec. Malili Kab. Luwu Timur - Provinsi Sulawesi Selatan
            </p>
          </div>
        </div>
        <div className="absolute top-[40px] right-10 rounded-[100px] bg-ivory flex flex-row py-4 px-8 items-start justify-start">
          <div className="relative leading-[41px] font-semibold text-5xl">
            Kamis, 24 Januari 2023 12:00 PM
          </div>
        </div>
        <div className="absolute top-[145px] left-[0px] bg-darkolivegreen box-border w-screen h-[70px] overflow-hidden text-center text-white border-b-[1px] border-solid border-lightgray">
          <div className="absolute top-[10px] left-[50px] leading-[46px] text-[25px] font-semibold">
            Selamat Datang, #nama pengguna
          </div>
        </div>
        <div className="absolute top-[250px] left-[50px] text-[20px] text-black">
          Silahkan memilih layanan mandiri berikut :
        </div>
        <div className="absolute top-[300px] left-[50px] w-[90%] bg-transparent overflow-x-auto flex flex-row items-start justify-start gap-[36px] text-9xl">
          <div className="flex-1 flex-nowrap">
            <div className="rounded-xl bg-white shadow-[0px_4px_25px_rgba(13,_30,_39,_0.1)] flex flex-col p-8 items-start justify-center gap-4">
              <img
                className="relative w-[100px] h-[100px]"
                alt=""
                src="/group-22.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <b className="self-stretch relative leading-[46px]">
                  CETAK SURAT
                </b>
                <div className="self-stretch relative text-[14px] leading-[140%] font-medium text-gray-100">
                  Lorem ipsum dolor sit amet consectetur. Pulvinar nunc aenean
                  enim eleifend bibendum duis ut. Eget leo viverra lectus id.
                  Cras.
                </div>
              </div>
              <div className="self-stretch rounded-3xs bg-darkolivegreen flex flex-row py-2 px-8 items-center justify-center text-[14px] text-white">
                <b className="relative leading-[30px]">Pilih</b>
              </div>
            </div>
          </div>
          <div className="flex-1 flex-nowrap">
            <div className="rounded-xl bg-white shadow-[0px_4px_25px_rgba(13,_30,_39,_0.1)] flex flex-col p-8 items-start justify-center gap-4">
              <img
                className="relative w-[100px] h-[100px]"
                alt=""
                src="/group-23.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <b className="self-stretch relative leading-[46px]">
                  CEK PAJAK
                </b>
                <div className="self-stretch relative text-[14px] leading-[140%] font-medium text-gray-100">
                  Lorem ipsum dolor sit amet consectetur. Pulvinar nunc aenean
                  enim eleifend bibendum duis ut. Eget leo viverra lectus id.
                  Cras.
                </div>
              </div>
              <div className="self-stretch rounded-3xs bg-darkolivegreen flex flex-row py-2 px-8 items-center justify-center text-[14px] text-white">
                <b className="relative leading-[30px]">Pilih</b>
              </div>
            </div>
          </div>
          <div className="flex-1 flex-nowrap">
            <div className="rounded-xl bg-white shadow-[0px_4px_25px_rgba(13,_30,_39,_0.1)] flex flex-col p-8 items-start justify-center gap-4">
              <img
                className="relative w-[100px] h-[100px]"
                alt=""
                src="/group-24.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <b className="self-stretch relative leading-[46px]">BANSOS</b>
                <div className="self-stretch relative text-[14px] leading-[140%] font-medium text-gray-100">
                  Lorem ipsum dolor sit amet consectetur. Pulvinar nunc aenean
                  enim eleifend bibendum duis ut. Eget leo viverra lectus id.
                  Cras.
                </div>
              </div>
              <div className="self-stretch rounded-3xs bg-darkolivegreen flex flex-row py-2 px-8 items-center justify-center text-[14px] text-white">
                <b className="relative leading-[30px]">Pilih</b>
              </div>
            </div>
          </div>
          <div className="flex-1 flex-nowrap">
            <div className="rounded-xl bg-white shadow-[0px_4px_25px_rgba(13,_30,_39,_0.1)] flex flex-col p-8 items-start justify-center gap-4">
              <img
                className="relative w-[100px] h-[100px]"
                alt=""
                src="/group-25.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <b className="self-stretch relative leading-[46px]">
                  PROFILE DESA
                </b>
                <div className="self-stretch relative text-[14px] leading-[140%] font-medium text-gray-100">
                  Lorem ipsum dolor sit amet consectetur. Pulvinar nunc aenean
                  enim eleifend bibendum duis ut. Eget leo viverra lectus id.
                  Cras.
                </div>
              </div>
              <div className="self-stretch rounded-3xs bg-darkolivegreen flex flex-row py-2 px-8 items-center justify-center text-[14px] text-white">
                <b className="relative leading-[30px]">Pilih</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
