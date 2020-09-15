import React from 'react'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Projects from '../components/Projects'

const useStyles = makeStyles(() => ({
  container: {
    position: 'absolute',
    top: '30%',
    color: '#696969'
  },
  content: {
    overlow: 'scroll'
  },
  title: {
    fontSize: 22,
  },
  nav: {
    fontSize: 15,
  },
  hidden: {
    fontSize: 12,
    position: 'fixed',
    color: 'white',
    left: 0,
    bottom: 0
  }
}))

const Home = () => {
  const classes = useStyles()

  return (
    <Grid container direction='column' className={classes.container} spacing={3}>
    <Grid item>
      <Link href={'/'} color='inherit' className={classes.title}>hello my name is jaya this is my website</Link>
    </Grid>
    <Grid item container direction='row' spacing={3} justify='center'>
      <Grid item>
        <Link href={'/resume'} color='inherit' className={classes.nav}>my resume/cv</Link>
      </Grid>
      <Grid item>
        <Link href={'/contact'} color='inherit' className={classes.nav}>about/contact</Link>
      </Grid>
    </Grid>
    <Grid item container justify='center'>
      <Link href={'/projects'} color='inherit' className={classes.nav}>here are some projects i've worked on:</Link>
      <Projects />
    </Grid>
    <Link href={'/xD'} color='inherit' className={classes.hidden}>memes lol</Link>
    </Grid>
  );
}

export default Home
