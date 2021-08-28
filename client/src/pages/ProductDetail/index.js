import React from 'react';
import { useQuery } from 'react-query';
import {useParams} from "react-router-dom";
import{ fecthProduct} from "../../api";
import {Box, Text, Button} from "@chakra-ui/react";
import ImageGallery from 'react-image-gallery';


function ProductDetail() {

    const { product_id } = useParams();

    const {isLoading, isError, data}= useQuery(["product", product_id], ()=> fecthProduct(product_id))

    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>Error.</div>
    }

    const images =data.photos.map((url)=>({original :url}))
    return (
        <div>
            <Button colorScheme="orange" >
                Add to basket
            </Button>

            <Text as="h2" fontSize="2xl">
                {data.title}
            </Text>
            <p>
                {data.description}
            </p>
            <Box margin="10">
                <ImageGallery items={images} />

            </Box>
        </div>
    )
}

export default ProductDetail
