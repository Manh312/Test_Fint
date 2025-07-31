// import { useTranslations } from 'next-intl';

// import bgImage from '/public/assets/fint/about-us/bg-letter.png';
// import FImage from '@/components/shared/FImage';
// import Container from '@/components/ui/Container';

// const LetterFromCEO = () => {
//   const t = useTranslations('Pages');
//   return (
//     <>
//       <div
//         className="w-full flex items-center justify-center aspect-[64/15] bg-cover bg-center bg-no-repeat after:bg-[rgba(11,5,72,0.7)]"
//         style={{
//           backgroundImage: `url(${bgImage.src})`,
//         }}
//       >
//         {/* Text content */}
//         <div className="title-h2 text-white uppercase z-10 text-center">
//           {t('letter')}
//         </div>
//       </div>
//       <Container parentClassName="bg-soft-yellow-gradient" className="-mt-[3.75rem] grid grid-cols-12 gap-6 p-[4rem_5rem_3rem] rounded-2xl bg-white">
//         <div className="col-span-7 pt-[5px] -mr-6 content-regular-18 text-neutral-2">
//           <p className="">
//             <strong>Thân gửi</strong>
//             {' '}
//             Quý Khách hàng và Quý Đối tác.
//             <br />
//             <br />

//             Lời đầu tiên, Công ty Cổ phần FINT Việt Nam xin gửi đến Quý Khách hàng, Quý Đối tác lời chào trân trọng, cảm ơn sâu sắc vì sự tin tưởng và ủng hộ của Quý vị trong suốt thời gian qua.
//             <br />
//             <br />

//             Công ty Cổ phần FINT Việt Nam là đơn vị hoạt động trong lĩnh vực công nghệ, cung cấp các giải pháp về công nghệ và chuyển đổi số. Trong suốt quá trình hoạt động, chúng tôi đã không ngừng phát triển và đã khẳng định vị thế của mình trên thị trường và trở thành đối tác đáng tin cậy.
//             <br />
//             <br />

//             Tại FINT chúng tôi hội tụ những con người giàu
//             {' '}
//             <strong>khát vọng, đam mê và cùng chung một định hướng</strong>
//             . Chúng tôi tự hoàn thiện bản thân từng ngày để trở lên "tốt hơn" từ đó đóng góp sức lực nhỏ bé của mình để mang lại nhiều giá trị lớn hơn cho xã hội.
//             <br />
//             <br />

//             Với quan điểm
//             {' '}
//             <strong>"Kinh doanh là hoạt động kiếm tiền thông qua việc phụng sự xã hội bằng các dịch vụ và sản phẩm tốt lành của doanh nghiệp"</strong>
//             {' '}
//             FINT luôn đặt lợi ích của khách hàng lên hàng đầu. Chính vì vậy chúng tôi đã có được những thành công nhất định với hơn 20 khách hàng là các Bộ/Ban/Ngành và hơn 50 dự án về công nghệ.
//             <br />
//             <br />

//             FINT Việt Nam luôn hướng đến một tổ chức
//             {' '}
//             <strong>"Hiệu quả - Hạnh phúc - Trường tồn"</strong>
//             , không chỉ vì lợi ích riêng của mình mà còn nhằm tạo ra giá trị thực sự cho tất cả các bên liên quan. Chúng tôi rất mong tiếp tục nhận được sự tin tưởng và đồng hành từ Quý Khách hàng, Quý Đối tác trong chặng đường sắp tới.
//             <br />
//             <br />

//             <strong>Trân trọng cảm ơn, kính chúc Quý Khách hàng và Quý đối tác sức khỏe, thành công.</strong>
//           </p>
//           <div className="float-right pt-4 gap-2.5 flex flex-col items-center">
//             <strong>Trân trọng</strong>
//             <strong className="text-main-2">CEO - Trần Hải Nam</strong>
//           </div>
//         </div>
//         <div className="pl-12 col-span-5 gap-4 text-center">
//           <FImage aspectRatio={27 / 29} src="fint/about-us/avt_NamTH.png" alt="avt_NamTH" width={405} height={435} />
//           <div className="gap-1.5 content-semi-18">
//             <p className="content-bold-24 text-neutral-1 font-no-liga">Ông Trần Hải Nam</p>
//             <p className="content-semi-16 text-main-1 uppercase">CEO FINT VIỆT NAM</p>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default LetterFromCEO;
import { useTranslations } from 'next-intl';

import bgImage from '/public/assets/fint/about-us/bg-letter.png';
import FImage from '@/components/shared/FImage';
import Container from '@/components/ui/Container';

