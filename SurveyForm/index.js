const formGroup = document.querySelectorAll(".form-group");
console.log(formGroup);

for(let i = 0; i < formGroup.length; i++){
    formGroup[i].setAttribute('class', 'col-sm-12');
}