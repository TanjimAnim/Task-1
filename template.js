var inp = document.getElementsByTagName("input");
var form = document.getElementById("form");


form.addEventListener("submit",function(event){
    event.preventDefault();
    var node = document.getElementById('contact-template')
    var clonedNode = node.content.cloneNode(true)
    
    var inputName = document.querySelector("#input-name")
    var inputEmail = document.querySelector("#input-email")
    var inputHomepage = document.querySelector("#input-homepage")

    clonedNode.querySelector("h2").innerHTML = inputName.value
    clonedNode.querySelector(".email").innerHTML = inputEmail.value
    clonedNode.querySelector('.homepage a').innerHTML = inputHomepage.value   
    clonedNode.querySelector('a[href="#"]').setAttribute('href', inputHomepage.value)
    document.getElementById('contacts').appendChild(clonedNode)
})