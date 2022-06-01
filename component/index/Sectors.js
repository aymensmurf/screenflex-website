import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const SECTORS = [
	{
		title: "Retail Digital Singnage",
		img: "img-1",
	},
	{
		title: "Digital Menu Boards",
		img: "img-2",
	},
	{
		title: "Corporate Digital Singnage",
		img: "img-3",
	},
	{
		title: "Education Digital Singnage",
		img: "img-4",
	},
];

const Sectors = () => {
	return (
		<>
			<section>
				<div className='container'>
					<ScrollAnimation animateOnce animateIn='fadeInUp'>
						<div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
							<div style={{ position: "relative", width: "fit-content" }}>
								<h2>Industries we serve</h2>
								<div className='underline-container'>
									<Image src='/img/sectors/underline.svg' alt='' width={133} height={26} />
								</div>
							</div>
						</div>
					</ScrollAnimation>
				</div>

				<ScrollAnimation animateOnce animateIn='fadeInUp'>
					<div style={{ marginTop: 50, paddingBottom: 50 }}>
						<Swiper
							spaceBetween={23}
							slidesPerView={1.3}
							centeredSlides={true}
							loop={true}
							allowTouchMove={true}
							modules={[Pagination]}
							pagination={{
								clickable: true,
							}}
							className='sectors-slider'
							breakpoints={{
								1110: {
									slidesPerView: 3.5,
								},
								868: {
									slidesPerView: 1.9,
								},
							}}>
							{SECTORS.map(({ title, img }, i) => (
								<SwiperSlide key={i}>
									<Sector title={title} img={img} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</ScrollAnimation>
			</section>

			<style>{`
				.sectors-slider {
					padding-bottom: 100px !important;
				}

				.sectors-slider .swiper-pagination {
					width: fit-content !important;
					position: relative !important;
					top: 460px !important;
					left: 50% !important;
					display: flex !important;
					transform: translateX(-50%) !important;
					gap: 5px !important;
				}

				.sectors-slider .swiper-pagination-bullet {
					width: 27px;
					height: 12px;
					border-radius: 25px;
					background: #d6e7ff;
					opacity: 1;
					transition: all 300ms ease;
				}

				.sectors-slider .swiper-pagination-bullet-active {
					width: 74px;
					background-color: #ffc300;
				}
			`}</style>

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

				.underline-container {
					position: absolute;
					top: 45px;
					right: -5px;
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
				@media only screen and (max-width: 950px) {
					.underline-container {
						top: 30px;
						right: -20px;
					}
				}
				@media only screen and (max-width: 377px) {
					.underline-container {
						position: absolute;
						top: 60px;
						left: 50%;
						transform: translateX(-50%);
					}
				}
			`}</style>
		</>
	);
};

const Sector = ({ title, img }) => {
	return (
		<>
			<div className='sector'>
				<Image src={`/img/sectors/${img}.png`} title={title} width={350} height={250} objectFit='contain' />
				<h5 style={{ marginTop: 30 }}>{title}</h5>
			</div>

			<style jsx>{`
				.sector {
					width: 100%;
					padding: 36px 20px 32px;
					background-color: #f6f7ff;
					border-radius: 15px;
				}

				@media only screen and (max-width: 1451px) {
					.sector {
						height: 420px;
					}
				}

				@media only screen and (max-width: 1023px) {
					h5 {
						font-size: 22px;
					}
				}

				@media only screen and (max-width: 510px) {
					.sector {
						height: 360px;
					}
				}
			`}</style>
		</>
	);
};

export default Sectors;
