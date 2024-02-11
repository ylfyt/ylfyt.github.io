import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface NavItemIconProps {
	to: string;
	icon: JSX.Element;
	label: string;
}

const NavItemIcon: FC<NavItemIconProps> = ({ to, icon, label }) => {
	const pathname = usePathname();
	return (
		<Link href={to} className={`${to === pathname ? "neu-in text-color0" : "neu-out hover:text-color0"} flex flex-col items-center justify-center h-[60px] aspect-square rounded-full font-normal`}>
			<div className="text-2xl">{icon}</div>
			<span className="text-[10px]">{label}</span>
		</Link>
	);
};

export default NavItemIcon;
