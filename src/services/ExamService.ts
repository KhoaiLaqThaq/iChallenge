import api from '@/services/common/api'
import CONFIG from '@/config'

class ExamService {
    // Lấy 3 exams chưa bắt đầu gần nhất
    getTop3MyExam(cid: String) {
        let URL = `${CONFIG.API_ENDPOINT}/exam/top3-myexams/${cid}`
        return api.get(URL);
    }

    // lấy tối đa 3 exams đã tham gia gần nhất
    getTop3RecentExam(cid: String) {
        let URL = `${CONFIG.API_ENDPOINT}/exam/top3-recents/${cid}`
        return api.get(URL);
    }

    // lấy tối đa 5 exam được gợi ý
    getTop5SuggestExam(cid: String) {
        let URL = `${CONFIG.API_ENDPOINT}/exam/top5-suggest/${cid}`
        return api.get(URL);
    }

    // Lấy exam theo cid và examId
    getByCidAndExamId(cid: any, examId: any) {
        let URL = `${CONFIG.API_ENDPOINT}/exam/${cid}/${examId}`;
        return api.get(URL);
    }
}

export default new ExamService();