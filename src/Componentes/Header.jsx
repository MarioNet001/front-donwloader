import styled from 'styled-components';

const Header = () => {
  return (
    <StyledWrapper>
      <div className="section-banner">
        <div id="star-1">
          <div className="curved-corner-star">
            <div id="curved-corner-bottomright" />
            <div id="curved-corner-bottomleft" />
          </div>
          <div className="curved-corner-star">
            <div id="curved-corner-topright" />
            <div id="curved-corner-topleft" />
          </div>
        </div>
        <div id="star-2">
          <div className="curved-corner-star">
            <div id="curved-corner-bottomright" />
            <div id="curved-corner-bottomleft" />
          </div>
          <div className="curved-corner-star">
            <div id="curved-corner-topright" />
            <div id="curved-corner-topleft" />
          </div>
        </div>
        <div id="star-4">
          <div className="curved-corner-star">
            <div id="curved-corner-bottomright" />
            <div id="curved-corner-bottomleft" />
          </div>
          <div className="curved-corner-star">
            <div id="curved-corner-topright" />
            <div id="curved-corner-topleft" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .section-banner {
    height: 20vh;
    width: 40vw;
    position: relative;
    transition: left 0.3s linear;
    background: url("https://wallpapers.com/images/high/cloudy-world-map-4k-9rwv16ua1l0uklu0.webp");
    background-size: cover;
    background-position: left;
    bottom: 0px;
    border-radius: 0%;
    animation: earthRotate 30s linear 0s infinite;
    box-shadow: 0px 0 20px RGBA(255, 255, 255, 0.2), -5px 0px 8px #c3f4ff inset,
      15px 2px 35px #000 inset, -24px -2px 34px #c3f4ff99 inset,
      350px 0px 54px #00000066 inset, 150px 0px 38px #000000aa inset;
  }
  @keyframes earthRotate {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 400px 0;
    }
  }

  .curved-corner-star {
    display: flex;
    position: relative;
  }

  #curved-corner-bottomleft,
  #curved-corner-bottomright,
  #curved-corner-topleft,
  #curved-corner-topright {
    width: 4px;
    height: 5px;
    overflow: hidden;
    position: relative;
  }

  #curved-corner-bottomleft:before,
  #curved-corner-bottomright:before,
  #curved-corner-topleft:before,
  #curved-corner-topright:before {
    content: "";
    display: block;
    width: 200%;
    height: 200%;
    position: absolute;
    border-radius: 50%;
  }

  #curved-corner-bottomleft:before {
    bottom: 0;
    left: 0;
    box-shadow: -5px 5px 0 0 white;
  }

  #curved-corner-bottomright:before {
    bottom: 0;
    right: 0;
    box-shadow: 5px 5px 0 0 white;
  }

  #curved-corner-topleft:before {
    top: 0;
    left: 0;
    box-shadow: -5px -5px 0 0 white;
  }

  #curved-corner-topright:before {
    top: 0;
    right: 0;
    box-shadow: 5px -5px 0 0 white;
  }

  @keyframes twinkling {
    0%,
    100% {
      opacity: 0.1;
    }
    50% {
      opacity: 1;
    }
  }

  #star-1 {
    position: absolute;
    left: -20px;
    animation: twinkling 3s infinite;
  }

  #star-2 {
    position: absolute;
    left: -40px;
    top: 30px;
    animation: twinkling 2s infinite;
  }
  #star-3 {
    position: absolute;
    left: 350px;
    top: 90px;
    animation: twinkling 4s infinite;
  }
  #star-4 {
    position: absolute;
    left: 200px;
    top: 290px;
    animation: twinkling 3s infinite;
  }
  #star-5 {
    position: absolute;
    left: 390px;
    top: 250px;
    animation: twinkling 1.5s infinite;
  }

  #star-6 {
    position: absolute;
    left: 400px;
    top: -50px;
    animation: twinkling 4s infinite;
  }
  #star-7 {
    position: absolute;
    left: 430px;
    top: 60px;
    animation: twinkling 2s infinite;
  }`;

export default Header;
