import { Brands, Home, Sectors } from "../component/index";
import Layout from "../component/layout/Layout";

const Index = () => {
	return (
		<Layout>
			<Home />
			<Brands />
			<Sectors />
		</Layout>
	);
};

export default Index;
