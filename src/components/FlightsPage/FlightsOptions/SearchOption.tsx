import { useEffect, useMemo, useState } from 'react';
import { setSearchText } from '../../../redux/Options';
import { useAppDispatch } from '../../../redux/store';
import { debounce } from '../../../utils/helpers';
import AppInput from '../../common/AppInput';

const SearchOption = () => {
	const [text, setText] = useState('');
	const dispatch = useAppDispatch();

	const debouncedDispatch = useMemo(() => debounce((value: string) => dispatch(setSearchText(value)), 500), [dispatch]);

	useEffect(() => {
		debouncedDispatch(text);
	}, [text, debouncedDispatch]);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};

	return <AppInput value={text} onChange={handleOnChange} />;
};

export default SearchOption;
