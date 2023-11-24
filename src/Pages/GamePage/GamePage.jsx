import { useEffect } from "react";
import GameSection from "../../Components/GameSection/GameSection";
import Header from "../../Components/Header/Header";
import Api from "../../utils/api";

const GamePage = () => {
  async function checkToken() {
    const token = localStorage.getItem("Authorization");
    await Api.token(token);
  }
  useEffect(() => {
    checkToken();
  });

  return (
    <div>
      <Header />
      <GameSection />
    </div>
  );
};

export default GamePage;
