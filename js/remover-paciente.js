var tabela = document.querySelector("table");


tabela.addEventListener("dblclick", function(event){
    console.log("click duplo");
    event.target.parentNode.remove();
    console.log(event.target);
});
