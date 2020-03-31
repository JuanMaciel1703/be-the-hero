import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Notification(props) {
    const { show, message, type, onClose } = props;
    const [toastId, setToastId] = useState('TOAST')

    const options = { onClose, toastId };

    if (!show || toast.isActive(toastId)) {
        return <div></div>
    }

    switch(type) {
        case 'success':
            toast.info(message, options);
            break;
        case 'error':
            toast.error(message, options);
            break;
        case 'warn':
            toast.warn(message, options);
            break;
        default:
            toast.info(message, options);
            break;
    }

    return (
        <ToastContainer />
    )
}