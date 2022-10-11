import React from "react";
import Link  from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
  Text,
  Avatar,
} from "@chakra-ui/react";
import { FaBars, FcMenu, FcHome, FcAbout } from "react-icons/fa";
import { FiKey } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";

const Navbar = () => (
  <>
    <Flex>
      <Box fontSize="3xl" color="blue.400" fontWeight="bold">
        <Link href="/" passHref />
        {" RealTor"}
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FcMenu />}
            variant="outlined"
            color="red.400"
          >
            <MenuList>
              <Link href="/" passHref>
                <MenuItem icon={<FcHome />}>Home</MenuItem>
              </Link>
              <Link href="/search" passHref>
                <MenuItem icon={<BsSearch />}>Search</MenuItem>
              </Link>
              <Link href="/search?purpose=for-sale" passHref>
                <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
              </Link>
              <Link href="/search?purpose=for-rent" passHref>
                <MenuItem icon={<FiKey />}>Rent</MenuItem>
              </Link>
            </MenuList>
          </MenuButton>
        </Menu>
      </Box>
    </Flex>
  </>
);

export default Navbar;