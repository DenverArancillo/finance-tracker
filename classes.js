class Ajax{
	constructor(url){
		this.url = url;
		this.returnData = null;
		this.json = true;
	};

	static json(){
		this.json = true;
		return this;
	}

	// static form data or something forgot
	
	async get(sendData){
		return fetch(this.url).then(res => res.json()).then(res => res);
		
			// await fetch(self.url, {
			// 	method: 'GET',
			// 	headers: self.json ? 
			// 		{'Content-Type':'appication/json'} : {'Content-Type':'application/x-www-form-urlencoded'},
			// 	body: self.json ? 
			// 		JSON.stringify(sendData) : ''
			// }).then(res => res.json()).then(res => res);
	}

	// send(){
	// 	try {
	// 		if(this.method === 'POST'){
	// 			if(typeof this.sentData === 'object' && this.sendData !== null){
	// 				const request = await fetch(this.url, {
	// 					method: this.method,
	// 					headers: {'Content-Type':'application/json'},
	// 					body: JSON.stringify(this.sentData)
	// 				});
	// 				this.receivedData = await request.json();
	// 				if(func){
	// 					func(this.receivedData);
	// 				}else{
	// 					return this.receivedData;
	// 				}
	// 			}else{
	// 				throw new Error({
	// 					status: false,
	// 					message: 'Error in parameters'
	// 				});
	// 			}
	// 		}else{
	// 			const request = await fetch(this.url);
	// 			this.receivedData = await request.json();
	// 			if(func){
	// 				func(this.receivedData);
	// 			}else{
	// 				return this.receivedData;
	// 			}
	// 		}
	// 	}catch(error){
	// 		console.warn(error);
	// 	}
	// }
}

// export default Ajax;