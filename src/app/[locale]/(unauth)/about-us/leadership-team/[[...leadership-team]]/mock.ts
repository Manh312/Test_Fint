export type MemberProps = {
  fixSizeText?: boolean;
  avatarUrl?: string;
  name: string;
  department: string;
  position: string;
};

export const executiveBoard: MemberProps[] = [
  {
    name: 'Mr. Nguyễn Thanh Bình',
    department: 'Kinh doanh',
    position: 'Phó tổng giám đốc',
  },
  {
    avatarUrl: 'avt_LinhVT.png',
    name: 'Mrs. Vũ Thùy Linh',
    department: 'Nhân sự - Tài chính',
    position: 'Phó tổng giám đốc',
  },
  {
    avatarUrl: 'avt_TienNM.png',
    name: 'Mr. Nguyễn Mạnh Tiến',
    department: 'Dự án - Sản xuất',
    position: 'Phó tổng giám đốc',
  },
];

export const managementTeam: MemberProps[] = [
  {
    name: 'Mr. Đỗ Tiến Hưng',
    department: 'Kinh doanh',
    position: 'Giám đốc',
  },
  {
    name: 'Mr. Trần Xuân Hiếu',
    department: 'Kinh doanh',
    position: 'Giám đốc',
  },
  {
    name: 'Mr. Đỗ Đức Nam',
    department: 'Khối sản xuất phần mềm',
    position: 'Giám đốc',
  },
  {
    avatarUrl: 'avt_OanhNT.png',
    name: 'Ms. Nguyễn Thị Oanh',
    department: 'Tài chính',
    position: 'Kế toán trưởng',
  },
  {
    name: 'Mrs. Khâu Thị Thu Phương',
    department: 'Dự án',
    position: 'Trưởng phòng',
  },
  {
    avatarUrl: 'avt_VyTH.png',
    name: 'Mr. Trương Hùng Vỹ',
    department: 'Hành chính nhân sự',
    position: 'Trưởng phòng',
  },
];
