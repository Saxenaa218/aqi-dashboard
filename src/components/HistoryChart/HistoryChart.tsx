import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { StateTypes } from '../../redux'; 
import { TableItemTypes } from '../Table/types';
import "./HistoryChart.scss";

const HistoryChart: React.FC = () => {
    const historyObject: any = useSelector((state: StateTypes) => state.historyObject);
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
    const [series, setSeries] = useState<any>([]);
    const [categories, setCategories] = useState<any>([]);

    useEffect(() => {
        setSeries(createSeries());
    }, [historyObject])
    
    useEffect(() => {
        const totalAqis = [];
        for (const each of Object.keys(historyObject)) {
            totalAqis.push(...historyObject[each].map((itm: TableItemTypes) => itm.timeStamp));
        }
        setCategories(totalAqis);
    }, [])

    const createSeries = () => {
        const baseStructure = {
            type: "line",
            color: 'blue',
            dashStyle: 'Solid',
            showInLegend: true,
            marker: {
                radius: 2
            }
        }
        return Object.keys(historyObject).map((itm: string) => {
            return {
                ...baseStructure,
                name: itm,
                data: historyObject[itm].map((itm: TableItemTypes) => itm.aqi)
            }
        })
    }

    type GetOptionsTypes = () => Highcharts.Options

    const getOptions: GetOptionsTypes = () => ({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Cities with AQI history'
        },
        xAxis: {
            categories: categories
        },
        yAxis: {
            title: {
                text: 'AQI (Air quality index)'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: series,
        credits: {
            enabled: false
        }
    })
    return (
        <section className="history-chart">
            <HighchartsReact
                highcharts={Highcharts}
                options={getOptions()}
                ref={chartComponentRef}
            />
        </section>
    )
}

export default HistoryChart;