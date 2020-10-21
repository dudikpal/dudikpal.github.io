function createCard(id, title, text, image = null) {
  const parent = document.querySelector(".row");
  const card = document.createElement("div");
  card.setAttribute("class", "col-sm-4 col-lg-3 d-flex");   
  
  
  card.innerHTML = 
    `    
      <div class="card text-center m-4" id="${id}" style="height: 550px; width:22rem;">
      <h5 class="card-title" style=" margin-top: .8rem;">${title}</h5>
      <img class="card-img-top" style="height: 10vw;" src=${image}>
          <div class="card-header" role="navigation">
              <nav class="nav nav-pills flex-column flex-sm-row">
                  <!-- .addClass(active) & removeAttribute("hidden") -->
                  <a class="text-sm-center nav-link csharp mx-1"  hidden>C#</a>
                  <a class="text-sm-center nav-link java mx-1" hidden>Java</a>
                  <a class="text-sm-center nav-link javascript mx-1" hidden>JS</a>
                  <a class="text-sm-center nav-link sql mx-1" hidden>SQL</a>
              </nav>
          </div>
          <div class="card-body" style="overflow: hidden;">
              <p class="card-text">${text}</p>
              
          </div>
          <div class="card-footer">
          </div>

      </div>  
    `;
  parent.appendChild(card);
};



export default createCard;

/*

*/