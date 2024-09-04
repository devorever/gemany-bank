export const Hero = () => {
  return (
    <>
      <div
        className=" bg-white w-full h-full py-[80px] flex justify-center items-center"
        style={{
          backgroundImage: 'url(https://cdn.weltsparen.de/app/uploads/2024/08/de_dwm_2560x800-mobile-02-badge-01-final-73-badge-small-neu-kopie.jpg)',
          backgroundSize: 'auto auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-[768px]">
          <p className="lg:text-start text-center lg:text-[50px] md:text-[45px] text-[35px] text-gray-600 font-semibold">
            Vermögen effizient anlegen
          </p>
          <p className="lg:text-[30px] md:text-[28px] text-[24px] lg:text-start text-center  text-gray-600 mt-4">
            Investieren Sie in Ihre finanzielle Zukunft.
            Mehr als 800.000 europäische Kunden – bereits jede
            bzw. jeder fünfte nutzt auch unser Investmentangebot.
          </p>
          <div className="w-full flex lg:justify-start justify-center">
            <button className="lg:text-[26px] sm:text-[20px] text-[18px] bg-[#004b8c] hover:bg-[#5d81a0] text-white font-normal p-4 rounded-sm mt-8">
              Jetzt Konto eröffnen
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

