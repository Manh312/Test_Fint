import Image from 'next/image';

const BentoGrid = () => {
  return (
    <div className="w-full max-lg:max-w-[700px] mx-auto">
      {/* Desktop layout */}
      <div className="hidden lg:grid grid-cols-[clamp(250px,16.5625vw,318px)_clamp(180px,11.9792vw,230px)] gap-[clamp(16px,0.8333rem_+_0.8889vw,24px)] justify-center">
        <div className="flex flex-col gap-[clamp(16px,0.8333rem_+_0.8889vw,24px)]">
          <Image
            className="object-cover rounded-xl w-full aspect-[318/213]"
            src="/assets/fint/career-opportunities/culture/culture1.png"
            alt="Company culture 1"
            width={318}
            height={213}
          />
          <Image
            className="object-cover rounded-xl w-full aspect-[318/362]"
            src="/assets/fint/career-opportunities/culture/culture3.png"
            alt="Company culture 3"
            width={318}
            height={362}
          />
        </div>
        <div className="pt-[clamp(24px,1rem_+_2.6667vw,75px)]">
          <Image
            className="object-cover rounded-xl w-full aspect-[230/379]"
            src="/assets/fint/career-opportunities/culture/culture2.jpg"
            alt="Company culture 2"
            width={230}
            height={379}
          />
        </div>
      </div>

      {/* Tablet and Mobile layout */}
      <div className="lg:hidden">
        {/* Container with 5:3 height ratio */}
        <div className="grid grid-rows-[5fr_3fr] gap-[clamp(12px,0.75rem_+_1vw,20px)]">
          {/* First row - Image 1 (full width) */}
          <div className="w-full overflow-hidden rounded-xl">
            <Image
              className="object-cover object-center scale-110 w-full aspect-[5/3]"
              src="/assets/fint/career-opportunities/culture/culture12.jpg"
              alt="Company culture 1"
              width={318}
              height={213}
            />
          </div>

          {/* Second row - Images 2 and 3 (side by side) */}
          <div className="grid grid-cols-2 gap-[clamp(12px,0.75rem_+_1vw,20px)] h-full">
            {/* Image 2 */}
            <div className="w-full h-full">
              <Image
                className="object-cover rounded-xl w-full h-full"
                src="/assets/fint/career-opportunities/culture/culture22.jpg"
                alt="Company culture 2"
                width={230}
                height={379}
              />
            </div>

            {/* Image 3 */}
            <div className="w-full h-full">
              <Image
                className="object-cover rounded-xl w-full h-full object-[60%_20%]"
                src="/assets/fint/career-opportunities/culture/culture32.png"
                alt="Company culture 3"
                width={318}
                height={362}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