const LetterFromCEO = () => {
  const t = useTranslations('Pages');
  return (
    <>
      <div
        className="w-full flex items-center justify-center aspect-[32/15] md:aspect-[48/15] lg:aspect-[64/15] bg-cover bg-center bg-no-repeat after:bg-[rgba(11,5,72,0.7)]"
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        {/* Text content */}
        <div className="title-h2 text-white uppercase z-10 text-center px-[clamp(1rem,0.5rem+2.5vw,1rem)]">
          {t('letter')}
        </div>
      </div>
      <Container
        parentClassName="bg-soft-yellow-gradient px-[clamp(1rem,0.5rem+2.5vw,2rem)]"
        className="
          -mt-[clamp(2rem,1.25rem+3.75vw,3.75rem)]
          lg:grid lg:grid-cols-12
          gap-[clamp(rem,0.5rem+2.5vw,1.5rem)]
          p-[clamp(1rem,0rem+5vw,4rem)_clamp(0.75rem,0rem+3.5vw,5rem)_clamp(2rem,1rem+5vw,3rem)]
          rounded-[clamp(0.75rem,0.5rem+1.25vw,2rem)]
          bg-white
        "
      >
        <div className="lg:hidden flex flex-col gap-[clamp(1.5rem,1rem+2.5vw,2.5rem)]">
          <div>
            {/* Content and Image Container */}
            <div className="flex flex-col sm:flex-row gap-[clamp(1rem,0.5rem+2.5vw,2rem)] sm:items-start">
              {/* Content Text - Mobile */}
              <div className="flex-1 content-regular-16 text-neutral-2">
                <p>
                  <div className="float-right w-[clamp(12rem,10rem+10vw,16rem)] max-sm:-mr-[clamp(0.75rem,0rem+3.5vw,5rem)] flex flex-col items-center gap-[clamp(0.75rem,0.5rem+1.25vw,1rem)] text-center flex-shrink-0 sm:mt-[clamp(0rem,0rem+1vw,1rem)]">
                    <div className="w-full max-w-[clamp(10rem,8rem+10vw,14rem)] sm:max-w-none">
                      <FImage
                        aspectRatio={27 / 29}
                        src="fint/about-us/avt_NamTH.png"
                        alt="avt_NamTH"
                        width={405}
                        height={435}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="flex flex-col gap-[clamp(0.25rem,0.125rem+0.625vw,0.5rem)]">
                      <p className="content-bold-20 text-neutral-1 font-no-liga">
                        Ông Trần Hải Nam
                      </p>
                      <p className="content-semi-14 text-main-1 uppercase">
                        CEO FINT VIỆT NAM
                      </p>
                    </div>
                  </div>
                  <strong>Thân gửi</strong>
                  {' '}
                  Quý Khách hàng và Quý Đối tác,
                  <br />
                  <br />

                  Lời đầu tiên, Công ty Cổ phần FINT Việt Nam xin gửi đến Quý Khách hàng, Quý Đối tác lời chào trân trọng, cảm ơn sâu sắc vì sự tin tưởng và ủng hộ của Quý vị trong suốt thời gian qua.
                  <br />
                  <br />

                  Công ty Cổ phần FINT Việt Nam là đơn vị hoạt động trong lĩnh vực công nghệ, cung cấp các giải pháp về công nghệ và chuyển đổi số. Trong suốt quá trình hoạt động, chúng tôi đã không ngừng phát triển và đã khẳng định vị thế của mình trên thị trường và trở thành đối tác đáng tin cậy.
                  <br />
                  <br />

                  Tại FINT chúng tôi hội tụ những con người giàu
                  {' '}
                  <strong>khát vọng, đam mê và cùng chung một định hướng</strong>
                  . Chúng tôi tự hoàn thiện bản thân từng ngày để trở lên "tốt hơn" từ đó đóng góp sức lực nhỏ bé của mình để mang lại nhiều giá trị lớn hơn cho xã hội.
                  <br />
                  <br />

                  Với quan điểm
                  {' '}
                  <strong>"Kinh doanh là hoạt động kiếm tiền thông qua việc phụng sự xã hội bằng các dịch vụ và sản phẩm tốt lành của doanh nghiệp"</strong>
                  {' '}
                  FINT luôn đặt lợi ích của khách hàng lên hàng đầu. Chính vì vậy chúng tôi đã có được những thành công nhất định với hơn 20 khách hàng là các Bộ/Ban/Ngành và hơn 50 dự án về công nghệ.
                  <br />
                  <br />

                  FINT Việt Nam luôn hướng đến một tổ chức
                  {' '}
                  <strong>"Hiệu quả - Hạnh phúc - Trường tồn"</strong>
                  , không chỉ vì lợi ích riêng của mình mà còn nhằm tạo ra giá trị thực sự cho tất cả các bên liên quan. Chúng tôi rất mong tiếp tục nhận được sự tin tưởng và đồng hành từ Quý Khách hàng, Quý Đối tác trong chặng đường sắp tới.
                  <br />
                  <br />

                  <strong>Trân trọng cảm ơn, kính chúc Quý Khách hàng và Quý đối tác sức khỏe, thành công.</strong>
                </p>
              </div>
            </div>

            {/* Signature - Mobile */}
            <div className="float-right flex flex-col items-center gap-[clamp(0.5rem,0.25rem+1.25vw,0.75rem)] mt-[clamp(1rem,0.5rem+2.5vw,2rem)]">
              <strong className="text-[clamp(0.875rem,0.75rem+0.625vw,1rem)]">Trân trọng</strong>
              <strong className="text-main-2 text-[clamp(0.875rem,0.75rem+0.625vw,1rem)]">CEO - Trần Hải Nam</strong>
            </div>
          </div>
        </div>
        {/* Content Text */}
        <div className="
            max-lg:hidden
            col-span-7
            pt-[5px] -mr-[clamp(0.375rem,0rem+1.5vw,1.5rem)]
            content-regular-18
            text-neutral-2
          "
        >
          <p className="leading-relaxed">
            <strong>Thân gửi</strong>
            {' '}
            Quý Khách hàng và Quý Đối tác,
            <br />
            <br />

            Lời đầu tiên, Công ty Cổ phần FINT Việt Nam xin gửi đến Quý Khách hàng, Quý Đối tác lời chào trân trọng, cảm ơn sâu sắc vì sự tin tưởng và ủng hộ của Quý vị trong suốt thời gian qua.
            <br />
            <br />

            Công ty Cổ phần FINT Việt Nam là đơn vị hoạt động trong lĩnh vực công nghệ, cung cấp các giải pháp về công nghệ và chuyển đổi số. Trong suốt quá trình hoạt động, chúng tôi đã không ngừng phát triển và đã khẳng định vị thế của mình trên thị trường và trở thành đối tác đáng tin cậy.
            <br />
            <br />

            Tại FINT chúng tôi hội tụ những con người giàu
            {' '}
            <strong>khát vọng, đam mê và cùng chung một định hướng</strong>
            . Chúng tôi tự hoàn thiện bản thân từng ngày để trở lên "tốt hơn" từ đó đóng góp sức lực nhỏ bé của mình để mang lại nhiều giá trị lớn hơn cho xã hội.
            <br />
            <br />

            Với quan điểm
            {' '}
            <strong>"Kinh doanh là hoạt động kiếm tiền thông qua việc phụng sự xã hội bằng các dịch vụ và sản phẩm tốt lành của doanh nghiệp"</strong>
            {' '}
            FINT luôn đặt lợi ích của khách hàng lên hàng đầu. Chính vì vậy chúng tôi đã có được những thành công nhất định với hơn 20 khách hàng là các Bộ/Ban/Ngành và hơn 50 dự án về công nghệ.
            <br />
            <br />

            FINT Việt Nam luôn hướng đến một tổ chức
            {' '}
            <strong>"Hiệu quả - Hạnh phúc - Trường tồn"</strong>
            , không chỉ vì lợi ích riêng của mình mà còn nhằm tạo ra giá trị thực sự cho tất cả các bên liên quan. Chúng tôi rất mong tiếp tục nhận được sự tin tưởng và đồng hành từ Quý Khách hàng, Quý Đối tác trong chặng đường sắp tới.
            <br />
            <br />

            <strong>Trân trọng cảm ơn, kính chúc Quý Khách hàng và Quý đối tác sức khỏe, thành công.</strong>
          </p>
          <div className="
              float-right
              pt-[clamp(1rem,0.5rem+2.5vw,1rem)]
              gap-[clamp(0.625rem,0.375rem+1.25vw,0.625rem)]
              flex flex-col items-center
              mt-0
            "
          >
            <strong>Trân trọng</strong>
            <strong className="text-main-2">CEO - Trần Hải Nam</strong>
          </div>
        </div>

        {/* CEO Image & Info */}
        <div className="
            max-lg:hidden
            col-span-5
            pl-[clamp(1.5rem,0.5rem+5vw,3rem)]
            gap-[clamp(1rem,0.5rem+2.5vw,1rem)] text-center
          "
        >
          <div className="w-full max-w-[clamp(17.5rem,12.5rem+25vw,22.5rem)] lg:max-w-none">
            <FImage
              aspectRatio={27 / 29}
              src="fint/about-us/avt_NamTH.png"
              alt="avt_NamTH"
              width={405}
              height={435}
              className="w-full h-auto"
            />
          </div>
          <div className="gap-[clamp(0.375rem,0.25rem+0.625vw,0.375rem)] content-semi-18">
            <p className="content-bold-24 text-neutral-1 font-no-liga">
              Ông Trần Hải Nam
            </p>
            <p className="content-semi-16 text-main-1 uppercase">
              CEO FINT VIỆT NAM
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LetterFromCEO;
