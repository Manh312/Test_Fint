import type { JSX, SVGProps } from 'react';

export const footerData = {
  companyInfo: {
    name: 'FINT Việt Nam',
    description: 'FINT Việt Nam luôn đồng hành cùng sự thành công của bạn. Sự chân thành, minh bạch, luôn đặt lợi ích của khách hàng lên hàng đầu và tuân thủ pháp luật là kim chỉ nam cho sự thành công của chúng tôi.',
    phone: '(+84) 247 304 3588',
    email: 'info@fint.vn',
    address: {
      label: 'Tầng 5, tòa D\'Office Building, số 28, đường Thành Thái, phường Dịch Vọng, quận Cầu Giấy, Tp. Hà Nội',
      url: 'https://maps.app.goo.gl/ecQjGUXJFNNobHgh7',
    },

  },
  links: [
    {
      title: 'Về chúng tôi',
      items: [
        { text: 'Đội ngũ lãnh đạo', href: '#' },
        { text: 'Thư ngỏ của TGĐ', href: '#' },
        { text: 'Tầm nhìn chiến lược', href: '#' },
        { text: 'Sơ đồ tổ chức', href: '#' },
      ],
    },
    {
      title: 'Cơ hội nghề nghiệp',
      items: [
        { text: 'Chính sách và đãi ngộ', href: '#' },
        { text: 'Tuyển dụng', href: '#' },
      ],
    },
  ],
  socials: [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg
          {...props}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          {' '}
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"> </path>
        </svg>
      ),
    },
  ],
  copyright: `© ${new Date().getFullYear()} Bản quyền thuộc về FINT VIỆT NAM`,
};
