import Image from "next/image";

const SectionImgBg = ({ title = "", description = "", img = "", bgColor = "#f6f7ff" }) => {
	return (
		<>
			<div className='seciton-img-bg'>
				<div style={{ alignSelf: "center" }}>
					<h2>{title}</h2>

					<p>{description}</p>
				</div>
				<div className='img-container'>
					<Image src={img} title={title} width={240} height={240} objectFit='contain' />
				</div>
			</div>

			<style jsx>{`
				.seciton-img-bg {
					border-radius: 15px;
					padding: 56px 80px 56px 35px;
					display: grid;
					grid-template-columns: 70% 30%;
					gap: 30px;
					background: ${bgColor};
				}

				p {
					font-size: 20px;
					margin-top: 16px;
				}

				.img-container {
					justify-self: end;
				}

				@media only screen and (max-width: 946px) {
					.seciton-img-bg {
						grid-template-columns: 1fr;
					}

					.img-container {
						justify-self: start;
					}
				}
			`}</style>
		</>
	);
};

export default SectionImgBg;
