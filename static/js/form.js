/* set global variable i */

var i=0;
var name = 0;
var workexp = 0;
var skills = 0;
var education = 0;
var profile = 0;
var email = 0;

function increment(){
i +=1;                         /* function for automatic increament of feild's "Name" attribute*/
}

/* 
---------------------------------------------

function to remove fom elements dynamically
---------------------------------------------

*/

function removeElement(parentDiv, childDiv){
 

     if (childDiv == parentDiv) {
          alert("The parent div cannot be removed.");
     }
     else if (document.getElementById(childDiv)) {     
          var child = document.getElementById(childDiv);
          var parent = document.getElementById(parentDiv);
          parent.removeChild(child);
     }
     else {
          alert("Child div has already been removed or does not exist.");
          return false;
     }
}


 /* 
 ----------------------------------------------------------------------------
 
 functions that will be called upon, when user click on the Name text field
 
 ---------------------------------------------------------------------------
 */
function nameFunction()
{
     if(name == 0) {
         name+=1;
         var r = document.createElement('span');
         var y = document.createElement("INPUT");
         y.setAttribute("type", "text");
         y.setAttribute("placeholder", "Name");
         y.setAttribute("Name", "name");
         r.appendChild(y);
         r.setAttribute("id", "id_" + i);
         document.getElementById("myForm").appendChild(r);
     }
     else
         alert("You already Entered your Name");
}


/*
-----------------------------------------------------------------------------

functions  that will be called upon, when user click on the Email text field

------------------------------------------------------------------------------
*/
function emailFunction()
{
     if(email == 0) {
         email+=1;
         var r = document.createElement('span');
         var y = document.createElement("INPUT");
         y.setAttribute("type", "text");
         y.setAttribute("placeholder", "Email");
         y.setAttribute("Email", "email");
         r.appendChild(y);
         r.setAttribute("id", "id_" + email);
         document.getElementById("myForm").appendChild(r);
     }
     else
         alert("You already Entered an Email");
}

/*
-----------------------------------------------------------------------------

functions  that will be called upon, when user click on the Contact text field

------------------------------------------------------------------------------
*/

function contactFunction()
{
    if(contact == 0) {
         contact+=1;
         var r = document.createElement('span');
         var y = document.createElement("INPUT");
         y.setAttribute("type", "text");
         y.setAttribute("placeholder", "Contact");
         y.setAttribute("Contact", "contact");
         r.appendChild(y);
         r.setAttribute("id", "id_" + i);
         document.getElementById("myForm").appendChild(r);
     }
     else
         alert("You already Entered an Email");
}

/*
-----------------------------------------------------------------------------

functions  that will be called upon, when user click on the Messege textarea field

------------------------------------------------------------------------------
*/

function skills()
{
var r=document.createElement('span');
skills+=1;
var y = document.createElement("TEXTAREA");
y.setAttribute("cols", "17");
y.setAttribute("placeholder", "message..");
y.setAttribute("Skills","skills_"+skills);
r.appendChild(y);
r.setAttribute("id", "id_"+skills);
document.getElementById("myForm").appendChild(r);

}


function Profile()
{
    if(profile == 0) {
         profile+=1;
         var r = document.createElement('span');
         var y = document.createElement("TEXTAREA");
         y.setAttribute("cols", "17");
         y.setAttribute("placeholder", "message..");
         y.setAttribute("Skills","profile");
         r.appendChild(y);
         r.setAttribute("id", "id_"+i);
         document.getElementById("myForm").appendChild(r);
     }
     else
         alert("You already Entered an Summary");
}

function education()
{
var r=document.createElement('span');
education+=1;
var y = document.createElement("TEXTAREA");
y.setAttribute("cols", "17");
y.setAttribute("placeholder", "message..");
y.setAttribute("Skills","education_"+education);
r.appendChild(y);
r.setAttribute("id", "id_"+education);
document.getElementById("myForm").appendChild(r);
}

function wexp()
{
var r=document.createElement('span');
workexp+=1;
var y = document.createElement("TEXTAREA");
y.setAttribute("cols", "17");
y.setAttribute("placeholder", "message..");
y.setAttribute("Skills","workexp_"+workexp);
r.appendChild(y);
r.setAttribute("id", "id_"+workexp);
document.getElementById("myForm").appendChild(r);
}

/*
-----------------------------------------------------------------------------

functions  that will be called upon, when user click on the Reset Button

------------------------------------------------------------------------------
*/
function resetElements(){
document.getElementById('myForm').innerHTML = '';
}

