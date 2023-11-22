import style from "./swiper.module.css";

const Swiper = () => {
  return (
    <div className={style.container}>
      <video
        src="./media/video.mp4"
        type="video/mp4"
        className={style.container_video}
        loop
        autoPlay
      ></video>
      <video className={style.container_video} autoPlay loop muted playsInline>
        <source src="./media/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Swiper;
