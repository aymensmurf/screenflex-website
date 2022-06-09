import ScrollAnimation from "react-animate-on-scroll";
import Layout from "../component/layout/Layout";
import { Brands, Features, Home, Pricing, Sectors, Solutions, Why, PreFooter, Technologies } from "../component/index";
import { SectionImgBg } from "../component/widgets";

const Index = () => {
	return (
		<Layout>
			<Home />
			<div className='container' style={{ marginTop: 60 }}>
				<ScrollAnimation animateOnce animateIn='fadeInUp'>
					<SectionImgBg
						title='Advanced Analytics & AI'
						description='Gain insight to your audience and change/display real-time relevant content'
						img='/img/technologies/ai.png'
						bgColor='#F6F7FF'
					/>
				</ScrollAnimation>
			</div>
			<Solutions />
			<Features />
			<Sectors />
			<Why />
			<Pricing />
			<PreFooter />
			<Brands />
			<Technologies />
		</Layout>
	);
};

export default Index;
