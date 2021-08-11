

function header () {
    var page = $('.page');
    var header = `
     <header class="header ">
           <nav id="menu">
               <ul>
                   <li><a href="/">Home</a></li>
                   <li><a href="/gallery">Gallery</a></li>
                   <li><a href="/contact">Contact</a></li>
               </ul>
           </nav>

           <a href="#menu"><i class="fas fa-bars"></i></a>
           <div class="logo">W Songs</div>
      </header>
    `

   return page.append(header)
   
}

export default header();