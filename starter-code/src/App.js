import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadProducts, loadCarts } from "./redux/EcomerceDucks";
import NavBar from "./components/NavBar";
import Routes from "./Routes";
import Styled from "styled-components";

const AppWrapper = Styled.div`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Open Sans", "Ubuntu", "Fira Sans", "Helvetica Neue", sans-serif;
    font-size: 1.6rem;
    color: #fff;
    margin: 0;
`;

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
    dispatch(loadCarts());
  }, [dispatch]);

  return (
    <AppWrapper>
      <NavBar />
      <Routes />
    </AppWrapper>
  );
}

export default App;
