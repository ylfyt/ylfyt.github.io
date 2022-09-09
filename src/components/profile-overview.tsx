import { FC } from 'react';
import { HiOutlineDesktopComputer, HiOutlineMail } from 'react-icons/hi';
import NavItem from '../components/nav-item';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import NeuIcon from '../components/neu-icon';
import { BiPaperPlane } from 'react-icons/bi';
import { SiDotnet, SiGraphql, SiReact, SiSvelte, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import LinkIcon from './link-icon';
import FadeUpComponent from './fade-up-component';

interface ProfileOverviewProps {}

const ProfileOverview: FC<ProfileOverviewProps> = () => {
	return (
		<div className="w-full flex flex-col md:flex-row-reverse gap-4 items-start justify-evenly">
			<FadeUpComponent order={1}>
				<div className="w-full sm:w-1/3 md:w-2/3 flex items-center justify-center ml-auto mr-auto">
					<div className="neu-out w-fit rounded-full p-4">
						<img className="w-[250px] aspect-square rounded-full" src={`${import.meta.env.BASE_URL}profile.jpg`} alt="profile" />
					</div>
				</div>
			</FadeUpComponent>
			<FadeUpComponent order={1} mobileOrder={2}>
				<div className="flex flex-col gap-4 w-full">
					<div className="flex flex-col justify-start neu-in px-5 py-2 gap-1 items-start rounded-2xl">
						<span className="text-2xl font-semibold">Hi, I'm Yudi</span>
						<div className="flex items-center gap-2">
							<NeuIcon className="text-color0" icon={<HiOutlineDesktopComputer />} />
							<span className="text-lg font-semibold">Software Engineer</span>
						</div>
						<span className="text-sm">I'm currently working as computer science student and Software Engineer</span>
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
							<LinkIcon url="https://github.com/ylfyt" icon={<FaGithub size={24} />} />
							<LinkIcon url="https://www.linkedin.com/in/yudi-alfayat-6371781b8/" icon={<FaLinkedin size={24} />} />
							<LinkIcon url="mailto:yalfayat@gmail.com" icon={<HiOutlineMail size={24} />} />
						</div>
					</div>
					<div className="mt-4 neu-in rounded-2xl w-fit px-5 py-2">
						<div className="text-xl mb-3 font-semibold">Current favorite technologies</div>
						<div className="flex gap-3">
							<NeuIcon className="text-[24px]" icon={<SiDotnet />} />
							<NeuIcon className="text-[24px]" icon={<SiTypescript />} />
							<NeuIcon className="text-[24px]" icon={<SiGraphql />} />
							<NeuIcon className="text-[24px]" icon={<SiReact />} />
							<NeuIcon className="text-[24px]" icon={<SiSvelte />} />
							<NeuIcon className="text-[24px]" icon={<SiTailwindcss />} />
						</div>
					</div>
				</div>
			</FadeUpComponent>
		</div>
	);
};

export default ProfileOverview;
