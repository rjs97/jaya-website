import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import Link from '@material-ui/core/Link'
import TechDialog from './TechDialog'
import GitHubIcon from '@material-ui/icons/GitHub'
import ENV_VAR from './env_var'

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
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14
  },
  date: {
    marginTop: 5,
    fontSize: 12
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
  floatingChips: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    position: 'fixed',
    right: 5,
    bottom: 5,
    maxWidth: '30vw',
    [(theme.breakpoints.down('sm'))]: {
      display: 'none'
    }
  },
  code: {
    marginLeft: 'auto',
    fontFamily: 'montserrat',
    textTransform: 'lowercase'
  }
}))

export default function Projects () {
  const classes = useStyles()
  const [label, setLabel] = useState('')
  const [open, setOpen] = useState(false)

  const renderDialog = (e) => {
    setLabel(e.target.innerText)
    setOpen(true)
  }

  const handleOpen = () => {
    setOpen(!open)
  }

  const projectCards = () => {
    return ENV_VAR.projects.map((project) => {
      return (
        <Grid item key={project.name}>
        <Card className={classes.card}>
          <Link target='_blank' href={project.link}>
          <CardMedia
            component='img'
            height='100%'
            image={require(`../img/${project.img}`)}
          />
          </Link>
          <CardContent>
            <Link href={project.link} color='inherit' className={classes.name}>{project.name}</Link>
            <p className={classes.date}>
              {project.date}
            </p>
            <p className={classes.description}>
              {project.description}
            </p>
            <div className={classes.chips}>
            {project.tech.map((t) => {
              let style = { fontFamily: 'raleway' }
              if (t.type === 'api') {
                return <Chip size='small'
                  style={{ backgroundColor: 'lightgrey', ...style }} label={t.name} key={t.name} onClick={renderDialog}
                  avatar={<Avatar alt='Spotify' src={require(`../img/logos/${t.img}`)} />} />
              }
              // TODO: clean this up
              if (t.type === 'js') {
                style = { backgroundColor: 'powderblue', ...style }
              } else if (t.type === 'other') {
                style = { backgroundColor: 'palegreen', ...style }
              } else if (t.type === 'cloud') {
                style = { backgroundColor: 'moccasin', ...style }
              } else if (t.type === 'db') {
                style = { backgroundColor: 'lightpink', ...style }
              }
              return <Chip size='small' style={style} label={t.name} key={t.name} onClick={renderDialog} />
            })}
            </div>
            <div style={{display: 'flex'}}>
            { project.code ?
              <Button size="small" color="primary" target='_blank' href={project.code}
                className={classes.code} endIcon={<GitHubIcon/>}>
                code
              </Button>
              : null }
            </div>
          </CardContent>
        </Card>
        </Grid>
      )
    })
  }

  return (
    <Grid container direction='column' spacing={3} alignItems='center' className={classes.grid} >
      {projectCards()}
      <TechDialog label={label} isOpen={open} handleOpen={handleOpen}/>
      <div className={classes.floatingChips}>
        <Chip size='small' style={{ backgroundColor: 'powderblue', fontFamily: 'raleway' }} label='JavaScript' />
        <Chip size='small' style={{ backgroundColor: 'lightgrey', fontFamily: 'raleway' }} label='API' />
        <Chip size='small' style={{ backgroundColor: 'moccasin', fontFamily: 'raleway' }} label='Cloud' />
        <Chip size='small' style={{ backgroundColor: 'lightpink', fontFamily: 'raleway' }} label='Database' />
        <Chip size='small' style={{ backgroundColor: 'palegreen', fontFamily: 'raleway' }} label='Other' />
      </div>
    </Grid>
  )
}
