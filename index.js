function loading(){
  $(document).ready(function(){
    $("#loading").fadeOut(1200,function(){
      $("body").css("overflow-y","auto")
    })
  });
};

loading();
(async function current(){
    var res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
 var final = await res.json() ;
 var fmeal = Array.of(final.meals)
var fdata = ``
 for( var i =0 ; i<fmeal[0].length ; i++){
      fdata += `
<div class="col-md-3 cardi " onclick="mealPage(${fmeal[0][i].idMeal})" >
<div class="img position-relative rounded-3" >
<img src="${fmeal[0][i].strMealThumb }" alt="" class="w-100" >
<div class=" overlay w-100 h-100 d-flex  align-items-center position-absolute  " >
<p class=" mb-3 fw-bolder p-2  fs-5"  id="card" >${fmeal[0][i].strMeal}</p></div>
</div>
</div>
 `

 }
document.getElementById("current").innerHTML =fdata;   
})();


//sidebar
$(".buttn").click(function (e) { 
  let eleoffset =$("#nav").offset().left ;
  let navwidth = $("#dnav").innerWidth();
  if(eleoffset == 0){
    $("#nav").animate({ left: `-${navwidth}px` },800);
    // $("#close").removeClass(className);
    $("#open").addClass("d-block").removeClass("d-none");
    $("#close").addClass("d-none").removeClass("d-block")
    $(".side li").animate({"margin-top": "50rem",} , 1500 )


  }else{
    $("#nav").animate({ left: `0` },800);
    $(".side li").animate({"margin-top": "4rem",} , 1500 )


    $("#open").removeClass("d-block").addClass("d-none");
    $("#close").removeClass("d-none").addClass("d-block")
  }
});

$("a").click(function(){
  let eleoffset =$("#nav").offset().left ;
  let navwidth = $("#dnav").innerWidth();
  if(eleoffset == 0){
    $("#nav").animate({ left: `-${navwidth}px` },600);
    // $("#close").removeClass(className);
    $("#open").addClass("d-block").removeClass("d-none");
    $("#close").addClass("d-none").removeClass("d-block")
    $(".side li").animate({"margin-top": "50rem",} , 1500 )}
});




$("#searchbtn").click(function(){

  $("section:not(#search)").slideUp(0 , function(){
    $("#search").slideDown(400)

  })
  $("#loading").fadeIn(0,function(){
    $("#loading").fadeOut(800)
  })
})


$("#Categoriesbtn").click(function(){

  $("section:not(#Categories)").slideUp(0 ,function(){ $("#Categories").slideDown(800)
})
$("#loading").fadeIn(0,function(){
  $("#loading").fadeOut(800)
})
  });

async function sName(name){
 
 
  
  
  var res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
  
var final = await res.json();
var fmeal = Array.of(final.meals);
var fdata = ``;
 for( var i =0 ; i<fmeal[0].length ; i++){
      fdata += `
      <div class="col-md-3 cardi " onclick="mealPage(${fmeal[0][i].idMeal})" >
      <div class="img position-relative rounded-3">
      <img src="${fmeal[0][i].strMealThumb }" alt="" class="w-100">
      <div class=" overlay w-100 h-100 d-flex  align-items-center position-absolute  " >
      <p class=" mb-3 fw-bolder p-2  fs-5">${fmeal[0][i].strMeal}</p></div>
      </div>
      </div>
      </div>
      `
 };
document.getElementById("Sitem").innerHTML =fdata;  

};


