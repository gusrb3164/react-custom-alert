import React, { memo, useCallback, useEffect, useState } from "react";
import { Toast } from "./Toast";
import type { ToastContainerProps, ToastDetail } from ".";
import "./index.css";

export const ToastContainer = memo(({ containerStyle, ...defaultOptions }: ToastContainerProps) => {
  const [toasts, setToasts] = useState<ToastDetail[]>([]);

  const removeToast = useCallback((id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  const handler = useCallback(({ detail }: CustomEvent<ToastDetail>) => {
    if (detail.options) {
      setToasts((prevToasts) => [...prevToasts, { ...detail, options: { ...defaultOptions, ...detail.options } }]);
      return;
    }

    setToasts((prevToasts) => [...prevToasts, { ...detail, options: defaultOptions }]);
  }, []);

  useEffect(() => {
    window.addEventListener("toastAlert", handler as any);

    return () => {
      window.removeEventListener("toastAlert", handler as any);
    };
  }, []);

  return (
    <div id="--react--toast-container" style={containerStyle}>
      {toasts.map((toast) => (
        <Toast key={toast.id} remove={removeToast} {...toast} />
      ))}
    </div>
  );
});
