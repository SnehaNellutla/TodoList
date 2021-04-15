import "../App.css";
import styled from "styled-components";
import TextBox from "devextreme-react/text-box";
import { Button } from "devextreme-react/button";
import Wel from "../components/Welcome";
import Form, {
  ButtonItem,
  GroupItem,
  SimpleItem,
  Label,
  CompareRule,
  EmailRule,
  PatternRule,
  RangeRule,
  RequiredRule,
  StringLengthRule,
  AsyncRule,
} from "devextreme-react/form";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

const View = styled.div`
  border-radius: 5px;
  padding: 200px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  background-color: #f2f2f2;
  padding: 50px;
`;

function Log() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const history = useHistory();

  const submit = (e) => {
    console.log("welcome", email, pass);
    if (email === "sneha" && pass === "sneha") {
      history.push({ pathname: "/wel", state: { name: email } });
    } else {
      alert("Invalid Details");
    }
  };
  function handleChange(e) {
    console.log("change", e);
    setEmail(e.value);
  }
  function handlePassChange(e) {
    console.log("Passchange", e);
    setPass(e.value);
  }

  return (
    <View>
      <StyledForm
        readOnly={false}
        showColonAfterLabel={true}
        showValidationSummary={true}
      >
        <GroupItem caption="LOGIN PAGE">
          <SimpleItem
            dataField="UserName"
            id="email"
            component={() => (
              <TextBox value={email} onValueChanged={handleChange} />
            )}
          ></SimpleItem>

          <SimpleItem
            dataField="Password"
            id="password"
            component={() => (
              <TextBox value={pass} onValueChanged={handlePassChange} />
            )}
          ></SimpleItem>
        </GroupItem>
      </StyledForm>
      <Button text="Login" type="success" onClick={submit} />
    </View>
  );
}

export default Log;
