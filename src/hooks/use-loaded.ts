import { useEffect, useState } from 'react';

const useLoaded = () => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsLoaded(true);
		}, 200);
	}, []);

	return isLoaded;
};

export default useLoaded;
