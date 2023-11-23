import { useState } from "react";
import style from "./registrationForm.module.css";
import { ReactComponent as CloseSVG } from "./close.svg";

const RegistrationForm = ({
  isModalActive,
  setModalActive,
  setErrorMessage,
  setErrorModalActive,
}) => {
  const [isRegistrationActive, setRegistrationActive] = useState(true);

  function formSwitch(prevState) {
    setRegistrationActive(!prevState);
  }

  return (
    <div
      className={style.background}
      onClick={() => {
        setModalActive(false);
      }}
    >
      <div
        className={style.container}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={style.container_nav}>
          <button
            className={`${style.container_nav__button} ${
              isRegistrationActive ? "" : style.container_nav__buttonActive
            }`}
            onClick={() => {
              formSwitch(true);
            }}
          >
            ВХІД
          </button>
          <button
            className={`${style.container_nav__button} ${
              !isRegistrationActive ? "" : style.container_nav__buttonActive
            }`}
            onClick={() => {
              formSwitch(false);
            }}
          >
            РЕЄСТРАЦІЯ
          </button>
        </div>

        <form
          className={`${style.container_form} ${
            isRegistrationActive
              ? style.container_formActive
              : style.container_formInactive
          }`}
        >
          <h3>Спробуй нові відчуття</h3>
          <p>Зареєструйся, щоб грати на максималках у свої улюблені ігри</p>
          <label className={style.container_form__label}>
            введіть ваш email:
            <input className={style.container_form__input} type="text"></input>
          </label>
          <label className={style.container_form__label}>
            введіть ваш пароль:
            <input
              className={style.container_form__input}
              type="password"
            ></input>
          </label>
          <button className={style.container_form__button}>РЕЄСТРАЦІЯ</button>
        </form>
        <form
          className={`${style.container_form} ${
            !isRegistrationActive
              ? style.container_formActive
              : style.container_formInactive
          }`}
        >
          <h3>Спробуй нові відчуття</h3>
          <p>Увійди, щоб грати на максималках у свої улюблені ігри</p>
          <label className={style.container_form__label}>
            введіть ваш email:
            <input className={style.container_form__input} type="text"></input>
          </label>
          <label className={style.container_form__label}>
            введіть ваш пароль:
            <input
              className={style.container_form__input}
              type="password"
            ></input>
          </label>
          <button className={style.container_form__button}>ВХІД</button>
        </form>
      </div>
      <button className={style.closeButton}>
        <CloseSVG />
      </button>
    </div>
  );
};

export default RegistrationForm;
