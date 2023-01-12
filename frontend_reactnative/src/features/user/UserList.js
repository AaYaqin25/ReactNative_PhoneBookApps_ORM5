import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from "react"
import UserItem from "../../components/UserItem"
import { loadUserAsync, loadPagination, addUserAsync, removeUserAsync, updateUserAsync, selectUser } from './userSlice'
import { FlatList, View } from 'react-native'

export default function UserList(props) {

    const users = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUserAsync())
    }, [dispatch])

    return (
        <View style={{ display: 'flex', width: '100%' }}>
            <FlatList
                data={users}
                renderItem={({ item, index }) => (
                    <UserItem
                        key={item.id}
                        no={index + 1}
                        name={item.name}
                        phone={item.phone}
                        sent={item.sent}
                        remove={() => dispatch(removeUserAsync(item.id))}
                        resending={() => dispatch(addUserAsync({ id: item.id, name: item.name, phone: item.phone }))}
                        update={(name, phone) => dispatch(updateUserAsync({ id: item.id, name: name, phone: phone }))} 
                        />
                )}
                keyExtractor={(item) => item.id}
                onEndReached={() => dispatch(loadPagination())}
                style={{ maxHeight: 250 }}
                onEndReachedThreshold={0.5}
            />


        </View >
    )
}
