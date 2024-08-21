"use client"
import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, useLoadScript, StandaloneSearchBox } from '@react-google-maps/api';

const libraries = ['places'];

const MapComponent = ({ errors,setPlaces }) => {
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
        }
    };

    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading Maps</div>;

    return (
        <>
            <StandaloneSearchBox
                onLoad={onLoad}
                onPlacesChanged={onPlacesChanged}
            >
                <input
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    className={`w-full h-14 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${errors.address ? 'border-red-500' : 'focus:ring-primary'}`}
                />
            </StandaloneSearchBox>
        </>
    );
};

export default MapComponent;
