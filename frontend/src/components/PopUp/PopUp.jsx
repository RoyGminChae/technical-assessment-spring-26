import React, { useState } from 'react';
import styles from './PopUp.module.css';
import { useUserContext } from '../../context.jsx';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ReactDom from 'react-dom';

export default function PopUp() {
    const { setUsername, popUpExists, setPopUpExists } = useUserContext();
    const [localName, setLocalName] = useState('');

    if (!popUpExists) return null;

    function handleSubmit() {
        const trimmedName = localName.trim();
        if (!trimmedName) 
            return;
        
        setUsername(trimmedName);
        setPopUpExists(false);
    }

    return ReactDom.createPortal(
        <div className={styles.popUpContainer}>
            <div className={styles.popUpContent}>
                <h2 className={styles.title}>Please Input Your Name!</h2>
                <div className={styles.form}>
                    <div className={styles.textContainer}>    
                        <TextField 
                            id="outlined-basic" 
                            variant="outlined" 
                            placeholder="Name Here!"
                            sx={{
                                flex: '1',
                                borderRadius: '0.25rem',
                                "& .MuiInputBase-input": {
                                    color: 'var(--text-muted)'
                                }
                            }}

                            value={localName}
                            autoFocus
                            onChange={(e) => setLocalName(e.target.value)}
                        />
                    </div>
                    <Button 
                        variant="contained" 
                        onClick={handleSubmit}
                        sx={{
                            backgroundColor: 'var(--black1)',
                            borderRadius: '0.25rem',
                            color: 'var(--text);',
                            boxShadow: 'var(--shadow-s)',
                            fontFamily: "'LowresPixel', sans-serif",
                        }}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    );
}
