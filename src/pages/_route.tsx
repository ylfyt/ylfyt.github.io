import { Outlet, RouteObject } from 'react-router-dom';
import MainNavbar from '../components/main-navbar';
import MobileNavbar from '../components/mobile-navbar';
import Home from '.';
import Projects from './projects';
import About from './about';
import Contacts from './contacts';
import ProjectDetail from './projects/[id]';

function MainLayout() {
	return (
		<div>
			<div className="hidden sticky top-0 sm:block z-50">
				<MainNavbar />
			</div>
			<div className="block sm:hidden z-50">
				<MobileNavbar />
			</div>
			<div className="flex justify-center">
				<div className="w-full px-4 md:w-[1024px]">
					<Outlet />
				</div>
			</div>
		</div>
	);
}

const MainRoute: RouteObject = {
	path: '/',
	element: <MainLayout />,
	children: [
		{
			index: true,
			element: <Home />,
		},
		{
			path: 'projects',
			element: <Projects />,
		},
		{
			path: 'projects/:id',
			element: <ProjectDetail />,
		},
		{
			path: 'about',
			element: <About />,
		},
		{
			path: 'contacts',
			element: <Contacts />,
		},
	],
};

export default MainRoute;
