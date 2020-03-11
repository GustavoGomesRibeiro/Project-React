import React, { Component } from 'react';


class DefaultFooter extends Component {

    render(){
        return(
            <React.Fragment>
                <div className='flex flex-wrap'>
                    <div className='w-full'>
                        <span>Project with React Made with ❤ &copy;{ new Date().getFullYear()}</span>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default DefaultFooter;