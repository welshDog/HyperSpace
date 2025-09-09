import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
}

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = 'primary',
    size = 'medium'
}) => {
    const baseClasses = 'font-bold rounded focus:outline-none focus:ring-2 transition-colors';
    const variantClasses = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500'
    };
    const sizeClasses = {
        small: 'px-3 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg'
    };

    return (
        <button
      className= {`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`
}
onClick = { onClick }
    >
    { children }
    </button>
  );
};

export default Button;
