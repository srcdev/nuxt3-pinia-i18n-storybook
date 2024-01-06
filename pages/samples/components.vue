<template>
  <div>
    <NuxtLayout :name="layoutName" :page-theme="pageTheme" :header-theme="headerTheme" :footer-theme="footerTheme">
      <template #layout-content>
        <PageRow :fit-content="pageRowFitContent" :apply-gutters="pageRowGutters" :page-row-theme="pageRowTheme" :page-row-inner-theme="pageRowInnerTheme">
          <template #pageRowContent>
            <h1 class="text-header-large mt-12">Layouts and Schemes</h1>
            <div class="pb-12 pt-12 mb-12">
              <h2 class="text-header-medium">Page Row Props</h2>
              <ul class="sample-list flex">
                <li><FormInputButton button-text="Toggle wide page row" @click.prevent="togglePageRowFitContent()"></FormInputButton></li>
                <li><FormInputButton button-text="Toggle page row gutters" @click.prevent="togglePageRowGutters()"></FormInputButton></li>
              </ul>
              <h2 class="text-header-medium">Page Row Theme</h2>
              <ul class="sample-list flex">
                <li><FormInputButton button-text="Default (transparent background)" @click.prevent="togglePageRowTheme('theme-default')"></FormInputButton></li>
                <li><FormInputButton button-text="White" @click.prevent="togglePageRowTheme('theme-white')"></FormInputButton></li>
                <li><FormInputButton button-text="Grey" @click.prevent="togglePageRowTheme('theme-grey')"></FormInputButton></li>
                <li><FormInputButton button-text="Blue" @click.prevent="togglePageRowTheme('theme-blue')"></FormInputButton></li>
                <li><FormInputButton button-text="Green" @click.prevent="togglePageRowTheme('theme-green')"></FormInputButton></li>
              </ul>
              <h2 class="text-header-medium">Page Row Inner theme</h2>
              <ul class="sample-list flex">
                <li><FormInputButton button-text="Default (transparent background)" @click.prevent="togglePageRowInnerTheme('theme-default')"></FormInputButton></li>
                <li><FormInputButton button-text="White" @click.prevent="togglePageRowInnerTheme('theme-white')"></FormInputButton></li>
                <li><FormInputButton button-text="Grey" @click.prevent="togglePageRowInnerTheme('theme-grey')"></FormInputButton></li>
                <li><FormInputButton button-text="Blue" @click.prevent="togglePageRowInnerTheme('theme-blue')"></FormInputButton></li>
                <li><FormInputButton button-text="Green" @click.prevent="togglePageRowInnerTheme('theme-green')"></FormInputButton></li>
              </ul>
            </div>
          </template>
        </PageRow>

        <PageRow :fit-content="false" :apply-gutters="true" page-row-theme="theme-default">
          <template #pageRowContent>
            <div class="pb-12 pt-12 mb-12">
              <h2 class="text-header-medium">Toggle signed in navigation</h2>

              <FormInputButton button-text="Toggle laft nav open/closed" @click.prevent="toggleLeftNav()"></FormInputButton>

              <h2 class="text-header-medium">Header themes</h2>
              <ul class="sample-list flex">
                <li><FormInputButton button-text="Page is light colour" @click.prevent="toggleHeaderTheme('header-default')"></FormInputButton></li>
                <li><FormInputButton button-text="Page is dark colour" @click.prevent="toggleHeaderTheme('header-dark')"></FormInputButton></li>
              </ul>

              <h2 class="text-header-medium">Footer themes</h2>
              <ul class="sample-list flex">
                <li><FormInputButton button-text="Default (transparent background)" @click.prevent="toggleFooterTheme('theme-default')"></FormInputButton></li>
                <li><FormInputButton button-text="White" @click.prevent="toggleFooterTheme('theme-white')"></FormInputButton></li>
                <li><FormInputButton button-text="Grey" @click.prevent="toggleFooterTheme('theme-grey')"></FormInputButton></li>
                <li><FormInputButton button-text="Blue" @click.prevent="toggleFooterTheme('theme-blue')"></FormInputButton></li>
                <li><FormInputButton button-text="Green" @click.prevent="toggleFooterTheme('theme-green')"></FormInputButton></li>
              </ul>

              <h2 class="text-header-medium">Full Page themes</h2>
              <ul class="sample-list flex">
                <li><FormInputButton button-text="Default (transparent background)" @click.prevent="togglePageTheme('theme-default')"></FormInputButton></li>
                <li><FormInputButton button-text="White" @click.prevent="togglePageTheme('theme-white')"></FormInputButton></li>
                <li><FormInputButton button-text="Grey" @click.prevent="togglePageTheme('theme-grey')"></FormInputButton></li>
                <li><FormInputButton button-text="Blue" @click.prevent="togglePageTheme('theme-blue')"></FormInputButton></li>
                <li><FormInputButton button-text="Green" @click.prevent="togglePageTheme('theme-green')"></FormInputButton></li>
              </ul>

              <div class="mt-12 mb-12 spotlight">
                <div class="spotlight-inner">
                  <h2 class="text-header-medium">Spotlight header</h2>
                  <p class="text-normal">Some spotlight text or other content will go in here, obvs this is just a sample.</p>
                </div>
              </div>

              <p class="text-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id dolor quam. Ut lacinia finibus pellentesque. Fusce ipsum erat, maximus ac malesuada sed, lacinia nec ipsum. In eget ex ex. Mauris mattis condimentum sollicitudin. Morbi
                sagittis justo ac nunc pulvinar gravida. Aenean et nulla ut odio sagittis gravida. Curabitur at ante volutpat velit aliquam finibus mattis ut est. Quisque sit amet orci libero.
              </p>
            </div>
          </template>
        </PageRow>

        <PageRow :fit-content="false" :apply-gutters="true" page-row-theme="theme-default">
          <template #pageRowContent>
            <FlexGroup align-content="center-center" :full-width="true">
              <template #default>
                <FlexGroupItem :flex-grow="false">
                  <template #default>
                    <p class="text-normal">Flex Group Item</p>
                  </template>
                </FlexGroupItem>
                <FlexGroupItem :flex-grow="false">
                  <template #default>
                    <p class="text-normal">Flex Group Item</p>
                  </template>
                </FlexGroupItem>
              </template>
            </FlexGroup>
          </template>
        </PageRow>

        <PageRow :fit-content="false" :apply-gutters="true" page-row-theme="theme-default">
          <template #pageRowContent>
            <h2 class="text-header-medium">Simple grid, <code>col-repeat-type="auto-fill"</code></h2>

            <SimpleGrid min-tile-width="125px" col-repeat-type="auto-fill">
              <template #content>
                <SimpleGridItem>
                  <template #content>
                    <p class="text-normal">Simple Grid Item</p>
                  </template>
                </SimpleGridItem>
                <SimpleGridItem>
                  <template #content>
                    <p class="text-normal">Simple Grid Item</p>
                  </template>
                </SimpleGridItem>
                <SimpleGridItem>
                  <template #content>
                    <p class="text-normal">Simple Grid Item</p>
                  </template>
                </SimpleGridItem>
              </template>
            </SimpleGrid>
          </template>
        </PageRow>

        <PageRow :fit-content="false" :apply-gutters="true" page-row-theme="theme-default">
          <template #pageRowContent>
            <h2 class="text-header-medium">Simple grid, <code>col-repeat-type="auto-fit"</code></h2>

            <SimpleGrid min-tile-width="125px" col-repeat-type="auto-fit">
              <template #content>
                <SimpleGridItem>
                  <template #content>
                    <p class="text-normal">Simple Grid Item</p>
                  </template>
                </SimpleGridItem>
                <SimpleGridItem>
                  <template #content>
                    <p class="text-normal">Simple Grid Item</p>
                  </template>
                </SimpleGridItem>
                <SimpleGridItem>
                  <template #content>
                    <p class="text-normal">Simple Grid Item</p>
                  </template>
                </SimpleGridItem>
              </template>
            </SimpleGrid>
          </template>
        </PageRow>

        <PageRow :fit-content="false" :apply-gutters="true" page-row-theme="theme-default">
          <template #pageRowContent>
            <h2 class="text-header-medium">Simple grid, many items</h2>

            <SimpleGrid min-tile-width="125px" col-repeat-type="auto-fill">
              <template #content>
                <SimpleGridItem>
                  <template #content>
                    <p class="text-normal">Simple Grid Item</p>
                  </template>
                </SimpleGridItem>
                <SimpleGridItem>
                  <template #content>
                    <p class="text-normal">Simple Grid Item</p>
                  </template>
                </SimpleGridItem>
                <SimpleGridItem>
                  <template #content>
                    <p class="text-normal">Simple Grid Item</p>
                  </template>
                </SimpleGridItem>
                <SimpleGridItem>
                  <template #content>
                    <p class="text-normal">Simple Grid Item</p>
                  </template>
                </SimpleGridItem>
                <SimpleGridItem>
                  <template #content>
                    <p class="text-normal">Simple Grid Item</p>
                  </template>
                </SimpleGridItem>
                <SimpleGridItem>
                  <template #content>
                    <p class="text-normal">Simple Grid Item</p>
                  </template>
                </SimpleGridItem>
              </template>
            </SimpleGrid>
          </template>
        </PageRow>

        <PageRow :fit-content="false" :apply-gutters="true" page-row-theme="theme-default">
          <template #pageRowContent>
            <div>
              <h2 class="text-header-medium">Store Array Actions</h2>
              <ArrayActions
                :sb-array-item="{
                  name: 'Name D',
                  description: 'Description D',
                }"
              ></ArrayActions>
            </div>
          </template>
        </PageRow>

        <PageRow :fit-content="false" :apply-gutters="true" page-row-theme="theme-default">
          <template #pageRowContent>
            <ul>
              <li>
                <NuxtLink to="/companies/123abcqwer0987/details">Company ID:123abcqwer0987</NuxtLink>
              </li>
            </ul>
          </template>
        </PageRow>

        <PageRow :fit-content="false" :apply-gutters="true" page-row-theme="theme-default">
          <template #pageRowContent>
            <div>
              <h1>Layout Row - (Desktop)</h1>
              <p class="text-normal">
                Eiusmod corned beef quis, kielbasa nostrud brisket spare ribs meatball swine salami deserunt chuck pork chop buffalo irure. Aliquip labore deserunt jerky sed excepteur sausage tri-tip minim pork belly. Jowl commodo burgdoggen fatback
                mollit. Eiusmod drumstick fugiat buffalo in shoulder, consequat andouille esse ex leberkas irure meatball id. Brisket cow mollit t-bone meatloaf tri-tip sunt adipisicing lorem burgdoggen. Irure kevin tri-tip ea ut.
              </p>
              <p class="text-normal">
                Cow salami venison, dolor ipsum consectetur nulla elit spare ribs capicola meatball enim pig. Porchetta tongue veniam buffalo cow, shoulder fugiat pork. Pork frankfurter proident cow laboris, consequat cupim kevin ribeye leberkas
                dolore cillum salami. In tail t-bone ex jerky veniam. Minim venison short ribs ground round. Cillum dolore voluptate pariatur, meatball jerky kielbasa elit officia hamburger veniam rump pork belly.
              </p>
              <p class="text-normal">
                Landjaeger sint mollit cupim, picanha ribeye ut bresaola. Ground round ut labore est nisi ad id landjaeger fatback capicola magna spare ribs. Duis ham hock pork loin ullamco ground round lorem pork chop picanha velit non eiusmod
                aliquip aute beef ribs bacon. Prosciutto filet mignon bacon reprehenderit lorem, velit rump corned beef duis.
              </p>
              <p class="text-normal">Does your lorem ipsum text long for something a little meatier? Give our generator a try… it's tasty!</p>
            </div>
          </template>
        </PageRow>

        <PageRow :fit-content="false" :apply-gutters="true" page-row-theme="theme-default">
          <template #pageRowContent>
            <div>
              <h1>Layout Row - (Max container)</h1>
              <p class="text-normal">
                Bacon ipsum dolor amet ullamco tenderloin alcatra biltong venison, excepteur veniam elit meatball non short loin do beef ribs tongue. Labore consequat duis, ut salami tempor dolor voluptate doner ipsum quis magna biltong qui. Sunt
                tri-tip enim jowl kielbasa leberkas pastrami. Bacon qui pork chop, bresaola tenderloin commodo in hamburger laboris kevin flank shank picanha sint. Shank bacon andouille ball tip esse capicola exercitation ad veniam ullamco. Qui spare
                ribs mollit, eiusmod bacon elit sed laboris tenderloin dolor bresaola. Capicola burgdoggen ribeye consectetur.
              </p>
              <p class="text-normal">
                Beef ribs filet mignon chislic, minim ullamco occaecat rump shoulder dolore velit irure sausage. Corned beef andouille burgdoggen minim nulla. Andouille labore shank exercitation, tongue alcatra short loin strip steak in voluptate ut
                swine consectetur. Tenderloin id cupim, in salami brisket tri-tip adipisicing incididunt burgdoggen.
              </p>
            </div>

            <p class="text-normal">
              String: <em>"{{ rootStore.someString }}"</em> from <strong><code>rootStore.someString</code></strong>
            </p>
          </template>
        </PageRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import { useRootStore } from "@/stores/store.root";
  import { useAccountStore } from "@/stores/store.account"; // Only need to import here due to lack of imports support within Storybook.
  // import { useI18n } from "vue-i18n";
  // import CommonServices from "@/services/services.common";
  import ArrayActions from "~/store-sample-actions/ArrayActions.vue";

  const { public: config } = useRuntimeConfig();

  definePageMeta({
    layout: false,
  });

  useHead({
    title: "Sample components " + config.sitename,
    meta: [{ name: "description", content: "Desciption meta tag content" }],
  });

  // const { t } = useI18n();
  const rootStore = useRootStore();

  // simple request to test axios
  // await CommonServices.samplePost("testing");

  const accountStore = useAccountStore();
  const signedIn = computed(() => accountStore.signedIn);

  const layoutName = "default";
  const pageTheme = shallowRef("theme-default");
  const footerTheme = shallowRef("theme-default");
  const headerTheme = shallowRef("header-default");
  const pageRowTheme = shallowRef("theme-default");
  const pageRowInnerTheme = shallowRef("theme-default");
  const pageRowFitContent = shallowRef(false);
  const pageRowGutters = shallowRef(true);

  const showWhiteText = computed(() => {
    return false;
    // return pageTheme.value === "theme-grey" || pageTheme.value === "theme-blue" || pageTheme.value === "theme-green" || pageRowTheme.value === "theme-grey" || pageRowTheme.value === "theme-blue" || pageRowTheme.value === "theme-green" || pageRowInnerTheme.value === "theme-grey" || pageRowInnerTheme.value === "theme-blue" || pageRowInnerTheme.value === "theme-green";
  });

  const toggleLeftNav = () => {
    if (signedIn.value) {
      accountStore.signOut();
    } else {
      accountStore.signIn();
    }
  };

  const togglePageTheme = (brand: string) => {
    pageTheme.value = brand;

    if (brand === "theme-grey" || brand === "theme-blue" || brand === "theme-green") {
      headerTheme.value = "header-dark";
    } else {
      headerTheme.value = "header-default";
    }
  };

  const toggleFooterTheme = (brand: string) => {
    footerTheme.value = brand;
  };

  const toggleHeaderTheme = (brand: string) => {
    headerTheme.value = brand;
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
      @include mqMinTablet {
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
