import React from 'react';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-red-600"></div>
        </div>
    );
};

export default Spinner;
