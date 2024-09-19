<script>
	let navLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Services', path: '/services' },
		{ name: 'Contact', path: '/contact' }
	];
</script>

<nav class="navbar">
	<div class="navbar-logo">
		<h1>YourApp</h1>
	</div>
	<ul class="navbar-links">
		{#each navLinks as link}
			<li>
				<a href={link.path}>{link.name}</a>
			</li>
		{/each}
	</ul>
</nav>

<slot></slot>

<style>
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #333;
		padding: 1rem;
	}

	.navbar-logo h1 {
		color: white;
		margin: 0;
	}

	.navbar-links {
		list-style: none;
		display: flex;
		gap: 1rem;
		margin: 0;
		padding: 0;
	}

	.navbar-links li {
		margin: 0;
	}

	.navbar-links a {
		color: white;
		text-decoration: none;
		font-size: 1rem;
	}

	.navbar-links a:hover {
		text-decoration: underline;
	}
</style>
