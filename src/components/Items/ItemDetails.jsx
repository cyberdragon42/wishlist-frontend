import React, { useState, useEffect } from 'react'
import { useParams} from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

import { wishlistApi } from '../../utils/wishlistApi';

function ItemDetails() {
    let params = useParams();
    let [item, setItem] = useState(null);
    useEffect(() => {
        wishlistApi.getItem(params.id)
            .then(response => {
                setItem(response.data);
            })
    }, [])
    if (item === null) {
        return <Spinner />
    }
    return (
        <div>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.price + " " + item.currencyCode}</p>
            <p>{item.categoryName}</p>
        </div>
    )
}

export default ItemDetails;