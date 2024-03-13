import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { faCheck, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hide from "../src/new.js"

export default function App() {
  const cardInfo = [
    {
      name: "Oppo",
      price: "150",
      spec: [
        { options: "100MP Rear Camera" },
        { options: "256GB Internal Storage" },
        { options: "12GB RAM" },
        { options: "6000mAh Battery" },
      ],
    },
    {
      name: "Vivo",
      price: "200",
      button: true,
      spec: [
        { options: "70MP Rear Camera" },
        { options: "128GB Internal Storage" },
        { options: "8GB RAM" },
        { options: "5000mAh Battery" },
      ],
    },
    {
      name: "Samsung",
      price: "190",
      popup: true,
      button: true,
      spec: [
        { options: "105MP Rear Camera" },
        { options: "256GB Internal Storage" },
        { options: "8GB RAM" },
        { options: "7000mAh Battery" },
      ],
    },
    {
      name: "Realme",
      price: "120",
      spec: [
        { options: "55MP Rear Camera" },
        { options: "64GB Internal Storage" },
        { options: "4GB RAM" },
        { options: "4000mAh Battery" },
      ],
    },
    {
      name: "OnePlus",
      price: "170",
      spec: [
        { options: "65MP Rear Camera" },
        { options: "256GB Internal Storage" },
        { options: "12GB RAM" },
        { options: "5500mAh Battery" },
      ],
    },
    {
      name: "Google Pixal",
      price: "250",
      spec: [
        { options: "100MP Rear Camera" },
        { options: "128GB Internal Storage" },
        { options: "12GB RAM" },
        { options: "6000mAh Battery" },
      ],
    },
    {
      name: "Xiomi",
      price: "100",
      spec: [
        { options: "100MP Rear Camera" },
        { options: "256GB Internal Storage" },
        { options: "12GB RAM" },
        { options: "6000mAh Battery" },
      ],
    },
  ];
  return (
    <div classNameName="App">
      <div className="container">
        <div className="row">
          {cardInfo.map((card) => {
            return <Card card={card} />;
          })}
        </div>
      </div>

      {/* <Hide/> */}
    </div>
  );
}

function LikeBut() {
  let [like, setLike] = useState(0);
  let [disLike, setDisLike] = useState(0);
  const likeSty = {
    backgroundColor: like >= 10 ? "darkblue" : "",
  };
  const disLikeSty = {
    backgroundColor: disLike >= 10 ? "red" : "",
  };
  return (
    <div>
      <button
        style={likeSty}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        👍{like}
      </button>

      <button
        style={disLikeSty}
        onClick={() => {
          setDisLike(disLike + 1);
        }}
      >
        👎{disLike}
      </button>
      {like >= 20 ? <h3>Awesome😍😍</h3> : null}
      {disLike > 10 ? <h3>Danger🔺🔺</h3> : null}
    </div>
  );
}

function Card({ card }) {
  return (
    <div className="col-lg-4">
      <div className={`card mb-4 ${card.popup ? "border-primary" : ""}`}>
        <div className={`card-header ${card.popup ? "text-bg-primary" : ""}`}>
          <h4>{card.name}</h4>
        </div>
        <div className="card-body">
          <h3>
            ${card.price}
            <small className="text-muted fw-light">/mo</small>
          </h3>
          <ul className="list-unstyled">
            {card.spec.map((ele) => {
              return (
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  {ele.options}
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            className={`w-100 btn btn-lg ${
              card.button ? "btn-primary" : "btn-outline-primary"
            }`}
          >
            Add To Cart
          </button>
          <LikeBut />
        </div>
      </div>
    </div>
  );
}

// w-100 btn btn-lg btn-outline-primary
