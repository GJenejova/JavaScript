let saltyTree = {
    title: 'Are you very hungry?',
    options: [
        {
            title: 'Is it Pizza?',
            options: [
                {
                    title: "Great! Check out Lorenza via Thuisbezorg.nl"
                },
                {
                    title: 'Is it Hamburger',
                    options: [
                        {
                            title: "Great! Check out Thuisbezorg and enjoy your burger!"
                        },
                        { title: "I give up. Have some tea" }]

                }
            ]
        },
        {
            title: 'Maybe Doritos?',
            options: [
                {
                    title: 'Great! Have some Doritos'
                },
                {
                    title: 'Maybe some french fries?',
                    options: [
                        {
                            title: "Great! McDonals is just around the corner"
                        },
                        {
                            title: 'I give up. Have some tea'
                        }
                    ]
                }
            ]
            
        }
    ]
}

let snackTree = {
    title: 'Maybe Doritos?',
    options: [
        {
            title: 'Great! Have some Doritos'
        },
        {
            title: 'Maybe some french fries?',
            options: [
                {
                    title: "Great! McDonals is just around the corner"
                },
                {
                    title: 'I give up. Have some tea'
                }
            ]
        }
    ]
}

function recursiveConfirm(nodeList) {
    if (!nodeList.options) {
        alert(nodeList.title);
        return;
    }

    let result = confirm(nodeList.title);
    if (result === true) {
        recursiveConfirm(nodeList.options[0])
    } else if (result === false) {
        recursiveConfirm(nodeList.options[1])
    }
}

alert(`
Hello! Welcome to "What should I eat tonigt"

Press 1 to check for salty inspiration

Press 2 to check for sweet inspiration
Press 3 to check for healthy inspiration

`)

var snack = prompt('What do you want')

if (snack === "1") {
    recursiveConfirm(saltyTree);
} else if (snack === "2") {
    recursiveConfirm(snackTree);
}




/*
} else if (snack === 2){
var sweet= confirm("Are you very hungry")
if (sweet === true){

}else(sweet=== false){

}

}else if (snack === 3){
var healthy= confirm("Are you very hungry")
if (healthy=== true){

}else(healthy=== false){

}

} else{
  alert("Okay, you're on a diet, go drink some tea!")
}

*/