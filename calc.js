function clearall()
{
    document.getElementById("res").value=""
    document.getElementById("pre").value=""
}
function vu(input)
{
    document.getElementById("pre").value+=input
}
function output()
{
    document.getElementById("res").value=eval(document.getElementById("pre").value)
}