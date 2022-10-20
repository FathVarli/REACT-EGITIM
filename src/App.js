import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          return <Route path={route.path} element={route.element} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
