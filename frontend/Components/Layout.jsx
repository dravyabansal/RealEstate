import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>98 Acre</title>
      </Head>
      <Box maxWidth="1280px" m="auto">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
}
