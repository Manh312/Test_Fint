import { Button } from '../ui/button';
import Icon from '../ui/Icon';
import { Input } from '../ui/input';

type TSearchGroupProps = {
  category: string;
  setCategory: (value: string) => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
};

const SearchGroup = (props: TSearchGroupProps) => {
  const { category, setCategory, searchTerm, setSearchTerm, location, setLocation } = props;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-[clamp(1rem,2.5vw,1.5rem)]">
      {/* Search Input */}
      <div className="sm:col-span-4 relative text-neutral-8">
        <Input
          type="text"
          placeholder="Tìm kiếm theo tên dự án"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="!px-[clamp(0.75rem,2vw,1.25rem)] !py-[clamp(0.5rem,1.5vw,0.75rem)] !content-medium-14 !h-auto bg-[rgba(255,255,255,0.2)] focus-visible:ring-2 focus-visible:ring-blue-500 focus:border-transparent w-full text-[clamp(0.875rem,2vw,0.875rem)]"
        />
        <Icon
          name="isax-search-normal1"
          size="xl"
          className="absolute right-[clamp(0.5rem,1.5vw,0.875rem)] top-[50%] transform -translate-y-1/2"
        />
      </div>

      {/* Category and Location - Stack on mobile, side by side on larger screens */}
      <div className="sm:col-span-6 grid grid-cols-2 gap-[clamp(0.75rem,2vw,1.5rem)]">
        {/* Category Select */}
        <div className="relative text-neutral-8 rounded-lg border border-solid border-neutral-8 bg-[rgba(255,255,255,0.2)]">
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="w-full px-[clamp(0.75rem,2vw,1.25rem)] py-[clamp(0.5rem,1.5vw,0.75rem)] content-medium-14 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer text-[clamp(0.875rem,2vw,0.875rem)] bg-transparent"
          >
            <option className="text-neutral-3" value="Danh mục">Danh mục</option>
            <option className="text-neutral-3" value="Công nghệ">Công nghệ</option>
            <option className="text-neutral-3" value="Kinh doanh">Kinh doanh</option>
            <option className="text-neutral-3" value="Giáo dục">Giáo dục</option>
            <option className="text-neutral-3" value="Y tế">Y tế</option>
          </select>
          <Icon
            name="isax-arrow-down"
            size="xl"
            className="absolute right-[clamp(0.5rem,1.5vw,0.875rem)] top-[50%] transform -translate-y-1/2 pointer-events-none"
          />
        </div>

        {/* Location Select */}
        <div className="relative text-neutral-8 rounded-lg border border-solid border-neutral-8 bg-[rgba(255,255,255,0.2)]">
          <select
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="w-full px-[clamp(0.75rem,2vw,1.25rem)] py-[clamp(0.5rem,1.5vw,0.75rem)] content-medium-14 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer text-[clamp(0.875rem,2vw,0.875rem)] bg-transparent"
          >
            <option className="text-neutral-3" value="Đơn vị">Đơn vị</option>
            <option className="text-neutral-3" value="Hà Nội">Hà Nội</option>
            <option className="text-neutral-3" value="TP.HCM">TP.HCM</option>
            <option className="text-neutral-3" value="Đà Nẵng">Đà Nẵng</option>
            <option className="text-neutral-3" value="Cần Thơ">Cần Thơ</option>
          </select>
          <Icon
            name="isax-arrow-down"
            size="xl"
            className="absolute right-[clamp(0.5rem,1.5vw,0.875rem)] top-[50%] transform -translate-y-1/2 pointer-events-none"
          />
        </div>
      </div>

      {/* Search Button */}
      <Button
        className="sm:col-span-2 w-full px-[clamp(1rem,3vw,1.5rem)] py-[clamp(0.5rem,1.5vw,0.75rem)] text-[clamp(0.875rem,2vw,1rem)]"
        variant="gradient1"
      >
        Tìm kiếm
      </Button>
    </div>
  );
};

export default SearchGroup;
