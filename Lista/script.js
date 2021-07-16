
var myList = ['Abacaxi', 'Morango', 'Banana'];

function showList(arr){
    var listReturn = '';

    for(i = 0; i <= arr.length -1; i++){
        listReturn += i + " - " + arr[i] + '<br>'
    }
    document.getElementById('list').innerHTML = listReturn;
}

function insertItem(arr){
    var newItem = prompt('Digite um novo item:');

    if (newItem != null && newItem != ""){  myList.push(newItem);
    } else {
        alert('Nenhum item foi digitado !')
    } 
    showList(myList)
}
function removeItem(arr){
    var item = prompt('Digite o número do Item que deseja remover.')

    if (item != null && item != ""){
        arr.splice(item,1);
    } else {
        alert('Nenhum item foi excluído.')
    }
    showList(myList)
}

showList(myList);