'use client';

import _ from 'lodash';
import React, { useState } from 'react';

import type { CarouselApi } from '@/components/ui/carousel';

import { Button } from '../ui/button';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Container from '../ui/Container';
import Icon from '../ui/Icon';
import { CarouselCard } from './CarouselCard';
import { mockDuAnTieuBieu } from './mock';

const DuAnTieuBieu = () => {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <Container
      isFullWidth
      className="bg-[url('/assets/fint/slide-du-an.png')] overflow-hidden"
    >
      <Container className="py-[30px] lg:h-auto lg:py-[175px] bg-[rgba(0,18,76, 0.7)]">
        <div className="grid auto-rows-auto grid-cols-12 relative xl:px-0 px-8 gap-2.5">
          <div className="text-white! col-start-1 col-end-12 lg:col-end-5">
            <div>
              <h2 className="title-h2 text-white mb-4">
                Dự án tiêu biểu
              </h2>
              <div className="content-regular-18 mb-12">
                FINT tự hào đồng hành cùng các cơ quan nhà nước trong hành trình chuyển đổi số, kiến tạo những giải pháp công nghệ thực tiễn, bền vững và mang lại giá trị thiết thực cho xã hội.
              </div>
              <Button variant="gradient1" size="lg">
                Kinh nghiệm của FINT
              </Button>
            </div>
            <div className="flex gap-6 mt-[60px]">
              {/* <PrevButton onClick={() => api?.scrollPrev()} />
              <NextButton onClick={() => api?.scrollNext()} /> */}
              <Icon onClick={() => api?.scrollPrev()}>
                <img src="/assets/fint/arrow-left.svg" />
              </Icon>
              <Icon onClick={() => api?.scrollPrev()}>
                <img src="/assets/fint/arrow-right.svg" onClick={() => api?.scrollNext()} />
              </Icon>
            </div>
          </div>
          <div className="lg:absolute static col-start-1 col-end-12 left-[500px]">
            <Carousel
              setApi={setApi}
              opts={{
                align: 'start',
                loop: true,
              }}
            >
              <CarouselContent className="w-[1920px]">
                {_.map(mockDuAnTieuBieu, item => (
                  <CarouselItem className="text-white basis-[414px]">
                    <CarouselCard
                      key={item.id}
                      imageUrl={item.imageUrl}
                      title={item.title}
                      year={item.year}
                      department={item.department}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default DuAnTieuBieu;
