"use client";

import MainNavbar from "@/components/main-navbar";
import MobileNavbar from "@/components/mobile-navbar";
import { useRootContext } from "@/contexts/root";
import { useEffect } from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
	const { isDark } = useRootContext();

	useEffect(() => {
		isDark ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
	}, [isDark]);

	return (
		<div>
			<div className="hidden sticky top-0 sm:block z-30">
				<MainNavbar />
			</div>
			<div className="block sm:hidden z-30">
				<MobileNavbar />
			</div>
			<div className="flex justify-center">
				<div className="w-full px-4 md:w-[1024px]">{children}</div>
			</div>
		</div>
	);
}
