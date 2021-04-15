import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Routes from "./routes";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
const Form = styled.form`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 200px;

  min-height: 100vh;

  align-items: center;
  justify-content: center;
  color: black;
`;

const Input = styled.input`
  padding: 10px 15px;
  margin: 10px 0;
`;
function App() {
  return <Routes />;
}

export default App;
