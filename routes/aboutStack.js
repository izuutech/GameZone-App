// import { createStackNavigator } from "react-navigation-stack";
import { createStackNavigator } from '@react-navigation/stack';
import About from "../screens/about";
import Header from '../shared/header';



const Stack = createStackNavigator();


const screenOptions={
  headerTintColor: "#444",
  headerStyle: {backgroundColor: "#eee", height: 80},
  headerTitleContainerStyle: { width: "100%"}
}

const headerOptions={
 headerTitle: () => <Header title="About GameZone"/> 
}


export default function AboutStack() {
    return (
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="About GameZone" component={About} options={headerOptions}/>
      </Stack.Navigator>
    );
  }

// const screens={
//     About: {
//         screen: About,
//         navigationOptions: {
//             title: "About GameZone"
//         }
//     }
// };

// const AboutStack=createStackNavigator(screens, {
//     defaultNavigationOptions: {
//         headerTintColor: "#444",
//         headerStyle: {backgroundColor: "#eee"},
//     }
// });

// export default AboutStack;