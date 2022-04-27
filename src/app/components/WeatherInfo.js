import React from 'react';

const weatherInfo = props => {
    return (
        <div style={styles.container}>
            {
                props.todayWeather.error &&
                <div style={styles.error}>
                    <plaintext>{props.todayWeather.error}</plaintext>
                </div>
            }
            {
                props.todayWeather.temperature && !props.todayWeather.error ?
                    <>
                        <div style={styles.info}>
                            <p>
                                Lugar: {props.todayWeather.city}, {props.todayWeather.country}
                            </p>
                            <p>
                                Temperatura: {props.todayWeather.temperature} C°, {props.todayWeather.description}
                            </p>
                            <p>
                                Humedad: {props.todayWeather.humidity}
                            </p>
                            <p>
                                ¿Está para asado?: {props.todayWeather.humanDescription}
                            </p>
                        </div>
                        <div style={styles.buttonWrapper}>
                            <button style={styles.extendedButton} onClick={props.getExtendedWeather}>Pronóstico extendido</button>
                        </div>
                        {
                            props.extendedWeather.length > 0 &&
                            <div style={styles.extendedWeatherList}>
                                {props.extendedWeather.map((weatherDay, index) => {
                                    const { date, temp_min, temp_max, humidity, description } = weatherDay
                                    return (
                                        <div style={styles.info} key={index}>
                                            <p>
                                                Fecha: {date}
                                            </p>
                                            <p>
                                                Temperatura mínima: {temp_min} C°
                                            </p>
                                            <p>
                                                Temperatura máxima: {temp_max} C°
                                            </p>
                                            <p>
                                                Humedad: {humidity}
                                            </p>
                                            <p>
                                                Estado: {description}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        }
                    </>
                : 
                    <div style={styles.infoEmpty}>
                        <plaintext>Selecciona una ubicación</plaintext>
                    </div>
            }
        </div>
    )
    
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '40px'
    },
    infoEmpty: {
        display: 'flex',
        width: '280px',
        height: '40px',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'white',
        borderRadius: '8px',
    },
    info: {
        padding: '14px',
        backgroundColor: 'white',
        borderRadius: '8px',
    },
    error: {
        display: 'flex',
        width: '280px',
        height: '40px',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: '8px',
        backgroundColor: '#D8000C',
        color: 'white'
    },
    buttonWrapper: {
        marginTop: '20px'
    },
    extendedButton: {
        fontFamily: 'Open Sans',
        fontSize: '16px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        cursor: 'pointer',
        border: '3px',
        boxShadow: '1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px',
    },
    extendedWeatherList: {
        display: 'flex',
        width: '100%',
        flexWrap: 'nowrap',
        marginTop: '40px',
        justifyContent: 'space-around',
    }
}

export default weatherInfo;
