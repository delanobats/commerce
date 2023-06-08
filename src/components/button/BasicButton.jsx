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
  href,
  disabled,
  ...props
}) => {
  return (
    <a
      href={href}
      className={clsx(
        styles['sb-basic-button'],
        styles[`sb-basic-button--${size}`],
        styles[`sb-basic-button--${shape}`],
        styles[`sb-basic-button--${configuration}`],
        'bg-orange-700',
        'text-white-50',
        'box-shadow--4',
        'hover:opacity-90',
        {
          [`box-shadow--${boxShadow}`]: configuration === 'filled',
          ['w-[100%]']: stretch,
          ['cursor-not-allowed']: disabled,
          ['text-white-900']: disabled,
          ['bg-white-700']: disabled,
        }
      )}
      onClick={onClick}
      {...props}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {label}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </a>
  );
};
