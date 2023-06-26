import React from 'react';
import ChartBar from './ChartBar';
import "./chart.css";


const Chart = (props) => {
    const items = props.items.map(items =>items.value);
    const totalMax = Math.max(...items);

    return (
        <div className='chart'>
            {props.items.map((items) => (
                <ChartBar
                    key={items.label}
                    value={items.value}
                    maxValue={totalMax}
                    label={items.label}
                />
            ))}
        </div>
    )
            }

export default Chart;