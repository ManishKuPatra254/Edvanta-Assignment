import React, { Fragment } from 'react'
import styles from './WriteCode.module.css'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/theme/neat.css';
import '../App.css';

export function WriteCode({ names, iconsChange, color }) {
    return (
        <Fragment>
            <div className={styles.main_write_code}>
                <div className={styles.sub_tags}>
                    <div className={styles.tags_c}>
                        <span style={{ backgroundColor: color }}>{iconsChange}</span>
                        {names}
                    </div>
                    <p><CloseFullscreenIcon /></p>
                </div>
                <ControlledEditor className='CodeMirror'

                    options={{
                        theme: 'material',
                        lineNumbers: true
                    }}

                />
            </div>
        </Fragment>
    )
}
