//import { createStackNavigator } from "react-navigation-stack";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from '../shared/header';


// const screens={
//     Home: {
//         screen: Home,
//         navigationOptions: {
//             title: "GameZone"
//         }
//     },
//     ReviewDetails: {
//         screen: ReviewDetails,
//         navigationOptions: {
//             title: "Review Details",
//         }
//     }
// };

const screenOptions={
    headerTintColor: "#444",
    headerStyle: {backgroundColor: "#eee", height: 80, },
    headerTitleContainerStyle: { width: "100%", left: -15}
}

const headerOptions={
   headerTitle: () => <Header title="GameZone" />
}

const Stack = createStackNavigator();



export default function HomeStack(navigation) {
  
  return (
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Home In Stack" component={Home} options={headerOptions} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
      </Stack.Navigator>

  );
}
