import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View, ScrollView } from 'react-native';
import TopBar from '../Components/TopBar';
import HomeStat from '../Components/HomeStat';
import SearchBar from '../Components/SearchBar';
import Cards from '../Components/Cards';
import Statistique from '../Components/Statistique';
import Prescription from './Prescription';
import Navigation from '../NavigationContainer';




export default function Home({navigation}) {
  return (
    <View style={styles.container}>     
      <StatusBar style="auto" />
      {/* Start topbar */}
      <TopBar navigation={navigation}></TopBar>
      {/* Start homeStart */}
      <HomeStat navigation={navigation}></HomeStat>
      {/* end homeStart */}

      {/* start searchbar */}
      <SearchBar></SearchBar>
      {/* end searchbar */}

       {/*Start scrollViews*/}
      <ScrollView style = {styles.Cards} horizontal = {true} showsHorizontalScrollIndicator = {false}>
            <Cards></Cards> 
      </ScrollView>
      {/*End scrollViews*/}
      <Statistique></Statistique>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'left',
    justifyContent: 'top',
  }
});
