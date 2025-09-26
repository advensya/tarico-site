<script lang="ts" setup>
defineProps({
	path: { type: String, required: true },
	named: { type: Object as PropType<any> },
});
</script>

<template>
	<span v-html="$t(path, named)"></span>
</template>
