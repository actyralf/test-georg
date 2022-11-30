import styled from "styled-components";
import lottie from "lottie-web";
import {useEffect, useRef} from "react";
import Link from "next/link";

export default function Header() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("/public/HeaderAnimation.json"),
    });
    return () => lottie.destroy();
  }, []);

  return (
    <Link href="/" style={{textDecoration: "none"}}>
      <StyledHeader>
        <Styledh3>Taschen</Styledh3>
        <AnimationContainer ref={container}></AnimationContainer>
        <Styledh3>Anwalt</Styledh3>
      </StyledHeader>
    </Link>
  );
}

const AnimationContainer = styled.section`
  width: 70px;
  height: 90px;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid #572887 2px;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 5px;
  color: #572887;
  text-decoration: none;
`;

const Styledh3 = styled.h3`
  text-decoration: none;
`;
