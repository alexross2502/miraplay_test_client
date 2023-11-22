import style from "./header.module.css";
import { ReactComponent as ManSVG } from "./images/man.svg";
import { ReactComponent as FindSVG } from "./images/find.svg";
import { ReactComponent as LogoSVG } from "./images/logo.svg";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.container_logo}>
          <div className={style.container_logo__svg}>
            <LogoSVG />
          </div>
          <h5 className={style.container_logo__h5}>MIRAPLAY</h5>
          <p className={style.container_logo__p}>Cloud Gaming</p>
        </div>
        <nav className={style.container_nav}>
          <ul className={style.container_nav_list}>
            <a className={style.container_nav_list__firstItem}>
              <h5>Ігри</h5>
            </a>
            <a className={style.container_nav_list__item}>
              <h5>Про платформу</h5>
              <div className={style.container_nav_list__bottomLine}></div>
            </a>
            <a className={style.container_nav_list__item}>
              <h5>Здай в аренду свій ПК</h5>
              <div className={style.container_nav_list__bottomLine}></div>
            </a>
            <a className={style.container_nav_list__item}>
              <h5>Новини</h5>
              <div className={style.container_nav_list__bottomLine}></div>
            </a>
            <a className={style.container_nav_list__item}>
              <h5>FAQ</h5>
              <div className={style.container_nav_list__bottomLine}></div>
            </a>
          </ul>
        </nav>
        <div className={style.container_buttons}>
          <div
            className={`${style.container_buttons__find} ${style.container_buttons__item}`}
          >
            <div className={style.container_buttons__svg}>
              <FindSVG />
            </div>
          </div>
          <button
            className={`${style.container_buttons__login} ${style.container_buttons__item}`}
          >
            <div className={style.container_buttons__svg}>
              <ManSVG />
            </div>
          </button>
          <button
            className={`${style.container_buttons__download} ${style.container_buttons__item}`}
          >
            ЗАВАНТАЖИТИ КЛІЄНТ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
