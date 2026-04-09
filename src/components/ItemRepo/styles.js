import styled from "styled-components";

export const ItemContainer = styled.div`
  width: calc(50% - 5px);
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  border: 1px dashed #4e629c;

  display: flex;
  flex-direction: column;

  &:hover {
    background-color: #252e48;
  }
`;

export const Titulo = styled.h3`
  color: #6abffb;
  font-size: 18px;
  border-bottom: 1px solid #6abffb;
`;

export const Subtitulo = styled.p`
  font-size: 13px;
  color: #6abffb90;
  margin-top: 5px;
`;

export const DescricaoContainer = styled.div`
  display: flex;
  padding: 15px 0 0 0;
`;

export const Descricao = styled.p`
  width: 80%;
  font-size: 12px;
  color: #bdbcbc;
  margin-top: 8px;
`;

export const Acoes = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Trash = styled.a`
  background-color: #fa6767;
  color: #fff;
  border-radius: 5px;
  margin-left: 8px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border: 2px solid #bdbcbc;
    cursor: pointer;
  }
`;

export const Eye = styled.a`
  background-color: #5a5afe;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border: 2px solid #bdbcbc;
    cursor: pointer;
  }
`;
