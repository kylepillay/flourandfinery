import React, {type FC, HtmlHTMLAttributes, InputHTMLAttributes} from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {}

export const MySizeIcon: FC<Props> = ({
  className = 'w-4 h-4 flex-shrink-0',
  ...args
}) => {
  return (
    <svg
      className={className}
      {...args}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 9V3H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 15V21H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 3L13.5 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 13.5L3 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
