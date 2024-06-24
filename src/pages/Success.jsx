import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Label = styled.div`
  margin: 10px 0px;
`;

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = location.state.stripeData;
  const cart = location.state.products;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  const handleClick = () => {
    dispatch(clearCart());
    navigate("/");
  };

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });

        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
    // console.log(currentUser.accessToken);
  }, [cart, data, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      {cart.products.map((product) => (
        <>
          <Label>Product title: {product.title}</Label>
          <Label>Quantity: {product.quantity}</Label>
          <Label>Total Amount Payable: {cart.total}</Label>
          
        </>
      ))}
      <button
        style={{ padding: 10, marginTop: 20 }}
        onClick={() => handleClick()}
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default Success;
