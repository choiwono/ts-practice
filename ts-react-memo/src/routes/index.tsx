import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

const Root : React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/memo" component={Memo} />
            <Route path="/trash" component={Trash} />
            <Redirect path="*" to="/" />
        </Switch>
    </BrowserRouter>
)

export default Root;