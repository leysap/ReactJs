import React from 'react'

export const Loader = () => {
    return (
        <div>
            <div className="d-flex align-items-center">
                <strong>Loading...</strong>
                <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
            </div>
        </div>
    )
}
