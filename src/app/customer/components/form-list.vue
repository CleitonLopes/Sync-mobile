<script>

	//import CpFormInput from './form-input.vue'

	export default {

		name: 'Form-List',

		components: {

			CpFormInput
		},

		props: {

			list: {

				type: Array,
				required: true
			}
		}

	}

</script>

<template>

	<div>

		<cp-form-input v-for="item in list" :title="item.title" el-class="col-xs-10"/>

	</div>

</template>