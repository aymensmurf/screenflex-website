import { Brands, Features, Home, Pricing, Sectors, Solutions, Why } from "../component/index";
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
		</Layout>
	);
};

export default Index;
