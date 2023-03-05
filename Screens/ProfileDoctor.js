import React from 'react';
import { Text, View ,StyleSheet,Image,TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function ProfileDoctor() {

    return (
        <View style = {styles.ViewProfile}>

            <View style = {styles.Profile}>
                 <Image style={styles.tinyImage} 
                 source={require('../assets/images/doctor.png')}/>
            </View>
            <View style = {styles.cardProfile}>
                <View style = {styles.specialite}>
                 <TouchableOpacity style = {styles.iconWrite}>
                     <MaterialCommunityIcons name="pencil-circle" size={40} color="black" />
                 </TouchableOpacity>
                    <Text style={{fontWeight: 'bold'}}>Seth Casler</Text>
                    <Text>Cardio Expert</Text>
                </View>
                <View style = {styles.adresse}>
                    <Text style={{fontWeight: 'bold'}}>Adress:</Text>
                    <Text>20274,Douala,Cameroun</Text>
                </View>
                <View style = {styles.phone}>
                    <Text style={{fontWeight: 'bold'}}>Phone:</Text>
                    <Text>(+237) 690456484 </Text>
                </View>
                <View style = {styles.experience}>
                    <Text style={{fontWeight: 'bold'}}>Experience</Text>
                    <Text>15+ Years in surgeon & 10+ Cardio</Text>
                </View>
                <View style = {styles.cerficate}>
                    <Text style={{fontWeight: 'bold'}}>Cerficate</Text>
                    <Text>All USA Council Awards </Text>
                </View>
            </View>
            <TouchableOpacity>
            <View style= {styles.buttonDeconnecter}>
                <Text style={{fontWeight: 'bold'}}>LogOut</Text>
            </View>
            </TouchableOpacity>
        </View>
    )}
    const styles = StyleSheet.create({
        Profile: {
            backgroundColor:'#B0ECAD',
            borderBottomRightRadius:50,
            borderBottomLeftRadius:50
        },
        tinyImage:{
            width: 450,
            height: 350, 
        },
        cardProfile:{
            backgroundColor:'white',
            borderRadius:27,
            marginTop:-40,
            marginLeft:75,
            width:280,
            height:330,
            padding:20,
            justifyContent:'center',
            marginVertical:25,
        },
        specialite:{
            marginBottom:20
        },
        adresse:{
            marginBottom:20
        },
        phone:{
            marginBottom:20
        },
        experience:{
            marginBottom:20
        },
        cerficate:{
            marginBottom:20
        },
        buttonDeconnecter:{
            borderRadius:10,
            backgroundColor:"gray",
            paddingVertical:20,
            width:300,
            marginLeft:60,
            alignItems:'center',
        },
        iconWrite:{
            
            left:200,
            right:0
        }

    });