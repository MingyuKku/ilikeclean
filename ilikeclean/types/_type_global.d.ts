declare global {
	interface Window {
		gtag: any
	}

	interface Date {
		format: (text: string) => string
	}

	interface String {
		zf(len: number): string
	}

	interface Number {
		zf(len: number): string
	}

	interface Array<T> {
		ClassList(): string
	}
}

export {}
