import Image from 'next/image';
import Link from 'next/link'; // ✅ Đúng import cho routing
import { useTranslations } from 'next-intl';

import BentoGrid from '@/components/career-opportunities/policies-and-culture/BentoGrid';
import PhotoGallery from '@/components/career-opportunities/policies-and-culture/PhotoGallery';
import FImage from '@/components/shared/FImage';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';

const CheckIcon = () => (
  <div className="flex-shrink-0">
    <Image src="/assets/fint/career-opportunities/check-icon.svg" width={24} height={24} alt="check-icon" />
  </div>
);

const PoliciesAndCulture = () => {
  const t = useTranslations('Pages');

  return (
    <>
      {/* Section: Văn hoá FINT */}
      <Container isResponsiveWidth className="flex flex-col lg:grid lg:grid-cols-12 gap-6 py-[clamp(4rem,3rem_+_5.3333vw,6.25rem)]">
        <div className="lg:col-span-6 flex flex-col gap-8 xl:pl-6 2xl:pl-0 lg:pr-6">
          <div className="flex flex-col gap-4">
            <h2 className="title-h2 uppercase">
              <span className="bg-gradient-to-r from-[#FFC014] to-[#F37124] bg-clip-text text-transparent">{t('culture')}</span>
              {' '}
              FINT
            </h2>
            <p className="content-regular-18 text-neutral-2">
              FINT là nơi hội tụ những người tài với đầy đủ phẩm chất đạo đức, kiến thức, kỹ năng và đặc biệt các FINT - ERs cùng chung khát vọng làm chủ, đam mê về Công nghệ - tài chính.
              <br />
              <span className="content-semi-18">"Sống Dấn Thân - Sống Trọn Vẹn"</span>
              {' '}
              thể hiện rõ nhất tinh thần đó.
            </p>
          </div>
          <div className="flex gap-4">
            <CheckIcon />
            <p className="content-semi-18 text-neutral-2">
              "Sống Dấn Thân"
              {' '}
              <span className="content-regular-18">tượng trưng cho văn hóa tích cực, quả quyết và nồng nhiệt trong việc đối mặt với thách thức và khám phá trong công ty công nghệ. Nó khẳng định ý nghĩa của sự cam kết, sự sáng tạo và sẵn sàng vượt qua ranh giới trong một thế giới số đang thay đổi nhanh chóng.</span>
            </p>
          </div>
          <div className="flex gap-4">
            <CheckIcon />
            <p className="content-semi-18 text-neutral-2">
              "Sống Trọn Vẹn"
              {' '}
              <span className="content-regular-18">thể hiện một cách tiếp cận toàn diện với cuộc sống đòi hỏi không chỉ việc dấn thân vào công việc mà còn cần phải tìm thấy cân bằng giữa công việc và cuộc sống cá nhân. "Sống Trọn Vẹn" khuyến khích nhân viên không chỉ phát triển chuyên môn mà còn phát triển tư duy, niềm đam mê và sự hạnh phúc cá nhân.</span>
            </p>
          </div>
        </div>
        <div className="lg:col-span-6 lg:pl-[60px]">
          <BentoGrid />
        </div>
      </Container>

      {/* Section: Định hướng */}
      <Container isResponsiveWidth className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center text-center gap-4 lg:w-[900px]">
          <Image src="/assets/fint/lean-in-icon.svg" alt="Lean in icon" width={24} height={24} />
          <h2 className="title-h2 text-center uppercase">
            khát vọng, đam mê
            <br />
            và cùng chung một định hướng
          </h2>
          <p className="content-regular-18 text-neutral-2">
            Chúng tôi – những FINT - ERs – mang trong mình khát vọng cháy bỏng và đam mê bền bỉ, cùng nhau chinh phục mục tiêu đến năm 2030: vươn tầm doanh nghiệp công nghệ với 1.000 tỉ doanh thu với hơn 300 nhân sự đồng hành kiến tạo giá trị số cho quốc gia
          </p>
        </div>
        <PhotoGallery
          leftTop={['team_meeting1.png', 'team_meeting2.png']}
          leftBottom="team_discussion1.png"
          rightLarge="teambuilding1.png"
          rightSmall={['team_discussion2.png', 'teambuilding2.png']}
        />
      </Container>

      {/* Section: Phúc lợi */}
      <Container isResponsiveWidth isFullWidth className="py-[clamp(4.5rem,2.5rem_+_12.6667vw,9.375rem)] flex flex-col-reverse lg:grid lg:grid-cols-12 gap-6">
        <div className="max-lg:hidden col-span-6">
          <div className="max-xl:hidden flex gap-[clamp(1rem,0.5rem_+_2.6667vw,2.125rem)] pr-[clamp(1.25rem,0.313rem+4.69vw,6.875rem)] justify-end overflow-hidden">
            <FImage src="fint/career-opportunities/activity1.jpg" alt="Activity 1" width={543} height={502} className="rounded-xl" />
            <FImage src="fint/career-opportunities/activity2.jpg" alt="Activity 2" width={566} height={502} className="rounded-xl" />
          </div>
          <div className="xl:hidden flex flex-col gap-[clamp(1rem,0.5rem_+_2.6667vw,2.125rem)] pr-[clamp(1.25rem,0.313rem+4.69vw,6.875rem)]">
            <FImage src="fint/career-opportunities/activity1.jpg" alt="Activity 1" aspectRatio={5 / 3} className="rounded-xl w-full object-cover" />
            <FImage src="fint/career-opportunities/activity2.jpg" alt="Activity 2" aspectRatio={5 / 3} className="rounded-xl w-full object-cover" />
          </div>
        </div>

        <div className="lg:hidden grid grid-cols-1 w-full max-w-[600px] mx-auto gap-[clamp(1rem,0.5rem_+_2.6667vw,2.125rem)]">
          <FImage src="fint/career-opportunities/activity1.jpg" alt="Activity 1" aspectRatio={5 / 3} className="rounded-xl !w-full object-cover" />
          <FImage src="fint/career-opportunities/activity2.jpg" alt="Activity 2" aspectRatio={5 / 3} className="rounded-xl !w-full object-cover" />
        </div>

        <div className="lg:col-span-6 flex flex-col lg:pr-8 gap-8 max-w-screen-sm">
          <div className="flex flex-col gap-4">
            <h2 className="title-h2 uppercase bg-gradient-to-r from-[#FFC014] to-[#F37124] bg-clip-text text-transparent">
              chế độ
              {' '}
              <span className="text-neutral-1">và hệ thống</span>
              {' '}
              phúc lợi
              {' '}
              <span className="text-neutral-1">tại fint</span>
            </h2>
            <p className="content-regular-18 text-neutral-2">
              FINT luôn chú trọng đến quyền lợi, chính sách đãi ngộ của nhân viên với mong muốn xây dựng một môi trường làm việc nơi mỗi cá nhân đều được ghi nhận, phát triển và sống trọn vẹn cùng hành trình tạo giá trị số cho quốc gia.
            </p>
            <div className="content-regular-18 text-neutral-2">
              Chế độ đãi ngộ của FINT được xây dựng dựa trên những tiêu chí sau:
              <ul className="list-disc pl-5 ml-2 mt-2">
                <li>Đúng với hiệu quả thực tế công việc và giá trị mang lại với FINT.</li>
                <li>Lộ trình thăng tiến rõ ràng</li>
                <li>Cạnh tranh với thị trường.</li>
                <li>Thưởng hiệu suất và khuyến khích nhân sự tối ưu hóa khối lượng công việc của bản thân.</li>
                <li>Công bằng, minh bạch, đúng quy định của Pháp luật.</li>
              </ul>
            </div>
          </div>

          {/* ✅ Nút đã chỉnh để chuyển trang */}
          <Link href="/career-opportunities/career" passHref>
            <Button size="lg" className="w-min focus-visible:ring-offset-0 hover:bg-gradient-to-r from-[#FFC014] to-[#F37124]">
              Cơ hội nghề nghiệp
            </Button>
          </Link>
        </div>
      </Container>

      {/* Background gradient */}
      <div className="bg-soft-yellow-gradient h-[clamp(20rem,15rem+25vw,37.5rem)] absolute top-0 left-0 w-full -z-10 rotate-180" />
    </>
  );
};

export default PoliciesAndCulture;
