import Layout from "../component/layout/Layout";
import { Pricing } from "../component/index";
import { PageHeader, Slider, SectionWithImg, PageFooter } from "../component/widgets";
import { EDUCATION_SECTIONS } from "../utils/consts";

const Index = () => {
	return (
		<Layout>
			<PageHeader />
			<Slider />
			<div className='container'>
				{EDUCATION_SECTIONS.map(({ img, icon, title, description, width, height }, i) => (
					<SectionWithImg
						key={i}
						img={img}
						icon={icon}
						title={title}
						description={description}
						width={width}
						height={height}
						right={i % 2 === 0}
					/>
				))}
			</div>
			<PageFooter />
			<Pricing />
		</Layout>
	);
};

export default Index;
