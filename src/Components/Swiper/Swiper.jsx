import style from "./swiper.module.css";

const Swiper = () => {
  return (
    <div className={style.container}>
      <video className={style.container_video} autoPlay loop muted playsInline>
        <source src="./assets/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Swiper;
