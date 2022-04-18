import Layout from "../component/layout/Layout";
import { Pricing } from "../component/index/index";
import { PageHeader, Slider, SectionWithImg, PageFooter } from "../component/widgets";
import { RESTAURANT_SECTIONS, RESTAURANT_SLIDER } from "../utils/consts";

const Index = () => {
	return (
		<Layout transparent>
			<PageHeader
				title={"Screenflex Can Boost Your Customer Satisfaction"}
				description={
					"Regardless of the unique way each restaurant uses digital signage, the end goal is generally the same to increase sales and customer satisfaction. There are several unique benefits to using digital signage that allow restaurants to work towards this goal."
				}
				category={"Resturant"}
				icon={"/img/restaurant/icon.svg"}
				img={"/img/restaurant/background.png"}
			/>
			<Slider slides={RESTAURANT_SLIDER} />
			<div className='container'>
				{RESTAURANT_SECTIONS.map(({ img, icon, title, description, width, height, horizantalPadding }, i) => (
					<SectionWithImg
						key={i}
						img={img}
						icon={icon}
						title={title}
						description={description}
						width={width}
						height={height}
						horizantalPadding={horizantalPadding}
						right={i % 2 === 0}
					/>
				))}
			</div>
			<Pricing />
		</Layout>
	);
};

export default Index;
