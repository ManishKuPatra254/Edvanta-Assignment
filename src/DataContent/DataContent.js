import React, { Fragment, useState } from 'react'
import { createContext } from 'react'
const DataListener = createContext();

export function DataContent({ children }) {
    const [dataHtml, setDatahtml] = useState('')
    const [dataCss, setDatacss] = useState('')
    const [dataJavascript, setDatajavascript] = useState('')
    return (
        <Fragment>
            <DataListener.Provider
                value={{
                    dataHtml,
                    setDatahtml,
                    dataCss,
                    setDatacss,
                    dataJavascript,
                    setDatajavascript,
                }}
            >
                {children}
            </DataListener.Provider>
        </Fragment>
    )
}
