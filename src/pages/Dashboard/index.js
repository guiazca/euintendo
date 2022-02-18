import React from "react"
import  GameCard from '../../components/GameCard'
import { Container } from "@chakra-ui/react"
import "./dashboard.css"
import Header from '../../components/Header'

export default function Dashboard() {
   
    return (
        <>
        <Header />
        <Container className="containerDasboard">
           
            <GameCard />
        </Container>
        </>
    )
}
