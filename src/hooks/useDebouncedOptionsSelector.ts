import { useEffect, useState } from 'react';
import { useAppSelector } from '../redux/store';
import { debounce } from '../utils/helpers';

const useDebouncedOptionsSelector = () => {
	const searchText = useAppSelector(state => state.options.searchText);
	const [debouncedSearchText, setDebouncedSearchText] = useState(searchText);

	useEffect(() => {
		const handler = debounce((text: string) => {
			setDebouncedSearchText(text);
		}, 500);

		handler(searchText);
		return () => handler.cancel?.();
	}, [searchText]);

	return { searchText: debouncedSearchText };
};

export default useDebouncedOptionsSelector;
