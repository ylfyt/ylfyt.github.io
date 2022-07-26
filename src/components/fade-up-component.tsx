import { FC, ReactNode } from 'react';

interface FadeUpComponentProps {
	children: ReactNode;
	order: number;
	mobileOrder?: number;
}

const FadeUpComponent: FC<FadeUpComponentProps> = ({ children, order, mobileOrder }) => {
	if (!mobileOrder) mobileOrder = order;

	return <div className={`use-transition show w-full flex justify-center items-center show-${mobileOrder} sm:show-${order}`}>{children}</div>;
};

export default FadeUpComponent;
