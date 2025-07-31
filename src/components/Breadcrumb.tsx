'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import LeanInIcon from 'public/assets/fint/lean-in-icon.svg';

import Container from './ui/Container';

const Breadcrumb = () => {
  const pathName = usePathname();
  const pathNameArray = pathName.split('/').filter(item => item !== '');
  const t = useTranslations('Pages');

  return (
    <>
      {pathNameArray.length > 0 && (
        <Container isResponsiveWidth parentClassName="py-3 bg-neutral-7" className="flex flex-wrap font-jamjuree text-sm lg:text-base font-medium w-full">
          <Image
            src={LeanInIcon}
            alt="Lean In Icon"
            width={24}
            height={24}
            className="pr-1 flex-shrink-0 w-[clamp(16px,1rem_+_0.5vw,24px)] h-[clamp(16px,1rem_+_0.5vw,24px)]"
          />
          <Link href="/" className="hover:text-main-2 transition-colors flex-shrink-0">{t('home')}</Link>
          {pathNameArray.map((item, index) => (
            <span key={item} className="break-words hyphens-auto flex-shrink-0">
              <span className="px-2">
                /
              </span>
              <span className={index === pathNameArray.length - 1 ? 'text-main-2' : ''}>{t(item)}</span>
            </span>
          ))}
        </Container>
      )}
    </>
  );
};

export default Breadcrumb;