async function sLetter(Letter){
  var res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${Letter}`)
  
var final = await res.json();
var fmeal = Array.of(final.meals);
var fdata = ``
 for( var i =0 ; i<fmeal[0].length ; i++){
      fdata += `
      <div class="col-md-3 cardi "onclick="mealPage(${fmeal[0][i].idMeal})">
      <div class="img position-relative rounded-3">
      <img src="${fmeal[0][i].strMealThumb }" alt="" class="w-100">
      <div class=" overlay w-100 h-100 d-flex  align-items-center position-absolute  " >
      <p class=" mb-3 fw-bolder p-2  fs-5">${fmeal[0][i].strMeal}</p></div>
      </div>
      </div>
      </div>
      `
 }
document.getElementById("Sitem").innerHTML =fdata;  

};


 ( async function cat(){
    var res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    
  var final = await res.json();
  var fmeal = Array.of(final.categories);
   
  var fdata = ``
   for( var i =0 ; i<fmeal[0].length ; i++){
        fdata += `
        <div class="col-md-3 cardi" onclick=filterCat("${fmeal[0][i].strCategory}")>
        <div class="img position-relative rounded-3">
        <img src="${fmeal[0][i].strCategoryThumb }" alt="" class="w-100">
        <div class=" overlay  d-flex flex-column px-5  align-items-center position-absolute w-100 h-100 " >
        <p class=" mb-2 fw-bolder = fs-4">${fmeal[0][i].strCategory   }</p>
        <p class="fs-6">${fmeal[0][i].strCategoryDescription}</p>


        </div>
        </div>
        </div>
  
  
        `
  
   }
  document.getElementById("catg").innerHTML =fdata;  
  
  })();
  

async function mealPage (id){
  var res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
   var final = await res.json();
   var fmeal = Array.of(final.meals);
   $("#loading").fadeIn(0,function(){
    $("#loading").fadeOut(800)
  })
$("section:not(#mealpage)").slideUp(0,function(){
   $("#mealpage").fadeIn(600)

})

 var fdata = ``
 fdata+=`     <div class="col-md-4 text-white text-center" >
 <img src="${fmeal[0][0].strMealThumb }" class="w-100" alt="">
 <h2 >${fmeal[0][0].strMeal}</h2>
</div>
<div class="col-md-8 text-white text-start">
 <h3 class="fs-2 fw-light">Instructions</h3>
 <p>${fmeal[0][0].strInstructions}.</p>
<div class="d-flex">
 <p class="fw-bolder">Area :</p>
 <p>${fmeal[0][0].strArea}</p>

</div>
<div class="d-flex">
 <p class="fw-bolder">Category :</p>
 <p>${fmeal[0][0].strCategory}</p>
</div>


<h4 class="fs-2 fw-light mb-4">Recipes :</h4>
<ul id="Recipes" class="p-0"></ul>

 <h4 class="fs-2 fw-light mb-4">Tags:</h4>
 <ul id="tags" class="p-0 "></ul>

 <div class="d-flex mb-4">
   <button class="btn btn-success  me-3">
     <a href="${fmeal[0][0].strSource}" target="_blank">sources</a>
   </button>
   <button class="btn btn-danger">
     <a href="${fmeal[0][0].strYoutube}" target="_blank">youtube</a>
   </button>
  </div>
</div>


 `
var Reci = ``;

for(var i = 1; i <= 20; i++){
  if(fmeal[0][0][`strIngredient${i}`]){
    Reci+=   `  <li class="rounded p-2  btn-success  btn mb-2">${fmeal[0][0][`strMeasure${i}`]} ${fmeal[0][0][`strIngredient${i}`]}</li>`
  };
  };


  var tag = fmeal[0][0].strTags;
  var tags = ``
    if(tag){
      tags+=   `  <li class="rounded p-2  btn-danger  btn mb-3 fs-5 ">${tag}</li>`
    };
document.getElementById("mainpg").innerHTML =fdata;  

document.getElementById("Recipes").innerHTML =Reci;  
document.getElementById("tags").innerHTML =tags;  

};



async function filterCat (ctg){
  var res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${ctg}`);
   var final = await res.json();
   var fmeal = Array.of(final);
console.log(fmeal[0].meals[0].idMeal);

$("#loading").fadeIn(0,function(){
  $("#loading").fadeOut(800)
})
   $("section:not(#catdata)").fadeOut(0,function(){
    $("#catdata").slideDown(600)
 
 });
       var fdata = ``
  for( var i = 0 ; i<fmeal[0].meals.length ; i++){
       fdata += `
 <div class="col-md-3 cardi d-flex" onclick="mealPage(${fmeal[0].meals[i].idMeal})">
 <div class="img position-relative rounded-3" >
 <img src="${fmeal[0].meals[i].strMealThumb }" alt="" class="w-100" >
 <div class=" overlay w-100 h-100 d-flex  align-items-center position-absolute  " >
 <p class=" mb-3 fw-bolder p-2  fs-5"  id="card" >${fmeal[0].meals[i].strMeal}</p></div>
 </div>
 </div>
  `

  }

