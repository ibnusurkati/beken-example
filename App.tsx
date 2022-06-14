import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, Share, StatusBar, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { WebView, WebViewMessageEvent, WebViewNavigation } from 'react-native-webview'

type PayloadEvent = {
  event: 'download' | 'share' | 'print'
  productCode: string
  data: string
}

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
  let urlPwa = 'https://sandbox-home.produkbeken.id?'

  urlPwa += `uuid=${encodeURIComponent('uuid-mitra-partner')}&`
  urlPwa += `name=${encodeURIComponent('jhon doe')}&`
  urlPwa += `phone=${encodeURIComponent('081234567890')}&`
  urlPwa += `email=${encodeURIComponent('jhon-doe@gmail.com')}&`
  urlPwa += `publickey=${encodeURIComponent('public-key')}&`
  urlPwa += `secretkey=${encodeURIComponent('secret-key')}`

  const onDownload = async (productCode: string, data: string) => {
    try {
      await Share.share({
        message: data,
        title: 'Share Struk - ' + productCode
      })
    } catch (error) {
      console.log(error)
    }
  }

  const onShare = async (productCode: string, data: string) => {
    try {
      await Share.share({
        message: data,
        title: 'Share Struk - ' + productCode
      })
    } catch (error) {
      console.log(error)
    }
  }

  const onPrint = async (productCode: string, data: string) => {
    try {
      await Share.share({
        message: data,
        title: 'Share Struk - ' + productCode
      })
    } catch (error) {
      console.log(error)
    }
  }

  const onMessage = (event: WebViewMessageEvent) => {
    const payload: PayloadEvent = JSON.parse(event.nativeEvent.data)
    switch (payload.event) {
      case 'download':
        // your code in here
        break;
      case 'share':
        // your code in here
        break;
      case 'print':
        // your code in here
        break;
    }
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1E1E1E" />
      <WebView
        source={{ uri: urlPwa }}
        onMessage={onMessage}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
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