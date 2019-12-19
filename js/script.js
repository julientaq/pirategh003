import { Previewer } from 'https://unpkg.com/pagedjs@0.1.35/dist/paged.esm.js';
 

/* transforme en version imprimable au clic */
// document.querySelector('button.print').addEventListener('click', function (event) {
//   new Previewer().preview()
// });


// document.querySelector('button.popup').addEventListener('click', function (event) {
//   const new_window = window.open('https://www.toulouse.fr/', '_blank', 'resizable,scrollbars,status,width=500, screenX=300,height=200,alwaysRaised')
  
//   new_window.addEventListener('load', function() {
//       new_window.document.querySelector('.flash-info .title-article').innerText = 'Macron au carton'
//   })
  
// });


document.querySelector(".menu").addEventListener('click', function() {
  document.querySelector("nav").classList.toggle("hide");
})