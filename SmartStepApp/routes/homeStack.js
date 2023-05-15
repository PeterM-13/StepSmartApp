import { CreateStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import StartPage from "../components/StartPage";
import LogInPage from "../components/LogInPage"

const screens = {
    StartPage: {screen: StartPage},
    LogInPage: {screen: LogInPage}
}

const HomeStack = CreateStackNavigator(screens);

export default createAppContainer(HomeStack);