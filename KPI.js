import React  from "react";
import { StyleSheet, View, Text, TouchableHighlight, Image } from "react-native";

// import { toAmountFormat } from "../tools/utilities";

/**
 * 
 * @param {object} props 
 * @param {Function} props.onPress
 * @param {boolean} props.disabled
 * @param {boolean} props.selected
 * @param {string} props.colorOnSelected
 * @param {string} props.texte
 * @param {number} props.montant
 * @param {*} props.imgSrc
 * 
 */
function KPI(props) {
    return (

        <TouchableHighlight

            style={styles.container}
            onPress={props.onPress}
            disabled={props.disabled}
            activeOpacity={0.9}
            styleSelected={props.styleSelected}
            underlayColor="rgba(0, 0, 0, 0.1)"
        >
            <View style={styles.subContainer}>
                <View style={styles.icon8Row}>
                    <Image
                        source={props.imgSrc}
                        style={styles.icon8}
                    ></Image>
                    <Text style={styles.text}>{props.texte || "Texte"}</Text>
                </View>
                <View style={styles.text2Stack}>
                    <Text style={{...styles.text2 , color : props.colorOnSelected}}>{toAmountFormat(props.montant) || "-"}</Text>
                    <Text style={styles.fcfa3}>FCFA</Text>
                </View>

                {props.selected && <View style={{ ...styles.barSelected, borderColor: props.colorOnSelected }}>

                </View>}
            </View>

        </TouchableHighlight>
    );
}



export default KPI;


const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        //borderWidth :1,
        width: 98,
        height: 70,
        backgroundColor: "rgba(255,255,255,1)",
        padding : 5
    },

    icon8Row: {
        flexDirection: "row",
        //borderWidth : 1,
        // marginTop: 11,
        // marginLeft: 11,
        // marginRight: 15
    },
    subContainer: {
        flex : 1,
        //borderWidth : 1
       
    },
    icon8: {

        height: 18,
        width: 18
    },
    text: {
        fontFamily: "Roboto-Bold",
        color: "rgba(66,66,66,1)",
        height: 18,
        fontSize: 12,
        textAlign: "left",
        //borderWidth: 1,
        marginLeft : 5,
        flex : 1
    },
    text2Stack: {
        width: 86,
        height: 36,
        alignItems : "center"
    },
    text2: {

        fontFamily: "Poppins-ExtraBold",
        color: "rgba(255,183,0,1)",
        height: 22,
        width: 86,
        fontSize: 16,
        textAlign: "center"
    },
    fcfa3: {
        fontFamily: "Roboto-Regular",
        color: "rgba(66,66,66,1)",
        height: 18,
        width: 50,
        fontSize: 11,
        textAlign: "center",
    },
    barSelected: {
        width: 98,
        alignSelf: "center",
        marginTop : 5,
        borderWidth: 2,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
    }
});
export function toAmountFormat ( amount ) {
    const pieces = parseFloat(amount).toFixed(2).split('')
    
    let ii = pieces.length - 3
    while ((ii-=3) > 0) {
      pieces.splice(ii, 0, '.')
    }
    pieces.pop()
    pieces.pop()
    pieces.pop()
    return pieces.join('')
    //return Intl.NumberFormat("fr-FR").format(amount)
    //return Intl.NumberFormat('fr-FR').format(amount)
  }