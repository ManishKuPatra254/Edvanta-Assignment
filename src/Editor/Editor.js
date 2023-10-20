import React, { Fragment } from 'react'
import { WriteCode } from '../WriteCode/WriteCode'

export function Editor() {
    return (
        <Fragment>
            <div style={{ display: 'flex' }}>
                <WriteCode names='HTML'
                    iconsChange='/'
                    color=' #ff3600' />
                <WriteCode names='CSS'
                    iconsChange='✱'
                    color=' #00c5ff' />
                <WriteCode names='JAVASCRIPT'
                    iconsChange='﹙﹚'
                    color=' #ffc500' />
            </div>
        </Fragment>
    )
}
