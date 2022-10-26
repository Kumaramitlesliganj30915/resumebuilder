function addNewWeFeild(){
      let newNode=document.createElement("textarea");
      newNode.classList.add("form-control");
      newNode.classList.add("weFeild");
      newNode.classList.add('mt-2');
      newNode.setAttribute("rows",3);
   newNode.setAttribute("placeHolder","Enter here");
      let weob=document.getElementById("we");
      let weAddButtonob=document.getElementById("weAddbutton");
    weob.insertBefore(newNode,weAddButtonob);
}
function addNewAQFeild(){
  let newNode=document.createElement("textrea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqFeild"); 
  newNode.classList.add('mt-2');
      newNode.setAttribute("rows",3);
   newNode.setAttribute("placeHolder","Enter here");
   let aqob=document.getElementById("aq");
   let aqAddButtonOb=document.getElementById("aqAddButton");
   aqob.insertBefore(newNode,aqAddButtonOb);

}
//it is going to gentering cv
function generatecv(){
    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;
   
    //direct

    document.getElementById('nameT2').innerHTML=nameField;
    document.getElementById('contactT').innerHTML=document.getElementById('contactFeild').value;
   document.getElementById('addressT').innerHTML=document.getElementById('addressFeild').value;
  //link
   document.getElementById('fbT').innerHTML=document.getElementById('fbFeild').value;
   document.getElementById('instaT').innerHTML=document.getElementById('instaFeild').value;
   document.getElementById('linkedT').innerHTML=document.getElementById('linkedFeild').value;
    
   document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveFieldId').value;
  
     //work exprienc
     document.getElementById('weT').innerHTML=document.getElementById('wFeild').value;
     document.getElementById('aqT').innerHTML=document.getElementById('aFeild').value;
   
     document.getElementById('cv-form').style.display='none'
    document.getElementById('cv-template').style.display='block';
     
}
//printing cv
function printCV(){
 window.print();
}

