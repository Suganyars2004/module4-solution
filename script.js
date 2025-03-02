var names=['Yaakov',"John","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"]
for(let i=0;i<names.length;i++){
	let v=names[i];
	if(v[0]=='j'||v[0]=='J'){
       speakbye(v);		
	}
	else{
	    speakhello(v);
	}
}