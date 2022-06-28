import { FC, ReactNode } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface DropdownMenuProps {
	children: ReactNode;
	label: string;
	className?: string;
}

const DropdownMenu: FC<DropdownMenuProps> = ({ children, label, className }) => {
	return (
		<div className={`group relative inline-block px-4 py-1 rounded-lg ${className}`}>
			<span className="flex items-center py-2 justify-between gap-2">
				<span>{label}</span>
				<FaChevronDown className="font-extrabold" />
			</span>
			<div className="hidden group-hover:flex flex-col gap-2 bg-light dark:bg-dark absolute rounded-sm z-20 right-0 shadow-md">{children}</div>
		</div>
	);
};

export default DropdownMenu;
