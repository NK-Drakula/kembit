<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const props = defineProps({
  text: Array
})
    const typeValue = ref('');
    const typeStatus = ref(false);
    const displayTextArray = ref(props.text);
    const typingSpeed = ref(100);
    const erasingSpeed = ref(100);
    const newTextDelay = ref(2000);
    const displayTextArrayIndex = ref(0);
    const charIndex = ref(0);

    onMounted(() => {
      setTimeout(typeText, newTextDelay.value + 300);
    });

    function typeText() {
      if (charIndex.value < displayTextArray.value[displayTextArrayIndex.value].length) {
        if (!typeStatus.value) typeStatus.value = true;
        typeValue.value += displayTextArray.value[displayTextArrayIndex.value].charAt(charIndex.value);
        charIndex.value += 1;
        setTimeout(typeText, typingSpeed.value);
      } else {
        typeStatus.value = false;
        setTimeout(eraseText, newTextDelay.value);
      }
    }

    function eraseText() {
      if (charIndex.value > 0) {
        if (!typeStatus.value) typeStatus.value = true;
        typeValue.value = displayTextArray.value[displayTextArrayIndex.value].substring(0, charIndex.value - 1);
        charIndex.value -= 1;
        setTimeout(eraseText, erasingSpeed.value);
      } else {
        typeStatus.value = false;
        displayTextArrayIndex.value += 1;
        if (displayTextArrayIndex.value >= displayTextArray.value.length)
          displayTextArrayIndex.value = 0;
        setTimeout(typeText, typingSpeed.value + 1000);
      }
    }

    onUnmounted(() => {
      clearTimeout(typeText);
      clearTimeout(eraseText);
    });
</script>
<template>
  <div>{{ typeValue }}</div>
</template>