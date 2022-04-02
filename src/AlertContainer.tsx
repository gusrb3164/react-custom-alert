import React, { useCallback, useEffect, useState } from "react";
import type { CSSProperties } from "react";
import Icon from "./Icon";
import type { AlertDetail } from "./type";

interface Props {
  floatingTime?: number;
  containerStyle?: CSSProperties;
  alertStyle?: CSSProperties;
}

export const AlertContainer: React.VFC<Props> = ({ floatingTime = 3000, alertStyle, containerStyle }) => {
  const [alerts, setAlerts] = useState<AlertDetail[]>([]);

  const handler = useCallback(({ detail }: CustomEvent<AlertDetail>) => {
    setAlerts((prevAlerts) => [...prevAlerts, detail]);

    setTimeout(() => {
      setAlerts((prevAlerts) => prevAlerts.slice(1, prevAlerts.length));
    }, floatingTime);
  }, []);

  useEffect(() => {
    window.addEventListener("toastAlert", handler as any);

    return () => {
      window.removeEventListener("toastAlert", handler as any);
    };
  }, []);

  return (
    <div id="--react--toast-container" style={containerStyle}>
      {alerts.map(({ message, type }, idx) => (
        <div className="--react--toast-alert" key={idx} style={alertStyle}>
          <Icon type={type} />
          <p>{message}</p>
        </div>
      ))}
    </div>
  );
};
