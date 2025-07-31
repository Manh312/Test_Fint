import './style.css';

import _ from 'lodash';
import React from 'react';

import BlockTitle from '@/components/BlockTitle';
import { CarouselCard } from '@/components/DuAnTieuBieu/CarouselCard';
import { mockDuAnTieuBieu } from '@/components/DuAnTieuBieu/mock';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Container from '@/components/ui/Container';

import { MOCK_DATA_DEPLOYMENT_IMPLEMENT } from './mock';

const ServiceAndSolution = () => {
  return (
    <Container isFullWidth className="content-regular-18 solution-and-service">
      <Container className="flex items-center flex-col md:flex-row p-auto py-[100px]">
        <div className="platform md:max-w-1/2 md:basis-1/2">
          <div className="md:max-w-[519px] block-gap">
            <h2 className="title-h2 uppercase">
              Platform công nghệ
              cho Fint
            </h2>
            <p>
              Được hình thành từ sự kết hợp giữa những chuyên gia dày dạn kinh nghiệm và những tài năng trẻ đầy nhiệt huyết, DataQ đã khẳng định vị thế của mình trong lĩnh vực công nghệ và chuyển đổi số. Chúng tôi đã tham gia vào nhiều dự án quy mô lớn, hỗ trợ xây dựng các nền tảng công nghệ tiên tiến cho các Bộ, Cơ quan ngang bộ, các Tỉnh/Thành phố, cùng với nhiều Ngân hàng và Tập đoàn hàng đầu tại Việt Nam.
            </p>
            <p>
              Chúng tôi đã tham gia vào nhiều dự án lớn, hỗ trợ xây dựng các nền tảng công nghệ hiện đại cho các Bộ, Cơ quan ngang bộ, các Tỉnh/Thành phố, cũng như nhiều Ngân hàng và Tập đoàn hàng đầu tại Việt Nam.
            </p>
          </div>
        </div>
        <div className="flex-1 city-of-technology text-center flex items-center md:justify-end">
          <img src="/assets/fint/city-of-technology.png" />
        </div>
      </Container>

      <Container className="p-auto block-gap pb-[100px]">
        <h2 className="uppercase title-h2">
          Thực trạng
        </h2>
        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="md:max-w-1/2 md:basis-1/2 block-gap flex flex-col">
            <p className="content-bold-20 text-main-2">
              Công nghê cũ đã không còn phù hợp
            </p>
            <p>
              Được hình thành từ sự kết hợp giữa những chuyên gia dày dạn kinh nghiệm và những tài năng trẻ đầy nhiệt huyết, DataQ đã khẳng định vị thế của mình trong lĩnh vực công nghệ và chuyển đổi số. Chúng tôi đã tham gia vào nhiều dự án quy mô lớn, hỗ trợ xây dựng các nền tảng công nghệ tiên tiến cho các Bộ, Cơ quan ngang bộ, các Tỉnh/Thành phố, cùng với nhiều Ngân hàng và Tập đoàn hàng đầu tại Việt Nam.
            </p>
            <div className="gap-6 grid grid-cols-2">
              <div>
                <img src="/assets/fint/find-solution.png" />
              </div>
              <div>
                <img src="/assets/fint/protection.png" />
              </div>
              <div className="col-span-full">
                <img src="/assets/fint/anxious.png" />
              </div>
            </div>
          </div>
          <div className="md:max-w-1/2 md:basis-1/2 block-gap">
            <p className="content-bold-20 text-main-2">
              Không chiếm ưu thế so với đối thủ cạnh tranh
            </p>
            <p>
              Được xây dựng từ sự kết hợp giữa những chuyên gia dày dạn kinh nghiệm và những tài năng trẻ đầy nhiệt huyết, TechNova đã khẳng định vị thế của mình trong lĩnh vực công nghệ và chuyển đổi số. Chúng tôi đã tham gia vào nhiều dự án quy mô lớn, hỗ trợ phát triển các nền tảng công nghệ hiện đại cho các cơ quan chính phủ, các tỉnh/thành phố, cũng như nhiều ngân hàng và tập đoàn hàng đầu tại Việt Nam.
            </p>
            <div className="md:ml-[-8px]">
              <img src="/assets/fint/conversation.png" />
            </div>
          </div>
        </div>
        <div>
          <p className="content-bold-20 text-main-2">
            Tiềm ẩn nhiều rủi ro về bảo mật
          </p>
          <p>Được hình thành từ sự kết hợp giữa những chuyên gia dày dạn kinh nghiệm và những tài năng trẻ đầy nhiệt huyết, DataQ đã khẳng định vị thế của mình trong lĩnh vực công nghệ và chuyển đổi số. Chúng tôi đã tham gia vào nhiều dự án quy mô lớn, hỗ trợ xây dựng các nền tảng công nghệ tiên tiến cho các Bộ, Cơ quan ngang bộ, các Tỉnh/Thành phố, cùng với nhiều Ngân hàng và Tập đoàn hàng đầu tại Việt Nam.</p>
        </div>
      </Container>

      {/* <Container className="flex flex-col p-auto md:flex-row gap-6 pb-[100px]">
        <div className="md:max-w-1/2 md:basis-1/2 gap-6 grid grid-cols-2">
          <div className="">
            <img src="/assets/fint/find-solution.png" />
          </div>
          <div>
            <img src="/assets/fint/protection.png" />
          </div>
          <div className="col-span-full">
            <img src="/assets/fint/anxious.png" />
          </div>
        </div>
        <div className="md:max-w-1/2 md:basis-1/2 block-gap">
          <img src="/assets/fint/conversation.png" />
        </div>
      </Container> */}

      <Container>
        <div className="flex flex-col lg:flex-row items-center lg:justify-around lg:items-start p-auto pb-[100px]">
          <div className="lg:max-w-[566px]">
            <img src="/assets/fint/suggest_solution.png" />
          </div>
          <div className="block-gap lg:max-w-[577px] ml-auto">
            <h2 className="title-h2 uppercase">
              Lợi ích của giải pháp
            </h2>
            <div>
              Chúng tôi tạo ra một môi trường sáng tạo, nơi mọi nhân viên đều có cơ hội phát triển kỹ năng và đóng góp vào sự thành công chung.
            </div>
            <div className="block-gap mt-8">
              <div className="flex items-start gap-4">
                <img src="/assets/fint/success-checked.svg" />
                <p>
                  Hệ thống quản lý chia sẻ dữ liệu là một giải pháp công nghệ hỗ trợ quản lý, chia sẻ và truy cập dữ liệu một cách tập trung và có kiểm soát giữa các ứng dụng
                </p>
              </div>
              <div className="flex items-start gap-4">
                <img src="/assets/fint/success-checked.svg" />
                <p>
                  Người dùng có thể dễ dàng đồng bộ hóa dữ liệu giữa nhiều nền tảng khác nhau, đảm bảo thông tin luôn được cập nhật và nhất quán.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <img src="/assets/fint/success-checked.svg" />
                <p>
                  Hệ thống cung cấp các tính năng bảo mật nâng cao, giúp bảo vệ dữ liệu nhạy cảm và đảm bảo quyền riêng tư cho người dùng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container isFullWidth className="py-[100px]" parentClassName="bg-[url(/assets/fint/sky.png)] bg-cover">
        <div className="max-w-[1638px] mx-auto">
          <BlockTitle title="Quy trình triển khai" description="Chúng tôi cam kết cùng nhau thực hiện những bước đi vững chắc để đạt được mục tiêu trở thành doanh nghiệp công nghệ hàng đầu vào năm 2030, với những giải pháp sáng tạo và hiệu quả nhất." className="text-white" />
          <div className="sm:flex flex-wrap py-[90px] px-4 sm:px-0">
            {MOCK_DATA_DEPLOYMENT_IMPLEMENT.map(({ icon, number, text, title }) => (
              <div className="p-1 sm:px-2 lg:px-4 sm:flex-1/2 lg:flex-1/3 lg:max-w-[33%] xl:flex-1 xl:max-w-[20%]" key={number}>
                <div className="timeline-block h-[600px] sm:h-[717px] timeline-block rounded-[200px] bg-white/90 py-[64px]">
                  <div className="flex-1">
                    <div className="flex flex-col gap-4 items-center ">
                      <div className="stt w-[84px] aspect-square border border-main-2 flex items-center justify-center content-bold-24 rounded-full text-main-2">
                        {number}
                      </div>
                      <div className="title text-center relative text-main-2 content-bold-18 py-3 after:bg-main-2 mb-3">
                        {title}
                      </div>
                    </div>
                    <div className="content px-6 text-center md:h-[320px] max-h-[400px]">
                      {text}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="stt w-[80px] md:w-[150px] aspect-square border bg-progress inline-flex items-center justify-center content-bold-24 rounded-full text-main-2">
                      <img src={icon} className="w-1/2 aspect-square md:w-16" />
                    </div>
                  </div>
                  <div className="connector-wrapper py-4 hidden xl:block">
                    <div className="connector"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Container className="p-auto py-[100px]">
        <div className="mb-12 max-w-[900px]">
          <h2 className="title-h2 uppercase mb-4">
            Dự án tiêu biểu
          </h2>
          <div>
            Chúng tôi – những FINT - ERs – mang trong mình khát vọng cháy bỏng và đam mê bền bỉ, cùng nhau chinh phục mục tiêu đến năm 2030: vươn tầm doanh nghiệp công nghệ
          </div>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
        >
          <CarouselContent>
            {_.map(mockDuAnTieuBieu, item => (
              <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
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
      </Container>
    </Container>
  );
};

export default ServiceAndSolution;
