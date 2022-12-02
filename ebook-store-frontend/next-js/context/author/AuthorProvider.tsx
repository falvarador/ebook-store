import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { urlConfigurationApi } from '../../api';
import { Author } from '../../model/author/Author';
import { useSnackbar } from 'notistack'
import { AuthorContext,AuthorReducer } from './';

export interface AuthorState{
authors:Author[];
isAddOrUpdate:boolean;
}

const Author_INITIAL_STATE:AuthorState={
authors:[],
isAddOrUpdate:false,
}

/*
https://notistack.com/api-reference
https://notistack.com/features/basic
*/

export const AuthorProvider:FC<PropsWithChildren> = ({children}) => {

const [state, dispatch] = useReducer(AuthorReducer, Author_INITIAL_STATE)
const {enqueueSnackbar} = useSnackbar();

useEffect(() => {
    LoadAuthors();
}, [])


const addNewOrUpdateAuthor =async(author: Author)=>{

     try {
      console.log(author.correlationId);
    if(author.correlationId!==''){
        await urlConfigurationApi.put(`/authors?correlationId=${author.correlationId}`,
                      {
                        name: author.name,
                       surname: author.surname,
                       birthday:author.birthday.toJSON()
                       });

   dispatch({type:'[Author] - UpdateAuthor',payload:author})

     enqueueSnackbar('Author Updated',{
      variant:'success',
      autoHideDuration:2000,
      anchorOrigin:{
          vertical:'top',
          horizontal:'right'
      }

  })
    }
    else
    {
        await urlConfigurationApi.post(`/authors`,
                      {
                        name: author.name,
                       surname: author.surname,
                       birthday:author.birthday.toJSON()
                       });

   dispatch({type:'[Author] - AddAuthor',payload:author})

     enqueueSnackbar('Author Created',{
      variant:'success',
      autoHideDuration:2000,
      anchorOrigin:{
          vertical:'top',
          horizontal:'right'
      }

  })
    }

    await LoadAuthors();
    
  } catch (error) {
    console.log(`There is an error trying to load the authors ${error}`);

   enqueueSnackbar(`There is an error trying to load the authors ${error}`,{
      variant:'error',
      autoHideDuration:3000,
      anchorOrigin:{
          vertical:'top',
          horizontal:'right'
      }

  })
}
}


const  deleteAuthor= async(id:string)=>{


  //There is an error trying to load an author

     try {
    const {data} = await urlConfigurationApi.delete(`/authors?correlationId=${id}`);

    console.log('Data',data);
   dispatch({type:'[Author] - DeleteAuthor',payload:id})

     enqueueSnackbar('Author deleted',{
      variant:'success',
      autoHideDuration:2000,
      anchorOrigin:{
          vertical:'top',
          horizontal:'right'
      }

  })
    
  } catch (error) {
    console.log(`There is an error trying to load the authors ${error}`);

   enqueueSnackbar(`There is an error trying to load the authors ${error}`,{
      variant:'error',
      autoHideDuration:3000,
      anchorOrigin:{
          vertical:'top',
          horizontal:'right'
      }

  })
}
}

const LoadAuthors =async()=>{

  try {
    const {data} = await urlConfigurationApi.get<Author[]>('/authors');

    dispatch({type:'[Author] - LoadAuthors',payload:data})
    
  } catch (error) {
    console.log(`There is an error trying to load the authors ${error}`);
  }
}


return (
<AuthorContext.Provider value={{
 ...state,
 addNewOrUpdateAuthor,
  deleteAuthor

}}>
{children}
</AuthorContext.Provider>
 )
};