import React from 'react'
import { AppBar, Button, Toolbar, Typography, Box } from '@mui/material'

const Header = () => {
    return (
        <>
            <AppBar position='sticky'>
                <Toolbar>
                    <Typography>
                        BlogApp
                    </Typography>
                    <Box display={'flex'} marginLeft={'auto'}>
                        <Button sx={{ color: 'white', margin: 1 }}>Login</Button>
                        <Button sx={{ color: 'white', margin: 1 }}>Login</Button>
                        <Button sx={{ color: 'white', margin: 1 }}>Login</Button>

                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header