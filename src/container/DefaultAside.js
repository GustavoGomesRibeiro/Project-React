import React, { Component } from 'react';
import '../style/tailwind/output.css';
import * as Icon from 'react-feather';

class DefaultAside extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeItem: 'Home'
        }
        this.handlerOnCLick = this.handlerOnCLick.bind(this)
    }

    handlerOnCLick = (e, { name }) => {
        this.setState({
            activeItem: name
        })
    }

    render() {
        const activeItem = this.state
        return (
            <React.Fragment>
                <div className='flex flex-col md:flex-row'>
                    <div className='bg-gray-900 shadow-lg md:h-screen z-30'>
                        <div className=''>
                            <ul className='mt-12'>
                                <li className="py-4 mr-3 flex-1">
                                    <a href="#" className="block py-1 md:py-3 pl-1 align-middle border-l-4 border-gray-800 hover:border-yellow-600 no-underline text-white">
                                        <span className="px-4"><Icon.Home size='20'/>Página Inicial</span>
                                    </a>
                                </li>
                                <li className="py-4 mr-3 flex-1">
                                    <a href="#" className="block py-1 md:py-3 pl-1 align-middle border-l-4 border-gray-800 hover:border-yellow-600 no-underline text-white">
                                        <span className="px-4"><Icon.User size='20'/>Profile</span>
                                    </a>
                                </li>
                                <li className="py-4 mr-3 flex-1">
                                    <a href="#" className="block py-1 md:py-3 pl-1 align-middle border-l-4 border-gray-800 hover:border-yellow-600 no-underline text-white">
                                        <span className="px-4"><Icon.Settings size='20'/>Settings</span>
                                    </a>
                                </li>
                                <li className="py-4 mr-3 flex-1">
                                    <a href="#" className="block py-1 md:py-3 pl-1 align-middle border-l-4 border-gray-800 hover:border-yellow-600 no-underline text-white">
                                        <span className="px-4"><Icon.LogOut size='20'/>Sair</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default DefaultAside; 