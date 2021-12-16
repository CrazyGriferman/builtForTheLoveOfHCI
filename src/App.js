import ROUTES, { RenderRoutes } from "./router/router";
import { DesigningWithTheMindInMindChapterTwelve } from "./views/DesigningWithTheMindInMind/DesigningWithTheMindInMindChapterTwelve/DesigningWithTheMindInMindChapterTwelve";
import "./App.scss";
import ChapterTwoSimilarityFiveStar from "./views/DesigningWithTheMindInMind/DesigningWithTheMindInMindChapterTwo/ChapterTwoSimilarityFiveStar";
import shuihu from "../src/assets/shuihu.json";

/* function App() {
  return (
    <>
      <RenderRoutes routes={ROUTES} />
    </>
  );
} */

/*
function App() {
  return <DesigningWithTheMindInMindChapterTwelve />;
}
*/
function App() {
  return <ChapterTwoSimilarityFiveStar defaultState={shuihu} />;
}

export default App;
