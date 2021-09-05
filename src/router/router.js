import React, { Component } from 'react';
import {Route, Switch, HashRouter} from "react-router-dom";
import ChapterTwoSimilarityFiveStar from '../components/DesigningWithTheMindInMind/ChapterTwoSimilarityFiveStar';
import DesigningWithTheMindInMindHero from '../components/DesigningWithTheMindInMind/DesigningWithTheMindInMindHero';
import DesigningWithTheMindInMind from '../pages/DesigningWithTheMindInMindPage';
import Hero from '../pages/Hero';


const ROUTES = [
    {
        path: "/",
        key: "ROOT",
        exact: true,
        component: () => <Hero />,
    },
    {
        path: "/designingwiththemindinmind",
        key: "DESIGNING",
        component: RenderRoutes,
        routes: [
            {
                path: "/designingwiththemindinmind",
                key: "DESIGNINGWITHTHEMINDINMIND",
                exact: true,
                component: () => (
                    <DesigningWithTheMindInMind>
                        <DesigningWithTheMindInMindHero />
                    </DesigningWithTheMindInMind>
                )
            },
            {
                path: "/designingwiththemindinmind/chaptertwosimilarityfivestar",
                key: "DESIGNINGWITHTHEMINDINMIND_CHAPTERTWO_SIMILARITY_FIVESTAR",
                exact: true,
                /* component: () => (
                    <DesigningWithTheMindInMind>
                        <ChapterTwoSimilarityFiveStar />
                    </DesigningWithTheMindInMind>
                ) */
                component: () => (
                        <ChapterTwoSimilarityFiveStar />
                )
            },
        ]

    },
    
];

export default ROUTES;

function RouteWithSubRoutes(route) {
    return (
        <Route path={route.path} exact={route.exact} 
        render={(props) => <route.component {...props} routes = {route.routes} />}
        />
    );
}

export function RenderRoutes({routes}) {
    return (
        <HashRouter>
            <Switch>
                {routes.map((route, i) => {
                    return <RouteWithSubRoutes key={route.key} {...route} />;
                })}
                <Route component={() => <h1>Not Found! </h1>}></Route>
            </Switch>
        </HashRouter>
    )
}