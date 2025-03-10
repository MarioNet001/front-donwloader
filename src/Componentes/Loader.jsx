import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader-wrapper ">
        <div className="packman" />
        <div className="dots">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader-wrapper {
    position: relative;
    top: 0;
    left: 0;
    bottom: 50vh;
    right: 0;
    margin: 18rem;
  }

  .loader-wrapper .packman::before {
    content: '';
    position: absolute;
    width: 50px;
    height: 25px;
    background-color: #EFF107;
    border-radius: 100px 100px 0 0;
    transform: translate(-50%, -50%);
    animation: pac-top 0.5s linear infinite;
    transform-origin: center bottom;
  }

  .loader-wrapper .packman::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 25px;
    background-color: #EFF107;
    border-radius: 0 0 100px 100px;
    transform: translate(-50%, 50%);
    animation: pac-bot 0.5s linear infinite;
    transform-origin: center top;
  }

  @keyframes pac-top {
    0% {
      transform: translate(-50%, -50%) rotate(0)
    }

    50% {
      transform: translate(-50%, -50%) rotate(-30deg)
    }

    100% {
      transform: translate(-50%, -50%) rotate(0)
    }
  }

  @keyframes pac-bot {
    0% {
      transform: translate(-50%, 50%) rotate(0)
    }

    50% {
      transform: translate(-50%, 50%) rotate(30deg)
    }

    100% {
      transform: translate(-50%, 50%) rotate(0)
    }
  }

  .dots .dot {
    position: absolute;
    top: 8px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #fff;
  }

  .dots .dot:nth-child(1) {
    left: 90px;
    animation: dot-stage1 0.5s infinite;
  }

  .dots .dot:nth-child(2) {
    left: 60px;
    animation: dot-stage1 0.5s infinite;
  }

  .dots .dot:nth-child(3) {
    left: 30px;
    animation: dot-stage1 0.5s infinite;
  }

  .dots .dot:nth-child(4) {
    left: 10px;
    animation: dot-stage2 0.5s infinite;
  }

  @keyframes dot-stage1 {
    0% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(-24px, 0);
    }
  }

  @keyframes dot-stage2 {
    0% {
      transform: scale(1);
    }

    5%, 100% {
      transform: scale(0);
    }
  }`;

export default Loader;
