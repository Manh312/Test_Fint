'use client';
import React, { useState } from 'react';

import { businessSectors } from '@/components/LinhVucKinhDoanh/mock';
import FImage from '@/components/shared/FImage';
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Icon from '@/components/ui/Icon';

const ImageCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const handleCarouselGoLeft = () => {
    api?.scrollPrev();
  };

  const handleCarouselGoRight = () => {
    api?.scrollNext();
  };
  return (
    <Carousel
      setApi={setApi}
      opts={{
        loop: true,
        slidesToScroll: 1,
      }}
    >
      <CarouselContent>
        {businessSectors.carousel.map((item) => {
          return (
            <CarouselItem
              key={item.id}
              className="basis-full lg:basis-1/3 flex text-black flex-col"
            >
              <div className="h-[250px] w-[410px] relative">
                <FImage
                  src={item.image}
                  alt={item.title}
                  className="object-cover rounded-md"
                />
              </div>

              <div className="content-bold-14 xl:content-bold-18 pb-3 pt-6">{item.title}</div>
              <p className="content-regular-12 xl:content-regular-16 pb-3">{item.description}</p>
              <div
                className="flex flex-row gap-3 items-center
                  xl:content-medium-16 content-medium-12 text-progress hover:cursor-pointer"
              >
                <Icon name="isax-export-21"></Icon>
                <button
                  type="button"
                  className="self-start hover:underline hover:cursor-pointer"
                >
                  {item.cta.buttonText}
                </button>
              </div>

            </CarouselItem>
          );
        })}
      </CarouselContent>
      <Icon onClick={handleCarouselGoLeft} name="isax-arrow-circle-left1" className="text-neutral-5 absolute top-1/2 -left-14 -translate-y-1/2" size="5xl" />
      <Icon onClick={handleCarouselGoRight} name="isax-arrow-circle-right1" className="text-neutral-5 absolute top-1/2 -right-12 -translate-y-1/2" size="5xl" />
    </Carousel>
  );
};

export default ImageCarousel;
