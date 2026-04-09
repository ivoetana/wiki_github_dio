import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 865px;
  width: 90%;
  height: calc(100vh - 80px);
  overflow-y: auto;

  padding-top: 20px;

  display: flex;
  align-content: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`;
