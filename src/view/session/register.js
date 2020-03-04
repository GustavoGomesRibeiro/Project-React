import React, { Component} from 'react';
import { Form, Container } from "../../style/styledComponents/formLogin";
import logo from '../../style/img/logo.png'
import { withRouter, Link } from "react-router-dom";
import apiService from '../../service/apiService';

class Register extends Component{
    constructor(props){
        super(props) 
            this.state = {
                username:'',
                email: '',
                password: '',
                error: '',
            }

        // this.handleRegister = this.handleRegister.bind(this)
        // this.register = this.authenticate.bind(this)
    }

    handleRegister = event => {
        event.preventDefault();
        alert("Eu vou te registrar");
      };
      
    register = async (event) => {
        event.preventDefault()
        const {username, email, password} = this.state
            if (!email || !password || !username ) {
                this.setState({error: 'Preencha todos os dados para cadastrar'})
            } else {
                try{
                    await apiService.post('/users',{ username, email, password});
                    this.props.history.push('/')
                } catch (err){
                    this.setState({
                        error: 'Ocorreu algum problema para realizar o cadastro.'
                    })
                }
            }
    }

    render(){
        return(
            <Container>
                <Form onSubmit={this.register}>
                    <img src={logo} alt='Project with React logo'/>
                        {this.state.error && <p>{this.state.error}</p>}
                        <input type='text' placeholder='Digite seu nome' onChange={event => this.setState({username: event.target.value})}/>
                        <input type='email' placeholder='Digite seu email' onChange={event => this.setState({email: event.target.value})}/>
                        <input type='password' placeholder='Digite sua senha' onChange={event => this.setState({password: event.target.value})}/>
                        <input type='password' placeholder='Confirme sua senha' onChange={event => this.setState({password: event.target.value})}/>
                        <button type='submit'>Registrar</button>
                        <hr/>
                        <Link to='/'>Login</Link>
                </Form>
            </Container>
        )
    }

}

export default withRouter(Register);