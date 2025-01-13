import GTN from "../assests/GTN.png";
import PasswordGenerator from "../assests/PasswordGenerator (1).png";
import TipCalculator from "../assests/TipCalculator.jpg";

const INFO = {
	main: {
		title: "Gabriel Indok David—Frontend Engineer and Tech Enthusiast",
		name: "Gabriel Indok David",
		email: "indokdavid2020@gmail.com",
		logo: "../logo.jpg",
	},

	socials: {
		instagram:
			"https://www.instagram.com/i_trieves/?igsh=ZGUzMzM3NWJiOQ%3D%3D",
		github: "https://github.com/Iamtrieves",
		linkedin: "https://www.linkedin.com/in/gabriel-indok-david",
	},

	homepage: {
		title: "Frontend Engineer and Tech Enthusiast.",
		description:
			"Tech-driven problem solver and lifelong learner with a passion for leveraging web development skills to contribute to innovative solutions. Focused on using technology to drive business growth and continuously expanding my knowledge base. Committed to delivering high-quality results and excited to take on new challenges across diverse roles and industries.",
	},

	about: {
		title: "I am Gabriel Indok David a Dynamic and proactive individual with a strong passion for technology, business, problem-solving and innovation.",
		description: (
			<section>
				<p>
					To me, coding is more than just a technical exercise. It's
					about leveraging technology to build innovative solutions
					and push the boundaries of what's possible.
				</p>{" "}
				<p>
					Beyond the realm of code, I find balance and inspiration in
					a variety of pursuits. Whether it's the physicality of a
					basketball game, the emotional resonance of music, or the
					immersive storytelling of film, these activities fuel my
					creativity and provide a fresh perspective on my work.
				</p>{" "}
				<p>
					My passion for technology extends beyond my professional
					life. I'm constantly exploring new trends and innovations,
					eager to harness their potential to drive progress. This
					ongoing pursuit of knowledge keeps me at the forefront of
					the industry.
				</p>{" "}
				<p>
					Throughout my career, I've been driven by a relentless
					pursuit of excellence and a commitment to continuous
					learning. I'm excited to apply my skills and knowledge to
					challenging projects and contribute to innovative solutions.
				</p>
			</section>
		),
	},

	// articles: {
	// 	title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
	// 	description:
	// 		"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	// },

	projects: [
		{
			title: "Password-Generator-App",
			description:
				"Password generator application that incorporates character sets, length options, and complexity levels, ensuring the generation of robust passwords.",
			logo: PasswordGenerator,
			linkText: "View Project",
			link: "https://iamtrieves.github.io/Password-Generator-App/",
		},

		{
			title: "Tip-Calculator",
			description:
				"Convenient tip calculator allowing users to easily calculate tips for different bill amounts and percentages.",
			logo: TipCalculator,
			linkText: "View Project",
			link: "https://iamtrieves.github.io/Tip-Calculator-App/",
		},

		{
			title: "GTN-Guess-The-Number",
			description:
				"Fully functional guess the number application incorporating features like random number generation and user feedback.",
			logo: GTN,
			linkText: "View Project",
			link: "https://iamtrieves.github.io/GTN-Guess-The-Number-Recreation/",
		},
	],
};

export default INFO;
