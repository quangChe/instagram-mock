export const fetchImages = async () => {
  const response = await fetch('https://picsum.photos/list');
  const images = await response.json();

  return images.slice(27);
};

export const getImageFromId = id =>
  `https://picsum.photos/${600}/${600}?image=${id}`;
