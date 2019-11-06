import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import EntrarPage from './pages/Entrar'
import CadastroPage from './pages/Cadastro'
import MainPage from './pages/Main'

export default function Routes () {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL} >
            <Switch>
                <Route path="/login" component={EntrarPage}/>
                <Route path="/cad" component={CadastroPage}/>
                <Route path="/" exact component={MainPage}/>
            </Switch>
        </BrowserRouter>
    );
}