<script lang="ts" setup>
import { artists } from '~/utils/data/artists'
import { navMenu, platformStatistics } from '~/utils/data/mockDataset'
</script>

<template>
  <div>
    <nav
      class="
        navbar
        flex
        items-center
        justify-between
        font-roboto
        font-bold
        mr-8
        ml-12
      "
    >
      <div
        class="
          logo
          text-40
          leading-none
          text-primary-light
          uppercase
        "
      >
        nfted
      </div>

      <ul class="nav-links flex space-x-[55px]">
        <li
          v-for="item in navMenu"
          :key="item.id"
          class="py-[5px] text-18 leading-[21px]"
          v-text="item.name"
        />
      </ul>

      <button
        class="
          min-w-[175px]
          py-[18px]
          text-white
          rounded-[10px]
          bg-secondary
        "
      >
        Connect Wallet
      </button>
    </nav>

    <div class="px-[38px] py-[57px] bg-[#2C353D]">
      <div
        class="
          grid
          grid-cols-[auto_auto_1fr]
          gap-x-2.5
          place-items-center
          min-h-[64px]
          mb-10
        "
      >
        <img
          class="w-[39px] mx-[13px]"
          src="/icons/bonfire.svg"
          alt="bonfire"
        >
        <h2
          class="
            flex
            text-[45px]
            leading-[68px]
            font-bold
            text-white
          "
        >
          Popular Artist
        </h2>

        <div class="space-x-[15px] justify-self-end">
          <button
            class="
              w-[45px]
              h-[45px]
              border
              border-white
              rounded-[10px]
            "
          >
            <i />
          </button>
          <button
            class="
              w-[45px]
              h-[45px]
              border
              border-white
              rounded-[10px]
            "
          >
            <i />
          </button>
        </div>
      </div>

      <div
        class="
          grid
          grid-cols-5
          gap-x-[30px]
          w-full
          min-h-[265px]
        "
      >
        <artist-profile
          v-for="(artist, idx) in artists"
          :key="idx"
          :artist="artist"
        />
      </div>
    </div>
    <div
      class="
        grid
        grid-cols-3
        divide-x-[2.5px]
        divide-[#C6BCC9]
        place-items-center
        w-full
        min-h-[271px]
        px-[38px]
        bg-[linear-gradient(135deg,_#FCA688_0%,_#9AB1D9_93.25%,_#9DB3D7_100%)]
      "
    >
      <div
        v-for="summary in platformStatistics"
        :key="summary.id"
        class="
          flex
          flex-col
          items-center
          w-full
          h-full
          space-y-[22px]
          pt-[62px]
          font-bold
          text-[85px]
          leading-[93px]
        "
      >
        <div class="flex items-start">
          {{ summary.metricValue }}
          <span
            class="text-[36px] leading-none align-top"
          >
            {{ "+" }}
          </span>
        </div>
        <div
          class="
            min-w-[172px]
            py-2
            text-center
            font-semibold
            text-xs
            rounded-[10px]
            bg-white
          "
        >
          {{ summary.metricName }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
ul.nav-links li {
  @apply
    relative;

  &:after {
    @apply
      content-['']
      absolute
      left-1/2
      bottom-0
      transform
      -translate-x-1/2
      w-[51px]
      h-[3px]
      opacity-0
      bg-primary
      transition-opacity
      duration-300
      ease-in-out;
  }

  &:hover:after {
    @apply
      opacity-100;
  }
}
</style>
