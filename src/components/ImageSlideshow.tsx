import { FC, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Button from './button';

interface ImageSlideShowProps {
	images: {
		count: number;
		dir: string;
	};
}

const ImageSlideShow: FC<ImageSlideShowProps> = ({ images }) => {
	const [idx, setIdx] = useState(1);
	const [direction, setDirection] = useState('');

	const slide = (isNext: boolean) => {
		setDirection(isNext ? 'animate-slideFromLeft' : 'animate-slideFromRight');
		let next = isNext ? idx + 1 : idx - 1;
		if (next > images.count) next = 1;
		if (next < 1) next = images.count;
		setIdx(next);
	};

	const ids = [...Array(images.count).keys()].map((i) => i + 1);

	return (
		<div className="neu-in flex px-4 py-2 rounded-xl justify-center relative overflow-hidden">
			<div className="flex justify-center w-full">
				{ids.map((id, i) => {
					return (
						<div key={i} className={`${id !== idx ? 'hidden' : direction} aspect-video w-full h-full flex items-center justify-center`}>
							<img className="rounded-xl max-h-full" src={`${images.dir}/${id}.png`} alt="" />
						</div>
					);
				})}
			</div>
			<div className="absolute opacity-60 bottom-6 flex gap-4">
				{ids.map((id, i) => {
					return <div key={i} onClick={() => setIdx(id)} className={`${id === idx ? 'bg-color0' : 'bg-gray-400 hover:cursor-pointer'} hover:scale-125 h-1 w-[50px] rounded-lg`}></div>;
				})}
			</div>
			<div className="absolute flex justify-between w-full px-6 top-1/2 -translate-y-1/2">
				<Button onClick={() => slide(false)} className="text-4xl bg-gray-400 opacity-10 hover:opacity-50 px-2 py-6 rounded-l-2xl rounded-r-md hover:text-color0">
					<FaChevronLeft className="opacity-100" />
				</Button>
				<Button onClick={() => slide(true)} className="text-4xl bg-gray-400 opacity-10 hover:opacity-50 px-2 py-6 rounded-r-2xl rounded-l-md hover:text-color0">
					<FaChevronRight className="opacity-100" />
				</Button>
			</div>
		</div>
	);
};

export default ImageSlideShow;