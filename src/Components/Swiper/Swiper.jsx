import style from "./swiper.module.css";

const Swiper = () => {
  return (
    <div className={style.container}>
      <video className={style.container_video} autoPlay loop muted playsInline>
        <source src="./assets/video.mp4" type="video/mp4" />
      </video>
      <div className={style.container_text}>
        <h1 className={style.container_text__h1}>
          Грай у улюблені<br></br>
          <span className={style.container_text__span}>
            шутери, стратегії, гонки
          </span>
          <br></br>в хмарі
        </h1>
        <p className={style.container_text__p}>
          Топові ігри на <span>будь-якому ПК</span> вже зараз, реєструйся і грай
          30 хв безкоштовно
        </p>
        <div>
          <button className={style.container_text__firstButton}>
            ПОЧАТИ ГРАТИ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Swiper;
