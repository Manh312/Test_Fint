import { useTranslations } from 'next-intl';

import FImage from '@/components/shared/FImage';
import Container from '@/components/ui/Container';

const OrganizationalStructure = () => {
  const t = useTranslations('Pages');
  return (
    <>
      <Container isResponsiveWidth className="flex flex-col pt-[clamp(4rem,3rem+5.33vw,6.25rem)] pb-[clamp(5rem,3.125rem+9.375vw,8.125rem)] gap-[clamp(2rem,1.5rem+2.5vw,3rem)]">
        <h2 className="title-h3 md:title-h2 uppercase text-center">
          <span className="bg-gradient-to-r from-[#FFC014] to-[#F37124] bg-clip-text text-transparent">
            {t('organizational-structure')}
          </span>
          {' '}
          của fint
        </h2>
        <FImage src="fint/org-structure.png" alt="Organizational Structure" aspectRatio={1280 / 594} width={1280} height={594} />
      </Container>
      <div className="bg-soft-yellow-gradient h-[clamp(20rem,15rem+25vw,37.5rem)] absolute top-0 left-0 w-full -z-10 rotate-180">
      </div>
    </>
  );
};

export default OrganizationalStructure;
