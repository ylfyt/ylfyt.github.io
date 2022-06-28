import { FC } from 'react';
import NeuIcon from './neu-icon';

interface LinkIconProps {
	icon: JSX.Element;
	url: string;
}

const LinkIcon: FC<LinkIconProps> = ({ icon, url }) => {
	return (
		<a target="_blank" href={url} className="hover:text-color0">
			<NeuIcon className="p-3" icon={icon} />
		</a>
	);
};

export default LinkIcon;
