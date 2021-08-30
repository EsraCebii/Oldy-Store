import {Box, Image, Button} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import styles from "./styles.module.css";

import { useBasket } from "../../contexts/BasketContext";



function Card({item}) {
    const { addToBasket, items} = useBasket();

    
    const findBasketItem = items.find((basket_item)=>
    basket_item._id === item._id );


    return (
        <Box borderWidth="1px" borderRadius="lg"  maxW="sm" overflow="hidden" p="3" >

            <Link to={`/product/${item._id}`}>
                <Image src={item.photos[0]} alt="product" loading="lazy" maxHeight="250" />
                <Box p="6">
                 

                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" className={styles.font1} >
                        {item.title}
                    </Box>
                    <Box className={styles.font2}>{item.price} TL</Box>

                </Box>

            </Link>
            <Button colorScheme={findBasketItem ? "blue" : "orange"} variant="solid" onClick={()=>addToBasket(item, findBasketItem)} className={styles.font2}>
                {
                    findBasketItem ? "Remote from basket " : "Add to basket"
                }
            </Button>

        </Box>

    )
}
export default Card;
