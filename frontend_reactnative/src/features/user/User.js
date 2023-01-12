import React, { Fragment, useState } from 'react'
import UserList from './UserList';
import UserFormSearch from './UserFormSearch';
import UserFormAdd from './UserFormAdd';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function User(props) {
    const [add, setAdd] = useState({
        isAdd: false
    })

    const handleAdd = () => {
        setAdd({
            isAdd: true
        })
    }

    const handleCancel = () => {
        setAdd({
            isAdd: false
        })
    }
    
    return (
        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: 20, backgroundColor: 'honeydew' }}>
            <Text style={styles.titleText}><Icon name="address-book" solid size={30} color="black" /> Phone Book Apps</Text>
            {
                add.isAdd ?
                    <Fragment>
                        <Text style={{ padding: 10, width: '100%', textAlign: 'center', backgroundColor: '#0b839d', borderRadius: 5, marginBottom: 10, color: 'honeydew', fontWeight: 'bold' }}><Icon name="user-plus" size={20} color="honeydew" />    FORM ADD</Text>
                        <UserFormAdd cancel={handleCancel} />
                    </Fragment>
                    :
                    <Fragment>
                        <TouchableOpacity style={{
                            padding: 10,
                            marginRight: 260,
                            width: '25%',
                            backgroundColor: "#0a7086",
                            borderRadius: 10,
                            borderStyle: "solid",
                            borderColor: 'white',
                            borderWidth: 1,
                        }} onPress={handleAdd}><Text style={{ textAlign: 'center', color: 'honeydew', fontWeight: 'bold' }}><Icon name="plus" size={20} color="honeydew" />  ADD</Text></TouchableOpacity>
                        <Text style={{ padding: 10, width: '100%', textAlign: 'center', backgroundColor: '#0b839d', borderRadius: 5, marginBottom: 10, marginTop: 20, color: 'honeydew', fontWeight: 'bold' }}><Text><Icon name="search" size={20} color="honeydew" /></Text>   FORM SEARCH</Text>
                        <UserFormSearch />
                    </Fragment>
            }

            <UserList />

        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
        marginBottom: 20,
        color: 'black'
    }
});


