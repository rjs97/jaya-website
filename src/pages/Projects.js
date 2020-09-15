import React from 'react'
import Header from '../components/Header'
import Projects from '../components/Projects'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    textAlign: 'left',
    color: '#696969',
  },
}))


export default function Contact () {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <Header />
      <Projects />
    </main>
  )
}
