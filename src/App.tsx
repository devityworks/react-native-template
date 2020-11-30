import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Colors} from 'shared/constants';
import {NavigationContainer} from '@react-navigation/native';
import store from 'store';
import {Provider} from 'react-redux';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <SafeAreaView />
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.body}>
            <View>
              <Text style={styles.title}>React Native</Text>
              <Text style={styles.paragraph}>Create your amazing app.</Text>
            </View>
          </View>
          <View>
            <Text style={styles.brand}>DevityWorks</Text>
          </View>
        </ScrollView>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.black,
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  title: {
    color: Colors.title,
    fontSize: 25,
    fontWeight: '700',
    textShadowColor: 'rgba(102, 252, 241, 0.5)',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 5,
  },
  paragraph: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  footer: {},
  brand: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    paddingVertical: 25,
  },
  body: {
    backgroundColor: Colors.black,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
