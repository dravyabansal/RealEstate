import { useState } from 'react';
import router, { useRouter } from 'next/router';
import Image from 'next/image';
import { Flex, Box, Text, Button, Input, InputGroup, InputLeftElement, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import SearchFilter from '../Components/SearchFilter';
import Property from '../Components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';


const Search = ({ properties }) => {
    const [searchFilter, setSearchFilter] = useState(false);
    const router = useRouter();

    return (

        <Box>
            <Flex
                cursor='pointer'
                bg="gray.100"
                borderBottom="1px"
                p="2"
                fontWeight="black"
                fontSize="lg"
                justifyContent="center"
                alignItems="center"
                onClick={() => setSearchFilter((prevFilter) => !prevFilter)}
            >
                <Text>
                    Search Property By Filters
                </Text>
                <Icon paddingLeft="2 " w='7' as={BsFilter} />
            </Flex>
            {searchFilter && <SearchFilter />}
            <Text fontSize="2xl" p="4" fontWeight="bold">
                Properties {router.query.purpose}
            </Text>
            <Flex>
                {properties &&
                    properties.map((property) => <Property Property={property} key={property.id} />)}
            </Flex>
            {properties &&
                properties.length === 0 && (
                    <Flex >
                        <Text fontSize="2xl" marginTop="5">np Results</Text>
                    </Flex>
                )}
        </Box>

    )
}





export async function getServerSideProps() {
    const purpose = query.purpose || 'for-rent'
    const rentFrequency = query.rentFrequency || 'monthly'
    const minPrice = query.minPrice || '0'
    const maxPrice = query.maxPrice || '100000000'
    const roomMin = query.roomMin || '0'
    const bathMin = query.bathMin || '0'
    const sort = query.sort || 'price-asc'
    const areaMax = query.areaMax || '100000000'
    const locationExternalIDs = query.locationExternalIDs || '5002'
    const categoryExternalID = query.categoryExternalIDs || '4'

    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathMin=${bathMin}&rentFrequency=${rentFrequency}&priceMin=${priceMin}&pricemax=${priceMax}&roomMin=${roomMin}&sort=${sort}&areaMax=${areaMax}`);
    return {
        props: {
            properties: data?.hits,
        },
    };
}
export default Search;