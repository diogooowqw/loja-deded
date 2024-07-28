let move_animacao=document.querySelector('.menu_animacao')
const menu_geral=document.querySelector('.menu_geral')
let botao_menu=document.getElementById('botao_menu')
let menu_adicionar=document.getElementById('menu_adicionar')
let title=document.getElementById('title')
let simboloDoWtsap=document.getElementById('simboloDoWtsap')
let botao_adicionar=document.getElementById('botao_adicionar')//Variável do botão adicionar que está no  menu principal

menu_adicionar.style.display='none'

function menu_principal_Aparecer (){

    menu_geral.classList.add('menu_animacao')//Adiciona a classe menu_animacao ao menu_geral , fazendo com que crie o a animação de ir para o lado 
    botao_menu.style.display="none"
    }
    
    function menu_principal_Sumir(){
       menu_geral.classList.remove('menu_animacao')
       botao_menu.style.display="inline"
    }
       function sairMenuAdiocionar(){
        menu_adicionar.style.display='none'
          botao_menu.style.display="inline"
         
        
   }
   function irParaWtsap(){
    window.location.href='https://wa.me/553399613873'
   }

   function adicionarProduto(e){
    menu_geral.classList.remove('menu_animacao')
      menu_adicionar.style.display="inline"
 
 
      const inputTarget= e.target
      const file=inputTarget.files[0]
   
      let nomeDoAudio=document.getElementById('nomeDoAudio').value
 
      if(file && nomeDoAudio!=""){
      
         
         const reader= new FileReader()
   
         reader.addEventListener('load',function(e){
            const readerTarget= e.target
 
            const text=document.createTextNode(nomeDoAudio)
            const audioAdicionado=document.createElement("audio")
            let br=document.createElement('br')
            let br2=document.createElement('br')
            let br3=document.createElement('br')
            let h1=document.createElement('h1')
            h1.setAttribute('class',"tituloDoAudio")
            h1.appendChild(text)
            const divDoAudio=document.createElement("div")
            let botao_excluir= excluir.cloneNode(true);
           botao_excluir.setAttribute('id','excluir')
            divDoAudio.setAttribute('class','audios')
            audioAdicionado.setAttribute('controls',true)
            divDoAudio.appendChild(h1)
            audioAdicionado.src=readerTarget.result;
           localAudios.appendChild(br)
            divDoAudio.appendChild(audioAdicionado)
           localAudios.appendChild(divDoAudio)
           divDoAudio.appendChild(br2)
           divDoAudio.appendChild(br3)
           divDoAudio.appendChild(botao_excluir)
 
           
          
        
           botao_excluir.addEventListener('click', ()=> {
             localAudios.removeChild(divDoAudio);
           })
     
           $(function() {
             $('.audios').draggable();
          });
           
           
         })
         reader.readAsDataURL(file)// Pegar a URL do arquivo 
         
   }
 
 
   if (file && nomeDoAudio==""){
    alert("Preencha o campo nome do audio")
 }
 
 }
 
 
   botao_menu.addEventListener('click',menu_principal_Aparecer)
  botao_adicionar.addEventListener('click',adicionarProduto)
   title.addEventListener('click',menu_principal_Sumir)
  simboloDoWtsap.addEventListener('click',irParaWtsap)
   botao_sairDoMenu_adicionar.addEventListener('click',sairMenuAdiocionar)
  
   