import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,
  } from "@chakra-ui/react"

function Error404() {
    return (
        <div>
            <Alert status="error">
                <AlertIcon />
                <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
                <AlertDescription>This page was not found.</AlertDescription>
                <CloseButton position="absolute" right="8px" top="8px" />
            </Alert>

        </div>
    )
}

export default Error404
