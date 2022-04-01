import { useState } from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';
import {MaterialIcons} from '@expo/vector-icons';
import ReviewForm from './reviewForm';

export default function Home({navigation}){
    const [reviews, setReviews]=useState([
        {title: "Zelda, Breath of Fresh Air", rating: 5, body: "lorem ipsum", key: "1"},
        {title: "Gotta Catch Them All (again)", rating: 4, body: "lorem ipsum", key: "2"},
        {title: "Not So 'Final' Fantasy", rating: 3, body: "lorem ipsum", key: "3"},
    ]);

    const addReview=(review)=>{
        review.key=Math.random().toString();
        setReviews((currentReviews)=>{
            return [review, ...currentReviews]
        });
        setModalOpen(false);
    }
    const [modalOpen, setModalOpen]=useState(false);
    
    return(
        <View style={globalStyles.container}>
            
            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                    <MaterialIcons 
                        name='close'
                        size={24}
                        style={{...styles.modalToggle, ...styles.modalClose}}
                        onPress={()=>setModalOpen(false)}
                    />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            
            <MaterialIcons 
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={()=>setModalOpen(true)}
            />
            <FlatList 
                data={reviews}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate("ReviewDetails", item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}


const styles=StyleSheet.create({
    modalToggle: {
        marginBottom:10,
        borderWidth: 1,
        borderColor: "#f2f2f2",
        padding: 10,
        borderRadius: 10,
        alignSelf: "center"
    },
    modalClose: {
        marginBottom: 0,
        marginTop: 20
    },
    modalContent: {
        flex: 1
    }
})