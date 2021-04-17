import styled from "styled-components";
import TextBox from "devextreme-react/text-box";
import { Button } from "devextreme-react/button";
import React, { useEffect, useState } from "react";
import Form, { GroupItem, Item } from "devextreme-react/form";

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

function Reg() {
  const [eid, setEid] = useState("");
  const [ename, setEname] = useState("");
  const [mbnum, setMbnum] = useState("");
  const [addr, setAddr] = useState("");
  const [emid, setEmid] = useState("");

  function submit() {
    // console.log(eid);
    // console.log(ename);
    const prob = new Promise((rs, rj) => {
      const a = "true";
      if (a == "true") {
        rs(localStorage.setItem("eid", eid));
        rs(localStorage.setItem("ename", ename));
        rs(localStorage.setItem("mbnum", mbnum));
        rs(localStorage.setItem("addr", addr));
        rs(localStorage.setItem("emid", emid));
      } else {
        rj("could not set value");
      }
    });
    prob.then(() => {
      const eiid = localStorage.getItem("eid");
      const enname = localStorage.getItem("ename");
      const mbnum = localStorage.getItem("mbnum");
      const addr = localStorage.getItem("addr");
      const emid = localStorage.getItem("emid");
      console.log(eiid);
      console.log(enname);
    });
  }

  return (
    <>
      <StyledForm readOnly={false} showColonAfterLabel={true}>
        <GroupItem caption="Registration">
          <Item
            dataField="EmpId"
            //id="emid"
            component={() => (
              <TextBox value={eid} onValueChanged={(e) => setEid(e.value)} />
            )}
          ></Item>

          <Item
            dataField="EmpName"
            // id="ename"
            component={() => (
              <TextBox
                value={ename}
                onValueChanged={(e) => setEname(e.value)}
              />
            )}
          ></Item>
          <Item
            dataField="MobileNumber"
            // id="mbnum"
            component={() => (
              <TextBox
                value={mbnum}
                onValueChanged={(e) => setMbnum(e.value)}
              />
            )}
          ></Item>
          <Item
            dataField="Address"
            // id="addr"
            component={() => (
              <TextBox value={addr} onValueChanged={(e) => setAddr(e.value)} />
            )}
          ></Item>
          <Item
            dataField="EmailId"
            //id="emid"
            component={() => (
              <TextBox value={emid} onValueChanged={(e) => setEmid(e.value)} />
            )}
          ></Item>
        </GroupItem>
      </StyledForm>
      <Button text="Register" type="success" onClick={submit} />
    </>
  );
}

export default Reg;
