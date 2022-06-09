import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const Slider = ({ slides = [] }) => {
	return (
		<>
			<section>
				<div className='container'>
					<h2>Screenflex makes managing screens throughout your campus easy</h2>
				</div>

				<div style={{ marginTop: 40 }}>
					<Swiper
						slidesPerView={1}
						loop={true}
						spaceBetween={10}
						grabCursor={true}
						centeredSlides={true}
						navigation={false}
						modules={[Autoplay]}
						autoplay={{
							delay: 2500,
						}}
						className='mySlider'
						breakpoints={{
							1540: {
								slidesPerView: 4.15,
							},
							960: {
								slidesPerView: 3.4,
							},
							590: {
								slidesPerView: 2.1,
							},
							380: {
								slidesPerView: 1.6,
							},
						}}>
						{slides.map(({ title, img }, i) => (
							<SwiperSlide key={i}>
								<div className='img-wrapper'>
									<Image src={img} alt={title} layout='fill' objectFit='containe' />
								</div>
								<p>{title}</p>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>

			<style jsx>{`
				section {
					text-align: center;
					margin-top: 60px;
					margin-bottom: 120px;
				}

				.img-wrapper {
					width: 340px;
					height: 212px;
					position: relative;
				}

				p {
					color: #000860;
					margin-top: 20px;
				}

				@media only screen and (max-width: 1225px) {
					.img-wrapper {
						width: 258px;
						height: 160px;
						position: relative;
					}
				}

				@media only screen and (max-width: 560px) {
					.img-wrapper {
						width: 220px;
						height: 160px;
						position: relative;
					}
				}
			`}</style>
		</>
	);
};

export default Slider;
