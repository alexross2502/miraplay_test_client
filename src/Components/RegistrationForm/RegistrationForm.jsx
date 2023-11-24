import { useEffect, useState } from "react";
import style from "./registrationForm.module.css";
import { ReactComponent as CloseSVG } from "./close.svg";
import modalHandler from "../../utils/modalHandler";
import Api from "../../utils/api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";

const RegistrationForm = ({
  isModalActive,
  setModalActive,
  setErrorMessage,
  setErrorModalActive,
  setModalType,
}) => {
  const [isRegistrationActive, setRegistrationActive] = useState(true);
  const [fetchLogin, setFetchLogin] = useState("");
  const [fetchPassword, setFetchPassword] = useState("");
  const [fetchURL, setFetchURL] = useState("");
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

  function modalOpen(message, type) {
    setErrorModalActive(true);
    setErrorMessage(message);
    setModalType(type);
  }

  async function submitFunction(atr) {
    isRegistrationActive
      ? (async () => {
          await setFetchLogin(atr.login);
          await setFetchPassword(atr.password);
          await setFetchURL("/users/registration");
          mutate();
        })()
      : (async () => {
          await setFetchLogin(atr.login);
          await setFetchPassword(atr.password);
          await setFetchURL("/users");
          mutate();
        })();
  }

  const { data, mutate, isLoading } = useMutation({
    mutationFn: fetchController,
    onSuccess: (fetchedData) => {
      if (fetchURL === "/users" && fetchedData.status === 200) {
        localStorage.setItem("Authorization", fetchedData.data);
        modalHandler(true);
        navigate("/games_lib");
      }
      if (
        fetchURL === "/users" &&
        fetchedData?.response?.data?.message === "Wrong login or password"
      ) {
        modalOpen("Невірний логін чи пароль", "error");
      }
      if (
        fetchURL === "/users/registration" &&
        fetchedData?.response?.data?.message === "Login already exists."
      ) {
        modalOpen("Вибраний логін вже зайнятий", "error");
      }
      if (fetchURL === "/users/registration" && fetchedData?.status === 200) {
        modalOpen("Ви успішно зареєструвались", "success");
      }
    },
    onError: (error) => {},
  });

  async function fetchController() {
    try {
      const response = await Api.post(fetchURL, {
        login: fetchLogin,
        password: fetchPassword,
      });
      return response;
    } catch (error) {
      return error;
    }
  }

  // if (response?.status === 200) {
  //   localStorage.setItem("Authorization", response?.data);
  //   modalHandler(true);
  //   navigate("/games_lib");
  // }
  // setErrorMessage("Невірний логін чи пароль");
  // setModalType("error");
  // setErrorModalActive();

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
