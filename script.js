const im = document.querySelector("#if");
im.style.display = "none";
function dragonball() {
  const dbz = document.getElementById("DBZ").value;
  // let num = parseFloat(dbz);

  fetch(`https://dragonball-api.com/api/characters/${dbz}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("could not fetch resource");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data.image);
      const sprite = data.image;
      const img = document.getElementById("if");
      img.setAttribute("src", `${sprite}`);
      // img.src = data.image;
      img.style.display = "block";

      const heading = document.getElementById("head");
      heading.innerText = `${data.name}`;
      heading.style.display = "block ";
    })

    .catch((error) => console.log(error));

  const mi = document.querySelector("div");
  mi.style.display = "none";
  im.style.display = "block";
}
