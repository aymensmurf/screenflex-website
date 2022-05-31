import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";

const Sectors = () => {
	return (
		<>
			<section>
				<div className='container'>
					<ScrollAnimation animateOnce animateIn='fadeInUp'>
						<div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
							<div style={{ position: "relative", width: "fit-content" }}>
								<h2>Industries we serve</h2>
								<div className='underline-container' style={{ position: "absolute", top: 45, right: -5 }}>
									<Image src='/img/sectors/underline.svg' alt='' width={133} height={26} />
								</div>
							</div>
						</div>
					</ScrollAnimation>

					<div className='sectors'>
						<ScrollAnimation animateOnce animateIn='fadeInUp'>
							<Link href='/restaurant'>
								<div className='sector'>
									<div className='container-img'>
										<div className='img-wrapper'>
											<Image src='/img/sectors/restaurant.png' width={323} height={184} objectFit='contain' />
										</div>
									</div>
									<p>Restaurant</p>
								</div>
							</Link>
						</ScrollAnimation>
						<ScrollAnimation animateOnce animateIn='fadeInUp' delay={300}>
							<Link href='/education'>
								<div className='sector'>
									<div className='container-img'>
										<div className='img-wrapper'>
											<Image src='/img/sectors/education.png' width={323} height={184} objectFit='contain' />
										</div>
									</div>
									<p>Education</p>
								</div>
							</Link>
						</ScrollAnimation>
					</div>
				</div>
			</section>

			<style jsx>{`
				section {
					margin-top: 100px;
					text-align: center;
				}

				.container {
					padding-right: 120px;
					padding-left: 120px;
				}

				h2 {
					margin-bottom: 43px;
				}

				.sectors {
					display: grid;
					grid-template-columns: 1fr 1fr;
					gap: 40px;
				}

				.container-img {
					width: 100%;
					border-radius: 25px;
					border: 5px solid #e9e9e9;
					padding: 66px 10px;
					display: flex;
					align-items: center;
					justify-content: center;
					cursor: pointer;
				}

				.container-img:hover {
					border: 5px solid #5463ff;
				}

				.img-wrapper {
					transition: all 500ms ease;
				}

				.container-img:hover .img-wrapper {
					transform: scale(0.75);
				}

				p {
					font-size: 28px;
					text-align: center;
					color: #101010;
					margin-top: 25px;
				}

				@media only screen and (max-width: 1023px) {
					section {
						margin-top: 70px;
					}

					.container {
						padding-right: 36px;
						padding-left: 36px;
					}
				}

				@media only screen and (max-width: 767px) {
					.sectors {
						grid-template-columns: 1fr;
						gap: 25px;
					}
				}
			`}</style>
		</>
	);
};

export default Sectors;
