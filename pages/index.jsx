import Layout from "../component/layout/Layout";
import {
	Brands,
	Features,
	Home,
	Pricing,
	Sectors,
	Solutions,
	Why,
	PreFooter,
	Cloud,
	Technologies,
} from "../component/index";

const Index = () => {
	return (
		<Layout>
			<Home />
			<Brands />
			<Sectors />
			<Features />
			<Cloud />
			<Solutions />
			<Technologies />
			<Pricing />
			<Why />
			<PreFooter />
		</Layout>
	);
};

export default Index;
