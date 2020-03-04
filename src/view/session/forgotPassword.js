import React, { Component} from 'react';
import { withRouter } from "react-router-dom";
import apiService from '../../service/apiService';

class Login extends Component{
    constructor(props){
        super(props) 
            this.state = {
                usarname:'',
                email: '',
                password: '',
                error: '',
            }

        this.handle = this.handle.bind(this)    
        this.register = this.authenticate.bind(this)
    }

    register = async (event) => {
        event.preventDefault()
    }

    render(){
        return(
            <div className=''>
                <div className=''>

                </div>
            </div>
        )
    }

}

export default withRouter(Login);