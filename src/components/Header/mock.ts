export type MenuItem = {
  id: string;
  title: string;
  href?: string;
  submenu?: MenuItem[];
};

export const menuItems: MenuItem[] = [
  {
    id: 'about-us',
    title: 'Về chúng tôi',
    submenu: [
      { id: 'letter-from-ceo', title: 'Thư ngỏ từ tổng giám đốc', href: '/about-us/letter-from-ceo' },
      { id: 'organizational-structure', title: 'Sơ đồ tổ chức', href: '/about-us/organizational-structure' },
      { id: 'leadership-team', title: 'Đội ngũ lãnh đạo', href: '/about-us/leadership-team' },
      { id: 'strategic-vision', title: 'Tầm nhìn chiến lược', href: '/about-us/strategic-vision' },
    ],
  },
  {
    id: 'services',
    title: 'Dịch vụ và Giải pháp',
    href: '#services',
    submenu: [
      {
        id: 'fint-platform',
        title: 'Platform công nghệ cho Fint',
        href: '/service-and-solution',
      },
      {
        id: 'gov-digital-transformation',
        title: 'Chuyển đổi số khối chính phủ và doanh nghiệp nhà nước',
        href: '#gov-digital-transformation',
      },
      { id: 'outsourcing', title: 'Outsourcing trong nước và nước ngoài', href: '#outsourcing' },
      { id: 'tech-solutions', title: 'Sản xuất và tư vấn giải pháp công nghệ', href: '#tech-solutions' },
      { id: 'system-integration', title: 'Tích hợp hệ thống', href: '#system-integration' },
      { id: 'infra-security', title: 'Cung cấp thiết bị hạ tầng và bảo mật', href: '#infra-security' },
      {
        id: 'international-agent',
        title: 'Đại lý giải pháp của hãng quốc tế tại Việt Nam',
        href: '#international-agent',
      },
    ],
  },
  {
    id: 'projects',
    title: 'Dự án',
    href: '/projects',
  },
  {
    id: 'careers',
    title: 'Cơ hội nghề nghiệp',
    href: '/career-opportunities/career',
  },
];
