import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { StateTypes } from '../../redux'; 
import { TableItemTypes } from '../Table/types';
import { getTimeForChart } from '../../utils';
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
        const allTimeStamps = [];
        for (const each of Object.keys(historyObject)) {
            allTimeStamps.push(...historyObject[each].map((itm: TableItemTypes) => getTimeForChart(itm.timeStamp)));
        }
        setCategories(allTimeStamps);
    }, [historyObject])

    const createSeries = () => {
        const baseStructure = {
            type: "spline",
            color: 'grey',
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
        tooltip: {
            borderColor: '#2c3e50'
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: true
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