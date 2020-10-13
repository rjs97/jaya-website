import React from 'react'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Projects from '../components/Projects'

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
    <main className={classes.content}>
    <Grid container direction='column' className={classes.container} spacing={3}>
    <Grid item container direction='row' spacing={3} justify='center'>
      <Grid item>
        <Link href={'/resume'} color='inherit' className={classes.nav}>resume/cv</Link>
      </Grid>
      <Grid item>
        <Link href={'/contact'} color='inherit' className={classes.nav}>about/contact</Link>
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
