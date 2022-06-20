let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
  event.addEventListener("click", () => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      event.classList.add("active");
    }
  });
});

var web3;
async function Connect(){
	await window.web3.currentProvider.enable();
	web3 = new web3(window.web3.currentProvider);

};
