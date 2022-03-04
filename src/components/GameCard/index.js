import React from "react"
import { Box, Image, Badge } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import './gameCard.css'

let games = require("../../constants/cleanGames.json")

export default function GameCard() {

   return (
       <>
       {games.map((_,i) => {
           return (
            <Link to={`/Detail/${games[i].id}`} key={i}>
            <Box className="box" maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' marginBottom="30px" height="100px">
            <Image src={games[i].background_image} alt={`${games[i].name_original} game`} />
      
            <Box p='6'>
              <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                  {games[i].esrb_rating?.name}    
                </Badge>
                <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                ml='2'
                >
                  {games[i].genres.map((_,genresIndex) => {
                      return `${games[i].genres[genresIndex].name} `
                  })}
              </Box>
              </Box>      
              <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                isTruncated
              >                
                {games[i].name_original}               
              </Box>      
             <Box display='flex' mt='2' alignItems='center'>
                {Array(5)
                  .fill('')
                  .map((_,starIndex) => (
                    <StarIcon
                      key={starIndex}
                      color={starIndex < games[i].rating ? 'teal.500' : 'gray.300'}
                    />
                  ))}
              </Box>
            </Box>
          </Box>
          </Link>
           )
            
       })}
       
      </>
    )
}


