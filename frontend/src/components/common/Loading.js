import React from 'react';
import { MagicSpinner } from 'react-spinners-kit';

export default function Loading(props) {
    return (
        <div style={{
            width: "100%",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '1em'
        }}>
            <MagicSpinner 
                size={props.size || "100"} 
                color={props.color || "#0097e6"} 
                loading={props.loading}
            />
        </div>
    )
}