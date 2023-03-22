
function gen(n, g)
{
    let related;
    if(g == 'f' && n > 0)
    {
        related = "Daughter"
    }
    else if(g == 'f' && n < 0)
    {
        related = "Mother"
    }
    else if(g == 'm' && n > 0)
    {
        related = "Son"
    }
    else
    {
        related = "Father"
        
    }

    switch(n)
    {
        case -3:
        case 3:
            console.log("Great grand" + related);
            break;
        case -2:
        case 2:
            console.log("Grand" + related);
            break;
        case -1:
        case 1:
            console.log(related)
            break;
        case 0:
            console.log("Me");
            break;
    }

}

let n = -2
let g = 'm'

gen(n,g)