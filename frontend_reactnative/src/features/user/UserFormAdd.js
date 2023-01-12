import React, { useCallback, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch } from 'react-redux'
import { create } from "./userSlice";

export default function UserFormAdd(props) {

    const dispatch = useDispatch()
    const [user, setUser] = useState({
        name: '',
        phone: ''
    })

    const handleSubmit = useCallback(() => {
        dispatch(create(user.name, user.phone))
        setUser({ name: '', phone: '' })
    }, [dispatch, user])

    return (
        <View style={{ display: 'flex', width: '100%', flexDirection: 'column', alignContent: 'flex-start', alignItems: 'center' }}>
            <TextInput
                style={{ height: 40, width: '100%', fontWeight: "bold", borderWidth: 1, borderColor: 'grey', marginBottom: 10, padding: 10 }}
                placeholder="enter name"
                onChangeText={name => setUser({ ...user, name })}
                defaultValue={user.name}
            />

            <TextInput
                style={{ height: 40, width: '100%', fontWeight: "bold", borderWidth: 1, borderColor: 'grey', padding: 10 }}
                placeholder="enter phone"
                onChangeText={phone => setUser({ ...user, phone })}
                defaultValue={user.phone}
            />

            <TouchableOpacity style={[styles.button, {marginTop: 20, marginBottom: 10}]} onPress={handleSubmit}><Text style={styles.labelButton}>Save</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#40c9e6', marginBottom: 20 }]} onPress={props.cancel}><Text style={styles.labelButton}>Cancel</Text></TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    button: {
        padding: 10,
        width: '100%',
        backgroundColor: "#25a1bb",
        borderRadius: 15,
        borderStyle: "solid",
        borderColor: 'white',
        borderWidth: 1
    },
    labelButton: {
        color: 'honeydew',
        textAlign: "center",
        fontWeight: "bold"
    }
})

