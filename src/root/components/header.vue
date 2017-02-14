<script>

import CpLogoHeader from './logo.vue'

import CpMenu from './menu.vue'



export default {

	name: 'Header-Principal',

	components: {

		CpLogoHeader, CpMenu
	}

}

</script>

<template>

	<header>

		<cp-logo-header />

		<div class="box-header">

			<h1>Atualização de Versão de Software</h1>

		</div>

		<div class="config">

			<div class="text-user">Usuário:</div>

			<div class="user">Suporte</div>

			<div id="button-config">

				<div class="icon-config">

					<a><img src="src/assets/img/config.svg"></a>

				</div>

				<div id="box-config" class="active2">

					<div>

						<img class="arrow" src="src/assets/img/arrow.svg">

					</div>

					<ul>

						<li>Sair</li>

					</ul>

				</div>

			</div>

		</div>


		<div class="menu-toggle">

			<a class="button-toggle" href="#" id="toggle"><span></span></a>

			<div id="menu">

				<ul>

					<a>
						<router-link :to="{ name: 'customer.main' }" tag="li" exact> <a> Clientes </a> </router-link>
					</a>

					<a>
						<router-link :to="{ name: 'upload.main' }" tag="li" > <a> Gerar Versão </a> </router-link>
					</a>

					<a>
						<router-link :to="{ name: 'customerUpdate.main' }" tag="li" > <a> Histórico de Atualização </a> </router-link>
					</a>

					<li><a href="#">Sair</a></li>

				</ul>

			</div>

		</div>



	</header>

</template>

<style>

a {
			text-decoration: none;

		color: #fff;

	}

</style>
