import clsx from 'clsx';
import React from 'react';

type TBlockTitleProps = {
  title: string;
  description?: string;
  className?: string;
};

const BlockTitle = ({ title, description, className }: TBlockTitleProps) => {
  return (
    <div className={clsx('flex flex-col items-center justify-center xl:w-225 mx-auto gap-4 pb-12', className)}>
      <h2 className="title-h3 xl:title-h2">{title}</h2>
      {description && (
        <div className="self-stretch text-center content-regular-18">{description}</div>
      )}
    </div>
  );
};

export default BlockTitle;
