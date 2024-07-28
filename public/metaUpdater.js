// metaUpdater.js

// Define meta tags configuration
const metaTagsConfig = {
    "/": {
      title: "Discover the Best Luxury Property in Gurgaon with Realty Shopee",
      description:
        "Discover the best luxury property in Gurgaon with Realty Shopee. Find residential, commercial, and SCO plots properties tailored to your needs in this dynamic city.",
      url: "https://realtyshopee.com/",
      image:
        "https://res.cloudinary.com/dgplzytrq/image/upload/v1719493314/Description%20Images/og-home-logo.png",
      canonical: "https://www.realtyshopee.com/",
    },
    "/residential-property-in-gurgaon": {
      title: "New Residential Property in Gurgaon for Sale By Realty Shopee",
      description:
        "Find the cheapest & new residential property in Gurgaon with Realty Shopee. Explore upcoming, and ready-to-move residential property options in prime locations.",
      url: "https://www.realtyshopee.com/residential-property-in-gurgaon",
      image:
        "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
      canonical:
        "https://www.realtyshopee.com/residential-property-in-gurgaon",
    },
    "/commercial-property-in-gurgaon": {
      title: "Invest in the Best Commercial Property in Gurgaon | Realty Shopee",
      description:
        "Planning to invest in real estate? Explore the best commercial property in Gurgaon with Realty Shopee. Investment opportunities, ready-to-move, and resale options are available.",
      url: "https://www.realtyshopee.com/commercial-property-in-gurgaon",
      image:
        "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
      canonical:
        "https://www.realtyshopee.com/commercial-property-in-gurgaon",
    },
    "/sco-plots-in-gurgaon": {
      title: "Premium SCO Plots in Gurugram for Sale | Realty Shopee",
      description:
        "Premium commercial and residential SCO plots in Gurgaon for sale with two-side open layouts. Explore affordable options at Realty Shopee.",
      url: "https://www.realtyshopee.com/sco-plots-in-gurgaon",
      image:
        "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
      canonical: "https://www.realtyshopee.com/sco-plots-in-gurgaon",
    },
    "/allproperties": {
      title: "All Premium Properties are listed! | Realty Shopee",
      url: "https://www.realtyshopee.com/allproperties",
      canonical: "https://www.realtyshopee.com/allproperties",
      image:
        "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
    },
    "/blogs": {
      title: "Realty Shopee Blogs: Expert Real Estate Insights in Gurgaon",
      description:
        "Stay updated with Realty Shopee's latest insights & trends in commercial & residential real estate in Gurgaon. Discover expert advice & the latest property news.",
      url: "https://www.realtyshopee.com/blogs",
      canonical: "https://www.realtyshopee.com/blogs",
      image:
        "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
    },
    "/blog/latest-trends-in-new-launch-property-in-gurgaon-the-millenium-city": {
      url: "https://www.realtyshopee.com/blog/latest-trends-in-new-launch-property-in-gurgaon-the-millenium-city",
      canonical:
        "https://www.realtyshopee.com/blog/latest-trends-in-new-launch-property-in-gurgaon-the-millenium-city",
      image:
        "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
      additionalMetaTags: [
        {
          name: "canonical",
          content:
            "https://www.realtyshopee.com/blog/latest-trends-in-new-launch-property-in-gurgaon-the-millenium-city",
        },
        { property: "og:site_name", content: "Realty Shopee" },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content:
            "Latest Trends in New Launch Property in Gurgaon: The Millennium City",
        },
        {
          property: "og:description",
          content:
            "Explore the latest trends in new launch property in Gurgaon with Realty Shopee. Discover why Gurgaon is called the millennium city.",
        },
        {
          property: "og:url",
          content:
            "https://www.realtyshopee.com/blog/latest-trends-in-new-launch-property-in-gurgaon-the-millenium-city",
        },
        {
          property: "og:image",
          content:
            "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "Realty Shopee" },
        { name: "twitter:type", content: "website" },
        {
          name: "twitter:title",
          content:
            "Latest Trends in New Launch Property in Gurgaon: The Millennium City",
        },
        {
          name: "twitter:description",
          content:
            "Explore the latest trends in new launch property in Gurgaon with Realty Shopee. Discover why Gurgaon is called the millennium city.",
        },
        {
          name: "twitter:url",
          content:
            "https://www.realtyshopee.com/blog/latest-trends-in-new-launch-property-in-gurgaon-the-millenium-city",
        },
        {
          name: "twitter:image",
          content:
            "https://res.cloudinary.com/dgplzytrq/image/upload/v1719492483/Description%20Images/residential-property-in-gurgaon.jpg",
        },
      ],
    },
    // Add more routes and corresponding meta tag data here...
  };
  
  function updateMetaTags(route) {
    const config = metaTagsConfig[route];
  
    if (config) {
      $("meta[name='description']").attr("content", config.description || "");
      $("meta[property='og:title']").attr("content", config.title || "");
      $("meta[property='og:description']").attr(
        "content",
        config.description || ""
      );
      $("meta[property='og:url']").attr("content", config.url || "");
      $("meta[property='og:image']").attr("content", config.image || "");
      $("meta[name='twitter:title']").attr("content", config.title || "");
      $("meta[name='twitter:description']").attr(
        "content",
        config.description || ""
      );
      $("meta[name='twitter:url']").attr("content", config.url || "");
      $("meta[name='twitter:image']").attr("content", config.image || "");
      $("link[rel='canonical']").attr("href", config.canonical || "");
    }
  }
  
  function getCurrentRoute() {
    return window.location.pathname;
  }
  
  // Initial meta tags update
  $(document).ready(function () {
    updateMetaTags(getCurrentRoute());
  });
  
  // Update meta tags on popstate event (back/forward navigation)
  window.addEventListener("popstate", function () {
    updateMetaTags(getCurrentRoute());
  });
  
  // Listen for route changes and update meta tags
  $(document).on("click", "a", function (e) {
    const href = $(this).attr("href");
  
    if (href.startsWith("/")) {
      e.preventDefault();
  
      history.pushState(null, "", href);
  
      updateMetaTags(getCurrentRoute());
    }
  });
  