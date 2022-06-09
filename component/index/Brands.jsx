import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { BRANDS } from "../../utils/consts";

const Brands = () => {
	return (
		<>
			<section>
				<div className='container'>
					<ScrollAnimation animateOnce animateIn='fadeInUp'>
						<h2>These brands trust us</h2>
					</ScrollAnimation>

					<ScrollAnimation animateOnce animateIn='fadeInUp'>
						<Swiper
							spaceBetween={40}
							slidesPerView={2}
							centeredSlides={true}
							loop={true}
							allowTouchMove={true}
							modules={[Autoplay]}
							autoplay={{
								delay: 2000,
							}}
							breakpoints={{
								855: {
									slidesPerView: 5,
								},
								640: {
									slidesPerView: 3.2,
								},
								400: {
									slidesPerView: 3.2,
								},
							}}>
							{BRANDS.map(({ title, img }, i) => (
								<SwiperSlide key={i}>
									<div className='img-wrapper'>
										<Image src={`/img/brands/${img}.png`} alt={title} layout='fill' objectFit='contain' />
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</ScrollAnimation>
				</div>
			</section>

			<style jsx>{`
				section {
					margin-top: 140px;
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
