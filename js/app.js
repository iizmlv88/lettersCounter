let input = document.querySelector('.userText')
let btn = document.querySelector('.btn')

btn.addEventListener('click', addletters = () => {
    // console.log('push');
    let letters = {}
    // console.log("input", input); // Прилітає розмітка
    // console.log("input.value", input.value);  // прилітають данні 

    for (let i = 0; i < input.value.length; i++) {
        for (let b = 0; b <= Object.keys(letters).length; b++){
           if (input.value[i] !== Object.keys(letters)[b]) {
            letters[input.value[i]] = 0
           }
        }
        
    }
    // console.log(letters);
    for (let b = 0; b <= Object.keys(letters).length; b++) {
        for (let i = 0; i < input.value.length; i++) {
            if (input.value[i] === Object.keys(letters)[b]) {
                letters[Object.keys(letters)[b]] += 1
                
            }
            
        }
        
    }
    // console.log(letters);
    let keySort = Object.keys(letters).sort(function(a, b){
        return letters[b] - letters[a];
    })
    // console.log(keySort);

    let ul = document.querySelector('.list')
    let input_length = input.value.length
    for (let i = 0; i < keySort.length; i++) {
        let d = keySort[i];
        let interest = letters[d] / input_length * 100
        ul.insertAdjacentHTML("beforeend", `<li>"${d}": ${letters[d]} - ${interest.toFixed(1)}%</li>`)
    }

    
})