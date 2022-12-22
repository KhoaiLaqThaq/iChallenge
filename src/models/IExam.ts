
export interface IExam {
    id: Number;
    title: String;
    topic?: String;
    accountId: Number;
    createdDate?: any;
    totalMember: Number;
    
    eSetup?: any;
    questions?: any;
    accountExam?: {};
    accountExams?: []
}
