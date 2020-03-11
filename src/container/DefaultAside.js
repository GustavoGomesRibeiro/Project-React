import React,{Component} from 'react';
import { Menu } from 'semantic-ui-react';

class DefaultAside extends Component {
    constructor(props){
        super(props) 
        
        this.state = {
            activeItem: 'Home'
        }
        this.handlerOnCLick = this.handlerOnCLick.bind(this)
    }
    
    handlerOnCLick = (e, name) => {
        this.setState({
            activeItem: name
        })
    }

    render(){
        const activeItem = this.state
        return(
            <React.Fragment>
                <Menu pointing secondary vertical>
                    <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handlerOnCLick}/>
                    <Menu.Item name='Profile' active={activeItem === 'Profile'} onClick={this.handlerOnCLick}/>
                    <Menu.Item name='Settings' active={activeItem === 'Settings'} onClick={this.handlerOnCLick}/>

                </Menu>
            </React.Fragment>
        )
    }
}

export default DefaultAside; 