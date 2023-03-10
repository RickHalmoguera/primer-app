import { format } from 'date-fns'
import { Box, Flex, Text, Spacer, Tag, Button, Icon } from '@chakra-ui/react'
import { FaCalendarAlt } from "react-icons/fa";

export function LaunchItem(launch){
    
    return (
        <Box  
            bg='gray.100' 
            p={4} 
            m={4} 
            borderRadius='lg'>
            <Flex>
                <Text fontSize='2x1'>
                Mission <strong>{launch.launch.name}</strong> ({new Date(launch.launch.date_local).getFullYear()})
                </Text>
                <Spacer />
                <Tag p={2} colorScheme={launch.launch.success? 'green' : 'red'}>
                {launch.launch.success? 'Success' : 'Failed'}
                </Tag>
            </Flex>
            <Flex align='center'>
                <Icon as={FaCalendarAlt} color='gray.500'/>
                <Text fontSize='sm' ml={1} color='gray.500'>
                { format (new Date(launch.launch.date_local), 'dd/MM/yyyy') }
                </Text>
            </Flex>
            <Button mt={3} colorScheme='purple'>
                More Details
            </Button>
        </Box>
    )
}