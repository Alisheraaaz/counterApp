const counter = document.querySelector('#counter');
const btns = document.querySelectorAll('.btn');

let count = 0;
btns.forEach((btn) =>{
    btn.addEventListener("click", (e) => {
        const design =e.currentTarget.classList;
         if ( design.contains("increase")) {
            count++;
            counter.classList.add("up");

            setTimeout(() =>{
                counter.classList.remove("up");
            },500 );
          }  else if (design.contains("decrease")){
            count--;
            counter.classList.add("down");
            setTimeout(() =>{
                counter.classList.remove("down");
            },5000 );
          } else {
            count = 0
          }
          if (count > 0){
            counter.style.color = "blue"
        }
         if (count < 0){
            counter.style.color = "red"
         }  
         if ( count === 0){
            counter.style.color = "grey"
         }
         counter.textContent = count;
         
        })})
