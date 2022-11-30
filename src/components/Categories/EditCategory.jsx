import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import CategoryForm from './CategoryForm'
import { Spinner } from 'react-bootstrap'
import { wishlistApi } from '../../utils/wishlistApi'

function EditCategory() {
    let params = useParams();
    let [defaultValues, setDefaultValues] = useState(null);

    useEffect(() => {
        wishlistApi.getCategory(params.id)
            .then(response => {
                setDefaultValues(response.data);
            })
    }, [])

    let handleEdit = (values) => {
        wishlistApi.editCategory(values)
            .then(response => {

            })
    }

    if (defaultValues === null) {
        return <Spinner />
    }
    return (
        <div>
            <CategoryForm values={defaultValues}
                handleSubmit={handleEdit} />
        </div>
    )
}

export default EditCategory;