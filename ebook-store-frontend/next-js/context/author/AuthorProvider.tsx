import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { urlConfigurationApi } from '../../api';
import { Author } from '../../model/author/Author';
import { AuthorContext,AuthorReducer } from './';

export interface AuthorState{
authors:Author[];
}

const Author_INITIAL_STATE:AuthorState={
authors:[],
}


export const AuthorProvider:FC<PropsWithChildren> = ({children}) => {

const [state, dispatch] = useReducer(AuthorReducer, Author_INITIAL_STATE)

useEffect(() => {
    LoadAuthors();
}, [])


const addNewOrUpdateAuthor =(author: Author)=>{

}


const  deleteAuthor= (id:string)=>{

  //There is an error trying to load an author
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