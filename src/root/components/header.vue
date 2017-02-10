<script>

import CpLogoHeader from './logo.vue'

export default {

	name: 'Header-Principal',

	components: {

		CpLogoHeader
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

					<a id="button" href="#"><img src="src/assets/img/config.svg"></a>

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

	</header>

</template>
