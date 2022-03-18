import { useState, useEffect } from "react";
import { FEATURES } from "../../utils/consts";
import Feature from "../widgets/Feature";

const FeaturesMobileSlider = ({ sliderWidth = 243 }) => {
	const [activeIndex, setActiveIndex] = useState(1);
	const [left, setLeft] = useState(0);

	useEffect(() => {
		document.addEventListener("touchstart", handleTouchStart, false);
		document.addEventListener("touchmove", handleTouchMove, false);

		var xDown = null;
		var yDown = null;

		function getTouches(evt) {
			return evt.touches || evt.originalEvent.touches;
		}

		function handleTouchStart(evt) {
			const firstTouch = getTouches(evt)[0];
			xDown = firstTouch.clientX;
			yDown = firstTouch.clientY;
		}

		function handleTouchMove(evt) {
			if (!xDown || !yDown) {
				return;
			}

			var xUp = evt.touches[0].clientX;
			var yUp = evt.touches[0].clientY;

			var xDiff = xDown - xUp;
			var yDiff = yDown - yUp;

			if (Math.abs(xDiff) > Math.abs(yDiff)) {
				if (xDiff > 0) {
					handleNext();
				} else {
					handlePrev();
				}
			}

			xDown = null;
			yDown = null;
		}

		return () => {
			document.removeEventListener("touchstart", handleTouchStart);
			document.removeEventListener("touchmove", handleTouchMove);
		};
	}, [activeIndex]);

	const handleNext = () => {
		if (activeIndex >= FEATURES.length) {
			clickIndicator(1);
		} else {
			clickIndicator(activeIndex + 1);
		}
	};

	const handlePrev = () => {
		if (activeIndex <= 1) {
			clickIndicator(FEATURES.length);
		} else {
			clickIndicator(activeIndex - 1);
		}
	};

	const clickIndicator = (index) => {
		setActiveIndex(index);
		setLeft(sliderWidth - index * sliderWidth);
	};

	return (
		<>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<div>
					<div className='slider-wrapper'>
						<div className='slider'>
							{FEATURES.map(({ img, title, description }, index) => (
								<div key={index} style={{ left, width: sliderWidth }} className='slider-item'>
									<Feature img={img} title={title} description={description} />
								</div>
							))}
						</div>
					</div>

					<div className='indicators-wrapper'>
						<ul className='indicators'>
							{FEATURES.map((item, index) => (
								<li
									key={index}
									className={index + 1 === activeIndex ? "active-indicator" : ""}
									onClick={() => clickIndicator(index + 1)}></li>
							))}
						</ul>
					</div>
				</div>
			</div>

			<style jsx>{`
				.slider-wrapper {
					overflow: hidden;
					width: ${sliderWidth}px;
				}

				.slider {
					width: 2000px;
				}

				.slider-item,
				.hide {
					float: left;
					position: relative;
					transition: all 0.2s linear;
				}

				.indicators {
					text-align: center;
					margin-top: 30px;
				}

				.indicators li {
					display: inline-block;
					margin-right: 5px;
					width: 9px;
					height: 9px;
					border-radius: 100%;
					background-color: #eaeaea;
					transition: all 0.2s linear;
				}

				.active-indicator {
					background: #5463ff !important;
				}
			`}</style>
		</>
	);
};

export default FeaturesMobileSlider;
