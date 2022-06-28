import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
	children?: ReactNode;
	to: string;
	className?: string;
}

const NavItem: FC<NavItemProps> = ({ children, className = '', to }) => {
	return (
		<NavLink to={to} className={({ isActive }) => (isActive ? 'neu-in text-color0' : 'hover:neu-out') + ` font-semibold py-2 px-5 rounded-lg ${className}`}>
			{children}
		</NavLink>
	);
};

export default NavItem;
