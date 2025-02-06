import useOptionsSelector from '../../../hooks/useOptionsSelector';
import { setSearchText } from '../../../redux/Options';
import { useAppDispatch } from '../../../redux/store';
import AppInput from '../../common/AppInput';

const SearchOption = () => {
	const { searchText } = useOptionsSelector();
	const dispatch = useAppDispatch();
	return <AppInput value={searchText} onChange={e => dispatch(setSearchText(e.target.value))} />;
};

export default SearchOption;
