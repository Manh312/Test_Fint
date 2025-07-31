import './style.scss';

import React from 'react';

import { Button } from '../ui/button';
import Container from '../ui/Container';
import Icon from '../ui/Icon';

const HeadingSection = () => {
  return (
    <div className="max-w-[1920px] mx-auto h-[740px] xl:h-[900px] relative overflow-hidden">
      <div className="mx-auto max-h-[110%] left-[-500px] sm:left-[-300px] lg:left-0  absolute w-[1920px] top-0 lg:top-[-100px] overflow-hidden">
        <div className="heading-section left-0 w-full h-full z-0 absolute"></div>
        <div className="w-full">
          <div className="z-0 absolute left-0 bg-[url(/assets/fint/trong-dong.svg)]"></div>
        </div>
        <video autoPlay muted loop id="myVideo" className="mx-auto w-full">
          <source src="/assets/video/fint-introduction.mp4" type="video/mp4" />
        </video>
      </div>

      <Container parentClassName="absolute xl:px-0 xl:top-0 xl:translate-y-0 top-[50%] translate-y-[-50%] xl:top-0 left-0 text-white">
        <div className="py-5 pt-4 xl:px-0 p-8 lg:pt-[321px] lg:pb-[233px]">
          <div className="content">
            <div className="content-bold-18 flex items-center gap-2 mb-2">
              <img src="/assets/fint/small-logo.png" alt="" className="w-[17px]" />
              FINT Việt Nam
            </div>
            <h2 className="title-h2 text-white max-w-[550px] mb-6">
              Nền tảng công nghệ cho một Việt Nam số hiện đại và bền vững
            </h2>
            <div className="font-inter leading-[26px] max-w-[550px] mb-8">
              Tối ưu hóa quy trình, nâng cao hiệu suất và tạo ra giá trị mới bằng công nghệ số. FINT Việt Nam đồng hành cùng với công cuộc chuyển đổi số Quốc gia!!!
            </div>
            <Button asChild className="w-fit hidden md:flex" variant="gradient1" size="lg">
              <a href="/assets/fint-profile.pdf" download>
                <span>
                  Tải xuống hồ sơ doanh nghiệp
                </span>
                <Icon name="isax-document-download" size="2xl" />
              </a>
            </Button>
            <Button asChild className="w-fit md:hidden flex" variant="gradient1" size="lg">
              <a href="/assets/fint-profile.pdf" download>
                <span>Hồ sơ doanh nghiệp</span>
                <Icon name="isax-document-download" size="2xl" />
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeadingSection;
