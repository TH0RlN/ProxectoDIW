var menu = document.getElementById('despmenu');
var selected = -1;

document.getElementById('button').addEventListener('click', evt=>
{
    if (selected < 0)
    {
        menu.style.display = 'block';
        menu.style.textAlign = 'right';
        menu.style.backgroundColor = '#0000007c';
    }
    else
    {
        menu.style.display = 'none';
    }
    selected *= -1;
});