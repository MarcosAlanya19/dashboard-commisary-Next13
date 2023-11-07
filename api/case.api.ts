import { config } from '@/config';
import axios from 'axios';

export const getCases = async () => {
  try {
    const response = await axios.get(`${config.API_BACKEND}/api/case`);
    return response.data;
  } catch (error: any) {
    console.log(error.message);
    return error.response.data.error;
  }
};
