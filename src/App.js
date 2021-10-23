import React from "react";
import Info from './components/info';
import Form from './components/form';
import Weather from './components/Weather';

const API_KEY = "6f92ca481dcf932ce398fde4c8a34d05";

class App extends React.Component {

  state = {
   temp: undefined,
   city: undefined,
   country: undefined,
   sunrise: undefined,
   sunset: undefined,
   error: undefined
  }

 gettingWeather = async (e) => {
   e.preventDefault();
   const city = e.target.elements.city.value;
   const api_url = await
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=${city}appid=${API_KEY}&units=metric`);
   const data = await api_url.json();

   if(city === true) {
    this.setState({
     temp: data.main.temp,
     city: data.name,
     country: data.sys.country,
     sunrise: data.sys.sunrise,
     sunset: data.sys.sunset,
     error:""
   });
  }
 }

 render() {
   return (
    <div>
     <Info />
     <Form weatherMethod={this.gettingWeather} />
     <Weather
      temp={this.state.temp}
      city={this.state.city}
      country={this.state.country}
      sunrise={this.state.sunrise}
      suset={this.state.sunset}
      error={this.state.error}
      />
    </div>
   );
 }
}

export default App;

