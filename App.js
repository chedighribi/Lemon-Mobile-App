import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import LittleLemonForm from './components/Form'
import { useColorScheme } from 'react-native'

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <>
      <View style={[styles.container, colorScheme === 'light'
        ? { backgroundColor: '#fff' }
        : { backgroundColor: '#333333', }]}>
        <LittleLemonHeader />
        <WelcomeScreen />
        <MenuItems />
      </View>
      {/* <View>
        <LittleLemonForm />
      </View> */}
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footerContainer: { backgroundColor: '#333333' },
});

