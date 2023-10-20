import React, { Fragment } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Editor } from '../Editor/Editor'
import { FinalOut } from '../FinalOut/FinalOut'


export function InnerHome() {
    return (
        <Fragment>
            <Navbar />
            <Editor />
            <FinalOut />
        </Fragment>
    )
}
