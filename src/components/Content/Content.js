import "./Content.css";
import TopStars from "../../assets/images/topStars.png";
import AngleRight from "../../assets/icons/angleRight.svg";
import Rectangle4544 from "../../assets/images/Rectangle4544.png";
import coinPot from "../../assets/images/coinPot.svg";
import coinLeft from "../../assets/images/coinLeft.svg";
import coinRight from "../../assets/images/coinRight.svg";
import star from "../../assets/images/star.png";
import star1 from "../../assets/images/star1.png";
import bottomStar from "../../assets/images/bottomStar.png";
import bottomStar1 from "../../assets/images/bottomStar1.png";
import bottomStar2 from "../../assets/images/bottomStar2.png";
import bottomStar3 from "../../assets/images/bottomStar3.png";
import bottomStar4 from "../../assets/images/bottomStar4.png";
import bottomStar5 from "../../assets/images/bottomStar5.png";
import bottomStar6 from "../../assets/images/bottomStar6.png";
import bottomStar7 from "../../assets/images/bottomStar7.png";
import bottomStar8 from "../../assets/images/bottomStar8.png";
import bottomStar9 from "../../assets/images/bottomStar9.png";

export default function Content() {
  return (
    <div>
      <img src={TopStars} alt={"angle"} className="topstar" />

      <div className="container">
        <>
          <div className="unlock-text">Unlock to</div>
          <div className="unlock-sub-text">
            <strong>Power your dreams!</strong>
          </div>
          <div className="win-text">Stand a chance to win</div>
          <div className="win-sub-text">
            <strong>N3,000,000</strong> everyday for the next 5 days
          </div>
        </>

        <div className="table">
          <h1 className="table-text-1">🚀 How to Play</h1>
          <>
            <div className="table-text-2">
              1. Guess the right combination of numbers
            </div>
            <div className="table-text-2">2. Win <strong>N3,000,000</strong> instantly</div>
            <p className="table-text-2">
              Sounds unbelievable? Well, guess right & see for yourself!
            </p>
          </>
          <div className="inner-table">
            <div className="row">
              <div>💡</div>
              <div className="inner-table-text">
                Think well before you guess. You have only 2 attempts per day
                and even after you win, you can come back the next day to try
                for another jackpot!
              </div>
            </div>
          </div>
        </div>

        <div className="button">
          <div>{"Play The Game"}</div>
          <img src={AngleRight} alt={"angle"} />
        </div>

        <div className="fan">
          <div className="motor">
            <div className="blade1">
              <img src={Rectangle4544} alt={"blade"} />
            </div>
            <div className="blade2">
              <img src={Rectangle4544} alt={"blade"} />
            </div>
            <div className="blade3">
              <img src={Rectangle4544} alt={"blade"} />
            </div>
            <div className="blade4">
              <img src={Rectangle4544} alt={"blade"} />
            </div>
            <div className="blade5">
              <img src={Rectangle4544} alt={"blade"} />
            </div>
            <div className="blade6">
              <img src={Rectangle4544} alt={"blade"} />
            </div>
            <div className="blade7">
              <img src={Rectangle4544} alt={"blade"} />
            </div>
            <div className="blade8">
              <img src={Rectangle4544} alt={"blade"} />
            </div>
            <div className="blade9">
              <img src={Rectangle4544} alt={"blade"} />
            </div>
            <div className="blade10">
              <img src={Rectangle4544} alt={"blade"} />
            </div>
          </div>
        </div>

        <img className="coin-pot" src={coinPot} alt={"coinPot"} />
        <img className="coin-left" src={coinLeft} alt={"coinLeft"} />
        <img className="coin-right" src={coinRight} alt={"coinRight"} />
        <img className="star" src={star} alt={"star"} />
        <img className="star1" src={star1} alt={"star"} />
        <img className="bottomStar" src={bottomStar} alt={"star"} />
        <img className="bottomStar1" src={bottomStar1} alt={"star"} />
        <img className="bottomStar2" src={bottomStar2} alt={"star"} />
        <img className="bottomStar3" src={bottomStar3} alt={"star"} />
        <img className="bottomStar4" src={bottomStar4} alt={"star"} />
        <img className="bottomStar5" src={bottomStar5} alt={"star"} />
        <img className="bottomStar6" src={bottomStar6} alt={"star"} />
        <img className="bottomStar7" src={bottomStar7} alt={"star"} />
        <img className="bottomStar8" src={bottomStar8} alt={"star"} />
        <img className="bottomStar9" src={bottomStar9} alt={"star"} />
      </div>
    </div>
  );
}
