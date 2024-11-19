import { createBrowserRouter } from 'react-router-dom';
import LoginForm from '../components/forms/LoginForm';
import RegisterForm from '../components/forms/RegisterForm';
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
		element: <LoginForm />,
	},
	{
		path: '/register',
		element: <RegisterForm />,
	},
]);
export default router;
