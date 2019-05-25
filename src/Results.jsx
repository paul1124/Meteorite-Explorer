import React from 'react';
import {Table} from 'antd';
import './Results.scss';

export default function Results({ items }) {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name Type',
            dataIndex: 'nametype',
            key: 'nametype',
        },
        {
            title: 'Rec Class',
            dataIndex: 'recclass',
            key: 'recclass',
        },
        {
            title: 'Mass (g)',
            dataIndex: 'mass',
            key: 'mass',
        },
        {
            title: 'Fall',
            dataIndex: 'fall',
            key: 'fall',
        },
        {
            title: 'Year',
            dataIndex: 'year',
            key: 'year',
            render: text => {
                return text ? text.slice(0, 4) : '';
            }
        },
        {
            title: 'Latitude',
            dataIndex: 'geolocation.latitude' || '',
            key: 'latitude',
        },
        {
            title: 'Longitude',
            dataIndex: 'geolocation.longitude' || '',
            key: 'longitude',
        },
      ];
    return (
        <div className="results">
            <div className="results-container">
                <Table 
                    dataSource={items} 
                    columns={columns}
                    rowClassName="results-row"
                    key={columns.key}
                />
            </div>
        </div>
    )
}