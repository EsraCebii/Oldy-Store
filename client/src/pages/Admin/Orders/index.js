import React from 'react';

import { useQuery } from "react-query";
import { fetchOrders } from "../../../api";

import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Text } from "@chakra-ui/react"

function Orders() {
    const { isLoading, isError, data, error } = useQuery("admin:orders", fetchOrders);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error {error.message}</div>
    }
    console.log(data)

    return (
        <div>
            <Text fontSize="2xl" padding={5} >Orders</Text>
            
            <Table variant="simple">
                    <TableCaption>Orders</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>User</Th>
                            <Th>Address</Th>
                            <Th>Orders</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            data.map((item) => (
                                <Tr key={item._id}>
                                    <Td>{item.user.email}</Td>
                                    <Td>{item.adress}</Td>
                                    <Td isNumeric>{item.items.map((item,i)=>(
                                        <Text key={i}>{item.title}</Text>
                                    ))}</Td>
                                </Tr>

                            ))
                        }
                    </Tbody>


            </Table>

        </div>
    )
}

export default Orders
