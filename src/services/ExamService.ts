import axios from 'axios'
import CONFIG from '@/config'

// Lấy 3 cuộc chơi chưa bắt đầu gần nhất
export function getTop3MyExam(cid: String) {
    let URL = `${CONFIG.ENDPOINT}/${CONFIG.API_ENDPOINT}/exams/my-exams/${cid}`
    return axios.get(URL);
}
