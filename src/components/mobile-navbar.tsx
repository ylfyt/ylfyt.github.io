import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { FaClipboardList, FaHome, FaPhone, FaUser } from 'react-icons/fa';
import { useRootContext } from '../contexts/root';
import Button from './button';
import NavItemIcon from './nav-item-icon';

const MobileNavbar = () => {
	const { toggleDarkMode, isDark } = useRootContext();

	return (
		<nav className="fixed bottom-0 bg-light dark:bg-dark shadow-[-2px_-2px_10px_rgba(0,0,0,0.2)] w-full py-2 flex items-center z-30">
			<div className="flex flex-1 items-center justify-evenly">
				<NavItemIcon icon={<FaHome />} label="Home" to="/" />
				<NavItemIcon icon={<FaClipboardList />} label="Projects" to="/projects" />
				<NavItemIcon icon={<FaUser />} label="About" to="/about" />
				<NavItemIcon icon={<FaPhone />} label="Contacts" to="/contacts" />
			</div>
			<div>
				<Button onClick={() => toggleDarkMode()} className="neu-out neu-out-active p-2 rounded-full text-yellow-400 mr-2">
					{isDark ? <BsSunFill /> : <BsMoonStarsFill />}
				</Button>
			</div>
		</nav>
	);
};

export default MobileNavbar;
