function includeHTML(id, file)
{
    fetch(file).then(response => response.text()).then(data => document.getElementById(id).innerHTML = data)
    .catch(error => console.error(error))    
}