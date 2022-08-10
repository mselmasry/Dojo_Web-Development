var reqcount = 2;
var conncount = 418;

function changeName()
{
    if(document.getElementById("title").innerText == "John Doe")
        document.getElementById("title").innerText = "Jane Doe";
    else if(document.getElementById("title").innerText == "Jane Doe")
        document.getElementById("title").innerText = "Ninja Coder";
    else
        document.getElementById("title").innerText = "John Doe";
}

function accrequest1()
{
    element = document.querySelector("#req1").remove();
    reqcount--;
    conncount++;
    document.querySelector("#reqcount").innerText = reqcount;
    document.querySelector("#conncount").innerText = conncount;
}

function rejrequest1()
{
    element = document.querySelector("#req1").remove();
    reqcount--;
    document.querySelector("#reqcount").innerText = reqcount;
}

function accrequest2()
{
    element = document.querySelector("#req2").remove();
    reqcount--;
    conncount++;
    document.querySelector("#reqcount").innerText = reqcount;
    document.querySelector("#conncount").innerText = conncount;
}

function rejrequest2()
{
    reqcount--;
    element = document.querySelector("#req2").remove();
    document.querySelector("#reqcount").innerText = reqcount;
}