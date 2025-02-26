let p = document.querySelector('p')
let input = document.querySelector('input')

const contacts= [
    {name: 'Verla', number: '(55) 9 9105-2717'},
    {name: 'Sabrina', number: '(55) 9 9106-2818'},
]

function search(){
    for(const contact of contacts){
        if(input.value.toLowerCase() == contact.name.toLowerCase()){
            p.innerHTML = `Contato encontrado.<br> Nome: ${contact.name} <br> Fone: ${contact.number}`
            break
        }else{
            p.innerHTML = "Contato não encontrado,tente novamente."
        }
    }
}
