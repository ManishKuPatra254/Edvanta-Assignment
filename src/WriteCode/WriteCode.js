import React, { Fragment, useState } from 'react';
import styles from './WriteCode.module.css';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import MonacoEditor from 'react-monaco-editor';

export function WriteCode({ names, iconsChange, color, value, change, language }) {
    const [editorValue, setEditorValue] = useState(value);

    function handleValueChange(newValue) {
        console.log('handleValueChange called with value:', newValue);
        setEditorValue(newValue);
        change(newValue);
    }

    return (
        <Fragment>
            <div className={styles.main_write_code}>
                <div className={styles.sub_tags}>
                    <div className={styles.tags_c}>
                        <span style={{ backgroundColor: color }}>{iconsChange}</span>
                        {names}
                    </div>
                    <div className="" style={{
                        display: 'flex',
                        padding: '15px',
                        gap: '15px',
                        alignItems: 'center'
                    }}>
                        <p><SaveAltIcon fontSize='small' /></p>
                        <p><ContentCopyIcon fontSize='small' /></p>
                    </div>
                </div>
                <MonacoEditor
                    width="100%"
                    height="40vh"
                    language={language}
                    theme="vs-dark"
                    value={editorValue}
                    onChange={handleValueChange}
                    options={{
                        automaticLayout: true,
                    }}
                />
            </div>
        </Fragment>
    );
}
