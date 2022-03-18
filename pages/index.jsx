import Layout from "../component/layout/Layout";
import { Brands, Features, Home, Pricing, Sectors, Solutions, Why, PreFooter } from "../component/index";

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
