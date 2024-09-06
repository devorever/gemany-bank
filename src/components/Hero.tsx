export const Hero = () => {
  return (
    <>
      <div
        className=" bg-white w-full h-full py-[80px] flex justify-center items-center"
        style={{
          backgroundImage: 'url(img/deutsche-bank-great-winchester-street-london-ec2n-2d-uk-W4Y0DA.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-[768px]">
          {/* <p className="lg:text-start text-center lg:text-[50px] md:text-[45px] text-[35px] text-gray-600 font-semibold">
            Vermögen effizient anlegen
          </p> */}



          <p className="lg:text-[40px] md:text-[38px] text-[34px] lg:text-start text-center font-semibold  text-[#101851] mt-4">
          Festgeld-Vergleich: Top Zinsen 2024
          </p>
          {/* <div className="w-full flex lg:justify-start justify-center">
            <button className="lg:text-[26px] sm:text-[20px] text-[18px] bg-[#004b8c] hover:bg-[#5d81a0] text-white font-normal p-4 rounded-sm mt-8">
              Jetzt Konto eröffnen
            </button>
          </div> */}

        </div>
      </div>
    </>
  );
}

