import React, { Component} from 'react';
import { Form, Container } from "../../style/styledComponents/formLogin";
import logo from '../../style/img/logo.png'
import { withRouter, Link } from "react-router-dom";
import {signIn} from '../../service/authService';
import apiService from '../../service/apiService';

class Login extends Component{
    constructor(props){
        super(props) 
            this.state = {
                email: '',
                password: '',
                error: '',
                token: false
            }

        this.handleChange = this.handleChange.bind(this)    
        this.authenticate = this.authenticate.bind(this)
    }


    handleChange (event){
        let inputName = event.target.name
        let inputValue = event.target.value
        this.setState({[inputName]: inputValue})
      }
      

    authenticate = async (event) => {
        event.preventDefault()
        const {email, password} = this.state
            if (!email || !password ) {
                this.setState({error: 'Preencha Email ou senha para logar'})
            } else {
                try{
                    const response = await apiService.post('/session',{ email, password});
                    signIn(response.data.token)
                    this.props.history.push('/app')
                } catch (err){
                    this.setState({
                        error: 'Credencias invalidas, verifique seu email e senha.'
                    })
                }
            }
    }

    render(){
        return(
            <Container>
                <Form onSubmit={this.authenticate}>
                    <img src={logo} alt='Project with React logo'/>
                        {this.state.error && <p>{this.state.error}</p>}
                        <input type='email' placeholder='Digite seu email' onChange={event => this.setState({email: event.target.value})}/>
                        <input type='password' placeholder='Digite sua senha' onChange={event => this.setState({password: event.target.value})}/>
                        <button type='submit'>Acessar</button>
                        <hr/>
                        <Link to='/register'>Registrar</Link>
                </Form>
            </Container>
        )
    }

}

export default withRouter(Login);