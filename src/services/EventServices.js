import axios from 'axios';

const API_CALL = 'https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records';

const EventService = {
    fetchAll(search) {
        return axios
            .get(`${API_CALL}?search=${search}&sort=title`)
            .then((response) => response.data.records)
            .catch(errorHandler);
    }
};

const errorHandler = (err) => {
    console.log(err);
};

export default EventService;