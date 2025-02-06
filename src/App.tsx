import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC } from 'react';
import Header from './components/Header/Header';
import Navigation from './Navigation';

interface AppProps {
	propName?: string;
}

const App: FC<AppProps> = () => {
	return (
		<QueryClientProvider client={new QueryClient()}>
			<Header />
			<Navigation />
		</QueryClientProvider>
	);
};

export default App;
