import { FC, ReactNode } from 'react';

interface FadeUpComponentProps {
	children: ReactNode;
	order: number;
}

const FadeUpComponent: FC<FadeUpComponentProps> = ({ children, order }) => {
	return <div data-fade={order}>{children}</div>;
};

export default FadeUpComponent;
