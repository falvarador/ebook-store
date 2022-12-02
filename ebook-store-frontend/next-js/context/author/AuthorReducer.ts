import { Author } from '../../model/author/Author';
import { AuthorState } from './';


type AuthorActionType=
|{type:'[Author] - LoadAuthors', payload:Author[]}
|{type:'[Author] - AddAuthor', payload:Author}
|{type:'[Author] - UpdateAuthor', payload:Author}
|{type:'[Author] - DeleteAuthor', payload:string}

export const AuthorReducer =(state:AuthorState, action:AuthorActionType): AuthorState=>{

switch (action.type) {
    case '[Author] - LoadAuthors':
       return {
            ...state,
              authors:[...action.payload]
            }
    case '[Author] - AddAuthor':
       return {
            ...state.authors,
            isAddOrUpdate:true,
              authors:[...state.authors,action.payload]
            }
    case '[Author] - UpdateAuthor':
       return {
            ...state,
             isAddOrUpdate:true,
              authors: state.authors.map(author=>{
                  if(author.correlationId === action.payload.correlationId){
                      author.birthday = action.payload.birthday;
                      author.name = action.payload.name;
                      author.surname = action.payload.surname;
                  }

                  return author;

              })
            }
    case '[Author] - DeleteAuthor':
       return {
            ...state,
            authors:state.authors.filter(author=>author.correlationId !==action.payload)
          }

    default:

  return state;
}
}