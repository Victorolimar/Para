import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@mui/material';
import { Person as PersonIcon } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    backgroundColor: '#f5f5f5',
  },
  icon: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
    fontSize: 48,
  },
}));

const ClientCard = ({ totalClients }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <PersonIcon className={classes.icon} />
      <CardContent>
        <Typography variant="h5" component="div">
          Clientes
        </Typography>
        <Typography variant="h3" component="div">
          {totalClients}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ClientCard;
