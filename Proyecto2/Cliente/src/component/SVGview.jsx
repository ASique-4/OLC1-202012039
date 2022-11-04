import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={240}
    height={320}
    viewBox="0 0 240 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >





<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 472)">
<title>AST</title>
<polygon fill="white" stroke="transparent" points="-4,4 -4,-472 268.24,-472 268.24,4 -4,4"/>

<g id="node1" class="node">
<title>node0</title>
<ellipse fill="none" stroke="black" cx="145.95" cy="-450" rx="57.69" ry="18"/>
<text text-anchor="middle" x="145.95" y="-446.3" font-family="Times,serif" font-size="14.00">Instrucciones</text>
</g>

<g id="node2" class="node">
<title>node14</title>
<ellipse fill="none" stroke="black" cx="145.95" cy="-378" rx="50.89" ry="18"/>
<text text-anchor="middle" x="145.95" y="-374.3" font-family="Times,serif" font-size="14.00">Asignacion</text>
</g>

<g id="edge1" class="edge">
<title>node0&#45;&gt;node14</title>
<path fill="none" stroke="black" d="M145.95,-431.7C145.95,-423.98 145.95,-414.71 145.95,-406.11"/>
<polygon fill="black" stroke="black" points="149.45,-406.1 145.95,-396.1 142.45,-406.1 149.45,-406.1"/>
</g>

<g id="node3" class="node">
<title>node14igual</title>
<ellipse fill="none" stroke="black" cx="145.95" cy="-306" rx="27" ry="18"/>
<text text-anchor="middle" x="145.95" y="-302.3" font-family="Times,serif" font-size="14.00">=</text>
</g>

<g id="edge12" class="edge">
<title>node14&#45;&gt;node14igual</title>
<path fill="none" stroke="black" d="M145.95,-359.7C145.95,-351.98 145.95,-342.71 145.95,-334.11"/>
<polygon fill="black" stroke="black" points="149.45,-334.1 145.95,-324.1 142.45,-334.1 149.45,-334.1"/>
</g>

<g id="node4" class="node">
<title>node141</title>
<ellipse fill="none" stroke="black" cx="40.95" cy="-234" rx="40.89" ry="18"/>
<text text-anchor="middle" x="40.95" y="-230.3" font-family="Times,serif" font-size="14.00">Variable</text>
</g>

<g id="edge10" class="edge">
<title>node14igual&#45;&gt;node141</title>
<path fill="none" stroke="black" d="M127.17,-292.49C111.56,-282.08 89.05,-267.07 70.94,-254.99"/>
<polygon fill="black" stroke="black" points="72.71,-251.97 62.45,-249.34 68.83,-257.8 72.71,-251.97"/>
</g>

<g id="node6" class="node">
<title>node142</title>
<ellipse fill="none" stroke="black" cx="145.95" cy="-234" rx="46.29" ry="18"/>
<text text-anchor="middle" x="145.95" y="-230.3" font-family="Times,serif" font-size="14.00">Expresion</text>
</g>

<g id="edge11" class="edge">
<title>node14igual&#45;&gt;node142</title>
<path fill="none" stroke="black" d="M145.95,-287.7C145.95,-279.98 145.95,-270.71 145.95,-262.11"/>
<polygon fill="black" stroke="black" points="149.45,-262.1 145.95,-252.1 142.45,-262.1 149.45,-262.1"/>
</g>

<g id="node12" class="node">
<title>node14tipo</title>
<ellipse fill="none" stroke="black" cx="236.95" cy="-234" rx="27.1" ry="18"/>
<text text-anchor="middle" x="236.95" y="-230.3" font-family="Times,serif" font-size="14.00">Tipo</text>
</g>

<g id="edge9" class="edge">
<title>node14igual&#45;&gt;node14tipo</title>
<path fill="none" stroke="black" d="M163.06,-291.83C176.79,-281.27 196.26,-266.3 211.76,-254.37"/>
<polygon fill="black" stroke="black" points="214.11,-256.98 219.91,-248.11 209.85,-251.43 214.11,-256.98"/>
</g>

<g id="node5" class="node">
<title>node14hijo0</title>
<ellipse fill="none" stroke="black" cx="40.95" cy="-162" rx="27" ry="18"/>
<text text-anchor="middle" x="40.95" y="-158.3" font-family="Times,serif" font-size="14.00">v_5</text>
</g>

