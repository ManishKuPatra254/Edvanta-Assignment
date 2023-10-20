import React, { Fragment } from 'react'
import { useContext } from 'react'
import { DataListener } from '../DataContent/DataContent'

export function FinalOut() {
    const { dataHtml, dataCss, dataJavascript } = useContext(DataListener)

    const simpleDataInput = `

    <html>
    <body>${dataHtml}</body>
    <style>${dataCss}</style>
    <script>${dataJavascript}</script>
    </html>`

    return (
        <Fragment>
            <div className="">
                <iframe srcDoc={simpleDataInput}
                    title='Output'
                    sandbox='allow-scripts'
                    frameBorder={0}
                    width='100%'
                    height='100%'
                />
            </div>
        </Fragment>
    )
}
