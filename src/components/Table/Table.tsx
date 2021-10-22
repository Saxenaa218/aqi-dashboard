import React from 'react';
import { useSelector } from "react-redux";
import { TableItemTypes } from './types';
import { StateTypes } from '../../redux';
import TableRow from './components/TableRow';
import "./Table.scss";

const tableHeadings: string[] = [
    "City", "Current AQI", "Last Updated"
];

const Table: React.FC = () => {
    const historyObject: any = useSelector((state: StateTypes) => state.historyObject);
    const historyArr = Object.keys(historyObject);
    return (
        <section className="table">
            <table>
                <thead>
                    <tr>
                        {tableHeadings.map((itm: string) => <th key={itm}>{itm}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {historyArr.map((eachItm: string) => {
                        const historyItemLastIndex: number = historyObject[eachItm].length-1;
                        const itm: TableItemTypes = historyObject[eachItm][historyItemLastIndex];
                        return <TableRow itm={itm} key={`${itm.city}-${itm.aqi}`} />
                    })}
                </tbody>
            </table>
        </section>
    )
}

export default Table;