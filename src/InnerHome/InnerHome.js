import React, { Fragment } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Editor } from '../Editor/Editor'


export function InnerHome() {
    return (
        <Fragment>
            <Navbar />
            <Editor />
        </Fragment>
    )
}
