import { DataGrid, GridToolbar, GridColDef } from '@mui/x-data-grid';

export default function TableUsers() {
   
  const rows = [
      { id: 1, name: 'React'},
      { id: 2, name: 'MUI' },
    ]
  
  const column: GridColDef[] = [
    { 
      field: 'Nome',
      headerClassName: 'bg-neutral-950 dark:bg-neutral-900 text-white text-xl font-bold',
      headerAlign: 'center', 
    }
  ]


  return (
    <div style={{ height: 300, width: '99%' }}>
      <DataGrid className='rounded-xl border-neutral-900 border-4' rows={rows} columns={column} slots={{ toolbar: GridToolbar }} />
    </div>
  );
}