import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from 'lucide-react';
import * as React from 'react';

import type { Button } from '@/components/ui/button';
import { cn } from '@/utils/Helpers';

import { buttonVariants } from './buttonVariants';

function Pagination({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn('flex flex-row items-center gap-1', className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<'li'>) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
  variant?: React.ComponentProps<typeof Button>['variant'];
  disabled?: boolean;
} & Pick<React.ComponentProps<typeof Button>, 'size'> &
React.ComponentProps<'a'>;

function PaginationLink({
  className,
  isActive,
  variant,
  size = 'icon',
  disabled = false,
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? 'page' : undefined}
      aria-disabled={disabled}
      data-slot="pagination-link"
      data-active={isActive}
      data-disabled={disabled}
      className={cn(
        buttonVariants({
          variant: variant ?? (isActive ? 'activePagination' : 'outline1'),
          size,
        }),
        disabled && 'pointer-events-none opacity-50',
        className,
        'mx-1',
      )}
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
          return;
        }
        props.onClick?.(e as any);
      }}
      {...props}
    />
  );
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="icon"
      variant="hoverOutline"
      className={cn('gap-1 px-2.5 mr-3', className)}
      {...props}
    >
      <ChevronLeftIcon />
      {/* <span className="hidden sm:block">Previous</span> */}
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="icon"
      variant="hoverOutline"
      className={cn('gap-1 px-2.5 sm:pr-2.5 ml-3', className)}
      {...props}
    >
      {/* <span className="hidden sm:block">Next</span> */}
      <ChevronRightIcon />
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn('flex size-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
