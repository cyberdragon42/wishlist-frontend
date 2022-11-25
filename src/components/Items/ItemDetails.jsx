import React,{useState, useEffect} from 'react'
import { useParams, NavLink } from "react-router-dom";
import {urls} from "../../utils/urls"
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

function ItemDetails(){
    let params = useParams();
    let [item, setItem] = useState(null);
    useEffect(() => {
        axios.get(urls.getItemUrl(params.id))
        .then(response=>{
            setItem(response.data);
        })
    }, [])
    if(item===null){
        return <Spinner />
    }
    return(
        <div>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.price+" "+item.currencyCode}</p>
            <p>{item.categoryName}</p>
        </div>
    )
}

export default ItemDetails;