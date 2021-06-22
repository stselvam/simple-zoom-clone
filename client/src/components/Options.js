import React, { useContext, useState } from 'react'
import { Button, TextField, Grid, Typography, Container, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Assignment, Phone, PhoneDisabled } from "@material-ui/icons";

import { SocketContext } from '../Services/SocketContext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    gridContainer: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    container: {
        width: '600px',
        margin: '35px 0',
        padding: 0,
        [theme.breakpoints.down('xs')]: {
            width: '80%',
        },
    },
    margin: {
        marginTop: 20,
    },
    padding: {
        padding: 20,
    },
    paper: {
        padding: '10px 20px',
        border: '2px solid black',
    },
}));

const Options = ({children}) => {
    const styles = useStyles();
    const [idToCall, setIdToCall] = useState("");
    const {me, callAccepted, callEnded, name, setName, leaveCall, callUser } = useContext(SocketContext);

    return (
        <Container className={styles.container}>
            <Paper elevation={10} className={styles.paper}>
                <form className={styles.root} noValidate autoComplete="off">
                    <Grid container className={styles.gridContainer}>
                        <Grid item xs={12} md={6} className={styles.padding}>
                            <Typography gutterBottom variant="h6">Account Info</Typography>
                            <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                            <CopyToClipboard text={me} className={styles.margin}>
                                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                                    Copy your id
                                </Button>
                            </CopyToClipboard>
                        </Grid>
                        <Grid item xs={12} md={6} className={styles.padding}>
                            <Typography gutterBottom variant="h6">Make a call</Typography>
                            <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
                            {callAccepted && !callEnded ? (
                                <Button variant="contained" color="secondary" fullWidth startIcon={<PhoneDisabled fontSize="large" />} onClick={leaveCall} className={styles.margin}>
                                    Hang Up
                                </Button>
                            ):(
                                <Button variant="contained" color="primary" fullWidth startIcon={<Phone fontSize="large" />} onClick={(e) => callUser({id: idToCall})} className={styles.margin}>
                                    Call
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </form>
                {children}
            </Paper>
        </Container>
    )
}

export default Options
