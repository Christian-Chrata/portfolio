import Link from "next/link";

export const JOBBA_DESCRIPTION_EN = () => {
	return (
		<div>
			<p>
				A revolutionary job platform that aims to connect job seekers,
				employers, and consultants all under the same roof. The application is
				built to work as a full end-to-end experience, where the user can find a
				job, apply for a job, and get a job all in the same place.
				<br />
				<br />
				This project has been built over a long period of time with a startup
				team consisting of multiple people. There are other software developers
				involved, but also students from the commercial sector and marketing
				professionals. The project has taught me a lot about teamwork, project
				management, and how to build your own product from scratch.
			</p>
		</div>
	);
};

export const JOBBA_DESCRIPTION_FI = () => {
	return (
		<div>
			<p>
				Uudenlainen työnhakualusta, jonka tarkotuksena on yhdistää työnhakijat,
				työntajat ja konsultit kaikki saman katon alle. Applikaatio on
				rakennettu toimimaan täysin 'e2e-kokemuksena', jossa käyttäjä löytää
				työpaikan, hakee työpaikkaa ja saa työpaikan kaikki samassa paikassa.
				<br />
				<br />
				Tätä projektia on rakennettu pitkään ja hartaasti usean henkilön
				startup-tiimissä. Mukana on muita ohjelmistokehittäjiä, mutta myös
				kaupallisen alan opiskelijoita ja markkinointiosaajia. Projekti on
				opettanut minulle erittäin paljon tiimityöskentelystä,
				projektinhallinnasta ja kuinka rakentaa oma tuote alusta lähtien.
			</p>
		</div>
	);
};

export const EXPLOTRACK_DESCRIPTION_FI = () => {
	return (
		<div>
			<p>
				Fullstack-applikaatio rakennettu Next.js-frameworkilla hyödyntäen
				React-kirjastoa. Applikaation hostaa Vercel ja se hyödyntää
				Postgres-tietokantaa. Applikaatio on kirjanpitotyökalu yritykselle, joka
				pitää kirjaa yrityksen räjähdetilauksista ja seuraa tuotteiden kulkua
				sovelluksen avulla. Applikaatio sisältää käyttäjäautentikaation,
				lokitietojen kattavan seurannan, ja edistyneen middlewaren.
				<br />
				<br />
				Tämän projektin kautta olen sisäistänyt paljon erilaisia web-kehitykseen
				ja tietoturvaan liittyviä asioita. Olen oppinut paljon
				fullstack-kehityksestä; kuinka hallita tuotantotietokantaa, kuinka
				hallita sessioita asiakaspuolella mutta myös suorittaa asianmukainen
				sessioautentikointi palvelinpuolella, kuinka validoida käyttäjän
				syötteet, sähköpostivarmennukset jne.
			</p>
		</div>
	);
};

export const EXPLOTRACK_DESCRIPTION_EN = () => {
	return (
		<div>
			<p>
				Fullstack application built with the Next.js framework and utilizing the
				React library. The application is hosted on Vercel and uses a Postgres
				database. The application is a bookkeeping tool for a company that keeps
				track of company orders and the flow and transactions of explosive
				products. The application includes user authentication, extensive
				logging, and advanced middleware.
				<br />
				<br />
				With this project, I&apos;ve really tried to understand various security
				aspects of web development. I&apos;ve learned a lot about fullstack
				development; how to handle production databases, how to manage sessions
				client-side but also perform appropriate session authentication
				server-side, how to validate user input, email verifications, etc.
			</p>
		</div>
	);
};

export const SPOTISAVER_DESCRIPTION_FI = () => {
	return (
		<div>
			<p>
				Simppeli mutta hyödyllinen palvelu Spotify-soittolistojen analysointiin
				ja vientiin. Palvelu on rakennettu Next.js:llä ja Reactilla. Hostauksen
				hoitaa Vercel. Palvelu on rakennettu käyttäjäkokemuksen ja
				yksinkertaisuuden näkökulmasta.
				<br />
				<br />
				Soittolistoihin liittyvä data haetaan Spotifyn virallisesta API:sta ja
				parsitaan JSON-tiedostosta. Lopuksi data analysoidaan omalla
				analysointilogiikallani. Tämä projekti oli ensimmäinen kerta, kun
				toteutin ratelimitterin ja ymmärsin API-reittien suojaamisen tärkeyden.
			</p>
		</div>
	);
};

export const SPOTISAVER_DESCRIPTION_EN = () => {
	return (
		<div>
			<p>
				A useful and simple service that allows users to analyze and export
				their Spotify playlists. The service is built with Next.js and React.
				Hosted on Vercel. The service is built with a focus on user experience
				and simplicity.
				<br />
				<br />
				The data is fetched and parsed from JSON responses provided by the
				official Spotify API, and finally analyzed through my custom analyzing
				logic. This project was also the first time I implemented a rate limiter
				and understood the importance of securing your API routes.
			</p>
		</div>
	);
};

