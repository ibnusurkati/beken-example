import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, StatusBar, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { WebView, WebViewNavigation } from 'react-native-webview'

const Stack = createNativeStackNavigator()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  }
})

const HomeScreen = ({
  navigation
}: NativeStackScreenProps<{
  Beken: undefined
}, 'Beken'>) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content" />
      <Button
        title="Open Beken"
        onPress={() =>
          navigation.navigate('Beken')
        }
      />
    </SafeAreaView>
  )
}

const BekenScreen = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1E1E1E" />
      <WebView source={{ uri: 'https://sandbox-home.produkbeken.id?prefix=jhonstore&publickey=public-key-get-into-webportal&secretkey=secrect-key-get-into-webportal' }}/>
    </>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Beken" component={BekenScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}