import Title from "../components/title";
import "../style/open.css";
import open1 from "../images/open1.svg";
import open2 from "../images/open2.svg";
import { useState } from "react";

function Open() {
  const [isOpen, setOpen] = useState(-1);

  function showImg(index) {
    setOpen(index);
  }

  const openData = [
    {
      title: "Открытие дверных замков",
      img: open2,
    },
    {
      title: "Открытие автомобильных замков",
      img: open1,
    },
    {
      title: "Открытие сейфов",
      img: open2,
    },
    {
      title: "Замена и ремонт замков после открытия",
      img: open1,
    },
    {
      title: "Экстренное открытие без повреждений",
      img: open2,
    },
  ];

  // useEffect(() => {
  //   console.log(isOpen);
  // }, [isOpen]);

  return (
    <div className="open">
      <Title
        info="Услуги"
        title={
          <>
            Какие замки и сейфы <br /> мы <span>вскрываем</span>?
          </>
        }
      />
      <p className="openInfo">
        Работаем с любыми типами механизмов — от квартирных замков до банковских
        сейфов.
      </p>
      <div className="wrapperOpen">
        <div>
          {isOpen >= 0 ? <img src={openData[isOpen].img} alt="img" /> : ""}
        </div>
        <div className="openStep">
          {openData.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  showImg(index);
                }}
                className={`${isOpen === index ? "openStepActive" : ""}`}
              >
                <p>[0{index + 1}]</p>
                <p>{item.title}</p>
                <svg
                  className="openWrapper"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={`${isOpen === index ? "" : "openImg"}`}
                    d="M16.5742 8.4V16C16.5742 16.2833 16.6702 16.521 16.8622 16.713C17.0542 16.905 17.2916 17.0007 17.5742 17C17.8569 16.9993 18.0942 16.9033 18.2862 16.712C18.4782 16.5207 18.5742 16.2833 18.5742 16V6C18.5742 5.71667 18.4782 5.47933 18.2862 5.288C18.0942 5.09667 17.8569 5.00067 17.5742 5H7.57422C7.29088 5 7.05322 5.096 6.86122 5.288C6.66922 5.48 6.57355 5.71733 6.57422 6C6.57489 6.28267 6.67089 6.52033 6.86222 6.713C7.05355 6.90567 7.29088 7.00133 7.57422 7H15.1742L6.27422 15.9C6.09089 16.0833 5.99922 16.3167 5.99922 16.6C5.99922 16.8833 6.09089 17.1167 6.27422 17.3C6.45755 17.4833 6.69088 17.575 6.97422 17.575C7.25755 17.575 7.49089 17.4833 7.67422 17.3L16.5742 8.4Z"
                    fill="#181816"
                  />
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Open;
