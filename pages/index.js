import styled from "styled-components";
import Link from "next/link";
import lottie from "lottie-web";
import {useEffect, useRef} from "react";

export default function HomePage() {
  const widerrufContainer = useRef(null);
  const bestellungContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: bestellungContainer.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("/public/BestellungAnimation.json"),
    });
  }, []);

  useEffect(() => {
    lottie.loadAnimation({
      container: widerrufContainer.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("/public/WiderrufAnimation.json"),
    });
  }, []);

  console.log(require("/public/WiderrufAnimation.json"));

  return (
    <div>
      <StyledBody>
        <h3>Wo drückt der Schuh?</h3>

        <Link href="/bestellung" style={{textDecoration: "none"}}>
          <StyledBestellungButton>
            <BestellungAnimation ref={bestellungContainer} />
            Online bestellen und kaufen
          </StyledBestellungButton>
        </Link>

        <Link href="/widerruf" style={{textDecoration: "none"}}>
          <StyledWiderufButton>
            <WiderrufAnimation ref={widerrufContainer} />
            Widerruf und Retoure
          </StyledWiderufButton>
        </Link>
      </StyledBody>
    </div>
  );
}

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f3e8e8;
  color: #572887;
  border-radius: 10px;
  border: 1px solid rgba(163, 134, 182, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 90vw;
  height: 75vh;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledBestellungButton = styled.button`
  color: #572887;
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  background-color: #e6ceee;
  border-radius: 10px;
  border: 1px solid rgba(163, 134, 182, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 20vh;
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledWiderufButton = styled.button`
  color: #572887;
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  background-color: #e6ceee;
  border-radius: 10px;
  border: 1px solid rgba(163, 134, 182, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 20vh;
  width: 80vw;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  align-items: center;
`;

const BestellungAnimation = styled.section`
  width: 190px;
  height: 220px;
`;

const WiderrufAnimation = styled.section`
  width: 190px;
  height: 220px;
`;

/* const BestellungContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: flex-start;
` */
