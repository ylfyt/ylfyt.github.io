import { FC } from 'react';

interface NeuIconProps {
	icon: JSX.Element;
	className?: string;
}

const NeuIcon: FC<NeuIconProps> = ({ icon, className }) => {
	return <div className={`neu-out text-lg flex w-fit items-center p-2 justify-center rounded-full ${className}`}>{icon}</div>;
};

export default NeuIcon;
