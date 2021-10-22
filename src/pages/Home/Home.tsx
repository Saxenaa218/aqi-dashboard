import React, { useEffect } from 'react';
import HistoryChart from '../../components/HistoryChart';
import Table from '../../components/Table';
import { TableItemTypes } from '../../components/Table/types';
import { useSocket } from '../../hooks';
import "./Home.scss";

const Home: React.FC = () => {
    const socket = useSocket();
    // socket.on('message', handleSocketDataChange)
    const handleSocketDataChange = (response: TableItemTypes[]) => {
        console.log(response);
    }
    useEffect(() => {
        console.log('socket changed')
    }, [socket])
    return (
        <div className="home">
            <header>
                <h2>Live City wise AQI Chart (Air Quality Index)</h2>
            </header>
            <main className="body">
                <Table />
                <HistoryChart />
            </main>
        </div>
    )
}

export default Home;