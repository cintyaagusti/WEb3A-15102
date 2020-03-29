import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Daftar from '../../Daftar/daftar-page';
import Beranda from '../../Beranda/beranda-page';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Beranda}/>
                <Route path="/daftar" component={Daftar}/>
            </Switch>
        );
    }
}

export default Router;