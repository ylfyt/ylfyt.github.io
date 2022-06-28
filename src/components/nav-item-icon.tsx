import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface NavItemIconProps {
	to: string;
	icon: JSX.Element;
	label: string;
}

const NavItemIcon: FC<NavItemIconProps> = ({ to, icon, label }) => {
	return (
		<NavLink
			to={to}
			className={({ isActive }) => (isActive ? 'neu-in text-color0' : 'neu-out hover:text-color0') + ` flex flex-col items-center justify-center h-[60px] aspect-square rounded-full font-normal`}
		>
			<div className="text-2xl">{icon}</div>
			<span className="text-[10px]">{label}</span>
		</NavLink>
	);
};

export default NavItemIcon;
