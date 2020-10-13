import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Dialog from '@material-ui/core/Dialog'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
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
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  title: {
    backgroundColor: '#e6e6fa',
    '& .MuiTypography-h6': {
      fontFamily: 'montserrat'
    }
  },
  content: {
    backgroundColor: '#e6e6fa'
  },
  code: {
    marginLeft: 'auto',
    fontFamily: 'montserrat',
    textTransform: 'lowercase'
  }
}))

export default function TechDialog ({ label, isOpen, handleOpen }) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  const projectCards = () => {
    const projects = ENV_VAR.projects.filter((p) => p.tech.find((t) => t.name === label))
    return projects.map((project) => {
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
            <h5>{project.name}</h5>
            <p className={classes.description}>
              {project.description}
            </p>
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
    <Dialog onClose={handleOpen} open={open} scroll='paper'>
    <DialogTitle className={classes.title}>
      {label} Projects
      <IconButton aria-label="close" className={classes.closeButton} onClick={handleOpen}>
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    <DialogContent className={classes.content}>
      <Grid container direction='column' spacing={3} alignItems='center' className={classes.grid} >
      {projectCards()}
      </Grid>
    </DialogContent>
    </Dialog>
  )
}
