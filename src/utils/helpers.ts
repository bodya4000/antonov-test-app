export function padZero(num: number): string {
	return num < 10 ? `0${num}` : `${num}`;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => void>(callback: T, delay = 300) {
	let timer: number | null = null;

	const debouncedFunction = (...args: Parameters<T>) => {
		if (timer) {
			clearTimeout(timer);
		}
		timer = window.setTimeout(() => callback(...args), delay);
	};

	debouncedFunction.cancel = () => {
		if (timer) {
			clearTimeout(timer);
		}
	};

	return debouncedFunction;
}
