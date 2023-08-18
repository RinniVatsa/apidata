
import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const SecondPageComponent1 = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 600 },
  ];

  const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const postsPerPage = 5;
  const startIndex = (page - 1) * postsPerPage;
  const paginatedPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={paginatedPosts} columns={columns} />
      </div>
      <Stack spacing={2} justifyContent="center" mt={2}>
        <Pagination
          count={Math.ceil(posts.length / postsPerPage)}
          page={page}
          onChange={handlePageChange}
        />
      </Stack>
    </div>
  );
};

export default SecondPageComponent1;
