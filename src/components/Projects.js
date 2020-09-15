import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: 20,
    textAlign: 'center'
  },
  card: {
    maxWidth: '40vw',
    [(theme.breakpoints.down('sm'))]: {
      maxWidth: '100vw'
    }
  },
  description: {
    fontSize: 14
  },
  chips: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    marginBottom: 10
  },
}))

export default function Projects () {
  const classes = useStyles()

  return (
    <Grid container direction='column' spacing={3} alignItems='center' className={classes.grid} >
      <Grid item>
        <Card className={classes.card}>
          <CardMedia
            component='img'
            height='100%'
            image={require('../img/musicmap.png')}
          />
          <CardContent>
            <h5>MusicMap</h5>
            <p className={classes.description}>
              Web app and extension to collect and display data about musical artists'
              influence and collaboration.
            </p>
            <div className={classes.chips}>
              <Chip size='small' color='primary' label="D3.js"/>
              <Chip size='small' color='primary' label="React.js"/>
              <Chip size='small' color='primary' label="Node.js"/>
              <Chip size='small' avatar={<Avatar alt='Spotify' src={require('../img/logos/spotify.png')} />} label="Spotify API"/>
              <Chip size='small' label="MongoDB"/>
              <Chip size='small' label="Google Firebase"/>
            </div>
            <Button size="small" color="primary" target='_blank' href="#">
              live link
            </Button>
            <Button size="small" color="primary" target='_blank' href="https://github.com/rjs97/musicmap">
              code
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.card}>
          <CardMedia
            component='img'
            height='100%'
            image={require('../img/ciara.png')}
          />
          <CardContent>
            <h5>Artist Portfolio</h5>
            <p className={classes.description}>
              Portfolio website exhibiting the artist's paintings and past experience,
              which I designed, coded, and hosted from scratch
            </p>
            <div className={classes.chips}>
              <Chip size='small' color='primary' label="React.js"/>
              <Chip size='small' color='primary' label="Node.js"/>
              <Chip size='small' label="Google Firebase"/>
            </div>
            <Button size="small" color="primary" target='_blank' href="https://www.ciarapost.com">
              live link
            </Button>
            <Button size="small" color="primary" target='_blank' href="https://github.com/rjs97/ciara-portfolio">
              code
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.card}>
          <CardMedia
            component='img'
            height='100%'
            image={require('../img/covid.png')}
          />
          <CardContent>
            <h5>Music Moods & COVID-19</h5>
            <p className={classes.description}>
              Interactive data visualization exploring the relationship
              between early COVID-19 pandemic events and music streaming trends
            </p>
            <div className={classes.chips}>
              <Chip size='small' color='primary' label="D3.js"/>
              <Chip size='small' avatar={<Avatar alt='Spotify' src={require('../img/logos/spotify.png')} />} label="Spotify API"/>
            </div>
            <Button size="small" color="primary" target='_blank' href="https://observablehq.com/@rjs97/music-moods-covid-19">
              live link & code
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.card}>
          <CardMedia
            component='img'
            height='100%'
            image={require('../img/listplay.png')}
          />
          <CardContent>
            <h5>ListPlay</h5>
            <p className={classes.description}>
              First JavaScript project, creating a feature for radio station
              DJs to log their playlists from Spotify and identify frequently played artists
            </p>
            <div className={classes.chips}>
              <Chip size='small' color='primary' label="Bootstrap"/>
              <Chip size='small' color='primary' label="jQuery"/>
              <Chip size='small' label="Flask"/>
              <Chip size='small' label="Digital Ocean"/>
            </div>
            <Button size="small" color="primary" target='_blank' href="https://github.com/rjs97/ListPlay">
              code
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
