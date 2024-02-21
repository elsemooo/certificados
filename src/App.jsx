import styled from 'styled-components';
import back from './assets/Captura de pantalla 2024-02-20 160816.png';
import jshackerranck from './assets/javascript_intermediate certificate_page-0001.jpg';
import html from './assets/certificad-curso-html-2020.png';
import jsdom from './assets/certificad-curso-js-dom-2018.png';
import front from './assets/certificad-curso-frontend.png';
import cssvariables from './assets/certificad-curso-variables-css.png';
import rwd from './assets/certificad-curso-rwd.png';
import flexgrid from './assets/certificad-curso-flexbox-grid.png';
import sass from './assets/certificad-curso-sass.png';
import git from './assets/certificad-curso-git-2019.png';
import js from './assets/certificad-curso-javascript.png';
import css from './assets/certificad-curso-css-2020.png';
import paradigma from './assets/certificad-curso-paradigmas.png';
const Container = styled.div`
	height: 100%;
	width: 100%;
	padding-top: 10px;
	display: flex;
	flex: auto;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;
const Certificados = styled.img`
	width: 50vw;
`;
const Link = styled.a`
	margin: 10px;
	-webkit-box-shadow: 5px 5px 35px -11px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 5px 5px 35px -11px rgba(0, 0, 0, 0.75);
	box-shadow: 5px 5px 35px -11px rgba(0, 0, 0, 0.75);
`;
function App() {
	return (
		<Container>
			<Link
				target='_blank'
				href='https://www.freecodecamp.org/certification/khalid_samanamud/back-end-development-and-apis'>
				<Certificados src={back} />
			</Link>
			<Link
				target='_blank'
				href='https://www.hackerrank.com/certificates/f494248120ad'>
				<Certificados src={jshackerranck} />
			</Link>
			<Link
				target='_blank'
				href='https://ed.team/u/mathias16a/curso/html-2020'>
				<Certificados src={html} />
			</Link>
			<Link
				target='_blank'
				href='https://ed.team/u/mathias16a/curso/js-dom-2018'>
				<Certificados src={jsdom} />
			</Link>
			<Link
				target='_blank'
				href='https://ed.team/u/mathias16a/carrera/frontend'>
				<Certificados src={front} />
			</Link>
			<Link
				target='_blank'
				href='https://ed.team/u/mathias16a/curso/variables-css'>
				<Certificados src={cssvariables} />
			</Link>
			<Link target='_blank' href='https://ed.team/u/mathias16a/curso/rwd'>
				<Certificados src={rwd} />
			</Link>
			<Link
				target='_blank'
				href='https://ed.team/u/mathias16a/curso/flexbox-grid'>
				<Certificados src={flexgrid} />
			</Link>
			<Link
				target='_blank'
				href='https://ed.team/u/mathias16a/curso/sass'>
				<Certificados src={sass} />
			</Link>
			<Link
				target='_blank'
				href='https://ed.team/u/mathias16a/curso/git-2019'>
				<Certificados src={git} />
			</Link>
			<Link
				target='_blank'
				href='https://ed.team/u/mathias16a/curso/javascript'>
				<Certificados src={js} />
			</Link>
			<Link
				target='_blank'
				href='https://ed.team/u/mathias16a/curso/css-2020'>
				<Certificados src={css} />
			</Link>
			<Link
				target='_blank'
				href='https://ed.team/u/mathias16a/curso/paradigmas'>
				<Certificados src={paradigma} />
			</Link>
		</Container>
	);
}

export default App;
