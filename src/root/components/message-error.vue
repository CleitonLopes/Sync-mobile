<script>

	export default {

		name: 'MessageError'

	}

</script>

<template>

	<div class="box-mensagem">
		<div class="mensagem">
			<div class="texto-mensagem">Erro <span class="versao-mensagem"></span> ao gerar versão !</div>
			<img class="icone-m" src="src/assets/img/erro.svg">
		</div>
	</div>

</template>


<style scoped>

@import url('https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i');

body {
	background-color: #ffffff;
	width: 100%;
	margin: 0;
	padding: 0;
	border: 0;
}

.mensagem {
	background-color: #ef8a88;
	text-align: center;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
}

.texto-mensagem {
	font-size: 15px;
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
	color: #ffffff;
}

.versao-mensagem {
	font-size: 18px;
	font-weight: 700;
	color: #E0515F;
}

.mensagem img.icone-m {
	position: relative;
	margin-left: 10px;
	display: block;
}

.box-mensagem {
	margin: 20px;
	background-color: #ef8a88;
	border-radius: 12px;
	-moz-border-radius: 12px;
	-webkit-border-radius:12px;
	height: 200px;
	display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
