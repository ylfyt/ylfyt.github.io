import { FC } from 'react';
import { HiOutlineDesktopComputer, HiOutlineMail } from 'react-icons/hi';
import NavItem from '../components/nav-item';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import NeuIcon from '../components/neu-icon';
import { BiPaperPlane } from 'react-icons/bi';
import { SiDotnet, SiGraphql, SiReact, SiSvelte, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import LinkIcon from './link-icon';

interface ProfileOverviewProps {}

const ProfileOverview: FC<ProfileOverviewProps> = () => {
	return (
		<div className="flex flex-col md:flex-row-reverse gap-4 items-start justify-evenly">
			<div className="w-full sm:w-1/3 flex items-center justify-center">
				<div className="neu-out w-fit  animate-scaleUp rounded-full p-4">
					<img className="w-[250px] aspect-square rounded-full" src={`${import.meta.env.BASE_URL}profile.jpg`} alt="profile" />
				</div>
			</div>
			<div className="flex flex-col gap-4 sm:w-2/3">
				<div className="flex flex-col justify-start neu-in px-5 py-2 gap-1 items-start rounded-2xl">
					<span className="text-2xl font-semibold">Hi, I'm Yudi</span>
					<div className="flex items-center gap-2">
						<NeuIcon className="text-color0" icon={<HiOutlineDesktopComputer />} />
						<span className="text-lg font-semibold">Fullstack Developer</span>
					</div>
					<span className="text-sm">I'm currently working as computer science student and fullstack developer</span>
				</div>
				<div className="flex gap-4 flex-col">
					<div className="flex gap-4">
						<NavItem to="/contacts" className="neu-out flex items-center gap-2 w-fit hover:text-color0 font-semibold">
							<NeuIcon className="neu-in" icon={<BiPaperPlane />} />
							Contact me
						</NavItem>
						<a target="_blank" href="https://github.com/ylfyt" className="neu-out flex items-center gap-2 px-5 hover:text-color0 font-semibold rounded-lg">
							<NeuIcon className="neu-in" icon={<BsFillFileEarmarkPersonFill />} />
							Resume
						</a>
					</div>
					<div className="flex gap-4">
						<LinkIcon className="animate-scaleUp" url="https://github.com/ylfyt" icon={<FaGithub size={24} />} />
						<LinkIcon className="animate-scaleUp" url="https://www.linkedin.com/in/yudi-alfayat-6371781b8/" icon={<FaLinkedin size={24} />} />
						<LinkIcon className="animate-scaleUp" url="mailto:yalfayat@gmail.com" icon={<HiOutlineMail size={24} />} />
					</div>
				</div>
				<div className="mt-4 neu-in rounded-2xl w-fit px-5 py-2">
					<div className="text-xl mb-3 font-semibold">Current favorite technologies</div>
					<div className="flex gap-3">
						<NeuIcon className="text-[24px] animate-scaleUp" icon={<SiDotnet />} />
						<NeuIcon className="text-[24px] animate-scaleUp" icon={<SiTypescript />} />
						<NeuIcon className="text-[24px] animate-scaleUp" icon={<SiGraphql />} />
						<NeuIcon className="text-[24px] animate-scaleUp" icon={<SiReact />} />
						<NeuIcon className="text-[24px] animate-scaleUp" icon={<SiSvelte />} />
						<NeuIcon className="text-[24px] animate-scaleUp" icon={<SiTailwindcss />} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileOverview;
