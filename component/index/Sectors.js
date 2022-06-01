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
								<div className='underline-container' style={{ position: "absolute", top: 45, right: -5 }}>
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
							slidesPerView={3.5}
							centeredSlides={true}
							loop={true}
							allowTouchMove={true}
							modules={[Pagination]}
							pagination={{
								clickable: true,
							}}
							className='sectors-slider'>
							{SECTORS.map(({ title, img }, i) => (
								<SwiperSlide key={i}>
									<Sector title={title} img={img} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</ScrollAnimation>
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

				@media only screen and (max-width: 1023px) {
					section {
						margin-top: 70px;
					}

					.container {
						padding-right: 36px;
						padding-left: 36px;
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
					height: fit-content;
					padding: 36px 42px 32px;
					background-color: #f6f7ff;
					border-radius: 15px;
				}
			`}</style>
		</>
	);
};

export default Sectors;
