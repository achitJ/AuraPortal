import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    header: {
      borderRadius: '0 0 10px 10px',
      position: 'fixed',
      top: 0,
      left: 10,
      right: 10,
      zIndex: 1,
    },

    inner: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
  
      [theme.fn.smallerThan('sm')]: {
        justifyContent: 'flex-start',
      },
    },
  
    links: {
      height: '100%',
  
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
  
    social: {
      width: rem(260),
  
      [theme.fn.smallerThan('sm')]: {
        width: 'auto',
        marginLeft: 'auto',
      },
    },
  
    burger: {
      marginRight: theme.spacing.md,
  
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },  
  }));