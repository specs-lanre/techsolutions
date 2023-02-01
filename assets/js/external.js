var dsp =document.getElementById('display')

function multiply(){
let x = document.getElementById('nbr1').value
let y = document.getElementById('nbr2').value
let r=parseInt(x)*parseInt(y)
let z=x+" * "+y+" = "+r	
dsp.innerHTML=z	
}

function divide(){
let x = document.getElementById('nbr1').value
let y = document.getElementById('nbr2').value
let r=parseInt(x)/parseInt(y)
let z=x+" / "+y+" = "+r	
dsp.innerHTML=z	
}



function addIt(){
//alert("calculator !!")
var x = document.getElementById('nbr1').value
console.log("x is ->",x)
y = document.getElementById('nbr2').value
r=parseInt(x)+parseInt(y)
z=x+" + "+y+" = "+r
//alert(z)
q=document.getElementById('display')
q.innerHTML=z

}

function subIt(){
//alert("calculator !!")
x = document.getElementById('nbr1').value
y = document.getElementById('nbr2').value
r=parseInt(x)-parseInt(y)
z=x+" - "+y+" = "+r
//alert(z)
q=document.getElementById('display')
q.innerHTML=z
}


function mdulos(){
//alert("calculator !!")
x = document.getElementById('nbr1').value
y = document.getElementById('nbr2').value
r=parseInt(x)%parseInt(y)
z=x+" % "+y+" = "+r
//alert(z)
q=document.getElementById('display')
q.innerHTML=z
}




function mInc(g){
//alert("calculator !!")
x = document.getElementById('nbr1').value
y = document.getElementById('nbr2').value

if ( g=="++"){
	x=parseInt(x)
	x++
	document.getElementById('nbr1').value=x
}

if ( g=="--"){
	x=parseInt(x)
	x--
	document.getElementById('nbr1').value=x
	
}
z=" x is now = "+x
q=document.getElementById('display')
q.innerHTML=z

}





function CheckGreater(){

x = document.getElementById('nbr1').value
y = document.getElementById('nbr2').value


if (parseInt(x) > parseInt(y)){
z=x+" is greater than "+y}

if (parseInt(x) < parseInt(y)){
z=x+" is less than "+y}

q=document.getElementById('display')
q.innerHTML=z
}
/*
let h =230
console.log(h)
h+=50
console.log(h)
h+=50
console.log(h)
*/
/*
j=450
console.log(j)
j/=45
console.log(j)
j/=45
console.log(j)
*/

/*
k=50
l=90

k>l? console.log("yes"):console.log("yes")
*/
/*
let x=200
x = x+30
console.log("++++",x)

const w=200
w = w+30
console.log("++++",w)
*/
var x
console.log(x)
// js strings
var t="the quick fox"
console.log(t[4])
console.log(t[2])
console.log(t[9])

var str="learnJavascript@Hiitplc.com"
console.log(str.indexOf("Hiit"))
function show(){alert("showing!")}