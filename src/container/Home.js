import React, { Component, Suspense } from 'react';
// import { Redirect, Route, Switch } from 'react-router-dom'
import '../style/tailwind/output.css';

//preciso importar as routas da navbar e rotas em geral da pagina aqui meu chapa
// import Routes from '../Routes/routes';

const DefaultHeader = React.lazy(() => import('./DefaultHeader'))
const DefaultAside = React.lazy(() => import('./DefaultAside'))
const DefaultFooter = React.lazy(() => import('./DefaultFooter'))

class DefaultLayout extends Component {


loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    render() {
        return (
            <React.Fragment>
                <div className=''>
                    <Suspense fallback={this.loading()}>
                        <DefaultHeader />
                    </Suspense>
                </div>
                <div className=''>
                    <Suspense fallback={this.loading()}>
                        <DefaultAside />
                    </Suspense>
                </div>
                <div className=''>
                    <Suspense fallback={this.loading()}>
                        <DefaultFooter />
                    </Suspense>
                </div>
            </React.Fragment>
        )
    }
}

export default DefaultLayout;

