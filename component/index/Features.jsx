import Image from "next/image";
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
						<div className='flex ai-c jc-c'>
							<div className='display-desktop'>
								<Image src='/img/features/money.png' width={77} height={77} objectFit='contain' />
							</div>
							<h3>How can Screenflex help your business?</h3>
						</div>

						<div className='display-desktop-features' style={{ marginTop: 68 }}>
							<div className='grid ai-fs'>
								{FEATURES.map(({ img, title, description }, i) => (
									<Feature key={i} img={img} title={title} description={description} />
								))}
							</div>
						</div>

						<div className='display-mobile-features' style={{ marginTop: 34 }}>
							<FeaturesMobileSlider />
						</div>
					</div>
				</div>
			</section>

			<style jsx>{`
				section {
					margin-top: 145px;
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
