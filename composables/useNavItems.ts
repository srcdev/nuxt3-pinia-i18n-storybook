export function useNavItems(isAuthenticated: boolean) {
  const navItems = ref({
    home: {
      summary: "Home",
      hasChildren: false,
      url: "/",
      hidden: false,
      links: []
    },
    account: {
      summary: "Account",
      hasChildren: true,
      url: "/",
      hidden: !isAuthenticated,
      links: [
        {
          text: "Profile",
          url: "/profile",
          hidden: false
        }
      ]
    },
    examples: {
      summary: "Examples",
      hasChildren: true,
      url: "",
      hidden: false,
      links: [
        {
          text: "Sample layout",
          url: "/samples/components",
          hidden: true
        },
        {
          text: "Language switcher (Auth Protected)",
          url: "/lang-switcher",
          hidden: false
        },
        {
          text: "Multi Step form",
          url: "/samples/forms/guided-form",
          hidden: false
        },
        {
          text: "Example form",
          url: "/samples/forms/sample-form",
          hidden: false
        },
        {
          text: "Example buttons",
          url: "/samples/forms/sample-buttons",
          hidden: false
        },
        {
          text: "Update Store Action",
          url: "/samples/update-store",
          hidden: false
        },
        {
          text: "Data Fetching",
          url: "/samples/server-routes",
          hidden: false
        },
        {
          text: "Routed Pages",
          url: "/companies/some-company-id/details",
          hidden: false
        }
      ]
    },
    data: {
      summary: "Data Fetching",
      hasChildren: true,
      url: "",
      hidden: false,
      links: [
        {
          text: "useFetch() with watch and execute",
          url: "/data-fetching/watch",
          hidden: false
        }
      ]
    },
    ui: {
      summary: "UI Components",
      hasChildren: true,
      url: "",
      hidden: false,
      links: [
        {
          text: "Current Weather",
          url: "/weather",
          hidden: false
        },
        {
          text: "Feature Spotlights",
          url: "/components/display-spotlights",
          hidden: false
        },
        {
          text: "Expanding Spotlights",
          url: "/components/expanding-spotlights",
          hidden: false
        },
        {
          text: "Display QR Code",
          url: "/display-qr-code",
          hidden: true
        },
        {
          text: "Dialog",
          url: "/components/display-dialog",
          hidden: false
        },
        {
          text: "Masonry Grid",
          url: "/components/masonry-grid",
          hidden: false
        },
        {
          text: "Masonry Grid Ordered",
          url: "/components/masonry-grid-ordered",
          hidden: false
        },
        {
          text: "Masonry Grid Ordered Responsive",
          url: "/components/masonry-grid-ordered-responsive",
          hidden: false
        },
        {
          text: "Display Grid",
          url: "/components/display-grid",
          hidden: false
        },
        {
          text: "Feature Columns",
          url: "/components/display-feature-cols",
          hidden: false
        },
        {
          text: "Display Prompts",
          url: "/components/display-prompts",
          hidden: false
        },
        {
          text: "Parallax section",
          url: "/",
          hidden: false
        },
        {
          text: "Installed icons",
          url: "/samples/installed-icons",
          hidden: false
        }
      ]
    }
  });

  const navitemsLoaded = ref(true);

  return { navItems, navitemsLoaded };
}
