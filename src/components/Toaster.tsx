import Swal from "sweetalert2";
import s from "../../public/css/login.module.css";
import h from "../../public/css/home.module.css"

type AlertPopupProps = {
  title?: string;
  text?: string;
  icon?: "warning" | "error" | "success" | "info" | "question";
  confirmText?: string;
  cancelText?: string;
  successTitle?: string;
  successText?: string;
  showSuccess?: boolean;
  onConfirm?: (() => Promise<void> | void) | null;
};

export const alertPopup = async ({
  title = "Are you sure?",
  text = "This action cannot be undone.",
  icon = "warning",
  confirmText = "Yes",
  cancelText = "Cancel",
  successTitle = "Success!",
  successText = "",
  showSuccess = true,
  onConfirm = null,
}: AlertPopupProps) => {
  const result = await Swal.fire({
    title,
    text,
    icon,
    background: "#1e1e1e",
    color: "#fff",
    showCancelButton: true,
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
    buttonsStyling: false, // ⚠️ required

    customClass: {
      actions: h["swal-actions"],
      confirmButton: h["confirm-btn"],
      cancelButton: h["cancel-btn"],
    },
  });

  if (result.isConfirmed) {
    if (onConfirm) {
      await onConfirm();
    }

    if (showSuccess) {
      await Swal.fire({
        title: successTitle,
        text: successText,
        icon: "success",
        background: "#1e1e1e",
        color: "#fff",
        timer: 1500,
        showConfirmButton: false,
      });
    }

    return true;
  }

  return false;
};

export const showToast = (
  message: string,
  text: string,
  icon: "success" | "error" | "warning" | "info" | "question" = "success"
) => {
  Swal.fire({
    toast: true,
    position: "bottom-end",
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