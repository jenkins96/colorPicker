const p = {
  color: document.querySelector("#color"),
  output: document.querySelector("#output")
};

const m = {
  init() {
    p.color.addEventListener("input", (_) => {
      const value = p.color.value;
      p.output.innerHTML = value;
      p.output.style.backgroundColor = `${value}`;
      p.output.style.color = "#fff";
      console.log(value);
    });
  },
};

m.init();
