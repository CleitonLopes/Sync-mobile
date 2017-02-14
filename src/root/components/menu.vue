<script>

	export default {

		name: 'Menu'

	}

</script>


<template>


	<div class="render">

		<div class="main">

			<nav>

				<ul id="nav1">

					<a>
						<router-link :to="{ name: 'customer.main' }" tag="li"  exact> Clientes </router-link>
					</a>

					<a>
						<router-link :to="{ name: 'upload.main' }" tag="li" > Gerar Versão </router-link>
					</a>

					<a>
						<router-link :to="{ name: 'customerUpdate.main' }" tag="li" > Histórico de Atualização </router-link>
					</a>

				</ul>

			</nav>

			<router-view></router-view>

		</div>

	</div>


</template>

<style>

	a:link, a:active {

		text-decoration: none
	}

	a {
			text-decoration: none;

		color: #fff;

	}

</style>