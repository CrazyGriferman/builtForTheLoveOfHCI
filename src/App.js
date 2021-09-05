import ROUTES ,{ RenderRoutes } from "./router/router";


function App() {
  return (
    <>
      <RenderRoutes routes={ROUTES} />
    </>
  );
}

export default App;
