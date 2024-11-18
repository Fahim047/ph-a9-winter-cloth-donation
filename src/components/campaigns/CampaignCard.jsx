const CampaignCard = ({ campaign }) => {
	return (
		<div className="bg-white shadow-lg rounded p-4">
			<div className="relative">
				<img
					src={campaign.image}
					alt={campaign.title}
					className="h-48 w-full object-cover rounded"
				/>
				<div className="absolute top-4 right-4">
					<span
						className={`px-3 py-1 rounded-full text-sm font-medium ${
							campaign.status === 'Active'
								? 'bg-green-500/90 text-white'
								: 'bg-yellow-500/90 text-white'
						}`}
					>
						{campaign.status}
					</span>
				</div>
			</div>

			<h3 className="text-xl font-bold mt-2">{campaign.title}</h3>
			<p className="text-gray-700 mt-1">{campaign.description}</p>
			<p className="text-gray-500 mt-1">Division: {campaign.division}</p>
			<button className="w-full bg-secondary hover:bg-secondary-dark text-white px-4 py-2 mt-3 rounded">
				Donate Now
			</button>
		</div>
	);
};
export default CampaignCard;
