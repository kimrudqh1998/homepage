import React from 'react';
import axios from 'axios';
import useAsync from './useAsync';
import { hasPointerEvents } from '@testing-library/user-event/dist/utils';

async function getUsers(){
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    );
        return response.data;
}

function Users(){
    const [state,refetch] = useAsync(getUsers,[]);
    hasPointerEvents


}