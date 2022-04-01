// import { createDrawerNavigator } from "react-navigation-drawer";
// import {createAppContainer} from 'react-navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";




// const RootDrawerNavigator=createDrawerNavigator({
//     Home: {
//         screen: HomeStack
//     },
//     About: {
//         screen: AboutStack
//     },
// })


const Drawer = createDrawerNavigator();


//use screen options to turn off drawer nav header
const screenOptions={
   headerShown: false
}
export default function MyDrawer() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Drawer.Screen name="Home" component={HomeStack} />
          <Drawer.Screen name="About" component={AboutStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
// export default createAppContainer(RootDrawerNavigator);