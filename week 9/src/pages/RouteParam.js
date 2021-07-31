import React from 'react'

import { useParams } from 'react-router-dom'

export default function RouteParam() {
    const {id} = useParams();
    return (
        <div>
            <h1>Nike Shoes {id}</h1>
        </div>
    )
}
