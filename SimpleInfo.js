import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableHighlight } from "react-native";
// adb
// import { imgUnknown, imgCalender2,image } from "../assets/Images"
// import { toAmountFormat } from "../tools/utilities";
/**
 * 
 * @param {object} props 
 * @param {string} props.label
 * @param {string | number } props.value
 * @param {string} props.imgUri
 * @param {boolean} props.hasNotImage
 * @param {boolean} props.isDate
 * @param {boolean} props.isTextArea
 * @param {boolean} props.valueIsAmount
 * @param {any} props.image
 * @param {string} props.imagePosition
 * @returns 
 */
/**
 * @enum {string}
 */
const ImagePosition = {
    RIGHT:'right',
    LEFT:'left',
}
export default function SimpleInfo(props) {

    return (
        <TouchableHighlight style={  
            (props.isTextArea) ?  {...styles.container, height : "auto" }  
            :  styles.container}>
            <>
                <View style={styles.row}>
                {!props.hasNotImage && (props.imagePosition === ImagePosition.LEFT)  && <Image
                            source={(props.imgUri) ? { uri: props.imgUri } : (props.isDate) ? props.image : props.image}
                            resizeMode="contain"
                            style={(props.isDate) ? styles.iconeDate : styles.icone}
                        />}
                    <Text style={styles.label}>
                        {props.label || "Label"}
                    </Text>
                    <View style={styles.valueRow}>

                        {!props.hasNotImage &&(props.imagePosition === ImagePosition.RIGHT) && <Image
                            source={(props.imgUri) ? { uri: props.imgUri } : (props.isDate) ? props.image : props.image}
                            resizeMode="contain"
                            style={(props.isDate) ? styles.iconeDate : styles.icone}
                        />}
                        {!props.isTextArea && <Text style={styles.value}>
                            {(props.valueIsAmount) ? toAmountFormat(props.value) : props.value || ""}
                        </Text>}

                    </View>

                </View>
                {props.isTextArea && <Text style={styles.textArea}>
                    {props.value || "Aucune note associé à la transaction"}
                </Text>}
            </>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderRadius: 12,
        backgroundColor: "rgba(255,255,255,1)",
        marginVertical: 5,
        padding: 10
    },

    rect25: {

    },
    label: {
        fontFamily: "Poppins-Regular",
        color: "rgba(33,33,33,1)",
     
        fontSize: 13,
        flex: 3

    },
    value: {
        fontFamily: "Poppins-SemiBold",
        color: "rgba(33,33,33,1)",
        height: 20,
        marginRight: 5,
        fontSize: 14,
        textAlign: "right",
        marginLeft: 15,
        //borderWidth: 1

        // marginLeft: 1,
        // marginTop: 9
    },
    textArea: {
        fontFamily: "Poppins-SemiBold",
        color: "rgba(33,33,33,1)",
        height: 20,
        marginRight: 5,
        marginTop : 5,
        fontSize: 14,
        textAlign: "left",
        //borderWidth: 1,
        height : "auto"
    },
    icone: {
        width: 35,
        height: 35,

    },
    iconeDate: {
        width: 25,
        height: 25,
    },
    row: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",

    },
    valueRow: {
        flexDirection: "row-reverse",
        flex: 3,
        alignItems: "center",

        //borderWidth: 1
    }
});

