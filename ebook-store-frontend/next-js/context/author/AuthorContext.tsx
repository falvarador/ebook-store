
import { createContext } from 'react';
import { Author } from '../../model/author/Author';

interface  ContextProps{
     authors:Author[];
     isAddOrUpdate:boolean;
     addNewOrUpdateAuthor:(author: Author)=> void;
     deleteAuthor:(id: string)=>void;
    

}
export const AuthorContext = createContext({


} as ContextProps);