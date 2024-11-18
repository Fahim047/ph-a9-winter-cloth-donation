import { useState } from 'react';

const DonationDetails = ({ campaign }) => {
	const [form, setForm] = useState({
		quantity: '',
		itemType: '',
		location: '',
		notes: '',
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert('Thank you! We will reach your destination soon.');
		setForm({ quantity: '', itemType: '', location: '', notes: '' });
	};

	return (
		<div className="p-8">
			<h2 className="text-2xl font-bold">{campaign.title}</h2>
			<p className="mt-4">{campaign.description}</p>
			<form onSubmit={handleSubmit} className="mt-8">
				<div>
					<label>Quantity</label>
					<input
						type="number"
						name="quantity"
						value={form.quantity}
						onChange={handleChange}
						required
						className="block w-full border px-3 py-2 mt-1 rounded"
					/>
				</div>
				<div>
					<label>Item Type</label>
					<input
						type="text"
						name="itemType"
						value={form.itemType}
						onChange={handleChange}
						required
						className="block w-full border px-3 py-2 mt-1 rounded"
					/>
				</div>
				<div>
					<label>Pickup Location</label>
					<input
						type="text"
						name="location"
						value={form.location}
						onChange={handleChange}
						required
						className="block w-full border px-3 py-2 mt-1 rounded"
					/>
				</div>
				<div>
					<label>Additional Notes (optional)</label>
					<textarea
						name="notes"
						value={form.notes}
						onChange={handleChange}
						className="block w-full border px-3 py-2 mt-1 rounded"
					></textarea>
				</div>
				<button
					type="submit"
					className="bg-green-500 text-white px-6 py-2 mt-4 rounded hover:bg-green-700"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default DonationDetails;
