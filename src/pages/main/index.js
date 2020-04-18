import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Form, SubmitButton, List } from './styles';
import Container from '../../components/Container';
export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
  };

  //pega o valor digitado
  hadleNewRepo = (e) => {
    this.setState({ newRepo: e.target.value });
  };

  //envia o valor pesquisado
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;

    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      name: response.data.full_name,
    };

    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
      loading: false,
    });

    console.log(response.data);
  };

  //carregar os repositórios
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) this.setState({ repositories: JSON.parse(repositories) });
  }

  //atualizar os repositórios
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories)
      localStorage.setItem('repositories', JSON.stringify(repositories));
  }

  render() {
    const { newRepo, loading, repositories } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adiconar repositório"
            value={newRepo}
            onChange={this.hadleNewRepo}
          />

          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>

        <List>
          {repositories.map((repositoty) => (
            <li key={repositoty.name}>
              <span>{repositoty.name}</span>
              <Link to={`/repository/${encodeURIComponent(repositoty.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
