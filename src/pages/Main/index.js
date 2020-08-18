import  React, { Component } from 'react';

import { FaAffiliatetheme, FaAngleDoubleRight } from 'react-icons/fa'

import api from '../../services/api'

import { Container, Form, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    username: '',
    password: '',
    securityCode: '',
  };

  handleInputChange = e => {
    this.setState({ username: e.target.value });
  };

  handleCodeChange = event => {
    this.setState({ securityCode: event.target.value});
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { username } = this.state;
    const { securityCode } = this.state;
    console.log( username, securityCode);

    const response = await api.get('login', {
      data: {
         user: username, code: securityCode
      }
    });

    console.log(response);
  };

  render() {
    const { username } = this.state;
    const { securityCode } = this.state;

    return (
      <Container>
        <h1>
          Login Maxitlhon
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
          type="text"
          placeholder="Nome do usuário"
          value={username}
          onChange={this.handleInputChange}/>

          <input
          type="password"
          placeholder="Código de segurança"
          value={securityCode}
          onChange={this.handleCodeChange}/>

          <SubmitButton>
            <FaAngleDoubleRight color="#FFF" size={14}/>
          </SubmitButton>
        </Form>
      </Container>
      );
    }
  }

//#abca99
