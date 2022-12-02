import React, { FC, useContext } from 'react'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

import { Box, Grid } from '@mui/material'
import { Controller, useForm } from "react-hook-form";
import styles from './FormAuthor.module.css';
import { Author } from '../../model/author/Author';
import { AuthorContext } from '../../context/author';
import { useRouter } from 'next/router';


interface Props{
  author:Author;
  isNew:boolean;
}
export const FormAuthor:FC<Props> = ({author, isNew}) => {
   const router= useRouter();
   const {authors,isAddOrUpdate, addNewOrUpdateAuthor} = useContext(AuthorContext)
    const { register, handleSubmit,control, formState: { errors } } = useForm({defaultValues:{author}});
    const onSubmit =({author}:any)=>{
        addNewOrUpdateAuthor({
            ...author,
           birthday: new Date(author.birthday),
           correlationId:author.correlationId ===undefined?'':author.correlationId,
        })

        if(isAddOrUpdate)
        {
            router.push('/author');
        }
    }
  return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={12} md={6}  sx={{ mt:2 }} >
                <Box className={styles.container} >
                      <form  onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="name">Name</label>
                        <input className={styles.inputForm} {...register("author.name", { required: true })} 
                                 aria-invalid={errors.author?.name ? "true" : "false"} 
                            />
                            <Box>
                             {errors.author?.name?.type === 'required' && <p role="alert" className={styles.alert}>Name is required</p>}
                            </Box>
                        <label htmlFor="surname">SurName</label>
                        <input className={styles.inputForm} {...register("author.surname", { required: true })} 
                                 aria-invalid={errors.author?.surname ? "true" : "false"} 
                            />
                            <Box>
                                {errors.author?.surname ?.type === 'required' && <p role="alert" className={styles.alert}>SureName is required</p>}
                            </Box>
                           <Box>
                             <label htmlFor="birthday">Birthday</label>
                             </Box>
                               <Box>
                                    <Controller
                                    
                                        name="author.birthday"
                                        control={control}
                                       // defaultValue={ new Date()}
                                        render={({ field, ...props }) => {
                                        return (
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                    className={styles.inputForm}
                                                    value={field.value}
                                                    onChange={(date) => {
                                                field.onChange(date)
                                            }}
                                                    renderInput={(params) => <TextField sx={{backgroundColor:'white'}} {...params} />}
                                                />
                                                </LocalizationProvider>
                                        );
                                        }}
                                    />
                            </Box>
                            
                            {
                                isNew
                                ?
                                 <button type="submit"  className={styles.buttonSubmit}>Create</button>
                                 :
                                   <button type="submit"  className={styles.buttonSubmit}>Update</button>
                            }
                       
                   </form>
                </Box>
            </Grid>
        </Grid>
  )
}

