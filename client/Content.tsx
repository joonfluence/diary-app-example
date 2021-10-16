import React, { FC } from "react";
import { Button, Text, View } from "react-native";
import styled from "styled-components";

type Props = {};

const Component: FC<Props> = () => {
  return (
    <Wrapper>
      <TextBox>
        <Text>aaa</Text>
      </TextBox>
      <ButtonBox>
        <Button title="aa" onPress={() => console.log("clicked")} />
      </ButtonBox>
    </Wrapper>
  );
};

export default Component;

const Wrapper = styled(View)`
  flex: 1;
  width: 100%;
  background-color: grey;
`;

const TextBox = styled(View)`
  flex: 5;
  margin: 30px;
  background-color: white;
`;

const ButtonBox = styled(View)`
  flex: 1;
  background-color: yellow;
`;
