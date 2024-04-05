import { createGlobalStyle } from "styled-components"

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

*{
    box-sizing: border-box;
}

header{
    width: 100%;
    height: 90px;
    max-height: 90px;
    background-color: rgba(27, 28, 28, 1);
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    margin-bottom: 90px;
    z-index: 3;

}

main{
    height: 1000px;
    width: 100%;
}
.header.scrolled {
    background-color: rgba(27, 28, 28, 0.95);
}

header img{
    width: 7%;
}

header ul{
    text-decoration: none;
    color: white;
    display: flex;
    width: 40%;
    gap: 7%;
    font-size: 30px;
}

ul li{
    font-size: 1.3vw;
    white-space: nowrap;
}

header button{
    width: 10%;
    background: white;
    border: 0;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 1.3vw;
    border-radius: 10px;
}
`

export default GlobalStyle;