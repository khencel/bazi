import Swal from "sweetalert2";
import s from "../../public/css/login.module.css";

export const showToast = (
  message: string,
  text: string,
  icon: "success" | "error" | "warning" | "info" | "question" = "success"
) => {
  Swal.fire({
    toast: true,
    position: "top-end",
    icon,
    title: message,
    text: text,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    customClass: {
      popup: s.mytoast,
      title: s.myToastTitle,
    },
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
};