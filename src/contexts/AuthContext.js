import reactDom from "react-dom";
import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from "react-router";
import auth from '../firebase'


const AuthContext=React.createContext()

export const useAuth=()=>useContext(AuthContext)

export const AuthProvider=({children})=>{
    const [loading,setLoading]=useState(true)
    const [user,SetUser]=useState({})
    const history =useHistory()

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
                SetUser(user)
                setLoading(false)
                history.push('/chats')
        })

    },[user,history])

    const value={user}

    return(
        <AuthContext.Provider value={value}>
                {!loading && children}
        </AuthContext.Provider>
    )
}



