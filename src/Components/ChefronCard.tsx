export const ChefronCard = ({ icon }) => {
  return (
    <div className="flex justify-center flex-wrap items-center">
      <div
        style={{
          clipPath:
            "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
        }}
        className="bg-green-200 h-25 lg:min-h-40 w-35 lg:min-w-50 flex justify-center items-center"
      >
        <img src={icon} alt="" className="object-cover scale-50 lg:scale-90" />
      </div>
    </div>
  );
};
export const ChefronCardText = ({ text, icon, index }) => {
  return (
    <div
      className={`relative flex flex-col justify-center h-60 max-w-60 lg:min-h-100 rounded-lg  transition-transform transform hover:scale-105`}
    >
      <h2
        className={`lg:absolute ${
          index % 2 == 0 ? "lg:top-0" : "lg:bottom-0"
        } left-1/2 lg:-translate-x-1/2 z-1 text-center`}
      >
        {text}
      </h2>
      <div
        className={`absolute ${
          index % 2 == 0 ? "top-1/12" : "bottom-1/12"
        } left-1/2 -translate-x-1/2 bg-black w-px h-16 z-0 hidden lg:block `}
      ></div>
      <ChefronCard icon={icon} />
    </div>
  );
};
