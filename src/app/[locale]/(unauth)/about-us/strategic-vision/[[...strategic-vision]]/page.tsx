// import Image from 'next/image';

// import FImage from '@/components/shared/FImage';
// import Container from '@/components/ui/Container';

// const StrategicVision = () => {
//   return (
//     <>
//       <Container isResponsiveWidth parentClassName="bg-soft-yellow-gradient overflow-hidden lg:relative" className="py-[100px]">
//         <div className="grid grid-cols-12 gap-6">
//           <div className="col-span-12 lg:col-span-5 flex flex-col gap-4 pr-4 content-regular-18 text-neutral-2">
//             <div className="flex items-center gap-4">
//               <FImage
//                 src="fint/about-us/jewel-like-value-icon.svg"
//                 width={40}
//                 height={40}
//                 alt="jewellike value icon"
//               />
//               <h2 className="title-h2 uppercase text-neutral-1">
//                 giá trị
//                 {' '}
//                 <span className="bg-gradient-to-r from-[#FFC014] to-[#F37124] bg-clip-text text-transparent">cốt lõi</span>
//               </h2>
//             </div>

//             <p>
//               FINT hướng đến 3 giá trị nền tảng nhất đó là
//               {' '}
//               <strong>Hiệu quả - Hạnh phúc - Trường tồn.</strong>
//             </p>

//             <div className="flex flex-col gap-[6px]">
//               <h5 className="content-bold-18 text-main-2">Hiệu quả</h5>
//               <p>FINT theo đuổi hiệu quả đến tận cùng – trong từng dòng code, mỗi cuộc họp, mọi quyết định và hành động. Hiệu quả không chỉ là kết quả nhanh chóng, mà là cách sử dụng tối ưu nguồn lực để tạo ra giá trị bền vững, thực chất và có tác động rõ ràng.</p>
//             </div>

//             <div className="flex flex-col gap-[6px]">
//               <h5 className="content-bold-18 text-main-2">Hạnh phúc</h5>
//               <p>FINT tin rằng một doanh nghiệp chỉ thật sự phát triển khi mỗi cá nhân được cân bằng, được sống đúng với giá trị của mình. Hạnh phúc tại FINT sự ghi nhận, lộ trình phát phát triển, được là chính mình , được đồng hành trong một môi trường tử tế, cởi mở và truyền cảm hứng.</p>
//             </div>

//             <div className="flex flex-col gap-[6px]">
//               <h5 className="content-bold-18 text-main-2">Trường tồn</h5>
//               <p>FINT không tạo dựng những giá trị ngắn hạn. Mọi sản phẩm, con người và quyết định tại FINT đều hướng đến sự bền vững – trong tư duy, văn hóa và chiến lược. Trường tồn là khi chúng tôi phát triển cùng cộng đồng, song hành với quốc gia và vẫn giữ nguyên tinh thần ngày đầu dù đi đến đâu.</p>
//             </div>
//           </div>
//         </div>

//         {/* Image positioned absolutely to extend to screen edge */}
//         <div className="lg:absolute lg:right-0 lg:bottom-0 lg:w-1/2 w-full lg:max-w-none max-w-full lg:translate-y-0 translate-y-[50px]">
//           <Image
//             className="w-full h-auto object-contain p-[129px_40.23px_0_42px] max-lg:p-0"
//             src="/assets/fint/value-tree.svg"
//             alt="value tree"
//             width={974.77}
//             height={722.13}
//           />
//         </div>
//       </Container>
//       <Container className="flex mt-[100px] mb-[60px]">
//         <div className="flex flex-col w-1/2 gap-4 pr-12">
//           <p className="content-regular-18 text-neutral-2">FINT luôn nỗ lực hết mình để tập hợp những con người có nền tảng đạo đức - trí tuệ - nghị lực và đam mê kinh doanh - công nghệ - tài chính. Nhằm mục đích xây dựng một tổ chức kinh doanh học tập và làm việc hiệu quả, luôn không ngừng đổi mới và sáng tạo, phát triển và hạnh phúc. Đem lại nhiều giá trị cho xã hội, cho tập thể và cho chính các thành viên.</p>
//           <div className="flex items-center gap-4">
//             <FImage src="fint/about-us/purpose-icon.svg" width={40} height={40} alt="purpose" />
//             <h2 className="title-h2 text-neutral-1 uppercase">sứ mệnh</h2>
//           </div>
//         </div>
//         <div className="flex flex-col items-end w-1/2 gap-4">
//           <div className="w-[518px]">
//             <div className="flex items-center gap-4">
//               <FImage src="fint/about-us/vision-icon.svg" width={40} height={40} alt="vision" />
//               <h2 className="title-h2 text-neutral-1 uppercase">tầm nhìn</h2>
//             </div>
//             <p className="content-regular-18 text-neutral-2">FINT khát vọng trở thành một doanh nghiệp toàn cầu, học tập, hiệu quả, hạnh phúc và trường tồn. Đạt doanh thu 1000 tỷ với quy mô 300 nhân sự trở lên trong lĩnh vực công nghệ và đầu tư tài chính vào năm 2030.</p>
//           </div>
//         </div>
//       </Container>
//       <div className="w-full h-full overflow-hidden">
//         <FImage src="fint/vision.png" alt="Vision" width={974.77} height={722.13} className="w-full h-auto object-contain scale-125" />
//       </div>
//     </>
//   );
// };

