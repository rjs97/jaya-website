import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import AvatarGroup from '@material-ui/lab/AvatarGroup'
import Grid from '@material-ui/core/Grid'
import Header from '../components/Header'
import IconButton from '@material-ui/core/IconButton'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GetAppIcon from '@material-ui/icons/GetApp'
import Fab from '@material-ui/core/Fab'

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    textAlign: 'left',
    color: '#696969',
  },
  header: {
    fontStyle: 'italic',
    textTransform: 'uppercase',
    marginTop: 10,
    marginBottom: 10
  },
  grid: {
    maxWidth: '60vw'
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    margin: 'auto',
    [(theme.breakpoints.down('sm'))]: {
      width: theme.spacing(2),
      height: theme.spacing(2),
    }
  },
  avatar_small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    margin: 'auto',
    [(theme.breakpoints.down('sm'))]: {
      width: theme.spacing(2),
      height: theme.spacing(2),
    }
  },
  title: {
    fontSize: 16,
    margin: 'auto',
    [(theme.breakpoints.down('sm'))]: {
      fontSize: 10
    }
  },
  date: {
    fontSize: 10,
    marginTop: 5,
    marginBottom: 10,
    [(theme.breakpoints.down('sm'))]: {
      fontSize: 8,
      marginBottom: 0
    }
  },
  subtitle: {
    fontSize: 12,
    margin: 'auto',
    [(theme.breakpoints.down('sm'))]: {
      fontSize: 8
    }
  },
  extendedIcon: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    marginRight: 5
  },
  additional: {
    fontSize: 14,
    [(theme.breakpoints.down('sm'))]: {
      fontSize: 10,
    }
  },
  button: {
    marginLeft: 10,
    [(theme.breakpoints.down('sm'))]: {
      marginLeft: 0,
    }
  },
  fab: {
    position: 'fixed',
    fontSize: 10,
    right: 20,
    bottom: 20
  }
}))

