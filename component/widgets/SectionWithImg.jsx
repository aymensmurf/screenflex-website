import Image from "next/image";

const SectionWithImg = ({ img, icon, title, description, width, height, right }) => {
	return (
		<>
			<section>
				<div className='img-container'>
					{img && (
						<div className='img-wrapper'>
							<Image src={img} layout='fill' objectFit='contain' />
						</div>
					)}

					{icon && (
						<div className='icon-container'>
							<Image src={icon} width={124} height={124} objectFit='contain' />
						</div>
					)}
				</div>

				<div className='text-container'>
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
			</section>

			<style jsx>{`
				section {
					display: grid;
					gap: 40px;
					margin-bottom: 130px;
					grid-auto-flow: dense;
					grid-template-columns: ${right ? "45% 55%" : "55% 45%"};
				}

				section > .img-container {
					grid-column: ${right ? 2 : 1};
				}

				section > .text-container {
					grid-column: ${right ? 1 : 2};
				}

				p {
					margin-top: 20px;
					color: #1a1a1a;
				}

				.img-container {
					width: 100%;
					height: 100%;
					background: linear-gradient(-90deg, #aeb5ff 0%, #5463ff 80%);
					padding: 20px 40px;
					border-radius: 25px;
					display: flex;
					align-items: center;
					justify-content: center;
					position: relative;
				}

				.img-wrapper {
					position: relative;
					width: ${width}px;
					height: ${height}px;
				}

				.icon-container {
					position: absolute;
					top: 0px;
					transform: translateY(-50%);
					right: ${right ? "10px" : "none"};
					left: ${!right ? "10px" : "none"};
				}
			`}</style>
		</>
	);
};

export default SectionWithImg;
