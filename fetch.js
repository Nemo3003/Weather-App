class Fetch {
  async getCurrent(input) {
    const myKey = "e84b35ada4add5a25b97ab4d6f88ed5b";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
