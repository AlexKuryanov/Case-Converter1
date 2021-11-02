const upper = document.getElementById('upper-case'),
    lower = document.getElementById('lower-case'),
    proper = document.getElementById('proper-case'),
    sentence = document.getElementById('sentence-case'),
    textarea = document.getElementById('textarea'),
    saveText = document.getElementById('save-text-file');

upper.addEventListener('click', function () {
    textarea.value = textarea.value.toUpperCase();
});

lower.addEventListener('click', function () {
    textarea.value = textarea.value.toLowerCase();
});

proper.addEventListener('click', function () {
    let arr = textarea.value.toLowerCase().split(' ');
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
    }
    textarea.value = newArr.join(' ');
})

sentence.addEventListener('click', function () {
    let arr = textarea.value.toLowerCase().split(/([?.!]\s)/);
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
    }
    textarea.value = newArr.join('');
})

saveText.addEventListener('click', function () {
    const text = textarea.value;
    const filename = "text.txt";

    download(filename, text);
})

function download(filename, text) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}