import  {useContext} from 'react'
import NextLink from 'next/link';

import { Grid, IconButton, Tooltip, Link } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import { DataGrid, GridColDef, GridValueGetterParams,GridRenderCellParams } from '@mui/x-data-grid';
import { AuthorContext } from '../../context/author';


const columns: GridColDef[] = [
     //{ field: 'correlationId',hideable:false},
     { field: 'name', headerName: 'Name', width: 300 },
     { field: 'surname', headerName: 'Surname', width: 300 },
     { field: 'birthday', headerName: 'Birthday', width: 200,
          renderCell: (params: GridRenderCellParams<Date>) => (
      <strong>
        {params.value}
      </strong>
    )  
    },
    {
        field: 'actions',
        headerName: 'Actions',
        width: 200,
        sortable: false,
        renderCell: (params: GridValueGetterParams) => {
            return (
                <>
                <Tooltip title='Delete' placement='top'>
    	        <IconButton color='error' >
                    <DeleteOutlineOutlinedIcon/>
                </IconButton>
                    
                </Tooltip>
                <Tooltip title='update' placement='top'>
    	  
                <NextLink href={`/orders/${ params.row.correlationId }`} passHref>
                  <IconButton color='secondary' >
                    <ListAltOutlinedIcon/>
                </IconButton>
               </NextLink>
                    
                </Tooltip>

                
                </>
                
              /* <NextLink href={`/orders/${ params.row.correlationId }`} passHref>
                    <Link underline='always'>
                       Delete
                    </Link>
               </NextLink>*/
            )
        }
    }
];

export const AuthorList = () => {

    const {authors, deleteAuthor} = useContext(AuthorContext)

    const deleteAuthorHandler = (correlationId:string)=>{
            

    }

  return (
        <Grid container>
            <Grid item xs={12} sx={{ height:650, width: '100%' }}>
                <DataGrid 
                    rows={ authors }
                    columns={ columns }
                    getRowId={(row: any) =>  row.correlationId}
                    pageSize={ 10 }
                    rowsPerPageOptions={ [10] }
                />

            </Grid>
        </Grid>
  )
}
