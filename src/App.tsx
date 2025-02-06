import { FC } from 'react';
import Header from './components/Header/Header';
import Navigation from './Navigation';

interface AppProps {
	propName?: string;
}

const App: FC<AppProps> = () => {
	return (
		<>
			<Header />
			<Navigation />
		</>
	);
};

export default App;
