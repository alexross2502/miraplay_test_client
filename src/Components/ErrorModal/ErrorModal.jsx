import style from "./errorModal.module.css";
import { ReactComponent as NotificationSVG } from "./notification.svg";
import { ReactComponent as CloseSVG } from "./close.svg";

const ErrorModal = ({ setErrorModalActive, errorMessage }) => {
  setInterval(() => {
    setErrorModalActive(false);
  }, 5000);

  return (
    <div className={style.container}>
      <div className={style.container_circle}>
        <NotificationSVG />
      </div>
      <h4 className={style.container_h4}>ПОМИЛКА</h4>
      <p className={style.container_p}>{errorMessage}</p>
      <CloseSVG className={style.container_svg} />
    </div>
  );
};

export default ErrorModal;
