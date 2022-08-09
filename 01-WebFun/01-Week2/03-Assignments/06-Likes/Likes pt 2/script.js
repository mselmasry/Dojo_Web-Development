
var count1 = 3;
var count2 = 3;
var count3 = 3;

function like1()
{        
    likecount = document.querySelector("#count1");

    count1 +=1;
    likecount.innerText = count1 + " Like(s)";
}

function like2()
{        
    likecount = document.querySelector("#count2");

    count2 +=1;
    likecount.innerText = count2 + " Like(s)";
}

function like3()
{        
    likecount = document.querySelector("#count3");

    count3 +=1;
    likecount.innerText = count3 + " Like(s)";
}