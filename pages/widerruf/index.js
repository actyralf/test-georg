import styled from "styled-components";

export default function WiderrufPage() {
  return (
    <div>
      <StyledBody>
        <h3>This is the widerruf page</h3>
      </StyledBody>
    </div>
  );
}

const StyledBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3e8e8;
  color: #572887;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 90vw;
  height: 75vh;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
