import { Link } from "react-router-dom";
export default function Header(){
    return(
        <>
          <header id="site-header" class="fixed-top">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark stroke">
        <h1><Link class="navbar-brand" to="/">
            News 24X7
          </Link></h1>

        <button class="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
          data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
          <span class="navbar-toggler-icon fa icon-close fa-times"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ml-auto mr-5">
          <li class="nav-item active">
                <Link class="nav-link" to="/">Home <span ></span></Link>
            </li>
            <li class="nav-item @@about__active">
              <Link class="nav-link" to="/startup">Startup</Link>
            </li>
            <li class="nav-item @@services__active">
              <Link class="nav-link" to="/sports">Sports</Link>
            </li>
            <li class="nav-item @@contact__active">
              <Link class="nav-link" to="/world">World</Link>
            </li>
            <li class="nav-item @@contact__active">
              <Link class="nav-link" to="/politics">Politics</Link>
            </li>
            <li class="nav-item @@contact__active">
              <Link class="nav-link" to="/business">Business</Link>
            </li>
            <li class="nav-item @@contact__active">
              <Link class="nav-link" to="/technology">Technology</Link>
            </li>
            <li class="nav-item @@contact__active">
              <Link class="nav-link" to="/National">National</Link>
            </li>
            <li class="nav-item @@contact__active">
              <Link class="nav-link" to="/Entertainment">Entertainment</Link>
            </li>
          </ul>
        </div>


        <div class="mobile-position">
          <nav class="navigation">
            <div class="theme-switch-wrapper">
              <label class="theme-switch" for="checkbox">
                <input type="checkbox" id="checkbox"/>
                <div class="mode-container py-1">
                  <i class="gg-sun"></i>
                  <i class="gg-moon"></i>
                </div>
              </label>
            </div>
          </nav>
        </div>
       
      </nav>
    </div>
  </header>
        </>
    );
}