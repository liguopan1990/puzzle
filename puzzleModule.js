/**
 * Created with JetBrains WebStorm.
 * User: lkf5583
 * Date: 17-8-16
 * Time: 下午8:11
 * To change this template use File | Settings | File Templates.
 */

var c = document.getElementById('myCanvas');
var cxt = c.getContext('2d');
//定义单个方格
var aUint = new Array;
function Uint(x,y,text){
    this.x = x;
    this.y = y;
    this.text = text;
    this.isUp = false;
    this.isRight = false;
    this.isDown = false;
    this.isLeft = false;
    this.hiswidth = 100;
    this.runUp = function(){
        this.y -= this.hiswidth;
    };
    this.runRight = function(){
        this.x += this.hiswidth;
    };
    this.runDown = function(){
        this.y += this.hiswidth;
    };
    this.runLeft = function(){
        this.x -= this.hiswidth;
    }
}
var temp = {};
function puzzle(){
    this.init = function(){
        for(var i=0;i<3;i++)
        {
            for(var j=0;j<3;j++)
            {
                aUint.push(new Uint(j*100,i*100,3*i+j))
            }
        }
    }
    this.runUp = function(){
        for(i=0;i<9;i++){
            if(aUint[i].isUp){
                aUint[i].runUp();
                aUint[i-3].runDown();
                temp = aUint[i];
                aUint[i] = aUint[i-3];
                aUint[i-3] = temp;
                break;
            }
        }
    }
    this.runRight = function(){
        for(i=0;i<9;i++){
            if(aUint[i].isRight){
                aUint[i].runRight();
                aUint[i+1].runLeft();
                temp = aUint[i];
                aUint[i] = aUint[i+1];
                aUint[i+1] = temp;
                break;
            }
        }
    }
    this.runDown = function(){
        for(i=0;i<9;i++){
            if(aUint[i].isDown){
                aUint[i].runDown();
                aUint[i+3].runUp();
                temp = aUint[i];
                aUint[i] = aUint[i+3];
                aUint[i+3] = temp;
                break;
            }
        }
    }
    this.runLeft = function(){
        for(i=0;i<9;i++){
            if(aUint[i].isLeft){
                aUint[i].runLeft();
                aUint[i-1].runRight();
                temp = aUint[i];
                aUint[i] = aUint[i-1];
                aUint[i-1] = temp;
                break;
            }
        }
    }
}
//判断当前单元*********
function checkUint()
{
    for(var i=0;i<aUint.length;i++)
    {
        if(aUint[i-3]&&(0 == aUint[i-3].text))
        {
            aUint[i].isUp = true;
            aUint[i].isRight = false;
            aUint[i].isDown = false;
            aUint[i].isLeft = false;
        }
        else if(aUint[i+1]&&(0 == aUint[i+1].text)&&(i!=2&&i!=5&&i!=8))
        {
            aUint[i].isUp = false;
            aUint[i].isRight = true;
            aUint[i].isDown = false;
            aUint[i].isLeft = false;
        }
        else if(aUint[i+3]&&(0 == aUint[i+3].text))
        {
            aUint[i].isUp = false;
            aUint[i].isRight = false;
            aUint[i].isDown = true;
            aUint[i].isLeft = false;
        }
        else if(aUint[i-1]&&(0 == aUint[i-1].text)&&(i!=0&&i!=3&&i!=6))
        {
            aUint[i].isUp = false;
            aUint[i].isRight = false;
            aUint[i].isDown = false;
            aUint[i].isLeft = true;
        }
        else
        {
            aUint[i].isUp = false;
            aUint[i].isRight = false;
            aUint[i].isDown = false;
            aUint[i].isLeft = false;
        }
    }
}

function drawMyPuzzle(puzzle)
{
    for(var i=0;i<puzzle.length;i++)
    {
        if(0 != puzzle[i].text)
        {
            cxt.beginPath();
            cxt.fillText(puzzle[i].text,puzzle[i].x+50,puzzle[i].y+50)
            cxt.moveTo(puzzle[i].x,puzzle[i].y);
            cxt.lineTo(puzzle[i].x,puzzle[i].y+100);
            cxt.lineTo(puzzle[i].x+100,puzzle[i].y+100);
            cxt.lineTo(puzzle[i].x+100,puzzle[i].y);
            cxt.lineTo(puzzle[i].x,puzzle[i].y);
            cxt.stroke();
            cxt.closePath();
        }
    }
}
