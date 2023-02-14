<template>
  <Story title="Page Row">
    <Variant title="Default">
      <PageRow>
        <h2>This is a normal row</h2>
        <p>
          Bacon ipsum dolor amet salami beef tail, duis nostrud shank shoulder
          qui pancetta reprehenderit. Ipsum chicken velit, turkey kielbasa est
          hamburger minim chislic ut beef ribs pork belly qui. Exercitation
          corned beef esse consequat pancetta. Id nulla voluptate, pig turducken
          buffalo cupidatat bacon ground round cillum picanha aliqua. Irure
          veniam pig ea elit mollit bacon est lorem. Lorem jerky in, chislic
          tail ham cow. Bresaola kielbasa ut excepteur, reprehenderit pariatur
          tongue pig voluptate.
        </p>
      </PageRow>
    </Variant>
    <Variant title="Wide">
      <PageRow :isWide="true">
        <h2>This is a wide row</h2>
        <p>
          Bacon ipsum dolor amet salami beef tail, duis nostrud shank shoulder
          qui pancetta reprehenderit. Ipsum chicken velit, turkey kielbasa est
          hamburger minim chislic ut beef ribs pork belly qui. Exercitation
          corned beef esse consequat pancetta. Id nulla voluptate, pig turducken
          buffalo cupidatat bacon ground round cillum picanha aliqua. Irure
          veniam pig ea elit mollit bacon est lorem. Lorem jerky in, chislic
          tail ham cow. Bresaola kielbasa ut excepteur, reprehenderit pariatur
          tongue pig voluptate.
        </p>
      </PageRow>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import PageRow from '@/components/functional/page-row/PageRow.vue'
</script>
