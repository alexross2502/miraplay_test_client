import { useEffect, useState } from "react";
import style from "./registrationForm.module.css";
import { ReactComponent as CloseSVG } from "./close.svg";
import modalHandler from "../../utils/modalHandler";
import Api from "../../utils/api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RegistrationForm = ({
  isModalActive,
  setModalActive,
  setErrorMessage,
  setErrorModalActive,
  setModalType,
}) => {
  const [isRegistrationActive, setRegistrationActive] = useState(true);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const navigate = useNavigate();

  function formSwitch(prevState) {
    setRegistrationActive(!prevState);
  }

  async function submitFunction(atr) {
    isRegistrationActive
      ? registrationController(atr.login, atr.password)
      : authorizationController(atr.login, atr.password);
  }

  async function registrationController(login, password) {
    try {
      const response = await Api.post("users/registration", {
        login,
        password,
      });
      console.log(response);
    } catch (error) {
      console.log("error : ", error);
    }
  }
  async function authorizationController(login, password) {
    try {
      const response = await Api.post("users", {
        login,
        password,
      });
      if (response?.status === 200) {
        localStorage.setItem("Authorization", response?.data);
        navigate("/games_lib");
      }
    } catch (error) {
      console.log("error : ", error);
    }
  }

  return (
    <div
      className={style.background}
      onClick={async () => {
        setModalActive(modalHandler(isModalActive));
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
          className={style.container_form}
          onSubmit={handleSubmit(submitFunction)}
        >
          <h3>Спробуй нові відчуття</h3>
          <p>
            {isRegistrationActive
              ? "Зареєструйся, щоб грати на максималках у свої улюблені ігри"
              : "Увійди, щоб грати на максималках у свої улюблені ігри"}
          </p>
          <label className={style.container_form__label}>
            введіть ваш email:
            <input
              className={style.container_form__input}
              type="text"
              {...register("login", {
                required: "empty",
              })}
            ></input>
          </label>
          <label className={style.container_form__label}>
            введіть ваш пароль:
            <input
              className={style.container_form__input}
              type="password"
              {...register("password", {
                required: "empty",
              })}
            ></input>
          </label>
          {isRegistrationActive ? (
            <button className={style.container_form__button} type="submit">
              РЕЄСТРАЦІЯ
            </button>
          ) : (
            <button className={style.container_form__button} type="submit">
              ВХІД
            </button>
          )}
        </form>
      </div>
      <button className={style.closeButton}>
        <CloseSVG />
      </button>
    </div>
  );
};

export default RegistrationForm;
