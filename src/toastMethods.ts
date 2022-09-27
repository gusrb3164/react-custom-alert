import type { ToastDetail, ToastMethods, ToastType } from ".";

let id = 0;

function dispatch(type: ToastType): ToastMethods[ToastType] {
  return (message, options) => {
    window.dispatchEvent(
      new CustomEvent<ToastDetail>("toastAlert", {
        detail: { id: ++id, message, options, type },
      })
    );
  };
}

export const toast: ToastMethods = {
  info: dispatch("info"),
  success: dispatch("success"),
  warning: dispatch("warning"),
  error: dispatch("error"),
};
