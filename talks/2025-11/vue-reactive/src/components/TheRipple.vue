<script lang="ts" setup>
import { useSlideContext } from '@slidev/client';
import { useMotion } from '@vueuse/motion';
import { computed, useTemplateRef, watch } from 'vue';

const { $clicks } = useSlideContext();

const props = withDefaults(
  defineProps<{
    at?: number[];
    size?: string;
  }>(),
  {
    at: () => [],
    size: '200px',
  },
);

const target = useTemplateRef('circle');

const motion = useMotion(
  target,
  computed(() => ({
    initial: {
      width: '0px',
      height: '0px',
      opacity: 0,
      x: '-50%',
      y: '-50%',
    },
    ripple: {
      width: props.size,
      height: props.size,
      opacity: [0, 1, 0],
      transition: {
        duration: 600,
        ease: 'easeOut',
      },
    },
  })),
);

motion.stop();

watch($clicks, (currentClick) => {
  if (props.at.includes(currentClick)) {
    motion.set('initial');
    requestAnimationFrame(() => {
      motion.apply('ripple');
    });
  }
});
</script>

<template>
  <div class="relative inline-block">
    <div
      ref="circle"
      class="border-2 border-purple rounded-full absolute pointer-events-none top-[50%] left-[50%] bg-purple/20"
    />
    <slot />
  </div>
</template>

<style scoped></style>
