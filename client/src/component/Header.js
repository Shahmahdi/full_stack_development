import * as React from 'react';
import { connect } from 'react-redux';

 class Header extends React.Component {

	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return <li><a href="/auth/google">Login with Google</a></li>
			default:
				return <li><a href="sass.html">Logout</a></li>
		}
	}

	render() {
		return (
			<div>
				<nav>
					<div class="nav-wrapper">
						<a href="#!" class="brand-logo">
							Emaily
						</a>
						<ul class="right hide-on-med-and-down">
							{this.renderContent()}
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth }
} 

export default connect(mapStateToProps)(Header);
