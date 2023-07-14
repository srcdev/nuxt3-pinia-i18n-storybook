<template>
  <NuxtLayout :name="layoutName" :page-theme="pageTheme" :header-theme="headerTheme">
    <template #layout-content>
      <PageRow :fit-content="pageRowFitContent" :apply-gutters="pageRowGutters" :page-row-theme="pageRowTheme" :page-row-inner-theme="pageRowInnerTheme">
        <template #pageRowContent>
          <h2>Home</h2>
          <div class="pb-12 pt-12 mb-12">
            <h2 class="text-body-h1">Layouts and Schemes</h2>
            <h2 class="text-body-h1">Page Row Theme</h2>
            <ul class="sample-list flex">
              <li><button @click.prevent="togglePageRowFitContent()">Toggle wide page row</button></li>
              <li><button @click.prevent="togglePageRowGutters()">Toggle page row gutters</button></li>
            </ul>
            <ul class="sample-list flex">
              <li><button @click.prevent="togglePageRowTheme('default')">Default (transparent background)</button></li>
              <li><button @click.prevent="togglePageRowTheme('themeWhite')">White</button></li>
              <li><button @click.prevent="togglePageRowTheme('themeGrey')">Grey</button></li>
              <li><button @click.prevent="togglePageRowTheme('themeBlue')">Blue</button></li>
              <li><button @click.prevent="togglePageRowTheme('themeGreen')">Green</button></li>
            </ul>
            <h2 class="text-body-h1">Page Row Inner theme</h2>
            <ul class="sample-list flex">
              <li><button @click.prevent="togglePageRowInnerTheme('default')">Default (transparent background)</button></li>
              <li><button @click.prevent="togglePageRowInnerTheme('themeWhite')">White</button></li>
              <li><button @click.prevent="togglePageRowInnerTheme('themeGrey')">Grey</button></li>
              <li><button @click.prevent="togglePageRowInnerTheme('themeBlue')">Blue</button></li>
              <li><button @click.prevent="togglePageRowInnerTheme('themeGreen')">Green</button></li>
            </ul>
          </div>
        </template>
      </PageRow>

      <PageRow :fit-content="false" :apply-gutters="true" page-row-theme="default">
        <template #pageRowContent>
          <div class="pb-12 pt-12 mb-12">
            <h2 class="text-body-h1">Toggle signed in navigation</h2>

            <button @click.prevent="toggleLeftNav(!showLeftNav)">Toggle laft nav open/closed</button>

            <h2 class="text-body-h1">Page themes</h2>
            <ul class="sample-list flex">
              <li><button @click.prevent="togglePageTheme('default')">Default (transparent background)</button></li>
              <li><button @click.prevent="togglePageTheme('themeWhite')">White</button></li>
              <li><button @click.prevent="togglePageTheme('themeGrey')">Grey</button></li>
              <li><button @click.prevent="togglePageTheme('themeBlue')">Blue</button></li>
              <li><button @click.prevent="togglePageTheme('themeGreen')">Green</button></li>
            </ul>

            <div class="mt-12 mb-12 spotlight">
              <div class="spotlight-inner">
                <h2 class="text-body-h1">Spotlight header</h2>
                <p>Some spotlight text or other content will go in here, obvs this is just a sample.</p>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id dolor quam. Ut lacinia finibus pellentesque. Fusce ipsum erat, maximus ac malesuada sed, lacinia nec ipsum. In eget ex ex. Mauris mattis condimentum sollicitudin. Morbi sagittis justo ac nunc pulvinar gravida. Aenean et nulla ut odio sagittis gravida. Curabitur at ante volutpat velit aliquam finibus mattis ut est.
              Quisque sit amet orci libero.
            </p>
          </div>
        </template>
      </PageRow>

      <PageRow :fit-content="false" :apply-gutters="true" page-row-theme="default">
        <template #pageRowContent>
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
        </template>
      </PageRow>

      <PageRow :fit-content="false" :apply-gutters="true" page-row-theme="default">
        <template #pageRowContent>
          <h2 class="text-body-h1">Simple grid, <code>col-repeat-type="auto-fill"</code></h2>

          <SimpleGrid min-tile-width="125px" col-repeat-type="auto-fill">
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
            </template>
          </SimpleGrid>
        </template>
      </PageRow>

      <PageRow :fit-content="false" :apply-gutters="true" page-row-theme="default">
        <template #pageRowContent>
          <h2 class="text-body-h1">Simple grid, <code>col-repeat-type="auto-fit"</code></h2>

          <SimpleGrid min-tile-width="125px" col-repeat-type="auto-fit">
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
            </template>
          </SimpleGrid>
        </template>
      </PageRow>

      <PageRow :fit-content="false" :apply-gutters="true" page-row-theme="default">
        <template #pageRowContent>
          <h2 class="text-body-h1">Simple grid, many items</h2>

          <SimpleGrid min-tile-width="125px" col-repeat-type="auto-fill">
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
        </template>
      </PageRow>

      <PageRow :fit-content="false" :apply-gutters="true" page-row-theme="default">
        <template #pageRowContent>
          <ul>
            <li>
              <NuxtLink to="/companies/123abcqwer0987/details">Company ID:123abcqwer0987</NuxtLink>
            </li>
          </ul>
        </template>
      </PageRow>

      <PageRow :fit-content="false" :apply-gutters="true" page-row-theme="default">
        <template #pageRowContent>
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
      </PageRow>

      <PageRow :fit-content="false" :apply-gutters="true" page-row-theme="default">
        <template #pageRowContent>
          <div>
            <h1>Layout Row - (Max container)</h1>
            <p>
              Bacon ipsum dolor amet ullamco tenderloin alcatra biltong venison, excepteur veniam elit meatball non short loin do beef ribs tongue. Labore consequat duis, ut salami tempor dolor voluptate doner ipsum quis magna biltong qui. Sunt tri-tip enim jowl kielbasa leberkas pastrami. Bacon qui pork chop, bresaola tenderloin commodo in hamburger laboris kevin flank shank picanha sint. Shank
              bacon andouille ball tip esse capicola exercitation ad veniam ullamco. Qui spare ribs mollit, eiusmod bacon elit sed laboris tenderloin dolor bresaola. Capicola burgdoggen ribeye consectetur.
            </p>
            <p>Beef ribs filet mignon chislic, minim ullamco occaecat rump shoulder dolore velit irure sausage. Corned beef andouille burgdoggen minim nulla. Andouille labore shank exercitation, tongue alcatra short loin strip steak in voluptate ut swine consectetur. Tenderloin id cupim, in salami brisket tri-tip adipisicing incididunt burgdoggen.</p>
          </div>

          <p>
            String: <em>"{{ rootStore.someString }}"</em> from <strong><code>rootStore.someString</code></strong>
          </p>
        </template>
      </PageRow>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useRootStore } from "@/stores/store.root";
