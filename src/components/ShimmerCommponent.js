const ShimmerCommponent = () => {
  return (
  <div className="flex flex-wrap justify-center w-10/12 py-[5px] mx-auto mt-[175px]">
    {Array.from({ length: 8 }).map((_, i) => (
      <div key={i} className="w-[225px] h-[250px] rounded-t-[15px] m-1 mx-5">
        <div className="bg-slate-200 w-full h-[140px] rounded-t-[15px] mb-1 animate-pulse"></div>
        <div className="bg-slate-200 w-full h-[50px] py-2 px-1 animate-pulse"></div>
      </div>
    ))}
  </div>
);
};

export default ShimmerCommponent;
