let result = document.getElementById('result');
let dropdown = document.getElementById('dropdown');
let button = document.getElementById('filter');

const  arr =[
   {id:1, name:"john", age:"18" , profession:"developer"},
   {id:2, name:"jack", age:"20" , profession:"developer"},
   {id:3, name:"Karen", age:"19" , profession:"admin"},
  ];

 
function render(){

   
 let dropdownvalue = dropdown.value;
  console.log(dropdownvalue);
   if(dropdownvalue=="profession"){
      arr.map((item)=>{
         
          let div = document.createElement("div");
          div.style.borderStyle="solid";
          div.style.margin="15px 0px";
          div.style.borderRadius="10px";
          div.style.wordSpacing="50px";
          div.style.textAlign="center";
           div.style.padding="10px";

          div.innerText = item.id + ".  Name:" + item.name + " Profession:" + item.profession + "    Age:" + item.age;
          result.append(div);
         
         
              console.log(result);
      });
    
  }
  
}

 render();



function filterbyprofession(){
 result.innerHTML='';
 let dropdownvalue = dropdown.value;
  console.log(dropdownvalue);
  if(dropdownvalue=="profession"){
     alert("please select a profession");
     return;
  }
       arr.forEach((item)=>{
          if(item.profession===dropdownvalue){
            let div = document.createElement("div");
       div.style.borderStyle="solid";
       div.style.margin="15px 0px";
       div.style.borderRadius="10px";
       div.style.wordSpacing="50px";
       div.style.textAlign="center";
       div.style.padding="10px";

           div.innerText = item.id + ".  Name:" + item.name + "  Profession:" + item.profession + "    Age:" + item.age;
           result.append(div);

          }
               
       });

       console.log(arr);    

}

button.addEventListener("click",filterbyprofession);

let fname = document.getElementById('name');
let fprofession = document.getElementById('profession');
let fage = document.getElementById('age');
let btn = document.getElementById('btn');

function adduser(){
let uname = fname.value;
let prf = fprofession.value;
let age = fage.value;
let x = arr.length;
++x;
            
let brr = {id:x,name:`${uname}`, age:`${age}`,profession:`${prf}`}

if(uname!=="" && age!=="" && prf!==""){
   arr.push(brr);
} 
console.log(arr);

fname.value='';
fprofession.value='';
fage.value='';
}
btn.addEventListener('click',adduser);
