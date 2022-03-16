import { Brands, Features, Home, Pricing, Sectors, Solutions } from "../component/index";
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
		</Layout>
	);
};

export default Index;
