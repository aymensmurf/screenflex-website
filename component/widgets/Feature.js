import Image from "next/image";

const Feature = ({ img, title, description }) => {
	return (
		<>
			<div className='feature'>
				<Image src={img} width={90} height={70} objectFit='contain' alt={title} />
				<h5>{title}</h5>
				<p>{description}</p>
			</div>
			<style jsx>{`
				.feature {
					height: 100%;
					position: relative;
					cursor: pointer;
					background: #fff;
					border-radius: 15px;
					padding: 32px 39px 47px;
					text-align: center;
					transition: all 500ms ease;
				}

				.feature:hover {
					filter: drop-shadow(15px 15px 50px #d2d7ff);
				}

				h5 {
					font-size: 12px;
					font-weight: bold;
					color: #171717;
					margin-top: 8px;
				}

				p {
					font-size: 14px;
					margin-top: 11px;
					color: #171717;
				}

				@media only screen and (max-width: 620px) {
					.feature:hover {
						filter: none;
					}
				}
			`}</style>
		</>
	);
};

export default Feature;
