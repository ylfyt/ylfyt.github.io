'use client';

import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import Link from 'next/link';
import { useRootContext } from '../contexts/root';
import Button from './button';
import NavItem from './nav-item';

const MainNavbar = () => {
    const { toggleDarkMode, isDark } = useRootContext();

    return (
        <nav className="sticky top-0 opacity-90 hover:opacity-100 bg-light dark:bg-dark shadow-md min-h-[60px] flex justify-center z-40">
            <div className="flex items-center px-12 justify-between w-[1024px]">
                <Link href="/" className="text-2xl font-semibold text-color0">
                    Yudi
                </Link>
                <div className="flex gap-5 items-center">
                    <Button
                        onClick={() => toggleDarkMode()}
                        className="neu-out neu-out-active p-2 rounded-full text-yellow-400"
                    >
                        {isDark ? <BsSunFill /> : <BsMoonStarsFill />}
                    </Button>

                    <NavItem to="/">Home</NavItem>
                    <NavItem to="/projects">Projects</NavItem>
                    <NavItem to="/about">About</NavItem>
                    <NavItem to="/contacts">Contacts</NavItem>
                </div>
            </div>
        </nav>
    );
};

export default MainNavbar;
