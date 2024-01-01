import { FC, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Button from '../components/button';
import FadeUpComponent from '../components/fade-up-component';
import LinkIcon from '../components/link-icon';
import useLoaded from '../hooks/use-loaded';
import { ENV_GAS_URL } from '../utils/constants';
interface ContactsProps {}

const Contacts: FC<ContactsProps> = () => {
	const isLoaded = useLoaded();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const [feedback, setFeedback] = useState('');

	const handleSubmit = async () => {
		const data = {
			name,
			email,
			message,
		};
		setLoading(true);
		setFeedback('');
		fetch(`${ENV_GAS_URL}`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-type': 'text/plain',
			},
		})
			.then((result) => result.json())
			.then((result) => {
				if (!result?.success) {
					setFeedback('Failed to send');
					return;
				}
				setEmail('');
				setName('');
				setMessage('');
				setFeedback('Message sent');
			})
			.catch(() => {
				setFeedback('Failed to send');
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div className={`${isLoaded ? 'fade-start' : ''} pt-4 flex justify-center flex-col items-center gap-12`}>
			<FadeUpComponent order={1}>
				<div className="sm:w-2/3 w-full flex flex-col items-center gap-4">
					<div className="text-2xl font-semibold neu-in px-4 py-2 rounded-3xl text-color0">Contact Me</div>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							handleSubmit();
						}}
						className="w-full flex flex-col gap-6 items-center"
					>
						<input
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
							type="text"
							className="neu-in focus:neu-in-short transition-shadow w-full py-3 px-5 rounded-2xl"
							placeholder="Name"
						/>
						<input
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							className="neu-in focus:neu-in-short transition-shadow w-full py-3 px-5 rounded-2xl"
							placeholder="Email"
						/>
						<textarea
							required
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className="neu-in focus:neu-in-short transition-shadow w-full h-32 py-3 px-5 rounded-2xl resize-none"
							placeholder="Message"
						/>
						<div className="flex w-full">
							<div className="flex-1"></div>
							<Button isLoading={loading} className="neu-out active:neu-in-short w-fit disabled:active:neu-out rounded-full px-8 py-2 font-semibold hover:text-color0 flex justify-center items-center">
								Send
							</Button>
							<div className="flex-1 flex justify-start items-center">{feedback && <div className="ml-6 italic text-sm text-color0">{feedback}</div>}</div>
						</div>
					</form>
				</div>
			</FadeUpComponent>
			<FadeUpComponent order={2}>
				<div className="flex flex-col items-center neu-in w-fit px-6 py-2 pb-4 gap-4 rounded-xl">
					<div className="text-xl font-semibold text-color0 w-fit">Connect With Me</div>
					<div className="flex gap-8">
						<LinkIcon url="https://github.com/ylfyt" icon={<FaGithub size={30} />} />
						<LinkIcon url="https://www.linkedin.com/in/yudi-alfayat-6371781b8/" icon={<FaLinkedin size={30} />} />
						<LinkIcon url="mailto:yalfayat@gmail.com" icon={<HiOutlineMail size={30} />} />
					</div>
				</div>
			</FadeUpComponent>
		</div>
	);
};

export default Contacts;
