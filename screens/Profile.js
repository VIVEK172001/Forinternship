import React, {useState, useEffect} from 'react'
import { ScrollView, StyleSheet} from 'react-native'
import {
    H1,
    Container,
} from 'native-base'

const Profile = ({navigation, route}) => {

    return(
        <Container style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                <H1 style={styles.heading}>This is the profile Page</H1>
            </ScrollView>
        </Container>
    )
}

export default Profile



const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1b262c',
      flex: 1,
      justifyContent: 'flex-start',
    },
    heading: {
      textAlign: 'center',
      color: '#00b7c2',
      marginHorizontal: 5,
      marginTop: 50,
      marginBottom: 20,
    },
    formItem: {
      marginBottom: 20,
    },
  });