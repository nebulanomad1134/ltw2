import { View, Text } from 'react-native'
import React from 'react'
import { AuthContext, AuthProvider } from './context/authContext'
import ScreenMenu from './components/menu/ScreenMenu'

const RootNavigation = () => {
  return (
    <AuthProvider>
        <ScreenMenu/>
    </AuthProvider>
  )
}

export default RootNavigation