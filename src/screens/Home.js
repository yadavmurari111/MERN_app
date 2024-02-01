import React from 'react'
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js'
import Card from '../components/Card.js'

export default function Home() {

    return (
        <div>
            <div><NavBar /></div>
            <div><Card /></div>
            <div><Footer /></div>
        </div>
    )
}
