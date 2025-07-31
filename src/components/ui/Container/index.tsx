import clsx from 'clsx';
import React from 'react';

type TContainerProps = {
  children: React.ReactNode;
  parentClassName?: string;
  isFullWidth?: boolean;
  isResponsiveWidth?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Container = (props: TContainerProps) => {
  const { children, isFullWidth, className, parentClassName, isResponsiveWidth } = props;

  const defaultFont = 'content-regular-16';

  const maxWidth = isFullWidth ? 'max-w-[1920px]' : 'max-w-screen-xl';

  const responsiveWidth = isResponsiveWidth ? 'max-xl:w-11/12' : '';

  return (
    <div className={clsx('w-full', parentClassName, defaultFont)}>
      <div className={clsx('mx-auto', maxWidth, responsiveWidth, className)}>
        {children}
      </div>
    </div>
  );
};

export default Container;
