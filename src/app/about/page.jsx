import Image from 'next/image';

const AboutPage = () => {
	return (
		<section className="content">
			<h2 className="section-title">About</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
				cum, repellendus, praesentium provident qui, adipisci at aliquam
				eaque harum fugiat quas? Reiciendis voluptas dolores obcaecati
				et fugiat commodi, reprehenderit quod.
			</p>
			<Image
				src="/dodge-400-200.jpg"
				alt="Dodge"
				width={400}
				height={200}
				priority
			/>
		</section>
	);
};

export default AboutPage;
