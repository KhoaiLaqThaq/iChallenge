// TODO: Định dạng giới hạn chuỗi ký tự
export function formatLimitCharacters(str: string, numChars: number): string {
	if (str && str.length >= numChars) {
		return str.slice(0, numChars).concat("...");
	}
	return str;
};

// TODO: định dạng số nhiều
export function formatTimes(time: any, unit: String) {
	if (time > 1) {
		return unit.concat('s')
	}
	return unit
}
