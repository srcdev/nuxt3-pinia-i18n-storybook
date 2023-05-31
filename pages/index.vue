<template>
  <NuxtLayout name="default">
    <template #layout-content>
      <h2>Home</h2>

      <FlexGroup align-content="center-center" :full-width="true">
        <template #flexGroup>
          <FlexGroupItem :flex-grow="false">
            <template #flexItem>
              <p>Flex Group Item</p>
            </template>
          </FlexGroupItem>
          <FlexGroupItem :flex-grow="false">
            <template #flexItem>
              <p>Flex Group Item</p>
            </template>
          </FlexGroupItem>
        </template>
      </FlexGroup>

      <SimpleGrid min-tile-width="125px">
        <template #content>
          <SimpleGridItem>
            <template #content>
              <p>Simple Grid Item</p>
            </template>
          </SimpleGridItem>
          <SimpleGridItem>
            <template #content>
              <p>Simple Grid Item</p>
            </template>
          </SimpleGridItem>
          <SimpleGridItem>
            <template #content>
              <p>Simple Grid Item</p>
            </template>
          </SimpleGridItem>
          <SimpleGridItem>
            <template #content>
              <p>Simple Grid Item</p>
            </template>
          </SimpleGridItem>
          <SimpleGridItem>
            <template #content>
              <p>Simple Grid Item</p>
            </template>
          </SimpleGridItem>
          <SimpleGridItem>
            <template #content>
              <p>Simple Grid Item</p>
            </template>
          </SimpleGridItem>
        </template>
      </SimpleGrid>

      <ul>
        <li>
          <NuxtLink to="/companies/123abcqwer0987/details">Company ID:123abcqwer0987</NuxtLink>
        </li>
      </ul>

      <LayoutRow content-max-width="desktop">
        <template #content>
          <div>
            <h1>Layout Row - (Desktop)</h1>
            <p>
              Eiusmod corned beef quis, kielbasa nostrud brisket spare ribs meatball swine salami deserunt chuck pork chop buffalo irure. Aliquip labore deserunt jerky sed excepteur sausage tri-tip minim pork belly. Jowl commodo burgdoggen fatback mollit. Eiusmod drumstick fugiat buffalo in shoulder, consequat andouille esse ex leberkas irure meatball id. Brisket cow mollit t-bone meatloaf tri-tip
              sunt adipisicing lorem burgdoggen. Irure kevin tri-tip ea ut.
            </p>
            <p>
              Cow salami venison, dolor ipsum consectetur nulla elit spare ribs capicola meatball enim pig. Porchetta tongue veniam buffalo cow, shoulder fugiat pork. Pork frankfurter proident cow laboris, consequat cupim kevin ribeye leberkas dolore cillum salami. In tail t-bone ex jerky veniam. Minim venison short ribs ground round. Cillum dolore voluptate pariatur, meatball jerky kielbasa elit
              officia hamburger veniam rump pork belly.
            </p>
            <p>Landjaeger sint mollit cupim, picanha ribeye ut bresaola. Ground round ut labore est nisi ad id landjaeger fatback capicola magna spare ribs. Duis ham hock pork loin ullamco ground round lorem pork chop picanha velit non eiusmod aliquip aute beef ribs bacon. Prosciutto filet mignon bacon reprehenderit lorem, velit rump corned beef duis.</p>
            <p>Does your lorem ipsum text long for something a little meatier? Give our generator a try… it's tasty!</p>
          </div>
        </template>
      </LayoutRow>

      <LayoutRow content-max-width="viewport">
        <template #content>
          <div>
            <h1>Layout Row - (Max container)</h1>
            <p>
              Bacon ipsum dolor amet ullamco tenderloin alcatra biltong venison, excepteur veniam elit meatball non short loin do beef ribs tongue. Labore consequat duis, ut salami tempor dolor voluptate doner ipsum quis magna biltong qui. Sunt tri-tip enim jowl kielbasa leberkas pastrami. Bacon qui pork chop, bresaola tenderloin commodo in hamburger laboris kevin flank shank picanha sint. Shank
              bacon andouille ball tip esse capicola exercitation ad veniam ullamco. Qui spare ribs mollit, eiusmod bacon elit sed laboris tenderloin dolor bresaola. Capicola burgdoggen ribeye consectetur.
            </p>
            <p>Beef ribs filet mignon chislic, minim ullamco occaecat rump shoulder dolore velit irure sausage. Corned beef andouille burgdoggen minim nulla. Andouille labore shank exercitation, tongue alcatra short loin strip steak in voluptate ut swine consectetur. Tenderloin id cupim, in salami brisket tri-tip adipisicing incididunt burgdoggen.</p>
          </div>
        </template>
      </LayoutRow>

      <p>
        String: <em>"{{ rootStore.someString }}"</em> from <strong><code>rootStore.someString</code></strong>
      </p>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useRootStore } from "@/stores/store.root";
import { useI18n } from "vue-i18n";
import CommonServices from "@/services/services.common";

definePageMeta({
  layout: false,
});

useHead({
  title: "Home page",
  meta: [{ name: "description", content: "Desciption meta tag content" }],
  bodyAttrs: {
    class: "class-to-apply-if-desired",
  },
});

const { t } = useI18n();
const rootStore = useRootStore();

// simple request to test axios
await CommonServices.samplePost("testing");
</script>

<style lang="scss">
// @import '@/assets/styles/imports.scss';
</style>
