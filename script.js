function addNewEField()
{
  let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("wEfield");
   newNode.classList.add("mt-1");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder","Enter here")

   let weobj=document.getElementById("we");
   let weAddbuttonobj=document.getElementById("weAddbutton")

    weobj.insertBefore(newNode, weAddbuttonobj);
}

function addNewAQField()
{
    let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("aqField");
   newNode.classList.add("mt-1");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder","Enter here")

   let aqobj=document.getElementById("aq");
   let aqAddbuttonobj=document.getElementById("aqAddbutton")

    aqobj.insertBefore(newNode, aqAddbuttonobj);
}

function generateCV()
{
    let nameField=document.getElementById("nameField").value;

    let nameT=document.getElementById("nameT");

    nameT.innerHTML=nameField;
    //name
    document.getElementById("nameT2").innerHTML=nameField;
    //address
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
    //contact
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    //github
    document.getElementById("git").innerHTML=document.getElementById("GithubField").value;
    //linkedin
    document.getElementById("linkdT").innerHTML=document.getElementById("LinkedinField").value;
    //coding platform
    document.getElementById("cpT").innerHTML=document.getElementById("cpField").value;
    ;

    //skills
    document.getElementById("skT").innerHTML=document.getElementById("skillField").value;

    //Work Experience
    let wes=document.getElementsByClassName("wEfield");
    let str=" ";
    for (let e of wes)
    {
        str=str+`<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML=str;

    //Academic Qalification
    let aqs=document.getElementsByClassName('aqField');

    let str1=" ";
    for (let e of aqs)
    {
        str1=str1+`<li> ${e.value} </li>`;
    }

    document.getElementById("aqT").innerHTML=str1;

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";

}

function printCV()
{
    window.print();
}