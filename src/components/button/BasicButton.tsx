import React from 'react';
import styles from './basic-button.module.scss';
import clsx from 'clsx';

/**
 * Primary button component with sizes and color
 */
export const BasicButton = ({
  size = 'large',
  label,
  shape = 'round',
  startIcon,
  endIcon,
  boxShadow,
  configuration,
  onClick,
  stretch,
  ...props
}: any) => {
  return (
    <button
      type="button"
      className={clsx(
        styles['sb-basic-button'],
        styles[`sb-basic-button--${size}`],
        styles[`sb-basic-button--${shape}`],
        styles[`sb-basic-button--${configuration}`],
        'bg-blue-500',
        'text-white-500',
        'box-shadow--4',
        'hover:opacity-90',
        {
          [`box-shadow--${boxShadow}`]: configuration === 'filled',
          ['w-[100%]']: stretch,
        }
      )}
      onClick={onClick}
      {...props}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {label}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
};