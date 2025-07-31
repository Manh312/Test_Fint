import Icon from '@/components/ui/Icon';
import { cn } from '@/utils/Helpers';

type Props = {
  iconName: string;
  className?: string;
  size?: 'base' | '2xl' | 'xl' | null | undefined;
};

const FooterIcon = (props: Props) => {
  const { iconName, className, size = 'base' } = props;

  return (
    <div className={cn('bg-white/10 p-2 rounded-full', className)}>
      <Icon name={iconName} size={size} />
    </div>
  );
};

export default FooterIcon;
