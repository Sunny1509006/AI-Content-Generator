export const getPictureHrefFromBlob = (imageBlob) => {
  try {
    const imageUrl = URL.createObjectURL(imageBlob);

    return imageUrl;
  } catch (error) {
    console.error("Error fetching picture!");
    console.error(error);

    throw Error("Error fetching picture!", error);
  }
};
