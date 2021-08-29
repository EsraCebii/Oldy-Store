import {Box, Image, Button} from "@chakra-ui/react";
import {Link} from "react-router-dom";

import { useBasket } from "../../contexts/BasketContext";



function Card({item}) {
    const { addToBasket, items} = useBasket();

    
    const findBasketItem = items.find((basket_item)=>
    basket_item._id === item._id );


    return (
        <Box borderWidth="1px" borderRadius="lj" overflow="hidden" p="3">

            <Link to={`/product/${item._id}`}>
                <Image src="http://lorempixel.com/400/200" alt="product" loading="lazy" />
                <Box p="6">
                    {/* <Box d="plex" alignItems="baseline" >
                        12/12/2021
                    </Box> */}

                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" >
                        {item.title}
                    </Box>
                    <Box>{item.price} TL</Box>

                </Box>

            </Link>
            <Button colorScheme={findBasketItem ? "blue" : "orange"} variant="solid" onClick={()=>addToBasket(item, findBasketItem)}>
                {
                    findBasketItem ? "Remote from basket " : "Add to basket"
                }
            </Button>

        </Box>

    )
}
export default Card;
