import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";

const Brands = () => {
	return (
		<>
			<section>
				<div className='container'>
					<ScrollAnimation animateOnce animateIn='fadeInUp'>
						<h2>These brands trust us</h2>
					</ScrollAnimation>

					<ScrollAnimation animateOnce animateIn='fadeInUp'>
						<div className='brands flex ai-c jc-sb' style={{ gap: 40 }}>
							<div className='img-wrapper'>
								<Image src='/img/brands/journey.png' alt='TheJourney' layout='fill' objectFit='contain' />
							</div>

							<div className='img-wrapper'>
								<Image src='/img/brands/wifak.png' alt='Wifak Bank' layout='fill' objectFit='contain' />
							</div>

							<div className='img-wrapper'>
								<Image src='/img/brands/sesame.png' alt='Sesame University' layout='fill' objectFit='contain' />
							</div>

							<div className='img-wrapper'>
								<Image src='/img/brands/bos.png' alt='BOS' layout='fill' objectFit='contain' />
							</div>

							<div className='img-wrapper'>
								<Image src='/img/brands/carthage.png' alt='Carthage Solution' layout='fill' objectFit='contain' />
							</div>
						</div>
					</ScrollAnimation>
				</div>
			</section>

			<style jsx>{`
				section {
					margin-top: 111px;
				}

				.container {
					padding-right: 190px;
					padding-left: 190px;
					text-align: center;
				}

				h2 {
					margin-bottom: 53px;
				}

				.img-wrapper {
					width: 100%;
					height: 35px;
					position: relative;
				}

				@media only screen and (max-width: 950px) {
					section {
						margin-top: 24px;
					}

					.container {
						padding-right: 0px;
						padding-left: 0px;
					}
					.brands {
						overflow-x: scroll;
						padding: 10px 30px;
					}

					.img-wrapper {
						min-width: 100px;
						height: 40px;
					}
				}
			`}</style>
		</>
	);
};

export default Brands;
