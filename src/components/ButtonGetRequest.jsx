'use client';

async function getMessageFromAPI() {
	const res = await fetch('/api/hello', {
		cache: 'no-store',
	});
	if (!res.ok) throw new Error('Failed to fetch message');
	return res.json();
}

const ButtonGetRequest = () => {
	const clickHandler = async () => {
		const { message } = await getMessageFromAPI();
		alert(message);
	};
	return (
		<button className="btn btn-ghost" onClick={clickHandler}>
			Make get request(client)
		</button>
	);
};

export default ButtonGetRequest;
