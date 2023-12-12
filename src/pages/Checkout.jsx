import "../styles/checkout.css";
import { AiFillCheckCircle } from "react-icons/ai";

const Checkout = () => {
  return (
    <>
      <div className="checkoutMessage">
        <div className="checkoutTitleContainer">
          <AiFillCheckCircle className="checkoutIcon" />
          <h3>Obrigado pelo Pedido!</h3>
        </div>
        <span>
          Seu pedido foi recebido e está sendo preparado. Você receberá um
          e-mail com os detalhes do pedido.
        </span>
      </div>
    </>
  );
};

export default Checkout;
