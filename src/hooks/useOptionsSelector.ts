import { useAppSelector } from '../redux/store';

const useOptionsSelector = () => {
	return useAppSelector(state => state.options);
};

export default useOptionsSelector;
