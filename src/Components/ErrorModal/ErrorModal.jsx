import style from "./errorModal.module.css";
import { ReactComponent as NotificationSVG } from "./notification.svg";
import { ReactComponent as CloseSVG } from "./close.svg";

const ErrorModal = ({ setErrorModalActive, errorMessage, modalType }) => {
  const timeoutId = setTimeout(() => {
    setErrorModalActive(false);
  }, 3000);

  return (
    <div className={style.container}>
      {
        <div
          className={`${
            modalType === "success"
              ? style.container_circle_green
              : style.container_circle_red
          }`}
        >
          <NotificationSVG />
        </div>
      }
      <h4 className={style.container_h4}>
        {modalType === "success" ? "ВІТАЮ!" : "ПОМИЛКА!"}
      </h4>
      <p className={style.container_p}>{errorMessage}</p>
      <CloseSVG
        className={style.container_svg}
        onClick={() => {
          setErrorModalActive(false);
          clearTimeout(timeoutId);
        }}
      />
    </div>
  );
};

export default ErrorModal;
