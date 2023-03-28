export const loadImage = (src: string) => {
	const image = new Image();
	image.src = src;
	return image;
};

export const deg2rad = (degrees) => degrees * (Math.PI / 180);
