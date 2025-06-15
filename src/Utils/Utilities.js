import axios from "axios";
import Swal from "sweetalert2";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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

export const setRoleOnDB = async (user, setUser, navigate, location) => {
  const { value: role } = await Swal.fire({
    title: "Please select one. You're a ?",
    input: "select",
    inputOptions: {
      learner: "Learner",
      mentor: "Mentor",
    },
    inputPlaceholder: "Select One",
    showCancelButton: false,
    allowOutsideClick: false,
  });

  if (role) {
    const userData = {
      role: role,
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
    axios
      .post("https://learnosphere-server.vercel.app/user", userData)
      .then((res) => {
        if (res.data.insertedId) {
          setUser({ ...user, ...userData });
          Toast.fire({
            icon: "success",
            title: "Account Created",
          });
          navigate(location.state || "/");
        } else {
          Toast.fire({
            icon: "error",
            title: "Error Updating Data",
          });
        }
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: `${err.message}`,
        });
      });
  } else {
    ("No role selected or dialog dismissed.");
  }
};

export const pricePercentage = (price) => {
  const discountAmount =
    parseInt(price.regularPrice) - parseInt(price.discountedPrice);
  const discountPercentage = (
    (discountAmount / parseInt(price.regularPrice)) *
    100
  ).toFixed(2);

  return discountPercentage;
};
