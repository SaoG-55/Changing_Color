var red=document.querySelector(".red");
var cyan=document.querySelector(".cyan");
var violet=document.querySelector(".violet");
var orange=document.querySelector(".orange");
var pink=document.querySelector(".pink");
var center=document.querySelector(".center");

console.log(red);
console.log(window.getComputedStyle(violet).backgroundColor);
//** COMPUTED STYLE */
var style_BG=(color)=>
{
    return window.getComputedStyle(color).backgroundColor;//  RETURNING THE BACKGROUND PROPERTY OF THE COLOR
};
 //center_color=style_BG(red);

// **EVENT lISTENER**//
 var Color_changer=(element,center_color)=>//ARGUMENTS one passes the variable red,orange.. and the other ARGUMENT function which returs the bg color//
    {
        return element.addEventListener("mouseover",()=>
        {
            center.style.backgroundColor=center_color;//changes the center color with the passed button color//
        });
    };
    Color_changer(red,style_BG(red));
    Color_changer(cyan,style_BG(cyan));
    Color_changer(violet,style_BG(violet));
    Color_changer(orange,style_BG(orange));
    Color_changer(pink,style_BG(pink));