import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import DongHanhCungFint from '@/components/DongHanhCungFint';
import DuAnTieuBieu from '@/components/DuAnTieuBieu';
import GioiThieuChung from '@/components/GioiThieuChung';
import HeadingSection from '@/components/HeadingSection';
import LinhVucKinhDoanh from '@/components/LinhVucKinhDoanh';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const IndexPage = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);

  return (
    <>
      <HeadingSection />
      <GioiThieuChung />
      <LinhVucKinhDoanh />
      <DuAnTieuBieu />
      <DongHanhCungFint />
    </>
  );
};

export default IndexPage;
