import Navigation from  './NavigationContainer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View, ScrollView } from 'react-native';
import TopBar from './Components/TopBar';
import HomeStat from './Components/HomeStat';
import SearchBar from './Components/SearchBar';
import Cards from './Components/Cards';
import Statistique from './Components/Statistique';




export default function App() {
  return (
    <Navigation>

    </Navigation>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'left',
    justifyContent: 'top',
    marginTop:50
  },
});
