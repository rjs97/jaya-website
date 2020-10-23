import React, { useState } from 'react'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Projects from '../components/Projects'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Dialog from '@material-ui/core/Dialog'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    alignItems: 'center',
    color: '#696969',
  },
  container: {
    marginTop: '30%',
  },
  title: {
    fontSize: 22,
    color: '#50a',
  },
  homeNav: {
    fontSize: 15,
  },
  hidden: {
    fontSize: 12,
    position: 'fixed',
    color: 'white',
    left: 0,
    bottom: 0
  },
  nav: {
    fontSize: 18,
    padding: 8
  },
  menuIcon: {
    position: 'fixed',
    top: 20,
    left: 20,
    [(theme.breakpoints.down('sm'))]: {
      top: 10,
      left: 10
    }
  },
  dialog: {
    margin: 20,
  }
}))

const Home = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <main className={classes.content}>
    <div>
      <IconButton
        onClick={handleOpen}
        className={classes.menuIcon}
        edge='start'
      >
        <MenuIcon />
      </IconButton>
      <Dialog onClose={handleOpen} open={open}>
      <Paper elevation={0} className={classes.dialog}>
        <Grid container direction='column' spacing={5} alignItems='center'>
          <Grid item><Link href={'/projects'} color='inherit' className={classes.nav}>projects</Link></Grid>
          <Grid item><Link href={'/resume'} color='inherit' className={classes.nav}>resume/cv</Link></Grid>
          <Grid item><Link href={'/contact'} color='inherit' className={classes.nav}>about/contact</Link></Grid>
        </Grid>
      </Paper>
      </Dialog>
    </div>
    <Grid container direction='column' className={classes.container} spacing={3}>
    <Grid item container direction='row' spacing={3} justify='center'>
      <Grid item>
        <Link href={'/resume'} color='inherit' className={classes.homeNav}>resume/cv</Link>
      </Grid>
      <Grid item>
        <Link href={'/contact'} color='inherit' className={classes.homeNav}>about/contact</Link>
      </Grid>
    </Grid>
    <Grid item>
      <Link href={'/'} color='primary' className={classes.title}>hello my name is jaya</Link>
    </Grid>
    <Grid item container justify='center'>
      <Link href={'/projects'} style={{ color: 'black' }} className={classes.nav}>here are some projects i've worked on:</Link>
      <Projects />
    </Grid>
    {/* implement this w firebase cloud storage */}
    <Link href={'/xD'} color='inherit' className={classes.hidden}>memes lol</Link>
    </Grid>
    </main>
  )
}

export default Home
