import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import Constants from "expo-constants";
import Content from "./Content";

export default function App() {
  return (
    <MainLayout>
      <Wrapper>
        <Title>MainLayout of Expo-diary</Title>
        <Content />
      </Wrapper>
      <StatusBar style="auto" />
    </MainLayout>
  );
}

const MainLayout = styled(View)`
  flex: 1;
  padding-top: ${Constants.statusBarHeight};
`;

const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
`;

const Title = styled(Text)`
  font-size: 24px;
  font-weight: 500;
`;
