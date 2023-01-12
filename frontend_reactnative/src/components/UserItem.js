import React, { useCallback, useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function UserItem(props) {

    const [user, setUser] = useState({
        name: props.name,
        phone: props.phone,

    })

    const [edit, setEdit] = useState({
        isEdit: false
    })

    const handleClickEdit = () => {
        setEdit({
            isEdit: true
        })

    }

    const handleCancelEdit = () => {
        setEdit({
            isEdit: false
        })
    }

    const saveEdit = useCallback(() => {
        props.update(user.name, user.phone)
        setEdit({
            isEdit: false
        })
    }, [props, user])

    return (
        <View style={styles.container}>
            <Text><Icon name="user-circle" size={30} color="black" /></Text>
            {
                edit.isEdit ?
                    <View style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                        <TextInput
                            style={{ height: 40, color: 'black', fontWeight: 'bold' }}
                            placeholder="name"
                            onChangeText={name => setUser({ ...user, name })}
                            defaultValue={user.name}
                        />
                        <View style={{ width: 'auto', height: 1, backgroundColor: 'black' }}></View>
                        <TextInput
                            style={{ height: 40, color: 'black', fontWeight: 'bold' }}
                            placeholder="phone"
                            onChangeText={phone => setUser({ ...user, phone })}
                            defaultValue={user.phone}
                        />
                    </View>
                    :
                    <View style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                        <Text style={{ padding: 2, color: 'black', fontWeight: 'bold' }}>{props.name}</Text>
                        <View style={{ width: 'auto', height: 1, backgroundColor: 'black' }}></View>
                        <Text style={{ padding: 2, color: 'black', fontWeight: 'bold' }}>{props.phone}</Text>
                    </View>

            }

            {
                props.sent ?
                    edit.isEdit ?
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.save} onPress={saveEdit}><Icon name="save" size={20} color="white" /></TouchableOpacity>
                            <TouchableOpacity style={styles.cancel} onPress={handleCancelEdit}><Icon name="undo-alt" size={20} color="white" /></TouchableOpacity>
                        </View>

                        :
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.edit} onPress={handleClickEdit}><Icon name="pen" size={20} color="white" /></TouchableOpacity>
                            <TouchableOpacity style={styles.delete} onPress={props.remove}><Icon name="trash" size={20} color="white" /></TouchableOpacity>
                        </View>

                    :
                    <View>
                        <TouchableOpacity style={styles.resend} onPress={props.resending}><Icon name="sync-alt" size={20} color="white" /></TouchableOpacity>
                    </View>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: 'auto',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: "#0b839d",
        backgroundColor: '#e7f8fc'
    },
    edit: {
        padding: 10,
        width: 'auto',
        backgroundColor: '#7ecf7b',
        borderRadius: 5,
        borderStyle: "solid",
        borderColor: 'white',
        borderWidth: 1
    },
    delete: {
        padding: 10,
        width: 'auto',
        backgroundColor: "#f06161",
        borderRadius: 5,
        borderStyle: "solid",
        borderColor: 'white',
        borderWidth: 1
    },
    resend: {
        padding: 10,
        width: 'auto',
        backgroundColor: "#e6e600",
        borderRadius: 5,
        borderStyle: "solid",
        borderColor: 'white',
        borderWidth: 1
    },
    save: {
        padding: 10,
        width: 'auto',
        backgroundColor: "#4a8fec",
        borderRadius: 5,
        borderStyle: "solid",
        borderColor: 'white',
        borderWidth: 1
    },
    cancel: {
        padding: 10,
        width: 'auto',
        backgroundColor: "#ecb84a",
        borderRadius: 5,
        borderStyle: "solid",
        borderColor: 'white',
        borderWidth: 1
    }
});