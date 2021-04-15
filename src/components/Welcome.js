import RangeSelector, {
  Margin,
  Background,
  Image,
  Indent,
  SliderMarker,
  Scale,
  TickInterval,
  MinorTickInterval,
  Label,
} from "devextreme-react/range-selector";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "devextreme-react/button";
import { useLocation } from "react-router-dom";

const SButton = styled(Button)`
  margin-left: 20px;
  padding: 0;
  border: none;
  background: none;
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
  margin-left: 100px;
`;
const ImgLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const BodyContent = styled.div`
  width: 70%;
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
  font-size: 200%;
  align-items: center;
`;
const Content = styled.div`
  margin-left: 230px;
`;

const Img2 = styled.img`
  width: 200px;
  height: 200px;
  margin-left: 50px;
`;
const View = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const HeaderView = styled.div`
  width: 100%;
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
`;
const HeaderComponents = styled.div`
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;
const HeaderRightView = styled.div`
  width: 100%;
  justify-content: space-evenly;
`;
const Pre = styled.pre`
  font-size: 500%;
  font-weight: bold;
  align-items: center;
`;

function Wel(...props) {
  const location = useLocation();
  console.log(location.state);

  return (
    <div>
      <View>
        <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtOgDhvHAEYz3kJ9_cK67vUpdu5-cB7RmPKwPae4b6MiRiQ42yDcLcLLpKdZV00wCH9s&usqp=CAU"></Img>
        <HeaderView>
          <HeaderComponents>
            <SButton text="Free Landing Pages" type="normal" />
            <SButton text="Feature" type="normal" />
            <SButton text="Services" type="normal" />
            <SButton text="Pricing" type="normal" />
            <SButton text="Contact" type="normal" />
          </HeaderComponents>
          <HeaderRightView>
            <SButton text={`Welcome ${location.state.name}`} type="normal" />
            <SButton text="Download Trial" type="default" />
          </HeaderRightView>
        </HeaderView>
      </View>
      <Pre>
        Landing page built <br></br> for software.
      </Pre>
      <ImgLeft>
        <Img2 src="https://as2.ftcdn.net/jpg/01/18/12/73/500_F_118127368_8LI3Eul32bhg8CX092P4QRQEnmozjbsh.jpg"></Img2>
        <BodyContent>
          <Content>
            Create Custom landing pages with shades that <br></br>
            convert more visitors than any wensite -no <br></br>
            coding required.
          </Content>
          <SButton text="Download Free Trial" type="default" />
        </BodyContent>
      </ImgLeft>
    </div>
  );
}

export default Wel;
