import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'
import styled from 'styled-components'

const Login = () => {
    const history = useHistory()
    const [ username, setusername ] = useState('')
    const [ password, setpassword ] = useState('')
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            history.push('/home')
        }
    }, [])

    const onSubmit= e => {
        e.preventDefault()
        axios({
            method:'POST',
            url:'https://easy-login-api.herokuapp.com/users/login',
            data: {
                username: username,
                password: password
            }
        })
        .then(res => {
            localStorage.setItem('token', res.headers['x-access-token'])
            history.push('/clubs')
        })
        .catch(err =>
            console.log(err)
        )
    }

  return (
    <div>
        <Link to="/home">Home</Link>
        <StyledForm onSubmit={onSubmit}>
            <StyledSpan>SignIn</StyledSpan>
            <StyledInput onChange={e => {setusername(e.target.value)}} placegolder="username" type='text'></StyledInput>
            <StyledInput onChange={e => {setpassword(e.target.value)}}placegolder="password" type='password'></StyledInput>
            <StyledInput type='submit'></StyledInput>    
        </StyledForm>
    </div>
  )
}

const StyledSpan = styled.span`
    color: blue;
    margin-bottom: 15px;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledInput = styled.input`
    margin: 6px 0px;
    border-radius: 2px;
    border: none;
`
export default Login