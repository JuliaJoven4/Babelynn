<template>
    <svg
        :class="{ 'rotated': isClosed, 'original': !isClosed }"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24">
        <path d="M20.293 15.293 12 7l-8.293 8.293-1.414-1.414L12 4.172l9.707 9.707-1.414 1.414z"/>
    </svg>
</template>

<script>
    export default {
        props: {
            isClosed: Boolean,
        },
    };
</script>

<style scoped>
    .rotated {
        transform: rotate(180deg);
        transition: transform 0.3s ease; /* Agrega una transición suave al giro */
    }
    .original {
        transition: transform 0.3s ease;
    }
</style>