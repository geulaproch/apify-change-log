export const CATEGORIES = {
    GENERAL: 'General',
    APP: 'App',
    API: 'API',
    ACTOR: 'Actor',
    STORAGE: 'Storage',
    PROXY: 'Proxy',
    CRAWLER: 'Crawler',
    MARKETPLACE: 'Marketplace',
    INTEGRATIONS: 'Integrations',
    WEB: 'Web',
    DOCS: 'Docs',
    HELP: 'Help',
    CLI: 'CLI',
    SDK: 'SDK',
    INTERNAL: 'Internal',
    SCRAPERS: 'Scrapers',
};

/* eslint-disable max-len */
export const CHANGELOG = [
    {
        date: 'June 2020',
        items: [
            {
                category: CATEGORIES.WEB,
                content: 'New success story added - <a href="/success-stories/keyword-search-and-content-ideation-tool" target="_blank">Keyword Research and Content Ideation Tool</a>.',
            },
        ],
    },
    {
        date: 'May 2020',
        items: [
            {
                category: CATEGORIES.APP,
                content: 'Improved overall performance of the Apify app including load time by optimizing size of the application bundle to about a half of the original size.',
            },
            {
                category: CATEGORIES.APP,
                content: 'Remaining storage tables rewritten for better performance and to remove the limit on how many items can be viewed.',
            },
            {
                category: CATEGORIES.APP,
                content: 'You can now download the complete source code of an actor as a ZIP archive directly from the multi-file code editor.',
            },
            {
                category: CATEGORIES.DOCS,
                content: '<a href="https://docs.apify.com/" target="_blank">Apify documentation</a> is being restructured and extended with new sections.',
            },
            {
                category: CATEGORIES.APP,
                content: '<a href="https://docs.apify.com/scheduler" target="_blank">Scheduler</a> now supports a time zone selection concerning a DST time.',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Actor detail page - "How to run" section redesigned and renamed to API.',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Introduced the <a href="/solution-provider" target="_blank">solution providers</a> page - Boost your revenue by adding our web scraping and RPA solutions as part of your product portfolio.',
            },
        ],
    },
    {
        date: 'April 2020',
        items: [
            {
                category: CATEGORIES.DOCS,
                content: 'Added new articles such as <a href="https://docs.apify.com/actors/publishing" target="_blank">Actor publishing</a> and also extended existing articles as for example all the <a href="https://docs.apify.com/actors/limits" target="_blank">Apify platform limits</a> are now documented.',
            },
            {
                category: CATEGORIES.APP,
                content: 'Actor (task) runs tables rewritten for better performance and to remove the limit on how many items can be viewed.',
            },
            {
                category: CATEGORIES.WEB,
                content: 'New <a href="/affiliate" target="_blank">Affiliate</a> program introduced - Send a customer our way and earn a recurring commission as our affiliate with no limits on what you can earn.',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Published the new <a href="/custom-solutions" target="_blank">Custom solutions</a> page - Marketplace or Enterprise? Select the option that suits your needs.',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Overview table added to the <a href="/covid-19" target="_blank">COVID-19</a> page.',
            },
        ],
    },
    {
        date: 'March 2020',
        items: [
            {
                category: CATEGORIES.GENERAL,
                content: 'We wanted to do our part in the fight against COVID-19, so we turned official pages with statistics into APIs that can be used by other apps. Use these <a href="https://apify.com/covid19">coronavirus statistics APIs</a> to get the latest data from multiple countries.',
            },
            {
                category: CATEGORIES.DOCS,
                content: '<a href="https://docs.apify.com">Documentation</a> is being continuously improved with new features such as a table of contents and links to previous/next articles.',
            },
            {
                category: CATEGORIES.API,
                content: 'Schedules can be now pragmatically managed using an API. See <a href="https://docs.apify.com/api/v2#/reference/schedules">the documentation</a> for more information.',
            },
            {
                category: CATEGORIES.SCRAPERS,
                content: 'The Web Scraper (<a href="https://apify.com/apify/web-scraper" target="_blank">apify/web-scraper</a>) actor development experience has become much smoother with the addition of a state-of-the-art remote inspector, Chrome DevTools. In the Web Scraper input, set the Run type to DEVELOPMENT and enjoy a full DevTools experience either in the live view tab or in a separate window by visiting the container URL. See advanced configuration for breakpoint management and go kill them bugs.',
            },
            {
                category: CATEGORIES.SDK,
                content: 'Redesigned the existing examples in Apify SDK documentation page and added a bunch of new ones, addressing the most frequently asked questions on our support channels. Check them out in our <a href="https://sdk.apify.com/docs/examples/capture-screenshot" target="_blank">examples section</a>.',
            },
            {
                category: CATEGORIES.GENERAL,
                content: 'We’ve recently launched a <a href="https://apify.com/partners" target="_blank">referral program</a>. Send a customer our way and earn a recurring commission as our affiliate. Interested in becoming a referral partner? Get in touch at partners@apify.com.',
            },
        ],
    },
    {
        date: 'February 2020',
        items: [
            {
                category: CATEGORIES.PROXY,
                content: 'During the free trial, Apify Proxy is available only from actors running on the Apify platform.'
            },
            {
                category: CATEGORIES.APP,
                content: 'Tables across app are being rewritten to speed up the load and to remove the limit how many items are retrieved. Check out the new <a href="https://my.apify.com/storage" targe="_blank">key-value store</a> view. Other tables will follow.',
            },
            {
                category: CATEGORIES.APP,
                content: 'Memory settings of actor (task) now shows how many CPU cores will be proportionally allocated for actor run.',
            },
            {
                category: CATEGORIES.APP,
                content: 'User can now optionally override existing actor when making a copy of an actor.',
            },
        ],
    },
    {
        date: 'January 2020',
        items: [
            {
                category: CATEGORIES.WEB,
                content: '<a href="https://apify.com/tools" target="_blank">Tools page</a> added to Apify website. You can find usefull tools such as <a href="https://apify.com/page-analyzer" target="_blank">Page analyzer</a> and <a href="https://apify.github.io/input-schema-editor-react/" target="_blank">Input schema editor</a> with browser fingerprint analyzer coming soon.',
            },
            {
                category: CATEGORIES.APP,
                content: 'Account settings including user subscription are now located in the top right of Apify app under the user icon.',
            },
            {
                category: CATEGORIES.APP,
                content: 'In-app chat is now hidden by default. If you need to contact support, you can always find it in the Help menu at the top of the page under the <code>?</code> icon and choosing "Chat with support" option.',
            },
            {
                category: CATEGORIES.DOCS,
                content: 'Search added to a <a href="https://docs.apify.com" target="_blank">documentation</a>.',
            },
            {
                category: CATEGORIES.STORAGE,
                content: 'Downloaded <a href="hhttps://docs.apify.com/storage/dataset" target="_blank">datasets</a> have human fiendly names.',
            },
            {
                category: CATEGORIES.DOCS,
                content: 'Many improvements in docs and actor readme files such as syntax highlighting.',
            },
        ],
    },
    {
        date: 'December 2019',
        items: [
            {
                category: CATEGORIES.APP,
                content: 'New access rights system allows you to provide other users with limited access to your actors, tasks, and storages. Read more about access rights in <a href="https://blog.apify.com/launching-access-rights-share-your-actors-tasks-and-storages-with-other-users-dc46bd9511a8?" target="_blank">blog post</a>.',
            },
            {
                category: CATEGORIES.DOCS,
                content: 'Apify’s documentation has been completely redesigned and now has its own domain at <a href="https://docs.apify.com" target="_blank">docs.apify.com</a>.',
            },
            {
                category: CATEGORIES.MARKETPLACE,
                content: 'Offers has been launched — a feature on Apify Marketplace that allows developers to prepare proposals for projects and share them directly with customers. See <a href="https://medium.com/p/ce6e899b473" target="_blank">blog post</a> for more information.',
            },
        ],
    },
    {
        date: 'November 2019',
        items: [
            {
                category: CATEGORIES.STORAGE,
                content: 'Each of storage types (key-value store, dataset and request queue) can be now named and renamed using API or manually in Apify app.',
            },
            {
                category: CATEGORIES.API,
                content: '<a href="https://docs.apify.com/api/v2#/reference/datasets/item-collection/get-items" target="_blank">Dataset get items</a> API endpoint now returns unlimited number of items.',
            },
        ],
    },
    {
        date: 'October 2019',
        items: [
            {
                category: CATEGORIES.CRAWLER,
                content: 'Legacy Apify Crawler product has been retired '
                    + 'in favor of the new <a href="https://apify.com/apify/legacy-phantomjs-crawler" target="_blank">apify/legacy-phantomjs-crawler</a> actor running on the '
                    + '<a href="https://apify.com/actors" target="_blank">Apify Actors platform</a>. '
                    + 'For more information read this <a href="https://blog.apify.com/apify-crawler-to-be-replaced-by-apify-actors-c67df1366e00" target="_blank">blog post</a>.',
            },
            {
                category: CATEGORIES.WEB,
                content: 'See how web scraping and automation with Apify can help your business at <a href="https://apify.com/use-cases" target="_blank">use cases</a>.',
            },
        ],
    },
    {
        date: 'September 2019',
        items: [
            {
                category: CATEGORIES.ACTOR,
                content: 'You can now run your <a href="https://scrapy.org/" target="_blank">Scrapy</a> spiders at '
                    + '<a href="https://apify.com/actors" target="_blank">Apify Actors platform</a> using the new '
                    + '<a href="https://apify.com/apify/scrapy-executor" target="_blank">apify/scrapy-executor</a> actor.',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Get inspired by awesome projects built using Apify at <a href="https://apify.com/success-stories" target="_blank">case studies</a>.',
            },
            {
                category: CATEGORIES.PROXY,
                content: 'Increased stability and lifetime of <a href="https://docs.apify.com/proxy/residential-proxy" target="_blank">residential proxy</a> sessions.',
            },
            {
                category: CATEGORIES.CLI,
                content: '<a href="https://docs.apify.com/cli" target="_blank">Apify CLI</a> now deploys actors using multi-file source type to make the code readable in Apify app.',
            },
        ],
    },
    {
        date: 'August 2019',
        items: [
            {
                category: CATEGORIES.HELP,
                content: 'New help center is available at <a href="https://help.apify.com" target="_blank">help.apify.com</a>. It provides search across all the resources such as knowledge base articles, blog, documentation, Stack Overflow and Apify SDK website.',
            },
            {
                category: CATEGORIES.API,
                content: 'Dataset fetched in RSS format now contains <code>&#60;lastBuildDate&#62;</code> based on its modification date.',
            },
            {
                category: CATEGORIES.GENERAL,
                content: '<a href="https://apify.com/join-marketplace" target="_blank">Apify Marketplace</a> is now open for developers to join and earn money by developing custom solutions for Apify customers.',
            },
        ],
    },
    {
        date: 'July 2019',
        items: [
            {
                category: CATEGORIES.WEB,
                content: 'Apify website <a href="https://apify.com" target="_blank">apify.com</a> has been completely redesigned.',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Page analyzer improved. <a href="https://apify.com/page-analyzer" target="_blank">Check it out!</a>.',
            },
            {
                category: CATEGORIES.APP,
                content: 'Finished (failed) actor run can be now resurrected back to a <code>RUNNING</code> state. Checkout out the <a href="https://docs.apify.com/actor/run#resurrection-of-finished-run" target="_blank">documentation</a> for more information.',
            },
            {
                category: CATEGORIES.APP,
                content: 'Scheduler now displays log of both successfull and failed invocations.',
            },
            {
                category: CATEGORIES.GENERAL,
                content: 'Starting on Wednesday 31st July 2019, user accounts with disposable (temporary) email addresses will no longer be able to run actors, use Apify Proxy or call Apify API. '
                    + 'To retain your access to Apify services, please change your email address on the <a href="https://my.apify.com/account#/settings" target="_blank">Account - Settings page</a> to a legitimate email provider. ',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Actor and Task inputs specified through INPUT_SCHEMA.json can now be split into collapsible sections. Find out how to configure them <a href="https://docs.apify.com/actor/input-schema" target="_blank">here</a>.',
            },
        ],
    },
    {
        date: 'June 2019',
        items: [
            {
                category: CATEGORIES.CRAWLER,
                content: '<b>Apify Crawler is being phased out.</b> Please read this <a '
                    + 'href="https://blog.apify.com/apify-crawler-to-be-replaced-by-apify-actors-c67df1366e00" '
                    + 'target="_blank">blog post</a> '
                    + 'to find out why we are retiring the Crawler product, what it means for you and how you can migrate your '
                    + 'crawlers to a new actor, including the integrations.',
            },
            {
                category: CATEGORIES.API,
                content: 'Actor task input can be now retrieved and modified using a special <a href="https://docs.apify.com/api/v2#/reference/actor-tasks/task-input-object/get-task-input" target="_blank">API endpoint</a>.',
            },
            {
                category: CATEGORIES.APP,
                content: 'Users can now upload custom profile picture in <a href="https://my.apify.com/account#/profile" target="_blank">account settings</a>.',
            },
            {
                category: CATEGORIES.APP,
                content: 'Users can upload image to published actor. This image will soon appear at its public page in Apify Store.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Startup times of actors were optimized using CPU boost during the first 10 seconds of run.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Actor run along with its data can be now shared using public link that is available under the tab "info".',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Tasks now support only JSON encoded input. This also affects API which returns actor task input directly '
                    + 'as object under the <code>input</code> property instead of JSON-encoded pair of <code>body</code> and <code>contentType</code>. '
                    + 'See API documentation of a '
                    + '<a href="https://docs.apify.com/api/v2#/reference/actor-tasks/task-object/get-task" target="_blank">get actor task</a> endpoint.',
            },
            {
                category: CATEGORIES.GENERAL,
                content: 'Apify Forum was moved to <a href="https://stackoverflow.com/questions/tagged/apify" '
                    + 'target="_blank">Stack Overflow</a>.',
            },
        ],
    },
    {
        date: 'May 2019',
        items: [
            {
                category: CATEGORIES.ACTOR,
                content: 'Actor task input can be overloaded in scheduler.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Added limit of 300 characters for description.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'New Dockerfile templates for multifile allow faster builds.',
            },
            {
                category: CATEGORIES.API,
                content: 'Rate limit for dataset push items endpoint increased to 300 req/s per store.',
            },
            {
                category: CATEGORIES.API,
                content: 'Added actor author username to list actor tasks.',
            },
            {
                category: CATEGORIES.API,
                content: 'Added input schema to build detail.',
            },
            {
                category: CATEGORIES.APP,
                content: 'Schedules that use a predefined CRON expression such as '
                    + '<code>@monthly</code>, <code>@weekly</code>, <code>@daily</code> or <code>@hourly</code> randomly change the base times '
                    + 'to ensure that schedules with the same expression will not all start at the same time. '
                    + 'This measure is aimed at improving startup times and the performance of your actors and crawlers.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Tasks can be now easily published as actor. Check out '
                    + '<a href="https://kb.apify.com/publishing-to-apify-store/converting-a-task-to-an-actor-and-publishing-it-on-apify-store" '
                    + 'target="_blank">knowledge base article</a> to learn more.',
            },
            {
                category: CATEGORIES.APP,
                content: 'Request payload can be now modified in webhook configuration. Check out '
                    + '<a href="https://docs.apify.com/webhooks/actions" target="_blank">webhooks documentation</a> to learn more.',
            },
            {
                category: CATEGORIES.APP,
                content: "Ad hoc webhooks now support idempotency key to ensure that duplicate webhooks won't get "
                    + 'created when actor gets restarted. Check out '
                    + '<a href="https://docs.apify.com/webhooks/ad-hoc-webhooks" target="_blank">webhooks documentation</a> to learn more.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: '<a href="https://docs.apify.com/actor/run#container-web-server" '
                    + 'target="_blank">Web server</a> running in actor is not required to start in 120s'
                    + 'but can start at any time during the lifespan of its container.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Git deployment key is now available via API (<a '
                    + 'href="https://docs.apify.com/api/v2#/reference/actors/actor-object/get-actor" '
                    + 'target="_blank">get actor</a> endpoint).',
            },
            {
                category: CATEGORIES.ACTOR,
                content: '"Use spare CPU capacity" configuration was removed.',
            },
        ],
    },
    {
        date: 'April 2019',
        items: [
            {
                category: CATEGORIES.PROXY,
                content: 'Per hostname traffic statistics are now shown at <a href="https://my.apify.com/proxy" '
                    + 'target="_blank">Apify Proxy</a> page in app.',
            },
            {
                category: CATEGORIES.PROXY,
                content: 'Data transfer is now limited to 5GB per IP address.',
            },
            {
                category: CATEGORIES.PROXY,
                content: 'Improved performance of a <a href="https://docs.apify.com/proxy/google-serp-proxy" '
                    + 'target="_blank">Google SERP Proxy</a>.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Two new generic scrapers released – '
                    + '<a href="https://apify.com/apify/puppeteer-scraper" target="_blank">apify/puppeteer-scraper</a> '
                    + 'and '
                    + '<a href="https://apify.com/apify/cheerio-scraper" target="_blank">apify/cheerio-scraper</a>.',
            },
        ],
    },
    {
        date: 'March 2019',
        items: [
            {
                category: CATEGORIES.ACTOR,
                content: 'Increased maximum memory for actor runs to 32 GB.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Input UI for actor now validates proxy configuration.',
            },
            {
                category: CATEGORIES.API,
                content: 'Added set of API endpoints to '
                    + '<a href="https://docs.apify.com/api/v2#/reference/webhooks" target="_blank">manage webhooks</a> and '
                    + '<a href="https://docs.apify.com/api/v2#/reference/webhook-dispatches" target="_blank">retrieve webhook dispatches</a>.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'New validation options added to actor input <a href="https://docs.apify.com/actor/input-schema" '
                    + 'target="_blank">schema</a> field definitions. '
                    + 'For example <code>max</code> and <code>min</code> length of string and array field or regular expression '
                    + '<code>pattern</code> for values of string list field.',
            },
            {
                category: CATEGORIES.PROXY,
                content: 'URL of Apify proxy now supports new parameter <code>country</code> that restricts proxy IPs selection to given country.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Run can now <a href="https://docs.apify.com/actor/source-code#metamorph" target="_blank">metamorph</a> into run of another actor.',
            },
            {
                category: CATEGORIES.GENERAL,
                content: 'Original Apify crawler has been open sourced as actor <a href="https://apify.com/apify/legacy-phantomjs-crawler" '
                    + 'target="_blank">apify/legacy-phantomjs-crawler</a>. '
                    + 'This actor has the same input as original Apify crawler and also the same output format.',
            },
        ],
    },
    {
        date: 'February 2019',
        items: [
            {
                category: CATEGORIES.API,
                content: 'New set of API endpoints to retrieve and manage the last actor (task) run and its default storages. Check '
                    + '<a href="https://docs.apify.com/api/v2#/reference/actors/last-run-object-and-its-storages">API documentation</a> for more information.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Source code editor extended with multifile support, more in '
                    + '<a href="https://docs.apify.com/actor/source-code#multiple-source-files">documentation</a>.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Runs with <code>READY</code> and <code>RUNNING</code> state are now pinned to the top of the actor runs list.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'New input UI fields added (key-value pairs, string list, hidden fields). All the field types now support '
                    + '<code>nullable</code> option. '
                    + 'See <a href="https://docs.apify.com/actor/input-schema" target="_blank">documentation page</a> for more information.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Improved actor publication page.  ',
            },
        ],
    },
    {
        date: 'January 2019',
        items: [
            {
                category: CATEGORIES.ACTOR,
                content: 'New <a href="https://docs.apify.com/webhooks">webhooks</a> component enables integration of actors with external services '
                    + 'and orchestration of multiple actors into single pipeline.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Run console was improved and provides quick overview of actor run storages.  ',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Published actors have new title that is displayed at its public library page.  ',
            },
            {
                category: CATEGORIES.STORAGE,
                content: 'Dataset now supports hidden fields (i.e. fields starting with the # character). '
                    + 'These fields may be used to store debug information such as errors, '
                    + 'response codes, etc. that might be easily omitted from output.  ',
            },
            {
                category: CATEGORIES.STORAGE,
                content: 'Added new parameters to API endpoints returning dataset items - '
                    + '<code>skipEmpty=true</code> to omit empty items, '
                    + '<code>skipHidden=1</code> to omit hidden fields and '
                    + '<code>clean=true</code> a shortcut for <code>skipEmpty</code> and <code>skipHidden</code>.',
            },
            {
                category: CATEGORIES.API,
                content: 'All endpoints with <code>[username]~[resourceName]</code> parameter in URL now support also '
                    + '<code>[userId]~[resourceName]</code> format.',
            },
            {
                category: CATEGORIES.APP,
                content: 'Code editor used at Apify app was replaced with modern '
                    + '<a href="https://microsoft.github.io/monaco-editor/">Monaco editor</a> that supports all ES6 features.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Memory limit for free accounts increased to 8GB.  ',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Input UI for <a href="https://sdk.apify.com/docs/api/request-list" target="_blank">request list</a> now supports web '
                    + 'hosted or uploaded file with a list of URLs. Try out '
                    + '<a href="https://apify.com/apify/crawler-cheerio" target="_blank">Crawler - cheerio</a> to see it in action (Start URLs field).',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Publicated actor can be now marked as deprecated. Deprecated actor will be omitted from public library search '
                    + 'and flagged as deprecated. Use this feature to tell people your actor is no longer '
                    + 'being developed, since removing it might break integrations that depend on the actor.  ',
            },
            {
                category: CATEGORIES.APP,
                content: 'Replaced code editor with <a href="https://microsoft.github.io/monaco-editor" target="_blank">Monaco Editor</a> '
                    + 'which supports modern JavaScript features and provides better coding experience.',
            },
        ],
    },
    {
        date: 'December 2018',
        items: [
            {
                category: CATEGORIES.API,
                content: 'Removed the <code>meta.clientIp</code> field from several API endpoints due to privacy concerns  ',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Updated <a href="https://hub.docker.com/u/apify/" target="_blank" rel="noopener">base Apify Docker images</a> '
                    + 'to use <code>CMD</code> rather than <code>ENTRYPOINT</code> instruction to launch the code. '
                    + "If you're using a custom Dockerfile that is based on Apify base images, make sure your <code>CMD</code> "
                    + 'instruction is correct. '
                    + 'See <a href="https://github.com/apify/actor-quick-start/blob/master/Dockerfile" '
                    + 'arget="_blank" rel="noopener">Dockerfile example</a> for more information.',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Added featured actors and crawlers to <a href="https://apify.com/library" '
                    + 'target="_blank">library</a>. Added input schema and example run to actor detail page.  ',
            },
            {
                category: CATEGORIES.APP,
                content: 'Added new section with third-party login services to <a href="https://my.apify.com/account#/settings">Account page</a>',
            },
            {
                category: CATEGORIES.GENERAL,
                content: 'Numerous performance and stability improvements, bugfixes',
            },
        ],
    },
    {
        date: 'November 2018',
        items: [
            {
                category: CATEGORIES.APP,
                content: 'Dataset detail page now shows preview of the data.  ',
            },
            {
                category: CATEGORIES.CLI,
                content: 'Added new commands to manage secrets environment variables, check <code>apify secrets help</code> for more details.  ',
            },
            {
                category: CATEGORIES.CLI,
                content: 'Simplified <code>apify.json</code> file structure. It will be updated automatically before execution '
                    + '<code>apify run</code> and <code>apify push</code> command. Read more in the '
                    + '<a href="https://github.com/apify/apify-cli/blob/master/README.md#so-whats-in-this-apifyjson-file">documentation</a>.',
            },
            {
                category: CATEGORIES.APP,
                content: 'Added new <a href="https://my.apify.com/orders">Orders</a> section '
                    + 'to enable customers to keep track of their custom projects. '
                    + 'Read more in a <a href="https://blog.apify.com/streamlining-ordering-of-custom-solutions-from-apify-experts-e89ffbc8465a">blog post</a>.',
            },
            {
                category: CATEGORIES.APP,
                content: 'A large number of user interface and performance improvements.  ',
            },
            {
                category: CATEGORIES.APP,
                content: 'Now you can set an additional billing email address that will receive copy of all invoices. '
                    + 'To set it, just go to your <a href="https://my.apify.com/account#/subscription">Subscription</a> page, '
                    + 'click <b>Edit</b>, set <b>Billing email</b> and click <b>Update subscription</b>.',
            },
            {
                category: CATEGORIES.API,
                content: 'Apify Storage API endpoints (i.e. '
                    + '<a href="https://docs.apify.com/api/v2#/reference/key-value-stores" target="_blank">key-value stores</a>, '
                    + '<a href="https://docs.apify.com/api/v2#/reference/datasets" target="_blank">datasets</a>, '
                    + 'and '
                    + '<a href="https://docs.apify.com/api/v2#/reference/request-queues" target="_blank">request queues</a>) '
                    + 'that use other than GET HTTP method '
                    + 'are now authorized using API token of user. Please see <a href="https://docs.apify.com/api/v2" target="_blank">API documentation</a> '
                    + 'for more information. '
                    + 'Note that we made a special exception in the system that will ensure that affected '
                    + 'users will be able to continue using the API the old way. We\'ll send additional information to these users.',
            },
            {
                category: CATEGORIES.API,
                content: 'New <a href="https://docs.apify.com/api/v2#/reference/actors/version-collection" '
                    + 'target="_blank">endpoints</a>  providing access to particular version of actor added.  ',
            },
            {
                category: CATEGORIES.API,
                content: 'Actor task input can be now overloaded via API. See <a '
                    + 'href="https://docs.apify.com/api/v2#/reference/actor-tasks/run-collection/run-task-asynchronously" '
                    + 'target="_blank">documentation</a> for more information.  ',
            },
        ],
    },
    {
        date: 'October 2018',
        items: [
            {
                category: CATEGORIES.ACTOR,
                content: 'Private Git repositories are now supported. Check <a href="https://docs.apify.com/actor/source-code#private-repositories" '
                    + 'target="_blank">documentation</a> for more information.  ',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Improved actor UI - run console and source page has been redesigned for better developer experience.  ',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Improved search in <a href="https://apify.com/library" target="_blank">library</a>.  ',
            },
            {
                category: CATEGORIES.WEB,
                content: 'A new page with awesome <a href="https://apify.com/success-stories" target="_blank">case studies</a> was published.  ',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Actors and crawlers in <a href="https://apify.com/library" target="_blank">library</a> are now organized by categories.  ',
            },
            {
                category: CATEGORIES.ACTOR,
                content: ' "Is exclusive" functionality of scheduler now supports actor also. If this options is checked then scheduler '
                    + "won't start another run as long as previous is still running.  ",
            },
            {
                category: CATEGORIES.SDK,
                content: 'New documentation for Apify SDK is now available at <a href="https://sdk.apify.com" '
                    + 'target="_blank">https://sdk.apify.com</a>.  ',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Input of an actor and its input UI can be now described in <a href="https://docs.apify.com/actor/input-schema" '
                    + 'target="_blank">input schema</a>.  ',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Many new public actors with UI for input released in library: '
                    + '    <a href="https://apify.com/petr_cermak/booking-hotels">petr_cermak/booking-hotels</a>, '
                    + '    <a href="https://apify.com/lukaskrivka/google-spreadsheet">lukaskrivka/google-spreadsheet</a>, '
                    + '    <a href="https://apify.com/jakubbalada/content-checker">jakubbalada/content-checker</a>, '
                    + '    <a href="https://apify.com/apify/image-diff">apify/image-diff</a>, '
                    + '    ... checkout <a href="https://apify.com/library?type=acts">library</a> for more.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Released <a href="https://docs.apify.com/tasks">Apify actor tasks</a>. '
                    + 'Using them, you can create multiple configurations of a single actor and then run '
                    + 'the selected configuration directly from Apify Platform, schedule or API.  ',
            },
            {
                category: CATEGORIES.PROXY,
                content: 'New <a href="https://docs.apify.com/proxy">documentation</a> of Apify proxy released. '
                    + 'Contains examples in multiple languages and detailed description of all provided proxies - '
                    + '<a href="https://docs.apify.com/proxy/datacenter-proxy">datacenter</a>, '
                    + '<a href="https://docs.apify.com/proxy/residential-proxy">residential</a>, '
                    + 'and <a href="https://docs.apify.com/proxy/google-serp-proxy">Google SERP</a>.',
            },
        ],
    },
    {
        date: 'September 2018',
        items: [
            {
                category: CATEGORIES.SDK,
                content: 'Released new major version v0.7 of <code>apify</code> NPM package. '
                    + 'Check <a target="_blank" href="https://github.com/apify/apify-js/blob/master/CHANGELOG.md">changelog</a> for more information.',
            },
            {
                category: CATEGORIES.CLI,
                content: 'Changed behaviour of <code>apify run</code> command and apify local storage directory name. '
                    + 'Check <a target="_blank" href="https://github.com/apify/apify-cli/blob/master/MIGRATIONS.md">migration guide</a> '
                    + 'if you are updating from version v0.1.*.',
            },
        ],
    },
    {
        date: 'August 2018',
        items: [
            {
                category: CATEGORIES.ACTOR,
                content: 'Added actor live view that enables connecting to running containers - read more on '
                    + '<a href="https://blog.apify.com/live-view-of-running-actors-on-public-hostname-18a88546b0f2">Apify Blog</a>',
            },
            {
                category: CATEGORIES.APP,
                content: 'Major internal code consolidation and performance improvements',
            },
            {
                category: CATEGORIES.API,
                content: 'Various bugfixes and improvements in code and documentation',
            },
            {
                category: CATEGORIES.PROXY,
                content: 'Improvements in Google SERP proxies, adding additional providers',
            },
            {
                category: CATEGORIES.INTEGRATIONS,
                content: 'Added support for input file from other steps.',
            },
        ],
    },
    {
        date: 'July 2018',
        items: [
            {
                category: CATEGORIES.ACTOR,
                content: 'Memory option for actor runs now supports only values that are power of 2 (ie. 128MB, 256MB, 512MB, 1024MB, 2048MB, ...)!',
            },
            {
                category: CATEGORIES.CRAWLER,
                content: 'Proxy configuration of crawler now offers "automatic" mode that rotates all the proxies available for a user.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Each actor run can now start a web server accessible at a certain unique URL. '
                    + 'This enables you to run a web server inside the actor to provide real-time snapshots or receive tasks on the fly. See '
                    + '<a href="/docs/actor#container-web-server">documentation</a> for more details.',
            },
        ],
    },
    {
        date: 'June 2018',
        items: [
            {
                category: CATEGORIES.API,
                content: 'Added API endpoints to abort Actor run and build.',
            },
            {
                category: CATEGORIES.PROXY,
                content: 'New <a href="https://docs.apify.com/proxy" target="_blank">Apify Proxy</a> service launched!',
            },
            {
                category: CATEGORIES.INTEGRATIONS,
                content: 'Added support for running actors in Keboola integration. Check <a '
                    + 'href="https://kb.apify.com/integration/keboola-integration" '
                    + 'target="_blank">knowledge article</a> for more information.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Minimum memory for actor runs is now 128MB.',
            },
            {
                category: CATEGORIES.CLI,
                content: 'Added log streaming for apify push and apify call commands.',
            },
            {
                category: CATEGORIES.CLI,
                content: 'Added parameter to clean stores before runs actor locally. Check <a '
                    + 'href="https://github.com/apify/apify-cli#apify-push" '
                    + 'target="_blank">doc</a> for more information.',
            },
        ],
    },
    {
        date: 'May 2018',
        items: [
            {
                category: CATEGORIES.SDK,
                content: 'Bunch of improvements and new features. Check the <a href="https://github.com/apify/apify-js/blob/master/CHANGELOG.md" '
                    + 'target="_blank">changelog</a>.',
            },
            {
                category: CATEGORIES.CRAWLER,
                content: 'Now it is not possible to combine custom proxies and Apify proxy groups.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Run console now shows information about current/max/avegare CPU and memory.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Actors are now notified 120s before migration to another worker machine. Check <a '
                    + 'href="https://sdk.apify.com/docs/api/apify#module_Apify.events" '
                    + 'target="_blank">documentation</a> for more information.',
            },
        ],
    },
    {
        date: 'April 2018',
        items: [
            {
                category: CATEGORIES.API,
                content: 'Added a new API end-point to <a href="/docs/api/v2#/reference/users">obtain information about a user account</a>',
            },
            {
                category: CATEGORIES.API,
                content: 'Storage API now also supports use of <code>[username]~[storage-name]</code> instead of Dataset ID and Key-value store ID.',
            },
            {
                category: CATEGORIES.CLI,
                content: 'We have just released an <a href="/docs/cli">Apify CLI (command line tool)</a> '
                    + 'to simplify local development, debugging and deployment to Apify.',
            },
            {
                category: CATEGORIES.STORAGE,
                content: 'New storage type for Actor platform that helps to manage dynamic queue of URLs to be processed. Check '
                    + '<a href="/docs/storage">storage documentation</a> for more information.',
            },
            {
                category: CATEGORIES.SDK,
                content: 'apify NPM package contains a lot of new features. Check its '
                    + '<a href="https://github.com/apify/apify-js/blob/master/CHANGELOG.md">changelog</a> for details.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'limit for number of processes per actor run was increased to '
                    + '<code>2 x [memory megabytes]</code> so with 2 GB memory your limit is 4000 processes.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'host machine now sends <code>migrating</code> event to actor process in a case of upcoming restart or shutdown. '
                    + 'Check <a href="https://sdk.apify.com/docs/api/apify#module_Apify.events" target="_blank">documentation</a>.',
            },
        ],
    },
    {
        date: 'March 2018',
        items: [
            {
                category: CATEGORIES.ACTOR,
                content: 'actor runs have now fixed amount of CPU capacity reserved and therefore each run should take about the same time. '
                    + 'We also added a new checkbox "Use spare CPU capacity" in actor settings '
                    + 'allowing actors to use spare CPU capacity at host machine as free boost.',
            },
            {
                category: CATEGORIES.SDK,
                content: 'We released a new version of our open souce <code>apify</code> npm package containing a lot of new stuff '
                    + 'to help you with your web scraping and automation projects. '
                    + 'Check its <a href="https://www.npmjs.com/package/apify" target="_blank">npm page</a>, '
                    + 'source code at <a href="https://github.com/apify/apify-js" target="_blank">GitHub repository</a> '
                    + 'and the <a href="https://sdk.apify.com/" target="_blank">documentation</a>.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: '<code>apify/actor-node-puppeteer</code> Docker image is now deprecated. Use '
                    + '<code>apify/actor-node-chrome</code> image instead.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'We have added <code>apify/actor-node-chrome-xvfb</code> '
                    + 'image that supports non-headless Chrome. If you choose this image then '
                    + '<code>Apify.launchPuppeteer()</code> opens Puppeteer with non-headless Chrome by default.',
            },
            {
                category: CATEGORIES.API,
                content: 'API client for JavaScript 0.2.0 method client.datasets.getItems() now returns object PaginationList with items wrapped inside instead of plain items array. '
                    + 'This helps to iterate through all the items using pagination. This change is not backward compatible!',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'We did improvements of our infrastructure to improve actor starts and overall performance.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Logs are now rate-limited. Each actor run and build has 10 000 lines log credit with 10 lines added each second. '
                    + "Log lines over the limit won't be available in both UI and API.",
            },
        ],
    },
    {
        date: 'February 2018',
        items: [
            {
                category: CATEGORIES.WEB,
                content: 'Launched <a href="https://apify.com/page-analyzer">Page Analyzer</a> tool to enable setting '
                    + 'up crawlers with less manual steps. Read more on '
                    + '<a href="https://blog.apify.com/web-scraping-in-2018-forget-html-use-xhrs-metadata-or-javascript-variables-8167f252439c" '
                    + 'target="_blank" rel="noopener">Apify blog</a>.',
            },
            {
                category: CATEGORIES.INTERNAL,
                content: 'Major improvements to our Linux server configuration  to improve stability and performance of the system.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Actors can now run with 16GB memory (available for users with Medium and large plans see <a '
                    + 'href="https://docs.apify.com/actor/limits" '
                    + 'target="_blank">https://docs.apify.com/actor/limits</a>',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Actor runs and their default key-value stores and datasets are now being deleted after data retention period.',
            },
        ],
    },
    {
        date: 'January 2018',
        items: [
            {
                category: CATEGORIES.APP,
                content: "We've added support for PayPal payments for all subscription plans  ",
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'The actor source code can now come from a GitHub Gist, which is much simpler than having a full Git repository ('
                    + '<a href="/docs/actor#source-github-gist">read the docs</a>)  ',
            },
            {
                category: CATEGORIES.HELP,
                content: 'We have re-launched the <a href="https://kb.apify.com">Knowledge '
                    + 'base</a> with a new design and much better search options.  ',
            },
            {
                category: CATEGORIES.API,
                content: 'Added <a href="https://docs.apify.com/api/v2#/reference/actors/run-actor-synchronously">API '
                    + 'endpoint</a> to run an actor and get its output in a single HTTP request.  ',
            },
            {
                category: CATEGORIES.ACTOR,
                content: " We've added a new storage type <a href=\"/docs/storage#dataset\">Dataset</a>. "
                    + 'This enables you to store results in a way similar to Apify Crawler.  ',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Actor usage statistics are now available in user account.',
            },
        ],
    },
    {
        date: 'December 2017',
        items: [
            {
                category: CATEGORIES.GENERAL,
                content: '<a '
                    + 'href="https://blog.apify.com/how-to-make-headless-chrome-and-puppeteer-use-a-proxy-server-with-authentication-249a21a79212" '
                    + 'target="_blank" rel="noopener">Released the proxy-chain NPM package as open '
                    + 'source</a>',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Smarter allocation of tasks to servers to improve performance',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Environment variables can now also be passed to actor builds (as docker <code>--build-arg</code> parameter)  ',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Added option to automatically restart actor runs on error',
            },
            {
                category: CATEGORIES.CRAWLER,
                content: 'Fixed URL in the <code>link</code> element of RSS formatted last crawler execution result. '
                    + 'This bug was causing that some RSS readers never refreshed the data  ',
            },
        ],
    },
    {
        date: 'November 2017',
        items: [
            {
                category: CATEGORIES.CRAWLER,
                content: 'Added support for <a href="/docs/crawler#rotateUserAgents">automatic '
                    + 'rotation of user agents</a>',
            },
            {
                category: CATEGORIES.PROXY,
                content: 'Released a new NPM package called <a href="https://www.npmjs.com/package/proxy-chain" '
                    + 'target="_blank" rel="noopener">proxy-chain</a> to support usage of proxies with password from headless Chrome  ',
            },
            {
                category: CATEGORIES.API,
                content: 'Added support for XLSX output Format for crawler results',
            },
            {
                category: CATEGORIES.APP,
                content: 'Upgraded the web app to <a href="https://blog.meteor.com/announcing-meteor-1-6-abf30f29e2c6" '
                    + 'target="_blank" rel="noopener">Meteor 1.6</a> and thus greatly improved the speed of the app  ',
            },
            {
                category: CATEGORIES.INTERNAL,
                content: 'Improved internal notifications, performance and infrastructure improvements.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Added feature to enable actor to be anonymously runnable',
            },
        ],
    },
    {
        date: 'October 2017',
        items: [
            {
                category: CATEGORIES.GENERAL,
                content: 'Apifier is dead, long live Apify! On 9th October we launched our biggest upgrade yet.  ',
            },
            {
                category: CATEGORIES.WEB,
                content: 'The old website at <a href="https://www.apifier.com">www.apifier.com</a> was replaced with public static website '
                    + '<a href="/">www.apify.com</a> and the app running at <a href="https://my.apify.com">my.apify.com</a>',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'A new product called <a href="https://my.apify.com/actors">Actor</a> was '
                    + 'introduced. <b>Read more in our <a href="https://blog.apify.com/apifier-is-now-apify-45112f93e16f" target="_blank" rel="noopener">blog</a></b>',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Added actor support to scheduler.',
            },
            {
                category: CATEGORIES.ACTOR,
                content: 'Git and Zip file source type added to actor.',
            },
        ],
    },
    {
        date: 'August 2017',
        items: [
            {
                category: CATEGORIES.WEB,
                content: '<a href="https://my.apify.com/account">Account</a> section has been completely revamped and uses tabs  ',
            },
            {
                category: CATEGORIES.WEB,
                content: '<a href="https://my.apify.com/schedules">Schedules</a> section has been completely revamped and uses tabs  ',
            },
            {
                category: CATEGORIES.API,
                content: 'API endpoint to get crawlers results now accepts the <code>skipFailedPages</code> parameter.',
            },
            {
                category: CATEGORIES.API,
                content: 'API endpoint to get crawlers results now accepts the <code>hideUrl</code> parameter.',
            },
        ],
    },
    {
        date: 'July 2017',
        items: [
            {
                category: CATEGORIES.API,
                content: 'API endpoint providing results in XML format now allows to set XML tag names.  ',
            },
            {
                category: CATEGORIES.API,
                content: 'Added support for <b>JSONL</b> output format',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Created <b><a href="/request-solution">Crawler request form</a>'
                    + '</b> to help customers specify the crawlers they would like to have built  ',
            },
        ],
    },
    {
        date: 'June 2017',
        items: [
            {
                category: CATEGORIES.CRAWLER,
                content: 'Added <a href="/docs/crawler#finishWebhookData">finish webhook '
                    + 'data</a> feature that enables sending of additional info in webhook request '
                    + 'payload. '
                    + '(<a href="/docs/crawler#finishWebhookData">see docs</a>)',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Added a feature to delete user account',
            },
        ],
    },
    {
        date: 'May 2017',
        items: [
            {
                category: CATEGORIES.INTERNAL,
                content: 'Improvements in logging system',
            },
            {
                category: CATEGORIES.GENERAL,
                content: 'Officially launched <a href="https://blog.apify.com/new-in-apifier-zapier-integration-e3186a6836e1" '
                    + 'target="_blank" rel="noopener">Zapier integration</a>',
            },
            {
                category: CATEGORIES.CRAWLER,
                content: 'Added a new <code>context.actId</code> property that enables users to fetch '
                    + 'information about their crawler. (<a href="/docs/crawler#context-actId">see docs</a>)  ',
            },
            {
                category: CATEGORIES.INTERNAL,
                content: 'Consolidated logging in the web application, improvements in Admin interface  ',
            },
        ],
    },
    {
        date: 'April 2017',
        items: [
            {
                category: CATEGORIES.CRAWLER,
                content: 'Added <b>proxy groups crawler setting</b> to simplify usage of '
                    + 'proxy servers (<a href="/docs/crawler#proxyGroups">see docs</a>).  ',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Added <i>Schedule</i> button to the crawler details page to simplify scheduling of the crawlers  ',
            },
            {
                category: CATEGORIES.INTERNAL,
                content: 'Improvements in administration interface',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Performance optimizations in UI',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Added a tool to test the crawler on a single URL only (see <i>Run console</i> on the crawler details page)  ',
            },
            {
                category: CATEGORIES.INTERNAL,
                content: 'Improved reports in admin section',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Changed Twitter handle from @ApifierInfo to <a href="https://twitter.com/apifier" '
                    + 'target="_blank" rel="noopener">@apifier</a>.  ',
            },
            {
                category: CATEGORIES.CRAWLER,
                content: 'Bugfix - cookies set in the last page function were not persisted',
            },
            {
                category: CATEGORIES.INTERNAL,
                content: 'Deployed some upgrades in data storage infrastructure to improve performance and reduce costs  ',
            },
        ],
    },
    {
        date: 'March 2017',
        items: [
            {
                category: CATEGORIES.WEB,
                content: 'Added sorting to <a href="/library">Community crawlers</a>.',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Bugfixes, performance and cosmetic improvements.',
            },
            {
                category: CATEGORIES.INTERNAL,
                content: 'improvements in administration interface.',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Extended public user profile pages in <a href="/library"><b>Community '
                    + 'crawlers</b></a>.  ',
            },
            {
                category: CATEGORIES.API,
                content: 'Bugfix in exports of results in XML format.',
            },
            {
                category: CATEGORIES.CRAWLER,
                content: 'Added a new <code>context.actExecutionId</code> property that enables '
                    + 'users to stop crawler during its execution, fetch results etc. '
                    + '(<a href="/docs/crawler#context-actExecutionId">see docs</a>).',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Improvements in internal administration interface.',
            },
        ],
    },
    {
        date: 'February 2017',
        items: [
            {
                category: CATEGORIES.WEB,
                content: 'Launched an external <a href="https://status.apify.com/" '
                    + 'target="_blank" rel="noopener">Apifier status page</a> '
                    + 'page to keep our users informed about system status and potential outages.  ',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Numerous improvements on <a href="/library"><b>Community '
                    + 'crawlers</b></a> page, added user profile page, enabled anonymous sharing  ',
            },
            {
                category: CATEGORIES.API,
                content: 'Improved sorting of columns in CSV/HTML results table - values are now '
                    + 'sorted according to numerical indexes (e.g. "val/0", ..., "val/9", "val/10")  ',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Launched <a href="/library"><b>Apifier community page</b></a>',
            },
            {
                category: CATEGORIES.GENERAL,
                content: 'Invoices are now in the PDF format and are sent to customers by email  ',
            },
            {
                category: CATEGORIES.GENERAL,
                content: "We didn't launch anything today, just wishing you a happy Valentine's Day",
            },
            {
                category: CATEGORIES.WEB,
                content: 'New testimonials from <a href="https://www.epojisteni.cz/car-insurance/" target="_blank" rel="noopener">ePojisteni.cz</a> '
                    + 'and <a href="http://finbox.io/" target="_blank" rel="noopener">Finbox.io</a> '
                    + 'published '
                    + 'on our <a href="/">Customers</a> page. Thanks Dušan and Andy!',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Released a major upgrade of billing and invoicing infrastructure to support European value-added tax (VAT)  ',
            },
        ],
    },
    {
        date: 'January 2017',
        items: [
            {
                category: CATEGORIES.WEB,
                content: 'Added a new <b><a href="/help">Video tutorials</a></b> page',
            },
            {
                category: CATEGORIES.CRAWLER,
                content: 'Improved <b>normalization of URLs</b> which is used by the crawler to '
                    + 'determine whether a page has already been visited '
                    + '(see <a href="/docs/crawler#requestObject">Request.uniqueKey</a> property in '
                    + 'docs for more details)',
            },
            {
                category: CATEGORIES.INTERNAL,
                content: 'Changed CDN provider from CloudFlare to AWS CloudFront to improve performance of web and API  ',
            },
            {
                category: CATEGORIES.API,
                content: 'Bugfix in the start execution API endpoint - synchronous wait would sometimes time out after 60 seconds  ',
            },
            {
                category: CATEGORIES.INTERNAL,
                content: 'further improvements in administration interface',
            },
            {
                category: CATEGORIES.WEB,
                content: 'improved aggregation of usage statistics, now it refreshes automatically  ',
            },
            {
                category: CATEGORIES.CRAWLER,
                content: '<a href="/docs/crawler#requestObject">Request.proxy</a> is now available even inside of the page function  ',
            },
            {
                category: CATEGORIES.WEB,
                content: 'improved <a href="https://my.apify.com/account#/invoices">Invoices</a> page  ',
            },
            {
                category: CATEGORIES.INTERNAL,
                content: 'improvements in administration interface',
            },
            {
                category: CATEGORIES.WEB,
                content: 'displaying snapshot of the crawling queue in the Run console',
            },
        ],
    },
    {
        date: 'December 2016',
        items: [
            {
                category: CATEGORIES.API,
                content: 'all paginated API '
                    + 'endpoints now support <code>desc=1</code> query parameter to sort records in '
                    + 'descending order',
            },
            {
                category: CATEGORIES.API,
                content: 'added support for XML attributes in results',
            },
            {
                category: CATEGORIES.GENERAL,
                content: 'added support for <b>RSS</b> output format to enable creating RSS feeds for any website  ',
            },
            {
                category: CATEGORIES.GENERAL,
                content: 'launched a new <b><a href="https://forum.apify.com/" target="_blank" rel="noopener">discussion forum</a></b>',
            },
            {
                category: CATEGORIES.CRAWLER,
                content: 'custom proxy used by a particular request is now saved in <code>Request.proxy</code> '
                    + 'field (see <a href="/docs/crawler#customProxies">Custom proxies</a> in docs)  ',
            },
            {
                category: CATEGORIES.CRAWLER,
                content: 'performance improvements',
            },
            {
                category: CATEGORIES.API,
                content: 'enabled rate limiting',
            },
            {
                category: CATEGORIES.API,
                content: 'Major <a href="https://blog.apify.com/christmas-api-revamp-f16666a8e11b" target="_blank" rel="noopener">API upgrades</a>',
            },
            {
                category: CATEGORIES.API,
                content: 'added <b>new endpoints to update and delete crawlers</b>',
            },
            {
                category: CATEGORIES.API,
                content: 'support for <b>synchronous</b> execution of crawlers  ',
            },
            {
                category: CATEGORIES.API,
                content: 'all endpoints that return lists now support <b>pagination</b>',
            },
            {
                category: CATEGORIES.API,
                content: '<a href="/docs/api/v2">API Reference</a> was greatly improved',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Added new <i>Tag</i> and <i>Do not start crawler if previous still '
                    + 'running</i> settings to schedules',
            },
            {
                category: CATEGORIES.GENERAL,
                content: 'Added new <b><a href="/docs/crawler#cookies">Initial '
                    + 'cookies</a></b> setting to enable users to edit cookies used by their crawlers  ',
            },
        ],
    },
    {
        date: 'November 2016',
        items: [
            {
                category: CATEGORIES.WEB,
                content: 'Added a <b><a href="https://my.apify.com/account#/invoices">list of '
                    + 'invoices</a></b> to <a href="https://my.apify.com/account">Account</a> page',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Added a <b>new usage stats chart</b> to <a href="https://my.apify.com/account">Account</a> page',
            },
            {
                category: CATEGORIES.INTERNAL,
                content: 'Large improvements in the deployment system completed',
            },
            {
                category: CATEGORIES.GENERAL,
                content: 'Increased the length limit for Start URLs to 2000 characters',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Showing more relevant statistics in crawler progress bar',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Released a <b>new shiny <a href="/docs/api/v2">API reference</a></b>',
            },
            {
                category: CATEGORIES.INTERNAL,
                content: 'Performance and usability improvements in admin interface',
            },
            {
                category: CATEGORIES.INTERNAL,
                content: 'Migrated our main database to MongoDB 3.2, deployed new integration test suite, new metrics in admin interface  ',
            },
        ],
    },
    {
        date: 'October 2016',
        items: [
            {
                category: CATEGORIES.WEB,
                content: 'Showing current service limits on the <a href="https://my.apify.com/account">Account</a> page, various internal '
                    + 'improvements in user handling code',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Added new example crawlers to demonstrate how to use page\'s internal JavaScript variable and AJAX calls',
            },
            {
                category: CATEGORIES.APP,
                content: 'Released <b><a href="https://my.apify.com/schedules">Schedules</a></b> '
                    + 'that enable to automatically run crawlers at certain times.',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Switched to <a href="https://www.intercom.com/" target="_blank" rel="noopener">Intercom</a> to manage '
                    + 'communication with our users',
            },
        ],
    },
    {
        date: 'September 2016',
        items: [
            {
                category: CATEGORIES.WEB,
                content: 'Added functionality to test finish webhooks',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Security fix - added <code>rel="noopener"</code> to all external links '
                    + 'in order to avoid exploitation of the <code>window.opener</code>',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Displaying <i>Internal ID</i> field on crawler details page, and '
                    + '<i>User ID</i> and <i>API token</i> token on the '
                    + '<a href="https://my.apify.com/account">Account</a> page to simplify setup of '
                    + 'integrations',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Added a new <a href="/jobs">Jobs</a> page, because we\'re hiring!',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Deployed various performance optimizations and bugfixes',
            },
            {
                category: CATEGORIES.INTERNAL,
                content: 'Updated our Meteor application to use ES2015 modules',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Published a new testimonial from <a href="https://shopwings.com.au/" target="_blank" rel="noopener">Shopwings</a> '
                    + 'on '
                    + 'our <a href="/">Customers</a> page. Thanks Guillaume!',
            },
            {
                category: CATEGORIES.CRAWLER,
                content: '<code>queuePosition</code> can now also be overridden in <code>interceptRequest</code> '
                    + 'function '
                    + '(<a href="/docs/crawler#interceptRequest">see docs</a>)',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Performance improvements of results exports',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Added new example crawler to demonstrate a basic SEO analysis tool',
            },
            {
                category: CATEGORIES.INTERNAL,
                content: 'Upgraded Meteor platform from version 1.3 to 1.4',
            },
            {
                category: CATEGORIES.DOCS,
                content: 'Added API property name and type next to each crawler settings (<a href="/docs">see docs</a>)',
            },
            {
                category: CATEGORIES.CRAWLER,
                content: 'Added a new <code>context.stats</code> property to pass statistics from '
                    + 'the current crawler to user code '
                    + '(<a href="/docs/crawler#context-stats">see docs</a>). ',
            },
            {
                category: CATEGORIES.CRAWLER,
                content: 'Added a new signature for <code>context.enqueuePage()</code> function '
                    + 'that enables placing new pages '
                    + 'to beginning of the crawling queue and overriding <code>uniqueKey</code> and '
                    + '<code>label</code> fields '
                    + '(<a href="/docs/crawler#context-enqueuePage">see docs</a>).',
            },
            {
                category: CATEGORIES.CRAWLER,
                content: 'Enabled users to define custom User-Agent HTTP header, updated the default value to resemble latest Chrome on Windows.',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Implemented optimization that enables user to export even large result sets to CSV/HTML format.',
            },
            {
                category: CATEGORIES.WEB,
                content: 'Created this wonderful page to keep our users up-to-date with new features',
            },
        ],
    },
];
