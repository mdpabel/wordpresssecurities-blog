export const FileUpload = async (file: File) => {
  let result = null;

  let formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'mdp-upload');

  await fetch(`'https://api.cloudinary.com/v1_1/divg4kqqk/image/upload'`, {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      result = data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  return result;
};
