import Head from "next/head";

const Meta = ({
  title = "Arash Nur Iman",
  name = "Arash Nur Iman",
  description = "I'm Arash Nur Iman, a student developer from Singapore ardent about creating designed, intuitive, and practical products using technology.",
  url = "https://arash.codes",
  image = "https://arash.codes/seo.jpg",
}) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" type="image/ico" href="/favicon.ico" />

    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta name="keywords" content="developer, dev, student, Singapore" />
    <meta name="author" content={name} />
    <meta name="url" content={url} />
    <meta name="theme-color" content="#000000" />

    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:description" content={description} />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:site_name" content={title} />
    <meta property="og:image" content={image} />

    <script
      async
      defer
      data-website-id="1ed8d14c-014c-4bca-a8e7-231b0b583417"
      src="https://analytics.arash.codes/umami.js"
    ></script>
  </Head>
);

export default Meta;