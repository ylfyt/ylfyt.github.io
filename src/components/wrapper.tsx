import { FC, ReactNode } from 'react';

interface WrapperProps {
	variant?: 'sm' | 'lg';
	children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ variant = 'sm', children }) => {
	return <div className={`w-full ${variant === 'sm' ? 'max-w-[400px]' : 'max-w-[600px]'}`}>{children}</div>;
};

export default Wrapper;
