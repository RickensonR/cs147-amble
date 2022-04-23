import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, IconButton, TextInput, FAB } from 'react-native-paper'


function AddNotes({ navigation,route }) {
    const [noteTitle, setNoteTitle] = useState('')
    const [noteDescription, setNoteDescription] = useState('')

    

    function onSaveNote() {
        //addNotes({ noteTitle, noteDescription })
        //navigation.state.setParams({name: "Rick"})
        route.params.addNotes({ noteTitle, noteDescription })
       // .getState.addNotes({ noteTitle, noteDescription })
        navigation.goBack()
    }

    return (
        <>
            {/* <IconButton
                icon="close"
                size={25}
                color='blue'
                onPress={() => navigation.goBack()}
                style={styles.iconButton}
            /> */}

            <View style={styles.container}>
                <TextInput
                    label="Note Title"
                    value={noteTitle}
                    mode='outlined'
                    theme={{ colors: { placeholder: 'black', text: 'black', primary: 'black',underlineColor:'black'}}}
                    onChangeText={setNoteTitle}
                    style={styles.title}
                />
                <TextInput
                    label="Add Note Description"
                    value={noteDescription}
                    onChangeText={setNoteDescription}
                    mode="outlined"
                    multiline={true}
                    style={styles.text}
                    scrollEnabled={true}
                    returnKeyLabel='done'
                    blurOnSubmit={true}
                    theme={{ colors: { placeholder: 'black', text: 'black', primary: 'black',underlineColor:'black'}}}
                />
                <FAB
                    style={styles.fab}
                    small
                    icon="check"
                    disabled={noteTitle == '' ? true : false}
                    onPress={() => onSaveNote()}
                />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    iconButton: {
        backgroundColor: '#219653',
        position: 'absolute',
        right: 0,
        top: 40,
        margin: 10
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        height: 75,
        backgroundColor: "#DB753C",
        fontSize: 24,
        marginBottom: 16,
        fontWeight: "bold"
    },
    text: {
        backgroundColor: "#fdf7f6",
        height: 600,
        fontSize: 16,
        fontWeight: "bold"
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0,
        backgroundColor: '#fdf7f6'
    }

})

export default AddNotes