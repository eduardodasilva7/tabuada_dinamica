const multiplicationForm = document.querySelector("#multiplication-form")

const numberInput = document.querySelector("#number")

const multiplicationInput = document.querySelector("#multiplicator")

const multiplicationTitle = document.querySelector("#multiplication-title span")

const multiplicationTable = document.querySelector("#multiplication-operations")



//Evento

multiplicationForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    //Quando clicar no botção calcular, não quero que ele recarregue a página

    const multiplicationNumber = numberInput.value; // numero inserido da tabuada

    const multiplicatorNumber = +multiplicationInput.value; // Quantas vezes eu vou calcular o número inserido

    if (!multiplicationNumber || !multiplicatorNumber) return; // Só será executado se ambos os campos estiverem preenchidos
    
    createTable(multiplicationNumber, multiplicatorNumber); // vamos criar a função que cria a tabela mas para isso, precisamos garantir  que o campos "#multiplication-title span" e "#multiplication-operations" estejam vazios.....

})

const createTable = (number, multiplicationNumber) => {
    multiplicationTable.innerHTML = "";
    // Acesso o conteudo de texto e subtituo por string vazia

    // criando a tabela
    for (i= 1; i<=multiplicationNumber; i++ ){
        const result =number * i;
        const template = `
        <div class="row">
        <div class="operation">${number} x ${i} = </div>
        <div class="result">${result}</div>
         `

         const parser = new DOMParser(); 
         const htmlTemplate = parser.parseFromString(template,"text/html")
         const row = htmlTemplate.querySelector(".row")
         multiplicationTable.appendChild(row)
    }
    multiplicationTitle.innerText = number

}