import { useState } from "react";
import ErrorModal from "../../Components/ErrorModal/ErrorModal";
import Header from "../../Components/Header/Header";
import Swiper from "../../Components/Swiper/Swiper";

const MainPage = () => {
  const [isErrorModalActive, setErrorModalActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div>
      <Header
        setErrorMessage={setErrorMessage}
        setErrorModalActive={setErrorModalActive}
      />
      <Swiper />
      {isErrorModalActive && (
        <ErrorModal
          setErrorModalActive={setErrorModalActive}
          errorMessage={errorMessage}
        />
      )}
    </div>
  );
};

export default MainPage;
