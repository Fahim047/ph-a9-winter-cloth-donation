import { useLoaderData } from 'react-router-dom';
import CampaignCard from '../components/campaigns/CampaignCard';

const CampaignsPage = () => {
	const campaigns = useLoaderData();
	console.log(campaigns);
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
			{campaigns.map((campaign) => (
				<CampaignCard key={campaign.id} campaign={campaign} />
			))}
		</div>
	);
};

export default CampaignsPage;
