import React, { memo, useEffect, useState } from "react";
import Icon from "./Icon";
import type { ToastProps } from ".";

export const Toast = memo(({ remove, id, message, type, options }: ToastProps) => {
  const [isRemove, setIsRemove] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsRemove(true), options?.floatingTime || 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`--react--toast-alert${isRemove ? " --toast-hide" : " --toast-show"}`}
      onAnimationEnd={isRemove ? () => remove(id) : undefined}
      onClick={() => setIsRemove(true)}
      style={options?.toastStyle}
    >
      <Icon type={type} />
      {message}
    </div>
  );
});
