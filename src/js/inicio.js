import { getCountryName } from "./services/countryService";
import { getUser } from "./services/usersService";

getUser().then((user) => {
  console.log(user);
  const miDiv = document.getElementById("user");
  const miAvatar = document.getElementById("avatar");
  getCountryName(user.country_code).then((country) => {
    console.log("User: ", user);
    console.log("Country: ", country);
    miDiv.textContent = `${user.username} - ${country.name}`;
    miAvatar.src = `data:image;base64,${user.avatar}`;
  });
});
