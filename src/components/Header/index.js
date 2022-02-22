import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderDiv } from './styles'

export default function Header(){
    return (
        <Link to="/">
            <HeaderDiv>
                <h1>EUINTENDO</h1>
            </HeaderDiv>
       </Link>
    )
}