import { useAccountStore } from "@/stores/store.account"; // Only need to import here due to lack of imports support within Storybook.
// import { useI18n } from "vue-i18n";
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

// const { t } = useI18n();
const rootStore = useRootStore();

// simple request to test axios
await CommonServices.samplePost("testing");

const accountStore = useAccountStore();
const showLeftNav = computed(() => accountStore.signedIn);

const layoutName = "default";
const pageTheme = shallowRef("default");
const headerTheme = "default";
const pageRowTheme = shallowRef("default");
const pageRowInnerTheme = shallowRef("default");
const pageRowFitContent = shallowRef(false);
const pageRowGutters = shallowRef(true);

const showWhiteText = computed(() => {
  return false;
  // return pageTheme.value === "themeGrey" || pageTheme.value === "themeBlue" || pageTheme.value === "themeGreen" || pageRowTheme.value === "themeGrey" || pageRowTheme.value === "themeBlue" || pageRowTheme.value === "themeGreen" || pageRowInnerTheme.value === "themeGrey" || pageRowInnerTheme.value === "themeBlue" || pageRowInnerTheme.value === "themeGreen";
});

const toggleLeftNav = (loggedIn: boolean) => {
  accountStore.updateLoginState(loggedIn);
};

const togglePageTheme = (brand: string) => {
  pageTheme.value = brand;
};

const togglePageRowTheme = (brand: string) => {
  pageRowTheme.value = brand;
};

const togglePageRowInnerTheme = (brand: string) => {
  pageRowInnerTheme.value = brand;
};

const togglePageRowFitContent = () => {
  pageRowFitContent.value = !pageRowFitContent.value;
};

const togglePageRowGutters = () => {
  pageRowGutters.value = !pageRowGutters.value;
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/imports.scss";
.spotlight {
  &-inner {
    background-color: $white;
    padding: 12px;
  }
}

.sample-list {
  list-style-type: none;
  padding: 0;

  &.flex {
    li + li {
      margin: 12px 0 0 0;
    }
    @media only screen and (min-width: $tabletMed) {
      display: flex;
      li + li {
        margin: 0 0 0 12px;
      }
    }
  }

  li {
  }
}
</style>
