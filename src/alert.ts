import type { AlertDetail } from "./type";

export const alert = (detail: AlertDetail) => {
  window.dispatchEvent(
    new CustomEvent("toastAlert", {
      detail,
    })
  );
};
