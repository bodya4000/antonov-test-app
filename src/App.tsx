import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC } from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import Navigation from './Navigation';
import { store } from './redux/store';

interface AppProps {
	propName?: string;
}

const App: FC<AppProps> = () => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={new QueryClient()}>
				<Header />
				<Navigation />
			</QueryClientProvider>
		</Provider>
	);
};

export default App;
