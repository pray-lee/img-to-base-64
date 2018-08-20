document.addEventListener('readystatechange', (state)=>{
	if(document.readyState === 'complete'){
		let fileDom = document.getElementById('file') || null
		let file = null
		fileDom.onchange = function(e) {
			file = this.files[0]
		}
		let button = document.getElementsByClassName('btn-success')[0]
		button.addEventListener('click', ()=>{
			let next = checkImg(file)
			if(next)
				codeImg(file)
			else
				return false
		}, false)
	}
}, false)

function codeImg(file) {
	if(file){
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function(){
			const baseContent = document.getElementsByClassName('card-text')[0]
			baseContent.innerHTML = String(this.result)	
		}

	}
}

function checkImg(file) {
	if(!file){
		alert('请选择文件。。。')
		return false
	}
	let ext = file.name.split('.')[1].toLowerCase() || ''
	let size = file.size
	if(ext != 'jpg' && ext != 'png' && ext != 'jpeg' && ext != 'gif'){
		alert('只能输入jpg，png，jpeg，gif格式')
		return false
	}
	if(size>(8*1024)){
		alert('图片大小不超过8KB')
		return false
	}
	return true
}