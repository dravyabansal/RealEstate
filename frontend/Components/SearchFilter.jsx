import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
} from "@chakra-ui/react";

import { filterData, getFilterValues } from "../utils/filterData";
import { baseUrl, fetchApi } from "../utils/fetchApi";

const SearchFilter = () => {
  const [filters, setFilter] = useState(filterData);
  const router = useRouter();
  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;
    const values = getFilterValues(filterValues);
    values.forEach((item) => {
      query[item.name] = item.value;
    });
    router.push({ pathname: path, query });
  };

  return (
    <Flex bg="gray.400" p="4" justifyContent="center" flexWrap="wrap">
      {filters &&
        filters.map((filter) => (
          <Box key={filter.queryName}>
            <Select
              placeholder={filter.placeholder}
              w="fit-content"
              p="2"
              onChange={(e) =>
                searchProperties({ [filter.queryName]: e.target.value })
              }
            >
              {filter?.items?.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.name}
                </option>
              ))}
            </Select>
          </Box>
        ))}
    </Flex>
  );
};

export default SearchFilter;
