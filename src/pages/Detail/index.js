import React from "react"
import { useParams } from 'react-router-dom'
import { Container, Box, Badge } from "@chakra-ui/react"
import styles from "./Image.module.css"
import Header from '../../components/Header'
let games = require("../../constants/cleanGames.json")


export default function Detail() {
    const { id } = useParams();
    console.log(typeof id)
    console.log(id)
    const gameID = games.find(game => game.id === parseInt(id))
    console.log(gameID)
    return (
        <>
        <Header />
        <Container maxW='container.xl'>
            <article className={styles.article}>
                <img className={styles.image} src={gameID.background_image} alt="background" />
                <h1 className={styles.header}>{gameID.name}</h1>
            </article>
            <Box display='flex' alignItems='center' justifyContent='center' marginTop="20px">
                <Badge borderRadius='full' px='2' colorScheme='teal' fontWeight='semibold' fontSize='x-large'>
                  {gameID.esrb_rating?.name}    
                </Badge>
                <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='x-large'
                textTransform='uppercase'
                ml='2'
                >
                  {gameID.genres.map((_,genresIndex) => {
                      return `${gameID.genres[genresIndex].name} `
                  })}
              </Box>
            </Box>
            <div className={styles.description}>
                <p className={styles.title}>Descrição</p>
                <p>{gameID.description_raw}</p>
            </div>            
        </Container>         

        </>
    )
}
