import { FC, ReactNode } from 'react';

interface FadeUpComponentProps {
	children: ReactNode;
	order: number;
	mobileOrder?: number;
}

const FadeUpComponent: FC<FadeUpComponentProps> = ({ children, order, mobileOrder }) => {
	if (!mobileOrder) mobileOrder = order;

	return (
		<div
			className={`use-transition show w-full flex justify-center items-center ${mobileOrder === 1 ? 'show-1' : mobileOrder === 2 ? 'show-2' : 'show-3'} ${
				order === 1 ? 'sm:show-1' : order === 2 ? 'sm:show-2' : 'sm:show-3'
			}`}
		>
			{children}
		</div>
	);
};

export default FadeUpComponent;
