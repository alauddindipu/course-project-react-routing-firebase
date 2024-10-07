import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductsDetails = () => {

    const pDetails = useLoaderData();
    const { id } = useParams();
    console.log(id);
    console.log(pDetails);

    // const {_id,details} = pDetails;

    // console.log(details);

    return (
        <div>
            Products Details
        </div>
    );
}

export default ProductsDetails;
