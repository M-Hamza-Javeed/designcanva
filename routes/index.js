var express = require('express');
const gradstop = require('gradstop');
var colors = require('nice-color-palettes/100');
var router = express.Router();
var size=5;var counter=0;var color="";var page="";


async function ColorObj(gradient,node){
  counter++;
  if(counter==1){
  color+="<p class='index' >"+node+"</p>";
  color+="<div class='palette-container' >";}
  color+="<div class='palette-container-inner' >";
  color+="<div style='display: flex;'>";
  for(var i=0;i<gradient.length;i++){
  if(i==size-1){color+="<div style='background:"+gradient[i].toString()+";width: 50px;height: 50px;'></div>";
  }else{color+="<div style='background:"+gradient[i].toString()+";width: 50px;height: 50px;'></div>";}}
  color+="</div>";
  color+="</div>";
  if(counter>10){color+="</div>";}
}
  

  
  function work(){
  for(var i=0;i<colors.length;i++){
      ColorObj(colors[i],i);
      ColorObj(gradstop({stops:size,inputFormat: 'hex',colorArray:[colors[i][0],colors[i][1]]}),i);
      ColorObj(gradstop({stops:size,inputFormat: 'hex',colorArray:[colors[i][0],colors[i][2]]}),i);
      ColorObj(gradstop({stops:size,inputFormat: 'hex',colorArray:[colors[i][0],colors[i][3]]}),i);
      ColorObj(gradstop({stops:size,inputFormat: 'hex',colorArray:[colors[i][0],colors[i][4]]}),i);
  
      ColorObj(gradstop({stops:size,inputFormat: 'hex',colorArray:[colors[i][1],colors[i][2]]}),i);
      ColorObj(gradstop({stops:size,inputFormat: 'hex',colorArray:[colors[i][1],colors[i][3]]}),i);
      ColorObj(gradstop({stops:size,inputFormat: 'hex',colorArray:[colors[i][1],colors[i][4]]}),i);
      
      ColorObj(gradstop({stops:size,inputFormat: 'hex',colorArray:[colors[i][2],colors[i][3]]}),i);
      ColorObj(gradstop({stops:size,inputFormat: 'hex',colorArray:[colors[i][2],colors[i][4]]}),i);
      ColorObj(gradstop({stops:size,inputFormat: 'hex',colorArray:[colors[i][3],colors[i][4]]}),i);
      counter=0;}page="<div style='display:flex;background:#733f1d;\
      margin:80px;flex-wrap:wrap-reverse;flex-flow: wrap;'>"+color+"</div>";}
  
  function render(req,res,data) { 
    res.render('index', {'page':data});}

    
    router.get('/', async(req, res) => {
      await work();
      await render(req,res,page);
    });
    

module.exports = router;
