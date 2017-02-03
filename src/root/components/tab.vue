<script>

	export default {


	}


</script>

<template>

	<nav class="navbar navbar-light bg-faded mt-button">

		<ul class="nav nav-tabs" role="tablist">

			<li class="nav-item active">

				<a href="#" class="nav-link">Atualização<span class="sr-only">(current)</span></a>

			</li>

			<router-link :to="{ name: 'customer.main'}" tag="li" exact><a>Clientes</a></router-link>

			<router-link :to="{ name: 'upload.main'}" tag="li"><a>Gerar Versão</a></router-link>

		</ul>
	</nav>

</template>

<style scoped>

	.mt-button {

		margin-bottom: 40px;

	}

	a:link, a:active {

		text-decoration: none
	}


	a:hover {

		opacity: 0.5;
		color: #444;

	}

	a {

		color: #444;

	}

</style>