document.getElementById("cdata").innerHTML =fdata;   
};

$("#area").click(function(){
  $("#loading").fadeIn(0,function(){
    $("#loading").fadeOut(800)
  })
  $("section:not(#areas)").slideUp(0 ,function(){
    $("#areas").show(400)

  });
  (async function filterCath (){
    var res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
     var final = await res.json();
     var fmeal = Array.of(final);
   console.log(fmeal[0].meals);
  
         var fdata = ``
    for( var i = 0 ; i<20 ; i++){
         fdata += `
         <div class="col-md-3 area" onclick=arw("${fmeal[0].meals[i].strArea}") >
         <div class="text-white bg-black text-center py-5 rounded-4">
           <i class="fa-solid fa-city fs-2 mb-2"></i>
           <h4>${fmeal[0].meals[i].strArea}</h4>
         </div>
         </div>
    `
  
    };
  
  document.getElementById("areaD").innerHTML =fdata;   
  })();
  
});


async function arw (area){
  var res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
   var final = await res.json();
   var fmeal = Array.of(final);

$("#loading").fadeIn(0,function(){
  $("#loading").fadeOut(800)
})
$("section:not(#areapage)").slideUp(0 ,function(){
  $("#areapage").fadeIn(600)
});
var fdata = ``

for( var i =0 ; i<fmeal[0].meals.length ; i++){
  fdata += `
<div class="col-md-3 cardi " onclick="mealPage(${fmeal[0].meals[i].idMeal})">
<div class="img position-relative rounded-3" >
<img src="${fmeal[0].meals[i].strMealThumb }" alt="" class="w-100" >
<div class=" overlay w-100 h-100 d-flex  align-items-center position-absolute  " >
<p class=" mb-3 fw-bolder p-2  fs-5"  id="card" >${fmeal[0].meals[i].strMeal}</p></div>
</div>
</div>
`

}

document.getElementById("areaP").innerHTML =fdata;   

};
$("#Ingredients").click(function(){
  $("#loading").fadeIn(0,function(){
    $("#loading").fadeOut(800)
  })
  $("section:not(#Ingredient)").slideUp(0 ,function(){
    $("#Ingredient").fadeIn(400)

  });
  (async function filtering (){
    var res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
     var final = await res.json();
     var fmeal = Array.of(final);
   console.log(fmeal[0].meals[8].strIngredient);
  
         var fdata = ``
    for( var i = 0 ; i<20 ; i++){
         fdata += `
         <div class="col-md-3 area " onclick="ing('${fmeal[0].meals[i].strIngredient}')" >
         <div class="text-white bg-black text-center py-5 rounded-4 h-100">
           <i class="fa-solid fa-bowl-food fs-2 mb-2 text-success"></i>
           <h4>${fmeal[0].meals[i].strIngredient}</h4>
           <p class=" mb-3   fs-5">${fmeal[0].meals[i].strDescription.split(" ").splice(0,23).join(" ")}</p></div>

         </div>
         </div>
    `
  
    };
  
  document.getElementById("IngredientsD").innerHTML =fdata;   
  })();
  
});


async function ing (ingredient){
  var res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
   var final = await res.json();
   var fmeal = Array.of(final);
console.log(fmeal);
console.log(fmeal[0]);
$("#loading").fadeIn(0,function(){
  $("#loading").fadeOut(800)
})
$("section:not(#IngredientsPage)").slideUp(0 ,function(){
  $("#IngredientsPage").fadeIn(600)
});
var fdata = ``;

for( var i =0 ; i<fmeal[0].meals.length ; i++){
  fdata += `
<div class="col-md-3 cardi " onclick="mealPage(${fmeal[0].meals[i].idMeal})">
<div class="img position-relative rounded-3" >
<img src="${fmeal[0].meals[i].strMealThumb }" alt="" class="w-100" >
<div class=" overlay w-100 h-100 d-flex  align-items-center position-absolute  " >
<p class=" mb-3 fw-bolder p-2  fs-5"  id="card" >${fmeal[0].meals[i].strMeal}</p></div>
</div>
</div>
`

}

document.getElementById("IngredientsP").innerHTML =fdata;   

};

