import Link from 'next/link';

async function getUsers() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users', {
		cache: 'no-store',
	});
	if (!res.ok) throw new Error('Failed to fetch users');
	return res.json();
}

const UserItem = ({ user }) => {
	return (
		<Link href={`/users/${user.id}`} className="item">
			<div>
				<div className="item-title">{`${user.id}. ${user.name}`}</div>
				<div className="item-sub">{user.email}</div>
			</div>
			<span aria-hidden>→</span>
		</Link>
	);
};
const UsersPage = async () => {
	const users = await getUsers();
	console.log('users', users);

	return (
		<section className="content">
			<h2 className="section-title">Users</h2>
			<div className="users-list">
				{users.map((user) => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		</section>
	);
};

export default UsersPage;
