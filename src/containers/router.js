import * as React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import NewsList from './newslist/news-list'

/**
 * Creating dynamic routing from menus
 */
export const Routes = () => {
  return (
    <Switch>
        <Route exact path="/" component={NewsList} />
    </Switch>
  )
}

export default withRouter(Routes)