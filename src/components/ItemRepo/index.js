import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import {
  Acoes,
  Descricao,
  Eye,
  ItemContainer,
  DescricaoContainer,
  Titulo,
  Subtitulo,
  Trash,
} from "./styles";

const ItemRepo = ({ repo, handleRemoveRepo }) => {
  return (
    <ItemContainer>
      <Titulo>{repo.name}</Titulo>
      <Subtitulo>{repo.full_name}</Subtitulo>
      <DescricaoContainer>
        <Descricao>{repo.description}</Descricao>
        <Acoes>
          <Eye href={repo.html_url} target="_blank">
            <FontAwesomeIcon icon={faEye} />
          </Eye>
          <Trash id={repo.id} onClick={() => handleRemoveRepo(repo.id)}>
            <FontAwesomeIcon icon={faTrashCan} />
          </Trash>
        </Acoes>
      </DescricaoContainer>
    </ItemContainer>
  );
};

export default ItemRepo;
