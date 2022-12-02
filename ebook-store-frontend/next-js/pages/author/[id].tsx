import React from 'react'
import { Layout } from '../../components/layouts'
import { FormAuthor } from '../../components/ui'

interface Props{
  author:Author;
  isNew:boolean;
}

const author:NextPage<Props> = ({author, isNew}) => {
   return (
    <Layout title={'Author'}>
        <FormAuthor author={author} isNew={isNew} />
    </Layout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps, NextPage } from 'next'
import { GetAuthor } from '../../model/author/dbAuthor'
import { Author } from '../../model/author/Author'

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const {id = ''} = params as {id:string};
  let isNew = false;
  const author  = await  GetAuthor(id); // your fetch function here 
     isNew= !author && true 
  return {
    props: {
      author,
      isNew,
    }
  }
}
export default author