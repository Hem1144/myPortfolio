const author = "Hemlal Dulal";

const image = require("../public/screenshot.webp");

const description =
	"Software developer from Moldova, Republic of, who loves to develop beautiful websites, single page applications, customer relationship management or code from scratch using React and Next.js";
const url = "https://hemlal-dulal-portfolio.vercel.app/";
export const AppMetadata = {
	metadataBase: new URL("https://hemlal-dulal-portfolio.vercel.app/"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Hemlal Dulal",
		"Hemlal Dulal	 - software developer",
		"Frontend developer",
		"Flutter developer",
		"Portfolio website",
		"Frontend Developer Portfolio"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: { image },
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: { image },
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
