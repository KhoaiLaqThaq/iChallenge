
export interface IExam {
    id: Number;
    title: String;
    topic: String;
    accountId: Number;
    createdDate: String;
    
    eSetup: any;
    questions?: any;
}
