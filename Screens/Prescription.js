import React from 'react';
import { Text, View ,StyleSheet,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';


export default function Prescription() {

    return (
    <View style = {styles.Viewprescription}>
        <View style= {styles.interprescription}>
                <View style= {styles.cardPrescription}> 
                </View>
                <View>
                    <TouchableOpacity style={styles.iconAdd}><AntDesign name="adduser" size={70} color="black" /></TouchableOpacity>
                </View>
        </View>
        <View style= {styles.cardPosologie}> 
        <ScrollView > 
        <Text style = {styles.medicName}>
                        PARAMACETAMOL 
                    </Text>
                    <View style = {styles.posologieDuree}>
                        <View style = {styles.posologieClass}>
                                <Text style={{fontWeight: 'bold'}}>POSOLOGIE </Text>
                                    <View style = {styles.medicPosol}>
                                        <Text>1 matin (6h00)</Text>
                                        <Text>1 midi (12h00)</Text>
                                        <Text>1 soir (19h00)</Text>
                                    </View>
                        </View>
                        <View>
                            <Text style={{fontWeight: 'bold'}}>
                                DUREE 
                            </Text>
                            <Text style = {styles.medicTime}>
                                3 JOURS 
                            </Text>
                        </View>
                    </View> 
                    <Text style = {styles.medicName}>
                        RINOGRIP 
                    </Text>
                    <View style = {styles.posologieDuree}>
                        <View style = {styles.posologieClass}>
                                <Text style={{fontWeight: 'bold'}}>POSOLOGIE </Text>
                                    <View style = {styles.medicPosol}>
                                        <Text>1 matin (6h00)</Text>
                                        <Text></Text>
                                        <Text>1 soir (19h00)</Text>
                                    </View>
                        </View>
                        <View>
                            <Text style={{fontWeight: 'bold'}}>
                                DUREE 
                            </Text>
                            <Text style = {styles.medicTime}>
                                2 JOURS 
                            </Text>
                        </View>
                    </View> 
                    <Text style = {styles.medicName}>
                        DOLIPRANE 
                    </Text>
                    <View style = {styles.posologieDuree}>
                        <View style = {styles.posologieClass}>
                                <Text style={{fontWeight: 'bold'}}>POSOLOGIE </Text>
                                    <View style = {styles.medicPosol}>
                                        <Text>1 matin (6h00)</Text>
                                        <Text>1 midi (12h00)</Text>
                                        <Text>1 soir (19h00)</Text>
                                    </View>
                        </View>
                        <View>
                            <Text style={{fontWeight: 'bold'}}>
                                DUREE 
                            </Text>
                            <Text style = {styles.medicTime}>
                                3 JOURS 
                            </Text>
                        </View>
                    </View> 
        </ScrollView>
        
              <View style = {styles.listPatientmalade}>
                    
              </View>
              
            
        </View>
    </View>
    )
  
}
const styles = StyleSheet.create({
    interprescription:{
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center',
     
            
    },
     cardPrescription:{
     backgroundColor:'green',
     borderRadius:20,  
     marginTop:30,
     marginLeft:15,
     width:345,
     height:150, 
     
   },
   cardPosologie:{
        backgroundColor:'white',
        borderRadius:20,  
        marginTop:40,
        marginLeft:15,
        width:400,
        height:250,
        justifyContent:'space-between',
   },
   medicName:{
    textAlign:'center',
    fontSize:18,
    color:'grey'
   },
   medicPosol:{
    flexDirection:'column'
   },
   medicTime:{
    paddingVertical:22
   },
   posologieDuree:{
    flexDirection:'row',
    justifyContent:'space-between',
   },
   
});