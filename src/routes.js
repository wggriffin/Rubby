import HomePage from './pages/home/home-page-component';
import MainPage from './pages/main/main-page-component';
import AboutPage from './pages/about-page-component';
import MusicPage from './pages/music/music-page-component';
import ArtPage from './pages/art/art-page-component';
import VideoPage from './pages/video/video-page-component';
import ContactPage from './pages/contact-page-component';

class Route {
	constructor(path, component, isHome, isIndex, tag) {
		this.path = path;
		this.component = component;
		this.isHome = isHome;
		this.isIndex = isIndex;
		this.tag = (isIndex && tag) 
									? tag 
									: path.charAt(0).toUpperCase() + path.slice(1);
	}
}

var routes = [
	new Route('/', HomePage, true, true),
	new Route('main', MainPage, false, true, 'Rubby'),
	new Route('about', AboutPage, false, false),
	new Route('music', MusicPage, false, false),
	new Route('art', ArtPage, false, false),
	new Route('video', VideoPage, false, false),
	new Route('contact', ContactPage, false, false)
];


export default routes;