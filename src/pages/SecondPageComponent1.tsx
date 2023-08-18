import { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { useNavigate} from 'react-router-dom';
const SecondPageComponent1 = () => {
  const [data, setData] = useState<GridRowsProp>([]);
  const navigate = useNavigate();

  const redirectToSecondPage = () => {
    navigate('/department-list');
  };

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 600 },
  ];

  return (
    <div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={data} columns={columns} />
      </div>
      <br/>
      <button onClick={redirectToSecondPage}>Go to  Second Page of the Application[Component 2]</button>
    </div>
  );
};

export default SecondPageComponent1;
