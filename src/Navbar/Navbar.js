import React from 'react'
import { Fragment } from 'react'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'

export function Navbar() {
    return (
        <Fragment>
            <AppBar sx={{
                backgroundColor: 'black'
                , position: 'static'
            }}>
                <Toolbar>
                    <img src={'../../public/codepen.png'} alt="" />
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}
