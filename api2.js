
    fetch('https://restcountries.com/v3.1/independent?status=true')
    .then(res =>res.json())
    .then(data=>display(data))



function display(countries){
    const divId2=document.getElementById("divId2")
    countries.forEach(countrie => {
        
        const div2=document.createElement('div')
        div2.classList.add('user')
        div2.innerHTML=`
                    <img src="${countrie?.flags?.png}"> 
                    <h1>${countrie?.name?.official}</h1>
                    <p>Population: ${countrie?.population}</p>
                    <p>Area: ${countrie?.area}</p>
                    <p>Capital: ${countrie?.capital}</p>
                    <p>Language: ${countrie?.languages?.eng}</p>
                    <p>Region: ${countrie?.region}</p>
                    <button>See More</button>
                    `
        divId2.appendChild(div2)
    }
    )
}