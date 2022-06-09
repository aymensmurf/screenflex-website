import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import { FEATURES } from "../../utils/consts";
import { Feature } from "../widgets";
import FeaturesMobileSlider from "./FeaturesMobile";

const Features = () => {
	return (
		<>
			<a name='our-solution' />
			<section>
				<div className='container'>
					<div className='features'>
						<ScrollAnimation animateOnce animateIn='fadeInUp'>
							<h3>An intuitive, single pane content management experience</h3>
						</ScrollAnimation>

						<div className='display-desktop-features' style={{ marginTop: 68 }}>
							<div className='grid ai-fs'>
								{FEATURES.map(({ img, title, description }, i) => (
									<ScrollAnimation key={i} animateOnce animateIn='fadeInUp' delay={i * 100}>
										<Feature img={img} title={title} description={description} />
									</ScrollAnimation>
								))}
							</div>
						</div>

						<ScrollAnimation animateOnce animateIn='fadeInUp'>
							<div className='display-mobile-features' style={{ marginTop: 34 }}>
								<FeaturesMobileSlider />
							</div>
						</ScrollAnimation>
					</div>
				</div>
			</section>

			<style jsx>{`
				section {
					margin-top: 110px;
					text-align: center;
				}

				.features {
					background: #f6f7ff;
					border-radius: 15px;
					padding: 48px 85px 90px;
				}

				.grid {
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
					row-gap: 25px;
					column-gap: 66px;
				}

				.display-desktop-features {
					display: block;
				}

				.display-mobile-features {
					display: none;
					clear: both;
				}

				@media only screen and (max-width: 1220px) {
					.grid {
						column-gap: 25px;
					}
				}

				@media only screen and (max-width: 1060px) {
					.display-desktop {
						display: none;
						clear: both;
					}
				}

				@media only screen and (max-width: 950px) {
					.container {
						padding-left: 30px;
						padding-right: 30px;
					}

					.grid {
						grid-template-columns: 1fr 1fr;
					}

					.features {
						padding-left: 30px;
						padding-right: 30px;
					}
				}

				@media only screen and (max-width: 620px) {
					.display-desktop-features {
						display: none;
						clear: both;
					}

					.display-mobile-features {
						display: block;
					}

					h3 {
						font-size: 28px;
						line-height: 28px;
					}
				}
			`}</style>
		</>
	);
};

export default Features;
