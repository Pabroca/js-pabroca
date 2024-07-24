function setup() {
    createCanvas(900, 900);
  }
  
  function draw() {
    background("red");
    fill("black")
    textSize(40)
    textAlign(CENTER, CENTER)
    
    let maximo=width
    let minimo=0
   //mouseX, 0,width==> 0,palavra . length
   let palavra="A vingança nunca é plena,mata a alma e envenena(Seu Madruga)"
   let quantidade=map(mouseX,0,width,0,palavra.length)
   //console.log(quantidade)
    let parcial=palavra.substring(0, quantidade)
    text( parcial,50, 500)
    
    //if(mouseX < 50){
    // let palavra="P"
    // text (palavra, 200, 200) 
   // }else if(mouseX < 100){
   // let palavra="Pe"
   // text(palavra, 200, 200)
    // }else{
    //  let palavra="Persistir"
    // text (palavra, 200, 200) 
   
   // }     
  }