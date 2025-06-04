import Link from "next/link";

export const NYC_TLC_DESCRIPTION_ID = () => {
	return (
		<div>
			<p>
				Proyek ini menganalisis dataset NYC-TLC untuk mengidentifikasi jam dan lokasi dengan penghasilan tertinggi menggunakan Python dan Tableau. Dengan menggabungkan data penghasilan, jarak tempuh, dan jumlah perjalanan, analisis ini memberikan wawasan penting untuk mengoptimalkan operasional pengemudi.
				<br />
				<br />
				Visualisasi menunjukkan pola menarik seperti puncak penghasilan pagi di Brooklyn dan lonjakan penghasilan bernilai tinggi pada malam hari di Staten Island. Dashboard interaktif membantu pemangku kepentingan memahami data kompleks secara intuitif dan membuat keputusan yang lebih tepat.
			</p>
		</div>
	);
};

export const NYC_TLC_DESCRIPTION_EN = () => {
	return (
		<div>
			<p>
				This project analyzes the NYC-TLC dataset to identify high-earning hours
				and locations using Python and Tableau. By aggregating trip earnings,
				distance, and frequency, it reveals key insights for optimizing
				driver operations.
				<br />
				<br />
				Visualizations highlight patterns like Brooklyn’s early-morning peak and
				Staten Island’s high-value evening trips. The dashboard offers stakeholders
				an intuitive way to interpret complex data and make informed decisions.
			</p>
		</div>
	);
};

export const VISUALPATHFINDER_DESCRIPTION_ID = () => {
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
