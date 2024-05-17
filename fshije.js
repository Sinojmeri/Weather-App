// async function pokeNames() {
//     const url = new URL('pokemon/', 'https://pokeapi.co/api/v2/');
//     const response = await fetch(url);
//     if (response.ok) {
//         const data = await response.json();
//         console.log(data);
//     }
// }
// pokeNames();



// async function getIP() {
//     url = "https://api.ipify.org";
//     const response = await fetch(url);
//     const ip = await response.text();
//     return ip;
// }
// async function getGeo(ip) {
//     url = new URL(`json/${ip}`, "http://ip-api.com/");
//     const response = await fetch(url);
//     const {lat, lon, city} = await response.json();
//     return { lat, long: lon, city };
// }
// async function location() {
//     const ip = await getIP();
//     const location = await getGeo(ip);
//     console.log(location);
// }
// location();
