let links = document.querySelectorAll(".links a");
let counter = document.querySelectorAll(".counter span");
let section = document.getElementById("Experience");
let start = false;
let link = document.getElementById( "links" );
let show = document.getElementById("show")

links.forEach((a) => {
  a.onclick = function () {
    if ( window.screen.width <= "1000" )
    {
      link.style.display = "none"
    }
    else
    {
      links.forEach( ( a ) => {
        a.classList.remove( "active" );
      } );
      this.classList.add( "active" );
    };
  }
});

window.onscroll = function () {
    if (window.scrollY >= "400") {
        if (!start) {
      counter.forEach((ele) => {
        countTop(ele);
      });
    }
    start = true;
  }

  function countTop(ele) {
    let end = ele.dataset.last;
    let conn = setInterval(() => {
      ele.textContent++;
      if (ele.textContent == end) {
        clearInterval(conn);
      }
    }, 2000 / end);
  }
};

function myFunction(x) {
  if (x.matches) { // If media query matches
    link.style.display = "none";
  } else {
   link.style.display = "block";
  }
}

let x = window.matchMedia("(max-width: 1000px)")
myFunction(x) // Call listener function at run time
x.addListener( myFunction ) // Attach listener function on state changes

show.onclick = function () {
  if ( link.style.display = "none" )
  {
    link.style.display= "flex"
  }
}

console.log(window.screen.width);