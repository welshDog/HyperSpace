import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './index';

describe('Button', () => {
    it('renders with children', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click me</Button>);

        const button = screen.getByText('Click me');
        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies correct variant classes', () => {
        const { rerender } = render(<Button variant="primary">Primary</Button>);
        let button = screen.getByText('Primary');
        expect(button).toHaveClass('bg-blue-600');

        rerender(<Button variant="secondary">Secondary</Button>);
        button = screen.getByText('Secondary');
        expect(button).toHaveClass('bg-gray-200');
    });

    it('applies correct size classes', () => {
        const { rerender } = render(<Button size="small">Small</Button>);
        let button = screen.getByText('Small');
        expect(button).toHaveClass('px-3', 'py-1', 'text-sm');

        rerender(<Button size="medium">Medium</Button>);
        button = screen.getByText('Medium');
        expect(button).toHaveClass('px-4', 'py-2', 'text-base');

        rerender(<Button size="large">Large</Button>);
        button = screen.getByText('Large');
        expect(button).toHaveClass('px-6', 'py-3', 'text-lg');
    });
});
