import Layout from "../component/layout/Layout";
import { Pricing } from "../component/index";
import { Header, Slider } from "../component/widgets";

const Index = () => {
	return (
		<Layout>
			<Header />
			<Slider />
			<Pricing />
		</Layout>
	);
};

export default Index;
