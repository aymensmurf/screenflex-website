import { Brands, Features, Home, Sectors, Solutions } from "../component/index";
import Layout from "../component/layout/Layout";

const Index = () => {
	return (
		<Layout>
			<Home />
			<Brands />
			<Sectors />
			<Features />
			<Solutions />
		</Layout>
	);
};

export default Index;
