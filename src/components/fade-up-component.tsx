import { FC, ReactNode } from 'react';

interface FadeUpComponentProps {
	children: ReactNode;
	className: string;
}

const FadeUpComponent: FC<FadeUpComponentProps> = ({ children, className: cn }) => {
	return <div className={`use-transition show w-full flex justify-center items-center ${cn}`}>{children}</div>;
};

export default FadeUpComponent;
