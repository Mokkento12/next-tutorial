async function makePostRequest(params) {
	const res = await fetch(`${process.env.NEXT_URL}/api/hello`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ name: 'Roman' }),
	});

	const data = await res.json();
	return data;
}

const PostExample = async () => {
	const { message } = await makePostRequest();
	return (
		<section className="content">
			<h2 className="section-title">Post request</h2>
			{message && <p>{message}</p>}
		</section>
	);
};

export default PostExample;
