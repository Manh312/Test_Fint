import Image from 'next/image';
import { useTranslations } from 'next-intl';

import LeadershipMember from '@/components/LeadershipMember';
import FImage from '@/components/shared/FImage';
import Container from '@/components/ui/Container';

import { executiveBoard, managementTeam } from './mock';

const LeadershipTeam = () => {
  const t = useTranslations('Pages');
  return (
    <>
      <Container
        isResponsiveWidth
        parentClassName="bg-white"
        className="flex flex-col pt-[clamp(2.5rem,2rem+2.5vw,3.75rem)] pb-[clamp(4rem,3rem+5vw,6.25rem)] gap-[clamp(2rem,1.5rem+2.5vw,3rem)]"
      >
        <div className="bg-white rounded-2xl border border-solid border-neutral-6 p-[1rem_clamp(2rem,1rem+5vw,6.25rem)_1.5rem_clamp(2rem,1rem+5vw,4rem)] shadow-[0px_4px_30px_0px_rgba(62,157,235,0.05)] grid grid-cols-1 md:grid-cols-12 gap-[clamp(1rem,0.5rem+2.5vw,1.5rem)]">
          <div className="md:col-span-4 w-full">
            <FImage
              aspectRatio={27 / 29}
              className="w-full max-w-[clamp(20rem,15rem+25vw,27.5rem)] mx-auto md:mx-0"
              src="fint/about-us/avt_NamTH.png"
              alt="avt_NamTH"
              width={440}
              height={472}
            />
          </div>
          <div className="md:ml-[clamp(2rem,1rem+5vw,4rem)] md:col-span-8 gap-[clamp(1rem,0.5rem+2.5vw,1.5rem)] my-auto">
            <div className="flex max-md:justify-center gap-[clamp(0.75rem,0.5rem+1.25vw,1.25rem)] mb-[clamp(1rem,0.5rem+2.5vw,1.5rem)]">
              <div className="py-1 flex-shrink-0">
                <Image
                  className="w-[clamp(1rem,0.75rem+1.25vw,1.25rem)] h-[clamp(1.5rem,1rem+2.5vw,1.75rem)]"
                  src="/assets/fint/lean-in-icon.svg"
                  alt="Lean In Icon"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <p className="content-bold-24 text-neutral-1 font-no-liga">
                  Ông Trần Hải Nam
                </p>
                <p className="content-semi-16 font-semibold text-main-1">
                  CEO FINT VIỆT NAM
                </p>
              </div>
            </div>
            <div className="flex gap-[clamp(0.75rem,0.5rem+1.25vw,1.25rem)] mb-[clamp(0.75rem,0.5rem+1.25vw,1rem)]">
              <div className="py-1 flex-shrink-0">
                <FImage src="fint/about-us/right-arrow.svg" alt="Right Arrow" width={16} height={16} />
              </div>
              <p className="content-regular-14 xl:content-regular-16 text-neutral-2">
                Cố vấn của hơn 20 dự án chuyển đổi số khác nhau trong và ngoài nước, thúc đẩy phát triển hệ thống dịch vụ công quốc gia và một số ngân hàng trong nước
              </p>
            </div>
            <div className="flex gap-[clamp(0.75rem,0.5rem+1.25vw,1.25rem)]">
              <div className="py-1 flex-shrink-0">
                <FImage src="fint/about-us/right-arrow.svg" alt="Right Arrow" width={16} height={16} />
              </div>
              <p className="content-regular-14 xl:content-regular-16 text-neutral-2">
                Có nhiều kinh nghiệm trong việc phân tích nghiệp vụ, từ đó lập kế hoạch cung cấp giải pháp theo ngành, doanh nghiệp cùng thời điểm tham gia thị trường để mang lại hiệu suất vượt trội.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="title-h3 md:title-h2 uppercase text-neutral-1 pb-[clamp(1rem,0.75rem+1.25vw,1.5rem)]">
            {t('executive-board')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(1rem,0.75rem+1.25vw,1.5rem)]">
            {executiveBoard.map(member => (
              <LeadershipMember
                fixSizeText
                key={member.name}
                avatarUrl={member.avatarUrl}
                name={member.name}
                department={member.department}
                position={member.position}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="title-h3 md:title-h2 uppercase text-neutral-1 pb-[clamp(1rem,0.75rem+1.25vw,1.5rem)]">
            {t('management-team')}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 max-sm:-mx-[2vw] gap-[clamp(0.75rem,0.5rem+1vw,1.5rem)]">
            {managementTeam.map(member => (
              <LeadershipMember
                key={member.name}
                avatarUrl={member.avatarUrl}
                name={member.name}
                department={member.department}
                position={member.position}
              />
            ))}
          </div>
        </div>
      </Container>

      <div className="bg-soft-yellow-gradient h-[clamp(20rem,15rem+25vw,37.5rem)] absolute top-0 left-0 w-full -z-10 rotate-180">
      </div>
    </>
  );
};

export default LeadershipTeam;
