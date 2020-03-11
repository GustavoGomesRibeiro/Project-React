import React,{Component} from 'react';
import logo from '../style/img/logo.png';
import { Dropdown } from 'semantic-ui-react';



class DefaultHeader extends Component {
    constructor(pros) {
        super(pros)

        this.state = {
            userData: ''
        }
    }

    componentDidMount(){
        this.setState({
            userData: JSON.parse(localStorage.getItem('userData'))
        })
    }

    render(){
        return(
            <React.Fragment>
                <nav className='flex justify-between mb-4'>
                    <div className='flex bg-gray-200'>
                        <div className='w-3/4 h-16 bg-gray-600'>
                            <img src={logo} alt='Project with React logo'/>
                        </div>
                        <div className='w-1/4 bg-gray-600'>
                            <Dropdown text='user here'>
                            {this.state.userData.username}
                                <Dropdown.Menu>
                                    <Dropdown.Item text='Profile'/>
                                    <Dropdown.Divider />
                                    <Dropdown.Item text='Sair'/>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }

}

export default DefaultHeader;