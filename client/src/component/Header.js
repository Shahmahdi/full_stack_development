import * as React from 'react';

export const Header = () => (
	<div>
		<nav>
			<div class="nav-wrapper">
				<a href="#!" class="brand-logo">
					Emaily
				</a>
				<ul class="right hide-on-med-and-down">
					<li>
						<a href="sass.html">Login with Google</a>
					</li>
				</ul>
			</div>
		</nav>

		<ul class="sidenav" id="mobile-demo">
			<li>
				<a href="sass.html">Sass</a>
			</li>
			<li>
				<a href="badges.html">Components</a>
			</li>
			<li>
				<a href="collapsible.html">Javascript</a>
			</li>
			<li>
				<a href="mobile.html">Mobile</a>
			</li>
		</ul>
	</div>
);
