import React,  {useState} from 'react';
import {StyleSheet, View, FlatList} from "react-native";
import {Text, FAB, List} from "react-native-paper";
//import FAB from 'react-native-fab';

export default function ViewNotes({navigation}){
    const [notes, setNotes] = useState([])

    const addNotes = note => {
        note.id = notes.length +1 
        setNotes([...notes,note])
    }
    

    return (
        <View style = {styles.container}>
            {notes.length ===0 ?(
                  <View style = {styles.titleContainer}>
                  <Text style = {styles.title}>You have no notes</Text>
  
              </View>

            ):(
                <FlatList 

                            data={notes}
                            renderItem={({ item }) => (
                                <List.Item
                                    left={props => <List.Icon {...props} icon="lead-pencil" color = "black" />}
                                    title={item.noteTitle}
                                    description={item.noteDescription}
                                    descriptionNumberOfLines={1}
                                    titleStyle={styles.listTitle}
                                    onPress = {()=> deleteNote(item.id)}
                                    style = {styles.noteStyle}
                                    theme={{ colors: {text: 'black', primary: 'black',underlineColor:'black'}}}
                                   
                                    
                                />
                            )}
                            
                            keyExtractor={item => item.id.toString()}
                        />


            )


            }
          


          

            <FAB
                style = {styles.fab}
                small
                icon = 'plus'
                label = 'Add new note'
                onPress = {()=> navigation.navigate("AddNotes", {addNotes} )}

            />
            {/* <FAB buttonColor="red" iconTextColor="#FFFFFF" onClickAction={() => {console.log("FAB pressed")}} visible={true} iconTextComponent={<Icon name="all-out"/>} /> */}

        </View>

      
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: "#fff",
        paddingVertical: 20,
        paddingHorizontal: 10

    },
    titleContainer:{
        alignItems: "center",
        justifyContent: "center", 
        flex: 1
    },
    title: {
        fontSize: 20
    },
    fab:{
        backgroundColor: "#ADD8E6",
        position: "absolute",
        margin: 20,
        right: 0,
        bottom: 10
    },
    listTitle: {
        fontSize: 20
    },
    noteStyle: {
            borderWidth:1,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            width:"100%",
            height:75,
            backgroundColor:'#ADD8E6',
            borderRadius:10,
            paddingVertical: 20,
            paddingBottom:20,
            marginBottom: 18,
          }

})

