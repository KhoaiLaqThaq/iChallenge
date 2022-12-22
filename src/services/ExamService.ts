import api from '@/services/common/api'
import CONFIG from '@/config'

// Lấy 3 exams chưa bắt đầu gần nhất
export function getTop3MyExam(cid: String) {
    let URL = `${CONFIG.ENDPOINT}/${CONFIG.API_ENDPOINT}/exam/top3-myexams/${cid}`
    return api.get(URL);
}

// lấy tối đa 3 exams đã tham gia gần nhất
export function getTop3RecentExam(cid: String) {
    let URL = `${CONFIG.API_ENDPOINT}/${CONFIG.API_ENDPOINT}/exam/top3-recents/${cid}`
    return api.get(URL);
}

// lấy tối đa 5 exam được gợi ý
export function getTop5SuggestExam(cid: String) {
    let URL = `${CONFIG.API_ENDPOINT}/${CONFIG.API_ENDPOINT}/exam/top5-suggest/${cid}`
    return api.get(URL);
}