// export default StrategicVision;
import Image from 'next/image';

import FImage from '@/components/shared/FImage';
import Container from '@/components/ui/Container';

const StrategicVision = () => {
  return (
    <>
      <Container
        isResponsiveWidth
        parentClassName="bg-soft-yellow-gradient overflow-hidden lg:relative"
        className="py-[clamp(3.75rem,2.5rem+6.25vw,6.25rem)]"
      >
        <div className="grid grid-cols-12 gap-[clamp(1rem,0.5rem+2.5vw,1.5rem)]">
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-[clamp(1rem,0.75rem+1.25vw,1.5rem)] pr-[clamp(1rem,0.75rem+1.25vw,1.5rem)] content-regular-16 xl:content-regular-18 text-neutral-2">
            <div className="flex items-center gap-[clamp(1rem,0.75rem+1.25vw,1.5rem)]">
              <FImage
                src="fint/about-us/jewel-like-value-icon.svg"
                width={40}
                height={40}
                alt="jewellike value icon"
                className="w-[clamp(2rem,1.5rem+2.5vw,2.5rem)] h-[clamp(2rem,1.5rem+2.5vw,2.5rem)]"
              />
              <h2 className="title-h3 md:title-h2 uppercase text-neutral-1">
                giá trị
                {' '}
                <span className="bg-gradient-to-r from-[#FFC014] to-[#F37124] bg-clip-text text-transparent">cốt lõi</span>
              </h2>
            </div>

            <p>
              FINT hướng đến 3 giá trị nền tảng nhất đó là
              {' '}
              <strong>Hiệu quả - Hạnh phúc - Trường tồn.</strong>
            </p>

            <div className="flex flex-col gap-[clamp(0.25rem,0.125rem+0.625vw,0.5rem)]">
              <h5 className="content-bold-16 xl:content-bold-18 text-main-2">Hiệu quả</h5>
              <p>FINT theo đuổi hiệu quả đến tận cùng – trong từng dòng code, mỗi cuộc họp, mọi quyết định và hành động. Hiệu quả không chỉ là kết quả nhanh chóng, mà là cách sử dụng tối ưu nguồn lực để tạo ra giá trị bền vững, thực chất và có tác động rõ ràng.</p>
            </div>

            <div className="flex flex-col gap-[clamp(0.25rem,0.125rem+0.625vw,0.5rem)]">
              <h5 className="content-bold-16 xl:content-bold-18 text-main-2">Hạnh phúc</h5>
              <p>FINT tin rằng một doanh nghiệp chỉ thật sự phát triển khi mỗi cá nhân được cân bằng, được sống đúng với giá trị của mình. Hạnh phúc tại FINT sự ghi nhận, lộ trình phát phát triển, được là chính mình , được đồng hành trong một môi trường tử tế, cởi mở và truyền cảm hứng.</p>
            </div>

            <div className="flex flex-col gap-[clamp(0.25rem,0.125rem+0.625vw,0.5rem)]">
              <h5 className="content-bold-16 xl:content-bold-18 text-main-2">Trường tồn</h5>
              <p>FINT không tạo dựng những giá trị ngắn hạn. Mọi sản phẩm, con người và quyết định tại FINT đều hướng đến sự bền vững – trong tư duy, văn hóa và chiến lược. Trường tồn là khi chúng tôi phát triển cùng cộng đồng, song hành với quốc gia và vẫn giữ nguyên tinh thần ngày đầu dù đi đến đâu.</p>
            </div>
          </div>
        </div>

        {/* Image positioned absolutely to extend to screen edge */}
        <div className="lg:absolute lg:right-0 lg:bottom-0 lg:w-1/2 w-full lg:max-w-none max-w-full lg:translate-y-0 translate-y-[clamp(2rem,1.5rem+2.5vw,3.125rem)]">
          <Image
            className="w-full h-auto object-contain p-[clamp(4rem,3rem+5vw,8.0625rem)_clamp(1.5rem,1rem+2.5vw,2.5rem)_0_clamp(1.5rem,1rem+2.5vw,2.625rem)] max-lg:p-0"
            src="/assets/fint/value-tree.svg"
            alt="value tree"
            width={974.77}
            height={722.13}
          />
        </div>
      </Container>

      <Container isResponsiveWidth className="flex max-md:flex-col max-md:gap-[clamp(2rem,1.5rem+1.5vw,3rem)] mt-[clamp(3.75rem,2.5rem+6.25vw,6.25rem)] mb-[clamp(2.5rem,1.75rem+3.75vw,3.75rem)]">
        <div className="flex flex-col max-sm:max-w-11/12 max-md:max-w-4/5 md:w-1/2 gap-[clamp(1rem,0.75rem+1.25vw,1.5rem)] md:pr-[clamp(2rem,1.5rem+1.5vw,3rem)]">
          <p className="max-md:order-2 content-regular-16 xl:content-regular-18 text-neutral-2">FINT luôn nỗ lực hết mình để tập hợp những con người có nền tảng đạo đức - trí tuệ - nghị lực và đam mê kinh doanh - công nghệ - tài chính. Nhằm mục đích xây dựng một tổ chức kinh doanh học tập và làm việc hiệu quả, luôn không ngừng đổi mới và sáng tạo, phát triển và hạnh phúc. Đem lại nhiều giá trị cho xã hội, cho tập thể và cho chính các thành viên.</p>
          <div className="max-md:order-1 flex items-center gap-[clamp(1rem,0.75rem+1.25vw,1.5rem)]">
            <FImage
              src="fint/about-us/purpose-icon.svg"
              width={40}
              height={40}
              alt="purpose"
              className="w-[clamp(2rem,1.5rem+2.5vw,2.5rem)] h-[clamp(2rem,1.5rem+2.5vw,2.5rem)]"
            />
            <h2 className="title-h3 md:title-h2 text-neutral-1 uppercase">sứ mệnh</h2>
          </div>
        </div>
        <div className="flex flex-col items-end md:w-1/2 gap-[clamp(1rem,0.75rem+1.25vw,1.5rem)]">
          <div className="w-full max-w-[clamp(20rem,15rem+25vw,32.375rem)]">
            <div className="flex items-center max-md:justify-end gap-[clamp(1rem,0.75rem+1.25vw,1.5rem)]">
              <FImage
                src="fint/about-us/vision-icon.svg"
                width={40}
                height={40}
                alt="vision"
                className="w-[clamp(2rem,1.5rem+2.5vw,2.5rem)] h-[clamp(2rem,1.5rem+2.5vw,2.5rem)]"
              />
              <h2 className="title-h3 md:title-h2 text-neutral-1 uppercase">tầm nhìn</h2>
            </div>
            <p className="content-regular-16 xl:content-regular-18 text-neutral-2">FINT khát vọng trở thành một doanh nghiệp toàn cầu, học tập, hiệu quả, hạnh phúc và trường tồn. Đạt doanh thu 1000 tỷ với quy mô 300 nhân sự trở lên trong lĩnh vực công nghệ và đầu tư tài chính vào năm 2030.</p>
          </div>
        </div>
      </Container>

      <div className="w-full h-full overflow-hidden">
        <FImage
          src="fint/vision.png"
          alt="Vision"
          width={974.77}
          height={722.13}
          className="w-full h-auto object-cover max-md:object-top max-md:scale-x-[175%] max-md:scale-y-[120%] max-md:origin-top"
        />
      </div>
    </>
  );
};

export default StrategicVision;
