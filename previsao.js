//função para a previsão
let dataAtual = new Date();
let horaAtual = dataAtual.getHours();
let horaFormatada = horaAtual.toString().padStart(2, '0');
let temperatura = "num"
console.log(horaFormatada)


async function getPrevisao(){
    const latitude = document.querySelector('input#Latitude').value
    const longitude = document.querySelector('input#Longitude').value
    try{
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`)
      const data = await response.json()
      console.log(data)
      document.getElementById('Resultado').innerHTML = ""
      for (let index = 0; index <= horaAtual; index++) {
        temperatura = data.hourly.temperature_2m[index]
      }
        document.getElementById('Resultado').innerHTML = `<span> ${temperatura}° C</span>`
    } catch (error){
      alert(error.message)
    }
  }

//CEP:
//83005340
//Coordenadas:
//-25.537525, -49.202125

