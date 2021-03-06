import React, { Component } from "react";
import api from "../../services/api";

import moment from "moment";

import logo from "../../assets/logo.png";

import { Container, Form } from "./styles";

import CompareList from "../../components/CompareList";

export default class Main extends Component {
  constructor(props) {
    super(props);
    var reps = [];

    if (window.localStorage.getItem("repositories") !== null) {
      reps = JSON.parse(window.localStorage.getItem("repositories"));
    }

    this.state = {
      loading: false,
      repositoryError: false,
      repositoryInput: "",
      repositories: reps
    };
  }

  handleAddRepository = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      // NOTA_ESTUDO: data: repository = Estou desentruturando o data e renomeando como repository
      const { data: repository } = await api.get(
        `/repos/${this.state.repositoryInput}`
      );

      // NOTA_ESTUDO: A informação não deve ser manipulada no render() do componente que vamos usar (CompareList). Sempre tratar antes.
      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState(
        {
          repositoryInput: "",
          repositories: [...this.state.repositories, repository],
          repositoryError: false
        },
        () => {
          window.localStorage.setItem(
            "repositories",
            JSON.stringify(this.state.repositories)
          );
        }
      );
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleDelete = repository => {
    if (window.confirm("Are you sure?")) {
      const reps = this.state.repositories.filter((value, index, arr) => {
        return value.id !== repository.id;
      });

      window.localStorage.setItem("repositories", JSON.stringify(reps));

      this.setState({
        repositories: reps
      });
    }
  };

  handleRefresh = async oldRepository => {
    try {
      const { data: repository } = await api.get(
        `/repos/${oldRepository.full_name}`
      );

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      const index = this.state.repositories.indexOf(oldRepository);

      const reps = this.state.repositories;
      reps[index] = repository;

      this.setState(
        {
          repositories: reps
        },
        () => {
          window.localStorage.setItem(
            "repositories",
            JSON.stringify(this.state.repositories)
          );
        }
      );
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form
          withError={this.state.repositoryError}
          onSubmit={this.handleAddRepository}
        >
          <input
            type="text"
            placeholder="usuário/respositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {this.state.loading ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : (
              "OK"
            )}
          </button>
        </Form>

        <CompareList
          repositories={this.state.repositories}
          onDelete={this.handleDelete}
          onRefresh={this.handleRefresh}
        />
      </Container>
    );
  }
}