<g id="edge2" class="edge">
<title>node141&#45;&gt;node14hijo0</title>
<path fill="none" stroke="black" d="M40.95,-215.7C40.95,-207.98 40.95,-198.71 40.95,-190.11"/>
<polygon fill="black" stroke="black" points="44.45,-190.1 40.95,-180.1 37.45,-190.1 44.45,-190.1"/>
</g>

<g id="node7" class="node">
<title>node19</title>
<ellipse fill="none" stroke="black" cx="145.95" cy="-162" rx="34.39" ry="18"/>
<text text-anchor="middle" x="145.95" y="-158.3" font-family="Times,serif" font-size="14.00">Casteo</text>
</g>

<g id="edge3" class="edge">
<title>node142&#45;&gt;node19</title>
<path fill="none" stroke="black" d="M145.95,-215.7C145.95,-207.98 145.95,-198.71 145.95,-190.11"/>
<polygon fill="black" stroke="black" points="149.45,-190.1 145.95,-180.1 142.45,-190.1 149.45,-190.1"/>
</g>

<g id="node8" class="node">
<title>node191</title>
<ellipse fill="none" stroke="black" cx="96.95" cy="-90" rx="34.39" ry="18"/>
<text text-anchor="middle" x="96.95" y="-86.3" font-family="Times,serif" font-size="14.00">Casteo</text>
</g>

<g id="edge6" class="edge">
<title>node19&#45;&gt;node191</title>
<path fill="none" stroke="black" d="M134.58,-144.76C128.52,-136.11 120.94,-125.27 114.17,-115.6"/>
<polygon fill="black" stroke="black" points="116.85,-113.33 108.25,-107.15 111.12,-117.35 116.85,-113.33"/>
</g>

<g id="node10" class="node">
<title>node192</title>
<ellipse fill="none" stroke="black" cx="195.95" cy="-90" rx="46.29" ry="18"/>
<text text-anchor="middle" x="195.95" y="-86.3" font-family="Times,serif" font-size="14.00">Expresion</text>
</g>

<g id="edge7" class="edge">
<title>node19&#45;&gt;node192</title>
<path fill="none" stroke="black" d="M157.54,-144.76C163.64,-136.23 171.24,-125.58 178.08,-116.02"/>
<polygon fill="black" stroke="black" points="181.1,-117.81 184.07,-107.63 175.4,-113.74 181.1,-117.81"/>
</g>

<g id="node9" class="node">
<title>node19hijo0</title>
<ellipse fill="none" stroke="black" cx="96.95" cy="-18" rx="27" ry="18"/>
<text text-anchor="middle" x="96.95" y="-14.3" font-family="Times,serif" font-size="14.00">int</text>
</g>

<g id="edge4" class="edge">
<title>node191&#45;&gt;node19hijo0</title>
<path fill="none" stroke="black" d="M96.95,-71.7C96.95,-63.98 96.95,-54.71 96.95,-46.11"/>
<polygon fill="black" stroke="black" points="100.45,-46.1 96.95,-36.1 93.45,-46.1 100.45,-46.1"/>
</g>

<g id="node11" class="node">
<title>node19hijo1</title>
<ellipse fill="none" stroke="black" cx="195.95" cy="-18" rx="27" ry="18"/>
<text text-anchor="middle" x="195.95" y="-14.3" font-family="Times,serif" font-size="14.00">hola</text>
</g>

<g id="edge5" class="edge">
<title>node192&#45;&gt;node19hijo1</title>
<path fill="none" stroke="black" d="M195.95,-71.7C195.95,-63.98 195.95,-54.71 195.95,-46.11"/>
<polygon fill="black" stroke="black" points="199.45,-46.1 195.95,-36.1 192.45,-46.1 199.45,-46.1"/>
</g>

<g id="node13" class="node">
<title>node14hijo1</title>
<ellipse fill="none" stroke="black" cx="236.95" cy="-162" rx="27" ry="18"/>
<text text-anchor="middle" x="236.95" y="-158.3" font-family="Times,serif" font-size="14.00">int</text>
</g>

<g id="edge8" class="edge">
<title>node14tipo&#45;&gt;node14hijo1</title>
<path fill="none" stroke="black" d="M236.95,-215.7C236.95,-207.98 236.95,-198.71 236.95,-190.11"/>
<polygon fill="black" stroke="black" points="240.45,-190.1 236.95,-180.1 233.45,-190.1 240.45,-190.1"/>
</g>
</g>


  </svg>
);
export default SVGComponent;
