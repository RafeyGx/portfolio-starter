// next image

import Image from "next/Image";

const TopLeftImg = () => {
	return (
		<div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl-[400px] opacity-50">
			<image src="/top-left-img.png" width={400} height={400} />
		</div>
	);
};

export default TopLeftImg;
