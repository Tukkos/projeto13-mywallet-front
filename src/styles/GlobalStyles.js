import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
strong {
  font-weight: bold;
}
a {
  color: inherit;
  text-decoration: inherit;
}
* {
    box-sizing: border-box;
}
body {
    margin: 25px 25px 25px 25px;

    background-color: #8C11BE;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    /* font-family: 'Saira Stencil One', cursive; */
}
ion-icon {
    width: 30px;
    height: 30px;
}
.inputBar {
    max-width: 350px;
    width: 80vw;
    height: 55px;
    border: none;
    border-radius: 5px;
    background: #ffffff;
    margin: 5px 0 5px 0;
    font-size: 20px;
    padding-left: 20px;
    padding-right: 20px;
    
    ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        color: #d5d5d5;
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: #d5d5d5;
        opacity:  1;
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: #d5d5d5;
        opacity:  1;
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #d5d5d5;
    }
    ::-ms-input-placeholder { /* Microsoft Edge */
        color: #d5d5d5;
    }

    ::placeholder { /* Most modern browsers support this now. */
        color: #d5d5d5;
    }
}
.button {
    background: #A328D6;
    color: #ffffff;
    font-weight: 700;
}
.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.header {
    font-size: 26px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 25px;

    display: flex;
}
.head {
    width: 75vw;
}
`;

export default GlobalStyle;