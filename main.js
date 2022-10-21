

//add element 
//compteur ajout +1 

let plusBtn = document.getElementsByClassName('btn-plus');

console.log(plusBtn);

for (let plus of plusBtn) {
  plus.addEventListener('click', function () {
    plus.previousElementSibling.innerText++;
    sum()
  });

}


//diminuer 

let minusBtn = document.getElementsByClassName('btn-moins');
for(let minus of minusBtn){

minus.addEventListener('click', function (){

if ( minus.nextElementSibling.innerText >0 ){
    minus.nextElementSibling.innerText--;
    sum()
}

})

};




//delete:


let deletebtn = document.querySelectorAll('.btn-delete');

for (let i=0 ; i < deletebtn.length ;i++){
    deletebtn[i].addEventListener('click', function(){
        deletebtn[i].parentElement.parentElement.remove();
       sum()
    })
  
 
}


//changement de couleur 

let hearts=document.getElementsByClassName('fa-heart');

console.log(hearts,'hearts')

for(let colors of hearts ){
  colors.addEventListener('click',function(){
    if(colors.style.color === 'gray' ){
      colors.style.color="red"
    }else{
      colors.style.color = "gray"
    }
  })
}

// shopping bag total
function sum () {
    let qt=(document.getElementsByClassName("quantity"))
    console.log(qt)
    let pr=(document.getElementsByClassName("prx"))
    console.log(pr)
    let somme=0
    for(i=0;i<qt.length;i++){
        somme+=qt[i].innerHTML*pr[i].innerHTML
    }
return document.getElementById("prix-total").innerHTML=somme
}