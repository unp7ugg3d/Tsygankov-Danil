const node_for_click = document.getElementById("for_click")

function find_edit(){
    const secondName  = document.getElementById('second-name')
    console.log(secondName.innerText)
    secondName.innerText = 'Tsygankov'

    const name  = document.getElementById('name')
    console.log(name.innerText)
    name.innerText = 'Danil'

    const fathername  = document.getElementById('father-name')
    console.log(fathername.innerText)
    fathername.innerText = 'Olegovich'
    }

node_for_click.addEventListener("click",find_edit);

