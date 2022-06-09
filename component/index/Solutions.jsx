import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import { SOLUTIONS } from "../../utils/consts";
import { Solution } from "../widgets";

const Solutions = () => {
	return (
		<>
			<a name='how-it-works' />
			<section>
				<div className='container'>
					<ScrollAnimation animateOnce animateIn='fadeInUp'>
						<div className='flex ai-fs jc-sb'>
							<div className='flex ai-fs'>
								<h2>Display any content flawlessly</h2>
								<div className='display-desktop'>
									<Image src='/img/solution/solution.png' width={60} height={60} objectFit='contain' />
								</div>
							</div>

							<div className='display-desktop-1023'>
								<a href='https://app.screenflex.pro/signup' target='_blank' rel='noreferrer noopener'>
									<div className='btn'>Get started</div>
								</a>
							</div>
						</div>
					</ScrollAnimation>

					<div className='grid' style={{ marginTop: 58 }}>
						{SOLUTIONS.map(({ img, title, description }, i) => (
							<ScrollAnimation key={i} animateOnce animateIn='fadeInUp' delay={200 * i}>
								<Solution img={img} title={title} description={description} />
							</ScrollAnimation>
						))}
					</div>
				</div>
			</section>

			<style jsx>{`
				section {
					margin-top: 71px;
				}

				.btn {
					min-width: 165px;
					padding: 12px 40px;
					border-radius: 30px;
					font-weight: 600;
					font-size: 16px;
					color: #fff;
					transition: all 500ms ease;
					background: linear-gradient(-45deg, #aeb5ff 0%, #5463ff 80%);
					border: 1px solid #fff;
				}

				.btn:hover {
					background: #fff;
					color: #5463ff;
					border: 1px solid #5463ff;
				}

				.grid {
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
					gap: 16px;
				}

				@media only screen and (max-width: 1140px) {
					h2 {
						font-size: 36px;
						line-height: 44px;
					}

					.display-desktop {
						display: none;
						clear: both;
					}
				}

				@media only screen and (max-width: 1023px) {
					.display-desktop-1023 {
						display: none;
						clear: both;
					}

					.grid {
						grid-template-columns: 1fr;
					}
				}

				@media only screen and (max-width: 678px) {
					h2 {
						font-size: 28px;
						line-height: 36px;
					}
				}
			`}</style>
		</>
	);
};

export default Solutions;
