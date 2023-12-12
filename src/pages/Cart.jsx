import React, { useState } from "react";

import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/cart-page.css";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";

/*
  Padrão de envio dos pedidos para o backend em JSON:
  {
    cliente: {
      nome: "Fulano",
      endereco: "Rua tal",
      telefone: "999999999",
      cpf: "99999999999",
      email: "
    },
    pedido: {
      pizzas: [
        {
          id: 1,
          quantidade: 2
        },
        {
          id: 2,
          quantidade: 1
        }
      ],
      total: 100
    }
*/

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const clienteInfo = localStorage.getItem("cliente");

  const finalizar = () => {
    if (cartItems.length === 0) {
      alert("Você ainda não adicionou produtos");
    }

    if (clienteInfo === null) {
      alert("Você ainda não preencheu as informações do cliente");
    }
    const cliente = JSON.parse(clienteInfo);
    const pedido = {
      pizzas: cartItems.map((item) => {
        return {
          id: item.id,
          quantidade: item.quantity,
        };
      }),
      total: totalAmount,
    };

    const data = {
      cliente,
      pedido,
    };

    fetch("http://localhost:3001/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Pedido realizado com sucesso!");
       
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Helmet title="Carrinho">
      <CommonSection title="Carrinho" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">
                  Você ainda não adicionou produtos
                </h5>
              ) : (
                <>
                  <h5 className="mb-5">Resumo pedido</h5>
                  <table className="table table-borderless mb-5 align-middle">
                    <tbody>
                      {cartItems.map((item) => (
                        <Tr item={item} key={item.id} />
                      ))}
                    </tbody>
                  </table>
                </>
              )}
              <div className="mt-4">
                <h6>
                  Subtotal: R$
                  <span className="cart__subtotal">{totalAmount}</span>
                </h6>
                <p> Frete será calculado ao final </p>
                <div className="cart__page-btn">
                  <button className="addTOCart__btn me-4">
                    <Link to="/pizzas">Continue comprando</Link>
                  </button>
                  <button className="addTOCart__btn" onClick={finalizar}>
                    Finalizar pedido
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">R$ {price}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center cart__item-del">
        <i className="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default Cart;
