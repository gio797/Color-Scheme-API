const colors = document.getElementById("colors")
const form = document.getElementById('input-form')

function render(data){
    let colorsHtml = ''
        for (color of data.colors){
             colorsHtml += `
            <div class="colors-wrapper">
                <div class="col-cont" style="background-color:${color.hex.value}">
                </div>
                <p>${color.hex.value}</p>
            </div>`
        }
        document.getElementById("colors").innerHTML = colorsHtml
}

fetch('https://www.thecolorapi.com/scheme?hex=F55A5A&mode=analogic&count=5')
    .then(Response => Response.json())
    .then(data => {
        render(data)
})
        

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    
    const targetSelector = document.getElementById('selector').value
    const targetColor = document.getElementById('color-picker').value.slice(1)

    fetch(`https://www.thecolorapi.com/scheme?hex=${targetColor}&mode=${targetSelector}&count=5`)
        .then(Response => Response.json())
        .then(data => {
            render(data)
        })        
})

   