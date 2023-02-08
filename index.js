const data = document.getElementById("data");

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    for (let user of res.data) {
      const div = document.createElement("div");
      const div2 = document.createElement("div");
      const h1 = document.createElement("h1");
      const img = document.createElement("img");
      div.classList = "bg-black  min-h-[69%] min-w-[100px]";
      h1.textContent = user.name;
      h1.classList = "text-yellow-800";
      img.src = "pp.jpg";
      img.classList = "w-10 bg-yellow-50";

      div2.classList = "h-auto";

      div.appendChild(div2);
      div.appendChild(h1);
      div.appendChild(img);
      data.appendChild(div);
    }
    // data.innerHTML = res.data;
  })
  .catch((err) => {
    console.log(err);
  });
