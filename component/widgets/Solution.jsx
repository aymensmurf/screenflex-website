import Image from "next/image";

const Solution = ({ img, title, description }) => {
	return (
		<>
			<div className='solution'>
				<div className='img-container flex ai-c jc-c'>
					<div className='img-wrapper'>
						<Image src={img} width={300} height={283} objectFit='contain' />
					</div>
				</div>
				<div className='content-container'>
					<p className='title'>{title}</p>
					<p className='description'>{description}</p>
				</div>
			</div>

			<style jsx>{`
				.solution {
					cursor: pointer;
				}

				.img-container {
					width: 100%;
					height: 340px;
					background: #f6f7ff;
					border-radius: 15px;
					padding: 10px;
				}

				.img-wrapper {
					transition: all 500ms ease;
				}

				.solution:hover .img-container .img-wrapper {
					transform: scale(0.75);
				}

				.content-container {
					padding: 52px 35px 0px;
				}

				.title {
					font-weight: 600;
					font-size: 28px;
					line-height: 30px;
					text-transform: uppercase;
				}

				.description {
					font-size: 18px;
					text-align: left;
					margin-top: 12px;
				}

				@media only screen and (max-width: 1023px) {
					.content-container {
						padding: 52px 0px;
					}

					.img-container {
						height: 286px;
					}
				}
			`}</style>
		</>
	);
};

export default Solution;
