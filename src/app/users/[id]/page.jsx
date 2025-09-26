async function getUser(id) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/users/${id}`,
		{
			cache: 'no-store',
		},
	);
	if (!res.ok) throw new Error('Failed to fetch user');
	return res.json();
}

const UsersPage = async ({ params }) => {
	const { id } = await params;

	const user = await getUser(id);

	return (
		<section>
			<h2 className="section-title">User #{user.id}</h2>
			<div className="card card--user-details">
				<span className="muted">Name</span>
				<span>{user.name}</span>

				<span className="muted">Username</span>
				<span>{user.username}</span>

				<span className="muted">Email</span>
				<span>{user.email}</span>

				<span className="muted">Phone</span>
				<span>{user.phone}</span>

				<span className="muted">Website</span>
				<span>{user.website}</span>

				<span className="muted">Address</span>
				<span>
					{user.address.street}, {user.address.suite},{' '}
					{user.address.city}, {user.address.zipcode}
				</span>

				<span className="muted">Geo</span>
				<span>
					lat: {user.address.geo.lat}, lng: {user.address.geo.lng}
				</span>

				<span className="muted">Company</span>
				<span>
					{user.company.name} — {user.company.catchPhrase} (
					{user.company.bs})
				</span>
			</div>
		</section>
	);
};

export default UsersPage;
