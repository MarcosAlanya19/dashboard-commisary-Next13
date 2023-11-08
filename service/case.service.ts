
import { config } from '@/config';
import axios from 'axios';

export const getCases = async () => {
  try {
    const response = await axios.get<CaseEntity[]>(`${config.API_BACKEND}/api/case`);
    return response.data;
  } catch (error: any) {
    console.log(error.message);

    if (error.response && error.response.data) {
      return error.response.data.error;
    } else {
      throw error;
    }
  }
};

export const postCase = async (caseData: CaseDTO) => {
  try {
    const response = await axios.post(`${config.API_BACKEND}/api/case`, caseData);
    return response.data;
  } catch (error: any) {
    console.log(error.message);
    return error.response.data.error;
  }
};
