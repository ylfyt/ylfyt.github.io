import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";

interface NavItemProps {
	children?: ReactNode;
	to: string;
	className?: string;
}

const NavItem: FC<NavItemProps> = ({ children, className = "", to }) => {
	const pathname = usePathname();

	return (
		<Link href={to} className={`${pathname === to ? "neu-in text-color0" : "hover:neu-out"} font-semibold py-2 px-5 rounded-lg ${className}`}>
			{children}
		</Link>
	);
};

export default NavItem;
