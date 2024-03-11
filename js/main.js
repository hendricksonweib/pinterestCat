
const url = `https://cataas.com/api/cats?tags=cute`

function CardsCat(cats){
return`
        <div class="main">
            <img class="cardsimg" src="${cats.mimetype}" alt="" srcset="">
        </div>
`
}

fetch(url)
.then((response)=>response.json())
.then((data)=>{
    // console.log(data)
    let catCardHtml = ''
    for (let index = 0; index < data.length; index++) {
        const cats = data[index];
        console.log(CardsCat(cats))
        catCardHtml += (CardsCat(cats))
    }    
const caixa = document.getElementsByClassName('conteiner')
caixa.innerHTML = catCardHtml
})
.catch((error)=>console.log(error))