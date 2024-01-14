import React from 'react'
import { Grid, styled} from '@mui/material'

import { imageURL } from '../../constants/data';

const MidSectionImage = styled(Grid)`
    background: #ffffff;
    padding: 0px 5px;
`;

const MidSection = () => {
  return (
    <Grid lg={12} md={12} sm={12} xs={12} container style={{marginTop: 10}}>
        {
            imageURL.map(image => (
                <MidSectionImage lg={4} md={4} sm={12} xs={12}>
                    <img src={image} alt="banner" style = {{width: '100%' }} />
                </MidSectionImage>
            ))
        }
    </Grid>
  )
}

export default MidSection
