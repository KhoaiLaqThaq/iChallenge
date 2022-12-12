
enum TimeTypeEnum {
    Second= 'second',
    Minute= 'minute',
    Hour= 'hour',
    Day= 'day'
};

export function convertTimeUp(type: String) {
    switch (type) {
        case TimeTypeEnum.Second:
            return "label.time.second"
        case TimeTypeEnum.Minute:
            return "label.time.minute"
        case TimeTypeEnum.Hour:
            return "label.time.hour"
        case TimeTypeEnum.Day:
            return "label.time.day"
        default:
            return "label.time.none"
    }
}
