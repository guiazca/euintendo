import React, { useEffect} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { logout, auth } from '../../firebase'
import { HeaderDiv } from './styles'
import { useAuthState } from "react-firebase-hooks/auth";

export default function Header(){
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
      }, [user, loading]);
  
    return (
            <HeaderDiv>
                {location.pathname !== "/Dashboard" ? <Link to="/Dashboard">VOLTAR</Link> : '' }
                <h1>EUINTENDO</h1>
                <button onClick={logout}>LOGOUT</button>
            </HeaderDiv>
    )
}
