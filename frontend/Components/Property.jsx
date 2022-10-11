import React from "react";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath, FaCar } from "react-icons/fa";
import { BsGridFill, BsList } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import Link from "next/link";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    baths,
    title,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => (
  <Link href={`/property/${externalID}`} passHref>
    {/* {title} */}

    <Flex
      flexWrap="wrap"
      w="420px"
      p="5"
      paddingTop="0"
      justifyContent="flex-start"
      cursor="pointer"
    >
      <Box>
        <Image
          width={400}
          height={260}
          src={coverPhoto ? coverPhoto.url : ""}
          alt="next js"
        />
      </Box>
      <Box w="full">
        <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box paddingRight="3" color="green.400">
              {isVerified && <GoVerified />}
            </Box>
            <Text>
              AED {millify(price)}
              {rentFrequency && `/${rentFrequency}`}
            </Text>
          </Flex>
          <Box >
            <Avatar size='sm' src={agency?.logo?.url} />
          </Box>
        </Flex>

        <Flex alignItems="center" p="1" justifyContent="space-between">
          {rooms} <FaBed />| {baths} <FaBath />| {millify(area)} sqft{" "}
          <BsGridFill />
        </Flex>

        <Text fontSize="lg">
          {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </Text>
      </Box>
    </Flex>
  </Link>
);
export default Property;
