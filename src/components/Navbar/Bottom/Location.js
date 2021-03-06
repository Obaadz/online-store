import React from "react";
import styled from "styled-components";
import { IoLocationOutline } from "react-icons/io5";

const StyledDelivery = styled.div`
  display: flex;
  gap: 10px;
  font-size: 0.8rem;
  span,
  a {
    color: white;
    font-weight: 600;
  }

  div {
    cursor: pointer;
  }

  @media (max-width: 992px) {
    flex: 1;
    a {
      padding-left: 25px;
      margin-right: auto;
    }
  }
`;

const Location = () => {
  return (
    <StyledDelivery>
      <IoLocationOutline fontSize="1.2rem" />
      <div>
        التوصيل الى: <span>Maadi - Cairo</span>
      </div>
      <a href="#change">تغيير</a>
    </StyledDelivery>
  );
};

export default Location;
