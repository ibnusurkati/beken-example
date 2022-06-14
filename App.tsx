import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import bekenEngine from '@ibnusurkati/beken-engine'

export default function App() {

  const openBeken = () => {
    bekenEngine.open({
      uuid: "uuid-jhon-doe",
      name: "Jhon Doe",
      email: "jhon-doe@mail.com",
      phoneNumber: "081234567890",
      publicKey: "public-key-get-into-webportal",
      secretKey: "secrect-key-get-into-webportal",
      debug: true // false for production
    })
  }

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 8 }}>Welcome to exmplae beken react native</Text>
      <Button
        onPress={openBeken}
        title="Open Beken"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
})