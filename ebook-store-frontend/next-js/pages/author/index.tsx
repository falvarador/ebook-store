import React from 'react'
import { Layout } from '../../components/layouts'
import { AuthorList } from '../../components/ui'

const index = () => {
  return (
    <Layout title={'List of Authors'}>
        <AuthorList/>
    </Layout>
  )
}

export default index