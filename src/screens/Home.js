import React from 'react'
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js'
import Card from '../components/Card.js'
import Carousel from '../components/Carousel.js'

export default function Home() {

    return (
        <div >
            <div><NavBar /></div>
            <div className="m-1"><Carousel /></div>
            <div className="m-1"><Card /></div>
            <div className=""><Footer /></div>
        </div >
    )
}
