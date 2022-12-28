
export interface IExam {
    id: Number;
    cid: String;
    title: String;
    topic?: String;
    description?: String;
    accountId: Number;
    createdDate?: any;
    totalMember?: Number;
    
    eSetup?: any;
    questions?: any;
    accountExam?: {};
    accountExams?: []
}
