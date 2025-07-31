import Image from 'next/image';

type PhotoGalleryProps = {
  leftTop: [string, string]; // 2 ảnh nhỏ top-left
  leftBottom: string; // 1 ảnh lớn bottom-left
  rightLarge: string; // 1 ảnh lớn bên phải span 2 hàng
  rightSmall: [string, string]; // 2 ảnh nhỏ bên phải, stack 2 hàng
};

export default function PhotoGallery({
  leftTop,
  leftBottom,
  rightLarge,
  rightSmall,
}: PhotoGalleryProps) {
  return (
    <div className="w-full max-lg:max-w-[600px]">
      {/* Mobile/Tablet layout - stacked vertically */}
      <div className="flex flex-col gap-6 lg:hidden">
        {/* Left block - top on mobile */}
        <div className="grid grid-cols-2 gap-4 h-[300px]">
          {/* Top row - 2 small images */}
          <div className="relative">
            <Image
              src={`/assets/fint/career-opportunities/${leftTop[0]}`}
              alt={leftTop[0]}
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="relative">
            <Image
              src={`/assets/fint/career-opportunities/${leftTop[1]}`}
              alt={leftTop[1]}
              fill
              className="object-cover rounded-xl"
            />
          </div>
          {/* Bottom row - 1 large image spanning 2 cols */}
          <div className="relative col-span-2">
            <Image
              src={`/assets/fint/career-opportunities/${leftBottom}`}
              alt={leftBottom}
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Right block - bottom on mobile */}
        <div className="grid grid-cols-2 gap-4 h-[300px]">
          {/* Large image spanning 2 rows */}
          <div className="relative row-span-2">
            <Image
              src={`/assets/fint/career-opportunities/${rightLarge}`}
              alt={rightLarge}
              fill
              className="object-cover object-center rounded-xl"
            />
          </div>
          {/* Small image 1 */}
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src={`/assets/fint/career-opportunities/${rightSmall[0]}`}
              alt={rightSmall[0]}
              fill
              className="object-cover scale-110"
            />
          </div>
          {/* Small image 2 */}
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src={`/assets/fint/career-opportunities/${rightSmall[1]}`}
              alt={rightSmall[1]}
              fill
              className="object-cover scale-110"
            />
          </div>
        </div>
      </div>

      {/* Desktop layout - side by side */}
      <div className="hidden lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-6 lg:h-[500px]">
        {/* Left top - 2 ảnh nhỏ */}
        <div className="relative">
          <Image
            src={`/assets/fint/career-opportunities/${leftTop[0]}`}
            alt={leftTop[0]}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="relative">
          <Image
            src={`/assets/fint/career-opportunities/${leftTop[1]}`}
            alt={leftTop[1]}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Right large - spans 2 rows */}
        <div className="relative row-span-2">
          <Image
            src={`/assets/fint/career-opportunities/${rightLarge}`}
            alt={rightLarge}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Right small top */}
        <div className="relative">
          <Image
            src={`/assets/fint/career-opportunities/${rightSmall[0]}`}
            alt={rightSmall[0]}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Left bottom - spans 2 cols */}
        <div className="relative col-span-2">
          <Image
            src={`/assets/fint/career-opportunities/${leftBottom}`}
            alt={leftBottom}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Right small bottom */}
        <div className="relative">
          <Image
            src={`/assets/fint/career-opportunities/${rightSmall[1]}`}
            alt={rightSmall[1]}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
