function incluirIndicador() {
    let select = document.querySelector('select#sellista')
    let indicador = select.options[select.selectedIndex]
    let res = document.querySelector('div#res')

    if (indicador === undefined ) {
        window.alert('Por favor, selecione um indicador!')
    } else {
        res.innerHTML = ''
        res.innerHTML += indicador.text
        }
    }