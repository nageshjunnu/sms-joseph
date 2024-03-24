import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
 
class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage
 
    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })
 
    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)
 
    return initialProps
  }
 
  render() {
    return (
      <Html lang="en">
        <Head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content=""/>
            <meta name="author" content=""/>
            <link rel="icon" href="/images/favicon.ico"/>

            <title>EduAdmin - Dashboard</title>
            
              {/* <!-- Vendors Style--> */}
              <link rel="stylesheet" href="/assets/css/vendors_css.css"/>
                
              {/* <!-- Style-->   */}
              <link rel="stylesheet" href="/assets/css/style.css"/>
              <link rel="stylesheet" href="/assets/css/skin_color.css"/>
              <link rel="stylesheet" href="/assets/icons/Ionicons/css/ionicons.css"/>
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <!-- Vendor JS --> */}
          <script src="/assets/js/vendors.min.js"></script>
          <script src="/assets/js/pages/chat-popup.js"></script>
            <script src="/assets/icons/feather-icons/feather.min.js"></script>

          <script src="/assets/vendor_components/apexcharts-bundle/dist/apexcharts.js"></script>
          <script src="/assets/vendor_components/moment/min/moment.min.js"></script>
          <script src="/assets/vendor_components/fullcalendar/fullcalendar.js"></script>
          
          {/* <!-- EduAdmin App --> */}
          <script src="/assets/js/template.js"></script>
          <script src="/assets/js/pages/dashboard.js"></script>
          <script src="/assets/js/pages/calendar.js"></script>
        </body>
      </Html>
    )
  }
}
 
export default MyDocument