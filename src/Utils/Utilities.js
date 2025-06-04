import axios from "axios";

export const uploadImage = async (image) => {
  const key = import.meta.env.VITE_imgBB_Key;

  const formData = new FormData();
  formData.append("image", image);
  try {
    const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${key}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Axios usually sets this correctly for FormData
        },
      }
    );
    return response.data.data.display_url;
  } catch {
    return null;
  }
};
