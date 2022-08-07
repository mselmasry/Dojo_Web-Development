function remove(element)
{
    element.remove();
}

function togglelogin(element)
{
    if(element.innerText == "Login")
    element.innerText = "Logout";

    else
    element.innerText = "Login";
}