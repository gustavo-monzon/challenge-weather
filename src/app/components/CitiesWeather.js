import React from 'react';

import locations from '../helper/locations'

const CitiesWeather = props => {
    return (
        <div style={styles.locationsWrapper}>
            {locations.map(location => {
                const { id, img, loc } = location
                return (
                    <div key={id}>
                        <img style={styles.locationButton} src={img} onClick={() => props.getWeatherToday(loc)} />
                    </div>
                )
            })}
        </div>
    )
}

const styles = {
    locationsWrapper: {
        margin: '16px',
        display: 'flex',
        justifyContent: 'space-around',
    },
    locationButton: {
        height: '160px',
        width: '160px',
        borderRadius: '12px',
        cursor: 'pointer'
    }
}

export default CitiesWeather;
