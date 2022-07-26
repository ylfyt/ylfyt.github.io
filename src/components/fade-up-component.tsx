import { FC, ReactNode } from 'react';

interface FadeUpComponentProps {
	children: ReactNode;
	order: number;
}

const FadeUpComponent: FC<FadeUpComponentProps> = ({ children, order }) => {
	return (
		<div className="w-full flex justify-center items-center" data-fade={order}>
			{children}
		</div>
	);
};

export default FadeUpComponent;
