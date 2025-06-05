import axios from "axios";
import Swal from "sweetalert2";

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

export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});
