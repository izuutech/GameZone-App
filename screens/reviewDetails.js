import {StyleSheet, View, Text, Button, Image} from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';


export default function ReviewDetails(props){
    let {route, navigation}=props;
    const pressHandler=()=>{
        
        navigation.goBack()
    }
    
    const rating=route.params.rating;
    return(
        <View style={globalStyles.container}>
            
            
            <Card>
                <Text>{route.params.title}</Text>
                <Text>{route.params.body}</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating:</Text>
                    <Image source={images.ratings[rating]}/>
                </View>

            
            </Card>
            {/* method according to tutorial
            
            you have to destructure navigation but in new one, we destructure route
            ////////////////////
            //////////////
            <Text>{navigation.getParam("title")}</Text>
            <Text>{navigation.getParam("body")}</Text>
            <Text>{navigation.getParam("rating")}</Text> */}
            <Button 
                title="Go back"
                onPress={pressHandler}
            />
        </View>
    )
}


const styles=StyleSheet.create({
    rating: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: "#eee",
    }
})