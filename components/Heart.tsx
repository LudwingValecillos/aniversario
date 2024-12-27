import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="preloader">
          <span />
          <span />
          <span />
        </div>
        <div className="shadow" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .container .preloader {
    animation: rotate 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
  }

  @keyframes rotate {
    50% {
      transform: rotate(360deg);
    }

    100% {
      transform: rotate(720deg);
    }
  }

  .preloader span {
    --c: #f23f3f;
    position: absolute;
    display: block;
    height: 32px; /* Tamaño reducido */
    width: 32px;  /* Tamaño reducido */
    background: var(--c);
    border: 1px solid var(--c);
    border-radius: 100%;
  }

  .preloader span:nth-child(1) {
    transform: translate(-14px, -14px); /* Tamaño reducido */
    animation: shape_1 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
  }

  @keyframes shape_1 {
    60% {
      transform: scale(0.4);
    }
  }

  .preloader span:nth-child(2) {
    transform: translate(14px, -14px); /* Tamaño reducido */
    animation: shape_2 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
  }

  @keyframes shape_2 {
    40% {
      transform: scale(0.4);
    }
  }

  .preloader span:nth-child(3) {
    position: relative;
    border-radius: 0px;
    transform: scale(0.98) rotate(-45deg);
    animation: shape_3 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
  }

  @keyframes shape_3 {
    50% {
      border-radius: 100%;
      transform: scale(0.5) rotate(-45deg);
    }

    100% {
      transform: scale(0.98) rotate(-45deg);
    }
  }

  .shadow {
    position: relative;
    top: 15px; /* Tamaño reducido */
    left: 50%;
    transform: translateX(-50%);
    display: block;
    height: 8px;  /* Tamaño reducido */
    width: 32px;  /* Tamaño reducido */
    border-radius: 50%;
    background-color: #d9d9d9;
    border: 1px solid #d9d9d9;
    animation: shadow 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
  }

  @keyframes shadow {
    50% {
      transform: translateX(-50%) scale(0.5);
      border-color: #f2f2f2;
    }
  }
`;

export default Loader;
