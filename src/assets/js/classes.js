class Ajax{
	constructor(method = '', url = '', param = null, repeat = false){
		this.method = method;
		this.url = url;
		this.sentData = param;
		this.repeat = repeat;
		this.receivedData = null;
	};
	
	/**
	 * @description
	 * 	Async Function will send a request, either GET or POST
	 * 	and will return the result or execute a passed function
	 * @param {Function} func 
	 * 	default value null
	 */
	async send(func = null){
		try {
			if(this.method === 'POST'){
				if(typeof this.sentData === 'object' && this.sendData !== null){
					const request = await fetch(this.url, {
						method: this.method,
						headers: {'Content-Type':'application/json'},
						body: JSON.stringify(this.sentData)
					});
					this.receivedData = await request.json();
					if(func){
						func(this.receivedData);
					}else{
						return this.receivedData;
					}
				}else{
					throw new Error({
						status: false,
						message: 'Error in parameters'
					});
				}
			}else{
				const request = await fetch(this.url);
				this.receivedData = await request.json();
				if(func){
					func(this.receivedData);
				}else{
					return this.receivedData;
				}
			}
		}catch(error){
			console.warn(error);
		}
	}
}

export default Ajax;