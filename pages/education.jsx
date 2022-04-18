import Layout from "../component/layout/Layout";
import { Pricing } from "../component/index";
import { PageHeader, Slider, SectionWithImg, PageFooter } from "../component/widgets";
import { EDUCATION_SECTIONS, EDUCATION_SLIDER } from "../utils/consts";

const Index = () => {
	return (
		<Layout transparent>
			<PageHeader
				title={"Screenflex Is Vital For Schools and Universities"}
				description={
					"Empower your institution with dynamic content such as videos and animations that significantly increase engagement and the recall of the message. From broadcasting updates to providing useful information, all the attention will be yours with Screenflex."
				}
				category={"Education"}
				icon={"/img/education/icon.svg"}
				img={"/img/education/background.png"}
			/>
			<Slider slides={EDUCATION_SLIDER} />
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
