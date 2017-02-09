<script>

   import CpCustomer from '../../app/customer/components/customer.vue'

   import CpUpload from '../../app/upload/components/upload.vue'

	export default {

		name: 'Menu',

		components: {

			CpCustomer, CpUpload
		}

	}

</script>


<template>

	<div>

		<div class="menu-toggle">

			<a class="button-toggle" href="#menu" id="toggle"><span></span></a>

			<div id="menu">

				<ul>

					<router-link :to="{ name: 'customer.main' }" tag="li" exact>

						<a> Clientes </a>

					</router-link>

					<router-link :to="{ name: 'upload.main' }" tag="li">

						<a> Gerar Versão </a>

					</router-link>

					<li><a href="#">Histórico de Atualização</a></li>

					<li><a href="#">Sair</a></li>

				</ul>

			</div>

		</div>

		<div class="main">

			<nav>

				<ul id="nav1">

					<router-link :to="{ name: 'customer.main' }" tag="li"  id="a" exact>

						<a> Clientes </a>

					</router-link>

					<router-link :to="{ name: 'upload.main' }" tag="li" id="b">

						<a> Gerar Versão </a>

					</router-link>

					<li id="c" class="c">Histórico de Atualização</li>

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

		color: #fff;

	}

</style>