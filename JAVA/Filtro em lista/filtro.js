let filterInput = document.getElementById('search');
search.addEventListener('keyup', filterName);

function filterName() {
    let filterValue = document.getElementById('filterInput').value.toUpperCase();

    let ul = document.getElementById('box_list');

    let li = ul.querySelectorAll('li.list');

    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        console.log(a);

        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = 'block'
        } else {
            li[i].style.display = 'none'
        }
    }
}