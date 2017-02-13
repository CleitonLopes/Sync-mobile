<script>

	export default {

		name: 'Menu'

	}

</script>


<template>

	<div class="render">

		<div class="menu-toggle">

			<a class="button-toggle" href="#menu" id="toggle"><span></span></a>

			<div id="menu">

				<ul>

					<a>
						<router-link :to="{ name: 'customer.main' }" tag="li" exact>Clientes</router-link>
					</a>

					<a>
						<router-link :to="{ name: 'upload.main' }" tag="li">Gerar Versão</router-link>
					</a>


					<li><a href="#">Histórico de Atualização</a></li>

					<li><a href="#">Sair</a></li>

				</ul>

			</div>

		</div>

		<div class="main">

			<nav>

				<ul id="nav1">

					<a>
						<router-link :to="{ name: 'customer.main' }" tag="li"  exact>Clientes</router-link>
					</a>

					<a>
						<router-link :to="{ name: 'upload.main' }" tag="li" >Gerar Versão</router-link>
					</a>

					<li>Histórico de Atualização</li>

				</ul>

			</nav>

			<router-view></router-view>

		</div>

	</div>



</template>

<style scoped>

	a:link, a:active {

		text-decoration: none
	}

	a {
			text-decoration: none;

		color: #fff;

	}

</style>