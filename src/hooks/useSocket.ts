import { useState, useEffect } from 'react';

export const useSocket = () => {
    const [socket, setSocket] = useState<WebSocket>();
    useEffect(() => {
        const newSocket = new WebSocket("wss://city-ws.herokuapp.com");
        setSocket(newSocket);
        return () => newSocket.close();
    }, [])
    return socket;
}