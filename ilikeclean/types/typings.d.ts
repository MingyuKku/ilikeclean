interface Window {
	IMP: {
		init: (merchant_uid: string) => void
		request_pay: (data: any, callback: any) => void
	}
}