var userName = document.getElementById("uName")
var userEmail = document.getElementById("uEmail")
var userphone = document.getElementById("uPhone")
var userage = document.getElementById("uAge")

var userPass = document.getElementById("uPass")
var ReuserPass = document.getElementById("uRPass")

$("#Contact").click(function(){
  $("#loading").fadeIn(0,function(){
    $("#loading").fadeOut(800)
  })
  $("section:not(#ContacUs)").slideUp(00 ,function(){
    $("#ContacUs").slideDown(600)
  });
 
})
function validation(){
  //name
  if(username() ){
    $("#uName").removeClass("is-invalid");
    $("#uName").addClass("is-valid");
    $("#namealert").addClass("d-none");

  }else{
    $("#uName").removeClass("is-valid");
    $("#uName").addClass("is-invalid");
    $("#namealert").removeClass("d-none");


  }

//email
  if(useremails()){
    $("#uEmail").removeClass("is-invalid");
    $("#uEmail").addClass("is-valid");
    $("#emailalert").addClass("d-none");

  }else{
    $("#uEmail").removeClass("is-valid");
    $("#uEmail").addClass("is-invalid");
    $("#emailalert").removeClass("d-none");


  }

//phone
  if(usernum()){
    $("#uPhone").removeClass("is-invalid");
    $("#uPhone").addClass("is-valid");
    $("#phonealert").addClass("d-none");

  }else{
    $("#uPhone").removeClass("is-valid");
    $("#uPhone").addClass("is-invalid");
    $("#phonealert").removeClass("d-none");


  }

//old
  if(userold()){
    $("#uAge").removeClass("is-invalid");
    $("#uAge").addClass("is-valid");
    $("#agealert").addClass("d-none");

  }else{
    $("#uAge").removeClass("is-valid");
    $("#uAge").addClass("is-invalid");
    $("#agealert").removeClass("d-none");


  }

//pass
  if(pass()){
    $("#uPass").removeClass("is-invalid");
    $("#uPass").addClass("is-valid");
    $("#passalert").addClass("d-none");

  }else{
    $("#uPass").removeClass("is-valid");
    $("#uPass").addClass("is-invalid");
    $("#passalert").removeClass("d-none");


  }

//repass
  if(repass()){
    $("#uRPass").removeClass("is-invalid");
    $("#uRPass").addClass("is-valid");
    $("#repassalert").addClass("d-none");

  }else{
    $("#uRPass").removeClass("is-valid");
    $("#uRPass").addClass("is-invalid");
    $("#repassalert").removeClass("d-none");


  }
  //click

  if( username() &&  useremails() && usernum() && userold() && pass() &&  repass()){
$("#btn").removeClass("disabled")
$("#btn").click(function(){
  clear()
  $("#Welcome").removeClass("d-none")
})


  }else{
    $("#btn").addClass("disabled")

  }

};



function username(){
  var regexName = /^[a-zA-Z ]+$/;
  if(regexName.test(userName.value) == true) {
return true
  }
};

function useremails(){
  var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(regexEmail.test(userEmail.value) == true) {
return true
  }
};

function usernum(){
  var regexphone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  if(regexphone.test(userphone.value) == true) {
return true
  }
};

function userold(){
  var regexage = /^[1-9][0-9]?$/;
  if(regexage.test(userage.value) == true) {
return true
  }
};


function pass(){
  var regexpass =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if(regexpass.test(userPass.value) == true) {
return true
  }
};

function repass(){
  if(userPass.value == ReuserPass.value && ReuserPass.value !=""){
return true
  }
};

function clear() {
  userName.value = ""
  userEmail.value = ""
  userPass.value = ""
  ReuserPass.value = ""
  userphone.value = ""
  userage.value = ""
}









//spinner
'use strict'

let toRadians = (deg) => deg * Math.PI / 180
let map = (val, a1, a2, b1, b2) => b1 + (val - a1) * (b2 - b1) / (a2 - a1)

class Pizza {
  constructor(id) {
    this.canvas = document.getElementById(id)
    this.ctx = this.canvas.getContext('2d')

    this.sliceCount = 6
    this.sliceSize = 80

    this.width = this.height = this.canvas.height = this.canvas.width = this.sliceSize * 2 + 50
    this.center = this.height / 2 | 0

    this.sliceDegree = 360 / this.sliceCount
    this.sliceRadians = toRadians(this.sliceDegree)
    this.progress = 0
    this.cooldown = 10

  }

