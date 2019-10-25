import { format } from 'date-fns';
import { inputDateFormat } from './constants';
import * as axios from 'axios';

const getHeroes = async function() {
  try {
    const response = await axios.get('api/heroes.json');

    const heroes = response.data.map(h => {
      h.originDate = format(h.originDate, inputDateFormat);
      return h;
    });
    return heroes;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const data = {
  getHeroes,
};
