import React from "react";
import{Text,Scroollview,View,Image}from "react-native";

export default function Heider(){
    return(
        <Scroollview>
            <View  style={styles.head}>
                <Image source={require('./assets/images/retour.png')}/>
                <Text style={styles.profil}>Mon profil</Text>
                <Image source={require('./assets/images/modifier.png')}/>
            </View>
        </Scroollview>
    );
}