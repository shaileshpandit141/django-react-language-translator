import React from 'react'
import './MainLayout.css'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

export default function MainLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
