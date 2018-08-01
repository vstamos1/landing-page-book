import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icon from "../Icon/Icon";

class Button extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {disabled, className, loading, children} = this.props;
		return <button
			disabled={disabled}
			className={`Button btn ${className}`}
			onClick={this.props.onClick}>
			{!loading && children}
			{loading && <Icon icon="fa fa-circle-o-notch fa-spin"/>}
		</button>
	}
}

Button.propTypes = {
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
	className: PropTypes.string,
	ariaLabel: PropTypes.string,
	onClick: PropTypes.func,
};
Button.defaultProps = {
	disabled: false,
	loading: false,
	className: "",
	ariaLabel:"",
	onClick: () => {
		console.warn(`onClick prop is not defined`);
	}
};

export default Button;
