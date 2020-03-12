import React, { Component } from 'react';
import '../style/tailwind/output.css';


class DefaultFooter extends Component {

    render(){
        return(
            <React.Fragment>
                <div className='flex md:flex-row'>
                    <div className='w-full bg-gray-400 shadow-lg fixed bottom-0'>
                        <span className='flex justify-center'>Project with React Made with ❤ &copy;{ new Date().getFullYear()}</span>
                    </div>
                </div>
            </React.Fragment>        
        )
    }
}

export default DefaultFooter;