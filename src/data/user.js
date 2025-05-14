import BolaCash from "../assests/BolaCash.png";
import Creatiwise from "../assests/Creatiwise.png";
import DominoPizza from "../assests/Domino's Pizza.png";

const INFO = {
	main: {
		title: "Gabriel Indok David—Frontend Engineer and Tech Enthusiast",
		name: "Gabriel Indok David",
		email: "indokdavid2020@gmail.com",
		logo: "../logo.jpg",
	},

	socials: {
		instagram:
			"https://www.instagram.com/indok_david?igsh=NnFpbmlhZHh3dXhr",
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
			title: "Bola-Cash",
			description:
				"Bola Cash is a React and Tailwind CSS web app that helps users convert trash into cash through organized recycling efforts. It promotes environmental sustainability by simplifying waste collection and monetization.",
			logo: BolaCash,
			linkText: "View Project",
			link: "https://bola-cash-repo.vercel.app/",
		},

		{
			title: "Domino's Pizza",
			description:
				"Domino’s Pizza is a sleek, responsive landing page built with React, TypeScript, and Tailwind CSS. It showcases a modern UI design for promoting pizza products and enhancing user engagement.",
			logo: DominoPizza,
			linkText: "View Project",
			link: "https://domino-s-pizza.vercel.app/",
		},

		{
			title: "Creatiwise",
			description:
				"Creatiwise is a modern, responsive landing page built with React, TypeScript, and Tailwind CSS. It highlights creative digital solutions with a sleek UI focused on clarity and visual appeal.",
			logo: Creatiwise,
			linkText: "View Project",
			link: "https://creatiwise-blond.vercel.app/",
		},
	],
};

export default INFO;