export const VISUALPATHFINDER_DESCRIPTION_FI = () => {
	return (
		<div>
			<p>
				Reitinhakutyökalu (ja visualisointi) rakennettu Reactilla ja Next.js:llä
				opintyönä yliopistolla. Hostauksen hoitaa Vercel. Sovellus mahdollistaa
				kolmen eri reitinhakualgoritmin, Dijkstran, A* ja Jump Point Search,
				vertailun ja visualisoinnin. JPS-algoritmin implementointi teoreettiseen
				tutkimuspaperiin pohjautuen oli oppimiskokemuksena palkitseva.
				<br />
				<br />
				Algoritmien implementointi TypeScriptillä ei ehkä ollut optimaalisin
				valinta (vaikka aina voi rakentaa mitä vain millä vain), mutta halusin
				nähdä hieman vaivaaa myös käyttöliittymän suhteen. Monikielisyys olisi
				tehnyt projektista turhan monimutkaisen yliopistoprojektiksi. Tuli myös
				samalla opittua Jest-kirjastosta paljon.
			</p>
		</div>
	);
};

export const VISUALPATHFINDER_DESCRIPTION_EN = () => {
	return (
		<div>
			<p>
				Fun pathfinder application built as a university assignment. The
				application is built with React and Next.js. Hosted on Vercel. The
				application allows users see three different pathfinding algorithms,
				Dijkstra&apos;s, A* and Jump Point Search, in action, as well as compare
				their performance. Learning to implement a pathfinding algorithm (JPS)
				from a research paper was a great learning experience.
				<br />
				<br />
				Building the algorithms with TypeScript was maybe not the most optimal
				choice (although you can always build anything with anything), but I
				wanted to make a really great UI for the application, and involving
				multiple languages would have made the project unnecessarily complex for
				a university assignment. I learned a ton of the Jest library during the
				development of this project.
			</p>
		</div>
	);
};

export const TIIRASCRAPER_DESCRIPTION_FI = () => {
	return (
		<div>
			<p>
				Hyödyllinen Pythonilla ja Beautifulsoup-kirjastolla rakennettu
				web-scraper, joka hakee ja parsii lintuhavaintotietoja{" "}
				<Link className="hover:underline" href="https://www.tiira.fi/">
					<em>Tiira.fi</em>
				</Link>
				-palvelusta. Scraper on rakennettu palvelimena, joten se voidaan jättää
				pyörimään niin pitkäksi aikaa kuin tarvitaan.
				<br />
				<br />
				Scraperissa on paljon muitakin ominaisuuksia: käyttäjä voi esimerkiksi
				filtteröidä tietyt lajit tai kaupungit pois havainnoista
				konfiguraatiotiedostojen avulla. Scraperissa on myös sisäänrakennettu
				Telegram-viestintäjärjestelmä, joka voidaan konfiguroida lähettämään
				automatisoituja viestejä käyttäjälle aina uusien havaintojen
				löytymisestä. Scraper vieläpä kaupan päälle pitää kirjaa viimeisimmistä
				havainnoista, joten yksikään havainto ei koskaan tule lähetetyksi
				kahdesti.
			</p>
		</div>
	);
};

export const TIIRASCRAPER_DESCRIPTION_EN = () => {
	return (
		<div>
			<p>
				Useful web scraper built for real-life use with Python to scrape bird
				observations from the Finnish bird observation service{" "}
				<Link className="hover:underline" href="https://www.tiira.fi/">
					<em>Tiira.fi</em>
				</Link>
				. The scraper is built with the BeautifulSoup library and the requests
				library. The scaper is also built as a server, so it can be left running
				for as long as needed.
				<br />
				<br />
				The scraper has a ton of built-in functionality, like the usage of
				configuration files for a user to allow/block certain species and/or
				cities. The scraper has a built-in Telegram messaging system, which can
				be configured to send user updates when new observations matching the
				predetermined criteria are found. The scraper also keeps track of recent
				history so no single observation is ever sent twice.
			</p>
		</div>
	);
};

export const FLAGGAME_DESCRIPTION_FI = () => {
	return (
		<div>
			<p>
				Viimeistelty työpöytäsovellus rakennettu Pythonilla
				yliopistoprojektiksi. Sovellus on paikallinen yksinpeli, jossa
				tarkoituksena on arvata (tai tietää) oikein valtioiden lippuja. Sovellus
				on rakennettu Pythonilla ja käyttäjäystävällinen UI on toteutettu
				Tkinter-kirjastolla.
				<br />
				<br />
				Pelissä on jopa viisi erilaista pelimuotoa mukana, joissa jokaisessa on
				omat pisteytysmekanisminsa. Lisäksi peli pitää kirjaa pelihistoriasta ja
				laskee monia mielenkiintoisia tilastoja! Tämän projektin aikana opin
				paljon Python-ohjelmointikielestä yleisesti, mutta erityisesti ymmärsin
				dokumentaation ja yksikkötestauksen tärkeyden.
			</p>
		</div>
	);
};

export const FLAGGAME_DESCRIPTION_EN = () => {
	return (
		<div>
			<p>
				A completed Python desktop application built as a university assignment.
				The app is a local single-player game where the user has to guess (or
				know) the correct country for a flag. The game is built with Python and
				the user-friendly UI is powered by the Tkinter library.
				<br />
				<br />
				The game has five different game modes included, each with different
				pointing mechanisms. As an addition, the game tracks game history and
				calculates the user&apos;s lifelong statistics! During the development
				of this project, I learned a lot about the Python programming language
				in general, and especially I finally understood the importance of unit
				testing.
			</p>
		</div>
	);
};
