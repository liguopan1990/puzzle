/**
 * Created with JetBrains WebStorm.
 * User: lkf5583
 * Date: 17-8-16
 * Time: 下午8:08
 * To change this template use File | Settings | File Templates.
 */

;(function($){
    var myPuzzle =  new puzzle();
    myPuzzle.init();
    drawMyPuzzle(aUint);
    checkUint();
    document.onkeydown = function(e){
        switch(e.keyCode)
        {
            case 87:myPuzzle.runUp();break;
            case 68:myPuzzle.runRight();break;
            case 83:myPuzzle.runDown();break;
            case 65:myPuzzle.runLeft();break;
            default:break;
        }
        cxt.clearRect(0,0,400,400);
        drawMyPuzzle(aUint);
        checkUint();
    }
}());
