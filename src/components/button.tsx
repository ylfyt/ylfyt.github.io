import { FC, ReactNode } from 'react';
import Spinner from './spinner';

interface ButtonProps {
	children?: ReactNode;
	isLoading?: boolean;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ children, isLoading = false, className, onClick }) => {
	return (
		<button disabled={isLoading} onClick={onClick} className={`relative focus:outline-2 focus:outline-color0 disabled:cursor-not-allowed disabled:opacity-80 ${className}`}>
			{isLoading && <Spinner className="fill-color0 absolute top-0 bottom-0 mt-auto mb-auto right-0 left-0 mr-auto ml-auto" />}
			<span className={`${!isLoading ? 'visible' : 'invisible'}`}>{children}</span>
		</button>
	);
};

export default Button;
