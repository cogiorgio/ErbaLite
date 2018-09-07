var l=0;
function addcart(e){
	var x=document.getElementById("sel"+e);
	document.getElementById("shop").insertAdjacentHTML('afterbegin',"<a id='"+l+"'><input class='sfont' id='"+"prod"+l+"' value='"+ e+" "+ x.options[x.selectedIndex].text+"'> <i class='fa fa-times' onclick='deleteprod(this.parentElement.id)' aria-hidden='true'></i><br></a>");
	l=l+1;
	alert("aggiunto al carrello");
}
function deleteprod(e){
	document.getElementById("shop").removeChild(document.getElementById(e));
}
function visible(){
	var c=document.getElementById("cart");
	if(c.style.display=="none"){
		c.style.display="block";
	}else{
		c.style.display="none";
	}

}