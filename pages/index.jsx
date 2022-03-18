import { Brands, Features, Home, Pricing, Sectors, Solutions, Why, PreFooter } from "../component/index";
import Layout from "../component/layout/Layout";

const Index = () => {
	return (
		<Layout>
			<Home />
			<Brands />
			<Sectors />
			<Features />
			<Solutions />
			<Pricing />
			<Why />
			<PreFooter />
		</Layout>
	);
};

export default Index;
