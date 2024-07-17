import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

const FooterStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 4px 0px 0px 0px;
  background: #000000E5;
  border-top: 4px solid  #8b22d1;
  box-shadow: 0px 5px 29px 0px #8b22d1B2;
  margin-top: 5vh;

  @media (max-width: 430px) {
      padding: 15px;
    }

  img{
    width: 12vw;
    height: 6vh;

    @media (max-width: 1024px) {
      width: 18vw;
      height: 4vh;
      padding: 1vh 0;
    }

    @media (max-width: 430px) {
      width: 10vw;
      height: 5vh;
      padding: 0;
    }

    @media (max-height: 600px) {
      width: 14vw;
      height: 10vh;
      padding: 0;
    }
    }
`
const BotonsCotainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6vw;
`
const BotonHomeCotainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #8b22d13D;
  border: 2px solid #8b22d1;
  color: #fff;
  width: 35vw;
  border: 2px 0px 0px 0px;
  border-radius: 30px;
  gap: 1vw;
`
const P = styled.p`
  font-size: 2.5vh;
  font-weight: bold;
  color: #8b22d1;
  margin: 2vh 0 1.5vh 0;
`
const BotonAddCotainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 20vw;
margin-left: 5vw;
`
const Por = styled.p`
  text-align: center;
  font-size: 12px;
  color: white;
`

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 430);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <FooterStyled>
      {isMobile ? (
        <>
          <BotonsCotainer>
            <Link to="/">
            <BotonHomeCotainer>
              <img src="/img/home.png" alt="Button 1"/>
              <P>HOME</P>
            </BotonHomeCotainer>
            </Link>
            <Link to="/nuevo-video">
            <BotonAddCotainer>
              <img src="/img/NuevoVideo.png" alt="Button 2"/>
            </BotonAddCotainer>
            </Link>
          </BotonsCotainer>
        </>
      ) : (
        <img src="/img/logoAlura.png" alt="Logo de AluraFlix" />
      )}
      <Por>Desarrollado por: Luis Fernando Anguiano Rios</Por>
    </FooterStyled>
  );
};

export default Footer
