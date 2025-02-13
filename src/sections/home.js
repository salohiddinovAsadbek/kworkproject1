import lockImg from "../images/Lock-image.svg";
import "../style/home.css";
import close1 from "../images/close.svg";
import { useState } from "react";
import checkbox from "../images/Checkbox.svg";
import checkboxEmpty from "../images/checkEmpty.svg";

function Home() {
  const [isOpenCall, setCall] = useState(false);
  const [isAgree, setAgree] = useState(false);

  function close() {
    setCall((c) => !c);
  }

  function checkAgree() {
    setAgree((c) => !c);
  }

  return (
    <>
      <div className="home">
        <p>Экстренное вскрытие замков и сейфов</p>
        <h1>без повреждений 24/7</h1>
        <p>
          Поможем попасть домой, в офис или <br /> к ценностям быстро и
          безопасно.
        </p>
        <button className="callNow" onClick={() => setCall((c) => !c)}>
          Позвонить сейчас
        </button>
        <img src={lockImg} alt="lockImg" />
      </div>

      {isOpenCall && (
        <CallShow close={close} isAgree={isAgree} checkAgree={checkAgree} />
      )}
    </>
  );
}

function CallShow({ close, isAgree, checkAgree }) {
  return (
    <div className="callShow" onClick={close}>
      <div className="callShowWrapper">
        <button
          onClick={(e) => {
            e.stopPropagation();
            close();
          }}
        >
          <img src={close1} alt="closeIcon" />
        </button>
        <h1>
          Оставьте заявку и получите <span>скидку 10%</span> на любую услугу
        </h1>
        <p>
          Оставьте свои контактные данные, и мы свяжемся с вами в ближайшее
          время.
        </p>
        <div className="detailForm">
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="Номер телефона" />
          <input type="email" placeholder="Email" />
          <div>
            <img
              src={isAgree ? checkbox : checkboxEmpty}
              alt="checkbox"
              onClick={(e) => {
                e.stopPropagation();
                checkAgree();
              }}
            />
            <p>
              Я согласен на обработку <span>Персональных данных</span>
            </p>
          </div>
        </div>
        <button className="leaveComment">Оставить заявку</button>
      </div>
    </div>
  );
}

export default Home;
