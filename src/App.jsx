import { useState } from 'react'
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Grid, IconButton, TextField } from '@mui/material';
import { Container } from '@mui/system';

function App() {
  const [url, setUrl] = useState('')
  const [play, setPlay] = useState(false);
  return (
    <Container>
      <Grid container spacing={2} m={2} pt={4} justifyContent="center" alignItems="center">
        <Grid item xs={9}>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={11}>
        <TextField
            color='error'
            fullWidth
            type='url'
            onChange={(e)=>setUrl(e.target.value)}
            value={url}
            label="Digite  A Url"
            variant='filled'
          />
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={()=>setPlay(true)} color='error' size='large' sx={{backgroundColor: "error"}} disabled={url === ''? true : false}>
            <LiveTvIcon/>
          </IconButton>
        </Grid>
          </Grid>
        </Grid>
       
        <Grid item xs={9}>
          {play&&(<Plyr source={{type: "video",  sources: [{src: url}]}} />)} 
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
