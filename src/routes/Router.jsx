import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
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
		],
	},
	{
		path: '/login',
		element: <h1>Login</h1>,
	},
	{
		path: '/register',
		element: <h1>Create an account</h1>,
	},
]);
export default router;
