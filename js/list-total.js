let total = 0
let el = document.getElementsByClassName('a-price-whole')
for (let i = 0; i < el.length; i++) {
    total += parseInt(el[i].innerHTML.replace(",", ""))
}
let list_name = document.getElementById('profile-list-name')
list_name.innerHTML = list_name.innerHTML + ' ( ' + total.toLocaleString() + '円 ) '