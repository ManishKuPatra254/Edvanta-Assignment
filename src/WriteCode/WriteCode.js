import React, { Fragment, useState } from 'react';
import styles from './WriteCode.module.css';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import MonacoEditor from 'react-monaco-editor';
import { toast, Toaster } from 'react-hot-toast';

export function WriteCode({ names, iconsChange, color, value, change, language }) {
    const [valueSet, setEvalueSet] = useState(value);

    function handleValueChange(newValue) {
        console.log('handleValueChange called with value:', newValue);
        setEvalueSet(newValue);
        change(newValue);
    }

    function handleSaveButton() {
        const downloadFile = new Blob([valueSet],
            { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = window.URL.createObjectURL(downloadFile);
        a.download = 'code.txt';
        a.click();
        toast('Downloaded',
            {
                icon: '✅',
                style: {
                    borderRadius: '3px',
                    background: '#333',
                    color: '#fff',
                },
            }
        );
    }

function handleCopyClick() {
    if (valueSet) {
        navigator.clipboard.writeText(valueSet)
            .then(() => {
                toast('Text copied to clipboard',
                    {
                        icon: '✔️',
                        style: {
                            borderRadius: '3px',
                            background: '#333',
                            color: '#fff',
                        },
                    }
                );
            })
            .catch(err => {
                console.error('Failed: ', err);
            });
    }
    else {
        toast('Empty board',
            {
                icon: '❌',
                style: {
                    borderRadius: '3px',
                    background: '#333',
                    color: '#fff',
                },
            }
        );
    }
}

return (
    <Fragment>
        <div className={styles.main_write_code}>
            <div className={styles.sub_tags}>
                <div className={styles.tags_c}>
                    <span style={{ backgroundColor: color }}>{iconsChange}</span>
                    {names}
                </div>
                <div className={styles.icons_pro} >
                    <p onClick={handleSaveButton}><TurnedInNotIcon fontSize='small' /></p>
                    <p onClick={handleCopyClick}><ContentCopyIcon fontSize='small' /></p>
                    <Toaster />
                </div>
            </div>
            <MonacoEditor
                width="100%"
                height="40vh"
                language={language}
                theme="vs-dark"
                value={valueSet}
                onChange={handleValueChange}
                options={{
                    automaticLayout: true,
                }}
            />
        </div>
    </Fragment>
);
}
