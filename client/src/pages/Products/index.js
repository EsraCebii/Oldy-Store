import React from 'react';
import Card from '../../components/Card';
import { Grid } from "@chakra-ui/react";
import { useQuery } from 'react-query'

function Products() {
    const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log("data",data)
  
    return (
        <div>

            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

            </Grid>
        </div>
    )
}

export default Products
