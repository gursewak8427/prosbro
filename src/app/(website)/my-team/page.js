"use client"
import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, useLoadScript, StandaloneSearchBox } from '@react-google-maps/api';

const libraries = ['places'];

const MapComponent = () => {
    const [stateCity, setStateCity] = useState('');
    const [places, setPlaces] = useState([]);
    const searchBoxRef = useRef(null);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyC4xDqx5yDdrRzTGbAakYuRBjjf0wxpvYs',
        libraries,
    });

    const onLoad = (ref) => {
        searchBoxRef.current = ref;
    };

    const onPlacesChanged = () => {
        const places = searchBoxRef.current.getPlaces();
        if (places && places.length > 0) {
            setPlaces(places);
            setStateCity(places[0].formatted_address);
        }
    };

    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading Maps</div>;

    return (
        <div>
            <StandaloneSearchBox
                onLoad={onLoad}
                onPlacesChanged={onPlacesChanged}
            >
                <input
                    type="text"
                    placeholder="Enter state or city"
                    style={{ boxSizing: 'border-box', border: '1px solid transparent', width: '240px', height: '32px', padding: '0 12px', borderRadius: '3px', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)', fontSize: '14px', outline: 'none', textOverflow: 'ellipses' }}
                />
            </StandaloneSearchBox>
            <div>
                <h2>Selected Place:</h2>
                <p>{stateCity}</p>
            </div>
        </div>
    );
};

export default MapComponent;
