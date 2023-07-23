<script setup lang="ts">
defineProps<{
  artist: Artist
}>()

const isHovered = shallowRef(false);
</script>

<template>
  <div
    class="
      artist-profile
      flex
      flex-col
      justify-between
      items-center
      h-full
      relative
    "
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="w-full h-[161px] bg-lightgray" />
    <div
      class="
        img-wrapper
        h-[153px]
        absolute
        top-[42px]
        aspect-square
        rounded-full
        border-[3px]
        border-white
        bg-primary
        overflow-hidden
      "
    >
      <transition name="fade">
        <div
          v-if="isHovered"
          class="grid place-items-center w-full h-full bg-black/50"
          v-text="`@${artist.name}`"
        />
      </transition>
      <img
        class="artist-profile-image"
        src=""
        alt=""
      >
    </div>
    <transition
      name="fade"
      mode="out-in"
    >
      <span
        v-if="!isHovered"
        class="
          py-3
          font-semibold
          text-18
          leading-[22px]
          text-white
        "
      >
        @{{ artist.name }}
      </span>
      <button
        v-else
        class="
          min-w-[124px]
          py-3
          font-bold
          text-18
          leading-[22px]
          text-white
          rounded-[10px]
          bg-primary
        "
      >
        Follow
      </button>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.artist-profile-image {
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.15s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
