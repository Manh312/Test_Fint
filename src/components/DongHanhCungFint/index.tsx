'use client';
import React, { Fragment, useState } from 'react';

import { dongHanhCungFintMockData } from '@/components/DongHanhCungFint/mock';
import FImage from '@/components/shared/FImage';
import { Button } from '@/components/ui/button';
import type { CarouselApi } from '@/components/ui/carousel';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';

const DongHanhCungFint = () => {
  const [api, setApi] = useState<CarouselApi>();

  const handleCarouselGoLeft = () => {
    api?.scrollPrev();
  };

  const handleCarouselGoRight = () => {
    api?.scrollNext();
  };

  return (
    <div className="h-[894px] flex flex-col gap-15">
      <Container className="h-full pt-25" parentClassName="">
        <div className="flex flex-col items-center justify-center text-neutral-2 gap-4 xl:px-0 px-8">
          <h3 className="title-h2 text-center uppercase">{dongHanhCungFintMockData.heading}</h3>
          <p className="content-regular-18 text-center">
            FINT là doanh nghiệp
            {' '}
            <span className="content-semi-18">hiệu quả – hạnh phúc – trường tồn</span>
            , nơi con
            người
            là trung tâm, văn hóa sống
            đến thân - sống trọn vẹn là nền tảng và công nghệ là sức mạnh.
          </p>
          <Button variant="default" size="lg" className="mt-8">
            {dongHanhCungFintMockData.ctaButton.text}
          </Button>
        </div>
      </Container>

      <Container isFullWidth parentClassName="flex-1" className="h-full bg-soft-yellow-gradient-2 relative">
        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            loop: true,
            slidesToScroll: 2,
          }}
        >
          <CarouselContent className="w-[1920px]">
            {dongHanhCungFintMockData.carouselContent.map(item => (
              <Fragment key={item.title}>
                <CarouselItem className="basis-[839px]">
                  <div className="h-[530px] w-[839px]">
                    <FImage src={item.image.src} alt={item.image.alt} />
                  </div>
                </CarouselItem>

                <CarouselItem className="basis-[700px]  flex flex-col items-start justify-center">
                  <div className="max-w-[432px] mx-auto translate-x-[16px]">
                    <h3 className="self-stretch content-bold-24 mb-4">{item.title}</h3>
                    <p className="self-stretch content-regular-18">{item.description}</p>
                  </div>
                </CarouselItem>
              </Fragment>
            ))}
          </CarouselContent>
        </Carousel>
        <Icon onClick={handleCarouselGoLeft} name="isax-arrow-circle-left1" size="5xl" className="absolute top-1/2 left-[35px] text-white" />
        <Icon onClick={handleCarouselGoRight} name="isax-arrow-circle-right1" size="5xl" className="absolute top-1/2 right-[35px] text-white" />
      </Container>
    </div>
  );
};

export default DongHanhCungFint;
