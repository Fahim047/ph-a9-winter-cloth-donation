import Banner from '../components/home/Banner';
import { useAuth } from '../hooks';

const Home = () => {
	const { user } = useAuth();
	console.log(user);
	return (
		<>
			<Banner />
		</>
	);
};

export default Home;
