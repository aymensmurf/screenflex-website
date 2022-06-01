import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

const OPTIONS = ["restaurants", "education", "corporate", "retail"];

const Home = () => {
	const [type, setType] = useState("restaurants");
	const [indicatorTop, setIndicatorTop] = useState(350);
	const [indicatorLeft, setIndicatorLeft] = useState(0);
	const [indicatorWidth, setIndicatorWidth] = useState(0);

	useEffect(() => {
		const elm = document.getElementById(type);
		const scrollTop = document.documentElement.scrollTop;

		if (elm) {
			const elmRect = elm.getBoundingClientRect();

			setIndicatorTop(elmRect.top + scrollTop + 25);
			setIndicatorLeft(elmRect.left + 6);
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
							<div className='options'>
								{OPTIONS.map((elm, i) => (
									<Tab key={i} index={i} value={elm} isActive={type === elm} setter={setType} />
								))}
							</div>

							{OPTIONS.map((elm, i) => (
								<SwiperSlide key={i}>
									<div className='img-container'>
										<Image src={`/img/home/${elm}.png`} title={type} width={964} height={542} objectFit='cover' />
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>

				<div className='indicator' />
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
					top: ${indicatorTop}px;
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
					margin-top: 100px;
					position: relative;
				}

				@media only screen and (max-width: 500px) {
					.options {
						gap: 15px;
					}
				}

				@media only screen and (max-width: 388px) {
					.options {
						gap: 10px;
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

				@media only screen and (max-width: 500px) {
					div {
						font-size: 16px;
					}
				}

				@media only screen and (max-width: 388px) {
					div {
						font-size: 12px;
					}
				}
			`}</style>
		</>
	);
};

export default Home;