const Resume = () => {
  const classes = useStyles()

  return (
    <main className={classes.content}>
    <Header />
    <Grid container
      direction='column'
      alignItems='flex-start'
      justify='flex-start'
      spacing={1}
      className={classes.grid}>

    <Grid item container direction='row' alignItems='center'>
      <Grid item>
      <h6 className={classes.header}>
        Recent Experience
      </h6>
      </Grid>
      <Grid item>
      <IconButton className={classes.button} href='https://www.linkedin.com/in/radhikajaya/' target='_blank'>
        <LinkedInIcon />
      </IconButton>
      </Grid>
      <Grid item>
        <Fab variant="extended" size='small' className={classes.fab} href={require('../img/Jaya-CV.pdf')} target='_blank'>
          <GetAppIcon className={classes.extendedIcon} />
          <div className={classes.additional}>DOWNLOAD CV</div>
        </Fab>
      </Grid>
    </Grid>
    <Grid item container direction='row' spacing={2} alignItems='center'>
      <Grid item xs={1}><Avatar alt='Yup' src={require('../img/logos/yup.png')} className={classes.avatar} /></Grid>
      <Grid item xs={11}>
        <p className={classes.title}>
          <b>Full Stack Software Engineer</b>, Yup.io, <i>New York, NY</i>
        </p>
        <p className={classes.date}>
          Jan 2020 - present
        </p>
        <p className={classes.subtitle}>
          Blockchain startup building a social consensus layer for the internet
          that rewards users for their opinions
        </p>
      </Grid>
    </Grid>
    <Grid item container direction='row' spacing={2} alignItems='center'>
      <Grid item xs={1}><Avatar alt='Google' src={require('../img/logos/google.jpg')} className={classes.avatar} /></Grid>
      <Grid item xs={11}>
        <p className={classes.title}>
          <b>Software Engineering Intern</b>, Google, Data Liberation Front, <i>Chicago, IL</i>
        </p>
        <p className={classes.date}>
          June 2019 - Aug 2019
        </p>
        <p className={classes.subtitle}>
          Engineered a project to expand user control of personal data, enabling
          users to export data from Google products to an external location of
          their choice (i.e. OneDrive, Dropbox, Box)
        </p>
      </Grid>
    </Grid>
    <Grid item container direction='row' alignItems='center'>
      <p className={classes.additional}>
        <i>Additional experience at:</i>
      </p>
      <AvatarGroup style={{ marginLeft: 10 }}>
        <Avatar alt='Columbia' src={require('../img/logos/columbia-cs.png')} className={classes.avatar_small} />
        <Avatar alt='Google' src={require('../img/logos/google.jpg')} className={classes.avatar_small} />
        <Avatar alt='Microsoft' src={require('../img/logos/microsoft.png')} className={classes.avatar_small} />
      </AvatarGroup>
    </Grid>
    <Grid item>
      <h6 className={classes.header}>
        Education
      </h6>
    </Grid>
    <Grid item container direction='row' spacing={2} alignItems='center'>
      <Grid item xs={1}><Avatar alt='Barnard' src={require('../img/logos/barnard.jpg')} className={classes.avatar} /></Grid>
      <Grid item xs={11}>
        <p className={classes.title}>
          Barnard College, Columbia University (2017-2020)
        </p>
        <p className={classes.date} style={{ marginBottom: 5 }}>
          Sept 2017 - May 2020
        </p>
        <p className={classes.subtitle}>
          B.A. in Computer Science & English (Creative Writing concentration)
        </p>
        <p className={classes.subtitle}>
          <i>cum laude</i>
        </p>
      </Grid>
    </Grid>
    <Grid item container direction='row' spacing={2} alignItems='center'>
      <Grid item xs={1}><Avatar alt='US' src={require('../img/logos/us.png')} className={classes.avatar} /></Grid>
      <Grid item xs={11}>
        <p className={classes.title}>
          Universidad de Sevilla (Spring 2019)
        </p>
        <p className={classes.date} style={{ marginBottom: 5 }}>
          Spring 2019
        </p>
        <p className={classes.subtitle}>
          Spanish language courses taken in Gender Studies, Psychology, Art, and Literature
        </p>
      </Grid>
    </Grid>
    <Grid item container direction='row' spacing={2} alignItems='center'>
      <Grid item xs={1}><Avatar alt='UW' src={require('../img/logos/uw.png')} className={classes.avatar} /></Grid>
      <Grid item xs={11}>
        <p className={classes.title}>
          University of Washington
        </p>
        <p className={classes.date} style={{ marginBottom: 5 }}>
          Sept 2016 - June 2017
        </p>
        <p className={classes.subtitle}>
          CSE Direct Admit, Honors Program
        </p>
      </Grid>
    </Grid>

    <Grid item>
      <h6 className={classes.header}>
        Additional Experience
      </h6>
    </Grid>
    <Grid item container direction='row' spacing={2} alignItems='center'>
      <Grid item xs={1}><Avatar alt='WBAR' src={require('../img/logos/immortalize_greta.png')} className={classes.avatar} /></Grid>
      <Grid item xs={11}>
        <p className={classes.title}>
          WBAR, Barnard College Radio
        </p>
        <p className={classes.date}>
          General Manager: Sept 2019 - May 2020 <br/>
          Webmaster: Sept 2017 - May 2019
        </p>
      </Grid>
    </Grid>
    <Grid item container direction='row' spacing={2} alignItems='center'>
      <Grid item xs={1}><Avatar alt='CIEE' src={require('../img/logos/ciee.png')} className={classes.avatar} /></Grid>
      <Grid item xs={11}>
        <p className={classes.title}>
          CIEE Seville
        </p>
        <p className={classes.date}>
          Cultural & Language Assistant: Feb 2019 - May 2019
        </p>
      </Grid>
    </Grid>
    <Grid item container direction='row' spacing={2} alignItems='center'>
      <Grid item xs={1}><Avatar alt='CBA' src={require('../img/logos/cba.jpg')} className={classes.avatar} /></Grid>
      <Grid item xs={11}>
        <p className={classes.title}>
          Columbia Bartending Agency
        </p>
        <p className={classes.date}>
          Distinguished Bartender: Nov 2017 - May 2020
        </p>
      </Grid>
    </Grid>
    </Grid>
    </main>
  )
}

export default Resume
