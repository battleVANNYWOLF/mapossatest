import React from 'react';
import { ScrollView,StyleSheet,Text,Image, View } from 'react-native';
import SimpleInfo  from'./SimpleInfo'

// import HeaderDetails from './HeaderDetails'
// import KPI from'./KPI'


const Mapossa = () => {
  return (
    <ScrollView>
      <View style={styles.header}>
      <View style={styles.dog}>
      
        <Image style={styles.container} source={require('./assets/images/retour.png')}/>
              <Text style={styles.profil}>Mon profil</Text>
        <Image style={styles.conter} source={require('./assets/images/modifier.png')}/> 
        
        </View>
              <View>
                <Image style={styles.backuser} source={require('./assets/images/back1.jpg')}/>
              </View>
              <View style={styles.fullname}>
                                <Image style={styles.userimg} source={require('./assets/images/user.png')}/>
                                <Text>Full Name</Text>
              </View>
             
              <View style={styles.premium}>   
                  <Image style={styles.soustitre} source={require('./assets/images/winp.jpg')}/><Text>UTILISATEUR PREMIUM</Text>
              </View>
        <View>
      <View style={styles.allkpi}>     
      <View style={styles.secondkpi}>
        <Image style={styles.brow} source={require('./assets/images/calender.png')}/>
        <Text>Commandes{'\N'} emises {'\N'}0</Text>
      </View>
      <View style={styles.secondkpi}>
        <Image style={styles.drow} source={require('./assets/images/centage.png')}/>
        <Text>Nobres de clients ajoutes 0</Text>
      </View>
      <View style={styles.secondkpi}>
        <Image style={styles.grow} source={require('./assets/images/price.png')}/>
        <Text>Chiffres d'affaires realise 0</Text>
      </View>
      </View> 
      </View> 
    <View>
      <SimpleInfo label='Informations personnelles'/>
      <SimpleInfo imagePosition='left' label='Numero de telephone' value="Phone"image={require('./assets/images/phone.jpg')}/>
      <SimpleInfo imagePosition='left' label='Adersse email' value="Email" image={require('./assets/images/courier.jpg')}/>
      <SimpleInfo imagePosition='left' label='Date de naissance'value="Anniversaire" image={require('./assets/images/day.png')}/>
      <SimpleInfo imagePosition='left' label='Ville' value="Ville" image={require('./assets/images/localisation.png')}/>
      <SimpleInfo imagePosition='left' label='Quartier' value="Quartier" image={require('./assets/images/localisation.png')}/>
      <SimpleInfo imagePosition='left' label='Profession'value="Profession" image={require('./assets/images/profession.png')}/>
      <SimpleInfo imagePosition='left' label="Centres d'interets" value="...."image={require('./assets/images/info.png')}/>
          </View>
          </View>
    </ScrollView>
    
  );
  
}


export default Mapossa;
const styles = StyleSheet.create({
  header:{
    fontFamily: "Poppins-Regular",
        color: "rgba(33,33,33,1)",
        margin:"2%",
        
  },
  dog:{
      flexDirection:'row',
      justifyContent:'space-between',
  },
  container:{
    height:35,
    width:35,
    alignItems:'flex-start',
  },
  conter:{
    alignContent:'flex-end',
    width:35,
    height:35,

  },
  profil:{
    fontFamily: "Poppins-Regular",
        color: "rgba(33,33,33,1)",
        marginLeft:-130,
        padding:10,
  },
  backuser:{
    borderRadius:20,
    height:120,
  },
  userimg:{
    height:90,
    width:90,
    marginTop:-70,
    borderWidth:2,
    borderRadius:10,
    alignSelf:'center',
  },
  premium:{
    alignSelf:'center',
    flexDirection:'row',
   
  },
  soustitre:{
    width:30,
    height:30,
  },
  brow:{
    height:30,
    width:30,
  },
  grow:{
    height:30,
    width:30,
  },
  drow:{
    height:30,
    width:30,
  },
  secondkpi:{
    
  },
fullname:{
  alignSelf:'center',
},
allkpi:{
  paddingTop:15,
  flexDirection:'row',
}

})