import React, { useState } from 'react'
import { useTheme, makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import { useLocation } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog'

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 27,
    paddingBottom: 20,
    color: '#50a',
    [(theme.breakpoints.down('sm'))]: {
      fontSize: 20
    }
  },
  nav: {
    fontSize: 18,
    padding: 8
  },
  logoIcon: {
    position: 'fixed',
    top: 50,
    [(theme.breakpoints.down('sm'))]: {
      top: 10,
      left: 10
    }
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
  menu: {
    position: 'fixed',
    left: 20,
    bottom: '50%',
    color: '#696969',
    backgroundColor: '#e6e6fa'
  },
  dialog: {
    margin: 20,
  }
}))

export default function Header () {
  const classes = useStyles()
  const path = useLocation()
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
      <Link href={'/'} className={classes.title}>jaya subrahmanyan</Link>
      </div>
      { mobile ?
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
              <Grid item><Link href={'/projects'} color={(path.pathname === '/projects') ? 'secondary' : 'inherit'} className={classes.nav}>projects</Link></Grid>
              <Grid item><Link href={'/resume'} color={(path.pathname === '/resume') ? 'secondary' : 'inherit'} className={classes.nav}>resume/cv</Link></Grid>
              <Grid item><Link href={'/contact'} color={(path.pathname === '/contact') ? 'secondary' : 'inherit'} className={classes.nav}>about/contact</Link></Grid>
            </Grid>
          </Paper>
          </Dialog>
        </div>
      :
      <div>
        <Paper elevation={0} className={classes.menu}>
          <IconButton
            className={classes.logoIcon}
          >
            <Link href={'/'}><img src={require('../img/site_logo.png')} height={'40vh'} alt={'site logo'}/></Link>
          </IconButton>
          <Grid container direction='column' spacing={5}>
            <Grid item><Link href={'/projects'} color={(path.pathname === '/projects') ? 'secondary' : 'inherit'} className={classes.nav}>projects</Link></Grid>
            <Grid item><Link href={'/resume'} color={(path.pathname === '/resume') ? 'secondary' : 'inherit'} className={classes.nav}>resume/cv</Link></Grid>
            <Grid item><Link href={'/contact'} color={(path.pathname === '/contact') ? 'secondary' : 'inherit'} className={classes.nav}>about/contact</Link></Grid>
          </Grid>
        </Paper>
      </div>
      }
    </div>
  )
}
