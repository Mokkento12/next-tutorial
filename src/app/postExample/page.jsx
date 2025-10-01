import { createHelloGreeting } from '@/lib/hello';

const PostExample = () => {
	const { message } = createHelloGreeting('Roman');
	return (
		<section className="content">
			<h2 className="section-title">Post request</h2>
			{message && <p>{message}</p>}
		</section>
	);
};

export default PostExample;
