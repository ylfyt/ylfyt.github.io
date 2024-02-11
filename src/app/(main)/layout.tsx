'use client'

import MainNavbar from "@/components/main-navbar";
import MobileNavbar from "@/components/mobile-navbar";
import RootProvider from "@/contexts/root";

export default function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<RootProvider>
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
		</RootProvider>
	);
}
