import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/forms/Login';
import MainLayout from '../layouts/MainLayout';
import CampaignsPage from '../pages/CampaignsPage';
import Home from '../pages/Home';
import NotFoundPage from '../pages/NotFound';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <NotFoundPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/campaigns',
				element: <CampaignsPage />,
				loader: async () => {
					const response = await fetch('/data.json');
					const data = await response.json();
					return data;
				},
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/register',
		element: <h1>Create an account</h1>,
	},
]);
export default router;
