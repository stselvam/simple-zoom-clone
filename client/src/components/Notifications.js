import React, { useContext } from 'react'
import { Button } from "@material-ui/core";

import { SocketContext } from '../Services/SocketContext';

const Notifications = () => {
    const { attendCall, call, callAccepted } = useContext(SocketContext);

    return (
        <>
            {
                call.isReceivingCall && !callAccepted &&
                    (
                        <div style = {{display: "flex", justifyContent: "space-around"}}>
                            <h1>{call?.name} is calling:</h1>
                            <Button variant="contained" color="primary" onClick={attendCall}>
                                Answer
                            </Button>
                        </div>
                    )
            }
        </>
    )
}

export default Notifications
