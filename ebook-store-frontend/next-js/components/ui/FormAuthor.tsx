import React from 'react'
import { Box, Grid } from '@mui/material'
import { useForm } from "react-hook-form";
import styles from './FormAuthor.module.css';

export const FormAuthor = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit =(data:any)=>{
        console.log({data})
    }
  return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={12} md={6}  sx={{ mt:2 }} >
                <Box className={styles.container} >
                      <form  onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="name">Name</label>
                        <input className={styles.inputForm} {...register("name", { required: true })} 
                                 aria-invalid={errors.name ? "true" : "false"} 
                            />
                            <Box>
                             {errors.name?.type === 'required' && <p role="alert" className={styles.alert}>Name is required</p>}
                            </Box>
                        <label htmlFor="surename">SureName</label>
                        <input className={styles.inputForm} {...register("surename", { required: true })} 
                                 aria-invalid={errors.surename ? "true" : "false"} 
                            />
                            <Box>
                                {errors.surename?.type === 'required' && <p role="alert" className={styles.alert}>SureName is required</p>}
                            </Box>
                        
                        <input type="submit"  className={styles.buttonSubmit}/>
                   </form>
                </Box>
            </Grid>
        </Grid>
  )
}

