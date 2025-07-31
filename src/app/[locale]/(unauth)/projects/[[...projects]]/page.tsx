'use client';
import { useState } from 'react';

import SearchGroup from '@/components/projects/SearchGroup';
import Container from '@/components/ui/Container';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

import { projects } from './mock';

const Projects = () => {
  // --- pagination state ---
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  // compute slice
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const displayedProjects = projects.slice(startIdx, endIdx);

  // build page numbers array
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // --- filters/search state ---
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('Danh mục');
  const [location, setLocation] = useState('Đơn vị');

  const scrollToHeadList = () => {
    const targetElement = document.getElementById('projects');
    if (targetElement) {
      const offset = 100; // khoảng cách cách top
      const y = targetElement.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  };

  const handlePrevious = (e: any) => {
    e.preventDefault();
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToHeadList();
    }
  };

  const handleNext = (e: any) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToHeadList();
    }
  };

  return (
    <>
      <Container isResponsiveWidth parentClassName="bg-[url('/assets/fint/projects/layer.png')] bg-[clamp(50%,18.3983%_+_1.6181vw,75%)_center] bg-cover w-full aspect-[1920/450]" className="flex flex-col pt-[clamp(2.5rem,0.8333rem_+_8.8889vw,7.125rem)] pb-[clamp(1.5rem,0.6667rem_+_4.4444vw,3.5rem)] gap-[clamp(2rem,-0.3333rem_+_12.4444vw,5.25rem)]">
        <div className="max-w-[665px]">
          <h2 className="title-h2 uppercase text-neutral-8">
            Dự án
            {' '}
            <span className="bg-gradient-to-r from-[#FFC014] to-[#F37124] bg-clip-text text-transparent">tiêu biểu</span>
          </h2>
          <p className="max-w-[580px] text-neutral-8 font-inter text-lg">Trong suốt nửa thập kỷ phát triển, FINT đã tham gia triển khai hơn 100 dự án công nghệ với sự đang dạng từ tập khách hàng, quy mô dự án và các giải pháp công nghệ thực hiện.</p>
        </div>
        <SearchGroup category={category} setCategory={setCategory} searchTerm={searchTerm} setSearchTerm={setSearchTerm} location={location} setLocation={setLocation} />
      </Container>
      <Container isResponsiveWidth className="pt-[100px] flex flex-col gap-12">
        {/* render chỉ những project của trang hiện tại */}
        <div id="projects" className="grid grid-cols-2 lg:grid-cols-3 gap-[clamp(16px,11.6px_+_1.17vw,34px)_clamp(12px,9.1px_+_0.78vw,24px)]">
          {displayedProjects.map(project => (
            <div key={project.id} className="cursor-pointer flex flex-col gap-6">
              <div className="relative aspect-[41/25] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                <div
                  className="absolute bottom-[14px] right-[14px] p-1 w-[23%] aspect-[3/2] rounded-sm bg-neutral-8 bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${project.orgLogo})` }}
                >
                </div>
              </div>
              <div className="flex flex-col justify-between flex-1 gap-2 pr-[clamp(0px,-15px_+_2.34375vw,30px)]">
                <h3 className="content-semi-18 text-neutral-1">
                  {project.title}
                </h3>
                <div className="flex content-medium-16 gap-2 text-neutral-2">
                  <span>{project.year}</span>
                  <span>-</span>
                  <span className="text-sub-2 text-sm sm:text-base">{project.organization}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* pagination */}
        <Pagination className="mb-[100px]">
          <PaginationContent>
            {/* Previous */}
            <PaginationItem>
              <PaginationPrevious
                disabled={currentPage === 1}
                onClick={handlePrevious}
              />
            </PaginationItem>

            {/* if có nhiều trang, bạn có thể chèn ellipsis logic ở đây */}
            {pageNumbers.map(num => (
              <PaginationItem key={num}>
                <PaginationLink
                  href="#"
                  isActive={num === currentPage}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(num);
                    scrollToHeadList();
                  }}
                >
                  {num}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>

            {/* Next */}
            <PaginationItem>
              <PaginationNext
                disabled={currentPage === totalPages}
                onClick={handleNext}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Container>
    </>
  );
};

export default Projects;
