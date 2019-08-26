import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../redux/actions/auth';

export class Register extends Component {
	state = {
		email: '',
		password: '',
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();
		const newUser = {
			email: this.state.email,
			password: this.state.password,
		};
		this.props.registerUser(newUser);
	};

	render() {
		return (
			<div>
				<h1>Register</h1>
				<form onSubmit={this.onSubmit}>
					<label htmlFor="email">email</label>
					<input
						type="text"
						name="email"
						id="email"
						value={this.state.email}
						onChange={this.onChange}
						autoComplete="email"
					/>
					{this.props.errors && this.props.errors.email ? (
						<p>{this.props.errors.email}</p>
					) : null}
					<label htmlFor="password">password</label>
					<input
						type="password"
						name="password"
						id="password"
						value={this.state.password}
						onChange={this.onChange}
						autoComplete="password"
					/>
					{this.props.errors && this.props.errors.password ? (
						<p>{this.props.errors.password}</p>
					) : null}
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	errors: state.errors,
});

export default connect(
	mapStateToProps,
	{ registerUser }
)(Register);
