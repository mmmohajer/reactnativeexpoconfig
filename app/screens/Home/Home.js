import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

import AppView from "BaseComponents/AppView";
import AppText from "BaseComponents/AppText";
import Button from "BaseComponents/Button";
import LoginComponent from "BaseComponents/LoginComponent";
import ScreenContainer from "Components/ScreenContainer";

import { TEST } from "Env";
import { styles, fontStyleFunc } from "Styles";

import { localStyles } from "./localStyles";

const Home = () => {
  const navigation = useNavigation();

  const language = useSelector((state) => state.language);

  return (
    <>
      <ScreenContainer isScrollable={false}>
        <AppText>Home {language}</AppText>
        <Button
          btnText="See Products"
          onPress={() => navigation.navigate("ProductStack")}
        />
        <LoginComponent />
      </ScreenContainer>
    </>
  );
};

export default Home;