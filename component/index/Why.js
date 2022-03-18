import ScrollAnimation from "react-animate-on-scroll";
import { WHYS } from "../../utils/consts";
import { WhyCard } from "../widgets";
import WhyMobile from "./WhyMobile";

const Why = () => {
	return (
		<>
			<a name='features' />
			<section>
				<div className='container'>
					<div className='why'>
						<ScrollAnimation animateOnce animateIn='fadeInUp'>
							<h4>Why Opt for Screenflex?</h4>
						</ScrollAnimation>

						<div className='display-desktop-why'>
							<div className='grid' style={{ marginTop: 93, alignItems: "flex-start" }}>
								{WHYS.map(({ img, title, description }, i) => (
									<ScrollAnimation key={i} animateOnce animateIn='fadeInUp' delay={i * 100}>
										<WhyCard img={img} title={title} description={description} />
									</ScrollAnimation>
								))}
							</div>
						</div>

						<ScrollAnimation animateOnce animateIn='fadeInUp'>
							<div className='display-mobile-why' style={{ marginTop: 34 }}>
								<WhyMobile />
							</div>
						</ScrollAnimation>
					</div>
				</div>
			</section>

			<style jsx>{`
				section {
					margin-top: 145px;
					text-align: left;
				}

				.why {
					background: #f6f7ff;
					border-radius: 25px;
					padding: 43px 99px 121px;
				}

				h4 {
					font-size: 32px;
					text-align: center;
				}

				.grid {
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
					row-gap: 42px;
					column-gap: 104px;
				}

				.display-desktop-why {
					display: block;
				}

				.display-mobile-why {
					display: none;
					clear: both;
				}

				@media only screen and (max-width: 1023px) {
					.grid {
						column-gap: 40px;
					}

					.why {
						padding-left: 30px;
						padding-right: 30px;
					}
				}

				@media only screen and (max-width: 950px) {
					.grid {
						grid-template-columns: 1fr 1fr;
					}

					.why {
						padding-left: 30px;
						padding-right: 30px;
					}
				}

				@media only screen and (max-width: 620px) {
					.display-desktop-why {
						display: none;
						clear: both;
					}

					.display-mobile-why {
						display: block;
					}
				}
			`}</style>
		</>
	);
};

export default Why;
