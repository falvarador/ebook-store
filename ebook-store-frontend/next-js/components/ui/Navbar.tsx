import NextLink from 'next/link';
import React from "react";
import { AppBar, Box, Link, Toolbar, Typography, Button } from "@mui/material";
export const Navbar = () => {
  return (
  <AppBar>
    <Toolbar>
        <NextLink href='/' passHref legacyBehavior>
          <Link display='flex' alignItems='center' underline='none' color='white'>
            <Typography variant='h6'>Book |</Typography>
            <Typography sx={{m1:0.5}}>Store</Typography>
          </Link>
        </NextLink>
        <Box flex={1}/>

        {/*Si quiero quitar el menu agregar al box sx={{{xs:'none',sm:'block}'}} */}
        <Box>
          <NextLink href='/author' passHref legacyBehavior>
          <Link underline='none' color='white' sx={{mr:1}}>
                Authors
          </Link>
        </NextLink>
        
         <NextLink href='/books' passHref legacyBehavior>
          <Link underline='none' color='white' sx={{mr:1}}>
                Books
          </Link>
        </NextLink>
        </Box>
        <Box flex={1}/>
    </Toolbar>
  </AppBar>
  );
};
