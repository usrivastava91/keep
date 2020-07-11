import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { appRoutes } from "../routes/appRoutes";
import { IRoute } from "../routes/Route";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import "./AppLayout.scss";
interface Props {}
export const AppLayout: React.FC<Props> = (props: Props) => {
  return (
    <div className="app-layout">
      <div className="app-body">
        <Header />
        <div className="container">
          <SideBar />
          <Switch>
            <Redirect exact from="/" to="/active" />
            {appRoutes.map((route: IRoute, index: Number) => (
              <Route
                key={route.path}
                exact={true}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </div>
      </div>
    </div>
  );
};
