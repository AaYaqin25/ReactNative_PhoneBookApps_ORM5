import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { search, selectQuery, loadUserAsync } from "./userSlice";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function UserFormSearch(props) {

    let reset = useSelector(selectQuery)

    const dispatch = useDispatch()

    const [user, setUser] = useState({
        name: '',
        phone: ''
    })

    const handleSubmit = useCallback(() => {
        dispatch(search({ name: user.name, phone: user.phone }))
        setUser({ name: '', phone: '' })
    }, [dispatch, user])

    const handleReset = () => {
        reset = {page: 1, totalPage: 1, query: {}}
        dispatch(loadUserAsync())
    }
    
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

            <TouchableOpacity style={[styles.button, {marginBottom: 10, marginTop: 10}]} onPress={handleSubmit}><Text style={styles.labelButton}>Search</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.button, {backgroundColor: '#40c9e6', marginBottom: 10}]} onPress={handleReset}><Text style={styles.labelButton}>Reset</Text></TouchableOpacity>
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