import React from 'react';

import Box from '@mui/material/Box';

import bodyStyles from '../body.module.css';

const sectionHeader = {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '50px',
    letterSpacing: '1px',
    color: '#202020',
    fontFamily: 'Galgine',
    marginBottom: '10px',
}

const Header = ({ content, underline, sx = {} }) => {
    return <>
        <Box sx={{ ...sectionHeader, ...sx }}>
            {content}
        </Box>
        {underline && <hr className={bodyStyles.underline} />}
    </>
}

export default Header;