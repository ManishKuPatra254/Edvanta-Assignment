import React, { useState } from 'react'
import { Fragment } from 'react'
import { AppBar, Button } from '@mui/material'
import { Toolbar } from '@mui/material'
import image1 from '../Images/20.png'
import styles from './Navbar.module.css'

export function Navbar() {
    const [toogleLock, setToogleLock] = useState(false)

    function handleClickLockToogle() {
        setToogleLock(!toogleLock)
    }
    return (
        <Fragment>
            <AppBar sx={{
                backgroundColor: 'black',
                position: 'static',
                width: '100%'
            }}>
                <Toolbar >
                    <div className={styles.tools_main}>
                        <img src={image1} alt="" />
                        <p> Code Point</p>
                    </div>
                    <Button sx={{
                        textTransform: 'unset',
                        backgroundColor: 'white',
                        color: 'black',
                        padding: '2px 40px',
                        fontFamily: 'Josefin Sans, sans-serif',
                        fontWeight: '900',
                        fontSize: '19px',
                        ":hover": { backgroundColor: 'white' }
                    }} variant='contained' onClick={handleClickLockToogle}>{!toogleLock ? 'Lock' : 'Unlock'}</Button>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}
