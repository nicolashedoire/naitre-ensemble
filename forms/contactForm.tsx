import React from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './styles.module.scss';

type Inputs = {
  email: string,
  message: string,
};

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    }
  }));

export default function Contact() {
    
    const classes = useStyles();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit = data => console.log(data);

    return (
      <div>
    <form className={`${classes.root} ${styles.formGrid}`} onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <TextField id="form-email" label="Email" defaultValue="" {...register("email", { required: true })}/>
      <TextField id="form-message" label="Message" defaultValue="" {...register("message", { required: true })}/>
      {errors.message && <span>Le champ message est requis</span>}
      <Button type="submit" variant="outlined" color="default" disableElevation>Prendre contact</Button>
    </form>
      </div>
    );
  }
  