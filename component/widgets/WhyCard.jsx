import Image from "next/image";

const WhyCard = ({ img, title, description }) => {
	return (
		<>
			<div>
				<Image src={img} width={63} height={55} objectFit='contain' alt={title} />
				<p className='title'>{title}</p>
				<p className='desc'>{description}</p>
			</div>

			<style jsx>{`
				.title {
					font-size: 19px;
					color: #3b3b3b;
				}

				.desc {
					font-size: 18px;
					color: #a0a0a0;
					margin-top: 10px;
				}
			`}</style>
		</>
	);
};

export default WhyCard;
