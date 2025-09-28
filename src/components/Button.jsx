'use client';

const Button = () => {
	return (
		<button className="btn btn-ghost" onClick={() => alert('Here we go!')}>
			Click me (click event)
		</button>
	);
};

export default Button;
