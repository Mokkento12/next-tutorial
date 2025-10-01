import ButtonGetRequest from '@/components/ButtonGetRequest';
import { getHelloMessage } from '@/lib/hello';

const GetExample = () => {
	const { message } = getHelloMessage();
	return (
		<section className="content">
			<h2 className="section-title">Get request</h2>
			{message && <p>{message}</p>}
			<ButtonGetRequest />
		</section>
	);
};

export default GetExample;
