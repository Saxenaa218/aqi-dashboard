import React from 'react';
import { getAQIColorClass } from "../../../../utils";
import { TableRowPropTypes } from "../../types";
import "./TableRow.scss";

const TableRow: React.FC<TableRowPropTypes> = ({ itm }) => {
    return (
        <tr className="table-row">
            <td>{itm.city}</td>
            <td className={getAQIColorClass(itm.aqi)}>{itm.aqi}</td>
            <td>{itm.timeStamp}</td>
        </tr>
    )
}

export default TableRow;