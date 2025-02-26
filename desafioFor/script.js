let input = document.querySelector('input')
let p = document.querySelector('p')

const contacts= [
    {name: 'Verla', number: '(55) 9 9105-2717'},
    {name: 'Sabrina', number: '(55) 9 9106-2818'},
    {name: 'Fernanda', number: '(55) 9 9106-2818'},
]

function search(){
    for (let i = 0; i < contacts.length; i++) {
        if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
            p.innerHTML = `Contato encontrado.<br> Nome: ${contacts[i].name} Número: ${contacts[i].number}`

            break
        }else{
            p.innerHTML = `Contato não encontrado.Tente novamente.`
        }
        
    }
    
}