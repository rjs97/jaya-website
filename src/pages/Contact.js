import React from 'react'
import Grid from '@material-ui/core/Grid'
import Header from '../components/Header'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    textAlign: 'left',
    color: '#696969',
  },
  grid: {
    maxWidth: '60vw'
  },
  contact: {
    fontSize: 14,
    [(theme.breakpoints.down('sm'))]: {
      fontSize: 10
    }
  },
  text: {
    fontSize: 16,
    [(theme.breakpoints.down('sm'))]: {
      fontSize: 13
    }
  }
}))


export default function Contact () {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <Header />
      <Grid container className={classes.grid}>
        <img src={require('../img/portrait.jpg')} alt='jaya subrahmanyan' style={{ objectFit: 'cover', maxHeight: '30vw' }}/>
        <p className={classes.text}>
        Jaya (Radhika) Subrahmanyan is a writer and software engineer. She holds a BA in
        Computer Science and English (with a concentration in creative writing)
        from Barnard College, Columbia University. She currently currently working
        as a software engineer for Yup.io. In her free time she enjoys reading,
        bouldering & playing guitar.
        </p>
        <p className={classes.contact}>
        To get in touch, email her at <i>radhika.jaya4 - [at] - gmail - [dot] - com </i>
        </p>
      </Grid>
    </main>
  )
}
