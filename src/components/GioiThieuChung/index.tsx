import React from 'react';

import BentoProfile from '@/components/GioiThieuChung/BentoProfile';
import { GIOI_THIEU_CHUNG } from '@/components/GioiThieuChung/mock';
import { Button } from '@/components/ui/button';

import Container from '../ui/Container';

const GioiThieuChung = () => {
  return (
    <div className="mb-[75px]">
      <Container parentClassName="h-full xl:px-0 px-8" className="h-full pt-3.5 xl:pt-[100px]">
        <div className="flex flex-row gap-20 h-full">
          <div className="hidden flex-2 lg:flex-1 xl:block">
            <BentoProfile />
          </div>
          <div className="flex-1 ">
            <div className="xl:py-[84px]">
              <div className="">
                <h2 className="title-h2 pb-4">{GIOI_THIEU_CHUNG.title}</h2>
                <p>{GIOI_THIEU_CHUNG.description}</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 pt-12 gap-8 content-regular-16">
                <div>
                  <div className="content-bold-18 text-main-2">{GIOI_THIEU_CHUNG.stat1.count}</div>
                  <div>{GIOI_THIEU_CHUNG.stat1.description}</div>
                </div>
                <div>
                  <div className="content-bold-18 text-main-2">{GIOI_THIEU_CHUNG.stat2.count}</div>
                  <div>{GIOI_THIEU_CHUNG.stat2.description}</div>
                </div>
              </div>
              <div className="pt-12">
                <Button variant="gradient1" size="lg">
                  <span>
                    {GIOI_THIEU_CHUNG.callToAction}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GioiThieuChung;
