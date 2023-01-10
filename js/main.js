let b = 'x';
let resu = document.getElementById('res');
let squares=[];
function compare(){
    for ( let i = 1; i <10 ; i++){
        squares[i]= document.getElementById('item'+i).innerHTML;
    }
    if(squares[1]==squares[2] && squares[1]==squares[3] && squares[1] != '' )
    {
        detail(1,2,3);
    }
    else if (squares[4]==squares[5] && squares[4]==squares[6] && squares[6] != ''){ detail(4,5,6);}
    else if (squares[7]==squares[8] && squares[7]==squares[9] && squares[9] != ''){ detail(7,8,9);}
    else if (squares[1]==squares[4] && squares[7]==squares[1] && squares[7] != ''){ detail(1,4,7);}
    else if (squares[2]==squares[5] && squares[5]==squares[8] && squares[8] != ''){ detail(2,5,8);}
    else if (squares[3]==squares[6] && squares[6]==squares[9] && squares[9] != ''){ detail(3,6,9);}
    else if (squares[1]==squares[5] && squares[5]==squares[9] && squares[9] != ''){ detail(1,5,9);}
    else if (squares[3]==squares[5] && squares[5]==squares[7] && squares[7] != ''){ detail(3,5,7);}
}
function detail(x,y,z){
    resu.innerHTML = `${squares[x]} is the winner `;

    document.getElementById('item'+x).style.background= 'rgb(5, 8, 51)';
    document.getElementById('item'+y).style.background= 'rgb(5, 8, 51)';
    document.getElementById('item'+z).style.background= 'rgb(5, 8, 51)';
    setTimeout(function(){location.reload()},4000);
}
function newgame(){
    location.reload();
}
function game(id)
{
    let element =document.getElementById(id);
    if( b ==='x' && element.innerHTML==''){
        element.innerHTML = 'X';
         b = 'o';
 
    }else if(b === 'o' && element.innerHTML == '')
    {
        element.innerHTML = 'O';
        element.style.color= 'rgb(255, 245, 58)'
        b = 'x'
    }
    compare();
}
