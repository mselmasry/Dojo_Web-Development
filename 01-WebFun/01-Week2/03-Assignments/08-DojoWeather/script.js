function report()
{
    alert("Loading weather report ...");
}

function setTempC()
{
    //Today
    document.querySelector("#temp-today .temph").innerText = "24";
    document.querySelector("#temp-today .templ").innerText = "18";
    //Tomorrow
    document.querySelector("#temp-tom .temph").innerText = "27";
    document.querySelector("#temp-tom .templ").innerText = "19";
    //Friday
    document.querySelector("#temp-fri .temph").innerText = "21";
    document.querySelector("#temp-fri .templ").innerText = "16";
    //Saturday
    document.querySelector("#temp-sat .temph").innerText = "26";
    document.querySelector("#temp-sat .templ").innerText = "21";
}

function setTempF()
{
    //Today
    document.querySelector("#temp-today .temph").innerText = "75";
    document.querySelector("#temp-today .templ").innerText = "65";
    //Tomorrow
    document.querySelector("#temp-tom .temph").innerText = "80";
    document.querySelector("#temp-tom .templ").innerText = "66";
    //Friday
    document.querySelector("#temp-fri .temph").innerText = "69";
    document.querySelector("#temp-fri .templ").innerText = "61";
    //Saturday
    document.querySelector("#temp-sat .temph").innerText = "78";
    document.querySelector("#temp-sat .templ").innerText = "70";
}

function setunit()
{
    unit = document.getElementById("unit").value;

    if(unit == "F")
        setTempF();
    else
        setTempC();
}

function acceptCookies()
{
    document.getElementById("cookie").remove();
}