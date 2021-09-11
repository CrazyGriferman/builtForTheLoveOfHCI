import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import ChapterTwoSimilarityFiveStar from "../views/DesigningWithTheMindInMind/DesigningWithTheMindInMindChapterTwo/ChapterTwoSimilarityFiveStar";
import DesigningWithTheMindInMindPage from "../views/DesigningWithTheMindInMind/DesigningWithTheMindInMindPage/DesigningWithTheMindInMindPage";
import { HeroPage } from "../views/Hero/HeroPage/HeroPage";
import { MainPage } from "../views/Main/MainPage/MainPage";

const ROUTES = [
  {
    path: "/",
    key: "ROOT",
    exact: true,
    component: () => <HeroPage />,
  },
  {
    path: "/main",
    key: "MAIN",
    component: RenderRoutes,
    routes: [
      {
        path: "/main",
        key: "MAIN",
        exact: true,
        component: () => <MainPage />,
      },
      {
        path: "/main/designingwiththemindinmind",
        key: "DESIGNING",
        component: RenderRoutes,
        routes: [
          {
            path: "/main/designingwiththemindinmind/chaptertwosimilarityfivestar",
            key: "DESIGNINGWITHTHEMINDINMIND_CHAPTERTWO_SIMILARITY_FIVESTAR",
            exact: true,
            component: () => <ChapterTwoSimilarityFiveStar />,
          },
        ],
      },
    ],
  },
  /* {
    path: "/designingwiththemindinmind",
    key: "DESIGNING",
    component: RenderRoutes,
    routes: [
      {
        path: "/designingwiththemindinmind",
        key: "DESIGNINGWITHTHEMINDINMIND",
        exact: true,
        component: () => <DesigningWithTheMindInMindPage />,
      },
      {
        path: "/designingwiththemindinmind/chaptertwosimilarityfivestar",
        key: "DESIGNINGWITHTHEMINDINMIND_CHAPTERTWO_SIMILARITY_FIVESTAR",
        exact: true,
        component: () => <ChapterTwoSimilarityFiveStar />,
      },
    ],
  }, */
];

export default ROUTES;

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

export function RenderRoutes({ routes }) {
  return (
    <HashRouter>
      <Switch>
        {routes.map((route, i) => {
          return <RouteWithSubRoutes key={route.key} {...route} />;
        })}
        <Route component={() => <h1>Not Found! </h1>}></Route>
      </Switch>
    </HashRouter>
  );
}
