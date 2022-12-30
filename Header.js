import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableHighlight, Dimensions } from "react-native";
// import Svg, { Ellipse } from "react-native-svg";
// import { getUrlProfilePgoto } from "../middleware/entities/users";
// import { imgMedalDisable, imgCalender2, imgBellDisable, imgDefalutImg } from "../ressources/Images"

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
class Header extends Component {

  constructor(props) {
    /**
     * 
     * @param {object} props 
     * @param {Function} props.onMoveToSucces
     * @param {Function} props.onMoveToHabitudes
     * @param {Function} props.onMoveToPotCommun
     * @param {Function} props.onMoveToNotification
     * @param {boolean} props.isSuccessAvailable
     * @param {boolean} props.isHabitudeAvailable
     * @param {boolean} props.isNotificationAvailable
     * @param {boolean} props.isPotCommunAvailable
     */
    super(props)
    this.state = {
      pp: ""
    }
  }

  async componentDidMount() {
    this.setState({ pp: getUrlProfilePgoto() })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rect2}>
          <View style={styles.titreRow}>
            <Text style={(height > 700) ? styles.titre : styles.titreReduit}>{this.props.titre || "Titre"}</Text>
            <View style={styles.headerBoutons}>
              <TouchableHighlight style={styles.boutonSucces}
                onPress={this.props.onMoveToSucces}
                disable={!this.props.isSuccessAvailable}
                activeOpacity={0.9}
                underlayColor={"rgba(0, 0, 0, 0.1)"}>
                <View style={styles.ellipseStack}>
                  <Svg viewBox="0 0 30 30" style={styles.ellipse}>
                    
                  </Svg>
                  <Image
                    source={imgMedalDisable}
                    resizeMode="contain"
                    style={styles.image}
                  ></Image>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.boutonHabitude}
                onPress={this.props.onMoveToHabitudes}
                disable={!this.props.isSuccessAvailable}
                activeOpacity={0.9}
                underlayColor={"rgba(0, 0, 0, 0.1)"}>
                <View style={styles.ellipse2Stack}>
                  
                  <Image
                    source={imgCalender2}
                    resizeMode="contain"
                    style={styles.image2}
                  ></Image>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.boutonNotification}
                onPress={this.props.onMoveToNotification}
                disable={this.props.isSuccessAvailable}
                activeOpacity={0.9}
                underlayColor={"rgba(0, 0, 0, 0.1)"}>
                <View style={styles.ellipse3Stack}>
                  <Image
                    source={imgBellDisable}
                    resizeMode="contain"
                    style={styles.image3}
                  ></Image>
                </View>
              </TouchableHighlight>
              <TouchableHighlight>
                <Image
                  source={(this.state.pp) ? { uri: this.state.pp } : imgDefalutImg}
                  resizeMode="stretch"
                  style={styles.profilePicture}
                ></Image>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {},
  rect2: {
    width: 360,
    height: 70,
    flexDirection: "row"
  },
  titre: {
    fontFamily: "Poppins-Bold",
    color: "#121212",
    height: 37,
    width: 178,
    fontSize: 24
  },
  titreReduit: {
    fontFamily: "Poppins-Bold",
    color: "#121212",
    height: 37,
    width: "42%",
    fontSize: 16
  },
  headerBoutons: {
    width: 144,
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 11,
    marginTop: 3
  },
  boutonSucces: {
    width: 36,
    height: 32,
  },
  ellipse: {
    width: 30,
    height: 30,
    position: "absolute",
    left: 0,
    top: 0
  },
  image: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 5,
    top: 5
  },
  ellipseStack: {
    width: 30,
    height: 30,
    marginTop: 1,
    marginLeft: 3
  },
  boutonHabitude: {
    
    width: 36,
    height: 36,
    borderRadius : 36/2
    //backgroundColor : "#FFFFFF"
  },
  ellipse2: {
    width: 30,
    height: 30,
    position: "absolute",
    left: 0,
    top: 0
  },
  image2: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 5,
    top: 5
  },
  ellipse2Stack: {
    width: 30,
    height: 30,
    marginTop: 1,
    marginLeft: 3
  },
  boutonNotification: {
    width: 36,
    height: 32
  },
  ellipse3: {
    width: 30,
    height: 30,
    position: "absolute",
    left: 0,
    top: 0
  },
  image3: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 5,
    top: 5
  },
  ellipse3Stack: {
    width: 30,
    height: 30,
    marginTop: 1,
    marginLeft: 3
  },
  profilePicture: {
    width: 32,
    height: 32,
    borderRadius: 100
  },
  titreRow: {
    height: 37,
    flexDirection: "row",
    flex: 1,
    // marginRight: 14,
    // marginLeft: 13,
    marginTop: 33
  }
});

export default Header;
