// Fonctionnalité 1
document.querySelector("footer").addEventListener("click", function() {
    console.log("clique");
});

// Fonctionnalité 1-bis
let clickCount = 1;
document.querySelector("footer").addEventListener("click", function() {
    console.log(`clic numéro ${clickCount}`);
    clickCount++;
});

// Fonctionnalité 2
document.querySelector(".navbar-toggler").addEventListener("click", function() {
    document.getElementById("navbarHeader").classList.toggle("collapse");
});

// Fonctionnalité 3
let firstCard = document.querySelectorAll(".card")[0];
let firstCardEditButton = firstCard.querySelector(".btn-outline-secondary");

firstCardEditButton.addEventListener("click", function() {
  firstCard.querySelector(".card-text").style.color = "red";
});


// Fonctionnalité 4
let secondCard = document.querySelectorAll(".card")[1];
let secondCardEditButton = secondCard.querySelector(".btn-outline-secondary");

secondCardEditButton.addEventListener("click", function() {
  if (secondCard.querySelector(".card-text").style.color === 'green') {
    secondCard.querySelector(".card-text").style.color = '';
  } else {
    secondCard.querySelector(".card-text").style.color = 'green';
  }
});

// Fonctionnalité 5
let bootstrapLink = document.querySelector("link[rel='stylesheet']");
document.querySelector(".navbar").addEventListener("dblclick", function() {
  if (bootstrapLink.disabled) {
    bootstrapLink.disabled = false;
  } else {
    bootstrapLink.disabled = true;
  }
});

// Fonctionnalité 6
let cards = document.querySelectorAll(".card");

cards.forEach(card => {
  let viewButton = card.querySelector(".btn-success");
  
  viewButton.addEventListener("mouseover", function() {
    card.querySelector(".card-img-top").style.width = "20%";
    card.querySelector(".card-text").style.display = "none";
  });

  viewButton.addEventListener("mouseout", function() {
    card.querySelector(".card-img-top").style.width = "";
    card.querySelector(".card-text").style.display = "";
  });
});

// Fonctionnalité 7
document.querySelector(".btn-secondary").addEventListener("click", function() {
    let lastCard = document.querySelector(".album .row").lastElementChild;
    let firstCard = document.querySelector(".album .row").firstElementChild;
    document.querySelector(".album .row").insertBefore(lastCard, firstCard);
  });

// Fonctionnalité 8
document.querySelector(".btn-primary").addEventListener("click", function(event) {
    event.preventDefault();
    let firstCard = document.querySelector(".album .row").firstElementChild;
    document.querySelector(".album .row").appendChild(firstCard);
  });

// Fonctionnalité 9
document.querySelector(".navbar-brand").addEventListener("keypress", function(event) {
    let body = document.querySelector("body");
    body.className = ""; // Reset classes
    switch (event.key) {
      case 'a':
        body.classList.add("col-4");
        break;
      case 'y':
        body.classList.add("col-4", "offset-md-4");
        break;
      case 'p':
        body.classList.add("col-4", "offset-md-8");
        break;
      case 'b':
        // Reset classes, body is already reset
        break;
    }
  });
  