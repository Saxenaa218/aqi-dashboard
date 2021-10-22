import { useState, useEffect } from 'react';
import io from 'socket.io-client';

export const useSocket = () => {
    const [socket, setSocket] = useState();
    useEffect(() => {
        const newSocket: any = io(
            "ws://city-ws.herokuapp.com",
            {
                transports: ['websocket']
            }
        )
        setSocket(newSocket);
        return () => newSocket.close();
    }, [])
    return socket;
}