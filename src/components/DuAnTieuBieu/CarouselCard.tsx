export const CarouselCard = ({ imageUrl, title, year, department }: any) => {
  return (
    <div className="rounded overflow-hidden group cursor-pointer">
      <div className="mb-6 text-center h-[250px]">
        <img src={imageUrl} alt="title" className="h-full cover-full inline-block" />
      </div>
      <div className="mb-2">
        <div className="content-semi-18 transition-colors delay-150 duration-300 ease-in-out group-hover:text-information h-[52px]">{title}</div>
      </div>
      <div className="content-medium-16 flex gap-2">
        <span className="">{year}</span>
        <span className="">-</span>
        <span className="text-sub-2">{department}</span>
      </div>
    </div>
  );
};