  update() {
    let ctx = this.ctx
    ctx.clearRect(0, 0, this.width, this.height)

    if (--this.cooldown < 0) this.progress += this.sliceRadians*0.01 + this.progress * 0.07

    ctx.save()
    ctx.translate(this.center, this.center)
    
    for (let i = this.sliceCount - 1; i > 0; i--) {

      let rad
      if (i === this.sliceCount - 1) {
        let ii = this.sliceCount - 1

        rad = this.sliceRadians * i + this.progress

        ctx.strokeStyle = '#FBC02D'
        cheese(ctx, rad, .9, ii, this.sliceSize, this.sliceDegree)
        cheese(ctx, rad, .6, ii, this.sliceSize, this.sliceDegree)
        cheese(ctx, rad, .5, ii, this.sliceSize, this.sliceDegree)
        cheese(ctx, rad, .3, ii, this.sliceSize, this.sliceDegree)

      } else rad = this.sliceRadians * i
      
      // border
      ctx.beginPath()
      ctx.lineCap = 'butt'
      ctx.lineWidth = 11
      ctx.arc(0, 0, this.sliceSize, rad, rad + this.sliceRadians)
      ctx.strokeStyle = '#F57F17'
      ctx.stroke()

      // slice
      let startX = this.sliceSize * Math.cos(rad)
      let startY = this.sliceSize * Math.sin(rad)
      let endX = this.sliceSize * Math.cos(rad + this.sliceRadians)
      let endY = this.sliceSize * Math.sin(rad + this.sliceRadians)
      let varriation = [0.9,0.7,1.1,1.2]
      ctx.fillStyle = '#FBC02D'
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(startX, startY)
      ctx.arc(0, 0, this.sliceSize, rad, rad + this.sliceRadians)
      ctx.lineTo(0, 0)
      ctx.closePath()
      ctx.fill()
      ctx.lineWidth = .3
      ctx.stroke()

      // meat
      let x = this.sliceSize * .65 * Math.cos(rad + this.sliceRadians / 2)
      let y = this.sliceSize * .65 * Math.sin(rad + this.sliceRadians / 2)
      ctx.beginPath()
      ctx.arc(x, y, this.sliceDegree / 6, 0, 2 * Math.PI)
      ctx.fillStyle = '#D84315'
      ctx.fill()

    }

    ctx.restore()

    if (this.progress > this.sliceRadians) {
      ctx.translate(this.center, this.center)
      ctx.rotate(-this.sliceDegree * Math.PI / 180)
      ctx.translate(-this.center, -this.center)

      this.progress = 0
      this.cooldown = 20
    }

  }

}

function cheese(ctx, rad, multi, ii, sliceSize, sliceDegree) {
  let x1 = sliceSize * multi * Math.cos(toRadians(ii * sliceDegree) - .2)
  let y1 = sliceSize * multi * Math.sin(toRadians(ii * sliceDegree) - .2)
  let x2 = sliceSize * multi * Math.cos(rad + .2)
  let y2 = sliceSize * multi * Math.sin(rad + .2)

  let csx = sliceSize * Math.cos(rad)
  let csy = sliceSize * Math.sin(rad)

  var d = Math.sqrt((x1 - csx) * (x1 - csx) + (y1 - csy) * (y1 - csy))
  ctx.beginPath()
  ctx.lineCap = 'round'

  let percentage = map(d, 15, 70, 1.2, 0.2)

  let tx = x1 + (x2 - x1) * percentage
  let ty = y1 + (y2 - y1) * percentage
  ctx.moveTo(x1, y1)
  ctx.lineTo(tx, ty)

  tx = x2 + (x1 - x2) * percentage
  ty = y2 + (y1 - y2) * percentage
  ctx.moveTo(x2, y2)
  ctx.lineTo(tx, ty)

  ctx.lineWidth = map(d, 0, 100, 20, 2)
  ctx.stroke()
}

let pizza = new Pizza('pizza')

;(function update() {
  requestAnimationFrame(update)
  pizza.update()

}())