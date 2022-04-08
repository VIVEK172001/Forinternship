  import React, {useState} from 'react'
  import {Text, StyleSheet, ScrollView} from 'react-native'
  import {
      Container,
      Form,
      Item, 
      Input,
      Button,
      H1
  } from 'native-base'
  
  const Home = ({navigation, route}) => {

      const {name,totalNoSeason}=route.params;
      const [names, setName] = useState('')
      const [totalNoSeasons, setTotalNoSeason] = useState('')
  
      const goToProfile = () => {
          try {
              navigation.navigate('Profile')
          } catch (error) {
              console.log(error)
          }
      }
  
      return(
          <Container style={styles.container}>
              <ScrollView contentContainerStyle={{flexGrow:1}}>
                  <H1 style={styles.heading}>Season Name:{name}</H1>
                  <H1 style={styles.heading}>TotalNoSeason:{totalNoSeason}</H1>
                  <Button rounded block 
                           onPress={goToProfile}
                    >
                        <Text style={{color: "#eee"}}>Add</Text>
                    </Button>
              </ScrollView>
          </Container>
      )
  }
  
  export default Home
  
  
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