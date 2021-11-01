import ROUTES, { RenderRoutes } from "./router/router";
import { DesigningWithTheMindInMindChapterTwelve } from "./views/DesigningWithTheMindInMind/DesigningWithTheMindInMindChapterTwelve/DesigningWithTheMindInMindChapterTwelve";
import "./App.scss";
import { Test } from "./components/DesigningWithTheMindInMindComponents/FMSC/Test";

function App() {
  return (
    <>
      <RenderRoutes routes={ROUTES} />
    </>
  );
}

/*
function App() {
  return <DesigningWithTheMindInMindChapterTwelve />;
}
*/

/*
function App() {
  return <Test />;
}
*/

export default App;
