import React, { Component } from 'react';


const DefaultHeader = React.lazy(() => import('./DefaultHeader'))
const DefaultAside = React.lazy(() => import('./DefaultAside'))
const DefaultFooter = React.lazy(() => import('./DefaultFooter'))

class DefaultLayout extends Component {

    render() {
        return (
            <React.Fragment>
                <div className=''>
                    <DefaultHeader />
                </div>
                <div className=''>
                    <DefaultAside />
                </div>
                <div className=''>
                    <DefaultFooter />
                </div>
            </React.Fragment>
        )
    }
}

export default DefaultLayout;

