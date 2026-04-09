import {
  ContainerHeader,
  ContentHeader,
  SearchBox,
  Input,
  Button,
} from "./styles";
import logo from "../../assets/logo.png";

const Header = ({onClick, onChange, value}) => {
  return (
    <ContainerHeader>
      <ContentHeader>
        <img src={logo} height={70} alt="Logo github" />
        <SearchBox>
          <Input name="search" placeholder="proprietario/repositorio" value={value} onChange={onChange} />
          <Button onClick={onClick}>Buscar</Button>
        </SearchBox>
      </ContentHeader>
    </ContainerHeader>
  );
};

export default Header;
