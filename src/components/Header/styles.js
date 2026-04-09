import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
`;

export const ContentHeader = styled.div`
  width: 90%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 80px;
`;

export const Input = styled.input`
  width: 450px;
  padding: 10px;
  background-color: #252e48;
  border: 2px solid #bdbcbc;
  border-radius: 10px;
  color: #bdbcbc;
  margin-right: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  outline: 2px solid #bdbcbc;
  background-color: transparent;
  color: #bdbcbc;
  transition: all 0.2s ease;
  font-weight: 500;

  &:hover {
    outline-color: #fff;
    background-color: #252e48;
    cursor: pointer;
  }
`;
