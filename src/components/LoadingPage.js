import React from 'react'
import { Spinner } from 'react-bootstrap'
const LoadingPage = () => {
    return (
        <div style={{textAlign:'center',alignContent:'center',alignItems:'center'}}>
             <Spinner animation="border" variant="success" />
        </div>
    )
}

export default LoadingPage
