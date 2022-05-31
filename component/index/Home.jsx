import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

const OPTIONS = ["restaurants", "education", "corporate", "retail"];

const Home = () => {
	const [type, setType] = useState("restaurants");
	const [indicatorLeft, setIndicatorLeft] = useState(0);
	const [indicatorWidth, setIndicatorWidth] = useState(0);

	useEffect(() => {
		const elm = document.getElementById(type);

		if (elm) {
			const elmRect = elm.getBoundingClientRect();

			setIndicatorLeft(elmRect.left - 395);
			setIndicatorWidth(elmRect.width - 10);
		}
	}, [type]);

	return (
		<>
			<section>
				<div className='container'>
					<div className='flex flex-column ai-c' style={{ position: "relative", zIndex: 1 }}>
						<h1>All screens, One place.</h1>
						<p>Manage screens. Deliver world class experiences. Make the best out of digital signage.</p>

						<Swiper
							slidesPerView={1}
							loop={true}
							allowTouchMove={true}
							grabCursor={true}
							onSlideNextTransitionStart={({ activeIndex }) => {
								setType(activeIndex === OPTIONS.length + 1 ? OPTIONS[0] : OPTIONS[activeIndex - 1]);
							}}
							onSlidePrevTransitionStart={({ activeIndex }) => {
								setType(activeIndex === 0 ? OPTIONS[OPTIONS.length - 1] : OPTIONS[activeIndex - 1]);
							}}
							className='home-slider'>
							<div className='options display-desktop'>
								{OPTIONS.map((elm, i) => (
									<Tab key={i} index={i} value={elm} isActive={type === elm} setter={setType} />
								))}

								<div className='indicator' />
							</div>

							{OPTIONS.map((elm, i) => (
								<SwiperSlide key={i}>
									<div className='img-container'>
										<Image src={`/img/home/${elm}.png`} title={type} layout='fill' objectFit='contain' />
									</div>
								</SwiperSlide>
							))}
						</Swiper>

						<div className='display-mobile'>
							<a href='https://app.screenflex.pro/signup' target='_blank' rel='noreferrer noopener'>
								<div className='btn btn-free-trial'>Free trial</div>
							</a>
						</div>
					</div>
				</div>
			</section>

			<style jsx>{`
				section {
					padding-top: 150px;
					text-align: center;
				}

				p {
					margin-top: 20px;
					max-width: 520px;
				}

				.options {
					width: 100%;
					margin-top: 45px;
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 30px;
					position: relative;
					position: absolute;
					top: 0;
					left: 0;
					z-index: 2;
				}

				.indicator {
					height: 4px;
					background: #5463ff;
					border-radius: 4px;
					position: absolute;
					top: 30px;
					transition: all 300ms ease;
					width: ${indicatorWidth}px;
					left: ${indicatorLeft}px;
				}

				.btn-free-trial {
					min-width: 150px;
					padding: 13px 34px;
					border-radius: 30px;
					font-weight: 600;
					font-size: 18px;
					background: linear-gradient(45deg, #aeb5ff 0%, #5463ff 80%);
					filter: drop-shadow(0px 10px 25px rgba(84, 99, 255, 0.25));
					color: #fff;
					border: 1px solid #fff;
					margin-top: 35px;
					transition: all 0.3s ease;
				}

				.btn-free-trial:hover {
					background: #fff;
					color: #5463ff;
					border: 1px solid #5463ff;
				}

				.img-container {
					width: 100%;
					height: 700px;
					margin-top: 20px;
					position: relative;
					pointer-events: none;
				}

				@media only screen and (max-width: 950px) {
					.display-desktop {
						display: none;
						clear: both;
					}

					.display-mobile {
						display: block;
					}
				}
			`}</style>
		</>
	);
};

const Tab = ({ value, index, isActive, setter }) => {
	const swiper = useSwiper();

	const handleClick = () => {
		swiper.slideTo(index + 1);
		setter(value);
	};

	return (
		<>
			<div id={value} className={isActive && "active"} onClick={handleClick}>
				{value}
			</div>

			<style jsx>{`
				div {
					font-weight: 600;
					cursor: pointer;
					text-transform: capitalize;
				}
			`}</style>
		</>
	);
};

export default Home;
