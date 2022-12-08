import axios from 'axios'
import CONFIG from '@/config'

export function getPostList() {
    const URL = `${CONFIG.ENDPOINT}/posts`;
    return axios.get(URL);
}
