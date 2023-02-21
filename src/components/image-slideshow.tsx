import { FC, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaSearch } from 'react-icons/fa';
import Button from './button';

interface ImageSlideShowProps {
	images: string[]
}

const ImageSlideShow: FC<ImageSlideShowProps> = ({ images }) => {
	const [idx, setIdx] = useState(0);
	const [direction, setDirection] = useState('');
	const [fullscreen, setFullscreen] = useState(false);

	const slide = (isNext: boolean) => {
		setDirection(isNext ? 'animate-slideFromLeft' : 'animate-slideFromRight');
		let next = isNext ? idx + 1 : idx - 1;
		if (next >= images.length) next = 0;
		if (next < 0) next = images.length-1;
		setIdx(next);
	};

	return (
		<div className="neu-in flex px-4 py-2 rounded-xl justify-center relative overflow-hidden w-full">
			<div className="flex justify-center w-full">
				{images.map((path, i) => {
					return (
						<div key={i} className={`${i !== idx ? 'hidden' : direction} aspect-video w-full h-full flex items-center justify-center`}>
							<img className="rounded-xl max-h-full" src={path} alt="" />
						</div>
					);
				})}
			</div>
			<div className="absolute opacity-60 bottom-4 sm:bottom-6 flex gap-3 sm:gap-4">
				{images.map((_, i) => {
					return <div key={i} onClick={() => setIdx(i)} className={`${i === idx ? 'bg-color0' : 'bg-gray-400 hover:cursor-pointer'} hover:scale-125 h-1 w-[20px] sm:w-[50px] rounded-lg`}></div>;
				})}
			</div>
			<div className="absolute flex justify-between w-full sm:px-6 px-2 top-3/4 sm:top-1/2 -translate-y-1/2">
				<Button onClick={() => slide(false)} className="sm:text-4xl px-1 bg-gray-400 opacity-30 sm:opacity-20 hover:opacity-60 sm:px-2 sm:py-6 rounded-l-3xl rounded-r-md hover:text-color0">
					<FaChevronLeft className="opacity-100" />
				</Button>
				<Button onClick={() => slide(true)} className="sm:text-4xl bg-gray-400 opacity-30 sm:opacity-20 hover:opacity-60 px-1 py-4 sm:px-2 sm:py-6 rounded-r-2xl rounded-l-md hover:text-color0">
					<FaChevronRight className="opacity-100" />
				</Button>
			</div>
			<div className="absolute hidden text-color0 top-2 right-3 text-lg z-20">
				<Button onClick={() => setFullscreen(true)} className="opacity-60 hover:opacity-100">
					<FaSearch className="opacity-100" />
				</Button>
			</div>
			{fullscreen && (
				<div className="fixed top-0 h-screen z-20 w-full flex items-center">
					<div className="flex justify-center items-center w-full max-h-[80vh] min-h-[55vh] opacity-100 relative z-50">
						<button onClick={() => setFullscreen(false)} className="absolute lg:right-40 lg:top-6 top-2 right-4 text-2xl flex items-center py-0 opacity-60">
							&#10006;
						</button>
						<img className="max-h-[75vh] opacity-100 sm:max-w-[90vw] lg::max-w-[60vw]" src={images[idx]} alt="" />
					</div>
					<div className="fixed bg-gray-500 h-screen w-full z-auto opacity-80"></div>
				</div>
			)}
		</div>
	);
};

export default ImageSlideShow;
