import { Container, Content } from "./styles";
import Header from "../components/Header";
import ItemRepo from "../components/ItemRepo";
import { useState } from "react";
import { api } from "../services/api";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    if (!currentRepo) {
      alert("Informe um repositório para pesquisar!!");
      return;
    }

    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data.id) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return;
      }

      alert("Repositório não encontrado!!");
    } catch (error) {
      alert("Erro ao buscar o repositório!\n" + error);
    }
  };

  const handleRemoveRepo = (id) => {
    const newRepos = repos.filter((repo) => repo.id !== id);
    setRepos(newRepos);
  };

  return (
    <Container>
      <Header
        onClick={handleSearchRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
        value={currentRepo}
      />
      <Content>
        {repos.map((repo) => (
          <ItemRepo
            key={repo.id}
            repo={repo}
            handleRemoveRepo={handleRemoveRepo}
          />
        ))}
      </Content>
    </Container>
  );
}

export default App;
