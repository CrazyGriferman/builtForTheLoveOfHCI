import ROUTES, { RenderRoutes } from "./router/router";
import { DesigningWithTheMindInMindChapterTwelve } from "./views/DesigningWithTheMindInMind/DesigningWithTheMindInMindChapterTwelve/DesigningWithTheMindInMindChapterTwelve";
import "./App.scss";

/*
function App() {
  return (
    <>
      <RenderRoutes routes={ROUTES} />
    </>
  );
}
*/

function App() {
  return <DesigningWithTheMindInMindChapterTwelve />;
}

export default App;
