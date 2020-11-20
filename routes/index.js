var express = require('express');
const gradstop = require('gradstop');
var colors = require('nice-color-palettes/1000');
var router = express.Router();
var size=5;var counter=0;var color="";var page="";


async function ColorObj(gradient,node){
  counter++;
  if(counter==1){
  color+="<p style='color:#fff;padding:10px 20px;background: #660c41;'>"+node+"</p>";
  color+="<div style='padding:20px;margin:20px;background:#f7f9f8;box-shadow: 1px 1px 5px #14383eb8;display:flex;flex-wrap: wrap;'>";}
  color+="<div style='display: flex;margin:10px 25px;padding:5px;box-shadow: 1px 1px 5px;flex-direction:column;justify-content: center;align-items: center;'>";
  color+="<div style='display: flex;'>";
  for(var i=0;i<gradient.length;i++){
  if(i==size-1){color+="<div style='background:"+gradient[i].toString()+";width: 50px;height: 50px;margin-bottom:5px;'></div>";
  }else{color+="<div style='background:"+gradient[i].toString()+";width: 50px;height: 50px;margin-bottom:5px;'></div>";}}
  color+="</div>";color+="<button onclick='upload(event)' style='margin-top:5px;width:70px;height:30px;'>Upload</button></div>";
  if(counter>10){color+="</div>";}}
  

  
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
      counter=0;}page="<div style='display:flex;flex-wrap:wrap-reverse;flex-flow: wrap;'>"+color+"</div>";}
  
  function render(req,res,data) { 
    res.render('index', {'page':data});}

    
    router.get('/', async(req, res) => {
      await work();
      await render(req,res,page);
    });
    

module.exports = router;
