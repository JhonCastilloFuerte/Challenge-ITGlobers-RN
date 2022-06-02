import axios from 'axios';
import { setResources, startLoading } from './resourcesSlice';


interface Params{
  page: number;
  cuantity: number;
}


export const getResources = ({page = 1, cuantity = 3}: Params) =>{
  return async (dispatch: any) =>{
    try {
      const resp = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=${cuantity}`);
      if(resp.status == 200){
        const {data} = resp;
        dispatch(startLoading());
        dispatch(setResources(data));
      }
    } catch (error) {
      throw error
    }
  }
}