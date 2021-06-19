import useSWR from "swr";
import A from "axios";
const fetcher = (url) => A.get(url);

const useThumbs = () => {
	const { data: response, error } = useSWR(
		`https://jsonplaceholder.typicode.com/photos`,
		fetcher
	);

	return {
		thumbs: response,
		isLoading: !error && !response,
		isError: error,
	};
};

export { useThumbs };
