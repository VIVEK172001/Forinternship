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

const Add = ({navigation}) => {
    const [name, setName] = useState('')
    const [totalNoSeason, setTotalNoSeason] = useState('')

    const addToList = async () => {
        try {
            if (!name || !totalNoSeason) {
                return alert('Please add both fields')
                //TODO: all snackbar here
            }

            navigation.navigate('Home', {
                name:name,
                totalNoSeason:totalNoSeason
            })


        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Container style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                <H1 style={styles.heading}>Add to watch List</H1>
                <Form>
                    <Item rounded style={styles.formItem}>
                        <Input
                        placeholder="Searies name"
                        style={{color: "#eee"}}
                        value={name}
                        onChangeText={(text) => setName(text)}
                        />
                    </Item>
                    <Item rounded style={styles.formItem}>
                        <Input
                        placeholder="Total no of seasons"
                        style={{color: "#eee"}}
                        value={totalNoSeason}
                        onChangeText={(text) => setTotalNoSeason(text)}
                        />
                    </Item>
                    <Button rounded block 
                           onPress={addToList}
                    >
                        <Text style={{color: "#eee"}}>Add</Text>
                    </Button>
                </Form>
            
            </ScrollView>
        </Container>
    )
}

export default Add


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