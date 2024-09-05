const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')
const btn = document.getElementById('btn')



function taskApp() {
    btn.addEventListener('click', function() {
        if(inputBox.value === '') {
            alert('somthing writhr')
        } else {
            let li = document.createElement('li');
            let span = document.createElement('span')
            listContainer.appendChild(li)
            li.textContent = inputBox.value
            li.className = 'checked'
            li.appendChild(span)
            span.innerHTML = '<i class="fa-solid fa-xmark"></i>' 
            console.log(li.parentElement)
            inputBox.value = ''
        }
    })
}
taskApp()
deleteAppenc()
function deleteAppenc() {
    listContainer.addEventListener('click', function(e) {
        if(e.target.tagName === 'SPAN') {
            e.preventDefault()
            e.target.parentElement.remove()
        }
    })
}



