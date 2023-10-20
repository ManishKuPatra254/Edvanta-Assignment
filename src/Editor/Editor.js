import React, { Fragment, useContext } from 'react'
import { WriteCode } from '../WriteCode/WriteCode'
import { DataListener } from '../DataContent/DataContent'
export function Editor() {
    const { dataHtml, dataCss, dataJavascript, setDatahtml, setDatacss, setDatajavascript } = useContext(DataListener);
    return (
        <Fragment>
            <div style={{ display: 'flex' }}>
                <WriteCode names='HTML'
                    iconsChange='/'
                    color=' #ff3600'
                    value={dataHtml}
                    change={setDatahtml}
                    language="xml"
                />
                <WriteCode names='CSS'
                    iconsChange='✱'
                    color=' #00c5ff'
                    value={dataCss}
                    change={setDatacss}
                    language="css" />
                    
                <WriteCode names='JS'
                    iconsChange='﹙﹚'
                    color=' #ffc500'
                    value={dataJavascript}
                    change={setDatajavascript}
                    language="javascript"
                />
            </div>
        </Fragment>
    )
}
