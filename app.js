let myTextarea = document.getElementById('codeEditor');
let lineNumbersBtn = document.getElementById('lineNumbersBtn');
let colorPicker = document.getElementById('colorPicker');
let preview = document.getElementById('preview');
let themeSwitcher = document.getElementById('themeSwitcher');
let fontSizeSwitcher = document.getElementById('fontSizeSwitcher');
let languageSwitcher = document.getElementById('languageSwitcher');
let editor = CodeMirror.fromTextArea(myTextarea, {
    lineNumbers: true
});

let lineNumbers = true;


lineNumbersBtn.addEventListener('click', () => {
    lineNumbers = !lineNumbers;
    editor.setOption("lineNumbers", lineNumbers);
});
colorPicker.addEventListener('input', (e) => {
    preview.style.background = e.target.value;
});
themeSwitcher.addEventListener('change',(e)=>{
    let themeCSS = document.getElementById('themeCSS');
    themeCSS.parentNode.removeChild(themeCSS);
    let newTheme = document.createElement('link');
    newTheme.id = 'themeCSS';
    newTheme.rel = 'stylesheet';
    newTheme.href = 'codemirror/theme/'+e.target.value+'.css';
    document.head.appendChild(newTheme);
    editor.setOption("theme", e.target.value);

})

fontSizeSwitcher.addEventListener('change',(e)=>{
    document.querySelector('.CodeMirror').style.fontSize = e.target.value;
});
languageSwitcher.addEventListener('change',(e)=>{
    editor.setOption("mode", e.target.value);
});

const exportImage = (size) => {
    console.log(size);
    preview.style.transform = 'scale('+size+')';
    html2canvas(preview).then(canvas => {
        preview.style.transform = 'scale(1)';
        let link = document.createElement('a');
        link.download = 'code.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    })

}

editor.setOption("mode", "python");
editor.setOption("theme", "base16-dark");

