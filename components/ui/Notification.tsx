import ReactDOM from "react-dom";
import classes from "./Notification.module.css";
import * as React from "react";

interface Notification {
  title: string;
  message: string;
  status: string;
}

const Notification: React.FC<Notification> = ({ title, message, status }) => {
  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={`${cssClasses} font-semibold`}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications")!
  );
};

export default Notification;
