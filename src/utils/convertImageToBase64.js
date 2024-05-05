export const convertImageToBase64 = (files) => {
  return new Promise((resolve, reject) => {
    const base64Images = [];
    const reader = new FileReader();
    let index = 0;

    reader.onloadend = function () {
      base64Images.push(reader.result);

      if (index < files.length - 1) {
        index++;
        reader.readAsDataURL(files[index]);
      } else {
        resolve(base64Images);
      }
    };

    reader.readAsDataURL(files[index]);
  });
};
