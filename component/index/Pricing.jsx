import { useState } from "react";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import { PricingCard } from "../widgets";
import { PRICING } from "../../utils/consts";

const Pricing = () => {
	const [type, setType] = useState("monthly");

	return (
		<>
			<a name='pricing' />
			<section>
				<div className='container'>
					<ScrollAnimation animateOnce animateIn='fadeInUp'>
						<div className='text-container'>
							<Image src='/img/pricing/pricing.png' width={92} height={92} objectFit='contain' />
							<div style={{ marginTop: 11 }}>
								<h2>Choose Your Plan</h2>
								<p>No contracts, no surprise fees.</p>
							</div>
						</div>
					</ScrollAnimation>

					<ScrollAnimation animateOnce animateIn='fadeInUp'>
						<div className='flex jc-c'>
							<div style={{ marginTop: 67 }}>
								<div className='time-container flex ai-c jc-c'>
									<div
										className='time-wrapper'
										onClick={() => {
											setType("monthly");
										}}>
										Monthly
									</div>
									<div
										className='time-wrapper'
										onClick={() => {
											setType("yearly");
										}}>
										Yearly
									</div>

									<div className='selector' style={{ left: type === "monthly" ? 9 : 141 }}></div>
								</div>
							</div>
						</div>
					</ScrollAnimation>

					<div className='grid' style={{ marginTop: 48 }}>
						{PRICING.map((details, i) => (
							<ScrollAnimation key={i} animateOnce animateIn='fadeInUp' delay={200 * i}>
								<PricingCard type={type} details={details} />
							</ScrollAnimation>
						))}
					</div>
				</div>
			</section>

			<style jsx>{`
				section {
					margin-top: 144px;
				}

				.container {
					padding-right: 160px;
					padding-left: 160px;
				}

				.text-container {
					display: flex;
					align-items: flex-start;
					justify-content: center;
					gap: 12px;
				}

				p {
					font-size: 20px;
					letter-spacing: -0.02em;
					text-align: center;
					color: #8898a1;
				}

				.time-container {
					min-width: 280px;
					border-radius: 30px;
					box-shadow: 0px 12px 26px rgba(197, 191, 214, 0.2);
					padding: 5px 9px;
					background: #fff;
					position: relative;
				}

				.time-wrapper {
					padding: 15px 36px;
					cursor: pointer;
					position: relative;
					z-index: 2;
				}

				.selector {
					width: 141px;
					height: 54px;
					border-radius: 50px;
					background: #ffc300;
					position: absolute;
					left: 9px;
					z-index: 1;
					transition: all 500ms ease;
				}

				.grid {
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
					gap: 48px;
				}

				@media only screen and (max-width: 1140px) {
					.container {
						padding-right: 60px;
						padding-left: 60px;
					}
				}

				@media only screen and (max-width: 950px) {
					.container {
						padding-right: 30px;
						padding-left: 30px;
					}

					.text-container {
						display: grid;
						gap: 0px;
						text-align: center;
					}

					.grid {
						gap: 25px;
					}
				}

				@media only screen and (max-width: 940px) {
					.grid {
						grid-template-columns: 1fr 1fr;
					}
				}

				@media only screen and (max-width: 640px) {
					.grid {
						grid-template-columns: 1fr;
					}
				}
			`}</style>
		</>
	);
};

export default Pricing;
