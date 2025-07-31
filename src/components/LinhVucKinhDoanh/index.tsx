import React from 'react';

import ImageCarousel from '@/components/LinhVucKinhDoanh/ImageCarousel';
import { businessSectors } from '@/components/LinhVucKinhDoanh/mock';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';

import BlockTitle from '../BlockTitle';

const LinhVucKinhDoanh = () => (
  <Container className="h-full" parentClassName="">
    <div className="py-25 xl:px-0 px-8">
      {/* <div className="flex flex-col items-center justify-center xl:w-225 mx-auto gap-4 pb-12 ">
        <h2 className="text-neutral-1 heading_3 xl:heading_2">{businessSectors.title}</h2>
        <div className="self-stretch text-center content-regular-18">{businessSectors.description}</div>
      </div> */}
      <BlockTitle title={businessSectors.title} description={businessSectors.description} className="text-neutral-1" />
      <div id="carousel-wrapper">
        <ImageCarousel />
      </div>
      <div className="pt-12">
        <Button variant="gradient1" size="lg">
          <span>{businessSectors.ctaButton.text}</span>
        </Button>
      </div>
    </div>
  </Container>
);

export default LinhVucKinhDoanh;
