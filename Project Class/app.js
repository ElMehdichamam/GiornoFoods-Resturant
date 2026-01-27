const cards = document.querySelectorAll(".star");

cards.forEach(card => {
    card.addEventListener("click", () => {
        if (card.style.color === "yellow") {
            card.style.color = "rgb(219, 206, 190)";
        } else {
            card.style.color = "yellow";
        }
    });
});
const badge=document.getElementById("span");

const btns=document.querySelectorAll(".btn");

let i=0;

btns.forEach(btn =>{
    btn.addEventListener("click",()=>{
        i++;
        badge.textContent=i
    })
})
const Name=document.getElementById("name").value;

const btn=document.getElementById("sub");

btn.addEventListener("submit",(e)=>{
      e.preventDefault();

  alertBox.classList.remove("d-none");
  alertBox.textContent=`Thanks for Your Feedback ${Name}`;

  setTimeout(() => {
    alertBox.classList.add("d-none");
  }, 2000);
})

