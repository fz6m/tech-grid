// @ts-nocheck

// Refer: https://github.com/wappalyzer/wappalyzer/tree/master/src/technologies

export interface ITechnology {
  d?: string // description
  i?: string // icon
  n?: string // name
}

export type TechData = Record<string, ITechnology>

const handleData = (data: TechData) => {
  Object.entries(data).forEach(([key, value]) => {
    // add cdn prefix
    if (value.i) {
      value.i = `https://cdn.jsdelivr.net/gh/wappalyzer/wappalyzer/src/drivers/webextension/images/icons/${value.i}`
    }
  })
  return data
}

// count: 3644
const originData: Record<string, ITechnology> = {
  "1C-Bitrix": {
    "d": "1C-Bitrix is a system of web project management, universal software for the creation, support and successful development of corporate websites and online stores.",
    "w": "http://www.1c-bitrix.ru",
    "i": "1C-Bitrix.svg"
  },
  "2B Advice": {
    "d": "2B Advice provides a plug-in to manage GDPR cookie consent.",
    "w": "https://www.2b-advice.com/en/data-privacy-software/cookie-consent-plugin/",
    "i": "2badvice.png"
  },
  "30namaPlayer": {
    "d": "30namaPlayer is a modified version of Video.js to work with videos on HTML using javascript.",
    "w": "https://30nama.com/",
    "i": "30namaPlayer.png"
  },
  "33Across": {
    "d": "33Across is a technology company focused on solving the challenge of consumer attention for automated advertising.",
    "w": "https://www.33across.com",
    "i": "33Across.png"
  },
  "34SP.com": {
    "d": "34SP.com specialises in website hosting, discount domain names, low cost VPS servers and dedicated servers.",
    "w": "https://www.34sp.com",
    "i": "34SP.com.svg"
  },
  "4-Tell": {
    "d": "4-Tell is an ecommerce software company for retailers with AI-powered personalisation and recommendations products.",
    "w": "https://4-tell.com",
    "i": "4-Tell.png"
  },
  "51.LA": {
    "d": "51.LA is a Chinese based website visitor counter.",
    "w": "https://www.51.la",
    "i": "51.LA.png"
  },
  "5centsCDN": {
    "d": "5centsCDN is a content delivery networks service provider.",
    "w": "https://www.5centscdn.net",
    "i": "5centsCDN.svg"
  },
  "6sense": {
    "d": "6sense is a B2B predictive intelligence platform for marketing and sales.",
    "w": "https://6sense.com",
    "i": "6sense.svg"
  },
  "8base": {
    "d": "8base is a low-code development platform for building and running enterprise-grade digital products including SaaS solutions, marketplaces and other go-to-market applications.",
    "w": "https://8base.com",
    "i": "8base.svg"
  },
  "<model-viewer>": {
    "d": "<model-viewer> is an open-source web component developed by Google and maintained through GitHub. <model-viewer> aims at putting 3D content on the web easily with a few lines of HTML code. This was first introduced with Chrome 72 in July 2019 and enables users to view 3D in the browser and mobile devices.",
    "w": "https://modelviewer.dev",
    "i": "model-viewer.svg"
  },
  "@sulu/web": {
    "w": "https://github.com/sulu/web-js",
    "i": "Sulu.svg"
  },
  "_hyperscript ": {
    "d": "_​hyperscript is a scripting language for adding interactivity to the front-end.",
    "w": "https://hyperscript.org",
    "i": "_hyperscript.png"
  },
  "A-Frame": {
    "w": "https://aframe.io",
    "i": "A-Frame.svg"
  },
  "A8.net": {
    "d": " A8.net is an affiliate marketing network.",
    "w": "https://www.a8.net",
    "i": "A8.net.png"
  },
  "AB Tasty": {
    "d": "AB Tasty is a customer experience optimisation company. AB Tasty offers AI-driven experimentation, personalisation, and product optimisation platforms for user testing.",
    "w": "https://www.abtasty.com",
    "i": "AB Tasty.svg"
  },
  "ABOUT YOU Commerce Suite": {
    "d": "ABOUT YOU Commerce Suite is an enterprise ready infrastructure solution designed for ecommerce companies.",
    "w": "https://commercesuite.aboutyou.com",
    "i": "ABOUT YOU Commerce Suite.svg"
  },
  "ABP Framework": {
    "d": "ABP Framework is a complete infrastructure to create modern web applications by following the best practices and conventions of software development.",
    "w": "https://abp.io/",
    "i": "abp.svg"
  },
  "AD EBiS": {
    "d": "AD EBiS is an advertising and marketing platform that offers advertisement effectiveness measurement, access and user analysis.",
    "w": "http://www.ebis.ne.jp",
    "i": "ebis.png"
  },
  "ADAPT": {
    "d": "ADAPT is a subscription-based app that allows anyone to create video focused online store in minutes on their phone.",
    "w": "https://adapt.ws",
    "i": "ADAPT.svg"
  },
  "ADFOX": {
    "d": "ADFOX is an advertising management platform for media publishers.",
    "w": "https://adfox.yandex.ru",
    "i": "ADFOX.svg"
  },
  "AFThemes CoverNews": {
    "d": "AFThemes CoverNews is a clean and elegant free WordPress theme that is perfect for online blog and magazine.",
    "w": "https://afthemes.com/products/covernews",
    "i": "AFThemes.png"
  },
  "ALL-INKL": {
    "d": "ALL-INKL is a German-based web hosting provider that promises to offer high-performance services for fair prices.",
    "w": "https://all-inkl.com",
    "i": "ALL-INKL.png"
  },
  "AMP": {
    "d": "AMP, originally created by Google, is an open-source HTML framework developed by the AMP open-source Project. AMP is designed to help webpages load faster.",
    "w": "https://www.amp.dev",
    "i": "Accelerated-Mobile-Pages.svg"
  },
  "AMP for WordPress": {
    "d": "AMP for WordPress automatically adds Accelerated Mobile Pages (Google AMP Project) functionality to your WordPress site.",
    "w": "https://amp-wp.org",
    "i": "Accelerated-Mobile-Pages.svg"
  },
  "AOLserver": {
    "w": "http://aolserver.com",
    "i": "AOLserver.png"
  },
  "AOS": {
    "d": "JavaScript library to animate elements on your page as you scroll.",
    "w": "http://michalsnik.github.io/aos/",
    "i": "AOS.svg"
  },
  "APC": {
    "d": "APC offers door-to-door parcel and mail delivery.",
    "w": "https://www.apc-pli.com",
    "i": "APC.svg"
  },
  "ARI Network Services": {
    "d": "ARI Network Services provides website, software, and data solutions to help dealers, distributors, and OEMs improve their selling process.",
    "w": "https://arinet.com",
    "i": "ARI Network Services.png"
  },
  "ASP.NET Boilerplate": {
    "d": "ASP.NET Boilerplate is a general purpose application framework especially designed for new modern web applications. It uses already familiar tools and implements best practices around them to provide you a SOLID development experience.",
    "w": "https://www.aspnetboilerplate.com",
    "i": "aspnetboilerplate.png"
  },
  "AT Internet Analyzer": {
    "w": "http://atinternet.com/en",
    "i": "AT Internet.png"
  },
  "AT Internet XiTi": {
    "w": "http://atinternet.com/en",
    "i": "AT Internet.png"
  },
  "ATSHOP": {
    "d": "ATSHOP is an all-in-one ecommerce platform.",
    "w": "https://atshop.io",
    "i": "ATSHOP.png"
  },
  "AWIN": {
    "d": "AWIN is a global affiliate marketing network.",
    "w": "https://www.awin.com",
    "i": "AWIN.svg"
  },
  "AWS Certificate Manager": {
    "d": "AWS Certificate Manager is a service that lets you easily provision, manage, and deploy public and private Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificates for use with AWS services and your internal connected resources.",
    "w": "https://aws.amazon.com/certificate-manager/",
    "i": "AWS Certificate Manager.svg"
  },
  "AWS WAF Captcha": {
    "d": "AWS WAF Captcha helps block unwanted bot traffic by requiring users to successfully complete challenges before their web request are allowed to reach AWS WAF protected resources.",
    "w": "https://docs.aws.amazon.com/waf/latest/developerguide/waf-captcha.html",
    "i": "AWS WAF Captcha.svg"
  },
  "AWStats": {
    "w": "http://awstats.sourceforge.net",
    "i": "AWStats.png"
  },
  "Abicart": {
    "d": "Abicart is an ecommerce platform developed by the Swedish company Abicart AB.",
    "w": "https://abicart.com/",
    "i": "abicart.png"
  },
  "Absorb": {
    "d": "Absorb is a cloud-based learning management system.",
    "w": "https://www.absorblms.com",
    "i": "Absorb.svg"
  },
  "Accentuate Custom Fields": {
    "d": "Accentuate Custom Fields is the professional and de facto solution to easily extend your Shopify store with your own custom fields such multi-language text fields, images, checkboxes, dates, selection list and custom JSON objects.",
    "w": "https://www.accentuate.io",
    "i": "Accentuate Custom Fields.png"
  },
  "AccessTrade": {
    "d": "AccessTrade is an affiliate marketing platform based on the CPA model developed by Interspace Co.",
    "w": "https://accesstrade.global/",
    "i": "AccessTrade.png"
  },
  "AccessiBe": {
    "d": "AccessiBe is an accessibility overlay which claims to provide ADA and WCAG compliance. The system scans and analyzes a website, and applies adjustments which they claim make your website ADA and WCAG 2.1 compliant.",
    "w": "https://accessibe.com",
    "i": "AccessiBe.svg"
  },
  "Accessibility Toolbar Plugin": {
    "d": "Accessibility Toolbar Plugin is an accessibility component without dependencies (clean javascript), including a variety of tools.",
    "w": "https://webworks.ga/acc_toolbar",
    "i": "Accessibility Toolbar Plugin.png"
  },
  "Accessible360": {
    "d": "Accessible360 is a web accessibility company based in Edina, Minnesota.",
    "w": "https://accessible360.com",
    "i": "Accessible360.png"
  },
  "Accessibly": {
    "d": "Accessibly is an app which is designed to assist with meeting certain requirements of WCAG 2.1 using an overlay solution.",
    "w": "https://www.onthemapmarketing.com/accessibly/",
    "i": "Accessibly.svg"
  },
  "Accesso": {
    "d": "Accesso provides ticketing, ecommerce and Point-of-Sale (PoS) solutions.",
    "w": "https://accesso.com/",
    "i": "Accesso.svg"
  },
  "AccuWeather": {
    "d": "AccuWeather provides weather forecasts and warnings and additional weather products and services.",
    "w": "https://partners.accuweather.com",
    "i": "AccuWeather.svg"
  },
  "Ace": {
    "d": "Ace is an embeddable code editor written in JavaScript.",
    "w": "https://github.com/ajaxorg/ace",
    "i": "Ace.png"
  },
  "Ackee": {
    "d": "Ackee is a self-hosted, Node.js based analytics tool with a focus on privacy.",
    "w": "https://ackee.electerious.com",
    "i": "Ackee.png"
  },
  "Acoustic Experience Analytics": {
    "d": "Acoustic Experience Analytics (Tealeaf), formerly known as IBM Tealeaf Customer Experience on Cloud, is a SaaS-based analytics solution that delivers Tealeaf core capabilities in an managed cloud environment. Tealeaf captures and manages each visitor interaction on your website and mobile applications.",
    "w": "https://acoustic.com/tealeaf",
    "i": "Acoustic.svg"
  },
  "Acquia Campaign Factory": {
    "d": "Acquia Campaign Factory is centralized marketing management system powered by Mautic.",
    "w": "https://www.acquia.com/products/marketing-cloud/campaign-factory",
    "i": "acquia-campaign-factory.png"
  },
  "Acquia Cloud IDE": {
    "d": "Acquia Cloud IDE is a browser-based source code editor and a Drupal development stack running on the Acquia Cloud Platform.",
    "w": "https://www.acquia.com/products/drupal-cloud/cloud-ide",
    "i": "acquia-cloud-ide.png"
  },
  "Acquia Cloud Platform": {
    "d": "Acquia Cloud Platform is a Drupal-tuned application lifecycle management suite with an infrastructure to support Drupal deployment workflow processes.",
    "w": "https://www.acquia.com/products/drupal-cloud/cloud-platform",
    "i": "acquia-cloud.png"
  },
  "Acquia Cloud Platform CDN": {
    "w": "https://docs.acquia.com/cloud-platform/platformcdn/",
    "i": "acquia-cloud-platform.svg"
  },
  "Acquia Cloud Site Factory": {
    "d": "Acquia Site Factory is a multisite platform for Drupal.",
    "w": "https://www.acquia.com/products/drupal-cloud/site-factory",
    "i": "acquia-site-factory.png"
  },
  "Acquia Content Hub": {
    "d": "Acquia Content Hub is a cloud-based, centralized content distribution and syndication service.",
    "w": "https://www.acquia.com/products/drupal-cloud/content-hub",
    "i": "acquia-content-hub.png"
  },
  "Acquia Customer Data Platform": {
    "d": "Acquia Customer Data Platform (formerly AgilOne) is a customer data platform for Drupal.",
    "w": "https://www.acquia.com/products/marketing-cloud/customer-data-platform",
    "i": "acquia-cdp.png"
  },
  "Acquia Personalization": {
    "d": "Acquia Personalization (formerly Acquia Lift) lets you track customers' behavior throughout your website.",
    "w": "https://www.acquia.com/products/marketing-cloud/personalization",
    "i": "acquia-personalization.png"
  },
  "Acquia Site Studio": {
    "d": "Site Studio (formerly Cohesion) is a low-code, Drupal add-on page builder.",
    "w": "https://www.acquia.com/products/drupal-cloud/site-studio",
    "i": "acquia-site-studio.png"
  },
  "Acquire Cobrowse": {
    "d": "Acquire Cobrowse is a safe and secure method of interacting with a customer's browser without downloading any additional software.",
    "w": "https://acquire.io/co-browsing",
    "i": "Acquire.svg"
  },
  "Acquire Live Chat": {
    "d": "Acquire is a multi-channel customer support platform designed to provide real-time customer support to customers.",
    "w": "https://acquire.io",
    "i": "Acquire.svg"
  },
  "Act-On": {
    "d": "Act-On is a cloud-based SaaS product for marketing automation.",
    "w": "http://act-on.com",
    "i": "Act-On.svg"
  },
  "Actito": {
    "d": "Actito is an agile SaaS marketing automation platform.",
    "w": "https://www.actito.com",
    "i": "Actito.png"
  },
  "ActiveCampaign": {
    "d": "ActiveCampaign is email and marketing automation software.",
    "w": "https://www.activecampaign.com",
    "i": "ActiveCampaign.svg"
  },
  "Acuity Scheduling": {
    "d": "Acuity Scheduling is a cloud-based appointment scheduling software solution.",
    "w": "https://acuityscheduling.com",
    "i": "Acuity Scheduling.png"
  },
  "AcuityAds": {
    "d": "AcuityAds offers automatic solutions to marketers willing to connect through clients across mobile, social, and online display advertising campaigns.",
    "w": "https://www.acuityads.com",
    "i": "AcuityAds.svg"
  },
  "Ad Lightning": {
    "d": "Ad Lightning is an programmatic ads monitoring and audit service.",
    "w": "https://www.adlightning.com",
    "i": "Ad Lightning.svg"
  },
  "AdBridg": {
    "d": "AdBridg is a bidding solutions provider for publishers looking to maximize their programmatic revenues.",
    "w": "https://www.adbridg.com",
    "i": "AdBridg.png"
  },
  "AdInfinity": {
    "w": "http://adinfinity.com.au",
    "i": "AdInfinity.png"
  },
  "AdOcean": {
    "w": "https://adocean-global.com",
    "i": "AdOcean.png"
  },
  "AdOpt": {
    "d": "AdOpt is a consent tool that prioritises privacy and usability towards the LGPD.",
    "w": "https://goadopt.io",
    "i": "AdOpt.svg"
  },
  "AdRecover": {
    "d": "AdRecover is a tool that helps online publishers monetise their Adblock inventory.",
    "w": "https://www.adrecover.com",
    "i": "adrecover.png"
  },
  "AdRiver": {
    "d": "AdRiver is a company which provide internet advertising management and audit software.",
    "w": "http://adriver.ru",
    "i": "AdRiver.png"
  },
  "AdRoll": {
    "d": "AdRoll is a digital marketing technology platform that specializes in retargeting.",
    "w": "http://adroll.com",
    "i": "AdRoll.svg"
  },
  "AdRoll CMP System": {
    "d": "AdRoll CMP System is a consent management solution.",
    "w": "https://www.adroll.com/features/consent-management",
    "i": "AdRoll.svg"
  },
  "AdScale": {
    "d": "AdScale is a cloud-based, AI-powered performance optimisation platform which utilises machine learning to automate and optimise AdWords campaigns across Google Search, Google Shopping, Google Display, and YouTube.",
    "w": "https://www.adscale.com",
    "i": "AdScale.svg"
  },
  "AdThrive": {
    "d": "AdThrive is an online advertising network aka ad provider for bloggers for blog monetisation.",
    "w": "https://www.adthrive.com",
    "i": "AdThrive.png"
  },
  "Ada": {
    "d": "Ada is an automated customer experience company that provides chat bots used in customer support.",
    "w": "https://www.ada.cx",
    "i": "Ada.svg"
  },
  "AdaSiteCompliance": {
    "d": "AdaSiteCompliance is a web accessibility solution, making websites compliant and accessible to WCAG 2.1 and section 508 compliance standards.",
    "w": "https://adasitecompliance.com",
    "i": "AdaSiteCompliance.png"
  },
  "Adabra": {
    "d": "Adabra is a SaaS omnichannel marketing automation platform to help boost sales. Adabra allows you to manage user segmentation, create workflow and campaigns through email, social, SMS and more.",
    "w": "https://www.adabra.com",
    "i": "Adabra.svg"
  },
  "Adally": {
    "w": "https://adally.com/",
    "i": "Adally.png"
  },
  "Adalyser": {
    "d": "Adalyser is an online platform offering the tools needed to get up and running with TV advertising.",
    "w": "https://adalyser.com/",
    "i": "Adalyser.svg"
  },
  "Adcash": {
    "w": "http://adcash.com",
    "i": "Adcash.svg"
  },
  "AddEvent": {
    "d": "AddEvent is used to Add to Calendar and event tools for websites and newsletters.",
    "w": "https://www.addevent.com",
    "i": "addevent.png"
  },
  "AddShoppers": {
    "d": "AddShoppers is the social media marketing command center for small-medium online retailers.",
    "w": "http://www.addshoppers.com",
    "i": "AddShoppers.png"
  },
  "AddThis": {
    "d": "AddThis is a social bookmarking service that can be integrated into a website with the use of a web widget.",
    "w": "http://www.addthis.com",
    "i": "AddThis.svg"
  },
  "AddToAny": {
    "d": "AddToAny is a universal sharing platform that can be integrated into a website by use of a web widget or plugin.",
    "w": "http://www.addtoany.com",
    "i": "AddToAny.svg"
  },
  "AddToAny Share Buttons": {
    "d": "AddToAny Share Buttons plugin for WordPress increases traffic and engagement by helping people share your posts and pages to any service.",
    "w": "https://github.com/projectestac/wordpress-add-to-any",
    "i": "AddToAny.svg"
  },
  "Addi": {
    "d": "Addi is a service that allows users to make purchases and pay for them in installments over time",
    "w": "https://co.addi.com/",
    "i": "addi.png"
  },
  "Addsearch": {
    "d": "Addsearch is a site search solution for small and large websites.",
    "w": "https://www.addsearch.com/",
    "i": "Addsearch.svg"
  },
  "Adform": {
    "d": "Adform is an all-in-one platform for digital advertising.",
    "w": "https://site.adform.com",
    "i": "Adform.svg"
  },
  "Adjust": {
    "d": "Adjust is the mobile marketing analytics platform.",
    "w": "https://www.adjust.com",
    "i": "Adjust.svg"
  },
  "Adloox": {
    "d": "Adloox is a European-born buy-side ad verification and insights company.",
    "w": "https://www.adloox.com",
    "i": "Adloox.png"
  },
  "Adminer": {
    "w": "http://www.adminer.org",
    "i": "adminer.png"
  },
  "Admiral": {
    "d": "Admiral is a Visitor Relationship Management (VRM) platform.",
    "w": "https://www.getadmiral.com",
    "i": "Admiral.svg"
  },
  "Admitad": {
    "d": "Admitad is an affiliate network that acts as an intermediary between advertisers and publishers.",
    "w": "https://www.admitad.com",
    "i": "Admitad.svg"
  },
  "Admixer": {
    "d": "Admixer is an independent adtech company developing an ecosystem of full-stack programmatic solutions.",
    "w": "https://admixer.com",
    "i": "Admixer.svg"
  },
  "Admo.tv": {
    "d": "Admo.tv is a company developing a TV and radio analytics platform.",
    "w": "https://www.admo.tv",
    "i": "Admo.tv.svg"
  },
  "Adnegah": {
    "d": "Adnegah is a digital marketing and internet advertising agency.",
    "w": "https://adnegah.net",
    "i": "Adnegah.png"
  },
  "Adobe Analytics": {
    "d": "Adobe Analytics is a web analytics, marketing and cross-channel analytics application.",
    "w": "https://www.adobe.com/analytics/adobe-analytics.html",
    "i": "Adobe Analytics.svg"
  },
  "Adobe Audience Manager": {
    "d": "Adobe Audience Manager is a versatile audience data management platform.",
    "w": "https://business.adobe.com/products/audience-manager/adobe-audience-manager.html",
    "i": "Adobe.svg"
  },
  "Adobe Client Data Layer": {
    "d": "Adobe Client Data Layer is a framework of JavaScript objects on your site that contains all variable values used in your implementation.",
    "w": "https://github.com/adobe/adobe-client-data-layer",
    "i": "Adobe.svg"
  },
  "Adobe ColdFusion": {
    "w": "http://adobe.com/products/coldfusion-family.html",
    "i": "Adobe ColdFusion.svg"
  },
  "Adobe DTM": {
    "d": "Dynamic Tag Management (DTM) is a tag management solution for Adobe Experience Cloud applications and others.",
    "w": "https://marketing.adobe.com/resources/help/en_US/dtm/c_overview.html",
    "i": "adobedtm.png"
  },
  "Adobe Dynamic Media Classic": {
    "d": "Adobe Dynamic Media Classic is a platform that enables customers to manage, enhance, publish, and deliver dynamic rich media content and personal experiences to consumers across all channels and devices, including web, print material, email campaigns, desktops, social, and mobile.",
    "w": "https://business.adobe.com/uk/products/experience-manager/scene7-login.html",
    "i": "Adobe Experience Platform.svg"
  },
  "Adobe Experience Manager": {
    "d": "Adobe Experience Manager (AEM) is a content management solution for building websites, mobile apps and forms.",
    "w": "https://www.adobe.com/marketing/experience-manager.html",
    "i": "Adobe Experience Platform.svg"
  },
  "Adobe Experience Platform Identity Service": {
    "d": "Adobe Experience Platform Identity Service creates identity graphs that hold customer profiles and the known identifiers that belong to individual consumers.",
    "w": "https://docs.adobe.com/content/help/en/id-service/using/home.html",
    "i": "Adobe.svg"
  },
  "Adobe Experience Platform Launch": {
    "d": "Adobe Experience Cloud Launch is an extendable tag management solution for Adobe Experience Cloud, Adobe Experience Platform, and other applications.",
    "w": "https://docs.adobelaunch.com/getting-started",
    "i": "Adobe Experience Platform.svg"
  },
  "Adobe Flash": {
    "d": "Adobe Flash is a multimedia software platform used for production of animations, rich web applications and embedded web browser video players.",
    "w": "https://www.adobe.com/products/flashplayer",
    "i": "Adobe Flash.svg"
  },
  "Adobe GoLive": {
    "d": "Adobe GoLive is a WYSIWYG HTML editor and web site management application.",
    "w": "http://www.adobe.com/products/golive",
    "i": "Adobe GoLive.png"
  },
  "Adobe Portfolio": {
    "d": "Adobe Portfolio is an Adobe platform that allows you to create a web page where you can show your projects, creations, and the services you offer.",
    "w": "https://portfolio.adobe.com",
    "i": "Adobe Portfolio.svg"
  },
  "Adobe RoboHelp": {
    "d": "Adobe RoboHelp is a Help Authoring Tool (HAT) that allows you to create help systems, e-learning content and knowledge bases.",
    "w": "http://adobe.com/products/robohelp.html",
    "i": "Adobe RoboHelp.svg"
  },
  "Adobe Target": {
    "d": "Adobe Target is an A/B testing, multi-variate testing, personalisation, and optimisation application",
    "w": "https://www.adobe.com/marketing/target.html",
    "i": "Adobe.svg"
  },
  "AdonisJS": {
    "w": "https://adonisjs.com",
    "i": "AdonisJS.png"
  },
  "Advally": {
    "d": "Advally is an advertising platform for publishers.",
    "w": "https://www.advally.com",
    "i": "Advally.png"
  },
  "Advanced Custom Fields": {
    "d": "Advanced Custom Fields is a WordPress plugin which allows you to add extra content fields to your WordPress edit screens.",
    "w": "https://www.advancedcustomfields.com",
    "i": "Advanced Custom Fields.png"
  },
  "Advert Stream": {
    "w": "http://www.advertstream.com",
    "i": "Advert Stream.png"
  },
  "Adverticum": {
    "d": "Adverticum is the developer and operator of Hungary's market leading online ad serving solution, the Adverticum AdServer.",
    "w": "http://adverticum.net",
    "i": "Adverticum.svg"
  },
  "Adyen": {
    "d": "Adyen allows businesses to accept ecommerce, mobile, and point-of-sale payments.",
    "w": "https://www.adyen.com",
    "i": "Adyen.svg"
  },
  "Aegea": {
    "w": "http://blogengine.ru",
    "i": "Aegea.png"
  },
  "Aero Commerce": {
    "d": "Aero Commerce is a performance-based platform designed with the evolving needs of retailers in mind.",
    "w": "https://www.aerocommerce.com",
    "i": "Aero Commerce.svg"
  },
  "Affilae": {
    "d": "Affilae is an affiliate marketing platform that enables brands to connect, collaborate with influencers and affiliates.",
    "w": "https://affilae.com",
    "i": "Affilae.png"
  },
  "Affiliate B": {
    "d": "Affiliate B is an advertising system that allows site operators (HP, blogs, e-mail newsletters, etc.) to place advertiser advertisements on their own sites.",
    "w": "https://affiliate-b.com",
    "i": "Affiliate B.svg"
  },
  "Affiliate Future": {
    "d": "Affiliate Future is a provider of advertisers with marketing solution through its affiliate network and tools.",
    "w": "http://affiliatefuture.com",
    "i": "Affiliate Future.png"
  },
  "Affiliatly": {
    "d": "Affiliatly is an affiliate marketing software for ecommerce store owners.",
    "w": "https://www.affiliatly.com",
    "i": "Affiliatly.png"
  },
  "Affilo": {
    "d": "Affilo is an all-in-one solution for referrals and affiliate marketing.",
    "w": "https://affilo.io",
    "i": "Affilo.png"
  },
  "Affirm": {
    "d": "Affirm is a loan company that allows users to buy goods or services offered by online merchants and pay off those purchases in fixed monthly payments.",
    "w": "https://www.affirm.com",
    "i": "Affirm.svg"
  },
  "Afosto": {
    "w": "http://afosto.com",
    "i": "Afosto.svg"
  },
  "AfterBuy": {
    "d": "AfterBuy is a software company that specialises in ecommerce software for small to enterprise level businesses.",
    "w": "http://www.afterbuy.de",
    "i": "AfterBuy.png"
  },
  "AfterShip": {
    "d": "AfterShip provides automated shipment tracking as a service.",
    "w": "https://www.aftership.com",
    "i": "AfterShip.svg"
  },
  "AfterShip Returns Center": {
    "d": "AfterShip Returns Center is an interactive self-service return solution.",
    "w": "https://www.aftership.com/returns",
    "i": "AfterShip Returns Center.svg"
  },
  "Afterpay": {
    "d": "Afterpay is a 'buy now, pay later' platform that makes it possible to pay off purchased goods in fortnightly instalments.",
    "w": "https://www.afterpay.com/",
    "i": "afterpay.png"
  },
  "Ahoy": {
    "w": "https://github.com/ankane/ahoy"
  },
  "AiSpeed": {
    "d": "AiSpeed is a shopify app focused on improving site speed.",
    "w": "https://apps.shopify.com/aispeed",
    "i": "AiSpeed.png"
  },
  "Aimtell": {
    "d": "Aimtell is a cloud-hosted marketing platform that allows digital marketers and businesses to deliver web-based push notifications.",
    "w": "https://aimtell.com",
    "i": "Aimtell.png"
  },
  "Air360": {
    "d": "Air360 is a technology company that specialises in performance-enhancing, mobile and ecommerce experience analytics.",
    "w": "https://www.air360.io",
    "i": "Air360.png"
  },
  "AirRobe": {
    "d": "AirRobe partners with brands and retailers to power the circular fashion economy.",
    "w": "https://airrobe.com",
    "i": "AirRobe.png"
  },
  "Aircall": {
    "d": "Aircall is a cloud-based phone system for customer support and sales teams.",
    "w": "http://aircall.io",
    "i": "aircall.png"
  },
  "Airee": {
    "w": "http://xn--80aqc2a.xn--p1ai",
    "i": "Airee.png"
  },
  "Airform": {
    "d": "Airform is a functional HTML forms for front-end developers.",
    "w": "https://airform.io",
    "i": "Airform.svg"
  },
  "Airship": {
    "d": "Airship is an American company that provides marketing and branding services. Airship allows companies to generate custom messages to consumers via push notifications, SMS messaging, and similar, and provides customer analytics services.",
    "w": "https://www.airship.com",
    "i": "Airship.svg"
  },
  "Airtable": {
    "d": "Airtable is a low-code platform for building collaborative apps.",
    "w": "https://www.airtable.com",
    "i": "Airtable.svg"
  },
  "Akamai": {
    "d": "Akamai is global content delivery network (CDN) services provider for media and software delivery, and cloud security solutions.",
    "w": "http://akamai.com",
    "i": "Akamai.svg"
  },
  "Akamai Bot Manager": {
    "d": "Akamai Bot Manager detect bots using device fingerprinting bot signatures.",
    "w": "https://www.akamai.com/us/en/products/security/bot-manager.jsp",
    "i": "Akamai.svg"
  },
  "Akamai Web Application Protector": {
    "d": "Akamai Web Application Protector is designed for companies looking for a more automated approach to web application firewall (WAF) and distributed denial-of-service (DDoS) security.",
    "w": "https://www.akamai.com/us/en/products/security/web-application-protector-enterprise-waf-firewall-ddos-protection.jsp",
    "i": "Akamai.svg"
  },
  "Akamai mPulse": {
    "d": "Akamai mPulse is a real user monitoring (RUM) solution that enables companies to monitor, find, and fix website and application performance issues.",
    "w": "https://developer.akamai.com/akamai-mpulse-real-user-monitoring-solution",
    "i": "Akamai.svg"
  },
  "Akaunting": {
    "d": "Akaunting is a free and online accounting software.",
    "w": "https://akaunting.com",
    "i": "akaunting.svg"
  },
  "Akinon": {
    "d": "Akinon is a cloud-based headless commerce platform with an integrated application suite including omnichannel and marketplace capabilities, mobile and in-store solutions, and an OMS.",
    "w": "https://www.akinon.com/",
    "i": "akinon.png"
  },
  "Akismet": {
    "d": "Akismet is a service that filters spam from comments, trackbacks, and contact form messages.",
    "w": "https://akismet.com",
    "i": "Akismet.png"
  },
  "Akka HTTP": {
    "w": "http://akka.io",
    "i": "akka-http.png"
  },
  "Aklamio": {
    "d": "Aklamio is a solution for enterprise level referral marketing and customer incentivisation.",
    "w": "https://www.aklamio.com",
    "i": "Aklamio.svg"
  },
  "Aksara CMS": {
    "d": "Aksara CMS is a CodeIgniter based CRUD toolkit.",
    "w": "https://aksaracms.com",
    "i": "Aksara CMS.svg"
  },
  "Albacross": {
    "d": "Albacross is a lead generation and account intelligence platform. It helps marketing and sales teams identify their ideal customers visiting their website and gives them the insights they need to generate more qualified leads, make prospecting more efficient and close more deals.",
    "w": "https://albacross.com",
    "i": "Albacross.svg"
  },
  "AlertifyJS": {
    "d": "AlertifyJS is a javascript framework for developing browser dialogs and notifications.",
    "w": "https://alertifyjs.com",
    "i": "AlertifyJS.png"
  },
  "Alexa Certified Site Metrics": {
    "d": "Alexa Certified Site Metrics is an analytics service wich monitors and analyses web traffic and can be used to keep track of user behavior.",
    "w": "https://support.alexa.com/hc/en-us/sections/200063374",
    "i": "Alexa.svg"
  },
  "Algolia": {
    "d": "Algolia offers a hosted web search product delivering real-time results.",
    "w": "http://www.algolia.com",
    "i": "Algolia.svg"
  },
  "Ali Reviews": {
    "d": "Ali reviews is a shopify app to collect reviews from customers.",
    "w": "https://apps.shopify.com/ali-reviews",
    "i": "Alireviews.svg"
  },
  "All in One SEO Pack": {
    "d": "All in One SEO plugin optimizes WordPress website and its content for search engines.",
    "w": "https://aioseo.com",
    "i": "AIOSEO.svg"
  },
  "Alli": {
    "d": "Alli is artificial intelligence for search engine optimisation.",
    "w": "https://www.alliai.com",
    "i": "Alli.png"
  },
  "AlloyUI": {
    "w": "http://www.alloyui.com",
    "i": "AlloyUI.png"
  },
  "Allyable": {
    "d": "Allyable is an automated web accessibility solution with an AI engine.",
    "w": "https://allyable.com",
    "i": "Allyable.png"
  },
  "AlmaLinux": {
    "d": "AlmaLinux is an open-source, community-driven Linux operating system that fills the gap left by the discontinuation of the CentOS Linux stable release.",
    "w": "https://almalinux.org",
    "i": "AlmaLinux.svg"
  },
  "Alpine Linux": {
    "d": "Alpine Linux is a security-oriented, lightweight Linux distribution based on musl libc and busybox.",
    "w": "https://www.alpinelinux.org",
    "i": "Alpine Linux.svg"
  },
  "Alpine.js": {
    "w": "https://github.com/alpinejs/alpine",
    "i": "Alpine.js.png"
  },
  "AlternC": {
    "d": "AlternC is a set of software management on Linux shared hosting.",
    "w": "https://alternc.com",
    "i": "AlternC.png"
  },
  "AlumnIQ": {
    "d": "AlumnIQ is a set of services to manage events, giving, email, volunteers, class agents, and more, all designed to work with your database of record.",
    "w": "https://www.alumniq.com/platform/",
    "i": "AlumnIQ.svg"
  },
  "Amaya": {
    "d": "Amaya is an open-source web browser editor to create and update documents on the web.",
    "w": "http://www.w3.org/Amaya",
    "i": "Amaya.png"
  },
  "Amazon ALB": {
    "d": "Amazon Application Load Balancer (ALB) distributes incoming application traffic to increase availability and support content-based routing.",
    "w": "https://aws.amazon.com/elasticloadbalancing/",
    "i": "Amazon ELB.svg"
  },
  "Amazon Advertising": {
    "d": "Amazon Advertising (formerly AMS or Amazon Marketing Services) is a service that works in a similar way to pay-per-click ads on Google.",
    "w": "https://advertising.amazon.com",
    "i": "Amazon.svg"
  },
  "Amazon Associates": {
    "d": "Amazon Associates is an affiliate marketing program that allows website owners and bloggers to create links and earn referral fees when customers click through and buy products from Amazon.",
    "w": "https://affiliate-program.amazon.com",
    "i": "Amazon.svg"
  },
  "Amazon Aurora": {
    "d": "Amazon Aurora is a relational database service developed and offered by Amazon Web Services.",
    "w": "https://aws.amazon.com/rds/aurora",
    "i": "Amazon Aurora.svg"
  },
  "Amazon CloudWatch RUM": {
    "d": "Amazon CloudWatch RUM is a real-user monitoring capability that helps you identify and debug issues in the client-side on web applications and enhance end user's digital experience.",
    "w": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM.html",
    "i": "Amazon CloudWatch.svg"
  },
  "Amazon Cloudfront": {
    "d": "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds.",
    "w": "http://aws.amazon.com/cloudfront/",
    "i": "Amazon Cloudfront.svg"
  },
  "Amazon Cognito": {
    "d": "Amazon Cognito lets you add user sign-up, sign-in, and access control to your web and mobile apps. Amazon Cognito supports sign-in with social identity providers, such as Apple, Facebook, Google, and Amazon, and enterprise identity providers via SAML 2.0 and OpenID Connect.",
    "w": "https://aws.amazon.com/cognito/",
    "i": "Amazon Cognito.svg"
  },
  "Amazon EC2": {
    "d": "Amazon Elastic Compute Cloud is a part of Amazon.com's cloud-computing platform, Amazon Web Services, that allows users to rent virtual computers on which to run their own computer applications.",
    "w": "http://aws.amazon.com/ec2/",
    "i": "Amazon EC2.svg"
  },
  "Amazon ECS": {
    "w": "https://aws.amazon.com/ecs/",
    "i": "Amazon ECS.svg"
  },
  "Amazon EFS": {
    "d": "Amazon Elastic File System is a cloud storage service provided by Amazon Web Services.",
    "w": "https://aws.amazon.com/efs/",
    "i": "Amazon EFS.svg"
  },
  "Amazon ELB": {
    "w": "https://aws.amazon.com/elasticloadbalancing/",
    "i": "Amazon ELB.svg"
  },
  "Amazon Pay": {
    "d": "Amazon Pay is an online payments processing service that is owned by Amazon. It lets you use the payment methods associated with your Amazon account to make payments for goods and services.",
    "w": "https://pay.amazon.com",
    "i": "Amazon Pay.svg"
  },
  "Amazon S3": {
    "d": "Amazon S3 or Amazon Simple Storage Service is a service offered by Amazon Web Services (AWS) that provides object storage through a web service interface.",
    "w": "http://aws.amazon.com/s3/",
    "i": "Amazon S3.svg"
  },
  "Amazon SES": {
    "d": "Amazon Simple Email Service (SES) is an email service that enables developers to send mail from within any application.",
    "w": "https://aws.amazon.com/ses/",
    "i": "Amazon SES.svg"
  },
  "Amazon Web Services": {
    "d": "Amazon Web Services (AWS) is a comprehensive cloud services platform offering compute power, database storage, content delivery and other functionality.",
    "w": "https://aws.amazon.com/",
    "i": "Amazon Web Services.svg"
  },
  "Amazon Webstore": {
    "d": "Amazon Webstore is an all-in-one hosted ecommerce website solution.",
    "w": "https://aws.amazon.com/marketplace/pp/Amazon-Web-Services-Amazon-Webstore/B007NLVI2S",
    "i": "Amazon Webstore.svg"
  },
  "Ambassador": {
    "d": "Ambassador is a marketer-friendly software that simplifies referral marketing and helps automating the enrolment, tracking, rewarding and management process.",
    "w": "https://www.getambassador.com",
    "i": "Ambassador.png"
  },
  "Amber": {
    "w": "https://amberframework.org",
    "i": "amber.png"
  },
  "American Express": {
    "d": "American Express, also known as Amex, facilitates electronic funds transfers throughout the world, most commonly through branded credit cards, debit cards and prepaid cards.",
    "w": "https://www.americanexpress.com",
    "i": "Amex.svg"
  },
  "Ametys": {
    "w": "http://ametys.org",
    "i": "Ametys.png"
  },
  "Amex Express Checkout": {
    "d": "Amex Express Checkout is a service that simplifies the checkout experience by auto-filling necessary cardholder payment data into merchant checkout fields.",
    "w": "https://www.americanexpress.com/us/express-checkout/",
    "i": "amex.png"
  },
  "Amiro.CMS": {
    "d": "Amiro.CMS is a commercial content management system developed and distributed by the Russian company Amiro. Written in PHP and uses MySQL as a database.",
    "w": "https://www.amiro.ru",
    "i": "Amiro.CMS.png"
  },
  "Amobee": {
    "d": "Amobee is a cloud-based advertising and data management platform.",
    "w": "https://www.amobee.com",
    "i": "Amobee.png"
  },
  "Amplience": {
    "d": "Amplience is an API-first, headless content management platform for enterprise retail.",
    "w": "https://amplience.com",
    "i": "Amplience.png"
  },
  "Amplitude": {
    "d": "Amplitude is a web and mobile analytics solution with cross-platform user journey tracking, user behavior analysis and segmentation capabilities.",
    "w": "https://amplitude.com",
    "i": "Amplitude.svg"
  },
  "Analysys Ark": {
    "w": "https://ark.analysys.cn",
    "i": "Analysys Ark.svg"
  },
  "AndersNoren Baskerville": {
    "d": "AndersNoren Baskerville is a responsive and retina-ready masonry WordPress theme for hoarders.",
    "w": "https://andersnoren.se/teman/baskerville-wordpress-theme",
    "i": "AndersNoren.svg"
  },
  "AndersNoren Fukasawa": {
    "d": "AndersNoren Fukasawa is a minimal masonry style blog WordPress theme for photographers and collectors.",
    "w": "https://andersnoren.se/teman/fukasawa-wordpress-theme",
    "i": "AndersNoren.svg"
  },
  "AndersNoren Hemingway": {
    "d": "AndersNoren Hemingway is a clean and beautiful two-column WordPress theme for bloggers.",
    "w": "https://andersnoren.se/teman/hemingway-wordpress-theme",
    "i": "AndersNoren.svg"
  },
  "AndersNoren Hitchcock": {
    "d": "AndersNoren Hitchcock is a portfolio WordPress theme for designers, photographers and other creatives.",
    "w": "https://andersnoren.se/teman/hitchcock-wordpress-theme",
    "i": "AndersNoren.svg"
  },
  "AndersNoren Lovecraft": {
    "d": "AndersNoren Lovecraft is a beautiful two-column WordPress theme for bloggers.",
    "w": "https://andersnoren.se/teman/lovecraft-wordpress-theme",
    "i": "AndersNoren.svg"
  },
  "Anetwork": {
    "w": "https://www.anetwork.ir",
    "i": "Anetwork.png"
  },
  "Angie": {
    "d": "Angie is a drop-in replacement for the Nginx web server aiming to extend the functionality of the original version.",
    "w": "https://angie.software/en/",
    "i": "default.svg"
  },
  "Angular": {
    "d": "Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google.",
    "w": "https://angular.io",
    "i": "Angular.svg"
  },
  "Angular Material": {
    "d": "Angular Material is a UI component library for Angular JS developers. Angular Material components assist in constructing attractive, consistent, and functional web pages and web applications.",
    "w": "https://material.angularjs.org",
    "i": "AngularJS.svg"
  },
  "AngularDart": {
    "w": "https://webdev.dartlang.org/angular/",
    "i": "AngularDart.svg"
  },
  "AngularJS": {
    "d": "AngularJS is a JavaScript-based open-source web application framework led by the Angular Team at Google.",
    "w": "https://angularjs.org",
    "i": "AngularJS.svg"
  },
  "Animate.css": {
    "d": "Animate.css is a ready-to-use library collection of CSS3 animation effects.",
    "w": "https://animate.style",
    "i": "Animate.css.svg"
  },
  "AnswerDash": {
    "d": "AnswerDash is a question and answer platform that serves business customers thereby reducing support costs and revealing customer needs.",
    "w": "https://www.answerdash.com",
    "i": "AnswerDash.png"
  },
  "Ant Design": {
    "d": "Ant Design is a UI library that can be used with data flow solutions and application frameworks in any React ecosystem.",
    "w": "https://ant.design",
    "i": "Ant Design.svg"
  },
  "AntV G2": {
    "d": "AntV G2 is a highly interactive data-driven visualisation grammar for statistical charts.",
    "w": "https://g2plot.antv.vision",
    "i": "AntV.svg"
  },
  "AntV G6": {
    "d": "AntV G6 is a graph visualisation framework in JavaScript.",
    "w": "https://g6.antv.vision",
    "i": "AntV.svg"
  },
  "Antee IPO": {
    "d": "Antee is a Czech company that will make a custom-made website for you, then you manage it in CMS IPO.",
    "w": "https://ipo.antee.cz",
    "i": "Antee.png"
  },
  "Anthology Encompass": {
    "d": "Anthology Encompass is a constituent engagement management provider or educational institutions that provides modules to help you manage events, websites and content, data, and more.",
    "w": "https://www.anthology.com/products/lifecycle-engagement/alumni-and-advancement/anthology-encompass",
    "i": "Anthology.svg"
  },
  "AntiBot.Cloud": {
    "d": "AntiBot.Cloud is a PHP script and cloud service to protect websites from bots and junk traffic.",
    "w": "https://antibot.cloud"
  },
  "Antsomi CDP 365": {
    "d": "Antsomi CDP 365 is a AI-enabled customer data platform from Southeast Asia.",
    "w": "https://www.antsomi.com",
    "i": "Antsomi.svg"
  },
  "AnyClip": {
    "d": "AnyClip is a video engagement platform that uses an AI-driven content analysis engine to analyze and categorize video content in real-time to create personalised video feeds.",
    "w": "https://www.anyclip.com",
    "i": "AnyClip.svg"
  },
  "Apache HTTP Server": {
    "d": "Apache is a free and open-source cross-platform web server software.",
    "w": "https://httpd.apache.org/",
    "i": "Apache.svg"
  },
  "Apache JSPWiki": {
    "d": "Apache JSPWiki is an open-source Wiki engine, built around standard JEE components (Java, servlets, JSP).",
    "w": "http://jspwiki.org",
    "i": "Apache.svg"
  },
  "Apache Tomcat": {
    "d": "Apache Tomcat is an open-source implementation of the Java Servlet, JavaServer Pages, Java Expression Language and WebSocket technologies.",
    "w": "http://tomcat.apache.org",
    "i": "Apache Tomcat.svg"
  },
  "Apache Traffic Server": {
    "w": "http://trafficserver.apache.org/",
    "i": "Apache Traffic Server.svg"
  },
  "Apache Wicket": {
    "w": "http://wicket.apache.org",
    "i": "Apache Wicket.svg"
  },
  "Apereo CAS": {
    "d": "Apereo CAS is an open and well-documented authentication protocol. The primary implementation of the protocol is an open-source Java server component by the same name hosted here, with support for a plethora of additional authentication protocols and features.",
    "w": "https://www.apereo.org/projects/cas",
    "i": "Apereo CAS.png"
  },
  "ApexPages": {
    "w": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_intro.htm",
    "i": "CloudFlare.svg"
  },
  "Apigee": {
    "d": "Apigee is an API gateway management tool to exchange data across cloud services and applications",
    "w": "https://cloud.google.com/apigee/",
    "i": "Apigee.svg"
  },
  "Apisearch": {
    "d": "Apisearch is a real-time search platform for ecommerce.",
    "w": "https://apisearch.io",
    "i": "Apisearch.png"
  },
  "Aplazame": {
    "d": "Aplazame is a consumer credit company that provides instant financing service for online purchases. It combines an overtime payment method integrated at the ecommerce checkout with marketing tools to enable ecommerce to use financing as a promotional lever to boost sales.",
    "w": "https://aplazame.com",
    "i": "Aplazame.svg"
  },
  "Apollo": {
    "d": "Apollo is a fully-featured caching GraphQL client with integrations for React, Angular, and more.",
    "w": "https://www.apollographql.com",
    "i": "Apollo.svg"
  },
  "Apollo13Themes Rife": {
    "d": "Apollo13Themes Rife is a great portfolio and photography WordPress theme with 7 ready-to-use demo layouts.",
    "w": "https://apollo13themes.com/rife",
    "i": "Apollo13Themes.png"
  },
  "ApostropheCMS": {
    "d": "ApostropheCMS is a powerful website builder platform built on an enterprise open source CMS.",
    "w": "https://apostrophecms.com",
    "i": "ApostropheCMS.svg"
  },
  "AppDynamics": {
    "d": "AppDynamics is an application performance management (APM) and IT operations analytics (ITOA) company based in San Francisco.",
    "w": "https://appdynamics.com",
    "i": "AppDynamics.png"
  },
  "AppNexus": {
    "d": "AppNexus is a cloud-based software platform that enables and optimizes programmatic online advertising.",
    "w": "http://appnexus.com",
    "i": "AppNexus.svg"
  },
  "Appcues": {
    "d": "Appcues is a solution for measuring and improving product adoption.",
    "w": "https://www.appcues.com/",
    "i": "Appcues.png"
  },
  "Appian": {
    "d": "Appian is an enterprise low-code application platform.",
    "w": "https://www.appian.com",
    "i": "Appian.svg"
  },
  "Apple Business Chat": {
    "d": "Apple Business Chat is a service from Apple that allows your organization to directly chat with your customers using the Messages app.",
    "w": "https://developer.apple.com/documentation/businesschat",
    "i": "Apple.svg"
  },
  "Apple MapKit JS": {
    "d": "Apple MapKit JS lets you embed interactive maps directly into your websites across platforms and operating systems, including iOS and Android.",
    "w": "https://developer.apple.com/maps/web/",
    "i": "Apple.svg"
  },
  "Apple Pay": {
    "d": "Apple Pay is a mobile payment and digital wallet service by Apple that allows users to make payments in person, in iOS apps, and on the web.",
    "w": "https://www.apple.com/apple-pay",
    "i": "Apple.svg"
  },
  "Apple Sign-in": {
    "d": "Apple Sign-in is based on OAuth 2.0 and OpenID Connect, and provides a privacy-friendly way for users to sign in to websites and apps.",
    "w": "https://developer.apple.com/sign-in-with-apple/",
    "i": "Apple.svg"
  },
  "Apple iCloud Mail": {
    "d": "Apple iCloud Mail is a webmail service provided by Apple, Inc.",
    "w": "https://www.apple.com/icloud/",
    "i": "Apple.svg"
  },
  "ApplicantStack": {
    "d": "ApplicantStack is a full-service applicant tracking system that automates and streamlines all stages of the hiring process.",
    "w": "https://www.applicantstack.com",
    "i": "ApplicantStack.png"
  },
  "Application Request Routing": {
    "d": "Application Request Routing (ARR) is an extension to Internet Information Server (IIS), which enables an IIS server to function as a load balancer.",
    "w": "https://www.iis.net/downloads/microsoft/application-request-routing",
    "i": "Microsoft.svg"
  },
  "Appointy": {
    "d": "Appointy is a cloud-based scheduling solution that helps professionals and businesses to manage their appointment scheduling activities and routines.",
    "w": "https://www.appointy.com/",
    "i": "Appointy.png"
  },
  "Appsflyer": {
    "d": "AppsFlyer is a SaaS mobile marketing analytics and attribution platform.",
    "w": "https://www.appsflyer.com/",
    "i": "Appsflyer.svg"
  },
  "Apptus": {
    "d": "Apptus is an AI-powered ecommerce optimisation software provider.",
    "w": "https://www.apptus.com",
    "i": "Apptus.svg"
  },
  "Aprimo": {
    "d": "Aprimo is a United States-based company that develops and sells marketing automation software and digital asset management technology.",
    "w": "https://www.aprimo.com",
    "i": "Aprimo.png"
  },
  "AptusShop": {
    "d": "AptusShop is proprietary online store software created from scratch and developed by Aptus.pl.",
    "w": "https://www.aptusshop.pl",
    "i": "AptusShop.png"
  },
  "AquilaCMS": {
    "d": "AquilaCMS is a fullstack, headless CMS written in JavaScript.",
    "w": "https://www.aquila-cms.com/",
    "i": "AquilaCMS.svg"
  },
  "Arastta": {
    "d": "Arastta is a free and open-source project with contributors from all over the world.",
    "w": "http://arastta.org",
    "i": "Arastta.svg"
  },
  "Arc": {
    "d": "Arc is a peer-to-peer CDN that pays site owners for using it. Instead of expensive servers in distant datacenters, Arc's network is comprised of browsers.",
    "w": "https://arc.io",
    "i": "Arc.svg"
  },
  "Arc XP": {
    "d": "Arc XP is a cloud-based digital experience platform that helps enterprise companies, retail brands and media and entertainment organization create and distribute content, drive digital commerce, and deliver powerful experiences.",
    "w": "https://www.arcxp.com",
    "i": "Arc XP.svg"
  },
  "ArcGIS API for JavaScript": {
    "d": "ArcGIS API for JavaScript is a tool used to embed maps and tasks in web applications.",
    "w": "https://developers.arcgis.com/javascript/",
    "i": "arcgis_icon.png"
  },
  "Arreva": {
    "d": "Arreva is a fundraising software that provides the ability to mobilise constituents using the donor tracking system.",
    "w": "https://www.arreva.com",
    "i": "Arreva.png"
  },
  "Arsys Domain Parking": {
    "d": "Arsys is a Spanish domain registrar.",
    "w": "https://www.arsys.es",
    "i": "arsys.png"
  },
  "Artifactory": {
    "w": "http://jfrog.com/open-source/#os-arti",
    "i": "Artifactory.svg"
  },
  "Artifactory Web Server": {
    "w": "http://jfrog.com/open-source/#os-arti",
    "i": "Artifactory.svg"
  },
  "Aruba.it": {
    "d": "Aruba.it is an Italian company mainly active in the web hosting and domain registration businesses.",
    "w": "https://www.aruba.it",
    "i": "Aruba.it.svg"
  },
  "ArvanCloud": {
    "d": "ArvanCloud is a cloud services provider, offering a wide range of incorporated cloud services including CDN, DDoS mitigation, Cloud Managed DNS, Cloud Security, VoD/AoD Streaming, Live Streaming, Cloud Compute, Cloud Object Storage, and PaaS.",
    "w": "http://www.arvancloud.com",
    "i": "ArvanCloud.png"
  },
  "Asana": {
    "d": "Asana is a web and mobile application designed to help teams organize, track, and manage their work.",
    "w": "https://asana.com",
    "i": "Asana.svg"
  },
  "AsciiDoc": {
    "d": "AsciiDoc is a text document format for writing documentation, slideshows, web pages, man pages and blogs. AsciiDoc files can be translated to many formats including HTML, PDF, EPUB, man page.",
    "w": "http://www.methods.co.nz/asciidoc",
    "i": "AsciiDoc.png"
  },
  "Asciidoctor": {
    "d": "Asciidoctor is an open-source text processor and publishing toolchain, written in Ruby, for converting AsciiDoc content to HTML 5, DocBook 5, and other formats.",
    "w": "https://github.com/asciidoctor/asciidoctor",
    "i": "Asciidoctor.png"
  },
  "Asciinema": {
    "d": "Asciinema is a free and open-source solution for recording terminal sessions and sharing them on the web.",
    "w": "https://asciinema.org/",
    "i": "Asciinema.svg"
  },
  "Asendia": {
    "d": "Asendia is an international mail joint venture of French La Poste and Swiss Post.",
    "w": "https://www.asendia.com",
    "i": "Asendia.svg"
  },
  "Asgaros Forum": {
    "d": "Asgaros Forum is a lightweight and simple forum plugin for WordPress.",
    "w": "https://www.asgaros.de",
    "i": "Asgaros Forum.png"
  },
  "Astra": {
    "d": "Astra is a fast, lightweight, and highly customizable WordPress Theme.",
    "w": "https://wpastra.com/",
    "i": "Astra.svg"
  },
  "Astra Widgets": {
    "d": "Astra Widgets is a handy little free plugin that lets you display address, list icons or social profiles within the Astra Theme.",
    "w": "https://wpastra.com/did-you-know-astra-is-widget-ready",
    "i": "Astra.svg"
  },
  "Astro": {
    "d": "Astro is a new JavaScript-based static site builder.",
    "w": "https://astro.build",
    "i": "Astro.svg"
  },
  "Astute Solutions": {
    "d": "Astute Solutions is a customer engagement software.",
    "w": "https://astutesolutions.com",
    "i": "Astute Solutions.svg"
  },
  "Atatus": {
    "d": "Atatus is a full-stack observability tool that let you identify the performance bottlenecks and helps you optimise your application at the right time.",
    "w": "https://www.atatus.com",
    "i": "Atatus.svg"
  },
  "Athena Search": {
    "d": "Athena Search is a customizable autocomplete, feature-rich dashboard, smart predictions, real-time reports search engine developed from scratch by Syncit Group’s.",
    "w": "https://www.athenasearch.io",
    "i": "Athena Search.svg"
  },
  "Atlassian Bitbucket": {
    "d": "Bitbucket is a web-based version control repository hosting service for source code and development projects that use either Mercurial or Git revision control systems.",
    "w": "http://www.atlassian.com/software/bitbucket/overview/",
    "i": "Atlassian Bitbucket.svg"
  },
  "Atlassian Confluence": {
    "d": "Atlassian Confluence is a web-based collaboration wiki tool.",
    "w": "http://www.atlassian.com/software/confluence/overview/team-collaboration-software",
    "i": "Atlassian Confluence.svg"
  },
  "Atlassian FishEye": {
    "w": "http://www.atlassian.com/software/fisheye/overview/",
    "i": "Atlassian FishEye.svg"
  },
  "Atlassian Jira": {
    "w": "http://www.atlassian.com/software/jira/overview/",
    "i": "Atlassian Jira.svg"
  },
  "Atlassian Jira Issue Collector": {
    "d": "Atlassian Jira Issue Collector is a tool used to download a list of websites using with email addresses, phone numbers and LinkedIn profiles.",
    "w": "http://www.atlassian.com/software/jira/overview/",
    "i": "Atlassian Jira.svg"
  },
  "Atlassian Statuspage": {
    "d": "Statuspage is a status and incident communication tool.",
    "w": "https://www.atlassian.com/software/statuspage",
    "i": "Atlassian Statuspage.svg"
  },
  "Atome": {
    "d": "Atome is a brand that allows users to purchase products online and pay for them in monthly installments.",
    "w": "https://www.atome.sg/",
    "i": "atome.png"
  },
  "Attentive": {
    "d": "Attentive is a personalised mobile messaging platform that helps retail & ecommerce brands acquire, retain, and interact with mobile shoppers.",
    "w": "https://www.attentivemobile.com",
    "i": "Attentive.svg"
  },
  "Attraqt": {
    "d": "Attraqt provides AI-driven search, merchandising and personalisation solutions.",
    "w": "https://www.attraqt.com/",
    "i": "Attraqt.png"
  },
  "AudioEye": {
    "d": "AudioEye is an accessibility overlay which claims to provide ADA and WCAG accessibility compliance.",
    "w": "https://www.audioeye.com",
    "i": "AudioEye.svg"
  },
  "Audiohook": {
    "d": "Audiohook specializes in programmatic audio advertising.",
    "w": "https://www.audiohook.com",
    "i": "Audiohook.svg"
  },
  "Aument": {
    "d": "Aument is an ecommerce toolbox with easy to use marketing actions and workflows.",
    "w": "https://aument.io",
    "i": "Aument.svg"
  },
  "Aura": {
    "d": "Aura is an open-source UI framework built by Salesforce for developing dynamic web apps for mobile and desktop devices.",
    "w": "https://github.com/forcedotcom/aura",
    "i": "default.svg"
  },
  "Aurelia": {
    "d": "Aurelia is an open-source UI JavaScript framework designed to create single page applications.",
    "w": "http://aurelia.io",
    "i": "Aurelia.svg"
  },
  "Auryc": {
    "d": "Auryc is a client-side journey intelligence platform that surfaces real-time insights.",
    "w": "https://www.auryc.com",
    "i": "Auryc.svg"
  },
  "Australia Post": {
    "d": "Australia Post is the government business enterprise that provides postal services in Australia.",
    "w": "https://auspost.com.au",
    "i": "AusPost.svg"
  },
  "Auth0": {
    "d": "Auth0 provides authentication and authorisation as a service.",
    "w": "https://auth0.github.io/auth0.js/index.html",
    "i": "Auth0.svg"
  },
  "Auth0 Lock": {
    "d": "Auth0 Lock enables you to easily add social identity providers, so that your users can log in seamlessly using any desired provider.",
    "w": "https://auth0.com/docs/libraries/lock",
    "i": "Auth0.svg"
  },
  "Autoketing": {
    "d": "Autoketing is a marketing automation platform.",
    "w": "https://autoketing.com",
    "i": "Autoketing.png"
  },
  "Autoketing Product Reviews": {
    "d": "Autoketing Product Reviews is an application that allows shop owners to manage the product review section on their website.",
    "w": "https://apps.shopify.com/product-reviews-autoketing",
    "i": "Autoketing.png"
  },
  "Automatad": {
    "d": "Automatad is a digital media products company that provides a suite of programmatic monetisation solutions.",
    "w": "https://automatad.com/",
    "i": "automatad.png"
  },
  "Automizely": {
    "d": "Automizely creates and manages enterprise-level marketing automation systems including contact and CRM mappings, lead funnels, email nurture, lead-generating pages, and blog posts, and website integrations.",
    "w": "https://www.automizely.com/marketing",
    "i": "Automizely.svg"
  },
  "Autopilot": {
    "d": "Autopilot is a visual marketing software that enables users to create marketing campaigns and manage lead conversions. ",
    "w": "https://www.autopilothq.com",
    "i": "Autopilot.png"
  },
  "Autoptimize": {
    "d": "Autoptimize is a popular performance plugin for WordPress.",
    "w": "https://autoptimize.com",
    "i": "Autoptimize.png"
  },
  "Avada AVASHIP": {
    "d": "Avada AVASHIP is an order tracking Shopify app.",
    "w": "https://apps.shopify.com/avaship",
    "i": "Avada.svg"
  },
  "Avada Boost Sales": {
    "d": "AVADA Boost Sales is a one-stop solution that is specially designed to increase your sales with countdown timer, trust badges, sales pop, sales boost and many more.",
    "w": "https://apps.shopify.com/avada-boost-sales",
    "i": "Avada.svg"
  },
  "Avada SEO": {
    "d": "Avada SEO is a Shopify app built and designed following strict SEO practices.",
    "w": "https://apps.shopify.com/avada-seo-suite",
    "i": "Avada.svg"
  },
  "Avada Size Chart": {
    "d": "Avada Size Chart is a thoughtful app that helps online stores reduce return rates with useful size guides.",
    "w": "https://apps.shopify.com/avada-size-chart",
    "i": "Avada.svg"
  },
  "Avangate": {
    "d": "Avangate (2Checkout) is a digital ecommerce platform for businesses that sell physical goods or digital products.",
    "w": "https://www.2checkout.com",
    "i": "Avangate.svg"
  },
  "Avanser": {
    "d": "Avanser allow you to track every call and enable your business to make better-informed decisions based on your phone calls.",
    "w": "https://www.avanser.com",
    "i": "Avanser.svg"
  },
  "Avasize": {
    "w": "https://www.avasize.com",
    "i": "Avasize.png"
  },
  "Avis Verifies": {
    "d": "Avis Verifies is a complete solution for managing your customer reviews.",
    "w": "https://www.netreviews.com",
    "i": "Avis Verifies.png"
  },
  "Aweber": {
    "d": "AWeber is an email marketing service.",
    "w": "https://www.aweber.com",
    "i": "Aweber.svg"
  },
  "Awesomplete": {
    "d": "Awesomplete is a tool in the Javascript UI Libraries category of a tech stack.",
    "w": "https://leaverou.github.io/awesomplete/"
  },
  "Axeptio": {
    "d": "Axeptio is a trusted third party that collects and archive users' consent in a GDPR compliant fashion.",
    "w": "https://www.axeptio.eu",
    "i": "Axeptio.png"
  },
  "Axios": {
    "d": "Promise based HTTP client for the browser and node.js",
    "w": "https://github.com/axios/axios",
    "i": "Axios.svg"
  },
  "Azion": {
    "w": "https://www.azion.com/",
    "i": "Azion.svg"
  },
  "Azoya": {
    "d": "Azoya helps international brands and retailers sell directly to Chinese consumers through cross-border ecommerce.",
    "w": "https://www.azoyagroup.com",
    "i": "Azoya.svg"
  },
  "Azure": {
    "d": "Azure is a cloud computing service for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.",
    "w": "https://azure.microsoft.com",
    "i": "Azure.svg"
  },
  "Azure AD B2C": {
    "d": "Azure Active Directory B2C is a customer identity access management (CIAM) solution.",
    "w": "https://azure.microsoft.com/en-us/services/active-directory/external-identities/b2c/",
    "i": "AzureADB2C.png"
  },
  "Azure CDN": {
    "d": "Azure Content Delivery Network (CDN) reduces load times, save bandwidth and speed responsiveness.",
    "w": "https://azure.microsoft.com/en-us/services/cdn/",
    "i": "Azure.svg"
  },
  "Azure Front Door": {
    "d": "Azure Front Door is a scalable and secure entry point for fast delivery of your global web applications.",
    "w": "https://docs.microsoft.com/en-us/azure/frontdoor/",
    "i": "Azure.svg"
  },
  "Azure Monitor": {
    "d": "Azure Monitor collects monitoring telemetry from a variety of on-premises and Azure sources. Azure Monitor helps you maximise the availability and performance of your applications and services.",
    "w": "https://azure.microsoft.com/en-us/services/monitor",
    "i": "Azure.svg"
  },
  "a-blog cms": {
    "w": "http://www.a-blogcms.jp",
    "i": "a-blog cms.svg"
  },
  "a3 Lazy Load": {
    "d": "a3 Lazy Load is a mobile oriented, very simple to use plugin that will speed up sites page load speed.",
    "w": "https://a3rev.com/shop/a3-lazy-load/",
    "i": "a3.png"
  },
  "aThemes Airi": {
    "d": "aThemes Airi is a powerful yet lightweight and flexible WordPress theme for organization or freelancer.",
    "w": "https://athemes.com/theme/airi",
    "i": "aThemes.svg"
  },
  "aThemes Astrid": {
    "d": "aThemes Astrid is a powerful yet lightweight and flexible WordPress theme.",
    "w": "https://athemes.com/theme/astrid",
    "i": "aThemes.svg"
  },
  "aThemes Hiero": {
    "d": "aThemes Hiero is an awesome magazine theme for your WordPress site feature bold colors and details to the content.",
    "w": "https://athemes.com/theme/hiero",
    "i": "aThemes.svg"
  },
  "aThemes Moesia": {
    "d": "aThemes Moesia is the business theme you need in order to build your presence on the Internet.",
    "w": "https://athemes.com/theme/moesia",
    "i": "aThemes.svg"
  },
  "aThemes Sydney": {
    "d": "aThemes Sydney is a powerful business WordPress theme that provides a fast way for companies or freelancers to create an online presence.",
    "w": "https://athemes.com/theme/sydney",
    "i": "aThemes.svg"
  },
  "actionhero.js": {
    "w": "http://www.actionherojs.com",
    "i": "actionhero.js.png"
  },
  "amCharts": {
    "d": "amCharts is a JavaScript-based interactive charts and maps programming library and tool.",
    "w": "http://amcharts.com",
    "i": "amCharts.svg"
  },
  "amoCRM": {
    "d": "amoCRM is a web-based customer relationship management software solution.",
    "w": "https://www.amocrm.com",
    "i": "amoCRM.svg"
  },
  "anime.js": {
    "d": "Anime.js (/ˈæn.ə.meɪ/) is a lightweight JavaScript animation library with a simple, yet powerful API.It works with CSS properties, SVG, DOM attributes and JavaScript Objects.",
    "w": "https://animejs.com/",
    "i": "anime.js.svg"
  },
  "augmented-ui": {
    "d": "augmented-ui is a UI framework inspired by cyberpunk and sci-fi.",
    "w": "http://augmented-ui.com",
    "i": "augmented-ui.png"
  },
  "autoComplete.js": {
    "d": "autoComplete.js is a simple, pure vanilla Javascript library.",
    "w": "https://tarekraafat.github.io/autoComplete.js",
    "i": "autoComplete.js.svg"
  },
  "B2C Europe": {
    "d": "B2C Europe offers logistic solutions for your ecommerce businesses.",
    "w": "https://www.b2ceurope.eu/",
    "i": "B2C Europe.svg"
  },
  "BEM": {
    "d": "BEM (Block, Element, Modifier) is a naming convention for classes in HTML and CSS what was developed by Yandex.",
    "w": "http://en.bem.info",
    "i": "BEM.png"
  },
  "BIGACE": {
    "d": "Bigace is a free open-source content management developed in PHP and JavaScript that uses a MySQL or ADOdb environment.",
    "w": "https://github.com/bigace",
    "i": "BIGACE.png"
  },
  "BON Loyalty": {
    "d": "BON Loyalty is a free rewards and referrals app that helps merchants increase customer engagement with captivating points, rewards & referral program.",
    "w": "https://bonloyalty.com",
    "i": "BON Loyalty.svg"
  },
  "BOOM": {
    "w": "http://manaandisheh.com",
    "i": "boom.svg"
  },
  "BRT": {
    "d": "BRT, also known as Bartolini, is an Italian-based logistics service provider.",
    "w": "https://www.brt.it",
    "i": "BRT.svg"
  },
  "BSmart": {
    "d": "BSmart is an ecommerce platform, programmed by Microline.",
    "w": "https://www.bsmart.co.il",
    "i": "BSmart.png"
  },
  "Babel": {
    "d": "Babel is a free and open-source transcompiler for writing next generation JavaScript.",
    "w": "https://babeljs.io",
    "i": "Babel.svg"
  },
  "Bablic": {
    "d": "Bablic is a localisation solution to translate your website.",
    "w": "https://www.bablic.com/",
    "i": "bablic.png"
  },
  "Babylist": {
    "d": "Babylist is a universal wish list.",
    "w": "https://www.babylist.com",
    "i": "Babylist.svg"
  },
  "Babylon.js": {
    "d": "Babylon.js is a real time 3D engine using a JavaScript library for displaying 3D graphics in a web browser via HTML5. The source code is available on GitHub and distributed under the Apache License 2.0.",
    "w": "https://www.babylonjs.com/",
    "i": "babylonjs.svg"
  },
  "Back In Stock": {
    "d": "Back In Stock lets your customers choose restock alerts for specific variant combinations, including size, colour or style.",
    "w": "https://backinstock.org",
    "i": "Back In Stock.png"
  },
  "Backbone.js": {
    "d": "BackboneJS is a JavaScript library that allows to develop and structure the client side applications that run in a web browser.",
    "w": "http://backbonejs.org",
    "i": "Backbone.js.png"
  },
  "Backdrop": {
    "w": "https://backdropcms.org",
    "i": "Backdrop.png"
  },
  "Baidu Analytics (百度统计)": {
    "d": "Baidu Analytics (百度统计) is a free tool for tracking and reporting traffic data of users visiting your site.",
    "w": "https://tongji.baidu.com/",
    "i": "Baidu Tongji.png"
  },
  "Baidu Maps": {
    "d": "Baidu Maps is a desktop and mobile web mapping service application and technology provided by Baidu, offering satellite imagery, street maps, street view and indoor view perspectives, as well as functions such as a route planner for traveling by foot, car, or with public transportation.",
    "w": "https://map.baidu.com",
    "i": "Baidu Maps.png"
  },
  "BambooHR": {
    "d": "BambooHR is an American technology company that provides human resources software as a service.",
    "w": "https://www.bamboohr.com",
    "i": "BambooHR.svg"
  },
  "Bambuser": {
    "d": "Bambuser is a SaaS company based in Stockholm that provides live video shopping technology.",
    "w": "https://bambuser.com",
    "i": "Bambuser.png"
  },
  "BandsInTown Events Widget": {
    "d": "Bandsintown Events Widget is a free widget which makes it simple to embed your event listings and allow fans to buy tickets, RSVP, follow you and join your Email & SMS lists.",
    "w": "https://artists.bandsintown.com/support/events-widget",
    "i": "BandsInTown.png"
  },
  "Banshee": {
    "d": "Banshee is a PHP website framework with a main focus on security. Banshee is protected against common attacks like SQL injection, cross-site scripting, cross-site request forgery and session hijacking.",
    "w": "http://www.banshee-php.org",
    "i": "Banshee.png"
  },
  "Barba.js": {
    "d": "Barba.js is a small and easy-to-use javascript library that helps you creating fluid and smooth transitions between your website's pages.",
    "w": "https://barba.js.org",
    "i": "Barba.js.png"
  },
  "Barilliance": {
    "d": "Barilliance is an ecommerce personalisation tools including cart abandonment emails, personalised product recommendations, onsite personalisation, and live notifications.",
    "w": "https://www.barilliance.com",
    "i": "Barilliance.png"
  },
  "Base": {
    "d": "Base is a hosted ecommerce platform that allows business owners to set up an online store and sell their products online.",
    "w": "https://thebase.in",
    "i": "Base.svg"
  },
  "Basic": {
    "d": "Basic is an authetication method used by some web servers.",
    "w": "https://tools.ietf.org/html/rfc7617"
  },
  "Basis Technologies": {
    "d": "Basis Technologies, formerly ‘Centro,’ provides cloud-based workflow automation and business intelligence software for marketing.",
    "w": "https://basis.net/",
    "i": "Basis.png"
  },
  "Batflat": {
    "d": "Batflat is a lightweight CMS for free.",
    "w": "https://batflat.org",
    "i": "Batflat.svg"
  },
  "Bazaarvoice Curation": {
    "d": "Bazaarvoice Curation is a content curation service Bazaarvoice provides post it's acquisition of Curalate.",
    "w": "https://www.bazaarvoice.com/products/visual-and-social-content/",
    "i": "Bazaarvoice.png"
  },
  "Bazaarvoice Reviews": {
    "d": "Bazaarvoice is a provider of user-generated content solutions like ratings and reviews and Q&A.",
    "w": "https://www.bazaarvoice.com/products/ratings-and-reviews/",
    "i": "Bazaarvoice.png"
  },
  "Beam AfterSell": {
    "d": "AfterSell is a Shopify app by Beam which helps brands create powerful post purchase offers.",
    "w": "https://www.aftersell.com",
    "i": "AfterSell.svg"
  },
  "Beam OutSell": {
    "d": "OutSell is a Shopify app by Beam. Frequently Bought Together, Discounted Upsell, Also Bought.",
    "w": "https://apps.shopify.com/outsell",
    "i": "Beam.svg"
  },
  "Beans": {
    "d": "Beans is a provider of ecommerce loyalty programs.",
    "w": "https://www.trybeans.com/",
    "i": "Beans.svg"
  },
  "Beeketing": {
    "d": "Beeketing is a suite of marketing apps for ecommerce shop owners.",
    "w": "https://beeketing.com",
    "i": "Beeketing.svg"
  },
  "Beeswax": {
    "d": "Beeswax offers Bidder-as-a-Service solution.",
    "w": "https://www.beeswax.com/",
    "i": "Beeswax.png"
  },
  "Bentobox": {
    "d": "Bentobox is a restaurant website platform that handles menus, reservations, gift cards and more.",
    "w": "https://getbento.com",
    "i": "Bentobox.svg"
  },
  "Better Price": {
    "d": "Better Price is a Shopify app which provide coupons to real leads only when discounted price is requested build by Architechpro.",
    "w": "https://apps.shopify.com/better-price",
    "i": "Better Price.png"
  },
  "Better Uptime": {
    "d": "Better Uptime is the all-in-one infrastructure monitoring platform for your incident management, uptime monitoring, and status pages.",
    "w": "https://betterstack.com/better-uptime",
    "i": "Better Uptime.svg"
  },
  "BetterDocs": {
    "d": "BetterDocs is an advanced documentation and knowledge base plugin for WordPress and Shopify.",
    "w": "https://betterdocs.co",
    "i": "BetterDocs.png"
  },
  "BetterDocs plugin": {
    "d": "BetterDocs plugin is an advanced documentation and knowledge base plugin for WordPress.",
    "w": "https://betterdocs.co/docs/wordpress",
    "i": "BetterDocs.png"
  },
  "Betty Blocks": {
    "d": "Betty Blocks is a cloud-based application development solution featuring a no-code, drag-and-drop interface for developing business applications.",
    "w": "https://www.bettyblocks.com",
    "i": "Betty Blocks.svg"
  },
  "Beyable": {
    "d": "Beyable is a suite of tools that analyze website traffic to understand visitors' behaviors in real-time, through multi-channel in order to optimise conversion rate.",
    "w": "https://beyable.com",
    "i": "Beyable.png"
  },
  "BeyondMenu": {
    "d": "BeyondMenu is an online food ordering service.",
    "w": "https://www.beyondmenu.com/contactus.aspx",
    "i": "BeyondMenu.png"
  },
  "Big Cartel": {
    "d": "Big Cartel is a cloud-hosted ecommerce platform.",
    "w": "https://www.bigcartel.com",
    "i": "Big Cartel.svg"
  },
  "BigCommerce": {
    "d": "BigCommerce is a hosted ecommerce platform that allows business owners to set up an online store and sell their products online.",
    "w": "http://www.bigcommerce.com",
    "i": "BigCommerce.svg"
  },
  "BigDataCloud IP Geolocation": {
    "d": "BigDataCloud IP Geolocation API provides detailed and accurate locality and security metrics of an IP address.",
    "w": "https://www.bigdatacloud.com/packages/ip-geolocation",
    "i": "BigDataCloud-IPGeolocation.svg"
  },
  "BigTree CMS": {
    "d": "BigTree CMS is an extremely extensible open-source CMS built on PHP and MySQL.",
    "w": "https://www.bigtreecms.org",
    "i": "BigTree CMS.svg"
  },
  "Bigware": {
    "w": "http://bigware.de",
    "i": "Bigware.png"
  },
  "Bikayi": {
    "d": "Bikayi is a WhatsApp-integrated ecommerce store.",
    "w": "https://bikayi.com",
    "i": "Bikayi.svg"
  },
  "Billbee": {
    "d": "Billbee is an order processing and inventory management solution.",
    "w": "https://www.billbee.io/",
    "i": "Billbee.png"
  },
  "Binance Pay": {
    "d": "Binance Pay is a contactless, borderless, and secure cryptocurrency payment technology designed by Binance.",
    "w": "https://pay.binance.com",
    "i": "Binance.svg"
  },
  "Birdeye": {
    "d": "Birdeye is an all-in-one customer experience platform.",
    "w": "https://birdeye.com",
    "i": "Birdeye.svg"
  },
  "Bitcoin": {
    "d": "Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
    "w": "https://en.wikipedia.org/wiki/Bitcoin",
    "i": "Bitcoin.svg"
  },
  "BiteSpeed": {
    "d": "BiteSpeed is an all-in-one Shopify marketing app which helps ecommerce brands recover revenue.",
    "w": "https://www.bitespeed.co",
    "i": "BiteSpeed.png"
  },
  "Bitrix24": {
    "d": "Bitrix24 is a set of tools for the organization and management of business processes.",
    "w": "https://www.bitrix24.com",
    "i": "Bitrix24.svg"
  },
  "BittAds": {
    "w": "http://bittads.com",
    "i": "BittAds.png"
  },
  "Bizweb": {
    "w": "https://www.bizweb.vn",
    "i": "bizweb.png"
  },
  "Blackbaud CRM": {
    "d": "Blackbaud CRM gathers fundraising, online applications, actionable prospect research and analytics, and multichannel direct marketing into one platform.",
    "w": "https://www.blackbaud.com",
    "i": "Blackbaud.png"
  },
  "Blade": {
    "w": "https://lets-blade.com",
    "i": "Blade.png"
  },
  "Blazor": {
    "w": "https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor",
    "i": "Blazor.png"
  },
  "Blessing Skin": {
    "d": "Blessing Skin is a plubin that brings your custom skins back in offline Minecraft servers.",
    "w": "https://github.com/bs-community/blessing-skin-server",
    "i": "Blessing Skin.png"
  },
  "Blesta": {
    "w": "http://www.blesta.com",
    "i": "Blesta.png"
  },
  "Blitz": {
    "d": "Blitz provides intelligent static page caching for creating lightning-fast sites with Craft CMS.",
    "w": "https://putyourlightson.com/plugins/blitz",
    "i": "Blitz.svg"
  },
  "Blocksy": {
    "d": "Blocksy is a blazing fast and lightweight WordPress theme.",
    "w": "https://creativethemes.com/blocksy",
    "i": "Blocksy.svg"
  },
  "Blogger": {
    "d": "Blogger is a blog-publishing service that allows multi-user blogs with time-stamped entries.",
    "w": "http://www.blogger.com",
    "i": "Blogger.png"
  },
  "Bloomreach": {
    "w": "https://developers.bloomreach.com",
    "i": "Bloomreach.svg"
  },
  "Bloomreach Discovery": {
    "d": "Bloomreach Discovery is a powerful combination of AI-powered site search, SEO, recommendations, and product merchandising.",
    "w": "https://www.bloomreach.com/en/products/discovery",
    "i": "Bloomreach.svg"
  },
  "Blossom Travel": {
    "d": "Blossom Travel is a free WordPress theme which allows you to create various types of feminine blogs such as travel blog, personal blog, fashion blog, beauty blog, and many more.",
    "w": "https://blossomthemes.com/wordpress-themes/blossom-travel",
    "i": "Blossom.png"
  },
  "Blue": {
    "d": "Blue is a ecommerce data marketing, lead generation, real time bidding and recommendation solutions.",
    "w": "https://web.getblue.io/en/",
    "i": "Blue.svg"
  },
  "Blue Triangle": {
    "d": "Blue Triangle is a connected view of marketing, web performance, and third-party tag analytics while constantly monitoring website code for security vulnerabilities.",
    "w": "https://bluetriangle.com",
    "i": "Blue Triangle.png"
  },
  "BlueConic": {
    "d": "BlueConic is the advanced customer data platform that liberates companies' first-party data from disparate systems.",
    "w": "https://www.blueconic.com",
    "i": "BlueConic.svg"
  },
  "Bluecore": {
    "d": "Bluecore is a retail marketing technology that uses data gained from direct marketing like email, social media, site activity.",
    "w": "https://www.bluecore.com",
    "i": "Bluecore.svg"
  },
  "Bluefish": {
    "d": "Bluefish is a free software text editor with a variety of tools for programming in general and the development of websites.",
    "w": "http://sourceforge.net/projects/bluefish",
    "i": "Bluefish.png"
  },
  "Bluehost": {
    "d": "Bluehost is a large web host known for its WordPress expertise, variety of “one-stop-shop” services, and bargain prices.",
    "w": "https://www.bluehost.com",
    "i": "Bluehost.svg"
  },
  "Blueknow": {
    "d": "Blueknow is a ecommerce personalisation software designed to serve enterprises, SMEs.",
    "w": "https://www.blueknow.com",
    "i": "Blueknow.png"
  },
  "Blueshift": {
    "d": "Blueshift offers the SmartHub CDP, which helps brands deliver relevant and connected experiences across every customer interaction.",
    "w": "https://blueshift.com/",
    "i": "Blueshift.png"
  },
  "Boats Group": {
    "d": "Boats Group is a website platform for boat dealers and brokers.",
    "w": "https://www.boatsgroup.com/websites",
    "i": "Boats Group.png"
  },
  "Boba.js": {
    "w": "http://boba.space150.com"
  },
  "BoidCMS": {
    "d": "BoidCMS is a free and open-source flat file CMS for building simple websites and blogs in seconds, developed using PHP and uses JSON as a database.",
    "w": "https://boidcms.github.io",
    "i": "BoidCMS.svg"
  },
  "Bokeh": {
    "w": "https://bokeh.org",
    "i": "bokeh.png"
  },
  "Bokun": {
    "d": "Bokun is a cloud-based booking management solution which enables small to large travel and tourism businesses manage reservations, products content, images, categorisation, pricing, inventory, and payments.",
    "w": "https://www.bokun.io",
    "i": "Bokun.svg"
  },
  "Bold Brain": {
    "d": "Bold Brain help customers discover more products and add more to their cart with dynamic recommendations for Shopify and use advanced analytics.",
    "w": "https://boldcommerce.com/bold-brain",
    "i": "Bold.svg"
  },
  "Bold Bundles": {
    "d": "Bold Bundles Shopify app is designed to present recommended product widgets to cross-sell your products.",
    "w": "https://boldcommerce.com/bundles",
    "i": "Bold.svg"
  },
  "Bold Chat": {
    "d": "BoldChat is a live chat platform.",
    "w": "https://www.boldchat.com/",
    "i": "BoldChat.png"
  },
  "Bold Commerce": {
    "d": "Bold Commerce is a software company that specialises in ecommerce websites and app development.",
    "w": "https://boldcommerce.com",
    "i": "Bold.svg"
  },
  "Bold Custom Pricing": {
    "d": "Bold Custom Pricing is an app that makes it easy to create a tiered pricing structure for your customers.",
    "w": "https://boldcommerce.com/custom-pricing",
    "i": "Bold.svg"
  },
  "Bold Motivator": {
    "d": "Bold Motivator motivate customers to spend more on your store with free shipping and gifts using a customisable banner that counts down how much more they have to buy.",
    "w": "https://boldcommerce.com/motivator",
    "i": "Bold.svg"
  },
  "Bold Page Builder": {
    "d": "Bold Page Builder is a plugin or a theme component that allows users to structure and design responsive pages.",
    "w": "https://wordpress.org/plugins/bold-page-builder",
    "i": "Bold Page Builder.png"
  },
  "Bold Product Options": {
    "d": "Product Options is a Shopify app which allows customers to customise products with unlimited custom options built by Bold.",
    "w": "https://boldcommerce.com/product-options",
    "i": "Bold.svg"
  },
  "Bold Subscriptions": {
    "d": "Bold Subscriptions provides powerful, API-driven customisation options to build and scale a subscription service that fits your business.",
    "w": "https://boldcommerce.com/shopify-subscription-app",
    "i": "Bold.svg"
  },
  "Bold Themes": {
    "d": "Bold Themes is a powerful and easy to use premium WordPress themes.",
    "w": "https://bold-themes.com/wordpress-themes-plugins/",
    "i": "Bold Themes.png"
  },
  "Bold Upsell": {
    "d": "Bold Upsell allows the substitution or attachment of products to the customers' carts.",
    "w": "https://boldcommerce.com/upsell",
    "i": "Bold.svg"
  },
  "BoldGrid": {
    "d": "BoldGrid is a free website builder for WordPress websites.",
    "w": "https://boldgrid.com"
  },
  "Bolt CMS": {
    "w": "http://bolt.cm",
    "i": "Bolt CMS.png"
  },
  "Bolt Payments": {
    "d": "Bolt powers a checkout experience designed to convert shoppers.",
    "w": "https://www.bolt.com/",
    "i": "Bolt.svg"
  },
  "Bonfire": {
    "w": "http://cibonfire.com",
    "i": "Bonfire.png"
  },
  "BookDinners": {
    "d": "BookDinners is a restaurant table booking widget.",
    "w": "https://www.bookdinners.nl",
    "i": "BookDinners.svg"
  },
  "BookStack": {
    "d": "BookStack is a simple, open-source, self-hosted, easy-to-use platform for organising and storing information.",
    "w": "https://www.bookstackapp.com",
    "i": "BookStack.svg"
  },
  "BookThatApp": {
    "d": "BookThatApp is a Shopify appointment booking, product rental and class booking app.",
    "w": "https://www.bookthatapp.com",
    "i": "BookThatApp.png"
  },
  "Bookatable": {
    "d": "Bookatable is a restaurant table booking widget.",
    "w": "https://www.bookatable.co.uk",
    "i": "Bookatable.svg"
  },
  "Bookeo": {
    "d": "Bookeo is a cloud-based booking and reservation solution that caters to tour operators, travel agencies, schools, therapists, photographers and event organizers.",
    "w": "https://www.bookeo.com",
    "i": "Bookeo.svg"
  },
  "Bookero": {
    "d": "Bookero is online booking system for you website or Facebook page.",
    "w": "https://www.bookero.org",
    "i": "Bookero.svg"
  },
  "Booking.com": {
    "d": "Booking.com is one of the largest ecommerce travel companies in the world. As an affiliate member, you can make up to 40% commission.",
    "w": "https://www.booking.com/affiliate-program/v2/selfmanaged.html",
    "i": "Booking.com.svg"
  },
  "Booking.com widget": {
    "d": "Booking.com is one of the largest ecommerce travel companies in the world. As an affiliate member, you can make up to 40% commission.",
    "w": "https://www.booking.com/affiliate-program/v2/selfmanaged.html",
    "i": "Booking.com.svg"
  },
  "Bookingkit": {
    "d": "Bookingkit is an online booking management solution. Bookingkit helps its users generate PDF invoices, manage day-to-day scheduling operations, and automatically sync availabilities in real time.",
    "w": "https://bookingkit.net/",
    "i": "Bookingkit.svg"
  },
  "Bookly": {
    "d": "Bookly is a WordPress scheduling plugin that allows you to accept online reservations on your website and automate your booking system.",
    "w": "https://www.booking-wp-plugin.com",
    "i": "bookly.png"
  },
  "Booksy": {
    "d": "Booksy is a booking system for people looking to schedule appointments for health and beauty services.",
    "w": "https://booksy.com/",
    "i": "Booksy.svg"
  },
  "Boomerang": {
    "d": "boomerang is a JavaScript library that measures the page load time experienced by real users, commonly called RUM (Real User Measurement).",
    "w": "https://akamai.github.io/boomerang",
    "i": "boomerang.svg"
  },
  "Boost Commerce": {
    "d": "Boost Commerce provides beautiful and advanced product filter and smart site search for Shopify stores to boost sales.",
    "w": "https://boostcommerce.net",
    "i": "Boost Commerce.png"
  },
  "Booster Page Speed Optimizer": {
    "d": "The Page Speed Optimizer is a Shopify app built by BoosterApps.",
    "w": "https://apps.shopify.com/page-speed-optimizer",
    "i": "BoosterApps.png"
  },
  "Bootstrap": {
    "d": "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
    "w": "https://getbootstrap.com",
    "i": "Bootstrap.svg"
  },
  "Bootstrap Icons": {
    "d": "Bootstrap Icons is a growing library of SVG icons that are designed by @mdo and maintained by the Bootstrap Team.",
    "w": "https://icons.getbootstrap.com",
    "i": "Bootstrap Icons.svg"
  },
  "Bootstrap Table": {
    "w": "http://bootstrap-table.wenzhixin.net.cn/",
    "i": "Bootstrap Table.svg"
  },
  "Booxi": {
    "d": "Booxi is a cloud-based appointment management platform for small to midsize businesses.",
    "w": "https://www.booxi.com",
    "i": "Booxi.svg"
  },
  "Borderfree": {
    "d": "Borderfree is an cross-border ecommerce solutions provider.",
    "w": "https://www.borderfree.com",
    "i": "Borderfree.png"
  },
  "Borlabs Cookie": {
    "d": "Borlabs Cookie is a GDPR cookie consent plugin for WordPress.",
    "w": "https://borlabs.io/borlabs-cookie/",
    "i": "Borlabs Cookie.svg"
  },
  "Botble CMS": {
    "w": "https://botble.com",
    "i": "Botble-CMS.png"
  },
  "Boutiq": {
    "d": "Boutiq is a personal video shopping solution.",
    "w": "https://www.getboutiq.com",
    "i": "Boutiq.svg"
  },
  "BowNow": {
    "d": "BowNow is a marketing automation tool with business card management, sales support, analysis, and email magazine functions.",
    "w": "https://bow-now.jp",
    "i": "BowNow.png"
  },
  "Boxtal": {
    "d": "Boxtal is a cloud-based multi-carrier shipping solution.",
    "w": "https://www.boxtal.com",
    "i": "Boxtal.svg"
  },
  "Bpost": {
    "d": "Bpost, also known as the Belgian Post Group, is the Belgian company responsible for the delivery of national and international mail.",
    "w": "https://www.bpost.be",
    "i": "Bpost.svg"
  },
  "BrainSINS": {
    "d": "BrainSINS is a personalisation technology and ecommerce analytics services to online retailers.",
    "w": "http://brainsins.com",
    "i": "BrainSINS.png"
  },
  "Braintree": {
    "d": "Braintree, a division of PayPal, specializes in mobile and web payment systems for ecommerce companies. Braintree provides clients with a merchant account and a payment gateway.",
    "w": "https://www.braintreepayments.com",
    "i": "Braintree.svg"
  },
  "Branch": {
    "d": "Branch is a mobile deep linking system to increase engagement and retention.",
    "w": "https://branch.io",
    "i": "Branch.png"
  },
  "Brandfolder": {
    "d": "Brandfolder is a cloud-based digital asset management platform.",
    "w": "https://brandfolder.com",
    "i": "Brandfolder.svg"
  },
  "Braze": {
    "d": "Braze is a customer engagement platform that delivers messaging experiences across push, email, in-product, and more.",
    "w": "https://www.braze.com",
    "i": "Braze.svg"
  },
  "Bread": {
    "d": "Bread is a buy now, pay later platform for ecommerce websites.",
    "w": "https://www.breadpayments.com",
    "i": "Bread.svg"
  },
  "Breadcrumb NavXT": {
    "d": "Breadcrumb NavXT is a WordPress plugin compatible with WordPress versions 4.9 and up.",
    "w": "https://github.com/mtekk/Breadcrumb-NavXT",
    "i": "Breadcrumb NavXT.svg"
  },
  "Breinify": {
    "d": "Breinify is a powerful personalisation engine that enables brands to create personalised digital experiences at an individual level across web, e-mail, SMS and app channels.",
    "w": "https://home.breinify.ai",
    "i": "Breinify.png"
  },
  "Bricks": {
    "d": "Bricks is a premium WordPress theme that lets you visually build performant WordPress sites.",
    "w": "https://bricksbuilder.io",
    "i": "Bricks.svg"
  },
  "Bricksite": {
    "d": "Bricksite is a free website online tool where clients can create free accounts with various themes and features.",
    "w": "https://bricksite.io",
    "i": "Bricksite.svg"
  },
  "BrightEdge": {
    "d": "BrightEdge is an SEO solution and content performance marketing platform.",
    "w": "https://www.brightedge.com",
    "i": "BrightEdge.png"
  },
  "BrightInfo": {
    "d": "BrightInfo is an automated content personalisation solution.",
    "w": "https://www.brightinfo.com",
    "i": "BrightInfo.png"
  },
  "Brightcove": {
    "d": "Brightcove is a cloud-based online video platform.",
    "w": "https://www.brightcove.com",
    "i": "Brightcove.png"
  },
  "Brightspot": {
    "w": "https://www.brightspot.com",
    "i": "Brightspot.svg"
  },
  "Broadstreet": {
    "d": "Broadstreet is an ad manager that caters specifically to the needs of direct, digital ad sales.",
    "w": "https://broadstreetads.com",
    "i": "Broadstreet.png"
  },
  "Bronto": {
    "d": "Bronto is a cloud-based email marketing automation software.",
    "w": "https://bronto.com",
    "i": "Bronto.svg"
  },
  "Brownie": {
    "d": "Brownie is a framework, CMS, ecommerce and ERP omni-channel platform to manage your entire business in one cloud solution.",
    "w": "https://www.browniesuite.com",
    "i": "Brownie.svg"
  },
  "Browser-Update.org": {
    "d": "Browser-update.org is a tool to unobtrusively notify visitors that they should update their web browser in order to use your website.",
    "w": "https://browser-update.org",
    "i": "Browser-Update.org.png"
  },
  "BrowserCMS": {
    "w": "http://browsercms.org",
    "i": "BrowserCMS.png"
  },
  "Bsale": {
    "d": "Bsale is an store management solution for retail businesses that sell both in store and online.",
    "w": "https://www.bsale.cl",
    "i": "Bsale.png"
  },
  "Bubble": {
    "d": "Bubble is a no-code platform that lets anyone build web apps without writing any code.",
    "w": "http://bubble.io",
    "i": "bubble.png"
  },
  "Budbee": {
    "d": "Budbee is a tech company that operates a logistics service for ecommerce.",
    "w": "https://app.budbee.com/",
    "i": "Budbee.svg"
  },
  "BuddyPress": {
    "d": "BuddyPress is designed to allow schools, companies, sports teams, or any other niche community to start their own social network or communication tool.",
    "w": "https://buddypress.org",
    "i": "BuddyPress.svg"
  },
  "BugHerd": {
    "d": "BugHerd is a cloud-based feedback collection and bug management tool.",
    "w": "https://bugherd.com",
    "i": "BugHerd.svg"
  },
  "BugSnag": {
    "d": "Bugsnag is a cross-platform error monitoring, reporting, and resolution software.",
    "w": "http://bugsnag.com",
    "i": "BugSnag.png"
  },
  "Bugcrowd": {
    "d": "Bugcrowd is a crowdsourced cybersecurity platform.",
    "w": "https://www.bugcrowd.com",
    "i": "Bugcrowd.svg"
  },
  "Bugzilla": {
    "w": "http://www.bugzilla.org",
    "i": "Bugzilla.png"
  },
  "Builder.io": {
    "d": "Builder.io is a headless CMS with a powerful drag-and-drop visual editor that lets you build and optimize digital experiences with speed and flexibility. ",
    "w": "https://builder.io",
    "i": "Builder.svg"
  },
  "Buildertrend": {
    "w": "https://buildertrend.com",
    "i": "Buildertrend.svg"
  },
  "Bulma": {
    "d": "Bulma is a free class-based framework for CSS.",
    "w": "http://bulma.io",
    "i": "Bulma.svg"
  },
  "Bump": {
    "d": "Bump is an API contract management platform that helps document and track APIs by identifying changes in API structure, and keeping developers informed through an elegant documentation.",
    "w": "https://bump.sh",
    "i": "Bump.svg"
  },
  "Bunny": {
    "w": "https://bunny.net",
    "i": "Bunny.png"
  },
  "Business Catalyst": {
    "w": "http://businesscatalyst.com",
    "i": "Business Catalyst.svg"
  },
  "Business Website Builder": {
    "w": "https://businesswebsites.google.com/welcome",
    "i": "Google.svg"
  },
  "ButterCMS": {
    "d": "ButterCMS is a cloud-based headless content management system.",
    "w": "https://buttercms.com",
    "i": "butter-cms.svg"
  },
  "Buy me a coffee": {
    "d": "Buy me a coffee is a service for online content creators that they may use to receive tips and donations to support their work.",
    "w": "https://www.buymeacoffee.com",
    "i": "Buy me a coffee.svg"
  },
  "BuySellAds": {
    "w": "http://buysellads.com",
    "i": "BuySellAds.svg"
  },
  "Buyapowa": {
    "d": "Buyapowa is a scalable referral marketing and advocacy platform designed for all industries.",
    "w": "https://www.buyapowa.com",
    "i": "Buyapowa.svg"
  },
  "BySide": {
    "d": "BySide is a personalisation and marketing automation platform.",
    "w": "https://byside.com",
    "i": "BySide.svg"
  },
  "Bynder": {
    "d": "Bynder is a cloud-based marketing platform where brands create, find, and use all their digital content.",
    "w": "https://www.bynder.com",
    "i": "Bynder.svg"
  },
  "bSecure": {
    "d": "bSecure is a one-click checkout solution for selling your products all across the globe instantly.",
    "w": "https://www.bsecure.pk",
    "i": "bSecure.svg"
  },
  "basket.js": {
    "w": "https://addyosmani.github.io/basket.js/",
    "i": "basket.js.png"
  },
  "bdok": {
    "d": "bdok is a cloud-based platform which provides the capability to create and manage online stores with no technical knowledge.",
    "w": "https://bdok.ir",
    "i": "bdok.svg"
  },
  "C": {
    "d": "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.",
    "w": "http://www.open-std.org/jtc1/sc22/wg14/",
    "i": "C.png"
  },
  "CCV Shop": {
    "w": "https://ccvshop.be",
    "i": "ccvshop.png"
  },
  "CDN77": {
    "d": "CDN77 is a content delivery network (CDN).",
    "w": "https://www.cdn77.com",
    "i": "CDN77.png"
  },
  "CEMax": {
    "d": "CEMax is a premium customer engagement platform.",
    "w": "https://cemax.ai",
    "i": "CEMax.png"
  },
  "CFML": {
    "d": "ColdFusion Markup Language (CFML), is a scripting language for web development that runs on the JVM, the .NET framework, and Google App Engine.",
    "w": "http://adobe.com/products/coldfusion-family.html",
    "i": "CFML.png"
  },
  "CIVIC": {
    "d": "Civic provides cookie control for user consent and the use of cookies.",
    "w": "https://www.civicuk.com/cookie-control",
    "i": "civic.png"
  },
  "CJDropshipping app": {
    "d": "CJDropshipping is a dropshipping supplier and fulfillment service from China.",
    "w": "https://apps.shopify.com/cucheng",
    "i": "CJDropshipping.svg"
  },
  "CKEditor": {
    "d": "CKEditor is a WYSIWYG rich text editor which enables writing content directly inside of web pages or online applications. Its core code is written in JavaScript and it is developed by CKSource. CKEditor is available under open-source and commercial licenses.",
    "w": "http://ckeditor.com",
    "i": "CKEditor.png"
  },
  "CMS Made Simple": {
    "w": "http://cmsmadesimple.org",
    "i": "CMS Made Simple.png"
  },
  "CMSimple": {
    "w": "http://www.cmsimple.org/en"
  },
  "CNZZ": {
    "w": "https://web.umeng.com/",
    "i": "cnzz.png"
  },
  "CPABuild": {
    "d": "CPABuild is a next generation CPA network with integrated template building and sharing functionality.",
    "w": "https://cpabuild.com",
    "i": "CPABuild.png"
  },
  "CPG Dragonfly": {
    "w": "http://dragonflycms.org",
    "i": "CPG Dragonfly.png"
  },
  "CRM+": {
    "d": "CRM+ is a German CRM software product building on Vtiger with GDPR-compliant extensions and improvements.",
    "w": "https://www.brainformatik.com",
    "i": "CRM+.png"
  },
  "CS Cart": {
    "d": "CS Cart is a turnkey ecommerce shopping cart software solution.",
    "w": "http://www.cs-cart.com",
    "i": "CS Cart.svg"
  },
  "CSSIgniter Olsen Light": {
    "d": "CSSIgniter Olsen Light is a clean, minimal, stylish and elegant WordPress blog theme, perfect for lifestyle, food, cooking, fashion, travel, wedding, health & fitness, photography and beauty blogging.",
    "w": "https://www.cssigniter.com/themes/olsen-light",
    "i": "CSSIgniter.svg"
  },
  "CTT": {
    "d": "CTT operates as the national postal service of Portugal.",
    "w": "https://www.ctt.pt",
    "i": "CTT.svg"
  },
  "Caast.tv": {
    "d": "Caast.tv is a digital commercial animation solution integrated into the ecommerce customer journey.",
    "w": "https://en.caast.tv",
    "i": "Caast.tv.png"
  },
  "CacheFly": {
    "d": "CacheFly is a content delivery network (CDN) which offers CDN service that relies solely on IP anycast for routing, rather than DNS based global load balancing.",
    "w": "http://www.cachefly.com",
    "i": "CacheFly.svg"
  },
  "Cachet": {
    "d": "Cachet is the free and open-source status page for your API, service or company.",
    "w": "https://cachethq.io",
    "i": "Cachet.svg"
  },
  "CactiveCloud": {
    "d": "CactiveCloud is a freemium based cloud provider and web server for static deployments of websites with HTML builds and serverless functions.",
    "w": "https://cactivecloud.com",
    "i": "CactiveCloud.svg"
  },
  "Caddy": {
    "w": "http://caddyserver.com",
    "i": "caddy.svg"
  },
  "Cafe24": {
    "d": "Cafe24 is a global ecommerce platform that provides everything people need to build an online DTC store in one stop.",
    "w": "https://www.cafe24.com/en/",
    "i": "Cafe24.svg"
  },
  "CakePHP": {
    "d": "CakePHP is an open-source web framework. It follows the model–view–controller (MVC) approach and is written in PHP.",
    "w": "http://cakephp.org",
    "i": "CakePHP.svg"
  },
  "Caldera Forms": {
    "d": "Caldera Forms is the free WordPress form builder plugin.",
    "w": "https://calderaforms.com",
    "i": "Caldera Forms.png"
  },
  "CalendarHero": {
    "d": "CalendarHero (formerly Zoom.ai) is meeting scheduling software that helps you book meetings automatically.",
    "w": "https://calendarhero.com",
    "i": "CalendarHero.png"
  },
  "Calendly": {
    "d": "Calendly is an app for scheduling appointments, meetings, and events.",
    "w": "https://calendly.com/",
    "i": "Calendly.svg"
  },
  "CallRail": {
    "d": "CallRail is a service that tracks and manages your phone leads, helping businesses to determine which marketing campaigns are driving quality leads.",
    "w": "https://www.callrail.com",
    "i": "CallRail.png"
  },
  "CallTrackingMetrics": {
    "d": "CallTrackingMetrics is a call tracking and marketing attribution solution for contact centers and agencies.",
    "w": "https://www.calltrackingmetrics.com",
    "i": "CallTrackingMetrics.svg"
  },
  "Callbell": {
    "d": "Callbell is a web-based live chat solution designed to help businesses manage team collaboration via multiple communication channels.",
    "w": "https://www.callbell.eu",
    "i": "Callbell.svg"
  },
  "Campaign Monitor": {
    "d": "Campaign Monitor is a global technology company that provides an email marketing platform.",
    "w": "https://www.campaignmonitor.com",
    "i": "Campaign Monitor.svg"
  },
  "Candid Themes Fairy": {
    "d": "Fairy is a free and minimal WordPress blog theme by Candid Themes.",
    "w": "https://www.candidthemes.com/themes/fairy",
    "i": "Candid Themes.png"
  },
  "Canny": {
    "d": "Canny is a cloud-based solution that helps small to large businesses collect, analyse, prioritise and track user feedback to make informed product decisions.",
    "w": "https://canny.io",
    "i": "Canny.svg"
  },
  "Canto": {
    "d": "Canto is a digital asset management solution.",
    "w": "https://www.canto.com",
    "i": "Canto.svg"
  },
  "Canvas LMS": {
    "d": "Canvas LMS is a web-based learning management system, or LMS.",
    "w": "https://www.instructure.com/canvas",
    "i": "Canvas LMS.svg"
  },
  "CanvasJS": {
    "d": "CanvasJS charts is a data visualisation library that runs across multiple devices and browsers.",
    "w": "https://canvasjs.com",
    "i": "canvasjs.svg"
  },
  "Captch Me": {
    "w": "http://captchme.com",
    "i": "Captch Me.svg"
  },
  "Carbon Ads": {
    "d": "Carbon Ads is an ad tech company, that connects advertisers to users through targeted verticals called Circles.",
    "w": "http://carbonads.net",
    "i": "Carbon Ads.svg"
  },
  "CareCart": {
    "d": "CareCart is a smart app to recover big value carts on all sizes of shopify stores.",
    "w": "https://carecart.io/abandoned-cart-recovery-app",
    "i": "CareCart.png"
  },
  "CareCart Sales Pop Up": {
    "d": "CareCart Sales Pop Up is a stock countdown timer, recent sales notifications, live sales pop up widget.",
    "w": "https://carecart.io/sales-pop-up-app",
    "i": "CareCart.png"
  },
  "Cargo": {
    "d": "Cargo is a professional site building platform for designers and artists.",
    "w": "https://cargo.site",
    "i": "Cargo.svg"
  },
  "Carrd": {
    "d": "Carrd is a platform for building simple, responsive, one-page sites.",
    "w": "https://carrd.co",
    "i": "Carrd.svg"
  },
  "Carro": {
    "d": "Carro connects participating Shopify stores together to enable cross-store selling or the ability for like-minded partners to directly sell each other products without the need for inventory, managing returns, or minimum order quantities.",
    "w": "https://getcarro.com",
    "i": "Carro.svg"
  },
  "Cart Functionality": {
    "d": "Websites that have a shopping cart or checkout page, either using a known ecommerce platform or a custom solution.",
    "w": "https://www.wappalyzer.com/technologies/ecommerce/cart-functionality",
    "i": "Cart-generic.svg"
  },
  "Cart.com": {
    "d": "Cart.com is an ecommerce platform built for high volume online stores and complex products with features such as multi-store management.",
    "w": "https://www.americommerce.com",
    "i": "Cart.com.svg"
  },
  "Cart.js": {
    "d": "Cart.js is a very small open-source Javascript library that makes the addition of powerful Ajax cart functionality to your Shopify theme a breeze.",
    "w": "https://cartjs.org",
    "i": "Cart.js.png"
  },
  "CartKit": {
    "d": "CartKit build apps from fuss-free multi-channel marketing automation and campaigns to social proof popups and user session recording.",
    "w": "https://www.cartkit.com",
    "i": "CartKit.svg"
  },
  "CartStack": {
    "d": "CartStack is a SaaS solution that allows any company with an ecommerce site or reservation system to increase revenue through reminding/encouraging consumers to return to their abandoned cart and complete their purchase.",
    "w": "https://www.cartstack.com",
    "i": "CartStack.svg"
  },
  "Carts Guru": {
    "d": "Carts Guru is the all-in-one marketing automation tool for ecommerce stores.",
    "w": "https://www.carts.guru",
    "i": "Carts Guru.png"
  },
  "Cashew Payments": {
    "d": "Cashew Payments is a buy now, pay later platform that allows its customers to shop now and pay later in equal monthly installments.",
    "w": "https://www.cashewpayments.com",
    "i": "Cashew Payments.svg"
  },
  "Catberry.js": {
    "w": "https://catberry.github.io/",
    "i": "Catberry.js.png"
  },
  "Catch": {
    "d": "Catch is a payment solution which allows merchants to use payments via bank payments instead of credit/debit cards.",
    "w": "https://www.getcatch.com/",
    "i": "Catch.svg"
  },
  "Catch Themes Catch Box": {
    "d": "Catch Box is a lightweight, box shaped, clean responsive WordPress theme by Catch Themes.",
    "w": "https://catchthemes.com/themes/catch-box",
    "i": "Catch Themes.png"
  },
  "Catch Themes Fotografie": {
    "d": "Fotografie is a modern photography WordPress theme that comes with high-quality features and minimal design by Catch Themes.",
    "w": "https://catchthemes.com/themes/fotografie",
    "i": "Catch Themes.png"
  },
  "Cecil": {
    "d": "Cecil is a CLI application, powered by PHP, that merge plain text files (written in Markdown), images and Twig templates to generate a static website.",
    "w": "https://cecil.app",
    "i": "Cecil.svg"
  },
  "Celeritas": {
    "d": "Celeritas offers transportation logistics services for package deliveries.",
    "w": "https://celeritastransporte.com",
    "i": "Celeritas.svg"
  },
  "Celum": {
    "d": "Celum is a software developer that specialises in enterprise digital asset management and marketing content management systems.",
    "w": "https://www.celum.com",
    "i": "Celum.svg"
  },
  "Cendyn": {
    "d": "Cendyn (formerly NextGuest) is a hospitality focused content management system.",
    "w": "https://www.cendyn.com",
    "i": "cendyn.png"
  },
  "Censhare": {
    "d": "Censhare is a commercial digital experience platform in the form of an enterprise content management system.",
    "w": "https://www.censhare.com",
    "i": "Censhare.svg"
  },
  "CentOS": {
    "d": "CentOS is a Linux distribution that provides a free, community-supported computing platform functionally compatible with its upstream source, Red Hat Enterprise Linux (RHEL).",
    "w": "http://centos.org",
    "i": "CentOS.svg"
  },
  "Centminmod": {
    "w": "https://centminmod.com",
    "i": "centminmod.png"
  },
  "Centra": {
    "d": "Centra is the headless ecommerce platform.",
    "w": "https://centra.com",
    "i": "Centra.svg"
  },
  "Chabokan": {
    "d": "Chabokan is a cloud services provider, offering a wide range of incorporated cloud services including Cloud Object Storage, DBaaS, BaaS, and PaaS.",
    "w": "https://chabokan.net",
    "i": "Chabokan.svg"
  },
  "Chakra UI": {
    "d": "Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.",
    "w": "https://chakra-ui.com",
    "i": "Chakra UI.svg"
  },
  "Chameleon": {
    "d": "Chameleon is a sophisticated no-code platform for product success, empowering SaaS teams to build self-service user onboarding, feature adoption, and feedback collection.",
    "w": "https://www.trychameleon.com",
    "i": "Chameleon.png"
  },
  "Chameleon system": {
    "d": "Chameleon system is an ecommerce and content management system all-in-one, capable of being integrated straight from the manufacturer.",
    "w": "https://www.chameleon-system.de",
    "i": "Chameleon system.png"
  },
  "Chamilo": {
    "d": "Chamilo is an open-source learning management and collaboration system.",
    "w": "http://www.chamilo.org",
    "i": "Chamilo.png"
  },
  "Channel.io": {
    "d": "Channel.io is an all-in-one business communication platform that helps businesses connect with customers.",
    "w": "https://channel.io",
    "i": "Channel.io.png"
  },
  "ChannelAdvisor": {
    "d": "ChannelAdvisor is a provider of cloud-based solutions to ecommerce companies.",
    "w": "https://www.channeladvisor.com",
    "i": "ChannelAdvisor.svg"
  },
  "ChannelApe": {
    "d": "ChannelApe is an ecommerce and inventory management solution for the footwear and apparel industry.",
    "w": "https://www.channelape.com",
    "i": "ChannelApe.svg"
  },
  "Chaport": {
    "d": "Chaport is a multi-channel live chat and chatbot software for business.",
    "w": "https://www.chaport.com",
    "i": "Chaport.png"
  },
  "ChargeAfter": {
    "d": "ChargeAfter is a platform that connects retailers and lenders to offer consumers personalized Point of Sale Financing options at checkout from multiple lenders. ",
    "w": "https://chargeafter.com/",
    "i": "ChargeAfter.svg"
  },
  "Chargebee": {
    "d": "Chargebee is a PCI Level 1 certified recurring billing platform for SaaS and subscription-based businesses.",
    "w": "https://www.chargebee.com",
    "i": "Chargebee.svg"
  },
  "Chart.js": {
    "d": "Chart.js is an open-source JavaScript library that allows you to draw different types of charts by using the HTML5 canvas element.",
    "w": "https://www.chartjs.org",
    "i": "Chart.js.svg"
  },
  "Chartbeat": {
    "w": "http://chartbeat.com",
    "i": "Chartbeat.png"
  },
  "ChatStack": {
    "d": "ChatStack is a self-hosted live chat software for websites.",
    "w": "https://www.chatstack.com",
    "i": "ChatStack.svg"
  },
  "Chatango": {
    "d": "Chatango is a website used for connecting to a large selection of users.",
    "w": "https://chatango.com",
    "i": "Chatango.png"
  },
  "Chatra": {
    "d": "Chatra is a cloud-based live chat platform aimed at small businesses and ecommerce retailers.",
    "w": "https://chatra.com",
    "i": "Chatra.svg"
  },
  "Chatwoot": {
    "d": "Chatwoot is a customer support tool for instant messaging channels.",
    "w": "https://www.chatwoot.com",
    "i": "Chatwoot.svg"
  },
  "Checkfront": {
    "d": "Checkfront is a cloud-based booking management application and ecommerce platform.",
    "w": "https://www.checkfront.com",
    "i": "Checkfront.svg"
  },
  "Checkly": {
    "d": "Checkly is the API and E2E monitoring platform for the modern stack: programmable, flexible and loving JavaScript.",
    "w": "https://www.checklyhq.com",
    "i": "Checkly.svg"
  },
  "Checkout.com": {
    "d": "Checkout.com is an international payment platform that processes different payment methods across a variety of currencies.",
    "w": "https://www.checkout.com",
    "i": "Checkout.com.svg"
  },
  "Chekkit": {
    "d": "Chekkit is an all-in-one review, messaging, and lead inbox software.",
    "w": "https://www.chekkit.io",
    "i": "Chekkit.png"
  },
  "Cherokee": {
    "w": "http://www.cherokee-project.com",
    "i": "Cherokee.png"
  },
  "CherryPy": {
    "d": "CherryPy is an object-oriented web application framework using the Python programming language.",
    "w": "https://cherrypy.org/",
    "i": "CherryPy.svg"
  },
  "Chevereto": {
    "d": "Chevereto is an image hosting software that allows you to create a full-featured image hosting website on your own server.",
    "w": "https://chevereto.com",
    "i": "Chevereto.svg"
  },
  "Chili Piper": {
    "d": "Chili Piper is a suite of automated scheduling tools that help revenue teams convert leads.",
    "w": "https://www.chilipiper.com/",
    "i": "Chili Piper.svg"
  },
  "Chimpmatic": {
    "d": "Chimpmatic is a premium Contact Form 7 and Mailchimp integration plugin.",
    "w": "https://chimpmatic.com",
    "i": "default.svg"
  },
  "Chinese Menu Online": {
    "d": "Chinese Menu Online is an online food ordering service.",
    "w": "https://www.chinesemenuonline.com",
    "i": "Chinese Menu Online.png"
  },
  "Chitika": {
    "w": "http://chitika.com",
    "i": "Chitika.png"
  },
  "Choices": {
    "d": "Choices.js is a lightweight, configurable select box/text input plugin.",
    "w": "https://github.com/Choices-js/Choices",
    "i": "Choices.png"
  },
  "Chord": {
    "d": "Chord is a video-enabled social community and communication platform completely customised to your brand.",
    "w": "https://m.chord.us",
    "i": "Chord.svg"
  },
  "Chorus": {
    "d": "Chorus is the only all-in-one publishing, audience, and revenue platform built for modern media companies.",
    "w": "https://getchorus.voxmedia.com",
    "i": "Chorus.svg"
  },
  "Chronofresh": {
    "d": "Chronofresh is an express transport service for food products.",
    "w": "https://www.chronofresh.fr",
    "i": "Chronopost.svg"
  },
  "Chronopost": {
    "d": "Chronopost provides a domestic and international express shipping and delivery service.",
    "w": "https://www.chronopost.fr",
    "i": "Chronopost.svg"
  },
  "ChurnZero": {
    "d": "ChurnZero is a real-time customer success platform that helps subscription businesses fight customer churn.",
    "w": "https://churnzero.net",
    "i": "ChurnZero.png"
  },
  "CitrusPay": {
    "d": "CitrusPay provides payement gateway and wallet services.",
    "w": "https://consumers.citruspay.com/",
    "i": "citruspay.png"
  },
  "City Hive": {
    "d": "City Hive's all in one ecommerce platform for wine and spirit shops.",
    "w": "https://www.cityhive.net",
    "i": "City Hive.png"
  },
  "CityMail": {
    "d": "CityMail is a private postal organisation operating in Sweden.",
    "w": "https://www.citymail.se",
    "i": "CityMail.png"
  },
  "CiviCRM": {
    "d": "CiviCRM is a web-based suite of internationalised open-source software for constituency relationship management.",
    "w": "https://civicrm.org",
    "i": "CiviCRM.png"
  },
  "CiviCRM plugins": {
    "d": "CiviCRM is a web-based suite of internationalised open-source software for constituency relationship management.",
    "w": "https://wordpress.org/plugins/search/civicrm/",
    "i": "CiviCRM.png"
  },
  "CivicTheme": {
    "d": "CivicTheme is an open source, inclusive and component-based design system. It was created so governments and corporations can rapidly assemble modern, consistent and compliant digital experiences.",
    "w": "https://www.civictheme.io/",
    "i": "civictheme.png"
  },
  "Ckan": {
    "w": "https://ckan.org/",
    "i": "Ckan.png"
  },
  "Clarip": {
    "d": "Clarip is an enterprise data privacy and risk management platform.",
    "w": "https://www.clarip.com",
    "i": "Clarip.png"
  },
  "Claris FileMaker": {
    "d": "Claris FileMaker is a cross-platform relational database application from Claris International.",
    "w": "https://www.claris.com/filemaker",
    "i": "Claris.svg"
  },
  "Clarity": {
    "d": "Clarity is an open-source design system that brings together UX guidelines, an HTML/CSS framework, and Angular components.",
    "w": "https://clarity.design",
    "i": "clarity.svg"
  },
  "Classeh": {
    "d": "Classeh is a LMS that allows user to participate in webinars and also use LMS options like messanger,finances,homework,quiz and some extra options like sending messages and more.",
    "w": "https://fanavar.org",
    "i": "Classeh.svg"
  },
  "Classy": {
    "d": "Classy is a class library for JavaScript applications.",
    "w": "https://www.classy.org/",
    "i": "classy.png"
  },
  "ClearSale": {
    "d": "ClearSale offers fraud management and chargeback protection services.",
    "w": "https://www.clear.sale/",
    "i": "ClearSale.svg"
  },
  "Clearbit Reveal": {
    "d": "Clearbit Reveal identifies anonymous visitors to websites.",
    "w": "https://clearbit.com/reveal",
    "i": "Clearbit.png"
  },
  "Clerk": {
    "d": "Clerk is a user management platform.",
    "w": "https://clerk.dev",
    "i": "Clerk.svg"
  },
  "Clerk.io": {
    "d": "Clerk.io is an all-in-one ecommerce personalisation platform.",
    "w": "https://clerk.io",
    "i": "Clerk.io.svg"
  },
  "CleverTap": {
    "d": "CleverTap is a SaaS based customer lifecycle management and mobile marketing company headquartered in Mountain View, California.",
    "w": "https://clevertap.com",
    "i": "CleverTap.png"
  },
  "Cleverbridge": {
    "d": "Cleverbridge is a all-in-one ecommerce and subscription billing solution for software, (SaaS) and digital goods.",
    "w": "https://www.cleverbridge.com",
    "i": "Cleverbridge.svg"
  },
  "Click & Pledge": {
    "d": "Click & Pledge is an all-in-one digital fundraising platform.",
    "w": "https://clickandpledge.com",
    "i": "Click & Pledge.png"
  },
  "ClickCease": {
    "d": "ClickCease is an ad fraud and click-fraud detection and protection service software.",
    "w": "https://www.clickcease.com",
    "i": "ClickCease.svg"
  },
  "ClickDimensions": {
    "d": "ClickDimensions is a SaaS marketing automation platform built on the Microsoft Windows Azure platform.",
    "w": "https://clickdimensions.com",
    "i": "ClickDimensions.png"
  },
  "ClickFunnels": {
    "d": "ClickFunnels is an online sales funnel builder that helps businesses market, sell, and deliver their products online.",
    "w": "https://www.clickfunnels.com",
    "i": "ClickFunnels.svg"
  },
  "ClickHeat": {
    "w": "http://www.labsmedia.com/clickheat/index.html",
    "i": "ClickHeat.png"
  },
  "ClickTale": {
    "d": "ClickTale is a SaaS solution enabling organisations to gain visual in-page analytics.",
    "w": "http://www.clicktale.com",
    "i": "ClickTale.png"
  },
  "Clickbank": {
    "w": "https://www.clickbank.com/",
    "i": "Clickbank.svg"
  },
  "Clicky": {
    "d": "Clicky is web an analytics tool which helps you to get real-time analysis including spy view.",
    "w": "http://getclicky.com",
    "i": "Clicky.png"
  },
  "ClientJS": {
    "d": "ClientJS is a JavaScript library for generating browser fingerprints, exposing all the browser data-points.",
    "w": "http://clientjs.org",
    "i": "ClientJS.png"
  },
  "Clinch": {
    "d": "Clinch delivers hyper-personalized creative experiences and consumer intelligence across all channels.",
    "w": "https://clinch.co/",
    "i": "Clinch.png"
  },
  "Clipboard.js": {
    "w": "https://clipboardjs.com/",
    "i": "Clipboard.js.svg"
  },
  "Clockwork": {
    "d": "Clockwork is a development tool for PHP available right in your browser.",
    "w": "https://github.com/underground-works/clockwork-app",
    "i": "default.svg"
  },
  "CloudCart": {
    "w": "http://cloudcart.com",
    "i": "cloudcart.svg"
  },
  "CloudSuite": {
    "w": "https://cloudsuite.com",
    "i": "CloudSuite.svg"
  },
  "Cloudbeds": {
    "d": "Cloudbeds is a cloud-based hotel management platform which includes tools for managing reservations, availability, rates, distribution channels, payments, guests, housekeeping, and more.",
    "w": "https://www.cloudbeds.com",
    "i": "Cloudbeds.svg"
  },
  "Cloudera": {
    "d": "Cloudera is a software platform for data engineering, data warehousing, machine learning and analytics that runs in the cloud or on-premises.",
    "w": "http://www.cloudera.com",
    "i": "Cloudera.png"
  },
  "Cloudflare": {
    "d": "Cloudflare is a web-infrastructure and website-security company, providing content-delivery-network services, DDoS mitigation, Internet security, and distributed domain-name-server services.",
    "w": "http://www.cloudflare.com",
    "i": "CloudFlare.svg"
  },
  "Cloudflare Bot Management": {
    "d": "Cloudflare bot management solution identifies and mitigates automated traffic to protect websites from bad bots.",
    "w": "https://www.cloudflare.com/en-gb/products/bot-management/",
    "i": "CloudFlare.svg"
  },
  "Cloudflare Browser Insights": {
    "d": "Cloudflare Browser Insights is a tool tool that measures the performance of websites from the perspective of users.",
    "w": "http://www.cloudflare.com",
    "i": "CloudFlare.svg"
  },
  "Cloudflare Rocket Loader": {
    "d": "Cloudflare Rocket Loader is responsible for prioritising over website's content by delaying the loading of Javascript until rendering.",
    "w": "https://support.cloudflare.com/hc/en-us/articles/200168056-Understanding-Rocket-Loader",
    "i": "CloudFlare.svg"
  },
  "Cloudflare Stream": {
    "d": "Cloudflare Stream is a serverless live and on-demand video streaming platform.",
    "w": "https://www.cloudflare.com/products/cloudflare-stream",
    "i": "CloudFlare.svg"
  },
  "Cloudflare Turnstile": {
    "d": "Turnstile is Cloudflare's smart CAPTCHA alternative.",
    "w": "https://www.cloudflare.com/products/turnstile",
    "i": "CloudFlare.svg"
  },
  "Cloudflare Workers": {
    "d": "Cloudflare Workers is a serverless execution environment that allows you to create entirely new applications or augment existing ones without configuring or maintaining infrastructure.",
    "w": "https://workers.cloudflare.com",
    "i": "Cloudflare Workers.svg"
  },
  "Cloudflare Zaraz": {
    "d": "Cloudflare Zaraz gives you complete control over third-party tools and services for your website, and allows you to offload them to Cloudflare’s edge, improving the speed and security of your website.",
    "w": "https://www.cloudflare.com/products/zaraz/",
    "i": "CloudFlare.svg"
  },
  "Cloudify.store": {
    "d": "Cloudify.store is a subscription-based platform that allows anyone to set up a hyperlocal quick commerce business.",
    "w": "https://cloudify.store",
    "i": "Cloudify.store.png"
  },
  "Cloudimage": {
    "d": "Cloudimage automates the transformation and optimisation of images on the fly and accelerates their distribution via the Content Delivery Network (CDN).",
    "w": "https://www.cloudimage.io",
    "i": "Cloudimage.svg"
  },
  "Cloudinary": {
    "d": "Cloudinary is an end-to-end image- and video-management solution for websites and mobile apps, covering everything from image and video uploads, storage, manipulations, optimisations to delivery.",
    "w": "https://cloudinary.com",
    "i": "Cloudinary.svg"
  },
  "Cloudways": {
    "d": "Cloudways offers managed cloud-hosting services for WordPress sites on a cloud server where multiple copies of your content will be replicated throughout your chosen data center.",
    "w": "https://www.cloudways.com",
    "i": "Cloudways.png"
  },
  "Cloverly": {
    "d": "Cloverly is an API integration for ethical ecommerce brands to help their customers offset the carbon footprint of their online transactions.",
    "w": "https://www.cloverly.com",
    "i": "Cloverly.svg"
  },
  "Cluep": {
    "d": "Cluep's artificially intelligent mobile ad platform targets people based on what they are sharing, how they are feeling and where they go in the physical world.",
    "w": "https://cluep.com/",
    "i": "Cluep.png"
  },
  "ClustrMaps Widget": {
    "d": "ClustrMaps widget is a visitor tracker, designed for general web and blog use.",
    "w": "https://clustrmaps.com/",
    "i": "ClustrMaps.svg"
  },
  "Clutch": {
    "d": "Clutch review widgets are stand-alone applications that you can embed on your website to show your dynamic ratings and reviews.",
    "w": "https://clutch.co/content/add-review-widget-your-website",
    "i": "clutch.svg"
  },
  "CoConstruct": {
    "w": "https://www.coconstruct.com",
    "i": "CoConstruct.png"
  },
  "CoRover": {
    "d": "CoRover is a conversational AI chatbot platform with proprietary cognitive AI technology.",
    "w": "https://corover.ai",
    "i": "CoRover.png"
  },
  "Coaster CMS": {
    "w": "https://www.coastercms.org",
    "i": "coaster-cms.png"
  },
  "Cococart": {
    "d": "Cococart is an ecommerce platform.",
    "w": "https://www.cococart.co",
    "i": "Cococart.png"
  },
  "CoconutSoftware": {
    "d": "Coconut is a cloud-based appointment scheduling solution designed for enterprise financial services organisations such as credit unions, retail banks and more.",
    "w": "https://www.coconutsoftware.com/",
    "i": "CoconutSoftware.svg"
  },
  "Cocos2d": {
    "d": "Cocos2d is a mature open source cross-platform game development framework.",
    "w": "https://www.cocos.com/en/cocos2dx",
    "i": "Cocos2d.png"
  },
  "CodeIgniter": {
    "w": "http://codeigniter.com",
    "i": "CodeIgniter.png"
  },
  "CodeMirror": {
    "d": "CodeMirror is a JavaScript component that provides a code editor in the browser.",
    "w": "http://codemirror.net",
    "i": "CodeMirror.png"
  },
  "CodeSandbox": {
    "d": "CodeSandbox is an online code editor and prototyping tool that makes creating and sharing web apps faster.",
    "w": "https://codesandbox.io/",
    "i": "CodeSandbox.svg"
  },
  "Coin Currency Converter": {
    "d": "Coin Currency Converter is an automatic currency conversion app for Shopify.",
    "w": "https://apps.shopify.com/coin",
    "i": "Coin Currency Converter.png"
  },
  "CoinHive": {
    "d": "Coinhive is a cryptocurrency mining service.",
    "w": "https://coinhive.com",
    "i": "CoinHive.svg"
  },
  "CoinHive Captcha": {
    "d": "Coinhive Captcha provides captcha service that is simple to integrate, where your users’ devices need to solve a number of hashes, adjustable by you, in order to login or post a comment to your site.",
    "w": "https://coinhive.com",
    "i": "CoinHive.svg"
  },
  "Coinbase Commerce": {
    "d": "Coinbase Commerce is a platform that enables merchants to accept cryptocurrency payments.",
    "w": "https://commerce.coinbase.com/",
    "i": "Coinbase.svg"
  },
  "Coinhave": {
    "d": "CoinHave is a cryptocurrency mining service.",
    "w": "https://coin-have.com/",
    "i": "coinhave.png"
  },
  "Coinimp": {
    "d": "CoinImp is a cryptocurrency mining service.",
    "w": "https://www.coinimp.com",
    "i": "coinimp.png"
  },
  "Colibri WP": {
    "d": "Colibri WP is a drag-and-drop WordPress website builder.",
    "w": "https://colibriwp.com",
    "i": "Colibri WP.png"
  },
  "Colis Privé": {
    "d": "Colis Privé is a private parcel delivery service provider specialised in last-mile delivery.",
    "w": "https://www.colisprive.fr",
    "i": "Colis Prive.svg"
  },
  "Colissimo": {
    "d": "Colissimo is a 'drop off' parcel delivery service.",
    "w": "https://www.colissimo.entreprise.laposte.fr",
    "i": "DPD.svg"
  },
  "ColorMag": {
    "d": "ColorMag theme is for creating news, magazine, newspaper and other kinds of publishing sites. Compatible with Elementor.",
    "w": "https://themegrill.com/themes/colormag/",
    "i": "ThemeGrill.png"
  },
  "ColorMeShop": {
    "d": "ColorMeShop is an ecommerce platform from Japan.",
    "w": "https://shop-pro.jp",
    "i": "colormeshop.png"
  },
  "Colorlib Activello": {
    "d": "Colorlib Activello is a clean, minimal multipurpose WordPress blog theme developer using the Bootstrap frontend framework making it fully responsive and mobile-friendly.",
    "w": "https://colorlib.com/wp/themes/activello",
    "i": "Colorlib.png"
  },
  "Colorlib Illdy": {
    "d": "Colorlib Illdy is a stunning multipurpose WordPress theme built based on Bootstrap frontend framework making it fully responsive and mobile friendly.",
    "w": "https://colorlib.com/wp/themes/illdy",
    "i": "Colorlib.png"
  },
  "Colorlib Shapely": {
    "d": "Colorlib Shapely is considered as a powerful, clean and beautiful full-width free WordPress theme.",
    "w": "https://colorlib.com/wp/themes/shapely",
    "i": "Colorlib.png"
  },
  "Colorlib Sparkling": {
    "d": "Colorlib Sparkling is a clean, modern, flat design WordPress theme developed using Bootstrap.",
    "w": "https://colorlib.com/wp/themes/sparkling",
    "i": "Colorlib.png"
  },
  "Colorlib Travelify": {
    "d": "Colorlib Travelify is a responsive, free, travel WordPress theme.",
    "w": "https://colorlib.com/wp/themes/travelify",
    "i": "Colorlib.png"
  },
  "Combeenation": {
    "d": "Combeenation is a powerful cloud-based configurator platform.",
    "w": "https://www.combeenation.com",
    "i": "Combeenation.png"
  },
  "Comm100": {
    "d": "Comm100 is a provider of customer service and communication products.",
    "w": "https://www.comm100.com",
    "i": "Comm100.svg"
  },
  "Commanders Act TagCommander": {
    "d": "Commanders Act TagCommander is a European company providing a tag management product designed to handle website tags.",
    "w": "https://www.commandersact.com/en/solutions/tagcommander/",
    "i": "Commanders Act.svg"
  },
  "Commanders Act TrustCommander": {
    "d": "Commanders Act TrustCommander is a consent management platform (CMP) which allows you to comply with the general data protection regulation (GDPR) regulation in terms of collecting consent.",
    "w": "https://www.commandersact.com/en/solutions/trustcommander/",
    "i": "Commanders Act.svg"
  },
  "Commerce Server": {
    "w": "http://commerceserver.net",
    "i": "Commerce Server.png"
  },
  "Commerce.js": {
    "d": "Commerce.js is an API-first ecommerce platform for developers and businesses.",
    "w": "https://www.commercejs.com",
    "i": "commercejs.png"
  },
  "Commerce7": {
    "d": "Commerce7 is an ecommerce platform for wineries.",
    "w": "https://commerce7.com",
    "i": "Commerce7.svg"
  },
  "Community Funded": {
    "d": "Community Funded is a digital fundraising and engagement platform.",
    "w": "https://www.communityfunded.com",
    "i": "Community Funded.png"
  },
  "Complianz": {
    "d": "Complianz is a GDPR/CCPA Cookie Consent plugin that supports GDPR, DSGVO, CCPA and PIPEDA with a conditional Cookie Notice and customized Cookie Policy based on the results of the built-in Cookie Scan.",
    "w": "https://complianz.io",
    "i": "Complianz.png"
  },
  "Concrete CMS": {
    "w": "https://www.concretecms.com/",
    "i": "Concrete CMS.svg"
  },
  "Conekta": {
    "d": "Conekta is a Mexican payment platform.",
    "w": "https://conekta.com",
    "i": "Conekta.svg"
  },
  "Confer With": {
    "d": "Confer With triggers live streaming video calls between shoppers and instore experts from a website, or outside a store.",
    "w": "https://conferwith.io",
    "i": "Confer With.svg"
  },
  "Congressus": {
    "d": "Congressus is a Dutch-language online application for member administration, financial management, communication and a linked website with webshop.",
    "w": "https://congressus.nl",
    "i": "Congressus.svg"
  },
  "Conjured": {
    "d": "Conjured provides Shopify brands with Shopify apps and custom development.",
    "w": "https://conjured.co",
    "i": "Conjured.png"
  },
  "Connectif": {
    "d": "Connectif is a marketing automation and personalisation data-first action platform, powered by AI.",
    "w": "https://connectif.ai",
    "i": "Connectif.svg"
  },
  "Constant Contact": {
    "d": "Constant Contact is a marketing automation and email marketing solution.",
    "w": "https://www.constantcontact.com",
    "i": "Constant Contact.svg"
  },
  "Contabo": {
    "d": "Contabo is a German hosting provider, previously known by the name Giga-International.",
    "w": "https://contabo.com",
    "i": "Contabo.svg"
  },
  "Contact Form 7": {
    "d": "Contact Form 7 is an WordPress plugin which can manage multiple contact forms. The form supports Ajax-powered submitting, CAPTCHA, Akismet spam filtering.",
    "w": "https://contactform7.com",
    "i": "Contact Form 7.png"
  },
  "Contao": {
    "d": "Contao is an open source CMS that allows you to create websites and scalable web applications.",
    "w": "http://contao.org",
    "i": "Contao.svg"
  },
  "Contenido": {
    "w": "http://contenido.org/en",
    "i": "Contenido.png"
  },
  "Contensis": {
    "w": "https://zengenti.com/en-gb/products/contensis",
    "i": "Contensis.png"
  },
  "ContentBox": {
    "w": "http://www.gocontentbox.org",
    "i": "ContentBox.png"
  },
  "ContentStudio": {
    "d": "ContentStudio is an integrated cloud-based social media management and content marketing solution.",
    "w": "https://contentstudio.io",
    "i": "ContentStudio.png"
  },
  "Contentful": {
    "d": "Contentful is an API-first content management platform to create, manage and publish content on any digital channel.",
    "w": "http://www.contentful.com",
    "i": "Contentful.svg"
  },
  "Contently": {
    "d": "Contently is a SaaS content marketing platform from the company of the same name headquartered in New York.",
    "w": "https://contently.com",
    "i": "Contently.png"
  },
  "Contentsquare": {
    "d": "Contentsquare is an enterprise-level UX optimisation platform.",
    "w": "https://contentsquare.com",
    "i": "Contentsquare.svg"
  },
  "Contentstack": {
    "d": "Contentstack is a headless CMS software designed to help businesses deliver personalised content experiences to audiences via multiple channels.",
    "w": "https://www.contentstack.com",
    "i": "Contentstack.png"
  },
  "Contlo": {
    "d": "Contlo is an AI powered marketing software.",
    "w": "https://www.contlo.com",
    "i": "Contlo.png"
  },
  "Conversant Consent Tool": {
    "d": "Conversant Consent Tool is a free tool to gain GDPR and ePD compliant consent for digital advertising.",
    "w": "https://www.conversantmedia.eu/consent-tool",
    "i": "Conversant.svg"
  },
  "Conversio": {
    "d": "Conversio is an optimisation and analytics agency.",
    "w": "https://conversio.com",
    "i": "Conversio.svg"
  },
  "Conversio App": {
    "d": "Conversio App is an optimisation and analytics app for Shopify stores.",
    "w": "https://apps.shopify.com/conversio",
    "i": "Conversio.svg"
  },
  "Convert": {
    "d": "Convert Experiences is an enterprise A/B testing and personalisation solution for conversion optimisation and data-driven decisions in high-traffic websites.",
    "w": "https://www.convert.com",
    "i": "Convert.png"
  },
  "ConvertFlow": {
    "d": "ConvertFlow is the all-in-one conversion marketing platform.",
    "w": "https://www.convertflow.com",
    "i": "ConvertFlow.svg"
  },
  "ConvertKit": {
    "d": "ConvertKit is an email marketing tool built for content creators.",
    "w": "https://convertkit.com",
    "i": "ConvertKit.svg"
  },
  "Convertcart": {
    "d": "ConvertCart helps online businesses deliver outstanding experiences to customers throughout their journey.",
    "w": "https://www.convertcart.com/",
    "i": "Convertcart.svg"
  },
  "Convertr": {
    "d": "Convertr is a Brazilian ecommerce platform, fashion specialist.",
    "w": "https://convertr.com.br",
    "i": "Convertr.svg"
  },
  "Convertri": {
    "d": "Convertri is a sales funnel building solution.",
    "w": "https://www.convertri.com",
    "i": "Convertri.svg"
  },
  "ConveyThis": {
    "d": "ConveyThis is a website translation service.",
    "w": "https://www.conveythis.com/",
    "i": "ConveyThis.png"
  },
  "Conviva": {
    "d": "Conviva is a census, continuous measurement and engagement platform for streaming media.",
    "w": "https://www.conviva.com",
    "i": "conviva.svg"
  },
  "Cookie Information": {
    "d": "Cookie Information is a privacy tech company that develops software that helps making company websites and mobile apps GDPR and ePrivacy compliant.",
    "w": "https://cookieinformation.com",
    "i": "Cookie Information.svg"
  },
  "Cookie Information plugin": {
    "d": "Cookie Information plugin helps your website stay compliant with GDPR using a free cookie pop-up, consent log, and more.",
    "w": "https://wordpress.org/plugins/wp-gdpr-compliance",
    "i": "Cookie Information.svg"
  },
  "Cookie Notice": {
    "d": "Cookie Notice provides a simple, customizable website banner that can be used to help your website comply with certain cookie consent requirements under the EU GDPR cookie law and CCPA regulations and includes seamless integration with Cookie Compliance to help your site comply with the latest updates to existing consent laws.",
    "w": "https://wordpress.org/plugins/cookie-notice",
    "i": "Cookie Notice.png"
  },
  "Cookie Script": {
    "d": "Cookie-Script automatically scans, categorizes and adds description to all cookies found on your website.",
    "w": "https://cookie-script.com",
    "i": "CookieScript.svg"
  },
  "CookieFirst": {
    "d": "CookieFirst is an GDPR and CCPA compliant consent management platform.",
    "w": "https://cookiefirst.com",
    "i": "CookieFirst.png"
  },
  "CookieHub": {
    "w": "https://www.cookiehub.com",
    "i": "CookieHub.png"
  },
  "CookieYes": {
    "w": "https://www.cookieyes.com/",
    "i": "cookieyes.svg"
  },
  "Cookiebot": {
    "d": "Cookiebot is a cloud-driven solution that automatically controls cookies and trackers, enabling full GDPR/ePrivacy and CCPA compliance for websites.",
    "w": "http://www.cookiebot.com",
    "i": "Cookiebot.svg"
  },
  "Cooladata": {
    "d": "Cooladata is a data warehouse and behavioral analytics platform designed for gaming, elearning, ecommerce, SaaS, and media companies.",
    "w": "https://www.cooladata.com",
    "i": "Cooladata.png"
  },
  "Coppermine": {
    "d": "Coppermine is an open-source image gallery application.",
    "w": "http://coppermine-gallery.net",
    "i": "Coppermine.png"
  },
  "CopyPoison": {
    "d": "Copypoison is a plagarism protection tool that protects content by replacing text with symbols that are visually similar.",
    "w": "https://copypoison.com/",
    "i": "Copypoison.png"
  },
  "CoreMedia Content Cloud": {
    "d": "CoreMedia Content Cloud is an agile content management and digital asset management platform.",
    "w": "https://www.coremedia.com",
    "i": "CoreMedia Content Cloud.svg"
  },
  "CoreUI": {
    "d": "CoreUI provides cloud hosting, web and mobile design, animations, wireframes, and UX testing services.",
    "w": "https://coreui.io",
    "i": "CoreUI.svg"
  },
  "Corebine": {
    "d": "Corebine is a content management system designed for Sports",
    "w": "https://corebine.com",
    "i": "Corebine.png"
  },
  "Correos": {
    "d": "Correos is a state-owned company responsible for providing postal service in Spain.",
    "w": "https://www.correos.es",
    "i": "Correos.svg"
  },
  "Correos Ecommerce": {
    "d": "Correos Ecommerce is an ecommerce platfrom from Spain.",
    "w": "https://www.correosecommerce.com",
    "i": "Correos.svg"
  },
  "Cosmoshop": {
    "w": "http://cosmoshop.de",
    "i": "Cosmoshop.png"
  },
  "Cotonti": {
    "w": "http://www.cotonti.com",
    "i": "Cotonti.png"
  },
  "CouchDB": {
    "w": "http://couchdb.apache.org",
    "i": "CouchDB.png"
  },
  "Countly": {
    "w": "https://count.ly",
    "i": "Countly.png"
  },
  "Coureon": {
    "d": "Coureon is a digital logistics carrier for international shipping.",
    "w": "https://www.coureon.com",
    "i": "Coureon.png"
  },
  "Coveo": {
    "d": "Coveo designs enterprise search and predictive insights platforms for businesses.",
    "w": "https://www.coveo.com/",
    "i": "Coveo.png"
  },
  "CoverManager": {
    "d": "CoverManager is a restaurant table booking widget.",
    "w": "https://www.covermanager.com",
    "i": "CoverManager.svg"
  },
  "Covet.pics": {
    "d": "Covet.pics is a customizable Shopify app for Instagram and Lookbook shoppable galleries.",
    "w": "https://covet.pics",
    "i": "Covet.pics.svg"
  },
  "Cowboy": {
    "d": "Cowboy is a small, fast, modular HTTP server written in Erlang.",
    "w": "https://github.com/ninenines/cowboy",
    "i": "Cowboy.png"
  },
  "Cozy AntiTheft": {
    "d": "Cozy AntiTheft helps you to protect your store content, images and texts from being stolen with a few simple clicks.",
    "w": "https://apps.shopify.com/cozy-antitheft-for-images-and-more",
    "i": "Cozy AntiTheft.png"
  },
  "CppCMS": {
    "w": "http://cppcms.com",
    "i": "CppCMS.png"
  },
  "Craft CMS": {
    "d": "Craft CMS is a content management system for building bespoke websites.",
    "w": "https://craftcms.com/",
    "i": "Craft CMS.svg"
  },
  "Craft Commerce": {
    "w": "https://craftcommerce.com",
    "i": "Craft CMS.svg"
  },
  "Cratejoy": {
    "d": "Cratejoy is a brand new ecommerce platform with a focus on subscription payments.",
    "w": "https://www.cratejoy.com",
    "i": "Cratejoy.png"
  },
  "Crazy Egg": {
    "w": "http://crazyegg.com",
    "i": "Crazy Egg.png"
  },
  "CreateJS": {
    "d": "CreateJS is a suite of modular libraries and tools which work together or independently to enable interactive content on open web technologies via HTML5.",
    "w": "https://code.createjs.com",
    "i": "CreateJS.svg"
  },
  "Creativ.eMail": {
    "d": "Creativ.eMail is a email editor WordPress plugin which simplifies email marketing campaign creation and pulls your WordPress blog posts, website images and WooCommerce products right into your email content.",
    "w": "https://www.creativemail.com",
    "i": "Creativ.eMail.svg"
  },
  "Crikle": {
    "d": "Crikle is a multichannel customer engagement software.",
    "w": "https://www.crikle.com",
    "i": "Crikle.svg"
  },
  "Crisp Live Chat": {
    "d": "Crisp Live Chat is a live chat solution with free and paid options.",
    "w": "https://crisp.chat/",
    "i": "Crisp Live Chat.svg"
  },
  "Criteo": {
    "d": "Criteo provides personalised retargeting that works with Internet retailers to serve personalised online display advertisements to consumers who have previously visited the advertiser's website.",
    "w": "http://criteo.com",
    "i": "Criteo.svg"
  },
  "Crobox": {
    "w": "https://crobox.com/",
    "i": "Crobox.svg"
  },
  "Crocoblock JetElements": {
    "d": "Crocoblock JetElements is an addon for Elementor that adds additional customisation options to the page builder.",
    "w": "https://crocoblock.com/plugins/jetelements",
    "i": "Crocoblock.svg"
  },
  "Cross Pixel": {
    "d": "Cross Pixel is an advertising platform through which advertisers can leverage the marriage of partner audience synergies with the power of retargeting.",
    "w": "http://crosspixel.net",
    "i": "Cross Pixel.png"
  },
  "Cross Sell": {
    "d": "Cross Sell provide recommendations solution for Shopify based sites.",
    "w": "https://csell.io/",
    "i": "CrossSell.png"
  },
  "CrossBox": {
    "d": "CrossBox is a webmail client.",
    "w": "https://crossbox.io",
    "i": "CrossBox.png"
  },
  "CrownPeak": {
    "d": "CrownPeak is a cloud-based Digital Experience Management (DEM) platform that is designed to in the management of digital experiences across multiple touch-points, especially for marketing and a freer IT architecture.",
    "w": "http://www.crownpeak.com",
    "i": "CrownPeak.png"
  },
  "Cryout Creations Bravada": {
    "d": "Bravada is an unparalleled fullscreen WordPress theme created by Cryout Creations.",
    "w": "https://www.cryoutcreations.eu/wordpress-themes/bravada",
    "i": "Cryout Creations.svg"
  },
  "Cryout Creations Fluida": {
    "d": "Fluida is a modern, crystal clear and squeaky clean WordPress theme by Cryout Creations.",
    "w": "https://www.cryoutcreations.eu/wordpress-themes/fluida",
    "i": "Cryout Creations.svg"
  },
  "Cryout Creations Mantra": {
    "d": "Mantra is a do-it-yourself WordPress theme, featuring a pack of over 100 customization option created by Cryout Creations.",
    "w": "https://www.cryoutcreations.eu/wordpress-themes/mantra",
    "i": "Cryout Creations.svg"
  },
  "Cryout Creations Parabola": {
    "d": "Parabola is an fully responsive, clean and elegant design WordPress theme created by Cryout Creations.",
    "w": "https://www.cryoutcreations.eu/wordpress-themes/parabola",
    "i": "Cryout Creations.svg"
  },
  "Crypto-Loot": {
    "d": "Crypto-Loot is a browser based web miner for the uPlexa Blockchain.",
    "w": "https://crypto-loot.com/",
    "i": "Crypto-Loot.png"
  },
  "CubeCart": {
    "d": "CubeCart is a free ecommerce platform that businesses can use to build, manage, and market their online stores.",
    "w": "http://www.cubecart.com",
    "i": "CubeCart.png"
  },
  "Cubyn": {
    "d": "Cubyn is B2B logistics company headquartered in France.",
    "w": "https://www.cubyn.com",
    "i": "Cubyn.svg"
  },
  "Cufon": {
    "d": "Cufon is a tool used to overlap real text with an image.",
    "w": "http://cufon.shoqolate.com",
    "i": "Cufon.png"
  },
  "Custom Fonts": {
    "d": "Custom Fonts plugin helps you easily embed custom fonts files (woff2, woff, ttf, svg, eot, otf) easily in your WordPress website.",
    "w": "https://github.com/brainstormforce/custom-fonts",
    "i": "Custom Fonts.png"
  },
  "Customer.io": {
    "d": "Customer.io is an automated messaging platform for marketers.",
    "w": "https://customer.io/",
    "i": "Customer.io.svg"
  },
  "Customily": {
    "d": "Customily is an online product personalisation software.",
    "w": "https://www.customily.com",
    "i": "Customily.png"
  },
  "Cwicly": {
    "d": "Cwicly is an advanced professional design and block toolkit that integrates directly with the WordPress editor.",
    "w": "https://cwicly.com",
    "i": "Cwicly.png"
  },
  "Cxense": {
    "d": "Cxense was an AI-powered data management and intelligent personalisation platform.",
    "w": "https://www.cxense.com",
    "i": "Cxense.png"
  },
  "CyberChimps Responsive": {
    "d": "CyberChimps Responsive is a modern, lightweight, fully customizable, fast and responsive WordPress theme.",
    "w": "https://cyberchimps.com/responsive",
    "i": "CyberChimps.png"
  },
  "Cybersource": {
    "d": "Cybersource is an ecommerce credit card payment system solution.",
    "w": "https://www.cybersource.com/",
    "i": "cybersource.png"
  },
  "Czater": {
    "d": "Czater is an live chat solution with extended CRM and videochat features.",
    "w": "https://www.czater.pl",
    "i": "Czater.svg"
  },
  "cPanel": {
    "d": "cPanel is a web hosting control panel. The software provides a graphical interface and automation tools designed to simplify the process of hosting a website.",
    "w": "http://www.cpanel.net",
    "i": "cPanel.png"
  },
  "cState": {
    "d": "cState is an open-source static (serverless) status page.",
    "w": "https://github.com/cstate/cstate",
    "i": "cState.svg"
  },
  "cdnjs": {
    "d": "cdnjs is a free distributed JS library delivery service.",
    "w": "https://cdnjs.com",
    "i": "cdnjs.svg"
  },
  "cgit": {
    "d": "cgit is a web interface (cgi) for Git repositories, written in C. licensed under GPLv2.",
    "w": "http://git.zx2c4.com/cgit",
    "i": "cgit.png"
  },
  "clickio": {
    "d": "Clickio Consent Tool collects and communicates consent both to IAB Framework vendors and to Google Ads products.",
    "w": "http://www.gdpr.clickio.com/",
    "i": "clickio.png"
  },
  "comScore": {
    "d": "comScore is an American media measurement and analytics company providing marketing data and analytics to enterprises; media and advertising agencies; and publishers.",
    "w": "http://comscore.com",
    "i": "comScore.svg"
  },
  "commercelayer": {
    "w": "https://commercelayer.io",
    "i": "commercelayer.svg"
  },
  "commercetools": {
    "d": "commercetools is a headless commerce platform.",
    "w": "https://commercetools.com",
    "i": "commercetools.svg"
  },
  "core-js": {
    "d": "core-js is a modular standard library for JavaScript, with polyfills for cutting-edge ECMAScript features.",
    "w": "https://github.com/zloirock/core-js",
    "i": "core-js.png"
  },
  "crypto-js": {
    "d": "crypto-js is a JavaScript library of crypto standards.",
    "w": "https://github.com/brix/crypto-js",
    "i": "default.svg"
  },
  "D3": {
    "d": "D3.js is a JavaScript library for producing dynamic, interactive data visualisations in web browsers.",
    "w": "http://d3js.org",
    "i": "D3.png"
  },
  "DDoS-Guard": {
    "d": "DDoS-Guard is a Russian Internet infrastructure company which provides DDoS protection, content delivery network services, and web hosting services.",
    "w": "https://ddos-guard.net",
    "i": "DDoS-Guard.svg"
  },
  "DERAK.CLOUD": {
    "w": "https://derak.cloud",
    "i": "DerakCloud.png"
  },
  "DHL": {
    "d": "DHL is an international courier, package delivery and express mail service, which is a division of the German logistics firm Deutsche Post.",
    "w": "https://www.dhl.com",
    "i": "DHL.svg"
  },
  "DHTMLX": {
    "d": "DHTMLX specialises in building JavaScript UI libraries for project management, event planning, big data visualisation, and reporting.",
    "w": "http://dhtmlx.com",
    "i": "DHTMLX.png"
  },
  "DM Polopoly": {
    "d": "DM Polopoly is a web content management solution focused on enhancing the user experience built by Atex.",
    "w": "http://www.atex.com/products/dm-polopoly",
    "i": "DM Polopoly.png"
  },
  "DNN": {
    "w": "https://www.dnnsoftware.com/",
    "i": "DNN.svg"
  },
  "DPD": {
    "d": "DPD is an international parcel delivery service for sorter compatible parcels.",
    "w": "https://www.dpd.com",
    "i": "DPD.svg"
  },
  "DPlayer": {
    "d": "DPlayer is an HTML 5 video player that supports pop-up.",
    "w": "https://dplayer.js.org",
    "i": "DPlayer.png"
  },
  "DTScout": {
    "d": "DTScout is a marketing data intelligence software.",
    "w": "https://www.dtscout.com",
    "i": "DTScout.png"
  },
  "DX": {
    "d": "DX (also known as DX Freight) is a British mail, courier and logistics company.",
    "w": "https://www.dxdelivery.com",
    "i": "DX.svg"
  },
  "DX1": {
    "d": "DX1 is an entirely cloud-based dealership management system for the motorcycle and powersports industry. Offering DMS, website, CRM and marketing tools.",
    "w": "https://www.dx1app.com",
    "i": "DX1.png"
  },
  "Dachser": {
    "d": "Dachser is a German freight company.",
    "w": "https://www.dachser.com",
    "i": "Dachser.svg"
  },
  "Daily Deals": {
    "d": "Daily Deals is a flash sale, limited-time discounts, countdown timers, and sales analytics solution.",
    "w": "https://dailydeals.ai",
    "i": "Daily Deals.svg"
  },
  "DailyKarma": {
    "d": "DailyKarma is a turnkey cause marketing solutions for ecommerce merchants.",
    "w": "https://www.dailykarma.com",
    "i": "DailyKarma.png"
  },
  "Dailymotion": {
    "d": "Dailymotion is a French video-sharing technology platform.",
    "w": "https://www.dailymotion.com",
    "i": "Dailymotion.svg"
  },
  "Dancer": {
    "d": "Mono.net delivers the a Software-as-a-Service (SaaS) platform to build and sell websites and other digital products.",
    "w": "http://perldancer.org",
    "i": "Dancer.png"
  },
  "Danneo CMS": {
    "w": "http://danneo.com",
    "i": "Danneo CMS.png"
  },
  "Daphne": {
    "w": "https://github.com/django/daphne",
    "i": "daphne.svg"
  },
  "Darkmode.js": {
    "d": "Darkmode.js is a JavaScript library that enables an HTML element to switch between CSS themes.",
    "w": "https://github.com/sandoche/Darkmode.js",
    "i": "default.svg"
  },
  "Dart": {
    "d": "Dart is an open-source, general-purpose, object-oriented programming language developed by Google.",
    "w": "https://dart.dev",
    "i": "Dart.svg"
  },
  "Darwin": {
    "d": "Darwin is the open-source operating system from Apple that forms the basis for macOS.",
    "w": "https://opensource.apple.com",
    "i": "Apple.svg"
  },
  "DataLife Engine": {
    "w": "https://dle-news.ru",
    "i": "DataLife Engine.svg"
  },
  "DataMilk": {
    "d": "DataMilk is an AI tool which autonomously optimises customer UI for ecommerce customers in order to increase conversions.",
    "w": "https://www.datamilk.ai",
    "i": "DataMilk.svg"
  },
  "DataTables": {
    "d": "DataTables is a plug-in for the jQuery Javascript library adding advanced features like pagination, instant search, themes, and more to any HTML table.",
    "w": "http://datatables.net",
    "i": "DataTables.png"
  },
  "Datadog": {
    "d": "Datadog is a SaaS-based monitoring and analytics platform for large-scale applications and infrastructure.",
    "w": "https://www.datadoghq.com",
    "i": "Datadog.svg"
  },
  "Datadome": {
    "w": "https://datadome.co/",
    "i": "datadome.png"
  },
  "DatoCMS": {
    "d": "DatoCMS is a cloud-based headless Content as a service (CaaS) platform created to work with static websites, mobile apps and server-side applications of any kind.",
    "w": "https://www.datocms.com",
    "i": "DatoCMS.svg"
  },
  "Day.js": {
    "w": "https://github.com/iamkun/dayjs",
    "i": "Day.js.svg"
  },
  "Dealer Spike": {
    "d": "Dealer Spike is a digital marketing and advertising company focused that helps dealers grow their business.",
    "w": "https://www.dealerspike.com",
    "i": "Dealer Spike.svg"
  },
  "Debian": {
    "d": "Debian is a Linux software which is a free open-source software.",
    "w": "https://debian.org",
    "i": "Debian.png"
  },
  "Decibel": {
    "d": "Decibel is a behavioral analysis solution that helps users gain actionable insights about their digital audience.",
    "w": "https://decibel.com",
    "i": "Decibel.svg"
  },
  "DedeCMS": {
    "w": "http://dedecms.com",
    "i": "DedeCMS.png"
  },
  "Delacon": {
    "d": "Delacon provides Australian businesses with Call Tracking, Call Management and Speech Analytics solutions.",
    "w": "https://www.delacon.com.au",
    "i": "Delacon.png"
  },
  "Delivengo": {
    "d": "Delivengo is an international shipping service powered by La Poste.",
    "w": "https://mydelivengo.laposte.fr/",
    "i": "La Poste.svg"
  },
  "Deliverr": {
    "d": "Deliverr is a fulfilment service that facilitates shipping services for ecommerce businesses.",
    "w": "https://deliverr.com",
    "i": "Deliverr.svg"
  },
  "Demandbase": {
    "d": "Demandbase is a targeting and personalization platform for business-to-business companies.",
    "w": "https://www.demandbase.com",
    "i": "demandbase.svg"
  },
  "Deno": {
    "d": "A modern runtime for JavaScript and TypeScript.",
    "w": "https://deno.land",
    "i": "deno.svg"
  },
  "Deno Deploy": {
    "d": "Deno Deploy is a distributed system that runs JavaScript, TypeScript, and WebAssembly at the edge, worldwide.",
    "w": "https://deno.land/",
    "i": "deno.svg"
  },
  "Depict": {
    "d": "Depict is an ecommerce personalisation solution for fashion.",
    "w": "https://depict.ai",
    "i": "Depict.svg"
  },
  "DeskPro": {
    "d": "DeskPro is multi channel helpdesk software for managing customer and citizen requests via email, forms, chat, social and voice.",
    "w": "https://www.deskpro.com",
    "i": "DeskPro.svg"
  },
  "DeskPro Chat": {
    "d": "DeskPro is multi channel helpdesk software for managing customer and citizen requests via email, forms, chat, social and voice.",
    "w": "https://www.deskpro.com/product/chat",
    "i": "DeskPro.svg"
  },
  "Deta": {
    "d": "Deta is a cloud platform for building and deploying apps.",
    "w": "https://deta.sh",
    "i": "deta.svg"
  },
  "Detectify": {
    "d": "Detectify is an automated scanner that checks your web application for vulnerabilities.",
    "w": "https://detectify.com/",
    "i": "Detectify.svg"
  },
  "Deutsche Post": {
    "d": "Deutsche Post is a German multinational package delivery and supply chain management company in Germany.",
    "w": "https://www.deutschepost.de",
    "i": "Deutsche Post.svg"
  },
  "DiamondCDN": {
    "d": "DiamondCDN is a CDN with DDoS mitigation for free.",
    "w": "https://diamondcdn.com",
    "i": "DiamondCDN.png"
  },
  "Dianomi": {
    "d": "Dianomi is an advertiser campaign management software for financial services, premium lifestyle, technology and corporate sectors.",
    "w": "https://www.dianomi.com",
    "i": "Dianomi.svg"
  },
  "Didomi": {
    "d": "Didomi is a consent management platform helping brands and businesses collect, store and leverage their customer consents.",
    "w": "https://www.didomi.io/en/consent-preference-management",
    "i": "didomi.png"
  },
  "Digest": {
    "d": "Digest is an authentication method based on a MD5 hash used by web servers.",
    "w": "https://tools.ietf.org/html/rfc7616"
  },
  "DigiCert": {
    "w": "https://www.digicert.com/",
    "i": "DigiCert.svg"
  },
  "Digismoothie Candy Rack": {
    "d": "Digismoothie Candy Rack is an upsell app for Shopify which allow merchants to offer custom services or bundle products.",
    "w": "https://www.digismoothie.com/apps/candy-rack",
    "i": "Digismoothie.svg"
  },
  "Digistore24": {
    "d": "Digistore24 is a German digital reselling and affiliate marketing platform.",
    "w": "https://www.digistore24.com",
    "i": "Digistore24.svg"
  },
  "Digital Showroom": {
    "d": "Digital Showroom is an ecommerce platform.",
    "w": "https://digitalshowroom.in",
    "i": "Digital Showroom.png"
  },
  "DigitalRiver": {
    "d": "Digital River provides global ecommerce, payments and marketing services.",
    "w": "https://www.digitalriver.com",
    "i": "DigitalRiver.svg"
  },
  "DirectAdmin": {
    "d": "DirectAdmin is a graphical web-based web hosting control panel designed to make administration of websites easier.",
    "w": "https://www.directadmin.com",
    "i": "DirectAdmin.png"
  },
  "Directus": {
    "d": "Directus is a free and open-source headless CMS framework for managing custom SQL-based databases.",
    "w": "https://directus.io",
    "i": "Directus.svg"
  },
  "Discourse": {
    "d": "Discourse is an open-source internet forum and mailing list management software application.",
    "w": "https://discourse.org",
    "i": "Discourse.png"
  },
  "Discuz! X": {
    "d": "Discuz! X is an internet forum software written in PHP and supports MySQL and PostgreSQL databases.",
    "w": "http://www.discuz.net",
    "i": "Discuz X.png"
  },
  "Disqus": {
    "d": "Disqus is a worldwide blog comment hosting service for web sites and online communities that use a networked platform.",
    "w": "https://disqus.com",
    "i": "Disqus.svg"
  },
  "Distributor": {
    "d": "Distributor is a WordPress plugin that helps distribute and reuse content across your websites.",
    "w": "https://distributorplugin.com",
    "i": "distributor.svg"
  },
  "District M": {
    "d": "District M is a programmatic advertising exchange.",
    "w": "https://districtm.net",
    "i": "District M.svg"
  },
  "Dito": {
    "d": "Dito is a tool that centralizes and manages the relationship between brands and their customers.",
    "w": "https://www.dito.com.br",
    "i": "Dito.svg"
  },
  "Divi": {
    "d": "Divi is a WordPress Theme and standalone WordPress plugin from Elegant themes that allows users to build websites using the visual drag-and-drop Divi page builder.",
    "w": "https://www.elegantthemes.com/gallery/divi",
    "i": "Divi.svg"
  },
  "DivideBuy": {
    "d": "Dividebuy provides retailer financing solutions.",
    "w": "https://dividebuy.co.uk/",
    "i": "DivideBuy.png"
  },
  "Divido": {
    "d": "Divio is a Buy now pay later solution. Divido provided whitelabel platform connects lenders, retailers and channel partners at the point of sale",
    "w": "https://www.divido.com/",
    "i": "Divido.png"
  },
  "Django": {
    "d": "Django is a Python-based free and open-source web application framework.",
    "w": "https://djangoproject.com",
    "i": "Django.png"
  },
  "Django CMS": {
    "d": "Django CMS is a free and open source content management system platform for publishing content on the World Wide Web and intranets.",
    "w": "https://www.django-cms.org",
    "i": "Django CMS.png"
  },
  "DocFX": {
    "d": "DocFX is a tool for building and publishing API documentation for .NET projects.",
    "w": "https://github.com/dotnet/docfx",
    "i": "DocFX.svg"
  },
  "Docker": {
    "d": "Docker is a tool designed to make it easier to create, deploy, and run applications by using containers.",
    "w": "https://www.docker.com/",
    "i": "Docker.svg"
  },
  "DocuSign": {
    "d": "DocuSign allows organisations to manage electronic agreements.",
    "w": "https://www.docusign.com",
    "i": "DocuSign.svg"
  },
  "Docusaurus": {
    "d": "Docusaurus is a tool for teams to publish documentation websites.",
    "w": "https://docusaurus.io/",
    "i": "docusaurus.svg"
  },
  "Dojo": {
    "w": "https://dojotoolkit.org",
    "i": "Dojo.png"
  },
  "Dokan": {
    "d": "Dokan offers a multi-vendor marketplace solution built on top of wordpress and woocommerce.",
    "w": "https://wedevs.com/dokan",
    "i": "Dokan.svg"
  },
  "Dokeos": {
    "d": "Dokeos is an e-learning and course management web application.",
    "w": "https://dokeos.com",
    "i": "Dokeos.png"
  },
  "DokuWiki": {
    "d": "DokuWiki is a free open-source wiki software.",
    "w": "https://www.dokuwiki.org",
    "i": "DokuWiki.png"
  },
  "DomainFactory": {
    "d": "DomainFactory has been operating as a web hosting company. It is owned by GoDaddy and targets businesses in Austria and Germany.",
    "w": "https://www.df.eu",
    "i": "DomainFactory.png"
  },
  "Dominate WooCommerce": {
    "d": "Dominate WooCommerce is a cloud-based checkout-page which supports PayPal Smart buttons for Venmo, PayPal Credit, and other payment methods.",
    "w": "https://www.dominate.co/woocommerce",
    "i": "Dominate.png"
  },
  "DonorPerfect": {
    "d": "DonorPerfect is a fundraising management software.",
    "w": "https://www.donorperfect.com",
    "i": "DonorPerfect.svg"
  },
  "Donorbox": {
    "d": "Donorbox is a US-based technology company. It offers an online fundraising software that allows individuals and nonprofit organisations to receive donations over the Internet.",
    "w": "https://donorbox.org",
    "i": "Donorbox.svg"
  },
  "Doofinder": {
    "d": "Doofinder is a search site solution that enables users to include advanced and smart search engine capabilities in their ecommerce website.",
    "w": "https://www.doofinder.com",
    "i": "Doofinder.svg"
  },
  "Doppler": {
    "d": "Doppler is an email marketing and transactional email service.",
    "w": "https://www.fromdoppler.com",
    "i": "Doppler.svg"
  },
  "Doppler Forms": {
    "d": "The Doppler Forms plugin allows you to create fully customised subscription forms that you can add to your website or blog.",
    "w": "https://wordpress.org/plugins/doppler-form/",
    "i": "Doppler.svg"
  },
  "Doppler for WooCommerce": {
    "d": "The Doppler for WooCommerce plugin adds submit your WooCommerce customers and buyers to a Doppler List.",
    "w": "https://wordpress.org/plugins/doppler-for-woocommerce/",
    "i": "Doppler.svg"
  },
  "Dotclear": {
    "w": "http://dotclear.org",
    "i": "Dotclear.png"
  },
  "Dotdigital": {
    "d": "Dotdigital is an all-in-one cloud-based customer engagement multichannel marketing platform.",
    "w": "https://dotdigital.com",
    "i": "Dotdigital.svg"
  },
  "Dotdigital Chat": {
    "d": "Dotdigital Chat is a smart, customisable widget that makes it easy for shoppers to communicate in real-time with members of your team.",
    "w": "https://dotdigital.com",
    "i": "Dotdigital.svg"
  },
  "DoubleClick Ad Exchange (AdX)": {
    "d": "DoubleClick Ad Exchange is a real-time marketplace to buy and sell display advertising space.",
    "w": "http://www.doubleclickbygoogle.com/solutions/digital-marketing/ad-exchange/",
    "i": "DoubleClick.svg"
  },
  "DoubleClick Campaign Manager (DCM)": {
    "w": "http://www.doubleclickbygoogle.com/solutions/digital-marketing/campaign-manager/",
    "i": "DoubleClick.svg"
  },
  "DoubleClick Floodlight": {
    "w": "http://support.google.com/ds/answer/6029713?hl=en",
    "i": "DoubleClick.svg"
  },
  "DoubleClick for Publishers (DFP)": {
    "d": "DoubleClick for Publishers (DFP) is a hosted ad serving platform that streamlines your ad management.",
    "w": "http://www.google.com/dfp",
    "i": "DoubleClick.svg"
  },
  "DoubleVerify": {
    "d": "DoubleVerify is a software platform for digital media measurement, data, and analytics.",
    "w": "https://doubleverify.com",
    "i": "DoubleVerify.svg"
  },
  "Dovetale": {
    "d": "Dovetale (Acquired by Shopify) helps e-commerce stores recruit, manage, & grow their sales with communities of people who love their products.",
    "w": "https://dovetale.com/",
    "i": "Dovetale.png"
  },
  "Download Monitor": {
    "d": "Download Monitor is a plugin for selling, uploading and managing downloads, tracking downloads and displaying links.",
    "w": "https://www.download-monitor.com",
    "i": "Download Monitor.png"
  },
  "Doxygen": {
    "d": "Doxygen is a documentation generator, a tool for writing software reference documentation.",
    "w": "http://www.doxygen.nl/",
    "i": "Doxygen.png"
  },
  "Draft.js": {
    "d": "Draft.js is a JavaScript rich text editor framework, built for React.",
    "w": "https://draftjs.org/",
    "i": "draftjs.png"
  },
  "Draftpress HFCM": {
    "d": "Header Footer Code Manager by Draftpress is a easy interface to add snippets to the header or footer or above or below the content of your page.",
    "w": "https://draftpress.com/products/header-footer-code-manager-pro/",
    "i": "Draftpress.png"
  },
  "Dragon": {
    "d": "Dragon is a general-purpose programming language.",
    "w": "https://dragon-lang.org",
    "i": "Dragon.png"
  },
  "Drapr": {
    "d": "Drapr is an ecommerce startup and online application based on technology that enables customers to quickly create 3D avatars and virtually try on clothing.",
    "w": "https://www.drapr.com",
    "i": "Drapr.png"
  },
  "DreamApply": {
    "d": "DreamApply is a specialised student application management system designed with and for education institutions.",
    "w": "https://dreamapply.com",
    "i": "DreamApply.png"
  },
  "DreamHost": {
    "d": "DreamHost is a Los Angeles-based web hosting provider and domain name registrar.",
    "w": "https://www.dreamhost.com",
    "i": "DreamHost.svg"
  },
  "DreamWeaver": {
    "d": "Dreamweaver is a development tool for creating, publishing, and managing websites and mobile content.",
    "w": "https://www.adobe.com/products/dreamweaver.html",
    "i": "DreamWeaver.png"
  },
  "Dreamdata": {
    "d": "Dreamdata is a B2B revenue attribution platform.",
    "w": "https://dreamdata.io",
    "i": "Dreamdata.svg"
  },
  "Drift": {
    "d": "Drift is a conversational marketing platform.",
    "w": "https://www.drift.com/",
    "i": "Drift.svg"
  },
  "Drip": {
    "d": "Drip is a marketing automation platform built for ecommerce.",
    "w": "https://www.drip.com",
    "i": "Drip.svg"
  },
  "Drop A Hint": {
    "d": "Drop A Hint is an Shopify app which help share hints via email, SMS, WhatsApp and messengers.",
    "w": "https://apps.shopify.com/drop-a-hint-v2",
    "i": "Drop A Hint.png"
  },
  "DropInBlog": {
    "d": "DropInBlog is a remotely hosted, cloud based platform that is designed to embed a blog into your html site.",
    "w": "https://dropinblog.com",
    "i": "DropInBlog.png"
  },
  "Dropbox": {
    "w": "https://www.dropbox.com",
    "i": "Dropbox.svg"
  },
  "Dropzone": {
    "d": "Dropzone is a JavaScript library that turns any HTML element into a dropzone.",
    "w": "https://www.dropzone.dev",
    "i": "Dropzone.svg"
  },
  "Droxit": {
    "d": "Droxit is an automated web accessibility solution.",
    "w": "https://www.droxit.com",
    "i": "Droxit.png"
  },
  "Droz Bot": {
    "d": "Droz Bot is a multi-channel, customisable chatbot designed to help brands provide customer service across commonly used social apps.",
    "w": "https://meudroz.com/droz-bot/",
    "i": "Droz.svg"
  },
  "Drupal": {
    "d": "Drupal is a free and open-source web content management framework.",
    "w": "https://www.drupal.org/",
    "i": "Drupal.svg"
  },
  "Drupal Commerce": {
    "d": "Drupal Commerce is open-source ecommerce software that augments the content management system Drupal.",
    "w": "http://drupalcommerce.org",
    "i": "Drupal Commerce.png"
  },
  "Drupal Multisite": {
    "d": "Drupal Multisite enables separate, independent sites to be served from a single codebase.",
    "w": "https://www.drupal.org/docs/multisite-drupal",
    "i": "Drupal.svg"
  },
  "Duda": {
    "d": "Duda is a web design platform for companies that offer web design services.",
    "w": "https://www.duda.co/website-builder",
    "i": "duda.png"
  },
  "Duel": {
    "d": "Duel is a customer advocacy marketing platform.",
    "w": "https://www.duel.tech",
    "i": "Duel.svg"
  },
  "Dukaan": {
    "d": "Dukaan is a hosted ecommerce solution made in India.",
    "w": "https://mydukaan.io",
    "i": "Dukaan.svg"
  },
  "Duopana": {
    "d": "Duopana is a platform for creating online communities, blogs and managing collaborative content.",
    "w": "https://duopana.com",
    "i": "Duopana.svg"
  },
  "Dynamic Yield": {
    "d": "Dynamic Yield is a provider of automated conversion optimisation tools for marketers and retailers.",
    "w": "https://www.dynamicyield.com",
    "i": "DynamicYield.svg"
  },
  "Dynamicweb": {
    "d": "Dynamicweb is a all-in-one platform for content management, ecommerce, digital marketing​, product information management (PIM) and integration.",
    "w": "http://www.dynamicweb.dk",
    "i": "Dynamicweb.svg"
  },
  "Dynatrace": {
    "d": "Dynatrace is a technology company that produces a software intelligence platform based on artificial intelligence to monitor and optimise application performance and development, IT infrastructure, and user experience for businesses and government agencies throughout the world.",
    "w": "https://www.dynatrace.com",
    "i": "Dynatrace.svg"
  },
  "Dynatrace RUM": {
    "d": "Dynatrace RUM is a AI powered, full stack, automated real user monutoring platform built by Dynatrace.",
    "w": "https://www.dynatrace.com/platform/real-user-monitoring",
    "i": "Dynatrace.svg"
  },
  "Dyte": {
    "d": "Dyte is a developer-friendly, real-time audio and video communication software development kit (SDK).",
    "w": "https://dyte.io",
    "i": "Dyte.svg"
  },
  "daisyUI": {
    "d": "daisyUI is a customisable Tailwind CSS component library that prevents verbose markup in frontend applications. With a focus on customising and creating themes for user interfaces, daisyUI uses pure CSS and Tailwind utility classes, allowing developers to write clean HTML.",
    "w": "https://daisyui.com",
    "i": "daisyUI.png"
  },
  "db-ip": {
    "d": "dbip is a geolocation API and database.",
    "w": "https://db-ip.com/",
    "i": "db-ip.png"
  },
  "decimal.js": {
    "w": "https://mikemcl.github.io/decimal.js/",
    "i": "decimal.js.png"
  },
  "deepMiner": {
    "w": "https://github.com/deepwn/deepMiner",
    "i": "deepminer.png"
  },
  "EC-CUBE": {
    "d": "EC-CUBE is an open source package used to build ecommerce sites.",
    "w": "http://www.ec-cube.net",
    "i": "EC-CUBE.svg"
  },
  "ECharts": {
    "d": "ECharts is an open-source JavaScript visualisation library.",
    "w": "https://echarts.apache.org/",
    "i": "echarts.png"
  },
  "EKM": {
    "d": "EKM is an all-in-one online store builder, with the company based in the UK.",
    "w": "https://www.ekm.com",
    "i": "EKM.png"
  },
  "ELOG": {
    "w": "http://midas.psi.ch/elog",
    "i": "ELOG.png"
  },
  "ELOG HTTP": {
    "w": "http://midas.psi.ch/elog",
    "i": "ELOG.png"
  },
  "EPrints": {
    "w": "http://www.eprints.org",
    "i": "EPrints.png"
  },
  "ERPNext": {
    "d": "ERPNext is a free and open-source integrated Enterprise Resource Planning (ERP) software developed by Frappe Technologies.",
    "w": "https://erpnext.com",
    "i": "ERPNext.png"
  },
  "ESW": {
    "d": "ESW (eShopWorld) is a company providing payments, shipping, and delivery services focusing on cross-border ecommerce.",
    "w": "http://esw.com",
    "i": "ESW.svg"
  },
  "EWWW Image Optimizer": {
    "d": "EWWW Image Optimizer is an image optimisation WordPress plugin designed to improve the performance of your website.",
    "w": "https://github.com/nosilver4u/ewww-image-optimizer",
    "i": "EWWW Image Optimizer.png"
  },
  "EX.CO": {
    "d": "EX.CO (formerly Playbuzz) is an online publishing platform for publishers, brand agencies, and individual content creators to create content in interactive formats such as polls, quizzes, lists, video snippets, slideshows, and countdowns.",
    "w": "https://ex.co",
    "i": "EX.CO.svg"
  },
  "Easy Hide PayPal": {
    "d": "Easy Hide PayPal hides PayPal button from product page, cart and checkout but keep PayPal as payment option in checkout.",
    "w": "https://apps.shopify.com/easyhide",
    "i": "Easy Hide PayPal.png"
  },
  "Easy Redirects": {
    "d": "Easy Redirects is a Shopify app built by Eastside, and part of the best Shopify Apps collection.",
    "w": "https://apps.shopify.com/easyredirects",
    "i": "Easy Redirects.png"
  },
  "EasyDigitalDownloads": {
    "d": "Easy Digital Downloads is a WordPress ecommerce plugin that focuses purely on digital products.",
    "w": "https://easydigitaldownloads.com",
    "i": "EasyDigitalDownloads.svg"
  },
  "EasyEngine": {
    "d": "EasyEngine is a command-line tool for the Nginx web servers to manage WordPress sites that are running on the LEMP Stack.",
    "w": "https://easyengine.io",
    "i": "EasyEngine.png"
  },
  "EasyStore": {
    "d": "EasyStore is a multi sales channel ecommerce platform.",
    "w": "https://www.easystore.co",
    "i": "EasyStore.svg"
  },
  "Easylog": {
    "d": "EasyLog is a logistics company based in Brazil.",
    "w": "http://www.easylog.com.br"
  },
  "Ebasnet": {
    "d": "Ebasnet is a web project creation and management platform in the cloud. It allows anyone to set up an online store or corporate website without prior IT knowledge.",
    "w": "https://ebasnet.com",
    "i": "Ebasnet.svg"
  },
  "EcForce": {
    "d": "EcForce is an all-in-one ecommerce platform with all the functions necessary for ecommerce, from landing-page creation to order and customer data management analysis.",
    "w": "https://ec-force.com",
    "i": "EcForce.png"
  },
  "Ecovium": {
    "d": "Ecovium is an end-to-end logistics company in Germany.",
    "w": "https://ecovium.com",
    "i": "Ecovium.svg"
  },
  "Ecwid": {
    "d": "Ecwid is a shopping cart plugin that turns any existing website into an online store.",
    "w": "https://www.ecwid.com/",
    "i": "ecwid.svg"
  },
  "EdgeCast": {
    "d": "EdgeCast is a content delivery network (CDN) that accelerated and delivers static content to users around the world.",
    "w": "http://www.edgecast.com",
    "i": "EdgeCast.png"
  },
  "Edgio": {
    "d": "Edgio is an integrated suite of Edge services, from Delivery to Compute.",
    "w": "https://edg.io",
    "i": "Edgio.svg"
  },
  "Editor.js": {
    "d": "Editor.js is a Javascript library which allows developers to implement a block base text editor with plugins on their page.",
    "w": "https://editorjs.io",
    "i": "Editor.js.png"
  },
  "Eggplant": {
    "d": "Eggplant is a software testing and monitoring company.",
    "w": "https://www.eggplantsoftware.com",
    "i": "Eggplant.svg"
  },
  "Ektron CMS": {
    "d": "Ektron CMS is developed on the Microsoft .NET framework and is 100% ASP.NET. In 2015 Ektron merged with EPiServer.",
    "w": "https://www.optimizely.com/ektron-cms",
    "i": "Optimizely.svg"
  },
  "Elastic APM": {
    "d": "Elastic APM offers free and open application performance monitoring.",
    "w": "https://www.elastic.co/apm",
    "i": "ElasticAPM.png"
  },
  "ElasticPress": {
    "d": "ElasticPress is a hosting service that connects your WordPress site to search hosting.",
    "w": "https://www.elasticpress.io/",
    "i": "elasticpress.svg"
  },
  "ElasticSuite": {
    "d": "ElasticSuite is a merchandising suite for Magento and OroCommerce.",
    "w": "https://elasticsuite.io",
    "i": "ElasticSuite.svg"
  },
  "Elasticsearch": {
    "d": "Elasticsearch is a search engine based on the Lucene library. It provides a distributed, multitenant-capable full-text search engine with an HTTP web interface and schema-free JSON documents.",
    "w": "https://www.elastic.co",
    "i": "Elasticsearch.svg"
  },
  "Elcodi": {
    "w": "http://elcodi.io",
    "i": "Elcodi.png"
  },
  "Elcom": {
    "d": "The Elcom Platform is a web content management and intranet portal software written in Microsoft ASP.NET and SQL Server by Elcom Technology.",
    "w": "https://www.elcom.com.au/",
    "i": "elcom.png"
  },
  "Eleanor CMS": {
    "w": "http://eleanor-cms.ru",
    "i": "Eleanor CMS.png"
  },
  "Element": {
    "d": "Element is a Matrix-based end-to-end encrypted messenger and secure collaboration app.",
    "w": "https://element.io",
    "i": "elementio.svg"
  },
  "Element UI": {
    "w": "https://element.eleme.io/",
    "i": "ElementUI.svg"
  },
  "Elementor": {
    "d": "Elementor is a website builder platform for professionals on WordPress.",
    "w": "https://elementor.com",
    "i": "Elementor.svg"
  },
  "Elementor Cloud": {
    "d": "Elementor Cloud is a platform for creating and hosting WordPress websites with Elementor.",
    "w": "https://elementor.com",
    "i": "Elementor.svg"
  },
  "Elementor Header & Footer Builder": {
    "d": "Elementor Header & Footer Builder is a simple yet powerful WordPress plugin that allows you to create a layout with Elementor and set it as.",
    "w": "https://github.com/brainstormforce/header-footer-elementor",
    "i": "Elementor Header & Footer Builder.svg"
  },
  "ElementsKit": {
    "d": "ElementsKit is an addon for Elementor that adds additional customisation options to the page builder.",
    "w": "https://wpmet.com/plugin/elementskit",
    "i": "elementskit.svg"
  },
  "Elevar": {
    "d": "Elevar is an official Shopify Plus Partner data collection and marketing monitoring tool.",
    "w": "https://www.getelevar.com",
    "i": "Elevar.svg"
  },
  "Eleventy": {
    "d": "Eleventy (11ty) a simpler static site generator.",
    "w": "https://www.11ty.dev",
    "i": "Eleventy.svg"
  },
  "Elfsight": {
    "d": "Elfsight is an all-in-one platform offering 70+ customisable widgets for websites.",
    "w": "https://elfsight.com",
    "i": "Elfsight.svg"
  },
  "Ellucian CRM Recruit": {
    "d": "Ellucian CRM Recruit is a comprehensive solution that supports your entire recruiting and admissions lifecycle.",
    "w": "https://www.ellucian.com/solutions/ellucian-crm-recruit",
    "i": "Ellucian CRM Recruit.svg"
  },
  "Elm": {
    "w": "https://elm-lang.org/",
    "i": "elm.svg"
  },
  "Elm-ui": {
    "w": "https://github.com/mdgriffith/elm-ui",
    "i": "elm.svg"
  },
  "Eloqua": {
    "d": "Eloqua is a Software-as-a-Service (SaaS) platform for marketing automation offered that aims to help B2B marketers and organisations manage marketing campaigns and sales lead generation.",
    "w": "http://eloqua.com",
    "i": "Oracle.svg"
  },
  "Emarsys": {
    "d": "Emarsys is a cloud-based B2C marketing platform.",
    "w": "https://emarsys.com/",
    "i": "Emarsys.svg"
  },
  "Ematic Solutions": {
    "d": "Ematic Solutions is part of Ematic Group and started to revolve around transforming email marketing into an ROI machine.",
    "w": "https://www.ematicsolutions.com",
    "i": "Ematic Solutions.svg"
  },
  "EmbedPlus": {
    "d": "EmbedPlus is a WordPress plugin for YouTube allows you to embed gallery, channel, playlist, or even live stream on your webpage.",
    "w": "https://www.embedplus.com",
    "i": "EmbedPlus.png"
  },
  "EmbedSocial": {
    "d": "EmbedSocial is a social media management platform.",
    "w": "https://embedsocial.com",
    "i": "EmbedSocial.svg"
  },
  "EmbedThis Appweb": {
    "w": "http://embedthis.com/appweb",
    "i": "Embedthis.png"
  },
  "Embedly": {
    "d": "Embedly is a service that allows developers to convert URLs into rich previews and embeddable content.",
    "w": "https://embed.ly",
    "i": "Embedly.svg"
  },
  "Ember.js": {
    "w": "http://emberjs.com",
    "i": "Ember.js.png"
  },
  "Emotion": {
    "d": "Emotion is a library designed for writing CSS styles with JavaScript.",
    "w": "http://emotion.sh",
    "i": "Emotion.png"
  },
  "Emotive": {
    "d": "Emotive is a computer software company that provides SaaS, Mobile Marketing, NLP, machine learning, and B2B.",
    "w": "https://emotive.io",
    "i": "Emotive.svg"
  },
  "Empretienda": {
    "d": "Empretienda is a platform that allows you to create and manage your own online store.",
    "w": "https://www.empretienda.com",
    "i": "Empretienda.png"
  },
  "Enable": {
    "d": "Enable is a web accessibility plugin by uPress.",
    "w": "https://www.enable.co.il",
    "i": "Enable.png"
  },
  "Endurance Page Cache": {
    "d": "Endurance Page Cache adds basic file-based caching to WordPress.",
    "w": "https://github.com/bluehost/endurance-page-cache",
    "i": "endurance-cache.png"
  },
  "Engagio": {
    "w": "https://www.engagio.com/",
    "i": "Engagio.png"
  },
  "Engintron": {
    "d": "Engintron is a plugin that integrates Nginx to cPanel/WHM server.",
    "w": "https://github.com/engintron/engintron",
    "i": "engintron.png"
  },
  "Enigma": {
    "d": "Enigma is the popular superfine multipurpose responsive WordPress theme from Infigo Software.",
    "w": "https://wordpress.org/themes/enigma"
  },
  "Enjin CMS": {
    "d": "Enjin CMS is a content management system which focused creation of websites for gaming guilds, clans, Minecraft servers, or fan communities.",
    "w": "https://www.enjin.com",
    "i": "Enjin.svg"
  },
  "Enlistly": {
    "d": "Enlistly tracks referral orders in realtime. Orders that are partially refunded, refunded, or cancelled update on the fly.",
    "w": "https://enlistly.com",
    "i": "Enlistly.png"
  },
  "Ensi": {
    "d": "Ensi is an open source ecommerce platform based on service oriented architecture.",
    "w": "https://ensi.tech",
    "i": "Ensi.png"
  },
  "Ensighten": {
    "d": "Ensighten is a solution that enables secure management, implementation and control of website technologies.",
    "w": "https://success.ensighten.com/hc/en-us",
    "i": "ensighten.png"
  },
  "Envialia": {
    "d": "",
    "w": "https://www.envialia.com",
    "i": "Envialia.png"
  },
  "Envo Shop": {
    "d": "Envo Shop is a fast, clean and modern-looking responsive free WooCommerce WordPress theme by Envo Themes.",
    "w": "https://envothemes.com/free-envo-shop",
    "i": "Envo Themes.png"
  },
  "Envo Storefront": {
    "d": "Envo Storefront is a fast, clean and modern-looking responsive WooCommerce theme for WordPress.",
    "w": "https://envothemes.com/free-envo-storefront",
    "i": "Envo Themes.png"
  },
  "Envo eCommerce": {
    "d": "Envo eCommerce is a fast, clean and modern-looking responsive free WooCommerce theme for WordPress.",
    "w": "https://envothemes.com/free-envo-ecommerce/",
    "i": "Envo Themes.png"
  },
  "Envoy": {
    "d": "Envoy is an open-source edge and service proxy, designed for cloud-native applications.",
    "w": "https://www.envoyproxy.io/",
    "i": "Envoy.png"
  },
  "Envybox": {
    "d": "Envybox is a multiservice for increasing sales.",
    "w": "https://envybox.io",
    "i": "Envybox.svg"
  },
  "Enyo": {
    "d": "Enyo is an open-source JavaScript framework for cross-platform for mobile, desktop, TV and web applications.",
    "w": "http://enyojs.com",
    "i": "Enyo.png"
  },
  "Epoch": {
    "w": "https://fastly.github.io/epoch"
  },
  "Epom": {
    "w": "http://epom.com",
    "i": "Epom.png"
  },
  "EqualWeb": {
    "d": "EqualWeb provides a web accessibility overlay, and helps some people with disabilities access digital information.",
    "w": "https://www.equalweb.com/",
    "i": "EqualWeb.png"
  },
  "EraofEcom Cartroids": {
    "d": "EraofEcom Cartroids makes it easy for you to create highly targeted upsells, cross-sells and bundle offers.",
    "w": "https://eraofecom.org/collections/tech/products/cartroids",
    "i": "EraofEcom.png"
  },
  "EraofEcom MTL": {
    "d": "EraofEcom MTL is a Shopify pop up app that enables you to catch your website visitors.",
    "w": "https://eraofecom.org/collections/tech/products/milk-the-leads",
    "i": "EraofEcom.png"
  },
  "EraofEcom WinAds": {
    "d": "EraofEcom WinAds is an all-in-one Facebook pixel app for Shopify.",
    "w": "https://eraofecom.org/collections/tech/products/win-ads-manager",
    "i": "EraofEcom.png"
  },
  "Erlang": {
    "d": "Erlang is a general-purpose, concurrent, functional programming language, and a garbage-collected runtime system.",
    "w": "http://www.erlang.org",
    "i": "Erlang.png"
  },
  "Errorception": {
    "d": "Errorception is a error reporting service for client-side in-browser JavaScript errors.",
    "w": "https://errorception.com",
    "i": "Errorception.png"
  },
  "Essent SiteBuilder Pro": {
    "d": "Essent SiteBuilder Pro is a fully-integrated web-based website design system, content management and ecommerce system.",
    "w": "https://www.essent.com/SiteBuilderPro.html",
    "i": "Essent.png"
  },
  "Essential Addons for Elementor": {
    "d": "Essential Addons for Elementor gives you 70+ creative elements and extensions to help you extend the stock features of Elementor page builder.",
    "w": "https://essential-addons.com/elementor/",
    "i": "Essential Addons for Elementor.svg"
  },
  "Essential JS 2": {
    "w": "https://www.syncfusion.com/javascript-ui-controls",
    "i": "syncfusion.svg"
  },
  "Estore Compare": {
    "d": "Estore Compare is a website optimisation software that offers A/B testing, CVR and LTV measuring tools.",
    "w": "https://estore.co.jp/estorecompare/",
    "i": "EstoreCompare.svg"
  },
  "Estore Shopserve": {
    "d": "Estore Shopserve is an all-in-one payment processing and ecommerce solution.",
    "w": "https://estore.co.jp/shopserve",
    "i": "EstoreShopserve.svg"
  },
  "Etherpad": {
    "d": "Etherpad is an open-source, web-based collaborative real-time editor, allowing authors to simultaneously edit a text document, and see all of the participants' edits in real-time, with the ability to display each author's text in their own colour.",
    "w": "https://etherpad.org",
    "i": "etherpad.png"
  },
  "Ethers": {
    "d": "Ethers is a complete, tiny and simple Ethereum library.",
    "w": "https://ethers.org/",
    "i": "Ethers.svg"
  },
  "EthicalAds": {
    "d": "EthicalAds is a privacy-preserving ad network targeting developers.",
    "w": "https://www.ethicalads.io/",
    "i": "EthicalAds.svg"
  },
  "Eticex": {
    "d": "Eticex is as an ecommerce infrastructure provider that offers ecommerce packages and customisable high-performance ecommerce solutions.",
    "w": "https://www.eticex.com",
    "i": "Eticex.svg"
  },
  "Etix": {
    "d": "Etix is an international web-based ticketing service provider for the entertainment, travel, and sports industries.",
    "w": "https://hello.etix.com",
    "i": "Etix.svg"
  },
  "Etracker": {
    "d": "Etracker is a web optimisation solution.",
    "w": "https://www.etracker.com",
    "i": "Etracker.png"
  },
  "EventOn": {
    "d": "EventON is event calendar for WordPress.",
    "w": "https://www.myeventon.com",
    "i": "eventon.png"
  },
  "Everflow": {
    "d": "Everflow is a partner marketing analytics platform.",
    "w": "https://www.everflow.io",
    "i": "Everflow.png"
  },
  "EveryAction": {
    "d": "EveryAction provides fundraising software, donor management software, and CRM software to nonprofit organisations.",
    "w": "https://www.everyaction.com",
    "i": "EveryAction.svg"
  },
  "Eveve": {
    "d": "Eveve is a restaurant table booking widget.",
    "w": "https://www.eveve.com",
    "i": "Eveve.svg"
  },
  "Evidon": {
    "d": "Evidon is a transparency company that helps organizations educate consumers on how and why data is collected, as well as provide consumers with the ability to give and withdraw consent to their data being used.",
    "w": "https://www.evidon.com",
    "i": "Evidon.png"
  },
  "ExactMetrics": {
    "d": "ExactMetrics (formerly Google Analytics Dashboard for WP) plugin helps you properly setup all the powerful Google Analytics tracking features without writing any code or hiring a developer.",
    "w": "https://www.exactmetrics.com",
    "i": "ExactMetrics.svg"
  },
  "Exemptify": {
    "d": "Exemptify allows you to conduct proper EU B2B transactions by validating EU VAT IDs.",
    "w": "http://modules4u.biz/exemptify",
    "i": "Exemptify.png"
  },
  "Exhibit": {
    "w": "http://simile-widgets.org/exhibit/",
    "i": "Exhibit.png"
  },
  "ExitIntel": {
    "d": "ExitIntel is a full service conversion optimisation agency that focuses on ecommerce companies.",
    "w": "https://exitintelligence.com",
    "i": "ExitIntel.png"
  },
  "ExoClick": {
    "d": "ExoClick is a Barcelona-based online advertising company, which provides online advertising services to both advertisers and publishers.",
    "w": "https://www.exoclick.com",
    "i": "ExoClick.png"
  },
  "ExpertRec": {
    "d": "ExpertRec is a collaborative Web search engine, which allows users share search histories through a web browser.",
    "w": "https://www.expertrec.com/",
    "i": "ExpertRec.png"
  },
  "Expivi": {
    "d": "Expivi specialises in 3D visualisation technology for ecommerce stores.",
    "w": "https://www.expivi.com",
    "i": "Expivi.svg"
  },
  "Exponea": {
    "d": "Exponea is a cloud-based marketing analysis platform suitable for large and midsize organisations in a variety of industries.",
    "w": "https://go.exponea.com",
    "i": "Exponea.svg"
  },
  "Express": {
    "d": "Express is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.",
    "w": "http://expressjs.com",
    "i": "Express.svg"
  },
  "ExpressionEngine": {
    "d": "ExpressionEngine is a free and open-source CMS.",
    "w": "https://expressionengine.com/",
    "i": "ExpressionEngine.svg"
  },
  "ExtJS": {
    "w": "https://www.sencha.com",
    "i": "ExtJS.png"
  },
  "ExtendThemes Calliope": {
    "d": "ExtendThemes Calliope is an flexible, multipurpose WordPress child theme of Colibri WP.",
    "w": "https://wordpress.org/themes/calliope",
    "i": "ExtendThemes.svg"
  },
  "ExtendThemes EmpowerWP": {
    "d": "ExtendThemes EmpowerWP is an flexible, multipurpose WordPress theme.",
    "w": "https://extendthemes.com/empowerwp",
    "i": "ExtendThemes.svg"
  },
  "ExtendThemes Highlight": {
    "d": "ExtendThemes Highlight is an flexible, multipurpose WordPress theme.",
    "w": "https://extendthemes.com/highlight",
    "i": "ExtendThemes.svg"
  },
  "ExtendThemes Materialis": {
    "d": "ExtendThemes Materialis is an flexible, multipurpose WordPress theme.",
    "w": "https://extendthemes.com/materialis",
    "i": "ExtendThemes.svg"
  },
  "ExtendThemes Mesmerize": {
    "d": "ExtendThemes Mesmerize is an flexible, multipurpose WordPress theme.",
    "w": "https://extendthemes.com/mesmerize",
    "i": "ExtendThemes.svg"
  },
  "Extendify": {
    "d": "Extendify (formerly Redux framework) is one of the most popular, advanced, and free to use option panel frameworks for WordPress themes and plugins.",
    "w": "https://extendify.com",
    "i": "Extendify.svg"
  },
  "Extole": {
    "d": "Extole is an online marketing platform that enables brands and businesses to get new customers through loyalty and referral programs.",
    "w": "https://www.extole.com",
    "i": "Extole.png"
  },
  "Ezoic": {
    "d": "Ezoic is a website optimisation platform for digital publishers and website owners powered by machine learning.",
    "w": "https://www.ezoic.com",
    "i": "Ezoic.svg"
  },
  "e-Shop Commerce": {
    "d": "e-Shop is a all-in-one Software-as-a-Service (SaaS) that allows Israeli customers to set up an online store and sell their products.",
    "w": "https://www.e-shop.co.il",
    "i": "eShop eCommerce.svg"
  },
  "e-goi": {
    "d": "e-goi is a multichannel marketing automation software for ecommerce.",
    "w": "https://www.e-goi.com",
    "i": "e-goi.svg"
  },
  "e107": {
    "w": "http://e107.org",
    "i": "e107.png"
  },
  "eBay Partner Network": {
    "d": "eBay Partner Network is an online referral program where eBay pays commissions to referrers on sales generated by customers they’ve referred.",
    "w": "https://partnernetwork.ebay.com",
    "i": "eBay.svg"
  },
  "eCaupo": {
    "d": "eCaupo is no delivery portal, but your own shop.",
    "w": "https://www.ecaupo.com",
    "i": "eCaupo.png"
  },
  "eClass": {
    "d": "eClass is an online learning platform.",
    "w": "https://www.eclass.com.hk",
    "i": "eClass.png"
  },
  "eDokan": {
    "d": "eDokan is hosted ecommerce platform with drag-drop template builder and zero programming knowledge.",
    "w": "https://edokan.co",
    "i": "eDokan.png"
  },
  "eKomi": {
    "d": "eKomi is a German supplier and product review service.",
    "w": "https://www.ekomi.de",
    "i": "eKomi.png"
  },
  "eNamad": {
    "d": "eNamad is an electronic trust symbol.",
    "w": "https://enamad.ir/",
    "i": "eNamad.png"
  },
  "ePages": {
    "d": "ePages is a provider of cloud-based online shop solutions.",
    "w": "http://www.epages.com/",
    "i": "ePages.svg"
  },
  "eSSENTIAL Accessibility": {
    "d": "eSSENTIAL Accessibility is a digital accessibility-as-a-service platform.",
    "w": "https://www.essentialaccessibility.com",
    "i": "eSSENTIAL Accessibility.png"
  },
  "eShopCRM": {
    "d": "eShopCRM is an ecommerce CRM for Shopify.",
    "w": "https://eshopcrm.com",
    "i": "eShopCRM.png"
  },
  "eSputnik": {
    "d": "eSputnik is a marketing automation service for ecommerce.",
    "w": "https://esputnik.com",
    "i": "eSputnik.svg"
  },
  "eSyndiCat": {
    "w": "http://esyndicat.com",
    "i": "eSyndiCat.png"
  },
  "eWAY Payments": {
    "d": "eWAY is a global omnichannel payment provider. The company processes secure credit card payments for merchants. eWay works through eCommerce.",
    "w": "https://www.eway.com.au/",
    "i": "eway.png"
  },
  "eZ Platform": {
    "w": "https://ezplatform.com/",
    "i": "eZ.svg"
  },
  "eZ Publish": {
    "w": "https://github.com/ezsystems/ezpublish-legacy",
    "i": "eZ.svg"
  },
  "ebisumart": {
    "d": "ebisumart is a cloud-based storefront system for developing and renewing high-quality ecommerce websites.",
    "w": "https://www.ebisumart.com",
    "i": "ebisumart.svg"
  },
  "ef.js": {
    "w": "http://ef.js.org",
    "i": "ef.js.svg"
  },
  "emBlue": {
    "d": "emBlue is an email and marketing automation platform.",
    "w": "https://www.embluemail.com/en",
    "i": "emBlue.svg"
  },
  "enduro.js": {
    "w": "http://endurojs.com",
    "i": "enduro.js.svg"
  },
  "etika": {
    "d": "etika is a fintech company based in Manchester which provide buy now pay later solution.",
    "w": "https://etika.com",
    "i": "etika.svg"
  },
  "eucookie.eu": {
    "w": "https://www.eucookie.eu/",
    "i": "eucookie.png"
  },
  "experiencedCMS": {
    "w": "https://experiencedcms.berkearas.de",
    "i": "experiencedCMS_Logo.png"
  },
  "F5 BigIP": {
    "d": "F5's BIG-IP is a family of products covering software and hardware designed around application availability, access control, and security solutions.",
    "w": "https://www.f5.com/products/big-ip-services",
    "i": "F5.png"
  },
  "FARFETCH Black & White": {
    "d": "Farfetch Platform Solutions is a full service platform and agency providing end-to-end, multichannel e-commerce solutions for luxury fashion brands under the name Farfetch Black & White.",
    "w": "https://www.farfetchplatformsolutions.com/",
    "i": "Farfetch.png"
  },
  "FAST ESP": {
    "d": "FAST ESP is a service-oriented architecture development platform which is geared towards production searchable indexes. It provided a flexible framework for creating ETL applications for efficient indexing of searchable content.",
    "w": "http://microsoft.com/enterprisesearch",
    "i": "FAST ESP.png"
  },
  "FAST Search for SharePoint": {
    "d": "FAST Search for SharePoint is the search engine for Microsoft's SharePoint collaboration platform. Its purpose is helping SharePoint users locate and retrieve stored enterprise content.",
    "w": "http://sharepoint.microsoft.com/en-us/product/capabilities/search/Pages/Fast-Search.aspx",
    "i": "FAST Search for SharePoint.png"
  },
  "FUDforum": {
    "d": "FUDforum is a discussion forum software with support for posts, topics, polls and attachments.",
    "w": "https://github.com/fudforum/FUDforum",
    "i": "default.svg"
  },
  "Fabric": {
    "d": "Fabric is a headless commerce platform helping direct-to-consumer and B2B brands utilize an ecommerce platform designed for their needs.",
    "w": "https://fabric.inc",
    "i": "Fabric.svg"
  },
  "Facebook Ads": {
    "d": "Facebook Ads is an online advertising platform developed by Facebook.",
    "w": "https://www.facebook.com/business/ads",
    "i": "Facebook.svg"
  },
  "Facebook Chat Plugin": {
    "d": "Facebook Chat Plugin is a website plugin that businesses with a Facebook Page can install on their website.",
    "w": "https://developers.facebook.com/docs/messenger-platform/discovery/facebook-chat-plugin/",
    "i": "Facebook.svg"
  },
  "Facebook Login": {
    "d": "Facebook Login is a way for people to create accounts and log into your app across multiple platforms.",
    "w": "https://developers.facebook.com/docs/facebook-login/",
    "i": "Facebook.svg"
  },
  "Facebook Pay": {
    "d": "Facebook pay is a payment solution which can be used on any site or app outside Facebook ecosystem.",
    "w": "https://pay.facebook.com/",
    "i": "Facebook.svg"
  },
  "Facebook Pixel": {
    "d": "Facebook pixel is an analytics tool that allows you to measure the effectiveness of your advertising.",
    "w": "http://facebook.com",
    "i": "Facebook.svg"
  },
  "Facil-iti": {
    "d": "Facil-iti is a web accessibility overlay which provides support for some people with disabilities and seniors.",
    "w": "https://www.facil-iti.com/",
    "i": "Facil-iti.svg"
  },
  "Fact Finder": {
    "d": "Fact Finder is a platform which, combines search, navigation, and merchandising solutions to streamline online search and power sales.",
    "w": "http://fact-finder.com",
    "i": "Fact Finder.png"
  },
  "FalguniThemes Nisarg": {
    "d": "FalguniThemes Nisarg is a new fully responsive and translation ready WordPress theme.",
    "w": "https://www.falgunithemes.com/downloads/nisarg",
    "i": "FalguniThemes.png"
  },
  "FameThemes OnePress": {
    "d": "FameThemes OnePress is a free portfolio one page WordPress theme suited for an individual or digital agency.",
    "w": "https://www.famethemes.com/themes/onepress",
    "i": "FameThemes.svg"
  },
  "FameThemes Screenr": {
    "d": "FameThemes Screenr is a fullscreen parallax WordPress theme suited for business, portfolio, digital agency, freelancers.",
    "w": "https://www.famethemes.com/themes/screenr",
    "i": "FameThemes.svg"
  },
  "FancyBox": {
    "d": "FancyBox is a tool for displaying images, html content and multi-media in a Mac-style 'lightbox' that floats overtop of web page.",
    "w": "http://fancyapps.com/fancybox",
    "i": "FancyBox.svg"
  },
  "Fanplayr": {
    "d": "Fanplayr is a real-time insights platform that provides website optimisation and personalisation solutions for businesses.",
    "w": "https://fanplayr.com",
    "i": "Fanplayr.svg"
  },
  "FaraPy": {
    "w": "https://faral.tech",
    "i": "FaraPy.png"
  },
  "FareHarbor": {
    "d": "FareHarbor is an booking and schedule management solution intended for tour and activity companies.",
    "w": "https://fareharbor.com",
    "i": "FareHarbor.svg"
  },
  "Fast Bundle": {
    "d": "Fast Bundle gives you the ability to create product bundle offers with discounts.",
    "w": "https://fastbundle.co",
    "i": "Fast Bundle.svg"
  },
  "Fast Checkout": {
    "d": "Fast Checkout is a one-click purchases for buyers without requiring a password to log in.",
    "w": "https://www.fast.co",
    "i": "Fast Checkout.svg"
  },
  "FastComet": {
    "d": "FastComet is a hosting service company from San Francisco, California.",
    "w": "https://www.fastcomet.com",
    "i": "FastComet.png"
  },
  "Fastcommerce": {
    "w": "https://www.fastcommerce.com.br",
    "i": "Fastcommerce.png"
  },
  "Fasterize": {
    "d": "Fasterize is a website accelerator service.",
    "w": "https://www.fasterize.com/",
    "i": "Fasterize.svg"
  },
  "Fastly": {
    "d": "Fastly is a cloud computing services provider. Fastly's cloud platform provides a content delivery network, Internet security services, load balancing, and video & streaming services.",
    "w": "https://www.fastly.com",
    "i": "Fastly.svg"
  },
  "Fastspring": {
    "w": "https://fastspring.com",
    "i": "fastspring.png"
  },
  "Fat Zebra": {
    "d": "Fat Zebra provides a process of accepting credit card payments online.",
    "w": "https://www.fatzebra.com/",
    "i": "fatzebra.png"
  },
  "Fat-Free Framework": {
    "w": "http://fatfreeframework.com",
    "i": "Fat-Free Framework.png"
  },
  "Fathom": {
    "d": "Fathom is easy-yet-powerful website analytics that protects digital privacy.",
    "w": "https://usefathom.com",
    "i": "Fathom.svg"
  },
  "Fbits": {
    "w": "https://www.traycorp.com.br",
    "i": "Fbits.png"
  },
  "FeatherX": {
    "d": "FeatherX captures content from all major reviews and social media channels.",
    "w": "https://featherx.ai",
    "i": "FeatherX.svg"
  },
  "FedEx": {
    "d": "FedEx is an American multinational company which focuses on transportation, ecommerce and business services.",
    "w": "https://www.fedex.com",
    "i": "FedEx.svg"
  },
  "Fedora": {
    "d": "Fedora is a free open-source Linux-based operating system.",
    "w": "http://fedoraproject.org",
    "i": "Fedora.png"
  },
  "Feedback Fish": {
    "d": "Feedback Fish is a widget for collecting website feedback from users.",
    "w": "https://feedback.fish",
    "i": "feedback-fish.svg"
  },
  "Feefo": {
    "d": "Feefo is a cloud-based consumer review and rating management software.",
    "w": "https://www.feefo.com",
    "i": "Feefo.svg"
  },
  "Fenicio": {
    "d": "Fenicio is a cloud platform that handles all aspects of ecommerce sales channel operation and management.",
    "w": "https://fenicio.io",
    "i": "Fenicio.svg"
  },
  "Fera": {
    "d": "Fera is a product review and social proof application for ecommerce websites.",
    "w": "https://fera.ai/",
    "i": "Fera.svg"
  },
  "Fera Product Reviews App": {
    "d": "Fera Product Reviews App is a product review and social proof app for Shopify.",
    "w": "https://apps.shopify.com/fera",
    "i": "Fera.svg"
  },
  "FilePond": {
    "d": "FilePond is a JavaScript library for file uploads.",
    "w": "https://pqina.nl/filepond/",
    "i": "filepond.svg"
  },
  "FinanceAds": {
    "d": "FinanceAds is a performance marketing agency that has grown affiliate network for the financial sector.",
    "w": "https://www.financeads.com",
    "i": "Financeads.png"
  },
  "Findify": {
    "d": "Findify is an intelligent ecommerce search, navigation and personalisation solution.",
    "w": "https://www.findify.io",
    "i": "Findify.svg"
  },
  "Findmeashoe": {
    "d": "Findmeashoe is a footwear recommendation portal that aims to improve shopping efficiency and experience of footwear shoppers.",
    "w": "https://findmeashoe.com",
    "i": "Findmeashoe.png"
  },
  "Fing": {
    "d": "Fing is a cloud service to deploy and manage your applications without being worried about your infrastructure and environment.",
    "w": "https://fing.ir",
    "i": "Fing.svg"
  },
  "FingerprintJS": {
    "d": "FingerprintJS is a browser fingerprinting library that queries browser attributes and computes a hashed visitor identifier from them.",
    "w": "https://fingerprintjs.com",
    "i": "FingerprintJS.svg"
  },
  "FintechOS": {
    "d": "FintechOS is a low-code platform for banking and insurance.",
    "w": "https://fintechos.com",
    "i": "FintechOS.svg"
  },
  "FireApps Ali Reviews": {
    "d": "FireApps Ali Reviews is an all-in-one solution that helps to collect, showcase, and manage impactful reviews.",
    "w": "https://apps.shopify.com/ali-reviews",
    "i": "FireApps.svg"
  },
  "Firebase": {
    "d": "Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps.",
    "w": "https://firebase.google.com",
    "i": "Firebase.svg"
  },
  "Fireblade": {
    "w": "http://fireblade.com",
    "i": "Fireblade.png"
  },
  "Firepush": {
    "d": "Firepush is an omnichannel marketing app that helps Shopify stores to drive sales with automated web push, email and SMS campaigns.",
    "w": "https://getfirepush.com",
    "i": "Firepush.svg"
  },
  "FirstHive": {
    "d": "FirstHive is a full-stack customer data platform that enables consumer marketers and brands to take control of their first-party data from all sources.",
    "w": "https://firsthive.com",
    "i": "FirstHive.svg"
  },
  "FirstImpression.io": {
    "d": "FirstImpression.io is a customized ad placements for publisher websites on their platform, with zero technical work.",
    "w": "https://www.firstimpression.io",
    "i": "FirstImpression.io.png"
  },
  "Fit Analytics": {
    "d": "Fit Analytics is a platform that provides clothing size recommendations for online customers by measuring individual dimensions via webcams.",
    "w": "https://www.fitanalytics.com",
    "i": "Fit Analytics.png"
  },
  "FlagSmith": {
    "d": "FlagSmith is an open-source, fully supported feature flag & remote configuration solution, which provides hosted API to help deployment to a private cloud or on-premises environment.",
    "w": "https://flagsmith.com",
    "i": "FlagSmith.svg"
  },
  "Flarum": {
    "d": "Flarum is a discussion platform.",
    "w": "http://flarum.org/",
    "i": "flarum.png"
  },
  "Flask": {
    "w": "http://flask.pocoo.org",
    "i": "Flask.png"
  },
  "Flat UI": {
    "w": "https://designmodo.github.io/Flat-UI/",
    "i": "Flat UI.png"
  },
  "Flazio": {
    "d": "Flazio is an Italian website builder.",
    "w": "https://flazio.com",
    "i": "Flazio.svg"
  },
  "Fleksa": {
    "d": "Fleksa is an online ordering system for restaurants and delivery.",
    "w": "https://fleksa.com",
    "i": "Fleksa.svg"
  },
  "FlexCMP": {
    "w": "http://www.flexcmp.com/cms/home",
    "i": "FlexCMP.png"
  },
  "FlexSlider": {
    "d": "FlexSlider is a free jQuery slider plugin.",
    "w": "https://woocommerce.com/flexslider/",
    "i": "FlexSlider.png"
  },
  "Flickity": {
    "d": "Flickity is a JavaScript slider library, built by David DeSandro of Metafizzy fame.",
    "w": "https://flickity.metafizzy.co"
  },
  "Flits": {
    "d": "Flits is a customer account pages that get all your shopper data in one place.",
    "w": "https://getflits.com",
    "i": "Flits.png"
  },
  "Flocktory": {
    "d": "Flocktory is a social referral marketing platform that enables users to share personalised offers via social networks.",
    "w": "https://www.flocktory.com",
    "i": "Flocktory.png"
  },
  "Flow": {
    "d": "Flow is an ecommerce platform that enables brands and retailers to sell their merchandise to customers internationally by creating localized shopping experiences.",
    "w": "https://www.flow.io/",
    "i": "Flow.png"
  },
  "Flowbite": {
    "d": "Flowbite is an open-source library of UI components based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.",
    "w": "https://github.com/themesberg/flowbite",
    "i": "Flowbite.svg"
  },
  "Flowplayer": {
    "d": "Flowplayer is a scalable, performance-first HTML 5 video player and platform hosting solution for publishers, broadcasters and digital media.",
    "w": "https://flowplayer.com",
    "i": "Flowplayer.svg"
  },
  "Flutter": {
    "d": "Flutter is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase.",
    "w": "https://flutter.dev",
    "i": "Flutter.svg"
  },
  "FluxBB": {
    "w": "https://fluxbb.org",
    "i": "FluxBB.png"
  },
  "Fly.io": {
    "d": "Fly is a platform for running full stack apps and databases.",
    "w": "https://fly.io",
    "i": "Fly.io.png"
  },
  "Flyspray": {
    "w": "http://flyspray.org",
    "i": "Flyspray.png"
  },
  "Flywheel": {
    "w": "https://getflywheel.com",
    "i": "flywheel.svg"
  },
  "Fomo": {
    "d": "Fomo is a social proof marketing platform.",
    "w": "https://fomo.com",
    "i": "Fomo.png"
  },
  "Font Awesome": {
    "d": "Font Awesome is a font and icon toolkit based on CSS and Less.",
    "w": "https://fontawesome.com/",
    "i": "Font Awesome.svg"
  },
  "FontServer": {
    "d": "FontServer is a online font delivery network service-provider for websites.",
    "w": "https://fontserver.ir",
    "i": "FontServer.svg"
  },
  "Fontify": {
    "d": "Fontify allows you to utilise any font without having to alter code.",
    "w": "https://apps.shopify.com/fontify-change-customize-font-for-your-store",
    "i": "Fontify.png"
  },
  "FooPlugins FooGallery": {
    "d": "FooPlugins FooGallery is a great image gallery plugin for WordPress.",
    "w": "https://fooplugins.com/foogallery-wordpress-gallery-plugin",
    "i": "FooPlugins.svg"
  },
  "Food-Ordering.co.uk": {
    "d": "Food-Ordering.co.uk is a multi-lingual food ordering system for several hospitality scenarios including online ordering for delivery/takeout, in-store ordering (order at table, room service, self ordering kiosk), telephone ordering with callerID, and table booking.",
    "w": "https://www.food-ordering.co.uk",
    "i": "Food-Ordering.co.uk.png"
  },
  "FoodBooking": {
    "d": "FoodBooking is a virtual food court based on a curated list of restaurants that use the GloriaFood ordering system.",
    "w": "https://www.foodbooking.com",
    "i": "FoodBooking.png"
  },
  "Foodomaa": {
    "d": "Foodomaa is a multi-restaurant food ordering and restaurant membership system.",
    "w": "https://foodomaa.com",
    "i": "Foodomaa.svg"
  },
  "Fork Awesome": {
    "d": "Fork Awesome is now a community effort based on Font Awesome by Dave Gandy.",
    "w": "https://forkaweso.me",
    "i": "Fork Awesome.png"
  },
  "Fork CMS": {
    "d": "Fork CMS is an open-source content management system.",
    "w": "http://www.fork-cms.com",
    "i": "ForkCMS.png"
  },
  "FormAssembly": {
    "d": "FormAssembly is a platform that enables to collection of data and processing via workflow.",
    "w": "https://www.formassembly.com",
    "i": "FormAssembly.svg"
  },
  "Formaloo": {
    "d": "Formaloo is a no-code collaboration platform that helps businesses create custom data-driven business applications and internal tools, automate their processes and engage their audience.",
    "w": "https://www.formaloo.com",
    "i": "Formaloo.svg"
  },
  "Formidable Form": {
    "d": "Formidable Forms is a WordPress plugin that enables you to create quizzes, surveys, calculators, timesheets, multi-page application forms.",
    "w": "https://formidableforms.com",
    "i": "Formidable Form.png"
  },
  "Formitable": {
    "d": "Formitable is an reservation management system for restaurants.",
    "w": "https://formitable.com",
    "i": "Formitable.svg"
  },
  "ForoshGostar": {
    "w": "https://www.foroshgostar.com",
    "i": "ForoshGostar.svg"
  },
  "Forte": {
    "d": "Forte, a CSG Company offers merchants and partners a broad range of payment solutions.",
    "w": "https://www.forte.net",
    "i": "Forte.svg"
  },
  "Forter": {
    "d": "Forter is a SaaS company that provides fraud prevention technology for online retailers and marketplaces.",
    "w": "https://www.forter.com",
    "i": "Forter.svg"
  },
  "Fortune3": {
    "w": "http://fortune3.com",
    "i": "Fortune3.png"
  },
  "Foswiki": {
    "d": "Foswiki is a free open-source collaboration platform.",
    "w": "http://foswiki.org",
    "i": "foswiki.png"
  },
  "Four": {
    "d": "Pay with four is a Buy now pay later solution.",
    "w": "https://paywithfour.com/",
    "i": "Four.svg"
  },
  "Foursixty": {
    "d": "Foursixty is a widget which turns Instagram content and user-generated content into shoppable galleries.",
    "w": "https://foursixty.com/",
    "i": "Foursixty.png"
  },
  "Fourthwall": {
    "d": "Fourthwall helps to create and launch a branded website.",
    "w": "https://fourthwall.com/",
    "i": "Fourthwall.svg"
  },
  "Foxy.io": {
    "d": "Foxy’s hosted cart & payment page allow you to sell anything, using your existing website or platform.",
    "w": "https://www.foxy.io",
    "i": "foxyio.svg"
  },
  "Framer Sites": {
    "d": "Framer is primarily a design and prototyping tool. It allows you to design interactive prototypes of websites and applications using production components and real data.",
    "w": "https://framer.com/sites",
    "i": "Framer Sites.svg"
  },
  "France Express": {
    "d": "France Express is a delivery service based in France.",
    "w": "https://www.france-express.com",
    "i": "France Express.svg"
  },
  "Frappe": {
    "d": "Frappe is a full stack, batteries-included, web framework written in Python and Javascript.",
    "w": "https://frappeframework.com",
    "i": "Frappe.png"
  },
  "FreakOut": {
    "d": "FreakOut is a marketing technology company with programmatic solutions (DSP,SSP) that delivers in-feed display and video formats across global publishers.",
    "w": "https://www.fout.co.jp",
    "i": "FreakOut.png"
  },
  "FreeBSD": {
    "d": "FreeBSD is a free and open-source Unix-like operating system.",
    "w": "http://freebsd.org",
    "i": "FreeBSD.png"
  },
  "FreeTextBox": {
    "d": "FreeTextBox is a free open-source HTML Editor.",
    "w": "http://freetextbox.com",
    "i": "FreeTextBox.png"
  },
  "Freespee": {
    "w": "https://www.freespee.com",
    "i": "Freespee.svg"
  },
  "Frequenceo": {
    "d": "Frequenceo is a fixed-rate postage service in France.",
    "w": "https://www.laposte.fr/entreprise/produit-entreprise/frequenceo",
    "i": "La Poste.svg"
  },
  "Frequently Bought Together": {
    "d": "Frequently Bought Together is a Shopify app which add Amazon-like 'Customers Who Bought This Item Also Bought' product recommendations to your store.",
    "w": "https://www.codeblackbelt.com",
    "i": "Frequently Bought Together.png"
  },
  "Fresco": {
    "d": "Fresco is a responsive lightbox. Fresco comes with thumbnail support, fullscreen zoom, Youtube and Vimeo integration for HTML5 video and a powerful Javascript API.",
    "w": "https://github.com/staaky/fresco",
    "i": "default.svg"
  },
  "Fresh": {
    "d": "Fresh is a full stack modern web framework for JavaScript and TypeScript developers, designed to make it trivial to create high-quality, performant, and personalized web applications.",
    "w": "https://fresh.deno.dev",
    "i": "Fresh.svg"
  },
  "Freshchat": {
    "d": "Freshchat is a cloud-hosted live messaging and engagement application.",
    "w": "https://www.freshworks.com/live-chat-software/",
    "i": "Freshchat.svg"
  },
  "Freshop": {
    "d": "Freshop is an online platform for grocers.",
    "w": "https://www.freshop.com",
    "i": "Freshop.png"
  },
  "Freshteam": {
    "d": "Freshteam is a cloud-based HR and applicant tracking solution offered by Freshworks.",
    "w": "https://www.freshworks.com/hrms/",
    "i": "Freshteam.svg"
  },
  "Freshworks CRM": {
    "d": "Freshworks CRM is a cloud-based customer relationship management (CRM) solution. Key features include one-click phone, sales lead tracking, sales management, event tracking and more.",
    "w": "https://www.freshworks.com/crm",
    "i": "Freshworks CRM.svg"
  },
  "Friendbuy": {
    "d": "Friendbuy is a cloud-based referral marketing solution designed to help ecommerce businesses of all sizes.",
    "w": "https://www.friendbuy.com",
    "i": "Friendbuy.svg"
  },
  "Friendly Captcha": {
    "d": "Friendly Captcha is a proof-of-work based solution in which the user’s device does all the work.",
    "w": "https://friendlycaptcha.com",
    "i": "FriendlyCaptcha.svg"
  },
  "Frizbit": {
    "d": "Frizbit is a marketing tool that helps digital marketeers increase web traffic and revenue by combining web push notification.",
    "w": "https://frizbit.com",
    "i": "Frizbit.png"
  },
  "Froala Editor": {
    "d": "Froala Editor is a WYSIWYG HTML Editor written in Javascript that enables rich text editing capabilities for applications.",
    "w": "http://froala.com/wysiwyg-editor",
    "i": "Froala.svg"
  },
  "Front Chat": {
    "d": "Front Chat is the live website chat solution that you can manage straight from your inbox.",
    "w": "https://front.com",
    "i": "Front Chat.svg"
  },
  "FrontPage": {
    "d": "FrontPage is a program for developing and maintaining websites.",
    "w": "http://office.microsoft.com/frontpage",
    "i": "FrontPage.png"
  },
  "Frontastic": {
    "d": "Frontastic is a Commerce Frontend Platform that unites business and development teams to build commerce sites on headless.",
    "w": "https://www.frontastic.cloud/",
    "i": "Frontastic.png"
  },
  "Frontify": {
    "d": "Frontify is a cloud-based brand management platform for creators and collaborators of brands.",
    "w": "https://www.frontify.com",
    "i": "Frontify.svg"
  },
  "Frontity": {
    "d": "Frontity is a React open-source framework focused on WordPress.",
    "w": "https://frontity.org",
    "i": "frontity.png"
  },
  "Frosmo": {
    "d": "Frosmo is a SaaS company which provides AI-driven personalisation products.",
    "w": "https://frosmo.com",
    "i": "Frosmo.png"
  },
  "FullCalendar": {
    "d": "FullCalendar is a full-sized drag and drop JavaScript event calendar.",
    "w": "https://fullcalendar.io",
    "i": "FullCalendar.png"
  },
  "FullContact": {
    "d": "FullContact is a privacy-safe Identity Resolution company building trust between people and brands.",
    "w": "https://www.fullcontact.com",
    "i": "FullContact.svg"
  },
  "FullStory": {
    "d": "FullStory is a web-based digital intelligence system that helps optimize the client experience.",
    "w": "https://www.fullstory.com",
    "i": "FullStory.svg"
  },
  "Fundiin": {
    "d": "Fundiin is the BNPL leader in Vietnam in providing zero-cost buy-now-pay-later facilities.",
    "w": "https://fundiin.vn",
    "i": "Fundiin.svg"
  },
  "Funding Choices": {
    "d": "Funding Choices is a messaging tool that can help you comply with the EU General Data Protection Regulation (GDPR), and recover lost revenue from ad blocking users.",
    "w": "https://developers.google.com/funding-choices",
    "i": "Google.svg"
  },
  "Fundraise Up": {
    "d": "Fundraise Up is a platform for online donations.",
    "w": "https://fundraiseup.com",
    "i": "Fundraise Up.svg"
  },
  "FunnelCockpit": {
    "d": "FunnelCockpit is an all-in-one funnel builder.",
    "w": "https://funnelcockpit.com",
    "i": "FunnelCockpit.png"
  },
  "Funraise": {
    "d": "Funraise is a nonprofit fundraising platform that enables organisations to build fundraising websites as well as manage donations and campaigns.",
    "w": "https://funraise.org",
    "i": "Funraise.svg"
  },
  "FurnitureDealer": {
    "d": "FurnitureDealer is the internet partner of more than 100 leading local full service brick and mortar furniture retailers.",
    "w": "https://www.furnituredealer.net",
    "i": "FurnitureDealer.png"
  },
  "Fusion Ads": {
    "w": "http://fusionads.net",
    "i": "Fusion Ads.png"
  },
  "FusionCharts": {
    "d": "FusionCharts is a comprehensive charting solution for websites.",
    "w": "https://www.fusioncharts.com/charts",
    "i": "fusion_charts.png"
  },
  "Future Shop": {
    "w": "https://www.future-shop.jp",
    "i": "futureshop.png"
  },
  "Futurio": {
    "d": "Futurio is a lightweight and customizable multi-purpose and WooCommerce WordPress theme.",
    "w": "https://futuriowp.com",
    "i": "Futurio.png"
  },
  "Fynd Platform": {
    "d": "Fynd Platform is a subscription based software as a service where brands can mange their catalog, send marketing sms/emailers and sell their products.",
    "w": "https://platform.fynd.com",
    "i": "Fynd Platform.png"
  },
  "fullPage.js": {
    "d": "fullPage.js a jQuery and vanilla JavaScript plugin for fullscreen scrolling websites.",
    "w": "https://github.com/alvarotrigo/fullpage.js",
    "i": "fullPage.js.png"
  },
  "GEODIS": {
    "d": "GEODIS is a global transport and logistics company.",
    "w": "https://geodis.com",
    "i": "GEODIS.svg"
  },
  "GEOvendas": {
    "d": "GEOvendas is an ecommerce platform with analytics, sales force, B2B and B2C products.",
    "w": "https://www.geovendas.com",
    "i": "GEOvendas.svg"
  },
  "GLPI": {
    "d": "GLPI is an open-source IT Asset Management, issue tracking and service desk system.",
    "w": "https://glpi-project.org",
    "i": "GLPI.png"
  },
  "GLS": {
    "d": "GLS offers parcel, logistics and express services, throughout Europe as well as in the US and in Canada.",
    "w": "https://gls-group.eu",
    "i": "GLS.svg"
  },
  "GOV.UK Elements": {
    "w": "https://github.com/alphagov/govuk_elements/",
    "i": "govuk.png"
  },
  "GOV.UK Frontend": {
    "w": "https://design-system.service.gov.uk/",
    "i": "govuk.png"
  },
  "GOV.UK Template": {
    "w": "https://github.com/alphagov/govuk_template/",
    "i": "govuk.png"
  },
  "GOV.UK Toolkit": {
    "w": "https://github.com/alphagov/govuk_frontend_toolkit",
    "i": "govuk.png"
  },
  "GSAP": {
    "d": "GSAP is an animation library that allows you to create animations with JavaScript.",
    "w": "https://greensock.com/gsap",
    "i": "TweenMax.png"
  },
  "GTranslate": {
    "d": "GTranslate is a website translator which can translate any website to any language automatically.",
    "w": "https://gtranslate.io",
    "i": "GTranslate.svg"
  },
  "GTranslate app": {
    "d": "GTranslate app is a website translator which can translate any website to any language automatically.",
    "w": "https://apps.shopify.com/multilingual-shop-by-gtranslate",
    "i": "GTranslate.svg"
  },
  "GX WebManager": {
    "w": "http://www.gxsoftware.com/en/products/web-content-management.htm",
    "i": "GX WebManager.png"
  },
  "Gallery": {
    "d": "Gallery is an open-source web based photo album organiser.",
    "w": "http://galleryproject.org/",
    "i": "Gallery.png"
  },
  "Gambio": {
    "d": "Gambio is an all-in-one shopping cart solution for small to medium sized businesses.",
    "w": "http://gambio.de",
    "i": "Gambio.png"
  },
  "Gameball": {
    "d": "Gameball is a loyalty & retention platform that offers gamified customer engagement tools for customers such as rewards, points, and referrals.",
    "w": "https://www.gameball.co",
    "i": "Gameball.svg"
  },
  "Gatsby": {
    "d": "Gatsby is a React-based open-source framework with performance, scalability and security built-in.",
    "w": "https://www.gatsbyjs.org/",
    "i": "Gatsby.svg"
  },
  "Gatsby Cloud Image CDN": {
    "d": "Image CDN is a new feature of hosting on Gatsby Cloud. Instead of processing images at build time, Image CDN defers and offloads image processing to the edge.",
    "w": "https://www.gatsbyjs.com/products/cloud/image-cdn",
    "i": "Gatsby.svg"
  },
  "Gauges": {
    "w": "https://get.gaug.es",
    "i": "Gauges.png"
  },
  "GeeTest": {
    "d": "GeeTest is a CAPTCHA and bot management provider, protects websites, mobile apps, and APIs from automated bot-driven attacks, like ATO, credential stuffing, web scalping, etc.",
    "w": "https://www.geetest.com",
    "i": "GeeTest.svg"
  },
  "GemPages": {
    "d": "GemPages is a powerful Shopify landing page buidler that empowers SMEs, agency, and freelancers to build their brands and sell online.",
    "w": "https://gempages.net",
    "i": "GemPages.svg"
  },
  "Gemius": {
    "w": "https://www.gemius.com",
    "i": "Gemius.png"
  },
  "GeneXus": {
    "w": "https://www.genexus.com/",
    "i": "GeneXus.png"
  },
  "GenerateBlocks": {
    "d": "GenerateBlocks is a WordPress plugin that has the trappings of a page builder.",
    "w": "https://generateblocks.com",
    "i": "GenerateBlocks.svg"
  },
  "GeneratePress": {
    "d": "GeneratePress is a lightweight WordPress theme that focuses on speed, stability, and accessibility",
    "w": "https://generatepress.com",
    "i": "generatepress.png"
  },
  "Genesis theme": {
    "d": "Genesis theme is a WordPress theme that has been developed using the Genesis Framework from Studiopress.",
    "w": "https://www.studiopress.com/themes/genesis",
    "i": "Genesis theme.svg"
  },
  "Genesys Cloud": {
    "d": "Genesys Cloud is an all-in-one cloud-based contact center software built to improve the customer experience.",
    "w": "https://www.genesys.com",
    "i": "Genesys Cloud.svg"
  },
  "Geniee": {
    "d": "Geniee is an ad technology company.",
    "w": "https://geniee.co.jp",
    "i": "Geniee.png"
  },
  "Gentoo": {
    "d": "Gentoo is a free operating system based on Linux.",
    "w": "http://www.gentoo.org",
    "i": "Gentoo.png"
  },
  "Geo Targetly": {
    "d": "Geo Targetly is a website geo personalisation software.",
    "w": "https://geotargetly.com",
    "i": "Geo Targetly.svg"
  },
  "Gerrit": {
    "w": "http://www.gerritcodereview.com",
    "i": "gerrit.svg"
  },
  "Get Satisfaction": {
    "w": "https://getsatisfaction.com/corp/",
    "i": "Get Satisfaction.png"
  },
  "GetButton": {
    "d": "The chat button by GetButton takes website visitor directly to the messaging app such as Facebook Messenger or WhatsApp and allows them to initiate a conversation with you.",
    "w": "https://getbutton.io",
    "i": "GetButton.svg"
  },
  "GetFeedback": {
    "d": "GetFeedback (formerly Usabilla) is a user feedback solution for collecting qualitative and quantitative user feedback across digital channels including websites, apps and emails.",
    "w": "https://www.getfeedback.com",
    "i": "GetFeedback.svg"
  },
  "GetMeAShop": {
    "d": "GetMeAShop is a cloud-based ecommerce solution for small and midsize businesses across industries such as retail and manufacturing.",
    "w": "https://www.getmeashop.com",
    "i": "GetMeAShop.png"
  },
  "GetResponse": {
    "d": "GetResponse is an email marketing app that allows you to create a mailing list and capture data onto it.",
    "w": "https://www.getresponse.com",
    "i": "GetResponse.svg"
  },
  "GetSimple CMS": {
    "w": "http://get-simple.info",
    "i": "GetSimple CMS.png"
  },
  "GetSocial": {
    "d": "GetSocial is a social analytics and publishing platform.",
    "w": "https://getsocial.io",
    "i": "GetSocial.png"
  },
  "GetYourGuide": {
    "d": "GetYourGuide is a Berlin-based online travel agency and online marketplace for tour guides and excursions.",
    "w": "https://partner.getyourguide.com",
    "i": "GetYourGuide.svg"
  },
  "Getintent": {
    "d": "Getintent is an adtech company that offers AI-powered programmatic suite for agencies, publishers, broadcasters and content owners.",
    "w": "https://getintent.com",
    "i": "Getintent.png"
  },
  "Getsitecontrol": {
    "d": "Getsitecontrol is a form and popup builder.",
    "w": "https://getsitecontrol.com",
    "i": "Getsitecontrol.svg"
  },
  "Ghost": {
    "d": "Ghost is a powerful app for new-media creators to publish, share, and grow a business around their content.",
    "w": "https://ghost.org",
    "i": "Ghost.svg"
  },
  "Gist Giftship": {
    "d": "Gist Giftship is a gifting app on Shopify that allows your customers to complete all of their gift shopping at once.",
    "w": "https://gist-apps.com/giftship",
    "i": "Gist.svg"
  },
  "GitBook": {
    "d": "GitBook is a command-line tool for creating documentation using Git and Markdown.",
    "w": "https://www.gitbook.com",
    "i": "GitBook.png"
  },
  "GitHub Pages": {
    "d": "GitHub Pages is a static site hosting service.",
    "w": "https://pages.github.com/",
    "i": "GitHub.svg"
  },
  "GitLab": {
    "d": "GitLab is a web-based DevOps lifecycle tool that provides a Git-repository manager providing wiki, issue-tracking and continuous integration and deployment pipeline features, using an open-source license.",
    "w": "https://about.gitlab.com",
    "i": "GitLab.svg"
  },
  "GitLab CI/CD": {
    "w": "http://about.gitlab.com/gitlab-ci",
    "i": "GitLab CI.png"
  },
  "Gitea": {
    "d": "Gitea is an open-source forge software package for hosting software development version control using Git as well as other collaborative features like bug tracking, wikis and code review. It supports self-hosting but also provides a free public first-party instance hosted on DiDi's cloud.",
    "w": "https://gitea.io",
    "i": "gitea.svg"
  },
  "Gitiles": {
    "w": "http://gerrit.googlesource.com/gitiles/"
  },
  "GiveCampus": {
    "d": "GiveCampus is a fundraising platform for nonprofit educational institutions.",
    "w": "https://go.givecampus.com",
    "i": "GiveCampus.png"
  },
  "GiveSmart": {
    "d": "GiveSmart is an event fund gathering technology that offers customisable event size, mobile bidding, text-to-donate, enhanced dashboard and reporting, seating arrangement, and more.",
    "w": "https://www.givesmart.com",
    "i": "GiveSmart.svg"
  },
  "GiveWP": {
    "d": "GiveWP is a donation plugin for WordPress.",
    "w": "https://givewp.com",
    "i": "GiveWP.svg"
  },
  "GivingFuel": {
    "d": "GivingFuel is a fundraising software solution.",
    "w": "https://www.givingfuel.com",
    "i": "GivingFuel.png"
  },
  "Gladly": {
    "d": "Gladly is a customer service platform.",
    "w": "https://www.gladly.com",
    "i": "Gladly.png"
  },
  "GlassFish": {
    "w": "http://glassfish.java.net",
    "i": "GlassFish.png"
  },
  "Glassbox": {
    "d": "Glassbox is an Israeli software company. It sells session-replay analytics software and services.",
    "w": "https://www.glassbox.com",
    "i": "Glassbox.svg"
  },
  "Glide.js": {
    "d": "Glide.js is a dependency-free JavaScript ES6 slider and carousel.",
    "w": "https://glidejs.com",
    "i": "Glide.js.svg"
  },
  "Glider.js": {
    "d": "Glider.js is a fast, lightweight, responsive, dependency-free scrollable list with customisable paging controls.",
    "w": "https://nickpiscitelli.github.io/Glider.js",
    "i": "Glider.js.svg"
  },
  "Glitch": {
    "d": "Glitch is a collaborative programming environment that lives in your browser and deploys code as you type.",
    "w": "https://glitch.com",
    "i": "Glitch.svg"
  },
  "Global-e": {
    "d": "Global-e is a provider of cross-border ecommerce solutions.",
    "w": "https://www.global-e.com",
    "i": "Global-e.svg"
  },
  "GlobalShopex": {
    "d": "GlobalShopex offers a logistics ecommerce solution easy to integrate, which helps online businesses to sell in over 200 countries.",
    "w": "http://www.globalshopex.com",
    "i": "GlobalShopex.png"
  },
  "Globo Also Bought": {
    "d": "Also Bought is a conversion Shopify app by Globo.",
    "w": "https://apps.shopify.com/globo-related-products",
    "i": "Globo apps.png"
  },
  "Globo Color Swatch": {
    "d": "Globo Color Swatch app gives you an easy-to-use tool to display product variants on both collection page, homepage and product page creatively as a means to enhance customers' experience and stimulate them to purchase.",
    "w": "https://apps.shopify.com/globo-related-products",
    "i": "Globo apps.png"
  },
  "Globo Form Builder": {
    "d": "Form Builder is a Shopify form builder app for contact form built by Globo.",
    "w": "https://apps.shopify.com/form-builder-contact-form",
    "i": "Globo apps.png"
  },
  "Globo Pre-Order": {
    "d": "Globo Pre-Order is a Shopify app for building pre-order functionality on Shopify stores.",
    "w": "https://apps.shopify.com/pre-order-pro",
    "i": "Globo apps.png"
  },
  "Glopal": {
    "d": "Glopal provides advanced international marketing solutions for ecommerce retailers and brands seeking to grow their businesses' globally.",
    "w": "https://www.glopal.com",
    "i": "Glopal.png"
  },
  "GloriaFood": {
    "d": "GloriaFood is an online ordering and food delivery platform that helps restaurant owners manage orders and streamline point-of-sale operations.",
    "w": "https://www.gloriafood.com",
    "i": "Oracle.svg"
  },
  "Glyphicons": {
    "d": "Glyphicons are icon fonts which you can use in your web projects.",
    "w": "http://glyphicons.com",
    "i": "Glyphicons.png"
  },
  "Gnuboard": {
    "d": "Gnuboard is an open-source bulletin board system or CMS from South Korea.",
    "w": "https://github.com/gnuboard",
    "i": "default.svg"
  },
  "Go": {
    "w": "https://golang.org",
    "i": "Go.svg"
  },
  "Go Instore": {
    "d": "Go Instore uses high-definition live video to connect online customers with in-store product experts.",
    "w": "https://goinstore.com",
    "i": "Go Instore.svg"
  },
  "GoAffPro": {
    "d": "Goaffpro is an affiliate marketing solution for ecommerce stores.",
    "w": "https://goaffpro.com/",
    "i": "GoAffPro.svg"
  },
  "GoAhead": {
    "w": "http://embedthis.com/products/goahead/index.html",
    "i": "GoAhead.png"
  },
  "GoAnywhere": {
    "d": "GoAnywhere by HelpSystems is a Managed File Transfer (MFT) system with sharing and collaboration features",
    "w": "https://www.goanywhere.com/",
    "i": "goanywhere.png"
  },
  "GoCache": {
    "d": "GoCache is an in-memory key:value store/cache similar to memcached that is suitable for applications running on a single machine.",
    "w": "https://www.gocache.com.br/",
    "i": "GoCache.png"
  },
  "GoCertify": {
    "d": "GoCertify is a conversion-focused and cost-effective way to verify students, key workers, under-26s, over-60s, military and more for exclusive discounts.",
    "w": "https://www.gocertify.me",
    "i": "GoCertify.png"
  },
  "GoDaddy": {
    "d": "GoDaddy is used as a web host and domain registrar.",
    "w": "https://www.godaddy.com",
    "i": "GoDaddy.svg"
  },
  "GoDaddy CoBlocks": {
    "d": "GoDaddy CoBlocks is a suite of professional page building content blocks for the WordPress Gutenberg block editor.",
    "w": "https://github.com/godaddy-wordpress/coblocks",
    "i": "GoDaddy.svg"
  },
  "GoDaddy Domain Parking": {
    "d": "GoDaddy is used as a web host and domain registrar.",
    "w": "https://www.godaddy.com",
    "i": "GoDaddy.svg"
  },
  "GoDaddy Escapade": {
    "d": "GoDaddy Escapade is a GoDaddy Primer child theme with a unique sidebar navigation.",
    "w": "https://github.com/godaddy-wordpress/primer-child-escapade",
    "i": "GoDaddy.svg"
  },
  "GoDaddy Go": {
    "d": "GoDaddy Go is a flexible Gutenberg-first WordPress theme built for go-getters everywhere.",
    "w": "https://github.com/godaddy-wordpress/go",
    "i": "GoDaddy.svg"
  },
  "GoDaddy Lyrical": {
    "d": "GoDaddy Lyrical is a GoDaddy Primer child theme with a focus on photography and beautiful fonts.",
    "w": "https://github.com/godaddy-wordpress/primer-child-lyrical",
    "i": "GoDaddy.svg"
  },
  "GoDaddy Online Store": {
    "w": "https://www.godaddy.com/en-uk/websites/online-store",
    "i": "GoDaddy.svg"
  },
  "GoDaddy Primer": {
    "d": "GoDaddy Primer is a powerful theme that brings clarity to your content in a fresh design. This is the parent for all themes in the GoDaddy Primer theme family.",
    "w": "https://github.com/godaddy-wordpress/primer",
    "i": "GoDaddy.svg"
  },
  "GoDaddy Uptown Style": {
    "d": "GoDaddy Uptown Style is a GoDaddy Primer child theme with elegance and class.",
    "w": "https://github.com/godaddy-wordpress/primer-child-uptownstyle",
    "i": "GoDaddy.svg"
  },
  "GoDaddy Website Builder": {
    "w": "https://www.godaddy.com/websites/website-builder",
    "i": "GoDaddy.svg"
  },
  "GoJS": {
    "w": "https://gojs.net/",
    "i": "GoJS.png"
  },
  "GoKwik": {
    "d": "GoKwik is a platform for solving shopping experience problems on ecommerce websites on the internet.",
    "w": "https://www.gokwik.co",
    "i": "GoKwik.svg"
  },
  "GoMage": {
    "d": "GoMage is a Magento development company with 10 years of experience.",
    "w": "https://www.gomage.com/magento-2-pwa",
    "i": "GoMage.svg"
  },
  "GoStats": {
    "w": "http://gostats.com/",
    "i": "GoStats.png"
  },
  "GoatCounter": {
    "d": "GoatCounter is an open source web analytics platform available as a hosted service (free for non-commercial use) or self-hosted app. It aims to offer easy to use and meaningful privacy-friendly web analytics as an alternative to Google Analytics or Matomo.",
    "w": "https://www.goatcounter.com/",
    "i": "goatcounter.svg"
  },
  "Goftino": {
    "d": "Goftino is an online chat service for web users.",
    "w": "https://www.goftino.com",
    "i": "Goftino.svg"
  },
  "Gogs": {
    "d": "Gogs is a self-hosted Git service written in Go.",
    "w": "http://gogs.io",
    "i": "gogs.png"
  },
  "Gomag": {
    "d": "Gomag is a B2B and B2C ecommerce platform from Romania.",
    "w": "https://www.gomag.ro",
    "i": "Gomag.svg"
  },
  "Google AdSense": {
    "d": "Google AdSense is a program run by Google through which website publishers serve advertisements that are targeted to the site content and audience.",
    "w": "https://www.google.com/adsense/start/",
    "i": "Google AdSense.svg"
  },
  "Google Ads": {
    "d": "Google Ads is an online advertising platform developed by Google.",
    "w": "https://ads.google.com",
    "i": "Google Ads.svg"
  },
  "Google Ads Conversion Tracking": {
    "d": "Google Ads Conversion Tracking is a free tool that shows you what happens after a customer interacts with your ads.",
    "w": "https://support.google.com/google-ads/answer/1722022",
    "i": "Google.svg"
  },
  "Google Analytics": {
    "d": "Google Analytics is a free web analytics service that tracks and reports website traffic.",
    "w": "http://google.com/analytics",
    "i": "Google Analytics.svg"
  },
  "Google Analytics Enhanced eCommerce": {
    "d": "Google analytics enhanced ecommerce is a plug-in which enables the measurement of user interactions with products on ecommerce websites.",
    "w": "https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce",
    "i": "Google Analytics.svg"
  },
  "Google App Engine": {
    "w": "https://cloud.google.com/appengine",
    "i": "Google App Engine.svg"
  },
  "Google Call Conversion Tracking": {
    "d": "Google Call Conversion Tracking is conversion tracking that shows which search keywords are driving the most calls.",
    "w": "https://support.google.com/google-ads/answer/6100664",
    "i": "Google.svg"
  },
  "Google Charts": {
    "d": "Google Charts is an interactive web service that creates graphical charts from user-supplied information.",
    "w": "http://developers.google.com/chart/",
    "i": "Google Charts.png"
  },
  "Google Cloud": {
    "d": "Google Cloud is a suite of cloud computing services.",
    "w": "https://cloud.google.com",
    "i": "Google Cloud.svg"
  },
  "Google Cloud CDN": {
    "d": "Cloud CDN uses Google's global edge network to serve content closer to users.",
    "w": "https://cloud.google.com/cdn",
    "i": "google-cloud-cdn.svg"
  },
  "Google Cloud Storage": {
    "d": "Google Cloud Storage allows world-wide storage and retrieval of any amount of data at any time.",
    "w": "https://cloud.google.com/storage",
    "i": "google-cloud-storage.svg"
  },
  "Google Cloud Trace": {
    "d": "Google Cloud Trace is a distributed tracing system that collects latency data from applications and displays it in the Google Cloud Console.",
    "w": "https://cloud.google.com/trace",
    "i": "google-cloud-trace.svg"
  },
  "Google Code Prettify": {
    "w": "http://code.google.com/p/google-code-prettify",
    "i": "Google.svg"
  },
  "Google Customer Reviews": {
    "d": "Google Customer Reviews is a badge on your site that can help users identify your site with the Google brand and can be placed on any page of your site.",
    "w": "https://support.google.com/merchants/answer/7105655?hl=en",
    "i": "Google.svg"
  },
  "Google Font API": {
    "d": "Google Font API is a web service that supports open-source font files that can be used on your web designs.",
    "w": "http://google.com/fonts",
    "i": "Google Font API.svg"
  },
  "Google Hosted Libraries": {
    "d": "Google Hosted Libraries is a stable, reliable, high-speed, globally available content distribution network for the most popular, open-source JavaScript libraries.",
    "w": "https://developers.google.com/speed/libraries",
    "i": "Google Developers.svg"
  },
  "Google Maps": {
    "d": "Google Maps is a web mapping service. It offers satellite imagery, aerial photography, street maps, 360° interactive panoramic views of streets, real-time traffic conditions, and route planning for traveling by foot, car, bicycle and air, or public transportation.",
    "w": "http://maps.google.com",
    "i": "Google Maps.svg"
  },
  "Google My Business": {
    "w": "https://www.google.com/business/website-builder",
    "i": "Google.svg"
  },
  "Google Optimize": {
    "d": "Google Optimize allows you to test variants of web pages and see how they perform.",
    "w": "https://optimize.google.com",
    "i": "Google Optimize.svg"
  },
  "Google PageSpeed": {
    "d": "Google PageSpeed is a family of tools designed to help websites performance optimisations.",
    "w": "http://developers.google.com/speed/pagespeed/mod",
    "i": "Google PageSpeed.svg"
  },
  "Google Pay": {
    "d": "Google Pay is a digital wallet platform and online payment system developed by Google to power in-app and tap-to-pay purchases on mobile devices, enabling users to make payments with Android phones, tablets or watches.",
    "w": "https://pay.google.com",
    "i": "Google.svg"
  },
  "Google Publisher Tag": {
    "d": "Google Publisher Tag (GPT) is an ad tagging library for Google Ad Manager which is used to dynamically build ad requests.",
    "w": "https://developers.google.com/publisher-tag/guides/get-started",
    "i": "Google Developers.svg"
  },
  "Google Sign-in": {
    "d": "Google Sign-In is a secure authentication system that reduces the burden of login for users, by enabling them to sign in with their Google account.",
    "w": "https://developers.google.com/identity/sign-in/web",
    "i": "Google.svg"
  },
  "Google Sites": {
    "w": "http://sites.google.com",
    "i": "Google Sites.png"
  },
  "Google Tag Manager": {
    "d": "Google Tag Manager is a tag management system (TMS) that allows you to quickly and easily update measurement codes and related code fragments collectively known as tags on your website or mobile app.",
    "w": "http://www.google.com/tagmanager",
    "i": "Google Tag Manager.svg"
  },
  "Google Tag Manager for WordPress": {
    "d": "Google Tag Manager for WordPress plugin places the GTM container code snippets onto your wordpress website so that you do not need to add this manually.",
    "w": "https://gtm4wp.com",
    "i": "Google Tag Manager for WordPress.png"
  },
  "Google Wallet": {
    "w": "http://wallet.google.com",
    "i": "Google Wallet.png"
  },
  "Google Web Server": {
    "w": "http://en.wikipedia.org/wiki/Google_Web_Server",
    "i": "Google.svg"
  },
  "Google Web Toolkit": {
    "d": "Google Web Toolkit (GWT) is an open-source Java software development framework that makes writing AJAX applications.",
    "w": "http://developers.google.com/web-toolkit",
    "i": "Google Web Toolkit.png"
  },
  "Google Workspace": {
    "d": "Google Workspace, formerly G Suite, is a collection of cloud computing, productivity and collaboration tools.",
    "w": "https://workspace.google.com/",
    "i": "Google.svg"
  },
  "Gorgias": {
    "d": "Gorgias is a helpdesk and chat solution designed for ecommerce stores.",
    "w": "https://www.gorgias.com/",
    "i": "Gorgias.png"
  },
  "GotiPath": {
    "d": "GotiPath is a content delivery network (CDN) provider that is associated with telecom giant Telekom Malaysia Berhad.",
    "w": "https://gotipath.com",
    "i": "GotiPath.png"
  },
  "Govalo": {
    "d": "Govalo is a software startup company that builds a Shopify app.",
    "w": "https://govalo.com",
    "i": "Govalo.svg"
  },
  "Grab Pay Later": {
    "d": "Grab Pay Later is a buy now pay later solution offered by Grab.",
    "w": "https://www.grab.com/sg/finance/pay-later/",
    "i": "Grab.svg"
  },
  "Grafana": {
    "d": "Grafana is a multi-platform open source analytics and interactive visualisation web application.",
    "w": "https://grafana.com",
    "i": "Grafana.svg"
  },
  "Graffiti CMS": {
    "w": "http://graffiticms.codeplex.com",
    "i": "Graffiti CMS.png"
  },
  "GrandNode": {
    "w": "https://grandnode.com",
    "i": "GrandNode.svg"
  },
  "Granim.js": {
    "d": "Granim.js is a lightweight javascript library to create fluid and interactive gradients animations.",
    "w": "https://sarcadass.github.io/granim.js",
    "i": "default.svg"
  },
  "GrapesJS": {
    "d": "GrapesJS is an open-source, multi-purpose page builder which combines different plugins and intuitive drag and drop interface.",
    "w": "https://grapesjs.com",
    "i": "GrapesJS.png"
  },
  "GraphCMS": {
    "d": "GraphCMS is a GraphQL headless CMS for content federation and omnichannel headless content management.",
    "w": "https://graphcms.com",
    "i": "GraphCMS.svg"
  },
  "GraphQL": {
    "d": "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.",
    "w": "https://graphql.org",
    "i": "GraphQL.svg"
  },
  "Graphene": {
    "d": "Graphene is a WordPress theme created by Graphene Themes.",
    "w": "https://www.graphene-theme.com/graphene-theme",
    "i": "Graphene Themes.png"
  },
  "Grav": {
    "w": "http://getgrav.org",
    "i": "Grav.png"
  },
  "Gravatar": {
    "d": "Gravatar is a service for providing globally unique avatars.",
    "w": "http://gravatar.com",
    "i": "Gravatar.png"
  },
  "Gravitec": {
    "d": "Gravitec is a push notification tool.",
    "w": "https://gravitec.net",
    "i": "Gravitec.png"
  },
  "Gravity Forms": {
    "w": "http://gravityforms.com",
    "i": "gravityforms.svg"
  },
  "Green Valley CMS": {
    "w": "http://www.greenvalley.nl/Public/Producten/Content_Management/CMS",
    "i": "Green Valley CMS.png"
  },
  "Greenhouse": {
    "d": "Greenhouse is an applicant tracking and hiring tool. Greenhouse features automated workflow, recruitment analytics, CRM, and onboarding.",
    "w": "https://www.greenhouse.io",
    "i": "Greenhouse.svg"
  },
  "Griddo": {
    "d": "Griddo is an Martech Experience Platform for creating custom digital experiences.",
    "w": "https://griddo.io",
    "i": "Griddo.svg"
  },
  "Gridsome": {
    "d": "Gridsome is a free and open-source Vue-powered static site generator for building static websites.",
    "w": "https://gridsome.org",
    "i": "Gridsome.svg"
  },
  "Grin": {
    "d": "Grin is a influence marketing platform.",
    "w": "https://grin.co/",
    "i": "Grin.png"
  },
  "GrocerKey": {
    "d": "GrocerKey is an ecommerce platform that helps grocery stores build an online store.",
    "w": "https://grocerkey.com",
    "i": "GrocerKey.png"
  },
  "GroupBy": {
    "d": "GroupBy is a search enging for eCommerce sites.",
    "w": "https://groupbyinc.com/",
    "i": "Groupby.svg"
  },
  "Growave": {
    "d": "Growave is the all-in-one app: social login and sharing, reviews, wishlists, instagram feed, automated emails and more.",
    "w": "https://growave.io",
    "i": "Growave.svg"
  },
  "GrowingIO": {
    "w": "https://www.growingio.com/",
    "i": "GrowingIO.png"
  },
  "Guestonline": {
    "d": "Guestonline is a restaurant table booking widget.",
    "w": "https://www.guestonline.io",
    "i": "Guestonline.svg"
  },
  "GuideIT": {
    "d": "GuideIT is a cloud hosting provider.",
    "w": "https://guideit.uk",
    "i": "GuideIT.png"
  },
  "GumGum": {
    "d": "GumGum is a technology and media company specializing in contextual intelligence.",
    "w": "https://gumgum.com",
    "i": "GumGum.svg"
  },
  "Gumlet": {
    "d": "Gumlet is a solution to optimize images.",
    "w": "https://www.gumlet.com/",
    "i": "Gumlet.png"
  },
  "Gumroad": {
    "d": "Gumroad is a self-publishing digital marketplace platform to sell digital services such as books, memberships, courses and other digital services.",
    "w": "https://gumroad.com",
    "i": "Gumroad.svg"
  },
  "Gumstack": {
    "d": "Gumstack provides a live video shopping solution for eCommerce.",
    "w": "https://gumstack.com/",
    "i": "Gumstack.svg"
  },
  "Gutenberg": {
    "d": "Gutenberg is the code name for the new block based editor introduced in WordPress 5.",
    "w": "https://github.com/WordPress/gutenberg",
    "i": "Gutenberg.png"
  },
  "Gutenberg Blocks": {
    "d": "Gutenberg Blocks are the editor blocks that are used to create content layouts in the new WordPress block editor aka Gutenberg by Brainstorm Force.",
    "w": "https://ultimategutenberg.com",
    "i": "Gutenberg Blocks.png"
  },
  "git": {
    "w": "http://git-scm.com",
    "i": "git.svg"
  },
  "gitlist": {
    "w": "http://gitlist.org"
  },
  "gitweb": {
    "w": "http://git-scm.com",
    "i": "git.svg"
  },
  "govCMS": {
    "w": "https://www.govcms.gov.au",
    "i": "govCMS.svg"
  },
  "gunicorn": {
    "w": "http://gunicorn.org",
    "i": "gunicorn.png"
  },
  "H2O": {
    "d": "H2O is a fast and secure HTTP/2 server written in C by Kazuho Oku.",
    "w": "https://github.com/h2o/h2o",
    "i": "default.svg"
  },
  "HCL Commerce": {
    "d": "HCL Commerce is a software platform framework for ecommerce, including marketing, sales, customer and order processing functionality.",
    "w": "https://www.hcltechsw.com/commerce",
    "i": "HCL Commerce.svg"
  },
  "HCL Digital Experience": {
    "d": "HCL Digital Experience software empowers you to create, manage and deliver engaging omni-channel digital experiences to virtually all audiences.",
    "w": "https://www.hcltechsw.com/dx",
    "i": "hcl-dx.png"
  },
  "HCL Domino": {
    "d": "HCL Domino, formerly called IBM Domino (1995) and Lotus Domino (1989), is an enterprise server application development platform.",
    "w": "https://www.hcltechsw.com/domino",
    "i": "HCL Domino.svg"
  },
  "HHVM": {
    "w": "http://hhvm.com",
    "i": "HHVM.png"
  },
  "HP Compact Server": {
    "w": "http://hp.com",
    "i": "HP.svg"
  },
  "HP iLO": {
    "d": "HP iLO is a tool that provides multiple ways to configure, update, monitor, and run servers remotely.",
    "w": "http://hp.com",
    "i": "HP.svg"
  },
  "HSTS": {
    "d": "HTTP Strict Transport Security (HSTS) informs browsers that the site should only be accessed using HTTPS.",
    "w": "https://www.rfc-editor.org/rfc/rfc6797#section-6.1"
  },
  "HTTP/2": {
    "d": "HTTP/2 (originally named HTTP/2.0) is a major revision of the HTTP network protocol used by the World Wide Web.",
    "w": "https://http2.github.io",
    "i": "HTTP2.svg"
  },
  "HTTP/3": {
    "d": "HTTP/3 is the third major version of the Hypertext Transfer Protocol used to exchange information on the World Wide Web.",
    "w": "https://httpwg.org/",
    "i": "HTTP3.svg"
  },
  "Haddock": {
    "d": "Haddock is a tool for automatically generating documentation from annotated Haskell source code.",
    "w": "http://www.haskell.org/haddock/"
  },
  "Halo": {
    "w": "https://halo.run",
    "i": "Halo.png"
  },
  "Hamechio": {
    "d": "Hamechio is a web application framework.",
    "w": "https://hamech.io",
    "i": "Hamechio.svg"
  },
  "Hammer.js": {
    "w": "https://hammerjs.github.io",
    "i": "Hammer.js.png"
  },
  "Handlebars": {
    "d": "Handlebars is a JavaScript library used to create reusable webpage templates.",
    "w": "http://handlebarsjs.com",
    "i": "Handlebars.png"
  },
  "Handtalk": {
    "d": "Handtalk is an accessiblity plug-in which uses sign language to make sites accessible.",
    "w": "https://www.handtalk.me/",
    "i": "Handtalk.png"
  },
  "Hansel": {
    "d": "Hansel is a B2B enterprise software that deploys real-time Nudges to drive feature adoption and address user drop-offs, at scale.",
    "w": "https://hansel.io",
    "i": "Hansel.png"
  },
  "Happy Returns": {
    "d": "Happy Returns is a return software and reverse logistics company, provides a packaging-free, in-person way for customers to return an online purchase for an immediate refund.",
    "w": "https://happyreturns.com",
    "i": "Happy Returns.png"
  },
  "HappyFox Helpdesk": {
    "d": "HappyFox is a help desk ticketing system that is hosted on cloud, supporting multiple customer support channels like email, voice and live chat.",
    "w": "https://www.happyfox.com/customer-service-software/",
    "i": "HappyFox.svg"
  },
  "HappyFox Live Chat": {
    "d": "HappyFox is a help desk ticketing system that is hosted on cloud, supporting multiple customer support channels like email, voice and live chat.",
    "w": "https://www.happyfox.com/live-chat",
    "i": "HappyFox.svg"
  },
  "Haptik": {
    "d": "Haptik is an Indian enterprise conversational AI platform founded in August 2013, and acquired by Reliance Industries Limited in 2019.",
    "w": "https://www.haptik.ai",
    "i": "Haptik.png"
  },
  "Haravan": {
    "d": "Haravan is a multi-channel ecommerce services provider from Vietnam.",
    "w": "https://www.haravan.com",
    "i": "Haravan.svg"
  },
  "Harbor": {
    "d": "Harbor is an open-source registry that secures artifacts with policies and role-based access control, ensures images are scanned and free from vulnerabilities, and signs images as trusted.",
    "w": "https://goharbor.io",
    "i": "Harbor.svg"
  },
  "HashThemes Total": {
    "d": "HashThemes Total is the powerful and creative multipurpose WordPress theme.",
    "w": "https://hashthemes.com/wordpress-theme/total",
    "i": "HashThemes.png"
  },
  "Hashnode": {
    "d": "Hashnode is a free developer blogging platform that allows you to publish articles on your own domain and helps you stay connected with a global developer community.",
    "w": "https://hashnode.com/",
    "i": "hashnode.png"
  },
  "Haskell": {
    "w": "http://wiki.haskell.org/Haskell",
    "i": "Haskell.png"
  },
  "Hatena Blog": {
    "d": "Hatena Blog is one of the traditional blog platforms in Japan.",
    "w": "https://hatenablog.com",
    "i": "Hatena.svg"
  },
  "HeadJS": {
    "w": "http://headjs.com",
    "i": "HeadJS.png"
  },
  "Headless UI": {
    "d": "Headless UI is an unstyled component library for either React.js or Vue.js from the same people that created Tailwind CSS.",
    "w": "https://headlessui.dev",
    "i": "Headless UI.svg"
  },
  "Heap": {
    "d": "Heap is an analytics platform.",
    "w": "https://heap.io",
    "i": "Heap.svg"
  },
  "Heartland Payment Systems": {
    "d": "Heartland Payment Systems is a US-based payment processing and technology provider.",
    "w": "https://www.heartlandpaymentsystems.com",
    "i": "Heartland Payment Systems.svg"
  },
  "Helhost": {
    "d": "Helhost is a web hosting provider and internet domain registrar from Democratic Republic of Congo.",
    "w": "https://www.helhost.com",
    "i": "Helhost.svg"
  },
  "HeliumWeb": {
    "d": "HeliumWeb is a server-side (backend) web framework written in PHP & JavaScript",
    "w": "https://heliumweb.adrikikicp-development.ml"
  },
  "Helix Ultimate": {
    "d": "Helix Ultimate a free template framework for Joomla.",
    "w": "https://www.joomshaper.com/joomla-templates/helixultimate",
    "i": "HelixUltimate.svg"
  },
  "Helixo UFE": {
    "d": "Helixo UFE is a lightweight Shopify upsell sales funnel app.",
    "w": "https://helixo.co/upsell-funnel-engine/",
    "i": "Helixo.svg"
  },
  "Hello Bar": {
    "d": "Hello Bar is a customizable notification bar that draws visitors to an important call to action on the website.",
    "w": "http://hellobar.com",
    "i": "Hello Bar.png"
  },
  "Hello Elementor": {
    "d": "Hello Elementor is a WordPress theme built for the Elementor website builder platform. It uses minimal styling and scripts for maximum speed and design freedom.",
    "w": "https://elementor.com/hello-theme/",
    "i": "Hello Elementor.png"
  },
  "Help Scout": {
    "d": "Help Scout is a customer service platform including email, a knowledge base tool and live chat.",
    "w": "https://www.helpscout.com",
    "i": "Help Scout.svg"
  },
  "HelpDocs": {
    "d": "HelpDocs is an knowledge management system.",
    "w": "https://www.helpdocs.io",
    "i": "HelpDocs.svg"
  },
  "Here": {
    "d": "HERE is a PaaS for creating custom maps, visualize location datasets, gather insights and buy and sell location assets.",
    "w": "https://www.here.com",
    "i": "here.svg"
  },
  "Hermes": {
    "d": "Hermes offers integrated solutions along the supply chain and partners with national and international trading companies.",
    "w": "https://www.hermesworld.com",
    "i": "Hermes.svg"
  },
  "Hero": {
    "d": "Hero is a virtual shopping platform for ecommerce and retail stores.",
    "w": "https://www.usehero.com/",
    "i": "Hero.png"
  },
  "Heroku": {
    "d": "Heroku is a cloud platform as a service (PaaS) supporting several programming languages.",
    "w": "https://www.heroku.com/",
    "i": "heroku.svg"
  },
  "Hestia": {
    "d": "Hestia is a modern WordPress theme for professionals a multipurpose one-page design, widgetized footer, blog/news page, and a clean look.",
    "w": "https://themeisle.com/themes/hestia/",
    "i": "ThemeIsle.png"
  },
  "HetrixTools": {
    "d": "HetrixTools is an uptime and blacklist monitoring platform.",
    "w": "https://hetrixtools.com",
    "i": "HetrixTools.png"
  },
  "Hetzner": {
    "d": "Hetzner provides dedicated hosting, shared web hosting, virtual private servers, managed servers, domain names, SSL certificates, storage boxes, and cloud.",
    "w": "https://www.hetzner.com",
    "i": "Hetzner.svg"
  },
  "Hexo": {
    "d": "Hexo is a blog framework powered by Node.js.",
    "w": "https://hexo.io",
    "i": "Hexo.png"
  },
  "Hextom Free Shipping Bar": {
    "d": "Free Shipping Bar is a Shopify app built by Hextom. Free Shipping Bar help promote free shipping with progressive messages to motivate customers to buy more.",
    "w": "https://hextom.com/case_study/free-shipping-bar",
    "i": "Hextom.png"
  },
  "Hextom Ultimate Sales Boost": {
    "d": "Ultimate Sales Boost by Hextom is an app designed to help you drive more sales by creating a sense of urgency, scarcity and trust.",
    "w": "https://hextom.com/case_study/ultimate-sales-boost",
    "i": "Hextom.png"
  },
  "Hi Platform": {
    "d": "Hi Platform provider of an online customer relationship platform.",
    "w": "https://www.hiplatform.com",
    "i": "Hi Platform.svg"
  },
  "Hiawatha": {
    "w": "http://hiawatha-webserver.org",
    "i": "Hiawatha.png"
  },
  "HighStore": {
    "d": "HighStore is an ecommerce platform from Iran.",
    "w": "https://digitalserver.ir"
  },
  "Highcharts": {
    "d": "Highcharts is a charting library written in pure JavaScript, for adding interactive charts to a website or web application.",
    "w": "https://www.highcharts.com",
    "i": "Highcharts.svg"
  },
  "Highlight.js": {
    "w": "https://highlightjs.org/",
    "i": "Highlight.js.png"
  },
  "Highstock": {
    "w": "http://highcharts.com/products/highstock",
    "i": "Highcharts.svg"
  },
  "HikeOrders": {
    "d": "HikeOrders is a web accessibility overlay that claims to make your site disability friendly.",
    "w": "https://hikeorders.com/",
    "i": "HikeOrders.png"
  },
  "Hinza Advanced CMS": {
    "w": "http://hinzaco.com",
    "i": "hinza_advanced_cms.svg"
  },
  "Hireology": {
    "d": "Hireology is a staffing and hiring platform for the franchise and retail-automotive industries.",
    "w": "https://hireology.com",
    "i": "Hireology.png"
  },
  "Hirschmann HiOS": {
    "d": "Hirschmann HiOS is an operating system for industrial network equipment.",
    "w": "https://hirschmann.com/",
    "i": "hirschmann_OS.png"
  },
  "Histats": {
    "d": "Histats is a simple website visitor analysis and tracking tool.",
    "w": "https://www.histats.com",
    "i": "Histats.png"
  },
  "History": {
    "d": "Manage session history with JavaScript",
    "w": "https://github.com/ReactTraining/history"
  },
  "Hoefler&Co": {
    "d": "Hoefler&Co is a digital type foundry (font design studio) in Woburn, Massachusetts (formerly New York City), founded by type designer Jonathan Hoefler. Hoefler&Co designs typefaces for clients and for retail on its website.",
    "w": "https://www.typography.com",
    "i": "Hoefler&Co.svg"
  },
  "Hogan.js": {
    "w": "https://twitter.github.io/hogan.js/",
    "i": "Hogan.js.png"
  },
  "Homerr": {
    "d": "Homerr is a logistics company operating in the Netherlands and Belgium.",
    "w": "https://www.homerr.com",
    "i": "Homerr.svg"
  },
  "Homestead": {
    "d": "Homestead is a website builder.",
    "w": "https://www.homestead.com",
    "i": "Homestead.png"
  },
  "Honeybadger": {
    "d": "Honeybadger provides exception and uptime monitoring to keep your web apps error-free.",
    "w": "https://www.honeybadger.io",
    "i": "honey-badger.svg"
  },
  "HostEurope": {
    "d": "HostEurope is a European website hosting, email and domain name registrar company headquartered Hayes, West London.",
    "w": "https://www.hosteurope.de",
    "i": "HostEurope.png"
  },
  "Hostens": {
    "d": "Hostens is a web hosting company specialising in hosting services, virtual private server hosting, and the domain name or transition.",
    "w": "https://www.hostens.com",
    "i": "Hostens.svg"
  },
  "Hostgator": {
    "d": "HostGator is a Houston-based provider of shared, reseller, virtual private server, and dedicated web hosting with an additional presence in Austin, Texas.",
    "w": "https://www.hostgator.com",
    "i": "Hostgator.svg"
  },
  "Hosting Ukraine": {
    "d": "Hosting Ukraine is a web hosting provider and internet domain registrar.",
    "w": "https://www.ukraine.com.ua",
    "i": "Hosting Ukraine.png"
  },
  "Hostinger": {
    "d": "Hostinger is an employee-owned Web hosting provider and internet domain registrar.",
    "w": "https://www.hostinger.com",
    "i": "Hostinger.svg"
  },
  "Hostinger CDN": {
    "d": "Hostinger Content Delivery Network (CDN).",
    "w": "https://www.hostinger.com",
    "i": "Hostinger.svg"
  },
  "Hostiq": {
    "d": "Hostiq is a web hosting provider and internet domain registrar.",
    "w": "https://hostiq.ua",
    "i": "Hostiq.png"
  },
  "Hostmeapp": {
    "d": "Hostmeapp is an restaurant software. Includes reservation, waitlist, guestbook and marketing tools.",
    "w": "https://www.hostmeapp.com",
    "i": "Hostmeapp.svg"
  },
  "Hostpoint": {
    "d": "Hostpoint is a Switzerland-based web hosting company.",
    "w": "https://www.hostpoint.ch",
    "i": "Hostpoint.svg"
  },
  "Hotaru CMS": {
    "w": "http://hotarucms.org",
    "i": "Hotaru CMS.png"
  },
  "Hotjar": {
    "d": "Hotjar is a suite of analytic tools to assist in the gathering of qualitative data, providing feedback through tools such as heatmaps, session recordings, and surveys.",
    "w": "https://www.hotjar.com",
    "i": "Hotjar.svg"
  },
  "Hotjar Incoming Feedback": {
    "d": "Hotjar Incoming Feedback is a widget that sits at the edge of a page.",
    "w": "https://www.hotjar.com",
    "i": "Hotjar.svg"
  },
  "Howler.js": {
    "d": "Howler.js is an audio library with support for the Web Audio API and a fallback mechanism for HTML5 Audio.",
    "w": "https://howlerjs.com",
    "i": "Howler.js.svg"
  },
  "HrFlow.ai": {
    "d": "HrFlow.ai is an HR data automation API platform.",
    "w": "https://hrflow.ai",
    "i": "HrFlow.ai.svg"
  },
  "Htmx": {
    "d": "Htmx is a JavaScript library for performing AJAX requests, triggering CSS transitions, and invoking WebSocket and server-sent events directly from HTML elements.",
    "w": "https://htmx.org",
    "i": "Htmx.svg"
  },
  "HubSpot": {
    "d": "HubSpot is a marketing and sales software that helps companies attract visitors, convert leads, and close customers.",
    "w": "https://www.hubspot.com",
    "i": "HubSpot.svg"
  },
  "HubSpot Analytics": {
    "d": "HubSpot is a marketing and sales software that helps companies attract visitors, convert leads, and close customers.",
    "w": "https://www.hubspot.com/products/marketing/analytics",
    "i": "HubSpot.svg"
  },
  "HubSpot CMS Hub": {
    "d": "CMS Hub is a content management platform by HubSpot for marketers to manage, optimize, and track content performance on websites, blogs, and landing pages.",
    "w": "https://www.hubspot.com/products/cms",
    "i": "HubSpot.svg"
  },
  "HubSpot Chat": {
    "d": "HubSpot Chat is a tool where you can view, manage, and reply to incoming messages from multiple channels.",
    "w": "https://www.hubspot.com/products/crm/live-chat",
    "i": "HubSpot.svg"
  },
  "HubSpot Cookie Policy Banner": {
    "d": "HubSpot Cookie Policy banner is a cookie compliance functionality from HubSpot.",
    "w": "https://knowledge.hubspot.com/reports/customize-your-cookie-tracking-settings-and-privacy-policy-alert",
    "i": "HubSpot.svg"
  },
  "HubSpot WordPress plugin": {
    "d": "HubSpot is a platform with all the tools and integrations you need for marketing, sales, and customer service. HubSpot WordPress plugin allows you to manage contacts (CRM), engage visitors with live chat and chatbots, add beautiful forms to pages, create engaging email marketing campaigns, and more.",
    "w": "https://wordpress.org/plugins/leadin/",
    "i": "HubSpot.svg"
  },
  "Huberway": {
    "d": "Huberway is a content management system, based on PHP and JavaScript, used to create advanced sales portals oriented towards industrialization 4.0.",
    "w": "https://www.huberway.com",
    "i": "Huberway.svg"
  },
  "Huberway Analytics": {
    "d": "Huberway Analytics is a free web analytics service that tracks and reports website traffic.",
    "w": "https://www.huberway.com/analytics-software",
    "i": "Huberway.svg"
  },
  "Hugo": {
    "d": "Hugo is an open-source static site generator written in Go.",
    "w": "http://gohugo.io",
    "i": "Hugo.svg"
  },
  "HulkApps Age Verification": {
    "d": "HulkApps Age Verification allow your customers to certify their age before they land in your store.",
    "w": "https://www.hulkapps.com/products/age-verification-shopify",
    "i": "HulkApps.svg"
  },
  "HulkApps Form Builder": {
    "d": "HulkApps Form Builder is an application that creates customizable, job-specific forms for unit needs.",
    "w": "https://www.hulkapps.com/products/form-builder-shopify",
    "i": "HulkApps.svg"
  },
  "HulkApps GDPR/CCPA Compliance Manager": {
    "d": "HulkApps GDPR/CCPA Compliance Manager is a consent management solution.",
    "w": "https://www.hulkapps.com/products/gdpr-ccpa-cookie-manager-shopify-app",
    "i": "HulkApps.svg"
  },
  "HulkApps Infinite Product Options": {
    "d": "HulkApps Infinite Product Options is a unlimited custom options for products. Display variant options as buttons, color and image swatches, and more.",
    "w": "https://www.hulkapps.com/products/infinite-product-options-shopify",
    "i": "HulkApps.svg"
  },
  "HulkApps Product Reviews": {
    "d": "HulkApps Product Reviews is a customer product reviews app for building social proof for store.",
    "w": "https://www.hulkapps.com/products/product-reviews-shopify",
    "i": "HulkApps.svg"
  },
  "Human Presence": {
    "d": "Human Presence is a bot detection and spam protection software for WordPress and Shopify.",
    "w": "https://www.humanpresence.io",
    "i": "human_presence.svg"
  },
  "Humm": {
    "d": "Humm (formerly Flexigroup) is a buy now pay later service operating in Australia.",
    "w": "https://www.shophumm.com",
    "i": "Humm.svg"
  },
  "Hund.io": {
    "d": "Hund.io is an automated status pages with monitoring.",
    "w": "https://hund.io",
    "i": "Hund.io.svg"
  },
  "Hushly": {
    "d": "Hushly is an all-in-one B2B marketing software platform.",
    "w": "https://www.hushly.com",
    "i": "Hushly.png"
  },
  "Hydrogen": {
    "d": "Hydrogen is a front-end web development framework used for building Shopify custom storefronts.",
    "w": "https://hydrogen.shopify.dev",
    "i": "Hydrogen.svg"
  },
  "Hypercorn": {
    "w": "https://pgjones.gitlab.io/hypercorn/",
    "i": "hypercorn.png"
  },
  "Hyperspeed": {
    "d": "Hyperspeed is the most advanced speed booster for Shopify.",
    "w": "https://www.hyperspeed.me",
    "i": "Hyperspeed.png"
  },
  "Hypervisual Page Builder": {
    "d": "Hypervisual Page Builder is a page builder for Shopify.",
    "w": "https://gethypervisual.com",
    "i": "Hypervisual.png"
  },
  "Hypestyle CSS": {
    "d": "Hypestyle CSS is a small CSS library build on utility classes and components.",
    "w": "https://www.hypestylecss.xyz",
    "i": "Hypestyle CSS.png"
  },
  "Hyva Themes": {
    "d": "Hyva Themes is a performance-optimised theme for Magento 2 which eliminated the third-party libraries and having only two dependencies Alpine.js and Tailwind CSS.",
    "w": "https://hyva.io",
    "i": "Hyva Themes.svg"
  },
  "h5ai": {
    "d": "h5ai is a modern HTTP web server index for Apache httpd, lighttpd, and nginx.",
    "w": "https://github.com/lrsjng/h5ai",
    "i": "default.svg"
  },
  "hCaptcha": {
    "d": "hCaptcha is an anti-bot solution that protects user privacy and rewards websites.",
    "w": "https://www.hcaptcha.com",
    "i": "hCaptcha.svg"
  },
  "hantana": {
    "w": "https://hantana.org/",
    "i": "hantana.png"
  },
  "hoolah": {
    "d": "hoolah is Asia's omni-channel buy now pay later platform.",
    "w": "https://www.hoolah.co",
    "i": "hoolah.png"
  },
  "IBM Coremetrics": {
    "w": "http://ibm.com/software/marketing-solutions/coremetrics",
    "i": "IBM.svg"
  },
  "IBM DataPower": {
    "d": "IBM DataPower Gateway is a single multi-channel gateway designed to help provide security, control, integration and optimized access to a full range of mobile, web, application programming interface (API), service-oriented architecture (SOA), B2B and cloud workloads.",
    "w": "https://www.ibm.com/products/datapower-gateway",
    "i": "DataPower.png"
  },
  "IBM HTTP Server": {
    "w": "http://ibm.com/software/webservers/httpservers",
    "i": "IBM.svg"
  },
  "IIS": {
    "d": "Internet Information Services (IIS) is an extensible web server software created by Microsoft for use with the Windows NT family.",
    "w": "https://www.iis.net",
    "i": "Microsoft.svg"
  },
  "INFOnline": {
    "w": "https://www.infonline.de",
    "i": "INFOnline.png"
  },
  "IONOS": {
    "d": "IONOS is the web hosting and cloud partner for small and medium-sized businesses.",
    "w": "https://www.ionos.com",
    "i": "IONOS.svg"
  },
  "IPB": {
    "w": "https://invisioncommunity.com/",
    "i": "IPB.png"
  },
  "IPFS": {
    "d": "IPFS is a peer-to-peer hypermedia protocol that provides a distributed hypermedia web.",
    "w": "https://ipfs.tech/",
    "i": "IPFS.svg"
  },
  "IPInfoDB": {
    "d": "IPInfoDB is the API that returns the location of an IP address.",
    "w": "https://www.ipinfodb.com/",
    "i": "IPInfoDB.png"
  },
  "IPinfo": {
    "d": "IPinfo is an IP address data provider.",
    "w": "https://ipinfo.io",
    "i": "IPinfo.svg"
  },
  "Iamport": {
    "d": "Iamport is an information technology company based in South Korea.",
    "w": "https://www.iamport.kr",
    "i": "Iamport.png"
  },
  "Ibexa DXP ": {
    "d": "Ibexa DXP is an open-source enterprise PHP content management system (CMS) and Digital Experience Platform (DXP) developed by the company Ibexa (known previously as eZ Systems).",
    "w": "https://www.ibexa.co",
    "i": "Ibexa.svg"
  },
  "Ideasoft": {
    "d": "Ideasoft is a Turkish software company providing web-based software solutions, software design, ecommerce solutions, and other services.",
    "w": "https://www.ideasoft.com.tr",
    "i": "Ideasoft.png"
  },
  "Identrust": {
    "d": "denTrust is a digital identity authentication solution.",
    "w": "https://www.identrust.com/",
    "i": "Identrust.svg"
  },
  "IdoSell Shop": {
    "d": "IdoSell Shop is a fully functional ecommerce software platform.",
    "w": "https://www.idosell.com",
    "i": "idosellshop.png"
  },
  "Ikas": {
    "d": "Ikas is a new generation ecommerce platform designed for small businesses.",
    "w": "https://ikas.com",
    "i": "Ikas.svg"
  },
  "Iluria": {
    "d": "Iluria is a hosted ecommerce platform from Brazil.",
    "w": "https://www.iluria.com.br",
    "i": "Iluria.png"
  },
  "Image Relay": {
    "d": "Image Relay is a digital asset management system that allows organizations to upload, manage, organize, monitor and track their digital assets.",
    "w": "https://www.imagerelay.com",
    "i": "Image Relay.svg"
  },
  "ImageEngine": {
    "d": "ImageEngine is an intelligent image content delivery network. ImageEngine will resize your image content tailored to the end users device.",
    "w": "https://imageengine.io",
    "i": "ImageEngine.svg"
  },
  "Imagely NextGEN Gallery": {
    "d": "NextGEN Gallery is a WordPress gallery plugin maintained by Imagely.",
    "w": "https://www.imagely.com/wordpress-gallery-plugin",
    "i": "Imagely.png"
  },
  "Imber": {
    "d": "Imber is an all-in-one marketing automation platform built for customer support (live chat), sales, and marketing.",
    "w": "https://imber.live",
    "i": "Imber.png"
  },
  "Imgix": {
    "d": "Imgix is a visual media platform for managing, processing, rendering, optimising and delivering your existing images.",
    "w": "https://imgix.com/",
    "i": "Imgix.svg"
  },
  "Immutable.js": {
    "w": "https://facebook.github.io/immutable-js/",
    "i": "Immutable.js.png"
  },
  "Impact": {
    "d": "Impact helps businesses contract and pay partners.",
    "w": "https://impact.com/",
    "i": "Impact.svg"
  },
  "Imperva": {
    "w": "https://www.imperva.com/",
    "i": "Imperva.svg"
  },
  "ImpressCMS": {
    "w": "http://www.impresscms.org",
    "i": "ImpressCMS.png"
  },
  "ImpressPages": {
    "w": "http://impresspages.org",
    "i": "ImpressPages.png"
  },
  "Imweb": {
    "d": "Imweb is a ecommerce website builder software.",
    "w": "https://imweb.me",
    "i": "Imweb.png"
  },
  "In Cart Upsell & Cross-Sell": {
    "d": "In Cart Upsell & Cross-Sell is a Shopify app built by InCart Upsell, provides targeted upsells and cross-sells directly in your cart and product page.",
    "w": "https://incartupsell.com",
    "i": "In Cart Upsell & Cross-Sell.png"
  },
  "InMoment": {
    "d": "InMoment provides SaaS based customer survey and enterprise feedback management solutions.",
    "w": "https://inmoment.com",
    "i": "InMoment.svg"
  },
  "InSyncai": {
    "d": "InSyncai offers a conversational platform for enterprises to design and build chatbots having applications in customer support and services.",
    "w": "https://www.insyncai.com",
    "i": "InSyncai.png"
  },
  "Incapsula": {
    "d": "Incapsula is a cloud-based application delivery platform. It uses a global content delivery network to provide web application security, DDoS mitigation, content caching, application delivery, load balancing and failover services.",
    "w": "http://www.incapsula.com",
    "i": "Incapsula.png"
  },
  "Includable": {
    "w": "http://includable.com",
    "i": "Includable.svg"
  },
  "Index Exchange": {
    "d": "Index Exchange is a customizable exchange technology that enables sell side media firms to monetize ad inventories programmatically and in real time.",
    "w": "https://www.indexexchange.com",
    "i": "Index Exchange.svg"
  },
  "Indexhibit": {
    "w": "http://www.indexhibit.org"
  },
  "Indi": {
    "d": "Indi is a video social network where everyone - artists, brands, retailers, nonprofits, celebrities and individuals - can connect with fans and supporters to interact directly with your brand utilising exclusive Video Challenges and Video Threads tailor made by you.",
    "w": "https://indi.com",
    "i": "Indi.png"
  },
  "Indico": {
    "w": "http://indico-software.org",
    "i": "Indico.png"
  },
  "Indy": {
    "w": "http://indyproject.org"
  },
  "Inertia.js": {
    "d": "Inertia.js is a protocol for creating monolithic single-page applications.",
    "w": "https://inertiajs.com",
    "i": "Inertia.svg"
  },
  "InfernoJS": {
    "w": "https://infernojs.org",
    "i": "InfernoJS.png"
  },
  "Infogram": {
    "d": "Infogram is a web-based data visualisation and infographics platform.",
    "w": "https://infogram.com",
    "i": "Infogram.svg"
  },
  "Infolinks": {
    "d": "Infolinks is an online advertising platform for publishers and advertisers.",
    "w": "https://www.infolinks.com",
    "i": "Infolinks.png"
  },
  "Infomaniak": {
    "d": "Infomaniak is a hosting company based in Geneva, Switzerland.",
    "w": "https://www.infomaniak.com",
    "i": "Infomaniak.svg"
  },
  "Infoset": {
    "d": "Infoset is an advanced communication and support solutions.",
    "w": "https://infoset.app",
    "i": "Infoset.svg"
  },
  "Insider": {
    "d": "Insider is the first integrated Growth Management Platform helping digital marketers drive growth across the funnel, from Acquisition to Activation, Retention, and Revenue from a unified platform powered by Artificial Intelligence and Machine Learning.",
    "w": "https://useinsider.com",
    "i": "Insider.svg"
  },
  "Inspectlet": {
    "w": "https://www.inspectlet.com/",
    "i": "inspectlet.png"
  },
  "Instabot": {
    "d": "Instabot is a conversion chatbot that understands your users, and curates information, answers questions, captures contacts, and books meetings instantly.",
    "w": "https://instabot.io/",
    "i": "Instabot.png"
  },
  "Instafeed": {
    "d": "Instafeed is an official Instagram app.",
    "w": "https://apps.shopify.com/instafeed",
    "i": "Instafeed.png"
  },
  "Instamojo": {
    "d": "Instamojo is a Bangalore-based company that provides a platform for selling digital goods and collecting payment online.",
    "w": "https://www.instamojo.com/",
    "i": "instamojo.svg"
  },
  "Instana": {
    "d": "Instana is a Kubernetes-native APM tool which is built for new-stack including Microservices and lately Serverless but also supports the existing VM based stacks  including several supported technologies.",
    "w": "https://www.instana.com",
    "i": "Instana.svg"
  },
  "Instant.Page": {
    "d": "Instant.Page is a JavaScript library which uses just-in-time preloading technique to make websites faster.",
    "w": "https://instant.page/",
    "i": "Instant.page.svg"
  },
  "InstantCMS": {
    "w": "http://www.instantcms.ru",
    "i": "InstantCMS.png"
  },
  "InstantClick": {
    "d": "InstantClick is a JavaScript library that speeds up your website, making navigation faster.",
    "w": "http://instantclick.io/",
    "i": "InstantClick.svg"
  },
  "InstantGeo": {
    "d": "InstantGeo is a service that provides IP geolocation to web pages",
    "w": "https://instantgeo.info",
    "i": "InstantGeo.svg"
  },
  "Instapage": {
    "d": "Instapage is a cloud-based landing page platform designed for marketing teams and agencies.",
    "w": "https://instapage.com",
    "i": "Instapage.svg"
  },
  "Instatus": {
    "d": "Instatus is a status and incident communication tool.",
    "w": "https://instatus.com",
    "i": "Instatus.svg"
  },
  "Integral Ad Science": {
    "d": "Integral Ad Science is an American publicly owned technology company that analyses the value of digital advertising placements.",
    "w": "https://integralads.com",
    "i": "Integral Ad Science.svg"
  },
  "Intel Active Management Technology": {
    "d": "Intel Active Management Technology (AMT) is a proprietary remote management and control system for personal computers with Intel CPUs.",
    "w": "http://intel.com",
    "i": "Intel Active Management Technology.png"
  },
  "IntenseDebate": {
    "d": "IntenseDebate is a blog commenting system that supports Typepad, Blogger and Wordpress blogs. The system allows blog owners to track and moderate comments from one place with features like threading, comment analytics, user reputation, and comment aggregation.",
    "w": "http://intensedebate.com",
    "i": "IntenseDebate.png"
  },
  "Interact": {
    "d": "Interact is a tool for creating online quizzes.",
    "w": "https://www.tryinteract.com",
    "i": "Interact.svg"
  },
  "Intercom": {
    "d": "Intercom is an American software company that produces a messaging platform which allows businesses to communicate with prospective and existing customers within their app, on their website, through social media, or via email.",
    "w": "https://www.intercom.com",
    "i": "Intercom.svg"
  },
  "Intercom Articles": {
    "d": "Intercom Articles is a tool to create, organise and publish help articles.",
    "w": "https://www.intercom.com/articles",
    "i": "Intercom.svg"
  },
  "Intersection Observer": {
    "d": "Intersection Observer is a browser API that provides a way to observe the visibility and position of a DOM element relative to the containing root element or viewport.",
    "w": "https://www.w3.org/TR/intersection-observer",
    "i": "W3C.png"
  },
  "Intershop": {
    "d": "Intershop is an ecommerce platform, tailored to the needs of complex business processes and major organisations.",
    "w": "http://intershop.com",
    "i": "Intershop.png"
  },
  "Invenio": {
    "d": "Invenio is an open-source software framework for large-scale digital repositories that provides the tools for management of digital assets in an institutional repository and research data management systems.",
    "w": "http://invenio-software.org",
    "i": "Invenio.png"
  },
  "Inventrue": {
    "d": "Inventrue creates websites for RV, Motorsports and Trailer Dealerships.",
    "w": "https://www.inventrue.com",
    "i": "Inventrue.svg"
  },
  "Inveon": {
    "d": "Inveon is a technology company that has been delivering ecommerce infrastructure software and mcommerce applications.",
    "w": "https://www.inveon.com",
    "i": "Inveon.svg"
  },
  "Invoca": {
    "d": "Invoca is an AI-powered call tracking and conversational analytics company.",
    "w": "https://www.invoca.com",
    "i": "Invoca.svg"
  },
  "Ionic": {
    "w": "https://ionicframework.com",
    "i": "ionic.png"
  },
  "Ionicons": {
    "d": "Ionicons is an open-source icon set crafted for web, iOS, Android, and desktop apps.",
    "w": "http://ionicons.com",
    "i": "Ionicons.png"
  },
  "IrisLMS": {
    "d": "IrisLMS comprehensive education management system, in order to support e-learning and provide suitable conditions for holding online and offline classes with all facilities.",
    "w": "https://irislms.ir",
    "i": "IrisLMS.png"
  },
  "Irroba": {
    "w": "https://www.irroba.com.br/",
    "i": "irroba.svg"
  },
  "Isotope": {
    "d": "Isotope.js is a JavaScript library that makes it easy to sort, filter, and add Masonry layouts to items on a webpage.",
    "w": "https://isotope.metafizzy.co",
    "i": "Isotope.svg"
  },
  "Issuu": {
    "d": "Issuu is a digital discovery and publishing platform.",
    "w": "https://issuu.com",
    "i": "Issuu.svg"
  },
  "Iterable": {
    "d": "Iterable is a cross-channel marketing platform that powers unified customer experiences.",
    "w": "https://iterable.com/",
    "i": "Iterable.png"
  },
  "Ivory Search": {
    "d": "Ivory Search is a WordPress search plugin that improves WordPress search by providing advanced options to extend search or exclude specific content from search.",
    "w": "https://ivorysearch.com",
    "i": "ivory_searc.png"
  },
  "Izooto": {
    "d": "iZooto is a user engagement and retention tool that leverages web push notifications to help business to drive repeat traffic, leads and sales.",
    "w": "https://www.izooto.com",
    "i": "Izooto.png"
  },
  "i-MSCP": {
    "d": "i-MSCP (internet Multi Server Control Panel) is a software for shared hosting environments management on Linux servers.",
    "w": "https://github.com/i-MSCP/imscp",
    "i": "i-MSCP.png"
  },
  "i-mobile": {
    "d": "i-mobile is a advertising platform for clients to advertise their product and for publishers to monetize their cyberspace.",
    "w": "http://www2.i-mobile.co.jp",
    "i": "i-mobile.png"
  },
  "i30con": {
    "d": "i30con is an icon toolkit based on CSS and JavaScript.",
    "w": "https://30nama.com/",
    "i": "30namaPlayer.png"
  },
  "iAdvize": {
    "d": "iAdvize is a conversational marketing platform that connects customers in need of advice with experts who are available 24/7 via messaging.",
    "w": "https://www.iadvize.com",
    "i": "iAdvize.svg"
  },
  "iEXExchanger": {
    "w": "https://exchanger.iexbase.com",
    "i": "iEXExchanger.png"
  },
  "iGoDigital": {
    "d": "iGoDigital provides web-based commerce tools, personalisation, and product recommendations designed to increase customer interaction.",
    "w": "http://www.igodigital.com",
    "i": "default.svg"
  },
  "iHomefinder IDX": {
    "d": "iHomefinder provides IDX property search, built-in CRM, and marketing tools.",
    "w": "https://www.ihomefinder.com",
    "i": "iHomefinder IDX.png"
  },
  "iPresta": {
    "w": "http://ipresta.ir",
    "i": "iPresta.png"
  },
  "iSina Chat": {
    "d": "iSina Chat is a live chat service that provides online support and FAQ for customers.",
    "w": "https://isina.agency",
    "i": "iSina Chat.svg"
  },
  "iThemes Security": {
    "d": " iThemes Security(formerly known as Better WP Security) plugin enhances the security and protection of your WordPress website.",
    "w": "https://ithemes.com/security",
    "i": "iThemes Security.svg"
  },
  "iWeb": {
    "d": "iWeb is a web site creation tool.",
    "w": "http://apple.com/ilife/iweb",
    "i": "iWeb.png"
  },
  "idCloudHost": {
    "d": "idCloudHost is a local web service provider based in Indonesia that offer a wide range of services including domain name registration and cloud hosting.",
    "w": "https://idcloudhost.com",
    "i": "idCloudHost.png"
  },
  "ikiwiki": {
    "d": "ikiwiki is a free and open-source wiki application.",
    "w": "http://ikiwiki.info",
    "i": "ikiwiki.png"
  },
  "imperia CMS": {
    "d": "imperia CMS is a headless content management for large editorial.",
    "w": "https://www.pirobase-imperia.com/de/solutions/imperia-cms",
    "i": "imperiaCMS.svg"
  },
  "inSales": {
    "d": "inSales is a SaaS ecommerce platform with multichannel integration.",
    "w": "https://www.insales.com",
    "i": "inSales.svg"
  },
  "inSided": {
    "d": "inSided is the only Customer Success Community Platform built to help SaaS companies improve customer success and retention.",
    "w": "https://www.insided.com",
    "i": "inSided.svg"
  },
  "ip-api": {
    "w": "https://ip-api.com/",
    "i": "ip-api.png"
  },
  "ip-label": {
    "w": "http://www.ip-label.com",
    "i": "iplabel.svg"
  },
  "ipapi": {
    "d": "ipapi is a real-time geolocation and reverse IP lookup REST API.",
    "w": "https://ipapi.com",
    "i": "ipapi.png"
  },
  "ipapi.co": {
    "d": "ipapi.co is a web analytics provider with IP address lookup and location API.",
    "w": "https://ipapi.co",
    "i": "ipapi.co.png"
  },
  "ipdata": {
    "d": "ipdata is a JSON IP Address Geolocation API that allows to lookup the location of both IPv4 and IPv6.",
    "w": "https://ipdata.co/",
    "i": "ipdata.png"
  },
  "ipgeolocation": {
    "d": "ipgeolocation is an IP Geolocation API and Accurate IP Lookup Database.",
    "w": "https://ipgeolocation.co/",
    "i": "ipgeolocation.png"
  },
  "ipify": {
    "d": "ipify is a service which provide public IP address API, IP geolocation API, VPN and Proxy detection API products.",
    "w": "https://ipify.org",
    "i": "ipify.png"
  },
  "ipstack": {
    "d": "ipstack is a real-time IP to geolocation API capable of looking at location data and assessing security threats originating from risky IP addresses.",
    "w": "https://ipstack.com",
    "i": "ipstack.png"
  },
  "iubenda": {
    "d": "iubenda is a compliance software used by businesses for their websites and apps.",
    "w": "https://www.iubenda.com",
    "i": "iubenda.svg"
  },
  "iyzico": {
    "d": "iyzico is a payment receipt system management platform that offers ePayment solutions.",
    "w": "https://www.iyzico.com",
    "i": "iyzico.svg"
  },
  "J2Store": {
    "d": "J2Store is a Joomla shopping cart and ecommerce extension.",
    "w": "https://www.j2store.org",
    "i": "j2store.png"
  },
  "JANet": {
    "d": "JANet is an affiliate marketing network.",
    "w": "https://j-a-net.jp",
    "i": "JANet.png"
  },
  "JAlbum": {
    "d": "jAlbum is across-platform photo website software for creating and uploading galleries from images and videos.",
    "w": "http://jalbum.net/en",
    "i": "JAlbum.png"
  },
  "JBoss Application Server": {
    "w": "http://jboss.org/jbossas.html",
    "i": "JBoss Application Server.png"
  },
  "JBoss Web": {
    "w": "http://jboss.org/jbossweb",
    "i": "JBoss Web.png"
  },
  "JET Enterprise": {
    "w": "http://www.jetecommerce.com.br/",
    "i": "JET Enterprise.svg"
  },
  "JS Charts": {
    "w": "http://www.jscharts.com",
    "i": "JS Charts.png"
  },
  "JSEcoin": {
    "d": "JSEcoin is a way to mine, receive payments for your goods or services and transfer cryptocurrency",
    "w": "https://jsecoin.com/",
    "i": "JSEcoin.png"
  },
  "JSS": {
    "d": "JSS is an authoring tool for CSS which allows you to use JavaScript to describe styles in a declarative, conflict-free and reusable way.",
    "w": "https://cssinjs.org/",
    "i": "JSS.png"
  },
  "JShop": {
    "d": "JShop is the ecommerce database solution marketed by Whorl Ltd. worldwide.",
    "w": "http://www.whorl.co.uk",
    "i": "JShop.svg"
  },
  "JTL Shop": {
    "d": "JTL Shop is an ecommerce product created by JTL Software company.",
    "w": "https://www.jtl-software.de/online-shopsystem",
    "i": "JTL Shop.svg"
  },
  "JW Player": {
    "d": "JW Player is a online video player with video engagement analytics, custom video player skins, and live video streaming capability.",
    "w": "https://www.jwplayer.com",
    "i": "JW Player.svg"
  },
  "Jahia DX": {
    "w": "http://www.jahia.com/dx",
    "i": "JahiaDX.svg"
  },
  "Jalios": {
    "w": "http://www.jalios.com",
    "i": "Jalios.png"
  },
  "Java": {
    "d": "Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
    "w": "http://java.com",
    "i": "Java.svg"
  },
  "Java Servlet": {
    "w": "http://www.oracle.com/technetwork/java/index-jsp-135475.html",
    "i": "Java.svg"
  },
  "JavaScript Infovis Toolkit": {
    "w": "https://philogb.github.io/jit/",
    "i": "JavaScript Infovis Toolkit.png"
  },
  "JavaServer Faces": {
    "w": "http://javaserverfaces.java.net",
    "i": "JavaServer Faces.png"
  },
  "JavaServer Pages": {
    "w": "http://www.oracle.com/technetwork/java/javaee/jsp/index.html",
    "i": "Java.svg"
  },
  "Javadoc": {
    "d": "Javadoc is a tool used for generating Java code documentation in HTML format from Java source code.",
    "w": "https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javadoc.html",
    "i": "Java.svg"
  },
  "Jekyll": {
    "d": "Jekyll is a blog-aware, static site generator for personal, project, or organisation sites.",
    "w": "http://jekyllrb.com",
    "i": "Jekyll.svg"
  },
  "Jenkins": {
    "d": "Jenkins is an open-source automation tool written in Java with plugins built for Continuous Integration (CI) purposes.",
    "w": "https://jenkins.io/",
    "i": "Jenkins.png"
  },
  "Jetpack": {
    "d": "Jetpack is a popular WordPress plugin created by Automattic, the people behind WordPress.com.",
    "w": "https://jetpack.com",
    "i": "Jetpack.svg"
  },
  "Jetshop": {
    "w": "http://jetshop.se",
    "i": "Jetshop.png"
  },
  "Jetty": {
    "w": "http://www.eclipse.org/jetty",
    "i": "Jetty.png"
  },
  "Jibres": {
    "d": "Jibres is an ecommerce solution with an online store builder and Point-of-Sale (PoS) software.",
    "w": "https://jibres.com",
    "i": "Jibres.svg"
  },
  "Jilt App": {
    "d": "Jilt App helps ecommerce store owners track and recover abandoned orders. Works seamlessly with Shopify and WooCommerce.",
    "w": "https://community.shopify.com/c/shopify-apps/jilt-is-over-what-app-to-use-for-abandoned-carts-now/td-p/1575095",
    "i": "Jilt.svg"
  },
  "Jilt plugin": {
    "d": "Jilt plugin helps ecommerce store owners track and recover abandoned orders. Works seamlessly with Shopify and WooCommerce.",
    "w": "https://wordpress.org/plugins/jilt-for-woocommerce",
    "i": "Jilt.svg"
  },
  "Jimdo": {
    "d": "Jimdo is a website-builder and all-in-one hosting solution, designed to enable users to build their own websites.",
    "w": "https://www.jimdo.com",
    "i": "Jimdo.svg"
  },
  "Jirafe": {
    "w": "https://docs.jirafe.com",
    "i": "Jirafe.png"
  },
  "Jitsi": {
    "d": "Jitsi is a free and open-source multiplatform voice (VoIP), videoconferencing and instant messaging applications for the web platform.",
    "w": "https://jitsi.org",
    "i": "Jitsi.png"
  },
  "Jive": {
    "w": "http://www.jivesoftware.com",
    "i": "Jive.png"
  },
  "JivoChat": {
    "d": "JivoChat is a live chat solution for websites offering customizable web and mobile chat widgets.",
    "w": "https://www.jivosite.com",
    "i": "JivoChat.png"
  },
  "Jivox": {
    "d": "Jivox is a cloud-based, data-driven platform for delivering personalised digital advertising and marketing experiences at scale.",
    "w": "https://jivox.com",
    "i": "Jivox.svg"
  },
  "JobAdder": {
    "d": "JobAdder is a cloud-based recruitment management platform for staffing agencies and in-house corporate hiring teams.",
    "w": "https://jobadder.com",
    "i": "JobAdder.png"
  },
  "JobberBase": {
    "d": "Jobberbase is an open-source job board platform that enables the creation of job sites.",
    "w": "http://www.jobberbase.com",
    "i": "JobberBase.png"
  },
  "Jobvite": {
    "d": "Jobvite is an applicant tracking software and recruiting platform.",
    "w": "https://www.jobvite.com",
    "i": "Jobvite.png"
  },
  "JoomShopping": {
    "d": "JoomShopping is an open-source ecommerce plugin for Joomla.",
    "w": "https://www.webdesigner-profi.de/joomla-webdesign/joomla-shop",
    "i": "JoomShopping.png"
  },
  "Joomla": {
    "d": "Joomla is a free and open-source content management system for publishing web content.",
    "w": "https://www.joomla.org/",
    "i": "Joomla.svg"
  },
  "JouwWeb": {
    "d": "JouwWeb is an online website builder that allows internet users to create own website.",
    "w": "https://www.jouwweb.nl",
    "i": "JouwWeb.svg"
  },
  "JsObservable": {
    "d": "JsObservable is integrated with JsViews and facilitates observable data manipulations that are immediately reflected in the data-bound templates. The library is developed and maintained by Microsoft employee Boris Moore and is used in projects such as Outlook.com and Windows Azure.",
    "w": "https://www.jsviews.com/#jsobservable",
    "i": "JsObservable.svg"
  },
  "JsRender": {
    "d": "JsRender is the template library. The library is developed and maintained by Microsoft employee Boris Moore and is used in projects such as Outlook.com and Windows Azure.",
    "w": "https://www.jsviews.com/#jsrender",
    "i": "JsRender.svg"
  },
  "JsViews": {
    "d": "JsViews is the MVVM library which provides two-way data binding for the template. The library is developed and maintained by Microsoft employee Boris Moore and is used in projects such as Outlook.com and Windows Azure.",
    "w": "https://www.jsviews.com/#jsviews",
    "i": "JsViews.svg"
  },
  "Judge.me": {
    "d": "Judge.me is a reviews app that helps you collect and display product reviews and site reviews with photos, videos and Q&A.",
    "w": "https://judge.me",
    "i": "Judge.svg"
  },
  "JuicyAds": {
    "d": "JuicyAds is a legitimate advertising network that specializes in adult content.",
    "w": "https://www.juicyads.com",
    "i": "JuicyAds.png"
  },
  "Jumbo": {
    "d": "Jumbo is a page speed optimizer app for Shopify based sites.",
    "w": "https://www.tryjumbo.com/",
    "i": "Jumbo.png"
  },
  "Jumio": {
    "d": "Jumio is an online mobile payments and identity verification company that provides card and ID scanning and validation products for mobile and web transactions.",
    "w": "https://www.jumio.com",
    "i": "Jumio.svg"
  },
  "Jumpseller": {
    "d": "Jumpseller is a cloud ecommerce solution for small businesses.",
    "w": "https://jumpseller.com",
    "i": "Jumpseller.svg"
  },
  "Junip": {
    "d": "Junip provider of a ecommerce brand review platform designed to share customers' story, send review requests and display review content.",
    "w": "https://junip.co",
    "i": "Junip.svg"
  },
  "Juo": {
    "d": "Juo is a centralised experimentation platform for innovative marketing and product teams.",
    "w": "https://get.juo.io",
    "i": "Juo.svg"
  },
  "Juspay": {
    "d": "Juspay is a developer of an online platform designed to be used for mobile-based payments.",
    "w": "https://juspay.in",
    "i": "juspay.svg"
  },
  "Justo": {
    "d": "Justo is a subscription-based software that allows anyone to set up an online store and sell their products with delivery options.",
    "w": "https://www.getjusto.com",
    "i": "Justo.svg"
  },
  "Justuno": {
    "d": "Justuno is a visitor conversion optimisation platform.",
    "w": "https://www.justuno.com",
    "i": "Justuno.svg"
  },
  "Justuno App": {
    "d": "Justuno is a premium conversion marketing and analytics platform that provides retailers with powerful tools to increase conversions.",
    "w": "https://apps.shopify.com/justuno-pop-ups-email-conversion",
    "i": "Justuno.svg"
  },
  "jComponent": {
    "w": "https://componentator.com",
    "i": "jComponent.png"
  },
  "jPlayer": {
    "d": "jPlayer is a cross-browser JavaScript library developed as a jQuery plugin which facilitates the embedding of web based media, notably HTML5 audio and video in addition to Adobe Flash based media.",
    "w": "https://jplayer.org",
    "i": "jPlayer.png"
  },
  "jQTouch": {
    "d": "jQTouch is an open-source Zepto/ JQuery plugin with native animations, automatic navigation, and themes for mobile WebKit browsers like iPhone, G1 (Android), and Palm Pre.",
    "w": "http://jqtouch.com",
    "i": "jQTouch.png"
  },
  "jQuery": {
    "d": "jQuery is a JavaScript library which is a free, open-source software designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.",
    "w": "https://jquery.com",
    "i": "jQuery.svg"
  },
  "jQuery CDN": {
    "d": "jQuery CDN is a way to include jQuery in your website without actually downloading and keeping it your website's folder.",
    "w": "https://code.jquery.com/",
    "i": "jQuery.svg"
  },
  "jQuery DevBridge Autocomplete": {
    "d": "Ajax Autocomplete for jQuery allows you to easily create autocomplete/autosuggest boxes for text input fields.",
    "w": "https://www.devbridge.com/sourcery/components/jquery-autocomplete/",
    "i": "jQuery.svg"
  },
  "jQuery Migrate": {
    "d": "Query Migrate is a javascript library that allows you to preserve the compatibility of your jQuery code developed for versions of jQuery older than 1.9.",
    "w": "https://github.com/jquery/jquery-migrate",
    "i": "jQuery.svg"
  },
  "jQuery Mobile": {
    "d": "jQuery Mobile is a HTML5-based user interface system designed to make responsive web sites and apps that are accessible on all smartphone, tablet and desktop devices.",
    "w": "https://jquerymobile.com",
    "i": "jQuery Mobile.svg"
  },
  "jQuery Modal": {
    "d": "JQuery Modal is an overlay dialog box or in other words, a popup window that is made to display on the top or 'overlayed' on the current page.",
    "w": "https://jquerymodal.com",
    "i": "jQuery Modal.png"
  },
  "jQuery Sparklines": {
    "d": "jQuery Sparklines is a plugin that generates sparklines (small inline charts) directly in the browser using data supplied either inline in the HTML, or via javascript.",
    "w": "http://omnipotent.net/jquery.sparkline/"
  },
  "jQuery UI": {
    "d": "jQuery UI is a collection of GUI widgets, animated visual effects, and themes implemented with jQuery, Cascading Style Sheets, and HTML.",
    "w": "http://jqueryui.com",
    "i": "jQuery UI.svg"
  },
  "jQuery-pjax": {
    "d": "jQuery PJAX is a plugin that uses AJAX and pushState.",
    "w": "https://github.com/defunkt/jquery-pjax"
  },
  "jqPlot": {
    "w": "http://www.jqplot.com",
    "i": "jqPlot.png"
  },
  "jsDelivr": {
    "d": "JSDelivr is a free public CDN for open-source projects. It can serve web files directly from the npm registry and GitHub repositories without any configuration.",
    "w": "https://www.jsdelivr.com/",
    "i": "jsdelivr-icon.svg"
  },
  "K2": {
    "w": "https://getk2.org",
    "i": "K2.png"
  },
  "KISSmetrics": {
    "w": "https://www.kissmetrics.com",
    "i": "KISSmetrics.png"
  },
  "KMK": {
    "d": "KMK is a company that offers ecommerce software technology in C2C, B2B, B2C areas.",
    "w": "https://www.kmk.net.tr",
    "i": "KMK.svg"
  },
  "KPHP": {
    "d": "KPHP (kPHP or KittenPHP) is a free PHP-to- C++ source-to-source translator, developed by VKontakte.",
    "w": "https://vkcom.github.io/kphp",
    "i": "default.svg"
  },
  "KQS.store": {
    "d": "KQS.store is an ecommerce software.",
    "w": "https://www.kqs.pl",
    "i": "KQS.store.png"
  },
  "KaTeX": {
    "d": "KaTeX is a cross-browser JavaScript library that displays mathematical notation in web browsers.",
    "w": "https://katex.org/",
    "i": "KaTeX.svg"
  },
  "Kadence WP Kadence": {
    "d": "Kadence WP Kadence is a multipurpose WordPress theme that is available for free download and also offers a pro version.",
    "w": "https://www.kadencewp.com/kadence-theme",
    "i": "Kadence WP.svg"
  },
  "Kadence WP Virtue": {
    "d": "Kadence WP Virtue is a multipurpose WordPress theme that is available for free download and also offers a pro version.",
    "w": "https://www.kadencewp.com/product/virtue-free-theme",
    "i": "Kadence WP.svg"
  },
  "Kaira Vogue": {
    "d": "Vogue is a very easy to use multipurpose WordPress theme created by Kaira.",
    "w": "https://kairaweb.com/wordpress-theme/vogue",
    "i": "Kaira.png"
  },
  "Kajabi": {
    "w": "https://kajabi.com",
    "i": "Kajabi.svg"
  },
  "Kakao": {
    "d": "Kakao platform provides various services such as Kakao Talk, Kakao Talk Channel, Kakao Story as well as Kakao Pay, Kakao Commerce, Kakao Page provided by the subsidiaries. Users can use all Kakao platform services with a united account called Kakao Account.",
    "w": "https://developers.kakao.com/product",
    "i": "Kakao.svg"
  },
  "Kaltura": {
    "d": "Kaltura is a video content management platform that allows users to upload, manage, share, publish, and stream videos.",
    "w": "https://corp.kaltura.com",
    "i": "Kaltura.svg"
  },
  "Kameleoon": {
    "d": "Kameleoon is a personalisation technology platform for real-time omnichannel optimisation and conversion.",
    "w": "https://kameleoon.com/",
    "i": "Kameleoon.svg"
  },
  "Kamva": {
    "w": "https://kamva.ir",
    "i": "Kamva.svg"
  },
  "Kapture CRM": {
    "d": "Kapture CRM is an enterprise-grade SaaS-based customer support automation platform.",
    "w": "https://www.kapturecrm.com",
    "i": "Kapture CRM.png"
  },
  "Karma": {
    "d": "Karma is a test runner for JavaScript that runs on Node.js.",
    "w": "https://karma-runner.github.io",
    "i": "Karma.svg"
  },
  "Kartra": {
    "d": "Kartra is an online business platform that offers marketing and sales tools.",
    "w": "https://home.kartra.com",
    "i": "Kartra.png"
  },
  "Keap": {
    "d": "Keap offers an email marketing and sales platform for small businesses, including products to manage customers, customer relationship management, marketing, and ecommerce.",
    "w": "https://keap.com",
    "i": "Keap.svg"
  },
  "Keen Delivery": {
    "d": "Keen Delivery is a Dutch shipping platform ",
    "w": "https://www.keendelivery.com",
    "i": "Keen Delivery.svg"
  },
  "Kemal": {
    "w": "http://kemalcr.com",
    "i": "kemalcr.png"
  },
  "Kendo UI": {
    "d": "Kendo UI is a HTML5 user interface framework for building interactive and high-performance websites and applications.",
    "w": "https://www.telerik.com/kendo-ui",
    "i": "Kendo UI.png"
  },
  "Kentico CMS": {
    "d": "Kentico CMS is a web content management system for building websites, online stores, intranets, and Web 2.0 community sites.",
    "w": "http://www.kentico.com",
    "i": "Kentico CMS.png"
  },
  "Keptify": {
    "d": "Keptify helps ecommerce sites of any size to increase sales and conversion rates by providing visitors with a personalised shopping experience.",
    "w": "https://keptify.com",
    "i": "Keptify.png"
  },
  "Kerberos": {
    "d": "Kerberos is an authentication method commonly used by Windows servers",
    "w": "https://tools.ietf.org/html/rfc4559"
  },
  "Kestrel": {
    "w": "https://docs.microsoft.com/en-us/aspnet/core/fundamentals/servers/kestrel",
    "i": "kestrel.svg"
  },
  "Ketch": {
    "d": "Ketch is a data control platform that manages compliance with privacy regulations.",
    "w": "https://www.ketch.com",
    "i": "Ketch.svg"
  },
  "Kevel": {
    "d": "Kevel (formerly Adzerk) is a developer of ad-serving APIs to help developers build server-side ad platforms.",
    "w": "https://www.kevel.com",
    "i": "Kevel.svg"
  },
  "KeyCDN": {
    "d": "KeyCDN is a content delivery network (CDN).",
    "w": "http://www.keycdn.com",
    "i": "KeyCDN.png"
  },
  "Keybase": {
    "d": "Keybase is for keeping everyone's chats and files safe, from families to communities to companies. MacOS, Windows, Linux, iPhone, and Android.",
    "w": "https://keybase.io/",
    "i": "Keybase.svg"
  },
  "Kibana": {
    "d": "Kibana is an open-source data visualisation dashboard for Elasticsearch. It provides visualisation capabilities on top of the content indexed on an Elasticsearch cluster. Users can create bar, line and scatter plots, or pie charts and maps on top of large volumes of data.",
    "w": "http://www.elastic.co/products/kibana",
    "i": "kibana.svg"
  },
  "Kibo Commerce": {
    "d": "Kibo Commerce is a enterprise ecommerce platform  that offers a cloud-based, end-to-end commerce solution for retailers and branded manufacturers.",
    "w": "https://kibocommerce.com",
    "i": "Kibo.png"
  },
  "Kibo Personalization": {
    "d": "Kibo Personalization is a omnichannel personalisation software powered by machine learning to deliver individualized customer experiences and powered by Monetate and Certona.",
    "w": "https://kibocommerce.com/personalization-software",
    "i": "Kibo.png"
  },
  "Kiliba": {
    "d": "Kiliba has developed a module that automates the marketing process from creating an email to distributing it.",
    "w": "https://en.kiliba.com",
    "i": "Kiliba.svg"
  },
  "Kindful": {
    "d": "Kindful is a cloud-based donor management and fundraising software and database designed for nonprofit organisations.",
    "w": "https://kindful.com",
    "i": "Kindful.svg"
  },
  "KineticJS": {
    "w": "https://github.com/ericdrowell/KineticJS/",
    "i": "KineticJS.png"
  },
  "Kinsta": {
    "w": "https://kinsta.com",
    "i": "kinsta.svg"
  },
  "Kirki Customizer Framework": {
    "d": "Kirki Customizer Framework is a toolkit allowing WordPress developers to use the Customizer and take advantage of its advanced features and flexibility by abstracting the code.",
    "w": "https://kirki.org",
    "i": "Kirki Customizer Framework.png"
  },
  "Kitcart": {
    "d": "KitCart is a cloud-based solution that helps businesses build ecommerce stores, manage inventory, and more.",
    "w": "https://kitcart.net",
    "i": "Kitcart.png"
  },
  "Kiwi Sizing": {
    "d": "Kiwi Sizing is a size chart and a recommender plugin on the Shopify platform.",
    "w": "https://www.kiwisizing.com",
    "i": "Kiwi Sizing.png"
  },
  "Klarna Checkout": {
    "d": "Klarna Checkout is a complete payment solution where Klarna handles a store's entire checkout.",
    "w": "https://www.klarna.com/international/",
    "i": "Klarna.svg"
  },
  "Klaro": {
    "d": "Klaro is a simple consent management platform and privacy tool.",
    "w": "https://heyklaro.com",
    "i": "Klaro.png"
  },
  "Klasha": {
    "d": "Klasha is a payment solution provider that handles a store's entire checkout.",
    "w": "https://www.klasha.com/",
    "i": "Klasha.svg"
  },
  "Klaviyo": {
    "d": "Klaviyo is an email marketing platform for online businesses.",
    "w": "https://www.klaviyo.com/",
    "i": "Klaviyo.svg"
  },
  "Klevu": {
    "d": "Klevu is a highly advanced AI-Powered search solution for ecommerce platforms.",
    "w": "https://www.klevu.com",
    "i": "Klevu.png"
  },
  "KlickPages": {
    "d": "KlickPages is a landing page management software designed to help businesses execute email marketing campaigns and capture leads.",
    "w": "https://klickpages.com.br",
    "i": "KlickPages.svg"
  },
  "Klickly": {
    "d": "Klickly is an invite-only, commission-based advertising platform.",
    "w": "https://www.klickly.com",
    "i": "Klickly.svg"
  },
  "Knockout.js": {
    "d": "Knockout.js is basically a library written in JavaScript, based on MVVM pattern that helps developers build rich and responsive websites.",
    "w": "http://knockoutjs.com",
    "i": "Knockout.js.svg"
  },
  "Ko-fi": {
    "d": "Ko-fi is an online platform that helps content creators get the financial support.",
    "w": "https://ko-fi.com",
    "i": "Ko-fi.svg"
  },
  "Koa": {
    "w": "http://koajs.com",
    "i": "Koa.png"
  },
  "Koala": {
    "d": "Koala is an analytical product with CRM features that helps businesses efficiently identify and track prospects, providing valuable insights and streamlining the sales process.",
    "w": "https://getkoala.com/",
    "i": "Koala.svg"
  },
  "Koala Framework": {
    "w": "http://koala-framework.org",
    "i": "Koala Framework.png"
  },
  "KobiMaster": {
    "w": "https://www.kobimaster.com.tr",
    "i": "Kobimaster.png"
  },
  "Koha": {
    "d": "Koha is an open-source Integrated Library System (ILS).",
    "w": "https://koha-community.org/",
    "i": "koha.png"
  },
  "Kohana": {
    "w": "http://kohanaframework.org",
    "i": "Kohana.png"
  },
  "Koken": {
    "w": "http://koken.me",
    "i": "Koken.png"
  },
  "Komodo CMS": {
    "w": "http://www.komodocms.com",
    "i": "Komodo CMS.png"
  },
  "Konduto": {
    "d": "Konduto is a fraud detection service for ecommerce.",
    "w": "https://www.konduto.com",
    "i": "Konduto.png"
  },
  "Kong": {
    "d": "Kong is an open-source API gateway and platform that acts as middleware between compute clients and the API-centric applications.",
    "w": "https://konghq.com",
    "i": "Kong.svg"
  },
  "Kontent.ai": {
    "d": "Kontent.ai is a SaaS-based modular content platform.",
    "w": "https://kontent.ai",
    "i": "Kontent.ai.svg"
  },
  "Koobi": {
    "w": "http://dream4.de/cms",
    "i": "Koobi.png"
  },
  "Kooboo CMS": {
    "w": "http://kooboo.com",
    "i": "Kooboo CMS.png"
  },
  "Kooomo": {
    "d": "Kooomo is a SaaS ecommerce platform with a focus on localisation and internationalisation.",
    "w": "https://www.kooomo.com",
    "i": "Kooomo.svg"
  },
  "Kotisivukone": {
    "w": "http://www.kotisivukone.fi",
    "i": "Kotisivukone.png"
  },
  "Kotlin": {
    "d": "Kotlin is a general purpose, free, open-source, statically typed “pragmatic” programming language initially designed for the JVM (Java Virtual Machine) and Android that combines object-oriented and functional programming features.",
    "w": "https://kotlinlang.org",
    "i": "Kotlin.svg"
  },
  "Kount": {
    "d": "Kount is a suite of fraud detection and prevention solutions for ecommerce businesses.",
    "w": "https://kount.com",
    "i": "Kount.svg"
  },
  "Ktor": {
    "d": "Ktor is a Kotlin framework that allow developers to write asynchronous clients and servers applications, in Kotlin.",
    "w": "https://ktor.io",
    "i": "Ktor.svg"
  },
  "Kubernetes Dashboard": {
    "w": "https://kubernetes.io/",
    "i": "Kubernetes.svg"
  },
  "KueskiPay": {
    "d": "KueskiPay is a buy-now-pay-later solution.",
    "w": "https://kueskipay.com/",
    "i": "KueskiPay.svg"
  },
  "Kustomer": {
    "d": "Kustomer is a CRM platform.",
    "w": "https://www.kustomer.com/",
    "i": "Kustomer.svg"
  },
  "Kwai pixel": {
    "d": "Kwai is a social network for short videos and trends.",
    "w": "https://www.kwai.com",
    "i": "Kwai.png"
  },
  "k-eCommerce": {
    "d": "k-eCommerce is mdf commerce’s platform for SMBs, providing all-in-one ecommerce and digital payment solutions integrated to Microsoft Dynamics and SAP Business One. ",
    "w": "https://www.k-ecommerce.com",
    "i": "k-eCommerce.png"
  },
  "keep. archeevo": {
    "d": "keep. archeevo is an archival management software that aims to support all the functional areas of an archival institution, covering activities ranging from archival description to employee performance assessment.",
    "w": "https://www.keep.pt/en/produts/archeevo-archival-management-software",
    "i": "keep. archeevo.png"
  },
  "LEPTON": {
    "w": "http://www.lepton-cms.org",
    "i": "LEPTON.png"
  },
  "LGC": {
    "d": "LGC is a modern CMS designed to improve the management of your website.",
    "w": "https://luigigabrieleconti.com",
    "i": "LGC.png"
  },
  "LINE Login": {
    "d": "LINE Login is an API that allows you to implement a login function into your services, regardless of whether they are web apps or native apps.",
    "w": "https://developers.line.biz/en/services/line-login/",
    "i": "LINE.svg"
  },
  "LKQD": {
    "d": "LKQD is a video advertising platform that enables publishers to serve video ads across multiple devices and formats.",
    "w": "https://wiki.lkqd.com",
    "i": "LKQD.svg"
  },
  "LOU": {
    "d": "LOU is a Digital Adoption Platform that streamlines user onboarding and training.",
    "w": "https://www.louassist.com",
    "i": "LOU.png"
  },
  "Lagoon": {
    "d": "The Open Source Application Delivery Platform for Kubernetes.",
    "w": "https://lagoon.sh/",
    "i": "lagoon.svg"
  },
  "Landbot": {
    "d": "Landbot is a no code conversational chatbots, conversational landing pages and website, interactive survey and lead generation bot.",
    "w": "https://landbot.io",
    "i": "landbot.svg"
  },
  "LangShop": {
    "d": "LangShop is an app for translating Shopify stores.",
    "w": "https://langshop.io",
    "i": "LangShop.svg"
  },
  "Laravel": {
    "d": "Laravel is a free, open-source PHP web framework.",
    "w": "https://laravel.com",
    "i": "Laravel.svg"
  },
  "Laterpay": {
    "d": "Laterpay is a service that simplifies payments on the Internet. In addition to the classic immediate purchase option, Laterpay also allows you to buy digital content such as articles or videos now and pay later.",
    "w": "https://www.laterpay.net/",
    "i": "laterpay.png"
  },
  "LatitudePay": {
    "d": "LatitudePay is an interest-free, buy now, pay later solution.",
    "w": "https://www.latitudepay.com",
    "i": "LatitudePay.svg"
  },
  "LaunchDarkly": {
    "d": "LaunchDarkly is a continuous delivery and feature flags as a service platform that integrates into a company's current development cycle.",
    "w": "https://launchdarkly.com",
    "i": "LaunchDarkly.svg"
  },
  "Launchrock": {
    "d": "Launchrock is an online tool designed to help capture email addresses and create online product launching events.",
    "w": "https://www.launchrock.com",
    "i": "Launchrock.svg"
  },
  "LayBuy": {
    "d": "Laybuy is a payment service that lets you receive your purchase now and spread the total cost over 6 weekly automatic payments interest free.",
    "w": "https://www.laybuy.com",
    "i": "LayBuy.svg"
  },
  "LayoutHub": {
    "d": "LayoutHub is an easy page builder that helps merchants quickly set up an online store with any kind of page type by using our library of pre-designed layouts and blocks.",
    "w": "https://layouthub.com",
    "i": "LayoutHub.png"
  },
  "Layui": {
    "d": "Layui is an open-source modular front-end UI component library.",
    "w": "https://layui.gitee.io",
    "i": "Layui.png"
  },
  "Lazada": {
    "d": "Lazada is a B2B2C marketplace model in which so-called merchants sell goods on their platform.",
    "w": "https://www.lazada.com",
    "i": "Lazada.svg"
  },
  "LazySizes": {
    "d": "LazySizes is a JavaScript library used to delay the loading of images (iframes, scripts, etc) until they come into view.",
    "w": "https://github.com/aFarkas/lazysizes",
    "i": "default.svg"
  },
  "LazySizes unveilhooks plugin": {
    "d": "LazySizes unveilhooks plugin extends lazySizes to lazyload scripts/widgets, background images, styles and video/audio elements.",
    "w": "https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/unveilhooks",
    "i": "default.svg"
  },
  "Leadfeeder": {
    "d": "Leadfeeder is a B2B visitor identification software that tracks and identifies companies that visit your website.",
    "w": "https://www.leadfeeder.com",
    "i": "Leadfeeder.png"
  },
  "Leadinfo": {
    "d": "Leadinfo is a lead generation software that enables you to recognise B2B website visitors.",
    "w": "https://www.leadinfo.com",
    "i": "Leadinfo.svg"
  },
  "Leadster": {
    "d": "Leadster is a conversation marketing plataform based on chatbot.",
    "w": "https://leadster.com.br",
    "i": "Leadster.svg"
  },
  "Leaflet": {
    "d": "Leaflet is the open-source JavaScript library for mobile-friendly interactive maps.",
    "w": "http://leafletjs.com",
    "i": "Leaflet.png"
  },
  "Leaflet platform": {
    "d": "Leaflet is the price testing platform for Shopify.",
    "w": "https://join.leaflet.co",
    "i": "Leaflet platform.png"
  },
  "Leanplum": {
    "d": "Leanplum is a multi-channel messaging and campaign orchestration platform.",
    "w": "https://www.leanplum.com",
    "i": "Leanplum.svg"
  },
  "LearnWorlds": {
    "d": "LearnWorlds is a powerful yet lightweight, user-friendly, white-labeled cloud-based LMS ideal for versatile employee training.",
    "w": "https://www.learnworlds.com",
    "i": "LearnWorlds.svg"
  },
  "Leaseweb": {
    "d": "Leaseweb is an Infrastructure-as-a-Service (IaaS) provider offering dedicated servers, CDN, cloud hosting and hybrid cloud on a global network.",
    "w": "https://www.leaseweb.com",
    "i": "Leaseweb.svg"
  },
  "Lede": {
    "d": "Lede is a publishing platform and growth program designed to support journalism startups and news media.",
    "w": "https://joinlede.com/",
    "i": "lede.png"
  },
  "Legal Monster": {
    "d": "Legal Monster is a consent and privacy management solution, which helps businesses maintain compliance with ePrivacy, marketing requirements and General Data Protection Regulation (GDPR).",
    "w": "https://www.legalmonster.com",
    "i": "Legal Monster.svg"
  },
  "Lengow": {
    "d": "Lengow is an ecommerce automation solution that enables brands and retailers to integrate, structure and optimise their product content across all distribution channels: marketplaces, comparison shopping engines, affiliate platforms, display and retargeting.",
    "w": "https://www.lengow.com",
    "i": "Lengow.svg"
  },
  "Lenis": {
    "d": "Lenis is a smooth scroll library to normalise the scrolling experience across devices.",
    "w": "https://lenis.studiofreight.com",
    "i": "Lenis.svg"
  },
  "Less": {
    "w": "http://lesscss.org",
    "i": "Less.png"
  },
  "Let's Encrypt": {
    "d": "Let's Encrypt is a free, automated, and open certificate authority.",
    "w": "https://letsencrypt.org/",
    "i": "Lets Encrypt.svg"
  },
  "Letro": {
    "d": "Letro is a UGC and review tool for ecommerce platforms.",
    "w": "https://service.aainc.co.jp/product/letro/",
    "i": "Letro.svg"
  },
  "Level 5": {
    "d": "Level 5 is a page builder constructed with WordPress and powered with WP Engine hosting featuring advanced caching and performance optimisation.",
    "w": "https://level5advertising.com/websites/",
    "i": "Level 5.png"
  },
  "Lever": {
    "d": "Lever is a software company headquartered in San Francisco, California and Toronto, Canada that provides an applicant tracking system for hiring.",
    "w": "https://www.lever.co",
    "i": "Lever.svg"
  },
  "Lexity": {
    "d": "Lexity is the one-stop-shop of ecommerce services for SMBs.",
    "w": "http://lexity.com",
    "i": "Lexity.png"
  },
  "Liberapay": {
    "d": "Liberapay is a non-profit organisation subscription payment platform.",
    "w": "https://liberapay.com/",
    "i": "Liberapay.svg"
  },
  "Libravatar": {
    "d": "Libravatar is a service for fetching avatar images for e-mail addresses and OpenIDs in a privacy respecting way.",
    "w": "https://www.libravatar.org/",
    "i": "libravatar.png"
  },
  "Lieferando": {
    "d": "Lieferando is an online portal for food orders.",
    "w": "https://www.lieferando.de",
    "i": "Lieferando.svg"
  },
  "Liferay": {
    "d": "Liferay is an open-source company that provides free documentation and paid professional service to users of its software.",
    "w": "https://www.liferay.com/",
    "i": "Liferay.svg"
  },
  "Lift": {
    "w": "http://liftweb.net",
    "i": "Lift.png"
  },
  "LightMon Engine": {
    "w": "http://lightmon.ru",
    "i": "LightMon Engine.png"
  },
  "Lightbox": {
    "w": "http://lokeshdhakar.com/projects/lightbox2/",
    "i": "Lightbox.png"
  },
  "Lightning": {
    "d": "Lightning is a very simple and easy to customize WordPress theme which is based on the Bootstrap.",
    "w": "https://lightning.vektor-inc.co.jp/en/",
    "i": "Lightning.png"
  },
  "Lightspeed eCom": {
    "w": "http://www.lightspeedhq.com/products/ecommerce/",
    "i": "Lightspeed.svg"
  },
  "LimeChat": {
    "d": "LimeChat is India's first level-3 AI chatbot company.",
    "w": "https://www.limechat.ai",
    "i": "LimeChat.png"
  },
  "LimeSpot": {
    "d": "LimeSpot is an AI-powered personalisation platform for marketers and ecommerce professionals.",
    "w": "https://www.limespot.com",
    "i": "LimeSpot.png"
  },
  "Limepay": {
    "d": "Limepay is a buy now, pay later platform that's fully integrated with the merchant's payment platform.",
    "w": "https://www.limepay.com.au",
    "i": "Limepay.svg"
  },
  "Limit Login Attempts Reloaded": {
    "d": "Limit Login Attempts Reloaded stops brute-force attacks and optimizes your site performance by limiting the number of login attempts that are possible through the normal login as well as XMLRPC, Woocommerce and custom login pages.",
    "w": "https://www.limitloginattempts.com",
    "i": "Limit Login Attempts Reloaded.png"
  },
  "LinkSmart": {
    "w": "http://linksmart.com",
    "i": "LinkSmart.png"
  },
  "Linkedin Ads": {
    "d": "Linkedin Ads is a paid marketing tool that offers access to Linkedin social networks through various sponsored posts and other methods.",
    "w": "https://business.linkedin.com/marketing-solutions/ads",
    "i": "Linkedin.svg"
  },
  "Linkedin Insight Tag": {
    "d": "LinkedIn Insight Tag is a lightweight JavaScript tag that powers conversion tracking, website audiences, and website demographics.",
    "w": "https://business.linkedin.com/marketing-solutions/insight-tag",
    "i": "Linkedin.svg"
  },
  "Linkedin Sign-in": {
    "d": "Linkedin Sign-In is an authentication system that reduces the burden of login for users, by enabling them to sign in with their Linkedin account.",
    "w": "https://www.linkedin.com/developers",
    "i": "Linkedin.svg"
  },
  "Linx Commerce": {
    "d": "Linx Commerce is an ecommerce platform, which provides seamless and personalised cross-channel solution that enables a true omni-channel shopping experience.",
    "w": "https://www.linx.com.br/linx-commerce",
    "i": "Linx.png"
  },
  "Linx Impulse": {
    "d": "Linx Impulse is a personalisation, media and retargeting solutions built by Linx.",
    "w": "https://www.linx.com.br/linx-impulse",
    "i": "Linx.png"
  },
  "Liquid Web": {
    "d": "Liquid Web is a US-based host offering premium managed web hosting solutions.",
    "w": "https://www.liquidweb.com",
    "i": "Liquid Web.svg"
  },
  "List.js": {
    "w": "http://listjs.com",
    "i": "List.js.png"
  },
  "Listrak": {
    "d": "Listrak is a AI-based marketing automation and CRM solutions that unify, interpret and personalise data to engage customer across channels and devices.",
    "w": "https://www.listrak.com",
    "i": "Listrak.png"
  },
  "LiteSpeed": {
    "d": "LiteSpeed is a high-scalability web server.",
    "w": "http://litespeedtech.com",
    "i": "LiteSpeed.svg"
  },
  "Litespeed Cache": {
    "d": "LiteSpeed Cache is an all-in-one site acceleration plugin for WordPress.",
    "w": "https://wordpress.org/plugins/litespeed-cache/",
    "i": "litespeed-cache.png"
  },
  "Lithium": {
    "w": "https://www.lithium.com",
    "i": "Lithium.png"
  },
  "Littledata": {
    "d": "Littledata provides a seamless connection between your Shopify site, marketing channels, and Google Analytics.",
    "w": "https://www.littledata.io",
    "i": "Littledata.svg"
  },
  "Live Story": {
    "w": "https://www.livestory.nyc/",
    "i": "LiveStory.png"
  },
  "LiveAgent": {
    "d": "LiveAgent is an online live chat platform. The software provides a ticket management system.",
    "w": "https://www.liveagent.com",
    "i": "LiveAgent.png"
  },
  "LiveCanvas": {
    "d": "LiveCanvas is a Bootstrap 5 WordPress page builder.",
    "w": "https://livecanvas.com",
    "i": "LiveCanvas.svg"
  },
  "LiveChat": {
    "d": "LiveChat is an online customer service software with online chat, help desk software, and web analytics capabilities.",
    "w": "https://www.livechat.com/",
    "i": "LiveChat.svg"
  },
  "LiveHelp": {
    "d": "LiveHelp is an online chat tool.",
    "w": "http://www.livehelp.it",
    "i": "LiveHelp.png"
  },
  "LiveIntent": {
    "d": "LiveIntent is an email ad monetization platform.",
    "w": "https://www.liveintent.com",
    "i": "LiveIntent.svg"
  },
  "LiveJournal": {
    "d": "LiveJournal is a social networking service where users can keep a blog, journal or diary.",
    "w": "http://www.livejournal.com",
    "i": "LiveJournal.png"
  },
  "LivePerson": {
    "d": "LivePerson is a tool for conversational chatbots and messaging.",
    "w": "https://www.liveperson.com",
    "i": "LivePerson.png"
  },
  "LiveRamp DPM": {
    "d": "LiveRamp DPM is a TV advertising metrics and analytics platform.",
    "w": "https://liveramp.com/data-plus-math",
    "i": "LiveRamp.svg"
  },
  "LiveRamp PCM": {
    "d": "LiveRamp PCM is a preference and consent management platform that enables comply with the ePrivacy Directive, GDPR, CCPA, and other data protection and privacy laws and regulations.",
    "w": "https://liveramp.com/our-platform/preference-consent-management",
    "i": "LiveRamp.svg"
  },
  "LiveSession": {
    "d": "LiveSession helps increase conversion rates using session replays, and event-based product analytics.",
    "w": "https://livesession.io/",
    "i": "LiveSession.svg"
  },
  "LiveStreet CMS": {
    "w": "http://livestreetcms.com",
    "i": "LiveStreet CMS.png"
  },
  "LiveZilla": {
    "d": "LiveZilla is a web-based live support platform.",
    "w": "https://www.livezilla.net",
    "i": "LiveZilla.png"
  },
  "Livefyre": {
    "d": "Livefyre is a platform that integrates with the social web to boost social interaction.",
    "w": "http://livefyre.com",
    "i": "Livefyre.png"
  },
  "Liveinternet": {
    "w": "http://liveinternet.ru/rating/",
    "i": "Liveinternet.png"
  },
  "Livescale": {
    "d": "Livescale is a video platform that enables teams to transform content and ecommerce into a live shopping experience that reaches engages and monetizes audiences with LiveShopping.",
    "w": "https://www.livescale.tv",
    "i": "Livescale.png"
  },
  "Livewire": {
    "d": "Livewire is a full-stack Laravel framework for building dynamic interfaces.",
    "w": "https://laravel-livewire.com",
    "i": "Livewire.svg"
  },
  "Loadable-Components": {
    "d": "Loadable-Components is a library to solve the React code-splitting client-side and server-side.",
    "w": "https://github.com/gregberge/loadable-components",
    "i": "Loadable-Components.png"
  },
  "Loadify": {
    "d": "Loadify is a shopify app which helps merchants deploy performance techniques like loading screen, transitions & lazy Load.",
    "w": "https://apps.shopify.com/loadify",
    "i": "Loadify.png"
  },
  "LocalFocus": {
    "w": "https://www.localfocus.nl/en/",
    "i": "LocalFocus.png"
  },
  "Localised": {
    "d": "Localised is local-first ecommerce platform.",
    "w": "https://www.localised.com",
    "i": "Localised.png"
  },
  "Locksmith": {
    "d": "Locksmith is a shopify app for adding access control capability on shopify stores.",
    "w": "https://apps.shopify.com/locksmith",
    "i": "Locksmith.png"
  },
  "LocomotiveCMS": {
    "w": "https://www.locomotivecms.com",
    "i": "LocomotiveCMS.png"
  },
  "Lodash": {
    "d": "Lodash is a JavaScript library which provides utility functions for common programming tasks using the functional programming paradigm.",
    "w": "http://www.lodash.com",
    "i": "Lodash.svg"
  },
  "LogRocket": {
    "d": "LogRocket records videos of user sessions with logs and network data.",
    "w": "https://logrocket.com/",
    "i": "LogRocket.svg"
  },
  "Loggly": {
    "d": "Loggly is a cloud-based log management service provider.",
    "w": "https://www.loggly.com",
    "i": "Loggly.svg"
  },
  "LogiCommerce": {
    "d": "LogiCommerce is the headless ecommerce platform.",
    "w": "https://www.logicommerce.com",
    "i": "LogiCommerce.svg"
  },
  "Login with Amazon": {
    "d": "Login with Amazon allows you use your Amazon user name and password to sign into and share information with participating third-party websites or apps.",
    "w": "https://developer.amazon.com/apps-and-games/login-with-amazon",
    "i": "Amazon.svg"
  },
  "LoginRadius": {
    "d": "LoginRadius is a cloud based SaaS Customer Identity Access Management platform based in Canada.",
    "w": "https://www.loginradius.com",
    "i": "LoginRadius.svg"
  },
  "LogoiX": {
    "d": "LogoiX is a German shipping company.",
    "w": "https://www.logoix.com",
    "i": "LogoiX.png"
  },
  "Loja Integrada": {
    "w": "https://lojaintegrada.com.br/",
    "i": "Loja Integrada.png"
  },
  "Loja Mestre": {
    "d": "Loja Mestre is an all-in-one ecommerce platform from Brazil.",
    "w": "https://www.lojamestre.com.br/",
    "i": "Loja Mestre.svg"
  },
  "Loja Virtual": {
    "d": "Loja Virtual is an all-in-one ecommerce platform from Brazil.",
    "w": "https://www.lojavirtual.com.br",
    "i": "Loja Virtual.svg"
  },
  "Loja2": {
    "d": "Loja2 is an all-in-one ecommerce platform from Brazil.",
    "w": "https://www.loja2.com.br",
    "i": "Loja2.svg"
  },
  "Loom": {
    "w": "https://www.loom.com",
    "i": "Loom.svg"
  },
  "Loop Returns": {
    "d": "Loop Returns is a return portal that automated all the returns and refunds of products.",
    "w": "https://www.loopreturns.com",
    "i": "Loop.svg"
  },
  "Loop54": {
    "d": "Loop54 is a ecommerce search and navigation SaaS product.",
    "w": "https://www.loop54.com",
    "i": "Loop54.png"
  },
  "Lootly": {
    "d": "Lootly is a loyalty and referral marketing automation software suite for ecommerce businesses.",
    "w": "https://lootly.io",
    "i": "Lootly.png"
  },
  "Loox": {
    "d": "Loox is a reviews app for Shopify that helps you gather reviews and user-generated photos from your customers.",
    "w": "https://loox.app",
    "i": "Loox.svg"
  },
  "Loqate": {
    "d": "Loqate is an address verification solution.",
    "w": "https://www.loqate.com",
    "i": "Loqate.svg"
  },
  "LottieFiles": {
    "d": "LottieFiles is an open-source animation file format that's tiny, high quality, interactive, and can be manipulated at runtime.",
    "w": "https://lottiefiles.com",
    "i": "LottieFiles.svg"
  },
  "LoyaltyLion": {
    "d": "LoyaltyLion is a data-driven ecommerce loyalty and engagement platform.",
    "w": "https://loyaltylion.com",
    "i": "LoyaltyLion.svg"
  },
  "Lozad.js": {
    "d": "Lozad.js is a lightweight lazy-loading library that's just 535 bytes minified & gzipped.",
    "w": "https://apoorv.pro/lozad.js/",
    "i": "default.svg"
  },
  "Lua": {
    "d": "Lua is a multi-paradigm programming language designed primarily for embedded use in applications.",
    "w": "http://www.lua.org",
    "i": "Lua.png"
  },
  "Luana": {
    "d": "Luana is a web framework that uses web browser APIs and features to make a cross-platform web app look like a Native one and bring the same experience.",
    "w": "https://luanaframework.github.io",
    "i": "Luana.png"
  },
  "Lucene": {
    "d": "Lucene is a free and open-source search engine software library.",
    "w": "http://lucene.apache.org/core/",
    "i": "Lucene.png"
  },
  "Lucky Orange": {
    "d": "Lucky Orange is a conversion optimisation tool with features including heatmaps, session recording, conversion funnels, form analytics, and chat.",
    "w": "https://www.luckyorange.com",
    "i": "Lucky Orange.svg"
  },
  "Luigi’s Box": {
    "w": "https://www.luigisbox.com",
    "i": "Luigisbox.svg"
  },
  "Luna": {
    "d": "Luna is a company that sells software that aids eyewear companies sell their products online using virtual fitting.",
    "w": "https://luna.io",
    "i": "Luna.svg"
  },
  "LyraThemes Kale": {
    "d": "LyraThemes Kale is a charming and elegant, aesthetically minimal and uncluttered food blog WordPress theme.",
    "w": "https://www.lyrathemes.com/kale",
    "i": "LyraThemes.png"
  },
  "Lytics": {
    "d": "Lytics is a customer data platform built for marketing teams.",
    "w": "https://www.lytics.com",
    "i": "Lytics.svg"
  },
  "langify": {
    "d": "langify translate your shop into multiple languages. langify comes with a visual configurator that allows you to add language switchers that integrate seamlessly into your existing design.",
    "w": "https://langify-app.com",
    "i": "langify.png"
  },
  "libphonenumber": {
    "d": "libphonenumber is a JavaScript library for parsing, formatting, and validating international phone numbers.",
    "w": "https://github.com/google/libphonenumber",
    "i": "default.svg"
  },
  "libwww-perl-daemon": {
    "w": "http://metacpan.org/pod/HTTP::Daemon",
    "i": "libwww-perl-daemon.png"
  },
  "lighttpd": {
    "d": "Lighttpd is an open-source web server optimised for speed-critical environment.",
    "w": "http://www.lighttpd.net",
    "i": "lighttpd.svg"
  },
  "lit-element": {
    "d": "lit-element is a simple base class for creating web components that work in any web page with any framework. lit-element uses lit-html to render into shadow DOM, and adds API to manage properties and attributes.",
    "w": "https://lit.dev",
    "i": "Lit.svg"
  },
  "lit-html": {
    "d": "lit-html is a simple, modern, safe, small and fast HTML templating library for JavaScript.",
    "w": "https://lit.dev",
    "i": "Lit.svg"
  },
  "lite-youtube-embed": {
    "d": "The lite-youtube-embed technique renders the YouTube video inside the IFRAME tag only when the play button in clicked thus improving the core web vitals score of your website.",
    "w": "https://github.com/paulirish/lite-youtube-embed"
  },
  "MAAK": {
    "d": "MAAK is a Laravel based CMS developed by Mahdi Akbari.",
    "w": "https://maak-code.ir",
    "i": "MAAK.png"
  },
  "MAJIN": {
    "d": "MAJIN reads the hearts and minds of each customer using real-world data to automate optimal marketing processes.",
    "w": "https://ma-jin.jp",
    "i": "MAJIN.png"
  },
  "MATORI.NET": {
    "d": "MATORI.NET is a fully managed reverse proxy.",
    "w": "http://matori.net"
  },
  "MDBootstrap": {
    "d": "MDBootstrap (Material Design for Bootstrap) is a complete UI package that can be integrated with other frameworks such as Angular, React, Vue, etc. It is used to design a fully responsive and mobile-friendly layout using various components, plugins, animation.",
    "w": "https://mdbootstrap.com",
    "i": "MDBootstrap.png"
  },
  "MDS Brand": {
    "d": "MDS Brand is a provider of website, CRM, vrtual BDC, SEO, PPC, and live chat solutions for Marine, RV, Powersports, and automotive industries.",
    "w": "https://mdsbrand.com",
    "i": "MDS Brand.png"
  },
  "MDUI": {
    "d": "MDUI is a CSS Framework based on material design.",
    "w": "https://www.mdui.org",
    "i": "MDUI.png"
  },
  "MGID": {
    "d": "MGID is a programmatic advertising platform frequently used by misinformation websites.",
    "w": "https://www.mgid.com",
    "i": "MGID.png"
  },
  "MGPanel": {
    "d": "MGPanel has it all, a content management system that gives programmers the freedom to create professional web pages from scratch, also providing their clients with a self-managing platform.",
    "w": "https://mgpanel.org",
    "i": "MGPanel.png"
  },
  "MIYN Online Appointment": {
    "d": "MIYN Online Appointment is an advanced cloud-based online appointment scheduling software.",
    "w": "https://miyn.app/online-appointment",
    "i": "MIYN.svg"
  },
  "MODX": {
    "d": "MODX (originally MODx) is an open source content management system and web application framework for publishing content on the World Wide Web and intranets.",
    "w": "https://modx.com/content-management-framework",
    "i": "MODX.svg"
  },
  "MRW": {
    "d": "MRW is a Spanish courier company specialised in express national and international shipping services.",
    "w": "https://www.mrw.es",
    "i": "MRW.png"
  },
  "MSHOP": {
    "d": "MSHOP is an all-in-one ecommerce platform.",
    "w": "https://hotishop.com",
    "i": "MSHOP.png"
  },
  "MTCaptcha": {
    "d": "MTCaptcha is a captcha service that is GDPR and WCAG compliant, providing the confidence of privacy and accessibility.",
    "w": "https://www.mtcaptcha.com",
    "i": "MTCaptcha.png"
  },
  "MUI": {
    "d": "MUI(formerly Material UI) is a simple and customisable component library to build faster, beautiful, and more accessible React applications.",
    "w": "https://mui.com",
    "i": "MUI.svg"
  },
  "Macaron": {
    "d": "Macaron is a high productive and modular web framework in Go.",
    "w": "https://go-macaron.com",
    "i": "Macaron.png"
  },
  "MachoThemes NewsMag": {
    "d": "MachoThemes Newsmag is a clean and modern magazine, news or blog WordPress theme.",
    "w": "https://www.machothemes.com/item/newsmag-lite",
    "i": "MachoThemes.png"
  },
  "MadAdsMedia": {
    "w": "http://madadsmedia.com",
    "i": "MadAdsMedia.png"
  },
  "Magazord": {
    "d": "Magazord is an all-in-one ecommerce platform.",
    "w": "https://www.magazord.com.br",
    "i": "Magazord.svg"
  },
  "MageWorx Search Autocomplete": {
    "d": "MageWorx Search Autocomplete extension offers an AJAX-based popup window that displays and updates relevant search results while a customer forms his or her query.",
    "w": "https://github.com/mageworx/search-suite-autocomplete",
    "i": "MageWorx.svg"
  },
  "Magento": {
    "d": "Magento is an open-source ecommerce platform written in PHP.",
    "w": "https://magento.com",
    "i": "Magento.svg"
  },
  "Magewire": {
    "d": "Magewire is a Laravel Livewire port for Magento 2.",
    "w": "https://github.com/magewirephp/magewire",
    "i": "default.svg"
  },
  "Magisto": {
    "d": "Magisto is a video management solution designed to help marketing professionals, agencies, and businesses of all sizes.",
    "w": "https://www.magisto.com",
    "i": "Magisto.png"
  },
  "MailChimp": {
    "d": "Mailchimp is a marketing automation platform and email marketing service.",
    "w": "http://mailchimp.com",
    "i": "mailchimp.svg"
  },
  "MailChimp for WooCommerce": {
    "d": "MailChimp for WooCommerce gives you the ability to automatically sync customer purchase data to your MailChimp account.",
    "w": "https://mailchimp.com/integrations/woocommerce",
    "i": "mailchimp.svg"
  },
  "MailChimp for WordPress": {
    "d": "MailChimp for WordPress is an email marketing plugin that enables you to build subscriber lists.",
    "w": "https://www.mc4wp.com",
    "i": "MailChimp for WordPress.png"
  },
  "MailerLite": {
    "d": "MailerLite is an email marketing tool and website builder for businesses of all shapes and sizes.",
    "w": "https://www.mailerlite.com",
    "i": "MailerLite.svg"
  },
  "MailerLite Website Builder": {
    "d": "MailerLite Website Builder is a free drag & drop website builder with interactive blocks and ecommerce integrations.",
    "w": "https://www.mailerlite.com/features/website-builder",
    "i": "MailerLite.svg"
  },
  "MailerLite plugin": {
    "d": "The official MailerLite signup forms plugin makes it easy to grow your newsletter subscriber list from your WordPress blog or website. The plugin automatically integrates your WordPress form with your MailerLite email marketing account.",
    "w": "https://ru.wordpress.org/plugins/official-mailerlite-sign-up-forms/",
    "i": "MailerLite.svg"
  },
  "Mailgun": {
    "d": "Mailgun is a transactional email API service for developers.",
    "w": "https://www.mailgun.com/",
    "i": "Mailgun.svg"
  },
  "Mailjet": {
    "d": "Mailjet is an email delivery service for marketing and developer teams.",
    "w": "https://www.mailjet.com/",
    "i": "Mailjet.svg"
  },
  "Mailman": {
    "d": "Mailman is free software for managing electronic mail discussion and e-newsletter lists. Mailman is integrated with the web, making it easy for users to manage their accounts and for list owners to administer their lists. Mailman supports built-in archiving, automatic bounce processing, content filtering, digest delivery, spam filters, and more.",
    "w": "http://list.org",
    "i": "Mailman.svg"
  },
  "Mailmunch": {
    "d": "Mailmunch is a lead generation tool that combines landing pages, forms, and email marketing.",
    "w": "https://www.mailmunch.com",
    "i": "Mailmunch.svg"
  },
  "MainAd": {
    "d": "MainAd is an international advertising technology company specialising in real-time bidding and programmatic ad retargeting.",
    "w": "https://www.mainad.com",
    "i": "MainAd.svg"
  },
  "Make-Sense": {
    "w": "https://mk-sense.com/",
    "i": "Make-Sense.png"
  },
  "MakeShop": {
    "d": "MakeShop is a Japanese ecommerce platform.",
    "w": "https://www.makeshop.jp",
    "i": "MakeShop.svg"
  },
  "MakeShopKorea": {
    "d": "MakeShopKorea is a Korean hosting brand that focuses on building ecommerce stores.",
    "w": "https://www.makeshop.co.kr",
    "i": "MakeShopKorea.png"
  },
  "Malomo": {
    "d": "Malomo is a cloud-based shipment tracking solution that helps small to midsize eCommerce businesses provide customers with shipping updates via white-label package tracking pages.",
    "w": "https://gomalomo.com",
    "i": "Malomo.svg"
  },
  "Mambo": {
    "w": "http://mambo-foundation.org",
    "i": "Mambo.png"
  },
  "Mangeznotez": {
    "d": "Mangeznotez is a restaurant table booking widget.",
    "w": "https://www.mangeznotez.com",
    "i": "Mangeznotez.svg"
  },
  "Mantine": {
    "d": "Mantine is a React components library.",
    "w": "https://mantine.dev",
    "i": "Mantine.svg"
  },
  "MantisBT": {
    "w": "http://www.mantisbt.org",
    "i": "MantisBT.png"
  },
  "ManyChat": {
    "d": "ManyChat is a service that allows you to create chatbots for Facebook Messenger.",
    "w": "https://manychat.com/",
    "i": "ManyChat.svg"
  },
  "ManyContacts": {
    "d": "ManyContacts is an attention-grabbing contact form sitting on top of your website that helps to increase conversion by converting visitors into leads.",
    "w": "https://www.manycontacts.com",
    "i": "ManyContacts.png"
  },
  "MapLibre GL JS": {
    "d": "MapLibre GL JS is an open-source library for publishing maps on your websites.",
    "w": "https://github.com/maplibre/maplibre-gl-js",
    "i": "MapLibre.svg"
  },
  "Mapbox GL JS": {
    "d": "Mapbox GL JS is a JavaScript library that uses WebGL to render interactive maps from vector tiles and Mapbox styles.",
    "w": "https://github.com/mapbox/mapbox-gl-js",
    "i": "Mapbox.svg"
  },
  "Mapp": {
    "d": "Mapp is designed specifically to help consumer-facing brands run highly personalised, cross-channel marketing campaigns powered by real-time customer data and generated insights.",
    "w": "https://mapp.com",
    "i": "Mapp.svg"
  },
  "Mapplic": {
    "d": "Mapplic is a plugin for creating interactive maps based on simple image (jpg, png) or vector (svg) files.",
    "w": "https://mapplic.com",
    "i": "Mapplic.svg"
  },
  "Maptalks": {
    "d": "Maptalks is a light and plugable JavaScript library for integrated 2D/3D maps.",
    "w": "https://maptalks.org",
    "i": "Maptalks.png"
  },
  "Marchex": {
    "d": "Marchex is a B2B call and conversational analytics company.",
    "w": "https://www.marchex.com",
    "i": "Marchex.png"
  },
  "Marfeel": {
    "d": "Marfeel is a publisher platform that allows publishers to create, optimise and monetise their mobile websites.",
    "w": "https://www.marfeel.com",
    "i": "Marfeel.svg"
  },
  "MariaDB": {
    "d": "MariaDB is an open-source relational database management system compatible with MySQL.",
    "w": "https://mariadb.org",
    "i": "mariadb.svg"
  },
  "Marionette.js": {
    "d": "Marionette is a composite application library for Backbone.js that aims to simplify the construction of large scale JavaScript applications. It is a collection of common design and implementation patterns found in applications.",
    "w": "https://marionettejs.com",
    "i": "Marionette.js.svg"
  },
  "Marked": {
    "w": "https://marked.js.org",
    "i": "Marked.svg"
  },
  "Marker": {
    "d": "Marker.io is an issue tracker solution for Project Managers, QA Testers and Agency Clients to report feedback & bugs to developers.",
    "w": "https://marker.io",
    "i": "Marker.svg"
  },
  "Marketo": {
    "d": "Marketo develops and sells marketing automation software for account-based marketing and other marketing services and products including SEO and content creation.",
    "w": "https://www.marketo.com",
    "i": "Marketo.svg"
  },
  "Marketo Forms": {
    "d": "Marketo Forms help create web forms without programming knowledge. Forms can reside on Marketo landing pages and also be embedded on any page of website.",
    "w": "https://www.marketo.com",
    "i": "Marketo.svg"
  },
  "Marketpath CMS": {
    "d": "Marketpath CMS is a hosted website content management system used by businesses, churches and schools.",
    "w": "https://www.marketpath.com",
    "i": "Marketpath CMS.png"
  },
  "Marko": {
    "d": "Marko is HTML re-imagined as a language for building dynamic and reactive user interfaces.",
    "w": "https://markojs.com",
    "i": "Marko.svg"
  },
  "Master Slider": {
    "d": "Master Slider is an SEO friendly, responsive image and video slider.",
    "w": "https://www.masterslider.com",
    "i": "master_slider.png"
  },
  "Master Slider Plugin": {
    "d": "Master Slider Plugin is an SEO friendly, responsive image and video slider plugin for WordPress.",
    "w": "https://wordpress.org/plugins/master-slider",
    "i": "master_slider.png"
  },
  "Mastercard": {
    "d": "MasterCard facilitates electronic funds transfers throughout the world, most commonly through branded credit cards, debit cards and prepaid cards.",
    "w": "https://www.mastercard.com",
    "i": "Mastercard.svg"
  },
  "MasterkinG32 Framework": {
    "d": "MasterkinG32 framework.",
    "w": "https://masterking32.com",
    "i": "Masterking32.png"
  },
  "Mastodon": {
    "d": "Mastodon is a free and open-source self-hosted social networking service.",
    "w": "https://joinmastodon.org",
    "i": "Mastodon.svg"
  },
  "Matajer": {
    "d": "Matajer is an ecommerce platform from Saudi Arabia.",
    "w": "https://mapp.sa",
    "i": "Matajer.png"
  },
  "Material Design Lite": {
    "d": "Material Design Lite is a library of components for web developers.",
    "w": "https://getmdl.io",
    "i": "Material Design Lite.png"
  },
  "Materialize CSS": {
    "d": "Materialize CSS is a css framework which is used to create responsive websites.",
    "w": "http://materializecss.com",
    "i": "Materialize CSS.png"
  },
  "MathJax": {
    "d": "MathJax is a cross-browser JavaScript library that displays mathematical notation in web browsers, using MathML, LaTeX and ASCIIMathML markup.",
    "w": "https://www.mathjax.org",
    "i": "MathJax.png"
  },
  "Matomo Analytics": {
    "d": "Matomo Analytics is a free and open-source web analytics application, that runs on a PHP/MySQL web-server.",
    "w": "https://matomo.org",
    "i": "Matomo.svg"
  },
  "Matomo Tag Manager": {
    "d": "Matomo Tag Manager manages tracking and marketing tags.",
    "w": "https://developer.matomo.org/guides/tagmanager/introduction",
    "i": "Matomo.svg"
  },
  "Mattermost": {
    "w": "https://about.mattermost.com",
    "i": "mattermost.png"
  },
  "Mautic": {
    "d": "Mautic is a free and open-source marketing automation tool for Content Management, Social Media, Email Marketing, and can be used for the integration of social networks, campaign management, forms, questionnaires, reports, etc.",
    "w": "https://www.mautic.org/",
    "i": "mautic.svg"
  },
  "MaxCDN": {
    "d": "MaxCDN is a content delivery network, which accelerates web-sites and decreases the server load.",
    "w": "http://www.maxcdn.com",
    "i": "MaxCDN.png"
  },
  "MaxMind": {
    "d": "MaxMind is a provider of geolocation and online fraud detection tools.",
    "w": "https://www.maxmind.com",
    "i": "MaxMind.png"
  },
  "MaxSite CMS": {
    "w": "http://max-3000.com",
    "i": "MaxSite CMS.png"
  },
  "Maxemail": {
    "w": "https://maxemail.xtremepush.com",
    "i": "Maxemail.svg"
  },
  "MaxenceDEVCMS": {
    "d": "MaxenceDEVCMS is a simple CMS for ecommerce, esport, landing page.",
    "w": "https://cms.maxencedev.fr",
    "i": "default.svg"
  },
  "Measured": {
    "d": "Measured is an analytics platform to measure efficiency of marketing channels.",
    "w": "https://www.measured.com",
    "i": "Measured.svg"
  },
  "Medallia": {
    "d": "Medallia (formerly Kampyle) is a complete customer feedback platform that helps digital enterprises listen, understand, and act across all digital touch-points.",
    "w": "https://www.medallia.com",
    "i": "Medallia.svg"
  },
  "Media.net": {
    "d": "Media.net is an advertising company focused on providing monetization products to digital publishers.",
    "w": "https://www.media.net",
    "i": "Media.net.svg"
  },
  "MediaElement.js": {
    "d": "MediaElement.js is a set of custom Flash plugins that mimic the HTML5 MediaElement API for browsers that don't support HTML5 or don't support the media codecs.",
    "w": "http://www.mediaelementjs.com",
    "i": "MediaElement.js.svg"
  },
  "MediaWiki": {
    "d": "MediaWiki is a free and open-source wiki engine.",
    "w": "https://www.mediawiki.org",
    "i": "MediaWiki.svg"
  },
  "Mediavine": {
    "d": "Mediavine is a full service ad management platform.",
    "w": "https://www.mediavine.com",
    "i": "Mediavine.svg"
  },
  "Medium": {
    "d": "Medium is an online publishing platform.",
    "w": "https://medium.com",
    "i": "Medium.svg"
  },
  "Meebo": {
    "w": "http://www.meebo.com",
    "i": "Meebo.png"
  },
  "Meeting Scheduler": {
    "d": "Meeting Scheduler is a schedule appointments widget.",
    "w": "https://bookmenow.info",
    "i": "Meeting Scheduler.png"
  },
  "Megagroup CMS.S3": {
    "d": "Megagroup CMS.S3 management system is provided not as a “boxed product”, but as a separate service, that is, it works using SaaS technology. This means that you manage your site directly through your browser using an intuitive interface.",
    "w": "https://megagroup.ru/cms",
    "i": "Megagroup.svg"
  },
  "Meilisearch": {
    "d": "Meilisearch is a search engine created by Meili, a software development company based in France.",
    "w": "https://www.meilisearch.com",
    "i": "Meilisearch.svg"
  },
  "Melis Platform": {
    "w": "https://www.melistechnology.com/",
    "i": "melis-platform.svg"
  },
  "MemberStack": {
    "d": "MemberStack is a no-code membership platform for Webflow.",
    "w": "https://www.memberstack.io",
    "i": "MemberStack.png"
  },
  "Mention Me": {
    "d": "Mention Me is a referral marketing platform for conversion-obsessed ecommerce brands.",
    "w": "https://www.mention-me.com",
    "i": "Mention Me.png"
  },
  "Menufy Online Ordering": {
    "d": "Menufy is an online and mobile meal ordering service.",
    "w": "https://restaurant.menufy.com",
    "i": "Menufy.png"
  },
  "Menufy Website": {
    "d": "Menufy is an online and mobile meal ordering service.",
    "w": "https://restaurant.menufy.com",
    "i": "Menufy.png"
  },
  "Mercado Shops": {
    "d": "Mercado Shops is an all-in-one ecommerce platform.",
    "w": "https://www.mercadoshops.com",
    "i": "Mercado Shops.svg"
  },
  "Mermaid": {
    "w": "https://mermaidjs.github.io/"
  },
  "MetaSlider": {
    "d": "MetaSlider is a WordPress plugin for adding responsive sliders and carousels to websites.",
    "w": "https://www.metaslider.com",
    "i": "MetaSlider.svg"
  },
  "Meteor": {
    "w": "https://www.meteor.com",
    "i": "Meteor.png"
  },
  "Methode": {
    "w": "https://www.eidosmedia.com/",
    "i": "Methode.png"
  },
  "Metomic": {
    "w": "https://metomic.io",
    "i": "metomic.png"
  },
  "Metrilo": {
    "d": "Metrilo is an ecommerce analytics, email marketing software provider.",
    "w": "https://www.metrilo.com",
    "i": "Metrilo.svg"
  },
  "MetroUI": {
    "d": "MetroUI is an open-source frontend toolkit inspired by Microsoft Fluent (former Metro) design principles.",
    "w": "https://github.com/olton/Metro-UI-CSS",
    "i": "default.svg"
  },
  "Mews": {
    "d": "Mews is a hospitalitions service that enables hotels to track their bookings.",
    "w": "https://www.mews.com",
    "i": "Mews.png"
  },
  "Microsoft 365": {
    "d": "Microsoft 365 is a line of subscription services offered by Microsoft as part of the Microsoft Office product line.",
    "w": "https://www.microsoft.com/microsoft-365",
    "i": "Microsoft 365.svg"
  },
  "Microsoft ASP.NET": {
    "d": "ASP.NET is an open-source, server-side web-application framework designed for web development to produce dynamic web pages.",
    "w": "https://www.asp.net",
    "i": "Microsoft ASP.NET.svg"
  },
  "Microsoft Advertising": {
    "d": "Microsoft Advertising is an online advertising platform developed by Microsoft.",
    "w": "https://ads.microsoft.com",
    "i": "Microsoft.svg"
  },
  "Microsoft Ajax Content Delivery Network": {
    "d": "Microsoft Ajax Content Delivery Network hosts popular third party JavaScript libraries such as jQuery and enables you to easily add them to your web applications.",
    "w": "https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview",
    "i": "Microsoft.svg"
  },
  "Microsoft Application Insights": {
    "d": "Microsoft Application Insights is a feature of Azure Monitor that provides extensible application performance management (APM) and monitoring for live web apps.",
    "w": "https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview",
    "i": "Microsoft.svg"
  },
  "Microsoft Authentication": {
    "d": "The Microsoft Authentication Library for JavaScript enables both client-side and server-side JavaScript applications to authenticate users using Azure AD for work and school accounts (AAD), Microsoft personal accounts (MSA), and social identity providers like Facebook, Google, LinkedIn, Microsoft accounts, etc. through Azure AD B2C service.",
    "w": "https://github.com/AzureAD/microsoft-authentication-library-for-js",
    "i": "Microsoft.svg"
  },
  "Microsoft Clarity": {
    "d": "Microsoft's Clarity is a analytics tool which provides website usage statistics, session recording, and heatmaps.",
    "w": "https://clarity.microsoft.com",
    "i": "Microsoft Clarity.svg"
  },
  "Microsoft Dynamics 365 Commerce": {
    "d": "Microsoft Dynamics 365 Commerce, an omnichannel ecommerce solution that allows you to build a website, connect physical and digital stores, track customer behaviours and requirements, deliver personalised experiences.",
    "w": "https://dynamics.microsoft.com/commerce/overview",
    "i": "Microsoft.svg"
  },
  "Microsoft Excel": {
    "d": "Microsoft Excel is an electronic spreadsheet program used for storing, organizing, and manipulating data.",
    "w": "https://office.microsoft.com/excel",
    "i": "Microsoft Excel.svg"
  },
  "Microsoft HTTPAPI": {
    "w": "http://microsoft.com",
    "i": "Microsoft.svg"
  },
  "Microsoft PowerPoint": {
    "d": "Microsoft PowerPoint is a tool to create presentations using simple drag and drop tools.",
    "w": "https://office.microsoft.com/powerpoint",
    "i": "Microsoft PowerPoint.svg"
  },
  "Microsoft Publisher": {
    "d": "Microsoft Publisher is an application that allows you to create professional documents such as newsletters, postcards, flyers, invitations, brochures.",
    "w": "https://office.microsoft.com/publisher",
    "i": "Microsoft Publisher.svg"
  },
  "Microsoft SharePoint": {
    "d": "SharePoint is a cloud-based collaborative platform to manage and share content.",
    "w": "https://sharepoint.microsoft.com",
    "i": "Microsoft SharePoint.png"
  },
  "Microsoft Visual Studio": {
    "d": "Microsoft Visual Studio is an integrated development environment from Microsoft.",
    "w": "https://visualstudio.microsoft.com",
    "i": "Microsoft Visual Studio.svg"
  },
  "Microsoft Word": {
    "d": "MS Word is a word-processing program used primarily for creating documents.",
    "w": "https://office.microsoft.com/word",
    "i": "Microsoft Word.svg"
  },
  "Miestro": {
    "d": "Miestro is an all-in-one ecommerce platform wich allow create online course and membership sites.",
    "w": "https://miestro.com",
    "i": "Miestro.svg"
  },
  "Milestone CMS": {
    "d": "Milestone CMS is a SEO-first CMS that offers built-in advanced schema markups and Core Web Vitals conformance for improved search performance.",
    "w": "https://www.milestoneinternet.com/products/milestone-cms",
    "i": "Milestone.svg"
  },
  "Milligram": {
    "w": "https://milligram.io",
    "i": "Milligram.png"
  },
  "MinMaxify": {
    "d": "MinMaxify is an app that allows Shopify store owners to set minimum and maximum values for customer orders built by Intillium.",
    "w": "https://apps.shopify.com/order-limits-minmaxify",
    "i": "MinMaxify.png"
  },
  "MindBody": {
    "d": "Mindbody is a (SaaS) company that provides cloud-based online scheduling and other business management software for the wellness services industry.",
    "w": "https://www.mindbodyonline.com",
    "i": "MindBody.svg"
  },
  "Mindbox": {
    "d": "Mindbox is a marketing automation platform.",
    "w": "https://mindbox.ru",
    "i": "Mindbox.png"
  },
  "Minero.cc": {
    "d": "Minero.cc is a bot that helps run crypto mining application.",
    "w": "http://minero.cc/"
  },
  "MiniServ": {
    "w": "https://github.com/webmin/webmin/blob/master/miniserv.pl"
  },
  "Mint": {
    "d": "Mint is an extensible, self-hosted web site analytics program.",
    "w": "https://haveamint.com",
    "i": "Mint.png"
  },
  "Miso": {
    "d": "Miso is a real-time personalisation APIs for search, recommendation, and marketing.",
    "w": "https://miso.ai",
    "i": "Miso.svg"
  },
  "Misskey": {
    "d": "Misskey is a distributed microblogging platform.",
    "w": "https://join.misskey.page/",
    "i": "Misskey.svg"
  },
  "Mittwald": {
    "d": "Mittwald is a web hosting agency, established in 2003 in Espelkamp, Germany",
    "w": "https://www.mittwald.de",
    "i": "Mittwald.svg"
  },
  "Miva": {
    "d": "Miva is a privately owned ecommerce shopping cart software and hosting company with headquarters in San Diego.",
    "w": "http://www.miva.com",
    "i": "miva.png"
  },
  "Mixin": {
    "d": "Mixin is a highly-available ecommerce cloud.",
    "w": "https://mixin.ir",
    "i": "Mixin.svg"
  },
  "Mixpanel": {
    "d": "Mixpanel provides a business analytics service. It tracks user interactions with web and mobile applications and provides tools for targeted communication with them. Its toolset contains in-app A/B tests and user survey forms.",
    "w": "https://mixpanel.com",
    "i": "Mixpanel.svg"
  },
  "MizbanCloud": {
    "d": "MizbanCloud is a total cloud infrastructure solutions, CDN service provider and Cloud Computing Services, Cloud DNS, Cloud Security, VoD Streaming Service, Live Streaming, Cloud Object Storage.",
    "w": "https://mizbancloud.com",
    "i": "MizbanCloud.svg"
  },
  "MkDocs": {
    "d": "MkDocs is a static site generator, used for building project documentation.",
    "w": "http://www.mkdocs.org/",
    "i": "mkdocs.png"
  },
  "MoEngage": {
    "d": "MoEngage is an intelligent customer engagement platform for the customer-obsessed marketer.",
    "w": "https://www.moengage.com",
    "i": "MoEngage.png"
  },
  "Moat": {
    "d": "Moat is a digital ad analytics tool.",
    "w": "https://moat.com/",
    "i": "Moat.svg"
  },
  "MobX": {
    "w": "https://mobx.js.org",
    "i": "MobX.svg"
  },
  "Mobify": {
    "d": "Mobify is a web storefront platform for headless commerce.",
    "w": "https://www.mobify.com",
    "i": "Mobify.png"
  },
  "Mobirise": {
    "d": "Mobirise is a free offline app for Windows and Mac to easily create small/medium websites, landing pages, online resumes and portfolios.",
    "w": "https://mobirise.com",
    "i": "mobirise.png"
  },
  "MochiKit": {
    "w": "https://mochi.github.io/mochikit/",
    "i": "MochiKit.png"
  },
  "MochiWeb": {
    "w": "https://github.com/mochi/mochiweb"
  },
  "Modernizr": {
    "d": "Modernizr is a JavaScript library that detects the features available in a user's browser.",
    "w": "https://modernizr.com",
    "i": "Modernizr.svg"
  },
  "ModiFace": {
    "d": "ModiFace is a provider of Augmented Reality technology for the beauty industry.",
    "w": "https://modiface.com",
    "i": "ModiFace.svg"
  },
  "Modified": {
    "w": "http://www.modified-shop.org/",
    "i": "modified.png"
  },
  "Module Federation": {
    "d": "Module Federation is a webpack technology for dynamically loading parts of other independently deployed builds.",
    "w": "https://webpack.js.org/concepts/module-federation/",
    "i": "Webpack.svg"
  },
  "Moguta.CMS": {
    "w": "https://moguta.ru",
    "i": "Moguta.CMS.png"
  },
  "MoinMoin": {
    "d": "MoinMoin is a wiki engine implemented in Python.",
    "w": "https://moinmo.in",
    "i": "MoinMoin.png"
  },
  "Mojolicious": {
    "w": "http://mojolicio.us",
    "i": "Mojolicious.png"
  },
  "Mokka": {
    "d": "Mokka is a Buy Now Pay Later solution that connects target customer acquisition and settlement costs through marketing and promotion.",
    "w": "https://mokka.ro",
    "i": "Mokka.svg"
  },
  "Mollie": {
    "d": "Mollie is a payment provider for Belgium and the Netherlands, offering payment methods such as credit card, iDEAL, Bancontact/Mister cash, PayPal, SCT, SDD, and others.",
    "w": "https://www.mollie.com",
    "i": "Mollie.svg"
  },
  "Mollom": {
    "w": "http://mollom.com",
    "i": "Mollom.png"
  },
  "Moment Timezone": {
    "w": "http://momentjs.com/timezone/",
    "i": "Moment.js.svg"
  },
  "Moment.js": {
    "d": "Moment.js is a free and open-source JavaScript library that removes the need to use the native JavaScript Date object directly.",
    "w": "https://momentjs.com",
    "i": "Moment.js.svg"
  },
  "Monaco Editor": {
    "d": "Monaco Editor is the code editor that powers VS Code. Monaco Editor is a tool in the text editor category of a tech stack.",
    "w": "https://microsoft.github.io/monaco-editor/",
    "i": "Microsoft.svg"
  },
  "Mondial Relay": {
    "d": "Mondial Relay is a parcel shipping and delivery service in Europe.",
    "w": "https://www.mondialrelay.com",
    "i": "Mondial Relay.svg"
  },
  "Mondo Media": {
    "w": "http://mondo-media.de",
    "i": "Mondo Media.png"
  },
  "Moneris": {
    "d": "Moneris (formerly Moneris Solutions) is Canada's largest financial technology company that specialises in payment processing.",
    "w": "https://www.moneris.com",
    "i": "Moneris.svg"
  },
  "Moneris Payment Gateway": {
    "d": "Moneris is Canada’s leading processor of Debit and credit card payments. This WooCommerce extension automatically adds moneris payment gateway to your woocommerce website and allows you to keep the customer on your site for the checkout process.",
    "w": "https://wordpress.org/plugins/wc-moneris-payment-gateway",
    "i": "Moneris.svg"
  },
  "MongoDB": {
    "d": "MongoDB is a document-oriented NoSQL database used for high volume data storage.",
    "w": "http://www.mongodb.org",
    "i": "MongoDB.png"
  },
  "Mongrel": {
    "w": "http://mongrel2.org",
    "i": "Mongrel.png"
  },
  "Monkey HTTP Server": {
    "w": "http://monkey-project.com",
    "i": "Monkey HTTP Server.png"
  },
  "Mono": {
    "w": "http://mono-project.com",
    "i": "Mono.png"
  },
  "Mono.net": {
    "w": "https://www.mono.net/en",
    "i": "Mono.net.png"
  },
  "Monsido": {
    "d": "Monsido provides a website management platform that automates processes, ensures regulatory compliance, improves collaboration in web and marketing teams, and streamlines reporting.",
    "w": "https://monsido.com",
    "i": "Monsido.png"
  },
  "MonsterInsights": {
    "d": "MonsterInsights is the most popular Google Analytics plugin for WordPress.",
    "w": "https://www.monsterinsights.com",
    "i": "MonsterInsights.png"
  },
  "MooTools": {
    "w": "https://mootools.net",
    "i": "MooTools.png"
  },
  "Moodle": {
    "d": "Moodle is a free and open-source Learning Management System (LMS) written in PHP and distributed under the GNU General Public License.",
    "w": "http://moodle.org",
    "i": "Moodle.png"
  },
  "Moon": {
    "w": "https://kbrsh.github.io/moon/",
    "i": "moon.svg"
  },
  "Moove GDPR Consent": {
    "d": "Moove GDPR Consent is a GDPR Cookie Compliance plugin for Wordpress.",
    "w": "https://www.mooveagency.com/wordpress/gdpr-cookie-compliance-plugin",
    "i": "Moove.svg"
  },
  "Mopinion": {
    "d": "Mopinion is an all-in-one user feedback platform that helps digital enterprises listen, understand, and act across all digital touchpoints.",
    "w": "https://mopinion.com",
    "i": "Mopinion.svg"
  },
  "Moshimo": {
    "d": "Moshimo is a free affiliate service for individuals.",
    "w": "https://af.moshimo.com",
    "i": "Moshimo.png"
  },
  "MotoCMS": {
    "w": "http://motocms.com",
    "i": "MotoCMS.svg"
  },
  "Mouse Flow": {
    "w": "https://mouseflow.com/",
    "i": "Mouseflow.svg"
  },
  "Movable Ink": {
    "d": "Movable Ink is a technology company that allows marketers to change emails after they have been sent out.",
    "w": "https://movableink.com",
    "i": "Movable Ink.png"
  },
  "Movable Type": {
    "w": "http://movabletype.org",
    "i": "Movable Type.svg"
  },
  "Mozard Suite": {
    "w": "http://mozard.nl",
    "i": "Mozard Suite.png"
  },
  "Mulberry": {
    "d": "Mulberry is a developer of personalised product protection solutions used to help brands unlock additional revenue.",
    "w": "https://www.getmulberry.com",
    "i": "Mulberry.svg"
  },
  "Mura CMS": {
    "d": "Mura CMS is the cloud-based, API driven, content management platform.",
    "w": "http://www.getmura.com",
    "i": "Mura CMS.svg"
  },
  "Mustache": {
    "d": "Mustache is a web template system.",
    "w": "https://mustache.github.io",
    "i": "Mustache.png"
  },
  "Muuri": {
    "d": "Muuri is a JavaScript layout engine that allows you to build all kinds of layouts and make them responsive, sortable, filterable, draggable and/or animated.",
    "w": "https://muuri.dev",
    "i": "Muuri.svg"
  },
  "My Flying Box": {
    "d": "My Flying Box is an international parcel shipping company.",
    "w": "https://www.myflyingbox.com/",
    "i": "My Flying Box.svg"
  },
  "My Food Link": {
    "d": "My Food Link provides a fully hosted specialist online supermarket ecommerce platform to supermarkets and grocers.",
    "w": "https://www.myfoodlink.com.au",
    "i": "My Food Link.svg"
  },
  "MyBB": {
    "d": "MyBB is a free and open-source forum software written in PHP.",
    "w": "https://mybb.com",
    "i": "MyBB.png"
  },
  "MyBlogLog": {
    "w": "http://www.mybloglog.com",
    "i": "MyBlogLog.png"
  },
  "MyCashFlow": {
    "w": "https://www.mycashflow.fi/",
    "i": "mycashflow.png"
  },
  "MyFonts": {
    "d": "MyFonts is a digital fonts distributor, based in Woburn, Massachusetts.",
    "w": "https://www.myfonts.com",
    "i": "MyFonts.svg"
  },
  "MyLiveChat": {
    "d": "MyLiveChat is a live chat developed by CuteSoft.",
    "w": "https://mylivechat.com",
    "i": "MyLiveChat.png"
  },
  "MyOnlineStore": {
    "d": "MyOnlineStore is a web shop system in the Netherlands.",
    "w": "https://www.myonlinestore.com/ ",
    "i": "MyOnlineStore.png"
  },
  "MySQL": {
    "d": "MySQL is an open-source relational database management system.",
    "w": "http://mysql.com",
    "i": "MySQL.svg"
  },
  "MySiteNow": {
    "d": "MySiteNow provides cloud-based web development services, allowing users to create HTML5 websites and mobile sites.",
    "w": "https://mysitenow.gr",
    "i": "MySiteNow.png"
  },
  "MyWebsite": {
    "d": "MyWebsite is website builder designed for easy editing and fast results.",
    "w": "https://www.ionos.com",
    "i": "MyWebsite.svg"
  },
  "MyWebsite Creator": {
    "d": "MyWebsite Creator is website builder designed for easy editing and fast results.",
    "w": "https://www.ionos.com",
    "i": "MyWebsite.svg"
  },
  "MyWebsite Now": {
    "d": "MyWebsite Now is a website builder designed for getting online quickly.",
    "w": "https://www.ionos.com",
    "i": "MyWebsite.svg"
  },
  "Myhkw player": {
    "d": "Myhkw player is a website music player.",
    "w": "https://myhkw.cn",
    "i": "Myhkw player.png"
  },
  "Mynetcap": {
    "w": "http://www.netcap-creation.fr",
    "i": "Mynetcap.png"
  },
  "Mysitefy": {
    "d": "Mysitefy is a digital platform for B2B enterprises. It provides companies with a closed-loop digital application system from website building to marketing, to customer and order management.",
    "w": "https://www.mysitefy.com",
    "i": "Mysitefy.png"
  },
  "MysteryThemes News Portal": {
    "d": "News Portal is the ultimate magazine WordPress theme by MysteryThemes.",
    "w": "https://mysterythemes.com/wp-themes/news-portal",
    "i": "MysteryThemes.png"
  },
  "MysteryThemes News Portal Lite": {
    "d": "News Portal Lite is child theme of News Portal ultimate magazine WordPress theme by MysteryThemes.",
    "w": "https://mysterythemes.com/wp-themes/news-portal-lite",
    "i": "MysteryThemes.png"
  },
  "MysteryThemes News Portal Mag": {
    "d": "News Portal Mag is child theme of News Portal ultimate magazine WordPress theme by MysteryThemes.",
    "w": "https://mysterythemes.com/wp-themes/news-portal-mag",
    "i": "MysteryThemes.png"
  },
  "mParticle": {
    "d": "mParticle is a mobile-focused event tracking and data ingestion tool.",
    "w": "https://www.mparticle.com",
    "i": "mParticle.svg"
  },
  "math.js": {
    "w": "http://mathjs.org",
    "i": "math.js.png"
  },
  "mdBook": {
    "d": "mdBook is a utility to create modern online books from Markdown files.",
    "w": "https://github.com/rust-lang/mdBook",
    "i": "mdBook.svg"
  },
  "metisMenu": {
    "d": "metisMenu is a collapsible jQuery menu plugin.",
    "w": "https://github.com/onokumus/metismenu"
  },
  "microCMS": {
    "d": "microCMS is a Japan-based headless CMS that enables editors and developers to build delicate sites and apps.",
    "w": "https://microcms.io",
    "i": "microCMS.svg"
  },
  "mini_httpd": {
    "w": "http://acme.com/software/mini_httpd",
    "i": "mini_httpd.png"
  },
  "mirrAR": {
    "d": "mirrAR is a real-time augmented reality platform for retail brands that enables consumers to virtually try on products and experience how it feels to own them before the actual purchase, both in-store and online.",
    "w": "https://www.mirrar.com",
    "i": "mirrAR.png"
  },
  "mobicred": {
    "d": "Mobicred is a credit facility that allows you to safely shop online with our participating retailers.",
    "w": "https://mobicred.co.za/",
    "i": "Mobicred.png"
  },
  "mod_auth_pam": {
    "d": "Mod_auth_pam is used to configure ways for authenticating users.",
    "w": "http://pam.sourceforge.net/mod_auth_pam",
    "i": "Apache.svg"
  },
  "mod_dav": {
    "d": "Mod_dav is an Apache module to provide WebDAV capabilities for your Apache web server. It is an open-source module, provided under an Apache-style license.",
    "w": "http://webdav.org/mod_dav",
    "i": "Apache.svg"
  },
  "mod_fastcgi": {
    "d": "Mod_fcgid is a high performance alternative to mod_cgi or mod_cgid, which starts a sufficient number instances of the CGI program to handle concurrent requests, and these programs remain running to handle further incoming requests.",
    "w": "http://www.fastcgi.com/mod_fastcgi/docs/mod_fastcgi.html",
    "i": "Apache.svg"
  },
  "mod_jk": {
    "d": "Mod_jk is an Apache module used to connect the Tomcat servlet container with web servers such as Apache, iPlanet, Sun ONE (formerly Netscape) and even IIS using the Apache JServ Protocol. A web server waits for client HTTP requests.",
    "w": "http://tomcat.apache.org/tomcat-3.3-doc/mod_jk-howto.html",
    "i": "Apache.svg"
  },
  "mod_perl": {
    "d": "Mod_perl is an optional module for the Apache HTTP server. It embeds a Perl interpreter into the Apache server. In addition to allowing Apache modules to be written in the Perl programming language, it allows the Apache web server to be dynamically configured by Perl programs.",
    "w": "http://perl.apache.org",
    "i": "mod_perl.png"
  },
  "mod_python": {
    "d": "Mod_python is an Apache HTTP Server module that integrates the Python programming language with the server. It is intended to provide a Python language binding for the Apache HTTP Server. ",
    "w": "http://www.modpython.org",
    "i": "mod_python.png"
  },
  "mod_rack": {
    "d": "Mod_rack is a free web server and application server with support for Ruby, Python and Node.js.",
    "w": "http://phusionpassenger.com",
    "i": "Phusion Passenger.png"
  },
  "mod_rails": {
    "d": "Mod_rails is a free web server and application server with support for Ruby, Python and Node.js.",
    "w": "http://phusionpassenger.com",
    "i": "Phusion Passenger.png"
  },
  "mod_ssl": {
    "d": "mod_ssl is an optional module for the Apache HTTP Server. It provides strong cryptography for the Apache web server via the Secure Sockets Layer (SSL) and Transport Layer Security (TLS) cryptographic protocols by the help of the open-source SSL/TLS toolkit OpenSSL.",
    "w": "http://modssl.org",
    "i": "mod_ssl.png"
  },
  "mod_wsgi": {
    "d": "mod_wsgi is an Apache HTTP Server module that provides a WSGI compliant interface for hosting Python based web applications under Apache.",
    "w": "https://code.google.com/p/modwsgi",
    "i": "mod_wsgi.png"
  },
  "NACEX": {
    "d": "NACEX is an express courier company in Spain, Andorra and Portugal.",
    "w": "https://www.nacex.es",
    "i": "NACEX.svg"
  },
  "NEO - Omnichannel Commerce Platform": {
    "d": "NEO is an ecommerce software that manages multiple online stores.",
    "w": "https://www.jetecommerce.com.br",
    "i": "Plataforma NEO.svg"
  },
  "NSW Design System": {
    "w": "https://www.digital.nsw.gov.au/digital-design-system",
    "i": "NSW Design System.svg"
  },
  "NTLM": {
    "d": "NTLM is an authentication method commonly used by Windows servers",
    "w": "https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-ntht/"
  },
  "NVD3": {
    "d": "NVD3 is a JavaScript visualisation library that is a free open-source tool.",
    "w": "http://nvd3.org",
    "i": "NVD3.png"
  },
  "Nacelle": {
    "d": "Nacelle is a headless ecommerce platform.",
    "w": "https://nacelle.com",
    "i": "Nacelle.svg"
  },
  "NagaCommerce": {
    "d": "NagaCommerce is an ecommerce platform provided as a service.",
    "w": "https://www.nagacommerce.com",
    "i": "NagaCommerce.svg"
  },
  "Nagich": {
    "d": "Nagich is a website accessibility overlay provider from Israel.",
    "w": "https://www.nagich.co.il",
    "i": "Nagich.svg"
  },
  "NagishLi": {
    "d": "NagishLi is a free accessibility plugin from Localize*, created to provide an equal oppurtunity for webmasters to make their website accessible and make the internet more accessible for people with disability.",
    "w": "https://www.nagish.li",
    "i": "NagishLi.png"
  },
  "Naive UI": {
    "d": "Naive UI is a Vue.js UI library written in TypeScript, offering more than 80 treeshakable components.",
    "w": "https://www.naiveui.com",
    "i": "Naive UI.svg"
  },
  "Najva": {
    "d": "Najva is a retention marketing solution that offers push notification and email marketing.",
    "w": "https://www.najva.com",
    "i": "Najva.png"
  },
  "Narrativ": {
    "d": "Narrativ is a subscription technology platform for brands to acquire new customers through trusted creators.",
    "w": "https://narrativ.com/",
    "i": "Narrativ.png"
  },
  "Narvar": {
    "d": "Narvar is a customer experience platform that helps retailers inspire long-term customer loyalty, at all steps of the post-purchase journey.",
    "w": "https://corp.narvar.com",
    "i": "Narvar.svg"
  },
  "NationBuilder": {
    "d": "NationBuilder is a Los Angeles based technology start-up that develops content management and customer relationship management (CRM) software.",
    "w": "https://nationbuilder.com",
    "i": "NationBuilder.svg"
  },
  "Nativo": {
    "d": "Nativo is an advertising technology provider.",
    "w": "https://www.nativo.com",
    "i": "Nativo.png"
  },
  "Navegg": {
    "w": "https://www.navegg.com/",
    "i": "Navegg.png"
  },
  "Naver Analytics": {
    "d": "Naver Analytics is a Korean based analytics service.",
    "w": "https://analytics.naver.com",
    "i": "Naver Analytics.svg"
  },
  "Naver Maps": {
    "d": "Naver Maps help develop location-based services which provided by Naver.",
    "w": "https://www.ncloud.com/product/applicationService/maps",
    "i": "Naver Maps.svg"
  },
  "Naver RUA": {
    "d": "Naver RUA (Real User Analytics) collects performance data from real users to analyze the speed of your website by country, operating system, and browser.",
    "w": "https://analytics.naver.com",
    "i": "Naver.svg"
  },
  "Neat A/B testing": {
    "d": "Neat A/B Testing is a Shopify app built by NeatShift.",
    "w": "https://neatab.com",
    "i": "Neat.png"
  },
  "Neon CRM": {
    "d": "Neon CRM, a Neon One company, is a cloud-based customer relationship management (CRM) software suite for nonprofits of all sizes. Applications include fundraising management, donor management, membership management, event registration and management, customised reporting, and more.",
    "w": "https://neonone.com",
    "i": "Neon One.svg"
  },
  "Neos CMS": {
    "w": "https://neos.io",
    "i": "Neos.svg"
  },
  "Neos Flow": {
    "w": "https://flow.neos.io",
    "i": "Neos.svg"
  },
  "Nepso": {
    "w": "https://www.nepso.com",
    "i": "nepso.svg"
  },
  "Nestify": {
    "d": "Nestify is a fully managed WordPress hosting platform that runs on AWS graviton processors.",
    "w": "https://nestify.io",
    "i": "Nestify.png"
  },
  "NetSuite": {
    "w": "http://netsuite.com",
    "i": "NetSuite.png"
  },
  "Netcore Cloud": {
    "d": "Netcore Cloud is a globally recognised marketing technology SaaS company.",
    "w": "https://netcorecloud.com",
    "i": "Netcore Cloud.svg"
  },
  "Netlify": {
    "d": "Netlify providers hosting and server-less backend services for web applications and static websites.",
    "w": "https://www.netlify.com/",
    "i": "Netlify.svg"
  },
  "Neto": {
    "d": "Neto is the only Australian B2B and multi-channel ecommerce platform that provides an all-in-one solution for ecommerce, POS, inventory management, order management, and shipping labelling.",
    "w": "https://www.neto.com.au",
    "i": "Neto.svg"
  },
  "Nette Framework": {
    "w": "https://nette.org",
    "i": "Nette Framework.png"
  },
  "Network for Good": {
    "d": "Network for Good is an American certified B Corporation software company that offers fundraising software and coaching for charities and non-profit organisations.",
    "w": "https://www.networkforgood.com",
    "i": "Network for Good.svg"
  },
  "Neve": {
    "d": "Neve is a super-fast, easily customizable, multi-purpose theme that works perfectly with Gutenberg and the most popular page builders as well as WooCommerce",
    "w": "https://themeisle.com/themes/neve/",
    "i": "ThemeIsle.png"
  },
  "New Relic": {
    "d": "New Relic is a SaaS offering that focuses on performance and availability monitoring.",
    "w": "https://newrelic.com",
    "i": "New Relic.svg"
  },
  "NewStore": {
    "d": "NewStore is the only integrated platform offering omnichannel solutions for stores and consumers.",
    "w": "https://www.newstore.com",
    "i": "NewStore.png"
  },
  "Newspack": {
    "d": "Newspack is an open-source publishing platform built on WordPress for small to medium sized news organizations. It is an “opinionated” platform that stakes out clear, best-practice positions on technology, design, and business practice for news publishers.",
    "w": "https://github.com/Automattic/newspack-plugin",
    "i": "NewspackLogo.png"
  },
  "Newspack by Automattic": {
    "d": "Automattic's Newspack service is an all-in-one platform designed for small and medium-sized news organizations that simplifies publishing and drives audience and revenue right out of the box.",
    "w": "https://newspack.pub/",
    "i": "NewspackLogo.png"
  },
  "Nexcess": {
    "d": "Nexcess is a web hosting service.",
    "w": "https://www.nexcess.net",
    "i": "nexcess.png"
  },
  "Nexive": {
    "d": "Nexive is a postal operator in Italy.",
    "w": "https://www.nexive.it",
    "i": "Nexive.svg"
  },
  "Next Total": {
    "d": "Next is leveraging the expertise, infrastructure and software it has developed for its own online business to provide a third-party ecommerce outsourcing service named Total Platform.",
    "w": "https://www.next.co.uk",
    "i": "Next Total.svg"
  },
  "Next.js": {
    "d": "Next.js is a React framework for developing single page Javascript applications.",
    "w": "https://nextjs.org",
    "i": "Next.js.svg"
  },
  "NextAuth.js": {
    "d": "NextAuth.js is a complete open-source authentication solution for Next.js applications.",
    "w": "https://next-auth.js.org",
    "i": "Next-Auth.png"
  },
  "NextGEN Gallery": {
    "d": "NextGEN Gallery is a free open-source image management plugin for the WordPress content management system.",
    "w": "https://www.imagely.com/wordpress-gallery-plugin",
    "i": "NextGEN Gallery.png"
  },
  "NextUI": {
    "d": "NextUI allows you to make beautiful, modern, and fast websites/applications regardless of your design experience, created with React.js and Stitches, based on React Aria and inspired by Vuesax.",
    "w": "https://nextui.org/",
    "i": "NextUI.svg"
  },
  "Nextcloud": {
    "d": "Nextcloud is a suite of client-server software for creating and using file hosting services.",
    "w": "https://nextcloud.com",
    "i": "Nextcloud.svg"
  },
  "Nextdoor Ads": {
    "d": "Nextdoor Ads is an easy-to-use expansion of Nextdoor’s proprietary self-serve campaign management platform, designed to help small and medium-sized businesses (SMBs) advertise on Nextdoor.",
    "w": "https://help.nextdoor.com/s/article/About-Neighborhood-Ad-Center-NAC-Conversion-Pixel",
    "i": "Nextdoor Ads.png"
  },
  "Nextra": {
    "d": "Nextra is Next.js based static site generator.",
    "w": "https://nextra.site/",
    "i": "Nextra.svg"
  },
  "Nextsale": {
    "d": "Nextsale is a conversion optimisation platform that provides social proof and urgency tools for ecommerce websites.",
    "w": "https://nextsale.io",
    "i": "Nextsale.svg"
  },
  "NexusPIPE": {
    "d": "NexusPIPE is a ADC and DDoS mitigation Company.",
    "w": "https://nexuspipe.com",
    "i": "NexusPIPE.png"
  },
  "Nginx": {
    "d": "Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",
    "w": "http://nginx.org/en",
    "i": "Nginx.svg"
  },
  "Niagahoster": {
    "d": "Niagahoster is a web hosting service for small and medium enterprises. It provides shared hosting, WordPress hosting, Virtual Private Server (VPS), and more.",
    "w": "https://niagahoster.co.id",
    "i": "Niagahoster.svg"
  },
  "Nicepage": {
    "d": "Nicepage is a free website building tool that requires no coding skills and integrates seamlessly with all leading CMS systems.",
    "w": "https://nicepage.com",
    "i": "Nicepage.png"
  },
  "Nift": {
    "d": "Nift is a marketing program for pools of local businesses. Businesses give Nift gift cards to thank and reward their customers for taking actions, like signing up for a newsletter, referring a friend, or making a purchase.",
    "w": "https://www.gonift.com",
    "i": "Nift.png"
  },
  "Ninja Forms": {
    "d": "Ninja Forms is the WordPress form builder.",
    "w": "https://ninjaforms.com",
    "i": "Ninja Forms.svg"
  },
  "NitroPack": {
    "d": "NitroPack creates optimised HTML cache for fast page loading experience.",
    "w": "https://nitropack.io/",
    "i": "NitroPack.svg"
  },
  "NoFraud": {
    "d": "NoFraud is a fraud prevention solution for ecommerce businesses.",
    "w": "https://www.nofraud.com",
    "i": "NoFraud.svg"
  },
  "Noddus": {
    "d": "Noddus offers brands and agencies access to an advanced proprietary content marketing platform automating content production, distribution and analytics.",
    "w": "https://www.enterprise.noddus.com",
    "i": "Noddus.png"
  },
  "Node.js": {
    "d": "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.",
    "w": "http://nodejs.org",
    "i": "Node.js.svg"
  },
  "NodeBB": {
    "d": "NodeBB forum software is powered by Node.js and built on either a Redis or MongoDB database.",
    "w": "https://nodebb.org",
    "i": "NodeBB.svg"
  },
  "NodePing": {
    "d": "NodePing is a tool in the Website Monitoring category of a tech stack. NodePing is an open source tool with GitHub stars and GitHub forks.",
    "w": "https://nodeping.com",
    "i": "NodePing.svg"
  },
  "Noibu": {
    "d": "Noibu helps ecommerce websites detect revenue-impacting errors on their websites and provides them with the information needed to resolve them.",
    "w": "https://noibu.com",
    "i": "noibu.svg"
  },
  "Norton Shopping Guarantee": {
    "d": "Norton Shopping Guarantee offering a third-party shopping guarantee to customers provides added protection and validation that you are safe to buy from.",
    "w": "https://norton.buysafe.com",
    "i": "Norton Shopping Guarantee.svg"
  },
  "Nosto": {
    "d": "Nosto is an ecommerce platform providing product recommendations based on individual behavioral data.",
    "w": "https://www.nosto.com",
    "i": "Nosto.svg"
  },
  "Nosto Visual UGC": {
    "d": "Nosto Visual UGC (Earlier known as Stackla) is a cloud-based content marketing platform that helps discover, curate, display and engage with user-generated content across all digital marketing platforms.",
    "w": "https://www.nosto.com/products/visual-ugc/",
    "i": "Nosto.svg"
  },
  "Notion": {
    "d": "Notion is a collaboration platform with modified Markdown support that integrates kanban boards, tasks, wikis, and database.",
    "w": "https://notion.so",
    "i": "Notion.svg"
  },
  "Nudgify": {
    "d": "Nudgify is a Social Proof & Fomo App tool that integrates seamlessly with ecommerce platform such as Shopify, WooCommerce and Magento.",
    "w": "https://www.nudgify.com",
    "i": "Nudgify.svg"
  },
  "Nukeviet CMS": {
    "d": "NukeViet CMS is a Vietnamese content management system.",
    "w": "https://nukeviet.vn/en/",
    "i": "Nukeviet CMS.png"
  },
  "Nuqlium": {
    "d": "Nuqlium is an integrated cloud-based online merchandising platform.",
    "w": "https://www.nuqlium.com",
    "i": "Nuqlium.png"
  },
  "Nuvemshop": {
    "d": "Nuvemshop is a website builder with customizable layouts, product, shipping and payment management, marketing tools and a mobile app.",
    "w": "https://www.nuvemshop.com.br",
    "i": "Nuvemshop.svg"
  },
  "Nuxt.js": {
    "d": "Nuxt is a Vue framework for developing modern web applications.",
    "w": "https://nuxtjs.org",
    "i": "Nuxt.js.svg"
  },
  "nghttpx - HTTP/2 proxy": {
    "w": "https://nghttp2.org"
  },
  "nopCommerce": {
    "d": "nopCommerce is an open-source ecommerce solution based on Microsoft's ASP​.NET Core framework and MS SQL Server 2012 (or higher) backend database.",
    "w": "http://www.nopcommerce.com",
    "i": "nopCommerce.png"
  },
  "nopStation": {
    "d": "nopStation is a one stop ecommerce solution with custom integrations and custom built plugins based on custom tailored requirements on top of nopCommerce.",
    "w": "http://www.nop-station.com",
    "i": "nopStation.png"
  },
  "novomind iSHOP": {
    "d": "novomind iSHOP can be introduced rapidly, is highly scalable, has open APIs headless ecommerce and GDPR-compliant in the novomind Cloud.",
    "w": "https://www.novomind.com/en/shopsystem/novomind-ishop-software",
    "i": "novomind.svg"
  },
  "OVHcloud": {
    "d": "OVHcloud is a global, cloud provider delivering hosted private cloud, public cloud, and dedicated server solutions.",
    "w": "https://www.ovhcloud.com",
    "i": "OVHcloud.svg"
  },
  "OWL Carousel": {
    "d": "OWL Carousel is an enabled jQuery plugin that lets you create responsive carousel sliders.",
    "w": "https://owlcarousel2.github.io/OwlCarousel2/",
    "i": "OWL Carousel.png"
  },
  "OXID eShop": {
    "d": "OXID eShop is a free, open source ecommerce solution built using object oriented programming and PHP.",
    "w": "https://www.oxid-esales.com",
    "i": "OXID eShop.svg"
  },
  "OXID eShop Community Edition": {
    "d": "OXID eShop Community Edition is a free, open source ecommerce solution built using object oriented programming and PHP.",
    "w": "https://www.oxid-esales.com",
    "i": "OXID eShop.svg"
  },
  "OXID eShop Enterprise Edition": {
    "d": "OXID eShop Enterprise Edition is a B2B or B2C ecommerce solution built using object oriented programming and PHP.",
    "w": "https://www.oxid-esales.com",
    "i": "OXID eShop.svg"
  },
  "OXID eShop Professional Edition": {
    "d": "OXID eShop Professional Edition is an e-ommerce platform for both small start-up companies and experience online retailers with a wide range of functions, software maintenance and support.",
    "w": "https://exchange.oxid-esales.com/OXID-Products/OXID-eShop/OXID-eShop-Professional-Edition-6-Professional-Edition-6-Stable-PE-6-0-x.html",
    "i": "OXID eShop.svg"
  },
  "Obsidian Incentivize": {
    "d": "Obsidian Incentivize is designed to increase your average order size through in-cart upsells, cross sells and personalised product recommendations.",
    "w": "https://obsidianapps.co",
    "i": "Obsidian.png"
  },
  "Obsidian Publish": {
    "d": "Obsidian Publish is an official, paid plugin for Obsidian that allows users to post selected notes to a directory on the publish.obsidian.md domain.",
    "w": "https://obsidian.md/publish",
    "i": "Obsidian Publish.svg"
  },
  "Obviyo": {
    "d": "Obviyo is an ecommerce intelligence platform helping merchants personalise and optimise shopping experience.",
    "w": "https://www.obviyo.com",
    "i": "Obviyo.png"
  },
  "Occasion": {
    "d": "Occasion is an online booking system.",
    "w": "https://www.getoccasion.com",
    "i": "Occasion.png"
  },
  "OceanWP": {
    "d": "OceanWP is a fast-loading WordPress theme that has great support for third-party plugins and drag-and-drop page builders.",
    "w": "https://oceanwp.org",
    "i": "OceanWP.png"
  },
  "Ochanoko": {
    "d": "Ochanoko is a ecommerce online shopping cart solutions, ecommerce web site hosting.",
    "w": "https://www.ocnk.com",
    "i": "Ochanoko.svg"
  },
  "Oct8ne": {
    "d": "Oct8ne is a visual customer service software.",
    "w": "https://oct8ne.com",
    "i": "Oct8ne.png"
  },
  "Octane AI": {
    "d": "Octane AI provides an all-in-one platform for engaging quizzes, data collection, and personalised Facebook Messenger and SMS automation.",
    "w": "https://www.octaneai.com",
    "i": "Octane AI.svg"
  },
  "October CMS": {
    "d": "October is a free, open-source, self-hosted CMS platform based on the Laravel PHP Framework.",
    "w": "http://octobercms.com",
    "i": "October CMS.png"
  },
  "Octopress": {
    "d": "Octopress is a static blogging framework.",
    "w": "http://octopress.org",
    "i": "octopress.png"
  },
  "Ocuco FitMix": {
    "d": "Ocuco is now offering its customers FittingBox's FitMix, a virtual frame try-on tool.",
    "w": "https://www.ocuco.com/fitmix",
    "i": "Ocuco.png"
  },
  "Odoo": {
    "d": "Odoo is business management software which includes CRM, ecommerce, billing, accounting, manufacturing, warehouse, project management, and inventory management.",
    "w": "http://odoo.com",
    "i": "Odoo.png"
  },
  "Oh Dear": {
    "d": "The all-in-one monitoring tool for your entire website. Oh Dear monitors uptime, SSL certificates, broken links, scheduled tasks, application health, DNS, domain expiry and more.",
    "w": "https://ohdear.app",
    "i": "Oh Dear.svg"
  },
  "Okendo": {
    "d": "Okendo is a customer marketing platform with product ratings and reviews, customer photos and videos to help personalise experiences.",
    "w": "https://www.okendo.io",
    "i": "Okendo.svg"
  },
  "Okta": {
    "d": "Okta is a platform in the Identity-as-a-Service (IDaaS) category. Okta features include Provisioning, Single Sign-On (SSO), Active Directory (AD) and LDAP integration, the centralized de-provisioning of users, multi-factor authentication (MFA), mobile identity management.",
    "w": "https://developer.okta.com",
    "i": "Okta.svg"
  },
  "Olapic": {
    "d": "Olapic is a content marketing tool specifically focused on visual marketing content.",
    "w": "https://www.olapic.com",
    "i": "Olapic.svg"
  },
  "Olark": {
    "d": "Olark is a cloud-based live chat solution.",
    "w": "https://www.olark.com/",
    "i": "Olark.png"
  },
  "Omeka": {
    "d": "Omeka is a free Content Management System (CMS) used by archives, historical societies, libraries, museums, and individual researchers for publishing digital collections.",
    "w": "https://omeka.org",
    "i": "Omeka.png"
  },
  "Ometria": {
    "d": "Ometria is a customer insight and marketing automation platform.",
    "w": "https://ometria.com",
    "i": "Ometria.svg"
  },
  "Omise": {
    "d": "Omise is a payment gateway for Thailand, Japan and Singapore. Providing both online and offline payment solutions to merchants.",
    "w": "https://www.omise.co",
    "i": "Omise.svg"
  },
  "Omni CMS": {
    "d": "Omni CMS (formerly OU Campus) is a web content management system developed by Modern Campus. Modern Campus is a SaaS-based student lifecycle management software designed to manage continuing education and non-degree programs.",
    "w": "https://moderncampus.com/products/web-content-management.html",
    "i": "Modern Campus.png"
  },
  "Omniconvert": {
    "d": "Omniconvert is an award-winning conversion rate optimisation (CRO) software that can be used for A/B testing, online surveys, traffic segmentation.",
    "w": "https://www.omniconvert.com",
    "i": "Omniconvert.png"
  },
  "Omnisend": {
    "d": "Omnisend is an ecommerce marketing automation platform that provides an omnichannel marketing strategy for businesses.",
    "w": "https://www.omnisend.com",
    "i": "Omnisend.svg"
  },
  "Omnisend Email Marketing & SMS": {
    "d": "Omnisend Email Marketing & SMS is an omnichannel marketing automation channel that allows Shopify store owners to manage their SMS, web push notifications, WhatsApp, Facebook messenger, pop-ups, segmentation, and dynamic Facebook and Google ad integrations.",
    "w": "https://apps.shopify.com/omnisend",
    "i": "Omnisend.svg"
  },
  "Omny Studio": {
    "d": "Omny Studio is a podcast hosting solution, which enables radio stations and enterprises to manage, monetize, publish, share, edit and analyze audio episodes.",
    "w": "https://omnystudio.com",
    "i": "Omny Studio.svg"
  },
  "Omurga Sistemi": {
    "w": "https://www.os.com.tr",
    "i": "Omurga Sistemi.svg"
  },
  "OnShop": {
    "d": "OnShop is an ecommerce platform for online merchants.",
    "w": "https://onshop.asia",
    "i": "Onshop.svg"
  },
  "OnUniverse": {
    "d": "OnUniverse is the first website builder and commerce platform built for mobile devices.",
    "w": "https://onuniverse.com",
    "i": "OnUniverse.png"
  },
  "One.com": {
    "d": "One.com is a Denmark-based company offering bargain-priced WordPress and shared web hosting plans.",
    "w": "https://www.one.com",
    "i": "One.com.svg"
  },
  "OneAPM": {
    "w": "http://www.oneapm.com",
    "i": "OneAPM.png"
  },
  "OneAll": {
    "d": "OneAll is a social login solution enables your users to sign into their accounts on your website or mobile app using their login details from networking sites.",
    "w": "https://www.oneall.com",
    "i": "OneAll.png"
  },
  "OneCause": {
    "d": "OneCause is a fundraising platform designed for nonprofits to manage all types of fundraising campaigns.",
    "w": "https://www.onecause.com",
    "i": "OneCause.svg"
  },
  "OnePage Express": {
    "d": "OnePage Express is a beautiful WordPress theme that can be used to create a one page website in minutes by drag and drop.",
    "w": "https://onepageexpress.com",
    "i": "ExtendThemes.svg"
  },
  "OnePress Social Locker": {
    "d": "Social Locker locks your most valuable site content behind a set of social buttons until the visitor likes, shares, +1s or tweets your page.",
    "w": "https://wordpress.org/plugins/social-locker",
    "i": "OnePress Social Locker.png"
  },
  "OneSignal": {
    "d": "OneSignal is a customer engagement messaging solution.",
    "w": "https://onesignal.com",
    "i": "OneSignal.svg"
  },
  "OneStat": {
    "w": "http://www.onestat.com",
    "i": "OneStat.png"
  },
  "OneTrust": {
    "d": "OneTrust is a cloud-based data privacy management compliance platform.",
    "w": "http://www.onetrust.com",
    "i": "OneTrust.svg"
  },
  "Oney": {
    "d": "Oney is an app that gives consumers back the power over their spending and makes split payments universal.",
    "w": "https://www.oney.com",
    "i": "Oney.svg"
  },
  "Onfido": {
    "d": "Onfido is a technology company that helps businesses verify people's identities using a photo-based identity document, a selfie and artificial intelligence algorithms.",
    "w": "https://onfido.com",
    "i": "Onfido.svg"
  },
  "Ookla Speedtest Custom": {
    "d": "Speedtest Custom is a robust and accurate testing solution that is HTML5-based, Flash-free and supports both mobile and desktop browsers built by Ookla.",
    "w": "https://www.ookla.com/speedtest-custom",
    "i": "Ookla.svg"
  },
  "Oopy": {
    "d": "Oopy provides you with a simple and easy way to turn your Notion page into a performant website.",
    "w": "https://oopy.us/",
    "i": "Oopy.png"
  },
  "Open AdStream": {
    "w": "https://www.xaxis.com",
    "i": "Open AdStream.svg"
  },
  "Open Classifieds": {
    "w": "http://open-classifieds.com",
    "i": "Open Classifieds.png"
  },
  "Open Graph": {
    "d": "Open Graph is a protocol that is used to integrate any web page into the social graph.",
    "w": "https://ogp.me",
    "i": "Open Graph.png"
  },
  "Open Journal Systems": {
    "d": "Open Journal Systems (OJS) is an open-source software application for managing and publishing scholarly journals.",
    "w": "http://pkp.sfu.ca/ojs",
    "i": "Open Journal Systems.png"
  },
  "Open Web Analytics": {
    "w": "http://www.openwebanalytics.com",
    "i": "Open Web Analytics.png"
  },
  "Open eShop": {
    "w": "http://open-eshop.com/",
    "i": "Open eShop.png"
  },
  "Open-Xchange App Suite": {
    "d": "Open-Xchange is a web-based communication, collaboration and office productivity software suite.",
    "w": "https://www.open-xchange.com/",
    "i": "openxchange.svg"
  },
  "OpenBSD httpd": {
    "w": "https://man.openbsd.org/httpd.8",
    "i": "OpenBSD httpd.svg"
  },
  "OpenCV": {
    "d": "OpenCV (Open Source Computer Vision Library) is an open source computer vision and machine learning software library.",
    "w": "https://opencv.org",
    "i": "OpenCV.svg"
  },
  "OpenCart": {
    "w": "http://www.opencart.com",
    "i": "OpenCart.png"
  },
  "OpenCities": {
    "d": "OpenCities is a content management system built for government organizations.",
    "w": "https://granicus.com/solution/govaccess/opencities/",
    "i": "granicus.svg"
  },
  "OpenCms": {
    "w": "http://www.opencms.org",
    "i": "OpenCms.png"
  },
  "OpenElement": {
    "d": "OpenElement is a free website building application with a WYSIWYG interface.",
    "w": "http://openelement.uk",
    "i": "OpenElement.png"
  },
  "OpenGSE": {
    "d": "OpenGSE is a test suite used for testing servlet compliance. It is deployed by using WAR files that are deployed on the server engine.",
    "w": "http://code.google.com/p/opengse",
    "i": "Google.svg"
  },
  "OpenGrok": {
    "w": "http://hub.opensolaris.org/bin/view/Project+opengrok/WebHome",
    "i": "OpenGrok.png"
  },
  "OpenLayers": {
    "d": "OpenLayers is an open-source JavaScript library for displaying map data in web browser.",
    "w": "https://openlayers.org",
    "i": "OpenLayers.png"
  },
  "OpenNemas": {
    "w": "http://www.opennemas.com",
    "i": "OpenNemas.png"
  },
  "OpenPay": {
    "d": "Openpay is an innovative online and in-store payment solution enabling you to purchase now and pay later, with no interest.",
    "w": "https://www.openpay.com.au/",
    "i": "openpay.png"
  },
  "OpenResty": {
    "d": "OpenResty is a web platform based on nginx which can run Lua scripts using its LuaJIT engine.",
    "w": "http://openresty.org",
    "i": "OpenResty.svg"
  },
  "OpenSSL": {
    "d": "OpenSSL is a software library for applications that secure communications over computer networks against eavesdropping or need to identify the party at the other end.",
    "w": "http://openssl.org",
    "i": "OpenSSL.png"
  },
  "OpenStreetMap": {
    "d": "OpenStreetMap is a free, editable map of the whole world that is being built by volunteers largely from scratch and released with an open-content license.",
    "w": "https://www.openstreetmap.org",
    "i": "OpenStreetMap.svg"
  },
  "OpenTable": {
    "d": "OpenTable is an online restaurant-reservation service company founded by Sid Gorham, Eric Moe and Chuck Templeton on 2 July 1998 and is based in San Francisco, California.",
    "w": "https://restaurant.opentable.com",
    "i": "OpenTable.svg"
  },
  "OpenText Web Solutions": {
    "w": "http://websolutions.opentext.com",
    "i": "OpenText Web Solutions.png"
  },
  "OpenUI5": {
    "w": "http://openui5.org/",
    "i": "OpenUI5.png"
  },
  "OpenWeb": {
    "d": "OpenWeb is a social engagement platform that builds online communities around digital content.",
    "w": "https://www.openweb.com",
    "i": "OpenWeb.svg"
  },
  "OpenX": {
    "d": "OpenX is a programmatic advertising technology company.",
    "w": "http://openx.com",
    "i": "OpenX.png"
  },
  "OperateBeyond": {
    "d": "OperateBeyond is a software development company that offers website design, automated inventory management, CRM, dealer websites, and DMS.",
    "w": "https://operatebeyond.com/dealer-websites-marketing",
    "i": "OperateBeyond.png"
  },
  "OpinionLab": {
    "d": "OpinionLab is a omnichannel customer feedback solution provider.",
    "w": "https://www.opinionlab.com",
    "i": "OpinionLab.png"
  },
  "OptiMonk": {
    "d": "OptiMonk is an on-site message toolkit used to improve conversions using action-based popups ad bars.",
    "w": "https://www.optimonk.com",
    "i": "OptiMonk.svg"
  },
  "Optimise": {
    "d": "Optimise Media Group is a UK-based performance advertising network.",
    "w": "https://www.optimisemedia.com",
    "i": "Optimise.svg"
  },
  "Optimizely": {
    "d": "Optimizely is an experimentation platform that helps developers build and run A/B tests on websites.",
    "w": "https://www.optimizely.com",
    "i": "Optimizely.svg"
  },
  "Optimizely Commerce": {
    "d": "Optimizely Commerce is a complete suite for digital ecommerce and content management that uses artificial intelligence to deliver personalised experiences, individualised search rankings and product recommendations.",
    "w": "https://www.optimizely.com/products/commerce/b2c/",
    "i": "Optimizely.svg"
  },
  "Optimizely Content Management": {
    "d": "Optimizely Content Management (formerly EPiServer) is digital content, ecommerce, and marketing management solution designed for editors and marketers.",
    "w": "https://www.optimizely.com/products/content/",
    "i": "Optimizely.svg"
  },
  "Optimove": {
    "d": "Optimove is a relationship marketing hub powered by a combination of advanced customer modeling, predictive micro-segmentation and campaign automation technologies.",
    "w": "https://www.optimove.com",
    "i": "Optimove.svg"
  },
  "OptinMonster": {
    "d": "OptinMonster is a conversion optimisation tool that allows you to grow your email list.",
    "w": "https://optinmonster.com",
    "i": "OptinMonster.png"
  },
  "OptinMonster plugin": {
    "d": "OptinMonster is a lead-generation plugin for WordPress.",
    "w": "https://optinmonster.com",
    "i": "OptinMonster.png"
  },
  "Oracle Application Express": {
    "d": "Oracle Application Express (APEX) is an enterprise low-code development platform from Oracle Corporation. APEX is a fully supported no-cost feature of Oracle Database.",
    "w": "https://apex.oracle.com",
    "i": "Oracle.svg"
  },
  "Oracle Application Server": {
    "w": "http://www.oracle.com/technetwork/middleware/ias/overview/index.html",
    "i": "Oracle.svg"
  },
  "Oracle BlueKai": {
    "d": "Oracle BlueKai is a cloud-based big data platform that enables companies to personalise online, offline, and mobile marketing campaigns.",
    "w": "https://www.oracle.com/cx/marketing/data-management-platform",
    "i": "Oracle.svg"
  },
  "Oracle Commerce": {
    "d": "Oracle Commerce is a unified B2B and B2C ecommerce platform.",
    "w": "http://www.oracle.com/applications/customer-experience/commerce/products/commerce-platform/index.html",
    "i": "Oracle.svg"
  },
  "Oracle Commerce Cloud": {
    "d": "Oracle Commerce Cloud is a cloud-native, fully featured, extensible SaaS ecommerce solution, delivered in the Oracle Cloud, supporting B2C and B2B models in a single platform.",
    "w": "http://cloud.oracle.com/commerce-cloud",
    "i": "Oracle.svg"
  },
  "Oracle Dynamic Monitoring Service": {
    "w": "http://oracle.com",
    "i": "Oracle.svg"
  },
  "Oracle HTTP Server": {
    "w": "http://oracle.com",
    "i": "Oracle.svg"
  },
  "Oracle Infinity": {
    "d": "Oracle Infinity is a digital analytics platform for tracking, measuring, and optimizing the performance and visitor behavior of enterprise websites and mobile apps.",
    "w": "https://www.oracle.com/cx/marketing/digital-intelligence/",
    "i": "Oracle.svg"
  },
  "Oracle Maxymiser": {
    "d": "Oracle Maxymiser is a real-time behavioral targeting, in-session personalisation, and product recommendations platform.",
    "w": "https://www.oracle.com/uk/cx/marketing/personalization-testing",
    "i": "Oracle.svg"
  },
  "Oracle Recommendations On Demand": {
    "w": "http://www.oracle.com/us/products/applications/commerce/recommendations-on-demand/index.html",
    "i": "Oracle.svg"
  },
  "Oracle Web Cache": {
    "d": "Oracle Web Cache is a browser and content management server, which improves the performance of web sites.",
    "w": "http://oracle.com",
    "i": "Oracle.svg"
  },
  "Orankl": {
    "d": "Orankl is a provider email marketing and review services.",
    "w": "https://www.orankl.com",
    "i": "Orankl.png"
  },
  "OrbitFox": {
    "d": "OrbitFox is a multi-featured WordPress plugin that works with the Elementor, Beaver Builder and Gutenberg site-building utilities by Themeisle.",
    "w": "https://themeisle.com/plugins/orbit-fox-companion",
    "i": "OrbitFox.svg"
  },
  "Orchard Core": {
    "d": "Orchard Core is an open-source modular and multi-tenant application framework built with ASP.NET Core, and a content management system (CMS).",
    "w": "https://orchardcore.net",
    "i": "Orchard Core.png"
  },
  "Orckestra": {
    "d": "Orckestra is a provider of cloud-based digital unified and omnichannel commerce solutions for retail and manufacturing industries.",
    "w": "https://www.orckestra.com",
    "i": "Orckestra.svg"
  },
  "Order Deadline": {
    "d": "Order Deadline is an estimated delivery, countdown timer, shipping date Shopify app.",
    "w": "https://apps.shopify.com/order-deadline",
    "i": "Order Deadline.png"
  },
  "OrderLogic app": {
    "d": "OrderLogic app allows you to define minimum and maximum product quantities for all products in your Shopify store.",
    "w": "https://apps.shopify.com/orderlogic",
    "i": "OrderLogic app.png"
  },
  "OrderYOYO": {
    "d": "OrderYOYO is an online ordering, payment, and marketing software solution provider.",
    "w": "https://orderyoyo.com",
    "i": "OrderYOYO.png"
  },
  "Ordergroove": {
    "d": "Ordergroove provides a SaaS (Software as a Service) based subscription and membership commerce platform.",
    "w": "https://www.ordergroove.com/",
    "i": "ordergroove.svg"
  },
  "Ordersify Product Alerts": {
    "d": "Ordersify Product Alerts is a Shopify app which detects automatically product stock and send email alerts to contact immediately after your products are restocked.",
    "w": "https://ordersify.com/products/product-alerts",
    "i": "Ordersify.svg"
  },
  "OroCommerce": {
    "w": "https://oroinc.com",
    "i": "orocommerce.svg"
  },
  "Osano": {
    "d": "Osano is a data privacy platform that helps your website become compliant with laws such as GDPR and CCPA.",
    "w": "https://www.osano.com",
    "i": "Osano.svg"
  },
  "Osterreichische Post": {
    "d": "Österreichische Post is an Austrian logistics and postal services provider.",
    "w": "https://www.post.at",
    "i": "Post AG.svg"
  },
  "OutSystems": {
    "d": "OutSystems is a low-code platform which provides tools for companies to develop, deploy and manage omnichannel enterprise applications.",
    "w": "https://www.outsystems.com",
    "i": "OutSystems.svg"
  },
  "OutTheBoxThemes Panoramic": {
    "d": "Panoramic is a fully responsive WordPress theme with a homepage slider by OutTheBoxThemes.",
    "w": "https://www.outtheboxthemes.com/wordpress-themes/panoramic",
    "i": "OutTheBoxThemes.png"
  },
  "Outbrain": {
    "d": "Outbrain is a web advertising platform that displays boxes of links, known as chumboxes, to pages within websites.",
    "w": "https://www.outbrain.com",
    "i": "Outbrain.svg"
  },
  "Outlook Web App": {
    "d": "Outlook on the web is an information manager web app. It includes a web-based email client, a calendar tool, a contact manager, and a task manager.",
    "w": "http://help.outlook.com",
    "i": "Outlook.svg"
  },
  "Oxatis": {
    "d": "Oxatis is a cloud-based ecommerce solution which enables users to create and manage their own online store websites.",
    "w": "https://www.oxatis.com/",
    "i": "Oxatis.svg"
  },
  "Oxi Social Login": {
    "d": "Oxi Social Login provides one click login with services like Facebook, Google and many more.",
    "w": "https://www.oxiapps.com/",
    "i": "OxiSocialLogin.png"
  },
  "Oxygen": {
    "d": "Oxygen Builder is a tool to build a WordPress website.",
    "w": "https://oxygenbuilder.com",
    "i": "Oxygen.png"
  },
  "ocStore": {
    "d": "ocStore is an online store based on Opencart and open-source.",
    "w": "https://ocstore.com",
    "i": "ocStore.png"
  },
  "onpublix": {
    "d": "onpublix is a web content management system (CMS) platform for eBusinesses.",
    "w": "https://www.onpublix.de",
    "i": "onpublix.svg"
  },
  "osCommerce": {
    "d": "OsCommerce is an open-source ecommerce and online store-management software program​.",
    "w": "https://www.oscommerce.com",
    "i": "osCommerce.png"
  },
  "osTicket": {
    "w": "http://osticket.com",
    "i": "osTicket.png"
  },
  "otrs": {
    "w": "https://www.otrs.com",
    "i": "otrs.png"
  },
  "ownCloud": {
    "w": "https://owncloud.org",
    "i": "ownCloud.png"
  },
  "PCRecruiter": {
    "d": "PCRecruiter is an ATS/CRM hybrid SaaS solution for recruiting and sourcing professionals.",
    "w": "https://www.pcrecruiter.net",
    "i": "PCRecruiter.png"
  },
  "PDF.js": {
    "w": "https://mozilla.github.io/pdf.js/",
    "i": "PDF.js.svg"
  },
  "PHP": {
    "d": "PHP is a general-purpose scripting language used for web development.",
    "w": "http://php.net",
    "i": "PHP.svg"
  },
  "PHP-Nuke": {
    "w": "http://phpnuke.org",
    "i": "PHP-Nuke.png"
  },
  "PHPDebugBar": {
    "w": "http://phpdebugbar.com/",
    "i": "phpdebugbar.png"
  },
  "PHPFusion": {
    "w": "https://phpfusion.com",
    "i": "PHPFusion.png"
  },
  "PIXIjs": {
    "d": "PIXIjs is a free open-source 2D engine used to make animated websites and HTML5 games.",
    "w": "https://www.pixijs.com",
    "i": "PIXIjs.svg"
  },
  "POLi Payment": {
    "d": "POLi Payment(formerly known as Centricom) is an online payment service in Australia and New Zealand.",
    "w": "https://www.polipayments.com",
    "i": "POLi Payment.svg"
  },
  "POWR": {
    "d": "POWR is a cloud-based system of plugins that work on almost any website.",
    "w": "https://www.powr.io",
    "i": "POWR.svg"
  },
  "PWA": {
    "d": "Progressive Web Apps (PWAs) are web apps built and enhanced with modern APIs to deliver enhanced capabilities, reliability, and installability while reaching anyone, anywhere, on any device, all with a single codebase.",
    "w": "https://web.dev/progressive-web-apps/",
    "i": "PWA.svg"
  },
  "PWA Studio": {
    "d": "PWA Studio is a collection of tools that lets developers build complex Progressive Web Applications on top of Magento 2 or Adobe Commerce stores.",
    "w": "https://developer.adobe.com/commerce/pwa-studio/",
    "i": "PWA Studio.png"
  },
  "Pace": {
    "d": "PacePay offers a BNPL (Buy now pay later) solution for merchants.",
    "w": "https://pacenow.co/",
    "i": "Pace.svg"
  },
  "Packlink PRO": {
    "d": "Packlink PRO is a multicarrier shipping solutions for ecommerce and marketplaces.",
    "w": "https://apps.shopify.com/packlink-pro",
    "i": "Packlink.png"
  },
  "Paddle": {
    "d": "Paddle is a billing and payment gateway for B2B SaaS companies.",
    "w": "https://paddle.com/",
    "i": "Paddle.svg"
  },
  "PagSeguro": {
    "d": "PagSeguro is an online or mobile payment-based ecommerce service for commercial operations.",
    "w": "https://pagseguro.uol.com.br",
    "i": "PagSeguro.svg"
  },
  "Pagar.me": {
    "d": "Pagar.me is a Portuguese-language online payments solution for businesses in Brazil.",
    "w": "https://pagar.me",
    "i": "Pagar.me.svg"
  },
  "Page Builder Framework": {
    "d": "Page Builder Framework is a lightweight (less than 50kb on the frontend) and highly customizible WordPress theme.",
    "w": "https://wp-pagebuilderframework.com",
    "i": "Page Builder Framework.png"
  },
  "PageFly": {
    "d": "PageFly is an app for Shopify that allows you to build landing pages, product pages, blogs, and FAQs.",
    "w": "https://pagefly.io",
    "i": "pagefly.png"
  },
  "Pagekit": {
    "w": "http://pagekit.com",
    "i": "Pagekit.png"
  },
  "Pagely": {
    "w": "https://pagely.com/",
    "i": "pagely.svg"
  },
  "Pagevamp": {
    "w": "https://www.pagevamp.com",
    "i": "Pagevamp.png"
  },
  "Paidy": {
    "d": "Paidy is basically a two-sided payments service, acting as a middleman between consumers and merchants in Japan.",
    "w": "https://paidy.com",
    "i": "Paidy.png"
  },
  "Paloma": {
    "d": "Paloma helps ecommerce businesses sell directly to customers in messaging channels, with automated personal shopping conversations.",
    "w": "https://www.getpaloma.com",
    "i": "Paloma.svg"
  },
  "Panelbear": {
    "d": "Panelbear is a simple website performance and traffic analytics tool.",
    "w": "https://panelbear.com",
    "i": "Panelbear.svg"
  },
  "Pantheon": {
    "d": "Pantheon is a WebOps (Website Operations) and Management Platform for WordPress and Drupal.",
    "w": "https://pantheon.io/",
    "i": "Pantheon.svg"
  },
  "Paradox": {
    "d": "Paradox is an AI company that helps companies capture and screen candidates, improve conversions, and answer all candidate questions.",
    "w": "https://www.paradox.ai",
    "i": "Paradox.svg"
  },
  "Parcelforce": {
    "d": "Parcelforce is a courier and logistics service in the United Kingdom.",
    "w": "https://www.parcelforce.com",
    "i": "Parcelforce.svg"
  },
  "ParkingCrew": {
    "d": "ParkingCrew is a direct navigation monetisation provider.",
    "w": "https://www.parkingcrew.com",
    "i": "ParkingCrew.png"
  },
  "Parmin Cloud": {
    "d": "Parmin Cloud operates in the field of cloud services.",
    "w": "https://parmin.cloud",
    "i": "Parmin Cloud.svg"
  },
  "Pars Elecom Portal": {
    "w": "http://parselecom.net",
    "i": "parselecom.png"
  },
  "Parse.ly": {
    "w": "https://www.parse.ly",
    "i": "Parse.ly.svg"
  },
  "Partial.ly": {
    "d": "Partial.ly payment plan software lets businesses offer customizable payment plans to their customers.",
    "w": "https://partial.ly/",
    "i": "Partially.png"
  },
  "Partnerize": {
    "d": "Partnerize is the only partnership management solution for marketers seeking high quality, scalable subsidies to primary channels.",
    "w": "https://prf.hn",
    "i": "Partnerize.png"
  },
  "Parttrap ONE": {
    "d": "Parttrap ONE is a complete solution including PIM, CMS, business optimization and ERP integration.",
    "w": "https://www.parttrap.com",
    "i": "Parttrap.png"
  },
  "Partytown": {
    "d": "Partytown is a lazy-loaded library to help relocate resource intensive scripts into a web worker, and off of the main thread.",
    "w": "https://partytown.builder.io/",
    "i": "Partytown.svg"
  },
  "Paths.js": {
    "w": "https://github.com/andreaferretti/paths-js"
  },
  "Patreon": {
    "d": "Patreon is an American membership platform that provides business tools for content creators to run a subscription service.",
    "w": "https://www.patreon.com",
    "i": "Patreon.svg"
  },
  "Pattern by Etsy": {
    "d": "Pattern is an offering by Etsy to set up a website for Etsy sellers, in addition to Etsy shop.",
    "w": "https://www.etsy.com/pattern",
    "i": "Etsy.svg"
  },
  "Pay It Later": {
    "d": "Pay It Later collect payments in weekly instalments from you when you make a purchase online, so you can buy now and pay it later.",
    "w": "https://www.payitlater.com.au",
    "i": "Pay It Later.png"
  },
  "PayBright": {
    "d": "PayBright is a Canadian fintech company that offers short-term interest-free installment loans for online shopping to consumers at checkout.",
    "w": "https://paybright.com",
    "i": "PayBright.png"
  },
  "PayFast": {
    "d": "PayFast is a payments processing service for South Africans & South African websites.",
    "w": "https://www.payfast.co.za/",
    "i": "Payfast.svg"
  },
  "PayJustNow": {
    "d": "PayJustNow is a buy now, pay later checkout option for ecommerce sites.",
    "w": "https://payjustnow.com",
    "i": "PayJustNow.svg"
  },
  "PayKickStart": {
    "d": "PayKickstart is an online shopping cart and affiliate management platform with built-in conversion enhancing features like one-click upsells for credit card/paypal, order bumps, custom checkout pages/widgets/embed forms, coupon management, auto-complete shipping fields, subscription saver sequences, and more.",
    "w": "https://paykickstart.com",
    "i": "PayKickStart.png"
  },
  "PayPal": {
    "d": "PayPal is an online payments system that supports online money transfers and serves as an electronic alternative to traditional paper methods like checks and money orders.",
    "w": "https://paypal.com",
    "i": "PayPal.svg"
  },
  "PayPal Credit": {
    "d": "PayPal Credit is a reusable line of credit that lets you pay for online purchases over time.",
    "w": "https://www.paypal.com/uk/webapps/mpp/paypal-virtual-credit",
    "i": "PayPal.svg"
  },
  "PayPal Marketing Solutions": {
    "d": "PayPal Marketing Solutions enables merchants to see shopper insights and provide custom rewards for buyers with PayPal accounts.",
    "w": "https://developer.paypal.com/docs/marketing-solutions",
    "i": "PayPal.svg"
  },
  "PayWhirl": {
    "d": "PayWhirl provides widgets and tools to handle recurring payments.",
    "w": "https://app.paywhirl.com/",
    "i": "paywhirl.png"
  },
  "Payflex": {
    "d": "Payflex offers an online payment gateway solution to South African merchants that allows shoppers to pay over 6 weeks, interest-free.",
    "w": "https://payflex.co.za/",
    "i": "Payflex.png"
  },
  "Payl8r": {
    "d": "PayL8r.com offers repayment plans and online finance which allow you to purchase products online.",
    "w": "https://payl8r.com/",
    "i": "Payl8r.svg"
  },
  "Paylocity": {
    "d": "Paylocity is an American company which provides cloud-based payroll and human capital management software.",
    "w": "https://www.paylocity.com",
    "i": "Paylocity.svg"
  },
  "Paysafe": {
    "d": "Paysafe is a payment platform that enables businesses and consumers to connect and transact by payment processing, digital wallet, and online cash solutions.",
    "w": "https://www.paysafe.com/en",
    "i": "paysafe.svg"
  },
  "PebblePost": {
    "d": "PebblePost provides marketers a way to transform recent online data into intelligent direct mail programs that perform.",
    "w": "https://www.pebblepost.com",
    "i": "PebblePost.svg"
  },
  "Peek": {
    "d": "Peek is a online booking system for tour and activity providers.",
    "w": "https://www.peek.com/",
    "i": "Peek.svg"
  },
  "PeerBoard": {
    "d": "PeerBoard is a plug-and-play community solution, which helps groups, clubs, startups, marketplaces and businesses create discussion forums.",
    "w": "https://peerboard.com",
    "i": "PeerBoard.png"
  },
  "PeerTube": {
    "d": "PeerTube is a free and open-source, decentralized, federated video platform powered by ActivityPub and WebTorrent.",
    "w": "https://joinpeertube.org/",
    "i": "PeerTube.svg"
  },
  "Pelican": {
    "w": "https://blog.getpelican.com/",
    "i": "pelican.png"
  },
  "PencilBlue": {
    "w": "https://github.com/pencilblue/pencilblue",
    "i": "PencilBlue.png"
  },
  "Pendo": {
    "d": "Pendo is a product analytics platform used in release to enrich the product experience and provide insights to the product management team.",
    "w": "https://www.pendo.io",
    "i": "Pendo.svg"
  },
  "Pepperjam": {
    "d": "Pepperjam is an affiliate marketing solutions provider.",
    "w": "https://www.pepperjam.com",
    "i": "Pepperjam.png"
  },
  "Percona": {
    "d": "Percona server is an opensource, fully compatible, enhanced drop-in replacement for MySQL, providing superior performance, scalability, and instrumentation.",
    "w": "https://www.percona.com",
    "i": "percona.svg"
  },
  "Percussion": {
    "w": "http://percussion.com",
    "i": "Percussion.png"
  },
  "PerfectApps Swift": {
    "d": "Swift is a page speed solution for ecommerce store owners built by PerfectApps.",
    "w": "https://apps.shopify.com/swift",
    "i": "PerfectApps Swift.png"
  },
  "Perfex CRM": {
    "d": "Perfex CRM is self hosted customer relationship management software that is a great fit for almost any company, freelancer or many other uses.",
    "w": "https://www.perfexcrm.com",
    "i": "Perfex CRM.png"
  },
  "Performance Lab": {
    "d": "Performance plugin from the WordPress Performance Group, which is a collection of standalone performance modules.",
    "w": "https://wordpress.org/plugins/performance-lab/",
    "i": "Performance Lab.svg"
  },
  "PerimeterX": {
    "d": "PerimeterX is a provider of scalable, behavior-based threat protection technology for the web, cloud, and mobile.",
    "w": "https://www.perimeterx.com",
    "i": "PerimeterX.svg"
  },
  "Periodic": {
    "d": "Periodic is a white-label scheduling system.",
    "w": "https://periodic.is",
    "i": "Periodic.svg"
  },
  "Perl": {
    "d": "Perl is a family of two high-level, general-purpose, interpreted, dynamic programming languages.",
    "w": "http://perl.org",
    "i": "Perl.png"
  },
  "Permutive": {
    "d": "Permutive is a publisher-focused data management platform.",
    "w": "https://permutive.com",
    "i": "Permutive.png"
  },
  "PersonaClick": {
    "d": "PersonaClick is a provide personalisation, recommandation and multi channel services.",
    "w": "https://www.personaclick.com",
    "i": "PersonaClick.png"
  },
  "Personio": {
    "d": "Personio is the all-in-one HR software for small- and medium-sized companies with 10 to 2000 employees.",
    "w": "https://www.personio.com",
    "i": "Personio.svg"
  },
  "Personizely": {
    "d": "Personizely is a conversion marketing toolkit which helps websites and ecommerce stores better engage with visitors using website widgets and personalisation.",
    "w": "https://www.personizely.net",
    "i": "Personizely.svg"
  },
  "Perzonalization": {
    "d": "Perzonalization is a AI powered personalization engine for eCommerce",
    "w": "https://www.perzonalization.com/",
    "i": "Perzonalization.png"
  },
  "Phabricator": {
    "d": "Phabricator is a suite of web-based software development collaboration tools, including the Differential code review tool, the Diffusion repository browser, the Herald change monitoring tool, the Maniphest bug tracker and the Phriction wiki. Phabricator integrates with Git, Mercurial, and Subversion.",
    "w": "http://phacility.com",
    "i": "Phabricator.png"
  },
  "Phaser": {
    "w": "https://phaser.io",
    "i": "Phaser.png"
  },
  "Phenomic": {
    "d": "Phenomic is a modular website compiler.",
    "w": "https://phenomic.io/",
    "i": "Phenomic.svg"
  },
  "Phlox": {
    "d": "Phlox is a modern, lightweight and customizable WordPress theme gratify for almost any type of website.",
    "w": "https://www.phlox.pro",
    "i": "Phlox.png"
  },
  "Phoenix": {
    "w": "https://github.com/Sazito/phoenix/",
    "i": "sazito-phoenix.png"
  },
  "Phoenix Site": {
    "d": "Phoenix Site software has been developed by the Internet Marketing Union and is especially intended for entrepreneurs (without technical knowledge) who want to score better in Google (SEO) and get more leads and customers (conversion) from their website.",
    "w": "https://phoenixsite.nl",
    "i": "Phoenix Site.png"
  },
  "Photo Gallery": {
    "d": "Photo Gallery plugin is a feature-rich, yet easy-to-use WordPress tool, which lets you add mobile-friendly image galleries and gallery groups to your website by 10Web.",
    "w": "https://10web.io/plugins/wordpress-photo-gallery",
    "i": "Photo Gallery.svg"
  },
  "PhotoShelter": {
    "d": "PhotoShelter is a cloud storage service that doubles as a website and ecommerce platform for photographers.",
    "w": "https://www.photoshelter.com",
    "i": "PhotoShelter.png"
  },
  "PhotoShelter for Brands": {
    "d": "PhotoShelter for Brands is a cloud-based media management system for companies and organizations.",
    "w": "https://brands.photoshelter.com",
    "i": "PhotoShelter.png"
  },
  "PhotoSwipe": {
    "d": "PhotoSwipe is an open-source gallery to support JavaScript-based image zooming.",
    "w": "https://photoswipe.com",
    "i": "PhotoSwipe.png"
  },
  "Photoslurp": {
    "d": "Photoslurp is a visual commerce platform that collects photos and videos of customers using your products from across social networks.",
    "w": "https://hi.photoslurp.com",
    "i": "Photoslurp.svg"
  },
  "Phusion Passenger": {
    "d": "Phusion Passenger is a free web server and application server with support for Ruby, Python and Node.js.",
    "w": "https://phusionpassenger.com",
    "i": "Phusion Passenger.png"
  },
  "Piano": {
    "d": "Piano is a enterprise SaaS company which specializing in advanced media business processes and ecommerce optimisation.",
    "w": "https://piano.io",
    "i": "Piano.png"
  },
  "PickyStory": {
    "d": "PickyStory is the ecommerce conversion platform.",
    "w": "https://pickystory.com",
    "i": "PickyStory.png"
  },
  "Pico": {
    "w": "https://trypico.com",
    "i": "pico.svg"
  },
  "Pico CSS": {
    "d": "Pico CSS is a minimal CSS framework for semantic HTML, without using classes.",
    "w": "https://picocss.com",
    "i": "Pico CSS.svg"
  },
  "Picreel": {
    "d": "Picreel is a conversion optimisation software.",
    "w": "https://www.picreel.com",
    "i": "Picreel.svg"
  },
  "Picturepark": {
    "d": "Picturepark is designed to facilitate your DAM policies by storing, tagging, searching and delivering files in an automated and controlled way.",
    "w": "https://picturepark.com",
    "i": "Picturepark.svg"
  },
  "Piman": {
    "d": "Piman is an open-source accessibility UI framework create by Blueplanet Inc.",
    "w": "https://ya-sai.github.io/piman/",
    "i": "Piman.svg"
  },
  "Pimcore": {
    "d": "Pimcore is an open-source digital platform that aggregates, enriches, and manages enterprise data and provides up-to-date, consistent, and personalised experiences to customers.",
    "w": "https://pimcore.com/en/digital-experience-platform",
    "i": "pimcore.svg"
  },
  "Pin Payments": {
    "d": "Pin Payments is an all-in-one online payment system. It offers merchants a simple JSON API, secure credit card storage, multi-currency capabilities, bank account compatibility, onsite payment processing and automatic fund transfer to specified bank accounts.",
    "w": "https://www.pinpayments.com/",
    "i": "pinpayments.png"
  },
  "Pingdom": {
    "d": "Pingdom is a Swedish website monitoring software as a service company.",
    "w": "https://www.pingdom.com",
    "i": "Pingdom.svg"
  },
  "Pingoteam": {
    "w": "https://www.pingoteam.ir/",
    "i": "Pingoteam.svg"
  },
  "PinnacleCart": {
    "d": "PinnacleCart is an ecommerce platform.",
    "w": "https://www.pinnaclecart.com",
    "i": "PinnacleCart.png"
  },
  "Pinterest": {
    "d": "Pinterest is an image sharing and social media service designed to enable saving and discovery of information.",
    "w": "http://pinterest.com",
    "i": "Pinterest.svg"
  },
  "Pinterest Ads": {
    "d": "Pinterest Ads is an online advertising platform developed by Pinterest.",
    "w": "https://ads.pinterest.com/",
    "i": "Pinterest.svg"
  },
  "Pinterest Conversion Tag": {
    "d": "Pinterest Conversion Tag allows you to track actions people take on your website after viewing your Promoted Pin.",
    "w": "https://www.pinterest.com.au/business/",
    "i": "Pinterest.svg"
  },
  "Pipedrive": {
    "d": "Pipedrive is a cloud-based sales CRM.",
    "w": "https://www.pipedrive.com/",
    "i": "Pipedrive.svg"
  },
  "Piwik PRO Core": {
    "d": "Piwik PRO Core is a free alternative to Google Analytics that is privacy & compliance focused.",
    "w": "https://piwik.pro",
    "i": "Piwik PRO Core.svg"
  },
  "Pixc": {
    "d": "Pixc is human powered image editing platform.",
    "w": "https://pixc.com",
    "i": "Pixc.svg"
  },
  "PixelFed": {
    "d": "PixelFed is an activitypub based image sharing platform.",
    "w": "https://pixelfed.org",
    "i": "PixelFed.svg"
  },
  "PixelYourSite": {
    "d": "PixelyourSite is now probably the most complex tracking tool for WordPress, managing the Facebook Pixel, Google Analytics, Google Ads Remarketing, Pinterest Tag, Bing Tag, and virtually any other script.",
    "w": "https://www.pixelyoursite.com",
    "i": "PixelYourSite.png"
  },
  "Pixieset Store": {
    "d": "Pixieset Store lets you sell professional print products, digital downloads, and other items directly from your galleries.",
    "w": "https://pixieset.com",
    "i": "Pixieset.svg"
  },
  "Pixieset Website": {
    "d": "Pixieset Website is a space to create your own beautiful photography website.",
    "w": "https://pixieset.com",
    "i": "Pixieset.svg"
  },
  "Pixlee TurnTo": {
    "d": "Pixlee TurnTo is a social UGC, ratings and reviews, and influencer marketing platform for community-driven brands.",
    "w": "https://pixlee.com",
    "i": "Pixelee TurnTo.png"
  },
  "Pixnet": {
    "d": "Pixnet is an Taiwanese mobile photo sharing, blogging, and social networking service.",
    "w": "https://www.pixnet.net",
    "i": "Pixnet.svg"
  },
  "PizzaNetz": {
    "d": "PizzaNetz is an ordering system and shop system for pizzerias, Chinese restaurant and kebabs.",
    "w": "https://www.pizzanetz.de",
    "i": "PizzaNetz.png"
  },
  "Plaid": {
    "d": "Plaid is a fintech company that facilitates communication between financial services apps and users' banks and credit card providers.",
    "w": "https://plaid.com",
    "i": "Plaid.svg"
  },
  "Planet": {
    "d": "Planet is a feed aggregator, which creates pages with entries from the original feeds in chronological order, most recent entries first.",
    "w": "http://planetplanet.org",
    "i": "Planet.png"
  },
  "Platform.sh": {
    "w": "https://platform.sh",
    "i": "platformsh.svg"
  },
  "PlatformOS": {
    "w": "https://www.platform-os.com",
    "i": "PlatformOS.svg"
  },
  "Plausible": {
    "d": "Plausible is an open-source alternative to Google Analytics.",
    "w": "https://plausible.io/",
    "i": "Plausible.svg"
  },
  "Play": {
    "w": "https://www.playframework.com",
    "i": "Play.svg"
  },
  "Plaza": {
    "d": "Plaza is a ecommerce platform that allows brands and retailers to communicate with customers via live video.",
    "w": "https://www.useplaza.com",
    "i": "Plaza.svg"
  },
  "Pleroma": {
    "d": "Pleroma is a free, federated social networking server built on open protocols.",
    "w": "https://pleroma.social/",
    "i": "Pleroma.svg"
  },
  "Plesk": {
    "d": "Plesk is a web hosting and server data centre automation software with a control panel developed for Linux and Windows-based retail hosting service providers.",
    "w": "https://www.plesk.com/",
    "i": "Plesk.png"
  },
  "Pligg": {
    "w": "http://pligg.com",
    "i": "Pligg.svg"
  },
  "Plone": {
    "d": "Plone is a free and open source content management system (CMS) built on top of the Zope application server.",
    "w": "https://plone.org/",
    "i": "Plone.svg"
  },
  "Plotly": {
    "w": "https://plot.ly/javascript/",
    "i": "Plotly.png"
  },
  "Plyr": {
    "d": "Plyr is a simple, lightweight, accessible and customizable HTML5, YouTube and Vimeo media player that supports modern browsers.",
    "w": "https://plyr.io",
    "i": "Plyr.png"
  },
  "Po.st": {
    "w": "http://www.po.st/",
    "i": "Po.st.png"
  },
  "Pocket": {
    "d": "Pocket is a social bookmarking service that can be integrated into a website with the use of a web widget.",
    "w": "https://getpocket.com",
    "i": "pocket.svg"
  },
  "Podia": {
    "d": "Podia is a platform to host and sell online courses, memberships, and digital downloads.",
    "w": "https://www.podia.com",
    "i": "Podia.svg"
  },
  "Podigee": {
    "d": "Podigee is an independent company for podcast publishers. Podigee offers hosting, distribution, analytics and monetisation of podcasts.",
    "w": "https://www.podigee.com",
    "i": "Podigee.svg"
  },
  "Podium": {
    "d": "Podium is a customer communication platform for businesses who interact with customers on a local level.",
    "w": "https://www.podium.com",
    "i": "Podium.png"
  },
  "Podsights": {
    "d": "Podsights is attribution technology platform that brands and agencies use to measure and scale their podcast advertising",
    "w": "https://podsights.com/",
    "i": "Podsights.png"
  },
  "Pojo.me": {
    "d": "Pojo.me provides a Accessibility overlay plug-in for any WordPress Theme or Page Builder.",
    "w": "https://pojo.me/plugins/accessibility/",
    "i": "Pojo.me.png"
  },
  "Poloriz": {
    "d": "Poloriz's technology automatically creates a personalised, full-screen, mobile-first, cross-selling user experience for shoppers.",
    "w": "https://www.poloriz.com",
    "i": "Poloriz.svg"
  },
  "Polyfill": {
    "d": "Polyfill is a service which accepts a request for a set of browser features and returns only the polyfills that are needed by the requesting browser.",
    "w": "https://polyfill.io",
    "i": "polyfill.svg"
  },
  "Polylang": {
    "d": "Polylang is a WordPress plugin which allows you to create multilingual WordPress site.",
    "w": "https://wordpress.org/plugins/polylang",
    "i": "Polylang.svg"
  },
  "Polymer": {
    "w": "http://polymer-project.org",
    "i": "Polymer.png"
  },
  "Popmenu": {
    "d": "Popmenu is a restaurant platform which offers CMS, online menus, ordering and delivery and marketing automation solutions.",
    "w": "https://get.popmenu.com",
    "i": "Popmenu.svg"
  },
  "Popper": {
    "d": "Popper is a positioning engine, its purpose is to calculate the position of an element to make it possible to position it near a given reference element.",
    "w": "https://popper.js.org",
    "i": "Popper.svg"
  },
  "PopularFX": {
    "d": "PopularFX is a fully customizable responsive WordPress theme. It comes with drag and drop page builder.",
    "w": "https://popularfx.com",
    "i": "PopularFX.png"
  },
  "Popup Maker": {
    "d": "Popup Maker is a plugin that lets you create popup windows for your WordPress website.",
    "w": "https://wppopupmaker.com",
    "i": "Popup Maker.png"
  },
  "Post Affiliate Pro": {
    "d": "Post Affiliate Pro is a software built for online stores and ecommerce websites that need to track and monitor their affiliate network.",
    "w": "https://www.postaffiliatepro.com",
    "i": "Post Affiliate Pro.svg"
  },
  "PostHog": {
    "d": "PostHog is the open-source, all-in-one product analytics platform.",
    "w": "https://posthog.com",
    "i": "PostHog.svg"
  },
  "PostNL": {
    "d": "PostNL (formerly TNT) is a mail, parcel and ecommerce corporation with operations in the Netherlands, Germany, Italy, Belgium, and the United Kingdom.",
    "w": "https://postnl.post",
    "i": "PostNL.svg"
  },
  "Poste Italiane": {
    "d": "Poste Italiane is the Italian postal service provider.",
    "w": "https://www.poste.it",
    "i": "Poste Italiane.svg"
  },
  "Posterous": {
    "w": "http://posterous.com",
    "i": "Posterous.png"
  },
  "PostgreSQL": {
    "d": "PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.",
    "w": "http://www.postgresql.org/",
    "i": "PostgreSQL.png"
  },
  "Postpay": {
    "d": "Postpay is a payment solution that allows you to split your purchase amount into instalments.",
    "w": "https://postpay.io",
    "i": "Postpay.svg"
  },
  "Postscript": {
    "d": "Postscript is an SMS and MMS marketing platform for Shopify stores.",
    "w": "https://www.postscript.io",
    "i": "Postscript.svg"
  },
  "Potions": {
    "d": "Potions is a personalisation technology for customising the ecommerce experience for site visitors without the use of cookies.",
    "w": "https://get-potions.com",
    "i": "Potions.svg"
  },
  "PowerReviews": {
    "d": "Powerreviews is a provider of UGC solutions like ratings and reviews.",
    "w": "https://www.powerreviews.com/",
    "i": "PowerReviews.png"
  },
  "Powerboutique": {
    "w": "https://www.powerboutique.com/",
    "i": "powerboutique.png"
  },
  "Powergap": {
    "w": "http://powergap.de",
    "i": "Powergap.png"
  },
  "Preact": {
    "d": "Preact is a JavaScript library that describes itself as a fast 3kB alternative to React with the same ES6 API.",
    "w": "https://preactjs.com",
    "i": "Preact.svg"
  },
  "Prebid": {
    "d": "Prebid is an open-source header bidding wrapper. It forms the core of our Nucleus ad platform, helping maximize revenue and performance for publishers.",
    "w": "http://prebid.org",
    "i": "Prebid.png"
  },
  "Prediggo": {
    "d": "Prediggo is an ecommerce personalisation and marketing automation software provider.",
    "w": "https://prediggo.com",
    "i": "Prediggo.png"
  },
  "Prefix-Free": {
    "w": "https://leaverou.github.io/prefixfree/",
    "i": "Prefix-Free.png"
  },
  "Premio Chaty": {
    "d": "Chat with your website visitors via their favorite channels with Chaty by Premio.",
    "w": "https://premio.io/downloads/chaty",
    "i": "Premio.png"
  },
  "Press Customizr": {
    "d": "Press Customizr is a multipurpose WordPress theme suitable for small businesses and ecommerce sites.",
    "w": "https://presscustomizr.com/customizr",
    "i": "Press.svg"
  },
  "Press Hueman": {
    "d": "Press Hueman is a mobile friendly WordPress theme for blogs, magazines and business websites.",
    "w": "https://presscustomizr.com/hueman",
    "i": "Press.svg"
  },
  "PressMaximum Customify": {
    "d": "PressMaximum Customify is lightweight, responsive and flexible multipurpose WordPress theme.",
    "w": "https://pressmaximum.com/customify",
    "i": "PressMaximum.png"
  },
  "Pressable": {
    "d": "Pressable is a managed hoting platform for WordPress.",
    "w": "https://pressable.com",
    "i": "pressable.svg"
  },
  "PrestaShop": {
    "d": "PrestaShop is a freemium, open-source ecommerce solution, written in the PHP programming language with support for the MySQL database management system.",
    "w": "http://www.prestashop.com",
    "i": "PrestaShop.svg"
  },
  "Pretty Links": {
    "d": "Pretty Links is a WordPress plugin URL shortener, link cloaker, branded link, and QR code generator.",
    "w": "https://prettylinks.com",
    "i": "Pretty Links.png"
  },
  "PriceSpider": {
    "d": "PriceSpider is an advanced retail data technology company that provides insights about consumer purchasing behavior.",
    "w": "https://www.pricespider.com",
    "i": "PriceSpider.png"
  },
  "PrimeNG": {
    "d": "PrimeNG is a rich set of open-source UI Components for Angular.",
    "w": "https://www.primefaces.org",
    "i": "PrimeNG.svg"
  },
  "PrimeReact": {
    "d": "PrimeReact is a rich set of open-source UI Components for React.",
    "w": "https://www.primefaces.org",
    "i": "PrimeReact.svg"
  },
  "PrimeVue": {
    "d": "PrimeVue is a rich set of open-source UI Components for Vue.js.",
    "w": "https://www.primefaces.org",
    "i": "PrimeVue.svg"
  },
  "Primis": {
    "d": "Primis is a video discovery platform for publishers.",
    "w": "https://www.primis.tech",
    "i": "Primis.svg"
  },
  "Printful": {
    "d": "Printful offers print-on-demand drop shipping solution for ecommerce sites.",
    "w": "https://www.printful.com/",
    "i": "Printful.png"
  },
  "Priority Hints": {
    "d": "Priority Hints exposes a mechanism for developers to signal a relative priority for browsers to consider when fetching resources.",
    "w": "https://wicg.github.io/priority-hints/",
    "i": "Priority Hints.svg"
  },
  "Prism": {
    "d": "Prism is an extensible syntax highlighter.",
    "w": "http://prismjs.com",
    "i": "Prism.svg"
  },
  "Prismic": {
    "d": "Prismic is a headless CMS for Jamstack.",
    "w": "https://prismic.io",
    "i": "Prismic.svg"
  },
  "Privy": {
    "d": "Privy is a all-in-one marketing automation platform for ecommerce.",
    "w": "https://www.privy.com",
    "i": "Privy.svg"
  },
  "Privy App": {
    "d": "Privy App helps you improve your website conversion rate, grow your email list, automate your email marketing, drive repeat purchases and much more.",
    "w": "https://apps.shopify.com/privy",
    "i": "Privy.svg"
  },
  "ProcessWire": {
    "d": "ProcessWire is an open source content management system (CMS) and framework (CMF).",
    "w": "https://processwire.com/",
    "i": "ProcessWire.svg"
  },
  "Product Hunt": {
    "d": "Product Hunt is a community-based website that allows makers and marketers to launch their products or services and get in touch with their first real users.",
    "w": "https://www.producthunt.com",
    "i": "Product Hunt.svg"
  },
  "Product Personalizer": {
    "d": "Product Personalizer apps can help you to customise your products and offer a more personalised experience for your customers.",
    "w": "https://productpersonalizer.com",
    "i": "Product Personalizer.png"
  },
  "ProfilePress": {
    "d": "ProfilePress is a WordPress registration plugin that lets you create login forms, registration forms, user profiles, and more.",
    "w": "https://profilepress.net",
    "i": "ProfilePress.svg"
  },
  "Profitwell": {
    "w": "https://www.profitwell.com/",
    "i": "Profitwell.svg"
  },
  "Project Wonderful": {
    "w": "http://projectwonderful.com",
    "i": "Project Wonderful.png"
  },
  "Projesoft": {
    "w": "https://www.projesoft.com.tr",
    "i": "projesoft.png"
  },
  "PromoBuilding": {
    "d": "PromoBuilding is a subscription-based website builder for optimising budgets for creating promotional campaigns.",
    "w": "https://promobuilding.ru",
    "i": "PromoBuilding.svg"
  },
  "Proton Mail": {
    "d": "Proton Mail is the world’s largest secure email service with over 70 million users. Available on Web, iOS, Android, and desktop. Protected by Swiss privacy law.",
    "w": "https://proton.me/mail",
    "i": "Proton Mail.svg"
  },
  "Prototype": {
    "d": "Prototype is a JavaScript Framework that aims to ease development of web applications.",
    "w": "http://www.prototypejs.org",
    "i": "Prototype.png"
  },
  "Protovis": {
    "w": "http://mbostock.github.io/protovis"
  },
  "ProvenExpert": {
    "d": "ProvenExpert is a review based marketing platform that allows users to create customer surveys, provides aggregate reviews and ratings.",
    "w": "https://www.provenexpert.com",
    "i": "ProvenExpert.svg"
  },
  "Provide Support": {
    "d": "Provide Support is a SaaS for customer service that includes live chat, real-time website monitoring, chat statistics.",
    "w": "https://www.providesupport.com",
    "i": "Provide Support.svg"
  },
  "Proximis": {
    "w": "https://www.proximis.com",
    "i": "Proximis Omnichannel.png"
  },
  "Proximis Unified Commerce": {
    "w": "https://www.proximis.com",
    "i": "Proximis Omnichannel.png"
  },
  "Pterodactyl Panel": {
    "d": "Pterodactyl Panel is a free, open-source game server management panel built with PHP, React, and Go.",
    "w": "https://pterodactyl.io",
    "i": "Pterodactyl Panel.svg"
  },
  "PubGuru": {
    "d": "PubGuru is a header wrapper and ad ops platform.",
    "w": "https://pubguru.com",
    "i": "PubGuru.png"
  },
  "PubMatic": {
    "d": "PubMatic is a company that develops and implements online advertising software and strategies for the digital publishing and advertising industry.",
    "w": "http://www.pubmatic.com/",
    "i": "PubMatic.svg"
  },
  "PubSubJS": {
    "d": "PubSubJS is a topic-based publish/subscribe library written in JavaScript.",
    "w": "https://github.com/mroderick/PubSubJS",
    "i": "pubsub-js.png"
  },
  "Public CMS": {
    "w": "http://www.publiccms.com",
    "i": "Public CMS.png"
  },
  "Pulse Secure": {
    "d": "Pulse Secure allows to deploy VPNs to securely to your internal resources.",
    "w": "https://www.pulsesecure.net/products/remote-access-overview/",
    "i": "PulseSecure.png"
  },
  "Pure CSS": {
    "d": "Pure CSS is a set of small, responsive CSS modules that can be used in web projects.",
    "w": "http://purecss.io",
    "i": "Pure CSS.png"
  },
  "Pure Chat": {
    "d": "Pure Chat is a live chat solution for small to mid-sized teams.",
    "w": "https://www.purechat.com",
    "i": "Pure Chat.png"
  },
  "PureCars": {
    "d": "PureCars is an automotive software and managed services company serving dealerships, advertising associations, and OEMs across the North American retail automotive industry.",
    "w": "https://www.purecars.com",
    "i": "PureCars.png"
  },
  "PurpleAds": {
    "d": "PurpleAds is an online advertising solution that businesses use to promote their products and services on Google Search, YouTube and other sites across the web.",
    "w": "https://purpleads.io",
    "i": "PurpleAds.svg"
  },
  "PushDaddy Whatsapp Chat": {
    "d": "Whatsapp Chat is an live chat and abondoned cart solution built by PushDaddy.",
    "w": "https://apps.shopify.com/whatsapp-chat-for-support",
    "i": "PushDaddy.png"
  },
  "PushEngage": {
    "d": "PushEngage is a browser push notification platform that helps content website managers engage visitors by automatically segmenting and sending web push messages.",
    "w": "https://www.pushengage.com",
    "i": "PushEngage.png"
  },
  "PushOwl": {
    "d": "PushOwl is a push notification platform for ecommerce stores.",
    "w": "https://pushowl.com",
    "i": "PushOwl.svg"
  },
  "PushOwl Web Push Notifications": {
    "d": "PushOwl Web Push Notifications are a Shopify app which helps recover abandoned carts and market better with web push.",
    "w": "https://apps.shopify.com/pushowl",
    "i": "PushOwl.svg"
  },
  "PushPushGo": {
    "d": "PushPushGo is a GDPR-ready platform which enables startups, SMBs and corporations to create and send automatic web push notification campaigns on desktop and via mobile to manage various scenarios including abandoned carts, segmentation, cross-selling, customer engagement, and return rates.",
    "w": "https://pushpushgo.com",
    "i": "PushPushGo.svg"
  },
  "Pushnami": {
    "d": "Pushnami is an AI-powered messaging platform that uses intelligent analytics to deliver superior push, social, and email performance.",
    "w": "https://pushnami.com",
    "i": "Pushnami.svg"
  },
  "Pushpay": {
    "d": "Pushpay is a digital giving and engagement platform designed to help churches manage processes related to donations and fundraising.",
    "w": "https://pushpay.com",
    "i": "Pushpay.svg"
  },
  "PyScript": {
    "d": "PyScript is a python script that can be run in the browser using a mix of Python and standard HTML.",
    "w": "https://pyscript.net",
    "i": "PyScript.svg"
  },
  "Pygments": {
    "w": "http://pygments.org",
    "i": "pygments.png"
  },
  "PyroCMS": {
    "w": "http://pyrocms.com",
    "i": "PyroCMS.png"
  },
  "Python": {
    "d": "Python is an interpreted and general-purpose programming language.",
    "w": "http://python.org",
    "i": "Python.png"
  },
  "PythonAnywhere": {
    "d": "PythonAnywhere is an online integrated development environment (IDE) and web hosting service (Platform as a service) based on the Python programming language.",
    "w": "https://www.pythonanywhere.com",
    "i": "PythonAnywhere.svg"
  },
  "papaya CMS": {
    "w": "https://papaya-cms.com",
    "i": "papaya CMS.png"
  },
  "parcel": {
    "w": "https://parceljs.org/",
    "i": "Parcel.png"
  },
  "particles.js": {
    "d": "Particles.js is a JavaScript library for creating particles.",
    "w": "https://github.com/VincentGarreau/particles.js"
  },
  "petite-vue": {
    "d": "petite-vue is an alternative distribution of Vue optimised for progressive enhancement.",
    "w": "https://github.com/vuejs/petite-vue",
    "i": "vue.svg"
  },
  "phpAlbum": {
    "d": "phpAlbum is an open-source PHP script which allows you to create your personal photo album.",
    "w": "http://phpalbum.net",
    "i": "phpAlbum.png"
  },
  "phpBB": {
    "d": "phpBB is a free open-source Internet forum package in the PHP scripting language.",
    "w": "https://phpbb.com",
    "i": "phpBB.png"
  },
  "phpCMS": {
    "w": "http://phpcms.de",
    "i": "PHP.svg"
  },
  "phpDocumentor": {
    "d": "phpDocumentor is an open-source documentation generator written in PHP.",
    "w": "https://www.phpdoc.org",
    "i": "phpDocumentor.png"
  },
  "phpMyAdmin": {
    "d": "PhpMyAdmin is a free and open-source administration tool for MySQL and MariaDB.",
    "w": "https://www.phpmyadmin.net",
    "i": "phpMyAdmin.png"
  },
  "phpPgAdmin": {
    "w": "http://phppgadmin.sourceforge.net",
    "i": "phpPgAdmin.png"
  },
  "phpRS": {
    "d": "phpRS is a content management software written in PHP.",
    "w": "https://phprs.net",
    "i": "default.svg"
  },
  "phpSQLiteCMS": {
    "w": "http://phpsqlitecms.net",
    "i": "phpSQLiteCMS.png"
  },
  "phpwind": {
    "w": "https://www.phpwind.net",
    "i": "phpwind.png"
  },
  "pinoox": {
    "w": "https://pinoox.com",
    "i": "pinoox.png"
  },
  "pirobase CMS": {
    "w": "https://www.pirobase-imperia.com/de/produkte/produktuebersicht/pirobase-cms",
    "i": "pirobaseCMS.svg"
  },
  "plentyShop LTS": {
    "d": "The official template plugin developed by plentymarkets. plentyShop LTS is the default template for plentymarkets online stores.",
    "w": "https://www.plentymarkets.com/product/modules/online-shop/",
    "i": "plentyShop LTS.svg"
  },
  "plentymarkets": {
    "d": "plentymarkets is a cloud-based all-in-one ecommerce ERP solution.",
    "w": "https://www.plentymarkets.com/",
    "i": "plentymarkets.svg"
  },
  "prettyPhoto": {
    "w": "http://no-margin-for-errors.com/projects/prettyphoto-jquery-lightbox-clone/",
    "i": "prettyPhoto.png"
  },
  "punBB": {
    "w": "http://punbb.informer.com",
    "i": "punBB.png"
  },
  "Q4": {
    "d": "Q4 is a SaaS platform that provides communication and intelligence solutions to investor relations professionals.",
    "w": "https://www.q4inc.com/products/investor-relations-websites/default.aspx",
    "i": "Q4.png"
  },
  "Q4 Cookie Monster": {
    "d": "Q4 Cookie Monster is an cookie compliance widget built by Q4.",
    "w": "https://q4mobile.github.io/q4widgets-jquery-ui/doc_html/q4.cookieMonster.html",
    "i": "Q4.png"
  },
  "Qgiv": {
    "d": "Qgiv is an online fundraising platform helping nonprofit, faith-based, healthcare, and education organisations raise funds.",
    "w": "https://www.qgiv.com",
    "i": "Qgiv.svg"
  },
  "Qikify": {
    "d": "Qikify is a trusted Shopify Expert providing services for over 35,000 Shopify merchants through Shopify Apps or custom modifications.",
    "w": "https://qikify.com",
    "i": "Qikify.svg"
  },
  "Qstomizer": {
    "d": "Qstomizer app is the app for Shopify and Woocomerce that allows you to add a visual custom product designer to your shop.",
    "w": "https://www.qstomizer.com",
    "i": "Qstomizer.png"
  },
  "Qualaroo": {
    "d": "Qualaroo provides surveys on websites and apps to get user feedback.",
    "w": "https://qualaroo.com",
    "i": "Qualaroo.svg"
  },
  "Qualified": {
    "d": "Qualified is a B2B marketer that allows buyers and sales reps to connect through real-time website conversations.",
    "w": "https://www.qualified.com",
    "i": "Qualified.svg"
  },
  "Qualtrics": {
    "d": "Qualtrics is an cloud-based platform for creating and distributing web-based surveys.",
    "w": "https://www.qualtrics.com",
    "i": "Qualtrics.svg"
  },
  "Quanta": {
    "d": "Quanta is web performance management solution. Quanta offers the only analytics solution specifically designed to enable business and technical members of ecommerce teams to collaborate effectively with the end in mind: use web performance to directly impact online revenue at all times.",
    "w": "https://www.quanta.io",
    "i": "Quanta.svg"
  },
  "Quantcast Choice": {
    "d": "Quantcast Choice is a free consent management platform to meet key privacy requirements stemming from ePrivacy Directive, GDPR, and CCPA.",
    "w": "https://www.quantcast.com/products/choice-consent-management-platform",
    "i": "Quantcast.png"
  },
  "Quantcast Measure": {
    "d": "Quantcast Measure is an audience insights and analytics tool.",
    "w": "https://www.quantcast.com/products/measure-audience-insights",
    "i": "Quantcast.png"
  },
  "Quantum Metric": {
    "d": "Quantum Metric is a continuous product design platform that helps organizations build better products faster.",
    "w": "https://www.quantummetric.com/",
    "i": "Quantummetric.png"
  },
  "Quasar": {
    "d": "Quasar is an open-source Vue.js based framework.",
    "w": "https://quasar.dev",
    "i": "Quasar.svg"
  },
  "Qubit": {
    "d": "Qubit is a SaaS based persuasive personalisation at scale services.",
    "w": "https://www.qubit.com",
    "i": "Qubit.png"
  },
  "Question2Answer": {
    "d": "Question2Answer (Q2A) is a popular open-source Q&A platform for PHP/MySQL.",
    "w": "http://www.question2answer.org",
    "i": "question2answer.png"
  },
  "Queue-it": {
    "d": "Queue-it is a virtual waiting room platform designed to protect your website and mobile app from slowdowns or crashes during end-user peaks.",
    "w": "https://queue-it.com",
    "i": "Queue-it.png"
  },
  "Quick.CMS": {
    "w": "http://opensolution.org",
    "i": "Quick.CMS.png"
  },
  "Quick.Cart": {
    "w": "http://opensolution.org",
    "i": "Quick.Cart.png"
  },
  "QuickSell": {
    "d": "QuickSell is a sales acceleration platform helping businesses transform conversations to conversions by leveraging personal commerce.",
    "w": "https://quicksell.co",
    "i": "QuickSell.svg"
  },
  "Quicklink": {
    "d": "Quicklink is a JS library which aims to be a drop-in solution for sites to prefetch links based on what is in the user's viewport",
    "w": "https://getquick.link/",
    "i": "Quicklink.svg"
  },
  "Quicq": {
    "d": "Quicq is an image optimisation tool by Afosto.",
    "w": "https://afosto.com/apps/quicq",
    "i": "Quicq.svg"
  },
  "Quill": {
    "d": "Quill is a free open-source WYSIWYG editor.",
    "w": "http://quilljs.com",
    "i": "Quill.svg"
  },
  "Quora Pixel": {
    "d": "Quora Pixel is a tool that is placed in your website code to track traffic and conversions.",
    "w": "https://quoraadsupport.zendesk.com/hc/en-us/categories/115001573928-Pixels-Tracking",
    "i": "Quora.svg"
  },
  "Qwik": {
    "d": "Qwik is designed for the fastest possible page load time, by delivering pure HTML with near 0 JavaScript.",
    "w": "https://qwik.builder.io",
    "i": "Qwik.svg"
  },
  "qiankun": {
    "d": "qiankun is a JS library who helps developers to build a micro frontends system.",
    "w": "https://qiankun.umijs.org",
    "i": "qiankun.svg"
  },
  "RBS Change": {
    "w": "http://www.rbschange.fr",
    "i": "RBS Change.png"
  },
  "RCMS": {
    "w": "http://www.rcms.fi",
    "i": "RCMS.png"
  },
  "RD Station": {
    "d": "RD Station is a platform that helps medium and small businesses manage and automate their Digital Marketing strategy.",
    "w": "http://rdstation.com.br",
    "i": "RD Station.png"
  },
  "RDoc": {
    "d": "RDoc produces HTML and command-line documentation for Ruby projects.",
    "w": "https://github.com/ruby/rdoc",
    "i": "RDoc.png"
  },
  "REDAXO": {
    "d": "REDAXO is a content management system that provides business optimisation through web projects and output codes.",
    "w": "https://redaxo.org",
    "i": "REDAXO.png"
  },
  "REG.RU": {
    "d": "REG.RU is a web hosting provider and internet domain registrar.",
    "w": "https://www.reg.ru",
    "i": "REG.RU.svg"
  },
  "RSS": {
    "d": "RSS is a family of web feed formats used to publish frequently updated works—such as blog entries, news headlines, audio, and video—in a standardized format.",
    "w": "https://www.rssboard.org/rss-specification",
    "i": "RSS.svg"
  },
  "RTB House": {
    "d": "RTB House is a company that provides learning-powered retargeting solutions for brands and agencies.",
    "w": "https://www.rtbhouse.com",
    "i": "RTB House.png"
  },
  "RX Web Server": {
    "w": "http://developers.rokitax.co.uk/projects/rxweb",
    "i": "RXWeb.svg"
  },
  "RackCache": {
    "d": "RackCache is a quick drop-in component to enable HTTP caching for Rack-based applications.",
    "w": "https://github.com/rtomayko/rack-cache",
    "i": "RackCache.png"
  },
  "Rain": {
    "d": "Rain is a cloud-based point of sale (POS) system for small to midsized retailers.",
    "w": "https://www.rainpos.com",
    "i": "Rain.svg"
  },
  "RainLoop": {
    "d": "RainLoop is a web-based email client.",
    "w": "https://www.rainloop.net/",
    "i": "RainLoop.png"
  },
  "RaiseDonors": {
    "d": "RaiseDonors is for anyone raising money and cultivating donor relationships online.",
    "w": "https://explore.raisedonors.com",
    "i": "RaiseDonors.png"
  },
  "Raisely": {
    "d": "Raisely is a cloud-based fundraising platform that helps non-profits and charities drive fundraising campaigns and collect donations.",
    "w": "https://raisely.com",
    "i": "Raisely.svg"
  },
  "Rakuten": {
    "d": "Rakuten (formerly Ebates) allows you to earn cash-back rewards.",
    "w": "https://www.rakuten.com/",
    "i": "Rakuten.svg"
  },
  "Rakuten Advertising": {
    "w": "https://rakutenadvertising.com/",
    "i": "Rakuten Advertising.svg"
  },
  "Rakuten Digital Commerce": {
    "w": "https://digitalcommerce.rakuten.com.br",
    "i": "RakutenDigitalCommerce.png"
  },
  "Ramda": {
    "w": "http://ramdajs.com",
    "i": "Ramda.png"
  },
  "RankMath SEO": {
    "d": "RankMath SEO is a search engine optimisation plugin for WordPress.",
    "w": "https://rankmath.com",
    "i": "RankMath SEO.svg"
  },
  "Raphael": {
    "d": "Raphael is a cross-browser JavaScript library that draws Vector graphics for websites.",
    "w": "https://dmitrybaranovskiy.github.io/raphael/",
    "i": "Raphael.png"
  },
  "RapidSec": {
    "d": "RapidSec offers automated client-side security and monitoring.",
    "w": "https://rapidsec.com",
    "i": "RapidSec.svg"
  },
  "RapidSpike": {
    "d": "RapidSpike is an uptime and performance monitoring service for web sites and applications.",
    "w": "https://www.rapidspike.com",
    "i": "RapidSpike.svg"
  },
  "Raptor": {
    "d": "Raptor is a personalisation engine based on machine learning that analyses and learns about the user's behavior and unique browser history.",
    "w": "https://raptorsmartadvisor.com",
    "i": "Raptor.png"
  },
  "Raspbian": {
    "d": "Raspbian is a free operating system for the Raspberry Pi hardware.",
    "w": "https://www.raspbian.org/",
    "i": "Raspbian.svg"
  },
  "RateParity": {
    "d": "RateParity is a conversion rate optimisation platform for hotels.",
    "w": "https://www.rateparity.com",
    "i": "RateParity.svg"
  },
  "Rawabit": {
    "d": "Rawabit is a website builder that lets small businesses design landing pages, modify sections, and embed content links using a drag and drop editor.",
    "w": "https://www.rawabit.me",
    "i": "Rawabit.svg"
  },
  "Raychat": {
    "d": "Raychat is a free customer messaging platform.",
    "w": "https://raychat.io",
    "i": "raychat.png"
  },
  "Raygun": {
    "d": "Raygun is a cloud-based networking monitoring and bug tracking application.",
    "w": "https://raygun.com",
    "i": "Raygun.svg"
  },
  "Rayo": {
    "w": "http://www.rayo.ir",
    "i": "Rayo.png"
  },
  "Razorpay": {
    "d": "Razorpay is a provider of an online payment gateway that allows businesses to accept, process, and disburse payments.",
    "w": "https://razorpay.com/",
    "i": "Razorpay.svg"
  },
  "Re:amaze": {
    "d": "Re:amaze is a multi-brand customer service, live chat, and help desk solution.",
    "w": "https://www.reamaze.com",
    "i": "Re-amaze.png"
  },
  "ReCaptcha v2 for Contact Form 7": {
    "d": "Contact Form 7 v5.1 dropped support for reCaptcha v2 along with the [recaptcha] tag December 2018. This plugin brings that functionality back from Contact Form 7 5.0.5 and re-adds the [recaptcha] tag.",
    "w": "https://wordpress.org/plugins/wpcf7-recaptcha/",
    "i": "ReCaptcha v2 for Contact Form 7.svg"
  },
  "ReConvert": {
    "d": "ReConvert is a post-purchase upsell & thank you page.",
    "w": "https://www.reconvert.io",
    "i": "ReConvert.svg"
  },
  "ReDoc": {
    "d": "Redoc is an open-source tool that generates API documentation from OpenAPI specifications.",
    "w": "https://github.com/Rebilly/ReDoc",
    "i": "redoc.png"
  },
  "React": {
    "d": "React is an open-source JavaScript library for building user interfaces or UI components.",
    "w": "https://reactjs.org",
    "i": "React.svg"
  },
  "React Bricks": {
    "d": "React Bricks is a visual editing CMS based on React components.",
    "w": "https://reactbricks.com",
    "i": "React Bricks.svg"
  },
  "React Redux": {
    "d": "Official React bindings for Redux",
    "w": "https://react-redux.js.org/",
    "i": "Redux.png"
  },
  "React Router": {
    "d": "React Router provides declarative routing for React.",
    "w": "https://reactrouter.com",
    "i": "React Router.svg"
  },
  "Reactive": {
    "d": "Reactive is a subscription-based software that allows you to set up an online store and website. It has a CMS and has been created to support retail, coffee bars, restaurants owners and accomodation properties such as hotels or villas. With Reactive one can sell products or accept reservations and online orders.",
    "w": "https://reactiveonline.io",
    "i": "Reactive.svg"
  },
  "ReadMe": {
    "d": "ReadMe is a content management system that businesses use to create and manage technical or API documentation.",
    "w": "https://readme.com",
    "i": "readme.svg"
  },
  "ReadSpeaker": {
    "d": "ReadSpeaker is an intuitive text-to-speech API that converts text into natural-sounding audio files for websites and applications.",
    "w": "https://www.readspeaker.com",
    "i": "ReadSpeaker.svg"
  },
  "Readymag": {
    "d": "Readymag is a browser-based design tool that helps create websites, portfolios and all kinds of online publications without coding.",
    "w": "https://readymag.com",
    "i": "Readymag.svg"
  },
  "Really Simple CAPTCHA": {
    "d": "Really Simple CAPTCHA does not work alone and is intended to work with other plugins. It is originally created for Contact Form 7, however, you can use it with your own plugin.",
    "w": "https://wordpress.org/plugins/really-simple-captcha",
    "i": "Really Simple CAPTCHA.png"
  },
  "RebelMouse": {
    "w": "https://www.rebelmouse.com/",
    "i": "RebelMouse.svg"
  },
  "Rebuy": {
    "d": "Rebuy offers personlisation solutions for ecommerce sites.",
    "w": "https://rebuyengine.com/",
    "i": "Rebuy.png"
  },
  "Recapture": {
    "d": "Recapture is an abandoned cart recovery and email marketing solution.",
    "w": "https://recapture.io",
    "i": "Recapture.png"
  },
  "Recart": {
    "d": "Recart is a tool to engage users who abandoned their shopping cart via Facebook Messenger.",
    "w": "https://recart.com/",
    "i": "Recart.svg"
  },
  "Recent Posts Widget With Thumbnails": {
    "d": "Recent Posts Widget With Thumbnails is based on the well-known WordPress default widget 'Recent Posts' and extended to display more informations about the posts.",
    "w": "https://wordpress.org/plugins/recent-posts-widget-with-thumbnails/",
    "i": "Recent Posts Widget With Thumbnails.png"
  },
  "Recharge": {
    "d": "Recharge is the a subscription payments platform designed for merchants to set up and manage dynamic recurring billing across web and mobile.",
    "w": "https://rechargepayments.com",
    "i": "Recharge.svg"
  },
  "Recharts": {
    "d": "Recharts is a component-based charting library, which is exclusively built for React applications.",
    "w": "https://recharts.org/",
    "i": "Recharts.svg"
  },
  "Recite Me": {
    "d": "Recite Me is a web accessibility overlay that claims to allow website visitors to customize a site in a way that works for them.",
    "w": "https://reciteme.com/",
    "i": "Recite Me.png"
  },
  "Recomify": {
    "d": "Recomify is a 1-click install, cost-effective smart product recommendation engine.",
    "w": "https://www.recomify.com",
    "i": "Recomify.png"
  },
  "RecoverMyCart": {
    "d": "RecoverMyCart is a Shopify app for abandoned basket recovery.",
    "w": "https://app.recovermycart.com/",
    "i": "RecoverMyCart.png"
  },
  "Recruitee": {
    "d": "Recruitee is an integrated cloud-based recruitment management and applicant tracking system.",
    "w": "https://recruitee.com",
    "i": "Recruitee.svg"
  },
  "Recurate": {
    "d": "Recurate is a tech-enabled resale service that empowers brands & retailers to establish their own integrated resale platforms directly on their ecommerce sites.",
    "w": "https://www.recurate.com",
    "i": "Recurate.svg"
  },
  "Recurly": {
    "d": "Recurly provides enterprise-class subscription billing and recurring payment management for thousands of businesses worldwide.",
    "w": "https://recurly.com",
    "i": "Recurly.png"
  },
  "Red Hat": {
    "d": "Red Hat is an open-source Linux operating system.",
    "w": "https://www.redhat.com",
    "i": "Red Hat.svg"
  },
  "Red Hat Gluster": {
    "d": "Gluster is a free and open source scalable network filesystem.",
    "w": "https://www.gluster.org",
    "i": "gluster.png"
  },
  "Red je Pakketje": {
    "d": "Red je Pakketje is a Dutch company specialised in same-day-delivery.",
    "w": "https://redjepakketje.nl",
    "i": "Red je Pakketje.svg"
  },
  "RedCart": {
    "d": "RedCart is an all-in-one ecommerce platform from Poland.",
    "w": "https://redcart.pl",
    "i": "RedCart.svg"
  },
  "Reddit": {
    "w": "http://code.reddit.com",
    "i": "Reddit.svg"
  },
  "Reddit Ads": {
    "d": "Reddit Ads is an online advertising offering from Reddit.",
    "w": "https://advertising.reddithelp.com/",
    "i": "Reddit.svg"
  },
  "Redis": {
    "d": "Redis is an in-memory data structure project implementing a distributed, in-memory key–value database with optional durability. Redis supports different kinds of abstract data structures, such as strings, lists, maps, sets, sorted sets, HyperLogLogs, bitmaps, streams, and spatial indexes.",
    "w": "https://redis.io",
    "i": "Redis.svg"
  },
  "Redis Object Cache": {
    "w": "https://wprediscache.com",
    "i": "RedisObjectCache.svg"
  },
  "Redmine": {
    "d": "Redmine is a free and open-source, web-based project management and issue tracking tool.",
    "w": "http://www.redmine.org",
    "i": "Redmine.png"
  },
  "Redonner": {
    "d": "This company promotes the collection and recycling of textiles by rewarding each donation of clothing made on its website with 'Re' points, allowing you to benefit from advantages and discounts at more than 70 partner brands.",
    "w": "https://www.redonner.fr",
    "i": "Redonner.svg"
  },
  "Redux": {
    "d": "Redux is a predictable state container for JavaScript applications.",
    "w": "https://redux.js.org/",
    "i": "Redux.png"
  },
  "RedwoodJS": {
    "d": "RedwoodJS is a full-stack serverless web application framework built by Tom Preston Werner (co-founder of Github) et al.",
    "w": "https://redwoodjs.com",
    "i": "RedwoodJS.svg"
  },
  "Reelevant": {
    "d": "Reelevant is a visual content platform that helps businesses to create on-demand content for their viewers in order to increase conversion rates.",
    "w": "https://try.reelevant.com",
    "i": "Reelevant.svg"
  },
  "Reevoo": {
    "d": "Reevoo is a provider of UGC solutions like reviews.",
    "w": "https://www.reevoo.com",
    "i": "Reevoo.svg"
  },
  "ReferralCandy": {
    "d": "ReferralCandy is a marketing platform that gets shoppers to refer their friends.",
    "w": "https://www.referralcandy.com",
    "i": "ReferralCandy.svg"
  },
  "Refersion": {
    "d": "Refersion is an affiliate management app.",
    "w": "http://refersion.com",
    "i": "Refersion.svg"
  },
  "Reflektion": {
    "d": "Reflektion is a customer centric personalisation platform that optimizes customer experiences on an individual basis in real time.",
    "w": "https://reflektion.com",
    "i": "Reflektion.png"
  },
  "Refundid": {
    "d": "Refundid provides ecommerce customers instant refunds for their online returns.",
    "w": "https://refundid.com",
    "i": "Refundid.png"
  },
  "Regiondo": {
    "d": "Regiondo is a online booking system for tour and activity providers.",
    "w": "https://www.regiondo.com",
    "i": "Regiondo.svg"
  },
  "Reinvigorate": {
    "w": "http://www.reinvigorate.net",
    "i": "Reinvigorate.png"
  },
  "Relais Colis": {
    "d": "Relais Colis is a French parcel delivery network.",
    "w": "https://www.relaiscolis.com",
    "i": "Relais Colis.png"
  },
  "Remarkable Commerce": {
    "d": "Remarkable Commerce is a technology and services company which provides a ecommerce platform for mid-sized retailers.",
    "w": "https://remarkable.net/",
    "i": "Remarkable.png"
  },
  "Remix": {
    "d": "Remix is a React framework used for server-side rendering (SSR).",
    "w": "https://remix.run/",
    "i": "Remix.svg"
  },
  "Render Better": {
    "d": "Render Better is automated site speed and core web vital optimisation platform for Shopify.",
    "w": "https://www.renderbetter.com",
    "i": "renderbetter.svg"
  },
  "Replicache": {
    "d": "Replicache is a JavaScript framework for building high-performance, offline-capable, collaborative web apps.",
    "w": "https://replicache.dev/",
    "i": "Replicache.svg"
  },
  "Replit": {
    "d": "Replit is a platform for creating and sharing software.",
    "w": "https://replit.com",
    "i": "Replit.svg"
  },
  "Reputon": {
    "d": "Reputon is an customer reviews Shopify app.",
    "w": "https://reputon.com",
    "i": "Reputon.svg"
  },
  "RequireJS": {
    "d": "RequireJS is a JavaScript library and file loader which manages the dependencies between JavaScript files and in modular programming.",
    "w": "http://requirejs.org",
    "i": "RequireJS.svg"
  },
  "ResDiary": {
    "d": "ResDiary, is a online reservation system for hospitality operators.",
    "w": "https://www.resdiary.com",
    "i": "ResDiary.svg"
  },
  "Resengo": {
    "d": "Resengo is a restaurant table booking widget.",
    "w": "https://wwc.resengo.com",
    "i": "Resengo.svg"
  },
  "Reserve In-Store": {
    "d": "Reserve In-Store app will allow customers to reserve an item in your store online to come to pick it up or view the item before making the purchase.",
    "w": "https://www.reserveinstore.com",
    "i": "Reserve In-Store.svg"
  },
  "Reservio": {
    "d": "Reservio is a cloud-based appointment scheduling and online booking solution.",
    "w": "https://www.reservio.com",
    "i": "Reservio.svg"
  },
  "Resin": {
    "w": "http://caucho.com",
    "i": "Resin.png"
  },
  "Resmio": {
    "d": "Resmio is a restaurant table booking widget.",
    "w": "https://www.resmio.com",
    "i": "Resmio.svg"
  },
  "Resova": {
    "d": "Resova is an online booking software.",
    "w": "https://resova.com",
    "i": "Resova.svg"
  },
  "Responsive Lightbox & Gallery": {
    "d": "Responsive Lightbox & Gallery plugin is a lightweight WordPress gallery plugin by Digital Factory.",
    "w": "https://dfactory.eu/products/responsive-lightbox-gallery-extensions/",
    "i": "Digital Factory.png"
  },
  "ResponsiveVoice": {
    "d": "ResponsiveVoice is a Text-To-Speech API supported in 51 languages.",
    "w": "https://responsivevoice.org",
    "i": "ResponsiveVoice.png"
  },
  "Resy": {
    "d": "Resy is an technology and media company that provides an app and back-end management software for restaurant reservations.",
    "w": "https://resy.com",
    "i": "Resy.svg"
  },
  "Retail Rocket": {
    "d": "Retail Rocket is a big data-based personalisation platform for ecommerce websites.",
    "w": "https://retailrocket.net",
    "i": "Retail Rocket.png"
  },
  "Return Prime": {
    "d": "Return Prime is an application to manage returns for Shopify stores.",
    "w": "https://www.returnprime.com/",
    "i": "return-prime.png"
  },
  "ReturnGO": {
    "d": "ReturnGO's AI-driven returns management platform significantly improves customer lifetime value and post-purchase experience.",
    "w": "https://returngo.ai",
    "i": "ReturnGO.png"
  },
  "Returnly": {
    "d": "Returnly is the provider of digital return experiences for direct-to-consumer brands.",
    "w": "https://returnly.com",
    "i": "Returnly.svg"
  },
  "RevJet": {
    "d": "RevJet is the first comprehensive Ad Experience Platform, for every audience, channel, format, inventory, and device.",
    "w": "https://www.revjet.com",
    "i": "RevJet.png"
  },
  "RevLifter": {
    "d": "RevLifter is an AI-powered coupon technology which allows brands to offer personalised incentives to their customers based on real-time basket data.",
    "w": "https://www.revlifter.com",
    "i": "RevLifter.png"
  },
  "Reveal.js": {
    "w": "http://lab.hakim.se/reveal-js",
    "i": "Reveal.js.png"
  },
  "Revel": {
    "w": "https://revel.github.io",
    "i": "Revel.png"
  },
  "RevenueHunt": {
    "d": "RevenueHunt is an affiliate marketing and advertising company specializing in paid surveys and cost per lead campaigns.",
    "w": "https://revenuehunt.com",
    "i": "RevenueHunt.png"
  },
  "Revieve": {
    "d": "Revieve is a technology company delivering consumer-centric personalised digital brand experiences powered by AI/AR.",
    "w": "https://www.revieve.com",
    "i": "Revieve.svg"
  },
  "ReviewSolicitors": {
    "d": "ReviewSolicitors is a free and independent client-led review platform focusing on the UK legal market.",
    "w": "https://www.reviewsolicitors.co.uk",
    "i": "ReviewSolicitors.svg"
  },
  "Reviews.io": {
    "d": "Reviews.io is a review collection tool for companies to collect merchant (company) & product reviews from genuine customers, then share these on Google.",
    "w": "https://www.reviews.io",
    "i": "Reviews.io.svg"
  },
  "RevolverMaps": {
    "d": "RevolverMaps is a collection of real-time visitor statistics widgets for website or blog. Interactive visitor mappings to a globe rendered by the Revolver Engine.",
    "w": "https://www.revolvermaps.com",
    "i": "RevolverMaps.svg"
  },
  "Revv": {
    "d": "Revv is a lead optimisation and donation platform.",
    "w": "https://revv.com",
    "i": "Revv.png"
  },
  "Revy": {
    "d": "Revy is dedicated to build Shopify Apps to generate more sales for merchants.",
    "w": "https://revy.io",
    "i": "Revy.png"
  },
  "Rewardful": {
    "d": "Rewardful is a way for SaaS companies to setup affiliate and referral programs with Stripe.",
    "w": "https://www.getrewardful.com/",
    "i": "Rewardful.svg"
  },
  "Rezdy": {
    "d": "Rezdy is an online booking software for tours and attractions.",
    "w": "https://www.rezdy.com",
    "i": "Rezdy.svg"
  },
  "Rezgo": {
    "d": "Rezgo is a tour operator software that provides online booking system.",
    "w": "https://www.rezgo.com",
    "i": "Rezgo.svg"
  },
  "RichRelevance": {
    "d": "RichRelevance is a cloud-based omnichannel personalisation platform built to help Retailers, B2B, financial services, travel and hospitality, and branded manufacturers personalise their customer experiences.",
    "w": "https://richrelevance.com",
    "i": "RichRelevance.png"
  },
  "Richpanel": {
    "d": "Richpanel is a purpose-built CRM and customer support platform for ecommerce and DTC brands.",
    "w": "https://www.richpanel.com",
    "i": "Richpanel.svg"
  },
  "Rickshaw": {
    "w": "http://code.shutterstock.com/rickshaw/"
  },
  "RightJS": {
    "d": "RightJS is a modular JavaScript framework.",
    "w": "https://github.com/rightjs",
    "i": "RightJS.png"
  },
  "Riot": {
    "w": "https://riot.js.org/",
    "i": "Riot.png"
  },
  "Ripple": {
    "d": "Ripple is the frontend framework for Single Digital Presence, delivered using Nuxt and Vue.js.",
    "w": "https://dpc-sdp.github.io/sdp-docs/ripple/",
    "i": "ripple.png"
  },
  "Rise.ai": {
    "d": "Rise.ai is a strategic re-engagement solution that provides brands and retailers with a unique currency of their own.",
    "w": "https://rise.ai",
    "i": "Rise.ai.svg"
  },
  "Riskified": {
    "d": "Riskified is a privately held company that provides SaaS fraud and chargeback prevention technology.",
    "w": "https://www.riskified.com/",
    "i": "Riskified.svg"
  },
  "RiteCMS": {
    "w": "http://ritecms.com",
    "i": "RiteCMS.png"
  },
  "Rive": {
    "d": "Rive is a real-time interactive design and animation tool.",
    "w": "https://rive.app",
    "i": "Rive.svg"
  },
  "Roadiz CMS": {
    "w": "https://www.roadiz.io",
    "i": "Roadiz CMS.png"
  },
  "Robin": {
    "w": "http://www.robinhq.com",
    "i": "Robin.png"
  },
  "RockRMS": {
    "d": "Rock RMS is a free, open-source Relationship Management System (RMS) built for churches and businesses.",
    "w": "http://www.rockrms.com",
    "i": "RockRMS.svg"
  },
  "Rockerbox": {
    "d": "Rockerbox is a provider of multi-touch attribution software.",
    "w": "https://www.rockerbox.com",
    "i": "Rockerbox.png"
  },
  "Rocket.Chat": {
    "d": "Rocket.Chat is a communication hub that facilitates team collaboration and organizes conversations.",
    "w": "https://rocket.chat",
    "i": "Rocket.Chat.svg"
  },
  "Rocketfy": {
    "d": "Rocketfy is a platform that allows users to build an online store and allows dropshipping at the same time.",
    "w": "https://rocketfy.mx",
    "i": "Rocketfy.svg"
  },
  "Roistat": {
    "d": "Roistat is a marketing analytics system.",
    "w": "https://roistat.com/",
    "i": "roistat.svg"
  },
  "Rokt": {
    "d": "Rokt is an ecommerce marketing technology that gives customers a personalised and relevant experience while buying online.",
    "w": "https://www.rokt.com",
    "i": "Rokt.svg"
  },
  "Rollbar": {
    "w": "https://rollbar.com/",
    "i": "Rollbar.svg"
  },
  "Rotic": {
    "d": "Rotic is a conversion chatbot that answers questions, captures contacts, and books meetings.",
    "w": "https://rotic.io",
    "i": "Rotic.svg"
  },
  "RoundCube": {
    "d": "RoundCube is free and open-source web-based IMAP email client.",
    "w": "http://roundcube.net",
    "i": "RoundCube.png"
  },
  "Route": {
    "d": "Route is a delivery and shipping tracking app",
    "w": "https://route.com/",
    "i": "route.png"
  },
  "Royal Mail": {
    "d": "Royal Mail is a British multinational postal service and courier company.",
    "w": "https://www.royalmail.com",
    "i": "Royal Mail.png"
  },
  "Rubicon Project": {
    "d": "Rubicon Project is an advertising automation platform enabling publishers to transact advertising brands.",
    "w": "http://rubiconproject.com/",
    "i": "Rubicon Project.svg"
  },
  "Ruby": {
    "d": "Ruby is an open-source object-oriented programming language.",
    "w": "http://ruby-lang.org",
    "i": "Ruby.png"
  },
  "Ruby Receptionists": {
    "d": "Ruby Receptionists is a Portland, Oregon based virtual answering service for small businesses.",
    "w": "https://www.ruby.com",
    "i": "Ruby Receptionists.svg"
  },
  "Ruby on Rails": {
    "d": "Ruby on Rails is a server-side web application framework written in Ruby under the MIT License.",
    "w": "https://rubyonrails.org",
    "i": "Ruby on Rails.png"
  },
  "Rudderstack": {
    "d": "Rudderstack is a customer data platform (CDP) that helps you collect, clean, and control your customer data.",
    "w": "https://rudderstack.com/",
    "i": "Rudderstack.png"
  },
  "Rumble": {
    "d": "Rumble is a Canadian video-streaming platform that presents itself as an alternative to YouTube.",
    "w": "https://rumble.com",
    "i": "Rumble.svg"
  },
  "Rust": {
    "d": "Rust is a multi-paradigm, general-purpose programming language designed for performance and safety, especially safe concurrency.",
    "w": "https://www.rust-lang.org",
    "i": "Rust.svg"
  },
  "RxJS": {
    "d": "RxJS is a reactive library used to implement reactive programming to deal with async implementation, callbacks, and event-based programs.",
    "w": "http://reactivex.io",
    "i": "RxJS.png"
  },
  "Ryviu": {
    "d": "Ryviu is customer product reviews app for building social proof for store.",
    "w": "https://www.ryviu.com/",
    "i": "Ryviu.png"
  },
  "reCAPTCHA": {
    "d": "reCAPTCHA is a free service from Google that helps protect websites from spam and abuse.",
    "w": "https://www.google.com/recaptcha/",
    "i": "reCAPTCHA.svg"
  },
  "SALESmanago": {
    "d": "SALESmanago is a no-code marketing automation and customer data platform designed for mid-sized buinesses and enterprises.",
    "w": "https://www.salesmanago.com",
    "i": "SALESmanago.svg"
  },
  "SAP": {
    "w": "http://sap.com",
    "i": "SAP.svg"
  },
  "SAP Commerce Cloud": {
    "d": "SAP Commerce Cloud is a cloud-native omnichannel commerce solution for B2B, B2C, and B2B2C companies.",
    "w": "https://www.sap.com/products/commerce-cloud.html",
    "i": "SAP.svg"
  },
  "SAP Customer Data Cloud Sign-in": {
    "w": "https://www.sap.com/uk/acquired-brands/what-is-gigya.html",
    "i": "SAP.svg"
  },
  "SAP Upscale Commerce": {
    "d": "SAP Upscale Commerce is a SaaS solution for small-to-medium organizations selling directly to consumers.",
    "w": "https://www.sapstore.com/solutions/47000/SAP-Upscale-Commerce",
    "i": "SAP.svg"
  },
  "SDL Tridion": {
    "w": "http://www.sdl.com/products/tridion",
    "i": "SDL Tridion.svg"
  },
  "SEMrush": {
    "d": "SEMrush is an all-in-one tool suite for improving online visibility and discovering marketing insights.",
    "w": "https://www.semrush.com",
    "i": "SEMrush.svg"
  },
  "SEOmatic": {
    "d": "SEOmatic facilitates modern SEO best practices & implementation for Craft CMS 3.",
    "w": "https://plugins.craftcms.com/seomatic",
    "i": "SEOmatic.svg"
  },
  "SEUR": {
    "d": "SEUR is a Spanish shipments and express transport company.",
    "w": "https://www.seur.com",
    "i": "DPD.svg"
  },
  "SHE Media": {
    "d": "SHE Media is an ad network, which means that they basically serve as a coordinator between advertisers and publishers (bloggers).",
    "w": "https://www.shemedia.com",
    "i": "SHE Media.png"
  },
  "SIDEARM Sports": {
    "d": "SIDEARM Sports provides the software and technology that powers the websites, livestats, and video streaming for athletic programs North America.",
    "w": "https://sidearmsports.com/websites",
    "i": "SIDEARM Sports.png"
  },
  "SIMsite": {
    "w": "http://simgroep.nl/internet/portfolio-contentbeheer_41623/",
    "i": "SIMsite.png"
  },
  "SOBI 2": {
    "w": "http://www.sigsiu.net/sobi2.html",
    "i": "SOBI 2.png"
  },
  "SPDY": {
    "w": "http://chromium.org/spdy",
    "i": "SPDY.png"
  },
  "SPIP": {
    "d": "SPIP is a content management system written in PHP that uses one or more databases like SQL, SQLite or PostgreSQL.",
    "w": "http://www.spip.net",
    "i": "spip.svg"
  },
  "SPNEGO": {
    "d": "SPNEGO is an authentication method commonly used in Windows servers to allow NTLM or Kerberos authentication",
    "w": "https://tools.ietf.org/html/rfc4559"
  },
  "SQL Buddy": {
    "d": "SQL Buddy is an open-source web-based application written in PHP to handle the administration of MySQL and SQLite with the use of a Web browser.",
    "w": "http://www.sqlbuddy.com",
    "i": "SQL Buddy.png"
  },
  "SQLite": {
    "w": "http://www.sqlite.org",
    "i": "SQLite.png"
  },
  "STN Video": {
    "d": "STN Video is a online video platform that solves digital video for publishers, content creators, and advertisers.",
    "w": "https://www.stnvideo.com",
    "i": "STN Video.png"
  },
  "STUDIO": {
    "d": "STUDIO is a Japan-based company and SaaS application for designing and hosting websites. The service includes a visual editor with built-in CMS and analytics.",
    "w": "https://studio.design",
    "i": "STUDIO.svg"
  },
  "SUSE": {
    "d": "SUSE is a Linux-based server operating system.",
    "w": "http://suse.com",
    "i": "SUSE.png"
  },
  "SVG Support": {
    "d": "SVG Support is a WordPress plugin which allows you to safely upload SVG files to your media library and use them like any other image.",
    "w": "https://github.com/wp-plugins/svg-support",
    "i": "SVG Support.png"
  },
  "SWC": {
    "d": "SWC is an extensible Rust-based platform for the next generation of fast developer tools.",
    "w": "https://swc.rs",
    "i": "swc.svg"
  },
  "SWFObject": {
    "d": "SWFObject is an open-source JavaScript library used to embed Adobe Flash content onto web pages.",
    "w": "https://github.com/swfobject/swfobject",
    "i": "SWFObject.png"
  },
  "SaaSquatch": {
    "d": "SaaSquatch is a cloud-based loyalty, referral and rewards marketing platform.",
    "w": "https://www.saasquatch.com",
    "i": "SaaSquatch.svg"
  },
  "Saba.Host": {
    "d": "Saba.Host is a total web-hosting solutions. It provides shared hosting, WordPress hosting, dedicated server, virtual private server (VPS), SSL and more.",
    "w": "https://saba.host",
    "i": "Saba.Host.png"
  },
  "SabaVision": {
    "d": "SabaVision, one of the core products of SabaIdea, is Iran's largest online advertising agency.",
    "w": "https://www.sabavision.com",
    "i": "SabaVision.png"
  },
  "Saber": {
    "d": "Saber is a framework for building static websites.",
    "w": "https://saber.land/",
    "i": "Saber.svg"
  },
  "Sails.js": {
    "w": "http://sailsjs.org",
    "i": "Sails.js.svg"
  },
  "Sailthru": {
    "d": "Sailthru is a marketing automation software and multi-channel personalisation tool that serves ecommerce and media brands.",
    "w": "https://www.sailthru.com",
    "i": "Sailthru.svg"
  },
  "Sakai": {
    "d": "Sakai is a robust open-source learning management system created by higher ed for higher ed.",
    "w": "https://www.sakailms.org",
    "i": "Sakai.png"
  },
  "Sakura Internet": {
    "d": "Sakura Internet is a web hosting provider that has been operating for almost 30 years.",
    "w": "https://www.sakura.ad.jp",
    "i": "Sakura Internet.png"
  },
  "SaleCycle": {
    "d": "SaleCycle is a UK based global behavioral marketing firm.",
    "w": "https://www.salecycle.com",
    "i": "salecycle.svg"
  },
  "Saleor": {
    "d": "Saleor is a headless, GraphQL ecommerce platform.",
    "w": "https://saleor.io",
    "i": "Saleor.svg"
  },
  "SalesFire": {
    "d": "SalesFire is a SaaS company specialising in conversion rate optimisation, intelligent personalisation and on-site search solutions.",
    "w": "https://www.salesfire.co.uk",
    "i": "SalesFire.svg"
  },
  "SalesReps.io": {
    "d": "SalesReps.io is a sales representative performance and commission reporting software provider.",
    "w": "https://salesreps.io",
    "i": "SalesReps.io.png"
  },
  "Salesfloor": {
    "d": "Salesfloor is a mobile clienteling and virtual selling platform designed for store associates to connect with customers-beyond the store and a mpos platform for frictionless in-store experiences.",
    "w": "https://salesfloor.net",
    "i": "salesfloor.png"
  },
  "Salesforce": {
    "d": "Salesforce is a cloud computing service software (SaaS) that specializes in customer relationship management (CRM).",
    "w": "https://www.salesforce.com",
    "i": "Salesforce.svg"
  },
  "Salesforce Audience Studio": {
    "d": "Salesforce Audience Studio is a customer data marketplace that only other platform users can access.",
    "w": "https://www.salesforce.com/products/marketing-cloud/data-management",
    "i": "Salesforce.svg"
  },
  "Salesforce Commerce Cloud": {
    "d": "Salesforce Commerce Cloud is a cloud-based software-as-a-service (SaaS) ecommerce solution.",
    "w": "http://demandware.com",
    "i": "Salesforce.svg"
  },
  "Salesforce Desk": {
    "d": "Salesforce Desk(Desk.com) is software as a service (SaaS) tool on the help desk.",
    "w": "https://www.salesforce.com/solutions/small-business-solutions/help-desk-software/",
    "i": "Salesforce.svg"
  },
  "Salesforce Interaction Studio": {
    "d": "Salesforce Interaction Studio (formerly Evergage) is a cloud-based software that allows users to collect, analyze, and respond to user behavior on their websites and web applications in real-time.",
    "w": "https://www.salesforce.com/products/marketing-cloud/customer-interaction",
    "i": "Salesforce.svg"
  },
  "Salesforce Marketing Cloud Account Engagement": {
    "d": "Salesforce Marketing Cloud Account Engagement (formerly known as Pardot) is an application specifically designed for B2B marketing automation.",
    "w": "https://www.salesforce.com/products/marketing-cloud/marketing-automation",
    "i": "Salesforce.svg"
  },
  "Salesforce Marketing Cloud Email Studio": {
    "d": "Salesforce Marketing Cloud Email Studio is a powerful tool that allows you to build and send personalised emails.",
    "w": "https://www.salesforce.com/products/marketing-cloud/email-marketing",
    "i": "Salesforce.svg"
  },
  "Salesforce Service Cloud": {
    "d": "Salesforce Service Cloud is a customer relationship management (CRM) platform for customer service and support.",
    "w": "https://www.salesforce.com/au/products/service-cloud/",
    "i": "Salesforce.svg"
  },
  "Salesloft": {
    "d": "Salesloft is a cloud-based sales engagement platform.",
    "w": "https://salesloft.com",
    "i": "Salesloft.svg"
  },
  "Salesnauts": {
    "d": "Salesnauts is a fashion ecommerce platform.",
    "w": "https://salesnauts.com",
    "i": "Salesnauts.png"
  },
  "Salla": {
    "d": "Salla is an ecommerce platform.",
    "w": "https://salla.sa",
    "i": "Salla.svg"
  },
  "Salonist": {
    "d": "Salonist is a salon management software.",
    "w": "https://salonist.io",
    "i": "Salonist.png"
  },
  "Salsify": {
    "d": "Salsify is a product experience management platform which connects digital asset management, content syndication, and digital catalog capabilities.",
    "w": "https://www.salsify.com",
    "i": "Salsify.svg"
  },
  "Saly": {
    "d": "Saly is an enterprise-class B2B ecommerce platform. Dedicated to solving problems faced by manufacturers, wholesalers and distributors.",
    "w": "https://saly.pl",
    "i": "Saly.svg"
  },
  "Sana Commerce": {
    "d": "Sana Commerce is an ecommerce platform for SAP and Microsoft Dynamics.",
    "w": "https://www.sana-commerce.com",
    "i": "Sana Commerce.svg"
  },
  "Sanity": {
    "d": "Sanity is a platform for structured content. It comes with an open-source, headless CMS that can be customized with Javascript, a real-time hosted data store and an asset delivery pipeline.",
    "w": "https://www.sanity.io",
    "i": "Sanity.svg"
  },
  "Sapper": {
    "w": "https://sapper.svelte.dev",
    "i": "Sapper.svg"
  },
  "Sapren": {
    "d": "Sapren is a CMS produced by PHP, Laravel framework and MySQL.",
    "w": "https://www.sapren.net",
    "i": "Sapren.png"
  },
  "Sarka-SPIP": {
    "w": "http://sarka-spip.net",
    "i": "Sarka-SPIP.png"
  },
  "Sass": {
    "d": "Sass is an extension of CSS that enables you to use things like variables, nested rules, inline imports and more.",
    "w": "https://sass-lang.com",
    "i": "Sass.svg"
  },
  "Satori": {
    "d": "Satori provides marketing automation software.",
    "w": "https://satori.marketing",
    "i": "Satori.png"
  },
  "Satori Studio Bento": {
    "d": "Satori Studio Bento is a powerful yet user-friendly free WordPress theme intended for use in the broadest range of web projects.",
    "w": "https://satoristudio.net/bento-free-wordpress-theme",
    "i": "Satori Studio.svg"
  },
  "Sazito": {
    "w": "http://sazito.com",
    "i": "Sazito.svg"
  },
  "Scala": {
    "d": "Scala is a general-purpose programming language providing support for both object-oriented programming and functional programming.",
    "w": "http://www.scala-lang.org",
    "i": "Scala.png"
  },
  "Scalapay": {
    "d": "Scalapay is a payment method for e-commerce merchants in Europe that allows customers to buy now and pay later (BNPL).",
    "w": "https://www.scalapay.com/",
    "i": "Scalapay.svg"
  },
  "Scalefast": {
    "d": "Scalefast is an outsourced ecommerce solution designed to build and manage global ecommerce for brands, with customer loyalty programs.",
    "w": "https://www.scalefast.com",
    "i": "Scalefast.svg"
  },
  "ScandiPWA": {
    "d": "ScandiPWA is the next generation Magento 2 PWA theme developed in React.",
    "w": "https://scandipwa.com",
    "i": "ScandiPWA.png"
  },
  "Schedule Engine": {
    "d": "Schedule Engine is a customer support solution built for contractors.",
    "w": "https://www.scheduleengine.com/",
    "i": "Schedule Engine.svg"
  },
  "Scientific Linux": {
    "d": "Scientific Linux (SL) is a free open-source operating system based on Red Hat Enterprise Linux.",
    "w": "http://scientificlinux.org",
    "i": "Scientific Linux.png"
  },
  "Scissor Themes Writee": {
    "d": "Writee is an elegant free personal WordPress blog theme and well suited for personal, food, travel, fashion, corporate, or any other amazing blog.",
    "w": "https://www.scissorthemes.com/themes/writee-free",
    "i": "Scissor Themes.png"
  },
  "Scoop.it": {
    "d": "Scoop.it is a content marketing software company based in San Francisco which provide content curation platform.",
    "w": "https://www.scoop.it",
    "i": "Scoop.it.svg"
  },
  "Scorpion": {
    "d": "Scorpion is a marketing and technology provider.",
    "w": "https://www.scorpion.co/",
    "i": "Scorpion.svg"
  },
  "Scrivito": {
    "d": "Scrivito is a decoupled/headless enterprise web CMS.",
    "w": "https://www.scrivito.com",
    "i": "Scrivito.svg"
  },
  "ScrollMagic": {
    "d": "ScrollMagic is a jQuery plugin which essentially lets you use the scrollbar like a playback scrub control.",
    "w": "https://scrollmagic.io",
    "i": "ScrollMagic.png"
  },
  "Scully": {
    "d": "Scully is a static site generator for Angular projects looking to embrace the Jamstack.",
    "w": "https://scully.io",
    "i": "Scully.svg"
  },
  "SeQura": {
    "d": "SeQura is a FinTech company based in Barcelona, providing digital flexible payment solutions, with a geographical focus on Southern Europe and Latin America.",
    "w": "https://www.sequra.es",
    "i": "SeQura.svg"
  },
  "Seal Subscriptions": {
    "d": "Seal Subscriptions is a Shopify subscriptions app, packed with lots of features, such as automated product swaps, interval changes, payment calendar, Quick Checkout Wizard, and more.",
    "w": "https://www.sealsubscriptions.com",
    "i": "Seal Subscriptions.png"
  },
  "SeamlessCMS": {
    "w": "http://www.seamlesscms.com",
    "i": "SeamlessCMS.png"
  },
  "SearchFit": {
    "d": "Searchfit provides top ecommerce software, solutions and ecommerce website design for enterprise and mid-level retailers.",
    "w": "https://www.searchfit.com",
    "i": "SearchFit.svg"
  },
  "Searchanise": {
    "d": "Searchanise is a complete search and filter solution for ecommerce.",
    "w": "https://start.searchanise.com",
    "i": "Searchanise.svg"
  },
  "Searchspring": {
    "d": "Searchspring is a site search and merchandising platform designed to help ecommerce.",
    "w": "https://searchspring.com",
    "i": "Searchspring.svg"
  },
  "Secomapp": {
    "d": "Secomapp is a trusted Shopify Expert providing services through Shopify Apps.",
    "w": "https://www.secomapp.com",
    "i": "Secomapp.png"
  },
  "Sectigo": {
    "d": "Sectigo provides SSL certificate and computer security products.",
    "w": "https://sectigo.com/",
    "i": "Sectigo.svg"
  },
  "Section.io": {
    "d": "Section.io is a Content Delivery Network (CDN).",
    "w": "https://www.section.io",
    "i": "sectionio.svg"
  },
  "Sections.design Shopify App Optimization": {
    "d": "Sections.design Shopify App Optimization is a Shopify section written in liquid for the purpose of improving performance of Shopify stores by optimizing how Shopify app loads.",
    "w": "https://github.com/mirceapiturca/Sections/tree/master/App%20Optimization",
    "i": "Sections-Design.png"
  },
  "SeedProd Coming Soon": {
    "d": "SeedProd Coming Soon is a page builder allows you to add a new website under construction page to your WordPress site without hiring a developer.",
    "w": "https://www.seedprod.com/features/coming-soon-page-templates-for-wordpress",
    "i": "SeedProd.svg"
  },
  "Seers": {
    "w": "http://www.seersco.com",
    "i": "seersco.png"
  },
  "Segmanta": {
    "d": "Segmanta is a mobile-first survey platform designed for product feedback, brand awareness and concept testing research.",
    "w": "https://segmanta.com",
    "i": "Segmanta.png"
  },
  "Segment": {
    "d": "Segment is a customer data platform (CDP) that helps you collect, clean, and control your customer data.",
    "w": "https://segment.com",
    "i": "Segment.svg"
  },
  "Segment Consent Manager ": {
    "d": " Segment Consent Manager is a tool that automates the process of requesting consent for data usage, stores data on user privacy preferences, and updates these preferences when users request changes.",
    "w": "https://segment.com/blog/how-to-build-consent-management-into-your-site-in-less-than-a-week",
    "i": "Segment.svg"
  },
  "SegmentStream": {
    "d": "SegmentStream is a AI-powered marketing analytics platform built for data-driven CMOs, web analysts and performance marketing teams.",
    "w": "https://segmentstream.com",
    "i": "SegmentStream.svg"
  },
  "Seko OmniReturns": {
    "d": "Seko OmniReturns is an online portal used on ecommerce websites for customers to create returns and shipping labels globally. Seko is a global logistics company offering both the technology and reverse logistics.",
    "w": "https://www.sekologistics.com/us/global-cross-border-returns",
    "i": "Seko OmniReturns.png"
  },
  "Select2": {
    "d": "Select2 is a jQuery based replacement for select boxes. It supports searching, remote data sets, and infinite scrolling of results.",
    "w": "https://select2.org/",
    "i": "Select2.png"
  },
  "Selectize": {
    "d": "Selectize is an extensible jQuery-based custom <select> UI control.",
    "w": "https://selectize.dev",
    "i": "Selectize.svg"
  },
  "Sellacious": {
    "d": "Sellacious is an open-source ecommerce and marketplace platform for integrated POS and online stores.",
    "w": "https://www.sellacious.com",
    "i": "Sellacious.png"
  },
  "Selldone": {
    "d": "Selldone is an all-in-one, ready-to-use ecommerce platform.",
    "w": "https://selldone.com",
    "i": "Selldone.svg"
  },
  "Sellfy": {
    "d": "Sellfy is an ecommerce platform designed specifically for selling digital products, such as music, illustrations, photos, books or videos in digital files.",
    "w": "https://sellfy.com",
    "i": "Sellfy.svg"
  },
  "Sellingo": {
    "d": "Sellingo is a Polish ecommerce platform.",
    "w": "https://sellingo.pl",
    "i": "Sellingo.svg"
  },
  "Sellix": {
    "d": "Sellix is an ecommerce payment processor. It accepts PayPal, PerfectMoney and popular cryptocurrencies.",
    "w": "https://sellix.io/",
    "i": "Sellix.svg"
  },
  "Sellsy": {
    "d": "Sellsy is a cloud-based sales management solution for small to midsize businesses",
    "w": "https://go.sellsy.com",
    "i": "Sellsy.svg"
  },
  "Selly": {
    "d": "Selly is an ecommerce platform for selling digital goods.",
    "w": "https://selly.io/",
    "i": "Selly.svg"
  },
  "Semantic UI": {
    "d": "Semantic UI is a front-end development framework, powered by LESS and jQuery.",
    "w": "https://semantic-ui.com/",
    "i": "Semantic-ui.png"
  },
  "Sematext Experience": {
    "d": "Sematext Experience for Real User Monitoring Analyze data collected from real-user sessions, detect anomalies, send alerts in real-time, and enhance overall customer digital experience.",
    "w": "https://sematext.com/experience",
    "i": "Sematext.svg"
  },
  "Semplice": {
    "d": "Semplice is a Wordpress-based website builder made by designers for designers.",
    "w": "https://www.semplice.com",
    "i": "Semplice.svg"
  },
  "Sencha Touch": {
    "d": "Sencha Touch is a user interface (UI) JavaScript library, or web framework, specifically built for the Mobile Web.",
    "w": "http://www.sencha.com/products/touch",
    "i": "Sencha Touch.png"
  },
  "SendPulse": {
    "d": "SendPulse is an email marketing platform with additional channels: SMS, web push notifications, Facebook and WhatsApp chatbots.",
    "w": "https://sendpulse.com",
    "i": "SendPulse.svg"
  },
  "Sendgrid": {
    "d": "SendGrid is a cloud-based email delivery platform for transactional and marketing emails.",
    "w": "https://sendgrid.com/",
    "i": "SendGrid.svg"
  },
  "Sendinblue": {
    "d": "Sendinblue is an email marketing solution for small and medium-sized businesses that want to send and automate email marketing campaigns.",
    "w": "https://www.sendinblue.com",
    "i": "Sendinblue.svg"
  },
  "Sensors Data": {
    "w": "https://www.sensorsdata.cn",
    "i": "Sensors Data.svg"
  },
  "Sentry": {
    "d": "Sentry is an open-source platform for workflow productivity, aggregating errors from across the stack in real time.",
    "w": "https://sentry.io/",
    "i": "Sentry.svg"
  },
  "Seravo": {
    "w": "https://seravo.com",
    "i": "Seravo.svg"
  },
  "Serendipity": {
    "w": "http://s9y.org",
    "i": "Serendipity.png"
  },
  "Service Management Group": {
    "d": "Service Management Group offers customer experience measurement, employee engagement, social monitoring, publishing, and brand research services.",
    "w": "https://www.smg.com",
    "i": "Service Management Group.png"
  },
  "Service Provider Pro": {
    "d": "Service Provider Pro is a client management & billing software for productized service agencies.",
    "w": "https://spp.co",
    "i": "Service Provider Pro.svg"
  },
  "ServiceNow": {
    "d": "ServiceNow is a cloud computing platform to help companies manage digital workflows for enterprise operations.",
    "w": "https://www.servicenow.com",
    "i": "ServiceNow.svg"
  },
  "Setmore": {
    "d": "Setmore is a cloud-based appointment scheduling solution.",
    "w": "https://www.setmore.com",
    "i": "Setmore.svg"
  },
  "SevenRooms": {
    "d": "SevenRooms is an fully-integrated reservation, seating and restaurant management system.",
    "w": "https://sevenrooms.com",
    "i": "SevenRooms.svg"
  },
  "Sezzle": {
    "d": "Sezzle offers a buy-now-pay-later solution.",
    "w": "https://sezzle.com/",
    "i": "Sezzle.svg"
  },
  "Shaka Player": {
    "d": "Shaka Player is an open-source JavaScript library for adaptive media.",
    "w": "https://github.com/shaka-project/shaka-player",
    "i": "Shaka Player.png"
  },
  "Shanon": {
    "d": "Shanon provides marketing automation software.",
    "w": "https://www.shanon.co.jp",
    "i": "Shanon.svg"
  },
  "Shapecss": {
    "w": "https://shapecss.com",
    "i": "Shapecss.svg"
  },
  "ShareThis": {
    "d": "ShareThis provides free engagement and growth tools (e.g., share buttons, follow buttons, and reaction buttons) for site owners.",
    "w": "http://sharethis.com",
    "i": "ShareThis.png"
  },
  "Shareaholic": {
    "d": "Shareaholic is a all-in-one content amplification and monetisation platform.",
    "w": "https://www.shareaholic.com/",
    "i": "shareaholic.svg"
  },
  "Sharethrough": {
    "d": "Sharethrough is a software company that powers in-feed advertising for brands and publishers.",
    "w": "https://www.sharethrough.com",
    "i": "Sharethrough.svg"
  },
  "Sharetribe": {
    "d": "Sharetribe is cloud-based platform for small to medium businesses, which helps businesses to create and manage custom online marketplaces.",
    "w": "https://www.sharetribe.com",
    "i": "Sharetribe.svg"
  },
  "SharpSpring": {
    "d": "SharpSpring is a cloud-based marketing tool that offers customer relationship management, marketing automation, mobile and social marketing, sales team automation, customer service and more, all within one solution.",
    "w": "https://sharpspring.com",
    "i": "SharpSpring.png"
  },
  "SharpSpring Ads": {
    "d": "SharpSpring Ads is an all-in-one retargeting platform.",
    "w": "https://sharpspring.com/ads",
    "i": "SharpSpring.png"
  },
  "SheerID": {
    "d": "SheerID is a highly specialised solution offering online verification support for retailers, marketers and service providers.",
    "w": "https://www.sheerid.com/",
    "i": "SheerID.png"
  },
  "Shelf": {
    "d": "Shelf is a server framework for Dart.",
    "w": "https://pub.dev/packages/shelf",
    "i": "Dart.svg"
  },
  "ShellInABox": {
    "d": "Shell In A Box implements a web server that can export arbitrary command line tools to a web based terminal emulator.",
    "w": "http://shellinabox.com",
    "i": "ShellInABox.png"
  },
  "Shift4Shop": {
    "d": "Shift4Shop, formerly known as 3Dcart, is an ecommerce software provider for online businesses.",
    "w": "https://www.shift4shop.com",
    "i": "Shift4Shop.svg"
  },
  "Shiny": {
    "w": "https://shiny.rstudio.com",
    "i": "Shiny.png"
  },
  "ShinyStat": {
    "w": "http://shinystat.com",
    "i": "ShinyStat.png"
  },
  "ShipTection": {
    "d": "ShipTection is the easiest way to offer shipping protection on your Shopify site.",
    "w": "https://wamapps.io/pages/shiptection-protection",
    "i": "ShipTection.png"
  },
  "ShippyPro": {
    "d": "ShippyPro is the complete shipping software for ecommerce that helps worldwide merchants to ship, track, and manage returns for their orders.",
    "w": "https://www.shippypro.com",
    "i": "ShippyPro.png"
  },
  "Shoefitr.io": {
    "d": "Shoefitr.io is data-based shoe size advice service where we measure the length, width, ball, and instep.",
    "w": "https://www.shoefitr.io",
    "i": "Shoefitr.io.svg"
  },
  "Shogun Frontend": {
    "d": "Shogun Frontend is an all-in-one ecommerce frontend platform. Shogun Frontend pairs with leading backends: Shopify, BigCommerce, Magento (Adobe Commerce), and more.",
    "w": "https://getshogun.com/frontend",
    "i": "Shogun Frontend.svg"
  },
  "Shogun Landing Page Builder": {
    "d": "Shogun Landing Page Builder is a drag and drop Shopify page builder for creating high-converting store pages.",
    "w": "https://apps.shopify.com/shogun",
    "i": "Shogun Page Builder.svg"
  },
  "Shogun Page Builder": {
    "d": "Shogun is a page builder commonly used with headless implementations.",
    "w": "https://getshogun.com/page-builder",
    "i": "Shogun Page Builder.svg"
  },
  "Shop Pay": {
    "d": "Shop Pay is an accelerated checkout that lets customers save their email address, credit card, and shipping and billing information so they can complete their transaction faster the next time they are directed to the Shopify checkout.",
    "w": "https://shop.app",
    "i": "Shop Pay.svg"
  },
  "Shop Pay Installments": {
    "d": "Shop Pay Installments allows customers to pay for orders between 50 USD and 3,000 USD in 4 interest-free installments.",
    "w": "https://shoppay.affirm.com",
    "i": "Shop Pay.svg"
  },
  "ShopBase": {
    "d": " ShopBase is a cross-border ecommerce platform for all Dropshipping/Print-on-Demand novices and experienced merchants.",
    "w": "https://www.shopbase.com",
    "i": "ShopBase.svg"
  },
  "ShopGold": {
    "d": "ShopGold is an all-in-one payment processing and ecommerce solution.",
    "w": "https://www.shopgold.pl",
    "i": "ShopGold.svg"
  },
  "ShopPad Infinite Options": {
    "d": "ShopPad Infinite Options allows you to create as many custom option fields for your product pages as you need.",
    "w": "https://apps.shopify.com/custom-options",
    "i": "ShopPad.svg"
  },
  "ShopWired": {
    "d": "ShopWired is a UK based, fully hosted ecommerce platform that is focused on the UK market.",
    "w": "https://www.shopwired.co.uk",
    "i": "ShopWired.svg"
  },
  "Shopaholic": {
    "d": "Shopaholic is an open-source ecosystem of plugins and themes for rapid ecommerce website development that allows building projects from small to large online shops.",
    "w": "https://shopaholic.one",
    "i": "Shopaholic.svg"
  },
  "Shopapps": {
    "d": "Shopapps is a trusted Shopify Expert providing services through Shopify Apps.",
    "w": "http://www.shopapps.in",
    "i": "Shopapps.png"
  },
  "Shopatron": {
    "w": "http://ecommerce.shopatron.com",
    "i": "Shopatron.png"
  },
  "Shopcada": {
    "w": "http://shopcada.com",
    "i": "Shopcada.png"
  },
  "Shoper": {
    "w": "https://www.shoper.pl",
    "i": "Shoper.svg"
  },
  "Shopery": {
    "w": "http://shopery.com",
    "i": "Shopery.svg"
  },
  "Shopfa": {
    "w": "https://shopfa.com",
    "i": "Shopfa.svg"
  },
  "ShopiMind": {
    "d": "ShopiMind is a multi-channel marketing automation solution for all ecommerce activities.",
    "w": "https://www.shopimind.com",
    "i": "ShopiMind.svg"
  },
  "Shopify": {
    "d": "Shopify is a subscription-based software that allows anyone to set up an online store and sell their products. Shopify store owners can also sell in physical locations using Shopify POS, a point-of-sale app and accompanying hardware.",
    "w": "http://shopify.com",
    "i": "Shopify.svg"
  },
  "Shopify Buy Button": {
    "d": "Shopify Buy Button is an app from Shopify which allows merchant to embed buy functionality for any product or collection into another website or blog.",
    "w": "https://apps.shopify.com/buy-button",
    "i": "Shopify.svg"
  },
  "Shopify Chat": {
    "d": "Shopify Chat is Shopify's native live chat function that allows you to have real-time conversations with customers visiting your Shopify store.",
    "w": "https://www.shopify.com/inbox",
    "i": "Shopify.svg"
  },
  "Shopify Consent Management": {
    "d": "Shopify Consent Management let's you create a tracking consent banner for EU customers.",
    "w": "https://apps.shopify.com/customer-privacy-banner",
    "i": "Shopify.svg"
  },
  "Shopify Geolocation App": {
    "d": "Shopify Geolocation App makes language and country recommendations to your customers based on their geographic location and browser or device language.",
    "w": "https://apps.shopify.com/geolocation",
    "i": "Shopify Geolocation App.png"
  },
  "Shopify Product Reviews": {
    "d": "Shopify Product reviews allows you to add a customer review feature to your products.",
    "w": "https://apps.shopify.com/product-reviews",
    "i": "Shopify.svg"
  },
  "Shopistry": {
    "d": "Shopistry is a data-driven, headless customer management system.",
    "w": "https://www.shopistry.com/",
    "i": "Shopistry.png"
  },
  "Shoplazza": {
    "d": "Shoplazza is a SaaS ecommerce platform.",
    "w": "https://www.shoplazza.com",
    "i": "Shoplazza.svg"
  },
  "Shopline": {
    "d": "Shopline provides solutions for merchants to set up an online store.",
    "w": "https://shoplineapp.com/",
    "i": "Shopline.svg"
  },
  "Shoplo": {
    "d": "Shoplo is an all-in-one ecommerce platform.",
    "w": "https://www.shoplo.com",
    "i": "Shoplo.svg"
  },
  "Shopmatic": {
    "d": "Shopmatic is an ecommerce website builder.",
    "w": "https://goshopmatic.com",
    "i": "Shopmatic.svg"
  },
  "Shoporama": {
    "w": "https://www.shoporama.dk",
    "i": "Shoporama.svg"
  },
  "Shoppiko": {
    "d": "Shoppiko is an ecommerce platform solution in India, which provides ecommerce website or ecommerce mobile application.",
    "w": "https://shoppiko.com",
    "i": "Shoppiko.png"
  },
  "ShoppingFeeder": {
    "d": "ShoppingFeeder is a feed management solution for online retailers.",
    "w": "https://sfdr.co",
    "i": "ShoppingFeeder.png"
  },
  "ShoppingGives": {
    "d": "ShoppingGives is a B2B social ecommerce platform that allows companies of all sizes to make charitable donations through their customers' purchases.",
    "w": "https://shoppinggives.com",
    "i": "ShoppingGives.png"
  },
  "Shoppy": {
    "d": "Shoppy is an all-in-one payment processing and ecommerce solution.",
    "w": "https://shoppy.gg",
    "i": "Shoppy.svg"
  },
  "Shoprenter": {
    "d": "Shoprenter offers a platform for building and running an ecommerce store.",
    "w": "https://www.shoprenter.hu",
    "i": "Shoprenter.svg"
  },
  "Shoprunner": {
    "d": "ShopRunner is a service offering consumers free two-day shipping and returns on online orders placed with certain retailers.",
    "w": "https://www.shoprunner.com",
    "i": "Shoprunner.png"
  },
  "Shoptet": {
    "d": "Shoptet is an ecommerce solutions from store builder, inventory management of online payments.",
    "w": "http://www.shoptet.cz",
    "i": "Shoptet.svg"
  },
  "Shopware": {
    "d": "Shopware is an enterprise-level ecommerce platform.",
    "w": "https://www.shopware.com",
    "i": "Shopware.svg"
  },
  "ShortPixel Image Optimizer": {
    "d": "ShortPixel Image Optimizer is a lightweight WordPress plugin that can compress all of your site's images and PDF documents.",
    "w": "https://shortpixel.com",
    "i": "ShortPixel.svg"
  },
  "Shortcodes Ultimate": {
    "d": "Shortcodes Ultimate is a comprehensive collection of visual components for WordPress.",
    "w": "https://getshortcodes.com",
    "i": "Shortcodes Ultimate.svg"
  },
  "Shortly": {
    "d": "Shortly help create short URLs for influencer-marketing, social media posts & email-marketing campaigns with your own store domain.",
    "w": "https://apps.shopify.com/shortly",
    "i": "Shortly.png"
  },
  "ShoutOut": {
    "d": "ShoutOut is a multi-level marketing SaaS solution that allows tracking of affiliates.",
    "w": "https://www.shoutout.global",
    "i": "ShoutOut.png"
  },
  "Showit": {
    "d": "Showit is a drag-and-drop, no-code website builder for photographers and creative professionals.",
    "w": "https://showit.co",
    "i": "Showit.svg"
  },
  "Shuttle": {
    "d": "Shuttle is a website development platform.",
    "w": "https://www.devisto.com",
    "i": "Devisto.svg"
  },
  "Sift": {
    "d": "Sift is a CA-based fraud prevention company.",
    "w": "https://sift.com/",
    "i": "Sift.svg"
  },
  "Signal": {
    "d": "Signal is a cross-platform encrypted messaging service.",
    "w": "https://www.signal.co/",
    "i": "signal.png"
  },
  "Signifyd": {
    "d": "Signifyd is a provider of an enterprise-grade fraud technology solution for ecommerce stores.",
    "w": "https://www.signifyd.com",
    "i": "Signifyd.svg"
  },
  "SilverStripe": {
    "d": "Silverstripe CMS is a free and open source Content Management System and Framework for creating and maintaining websites and web applications.",
    "w": "https://www.silverstripe.org/",
    "i": "SilverStripe.svg"
  },
  "Simbel": {
    "w": "http://simbel.com.ar/",
    "i": "simbel.svg"
  },
  "Simon": {
    "d": "Simon is a customer data platform (CDP) that helps you collect, clean, and control your customer data.",
    "w": "https://www.simondata.com/",
    "i": "Simon.svg"
  },
  "Simpl": {
    "d": "Simpl is a fintech company that offers a cardless payment network with multiple solutions for merchants and consumers.",
    "w": "https://getsimpl.com",
    "i": "Simpl.svg"
  },
  "Simple Analytics": {
    "d": "Simple Analytics is a privacy-friendly Google Analytics alternative.",
    "w": "https://simpleanalytics.com",
    "i": "Simple Analytics.svg"
  },
  "Simple Machines Forum": {
    "d": "Simple Machines Forum is a free open-source software, used for community forums and is written in PHP.",
    "w": "http://www.simplemachines.org",
    "i": "Simple Machines Forum.png"
  },
  "SimpleHTTP": {
    "w": "http://example.com"
  },
  "SimpleSAMLphp": {
    "d": "SimpleSAMLphp is an open-source PHP authentication application that provides support for SAML 2.0 as a Service Provider (SP) or Identity Provider (IdP).",
    "w": "https://simplesamlphp.org",
    "i": "default.svg"
  },
  "Simplero": {
    "d": "Simplero is an all-in-one marketing software.",
    "w": "https://simplero.com",
    "i": "Simplero.svg"
  },
  "Simplero Websites": {
    "d": "Simplero Websites are a learning management system which suited for courses, coaching programs, memberships and digital products by Simplero.",
    "w": "https://simplero.com/websites",
    "i": "Simplero.svg"
  },
  "Simpli.fi": {
    "d": "Simpli.fi is a programmatic advertising and agency management software.",
    "w": "https://simpli.fi/",
    "i": "Simplifi.png"
  },
  "Simplio Upsells": {
    "d": "Simplio Upsells сreate more revenue with promotions and post purchase upsells.",
    "w": "https://apps.shopify.com/simple-promotions-and-upsells",
    "i": "Simplio Upsells.png"
  },
  "Simplo7": {
    "d": "Simplo7 is an all-in-one ecommerce product.",
    "w": "https://www.simplo7.com.br",
    "i": "Simplo7.svg"
  },
  "Simplébo": {
    "w": "https://www.simplebo.fr",
    "i": "Simplebo.png"
  },
  "Simvoly": {
    "d": "Simvoly is a drag-and-drop website builder for small and medium-sized businesses, agencies, and freelancers.",
    "w": "https://simvoly.com",
    "i": "Simvoly.png"
  },
  "Sinatra": {
    "d": "Sinatra is a lightweight and highly customizable multi-purpose WordPress theme.",
    "w": "https://try.sinatrawp.com",
    "i": "Sinatra.png"
  },
  "Sirclo": {
    "d": "Sirclo offers online business solutions.",
    "w": "https://sirclo.com/",
    "i": "Sirclo.svg"
  },
  "Sirdata": {
    "d": "Sirdata is a self-service, third party data-collecting platform that specialises in the collection of behavioural data, predictive targeting and selling of audience segments.",
    "w": "https://www.sirdata.com",
    "i": "Sirdata.svg"
  },
  "Site Kit": {
    "d": "Site Kit is a one-stop solution for WordPress users to use everything Google has to offer to make them successful on the web.",
    "w": "https://sitekit.withgoogle.com/",
    "i": "Google.svg"
  },
  "Site Meter": {
    "w": "http://www.sitemeter.com",
    "i": "Site Meter.png"
  },
  "Site Search 360": {
    "d": "Site Search 360 is a site search as a service solution.",
    "w": "https://www.sitesearch360.com/",
    "i": "Site Search 360.svg"
  },
  "Site24x7": {
    "d": "Site24x7 is a cloud-based website and server monitoring platform.",
    "w": "https://www.site24x7.com",
    "i": "Site24x7.png"
  },
  "SiteEdit": {
    "w": "http://www.siteedit.ru",
    "i": "SiteEdit.png"
  },
  "SiteGround": {
    "d": "SiteGround is a web hosting service.",
    "w": "https://www.siteground.com",
    "i": "siteground.svg"
  },
  "SiteGuard WP Plugin": {
    "d": "SiteGurad WP Plugin is the plugin specialised for the protection against the attack to the management page and login.",
    "w": "https://www.jp-secure.com/siteguard_wp_plugin_en",
    "i": "SiteGuard WP Plugin.png"
  },
  "SiteJabber": {
    "d": "Sitejabber is the leading destination for customer ratings and reviews of businesses. Consumers find ratings and read reviews to ensure they buy from the best companies.",
    "w": "https://www.sitejabber.com/",
    "i": "SiteJabber.svg"
  },
  "SiteManager": {
    "d": "SiteManager is a collaborative no-code/low-code web design platform for agencies and marketing teams.",
    "w": "https://www.sitemanager.io",
    "i": "SiteManager.svg"
  },
  "SiteMinder": {
    "d": "SiteMinder is a appointment booking solution designed for hotels.",
    "w": "https://www.siteminder.com",
    "i": "SiteMinder.svg"
  },
  "SiteOrigin Page Builder": {
    "d": "Page Builder by SiteOrigin makes it easy to build responsive grid-based page content that adapts to mobile devices with pixel perfect accuracy.",
    "w": "https://siteorigin.com/page-builder",
    "i": "SiteOrigin.svg"
  },
  "SiteOrigin Vantage": {
    "d": "SiteOrigin Vantage is a response, multi-purpose theme carefully developed with seamless integration into an array of amazing third-party plugins.",
    "w": "https://siteorigin.com/theme/vantage",
    "i": "SiteOrigin.svg"
  },
  "SiteOrigin Widgets Bundle": {
    "d": "SiteOrigin Widgets Bundle is a WordPress plugin that gives you all the elements you need to build modern, responsive, and engaging website pages.",
    "w": "https://siteorigin.com/widgets-bundle",
    "i": "SiteOrigin.svg"
  },
  "SitePad": {
    "d": "SitePad is a WYSIWYG drag and drop website building and maintenance program.",
    "w": "https://sitepad.com",
    "i": "SitePad.png"
  },
  "SiteSpect": {
    "d": "SiteSpect is the A/B testing and optimisation solution.",
    "w": "https://www.sitespect.com",
    "i": "SiteSpect.png"
  },
  "SiteVibes": {
    "d": "SiteVibes is a cloud-based user generated content and visual marketing platform.",
    "w": "https://sitevibes.com",
    "i": "SiteVibes.png"
  },
  "SiteW": {
    "d": "SiteW is a French-based company that offers a website building service.",
    "w": "https://www.en.sitew.com",
    "i": "SiteW.svg"
  },
  "Sitecore": {
    "d": "Sitecore provides web content management, and multichannel marketing automation software.",
    "w": "https://www.sitecore.com/",
    "i": "Sitecore.svg"
  },
  "Sitefinity": {
    "d": "Sitefinity is a content management system (CMS) that you use to create, store, manage, and present content on your website.",
    "w": "http://www.sitefinity.com",
    "i": "Sitefinity.svg"
  },
  "Siteglide": {
    "d": "SiteGlide is a Digital Experience Platform (DEP) for ecommerce stores, membership sites and customer portals.",
    "w": "https://www.siteglide.com",
    "i": "Siteglide.svg"
  },
  "Siteimprove": {
    "d": "Siteimprove is a digital analytics and content QA platform.",
    "w": "https://www.siteimprove.com",
    "i": "Siteimprove.svg"
  },
  "Sitepark IES": {
    "d": "Sitepark IES is a content management system written in PHP and paired with a MySQL database.",
    "w": "https://www.sitepark.com/oeffentlicher-sektor/produkte/cms-technologie.php",
    "i": "Sitepark.png"
  },
  "Sitepark InfoSite": {
    "d": "Sitepark InfoSite is a content management system and complete application of Sitepark IES which written in PHP and paired with a MySQL database.",
    "w": "https://www.sitepark.com/mittelstand/content-management-system/index.php",
    "i": "Sitepark.png"
  },
  "Sitevision CMS": {
    "d": "Sitevision CMS is a platform for web publishing that consists of flexible and pre-made modules. Available as self-hosed software and Cloud SaaS.",
    "w": "https://www.sitevision.se",
    "i": "Sitevision CMS.png"
  },
  "Sivuviidakko": {
    "w": "http://sivuviidakko.fi",
    "i": "Sivuviidakko.png"
  },
  "Sizebay": {
    "d": "Sizebay is a virtual fitting room that helps ecommerce and even brick-and-mortar stores provide their shoppers with a personalised shopping.",
    "w": "https://sizebay.com",
    "i": "Sizebay.svg"
  },
  "Sizmek": {
    "w": "http://sizmek.com",
    "i": "Sizmek.png"
  },
  "Skai": {
    "d": "Skai (formerly Kenshoo) is a marketing activation solution for brands and agencies.",
    "w": "https://skai.io",
    "i": "Skai.svg"
  },
  "Skedify": {
    "d": "Skedify is an appointment booking solution created for enterprises.",
    "w": "https://calendly.com/",
    "i": "Skedify.svg"
  },
  "Skilldo": {
    "d": "Skilldo is a content management system written in PHP and paired with a MySQL or MariaDB database.",
    "w": "https://developers.sikido.vn/docs/cms/",
    "i": "Skilldo.png"
  },
  "Skilljar": {
    "d": "Skilljar is a B2B customer training platform and learning management system.",
    "w": "https://www.skilljar.com/",
    "i": "skilljar.svg"
  },
  "Skimlinks": {
    "d": "Skimlinks is a content monetization platform for online publishers.",
    "w": "https://skimlinks.com",
    "i": "Skimlinks.svg"
  },
  "Skio": {
    "d": "Skio helps brands on Shopify sell subscriptions without ripping their hair out.",
    "w": "https://skio.com",
    "i": "Skio.png"
  },
  "Sky-Shop": {
    "d": "Sky-Shop.pl is a platform for dropshipping an online sales on Allegro, eBay and Amazon.",
    "w": "https://sky-shop.pl",
    "i": "Sky-Shop.svg"
  },
  "SkyVerge": {
    "d": "SkyVerge  is a company which develop extension tools for WooCommerce stores.",
    "w": "https://www.skyverge.com",
    "i": "SkyVerge.svg"
  },
  "Sleeknote": {
    "d": "Sleeknote is a cloud-based software that helps online businesses reach conversion goals through website popups.",
    "w": "https://sleeknote.com",
    "i": "Sleeknote.svg"
  },
  "Slice": {
    "d": "Slice is an online food ordering platform for independent pizzerias.",
    "w": "https://slicelife.com/owners",
    "i": "Slice.svg"
  },
  "Slick": {
    "w": "https://kenwheeler.github.io/slick",
    "i": "Slick.svg"
  },
  "SlickStack": {
    "d": "SlickStack is a free LEMP stack automation script written in Bash designed to enhance and simplify WordPress provisioning, performance, and security.",
    "w": "https://slickstack.io",
    "i": "SlickStack.png"
  },
  "Slider Revolution": {
    "d": "Slider Revolution is a flexible and highly customisable slider.",
    "w": "https://www.sliderrevolution.com",
    "i": "Slider Revolution.svg"
  },
  "Slimbox": {
    "w": "http://www.digitalia.be/software/slimbox",
    "i": "Slimbox.png"
  },
  "Slimbox 2": {
    "w": "http://www.digitalia.be/software/slimbox2",
    "i": "Slimbox 2.png"
  },
  "Smart Ad Server": {
    "d": "Smart Ad Server is an adserving and RTB platform.",
    "w": "http://smartadserver.com",
    "i": "Smart Ad Server.svg"
  },
  "Smart Slider 3": {
    "d": "Smart Slider 3 is a responsive, SEO optimised WordPress plugin.",
    "w": "https://smartslider3.com",
    "i": "Smart Slider 3.svg"
  },
  "SmartRecruiters": {
    "d": "SmartRecruiters is a web-based talent acquisition platform.",
    "w": "https://www.smartrecruiters.com",
    "i": "SmartRecruiters.png"
  },
  "SmartSite": {
    "w": "http://www.seneca.nl/pub/Smartsite/Smartsite-Smartsite-iXperion",
    "i": "SmartSite.png"
  },
  "SmartWeb": {
    "d": "SmartWeb is an ecommerce platform from Denmark.",
    "w": "https://www.smartweb.dk",
    "i": "SmartWeb.png"
  },
  "Smarter Click": {
    "d": "Smarter Click is a marketing technology company.",
    "w": "https://smarterclick.com",
    "i": "Smarter Click.png"
  },
  "Smartling": {
    "d": "Smartling is a cloud-based translation management system.",
    "w": "https://www.smartling.com",
    "i": "Smartling.svg"
  },
  "Smartlook": {
    "d": "Smartlook is a qualitative analytics solution for websites and mobile apps.",
    "w": "https://www.smartlook.com",
    "i": "Smartlook.svg"
  },
  "Smartstore": {
    "d": "Smartstore is an open-source ecommerce system with CMS capabilities.",
    "w": "https://www.smartstore.com",
    "i": "Smartstore.png"
  },
  "Smartstore Page Builder": {
    "w": "https://www.smartstore.com",
    "i": "Smartstore.png"
  },
  "Smartstore biz": {
    "w": "http://smartstore.com",
    "i": "Smartstore.biz.png"
  },
  "Smartsupp": {
    "d": "Smartsupp is a live chat tool that offers visitor recording feature.",
    "w": "https://www.smartsupp.com",
    "i": "Smartsupp.svg"
  },
  "Smash Balloon Instagram Feed": {
    "d": "Instagram Feed displays Instagram posts from your Instagram accounts, either in the same single feed or in multiple different ones. Created by Smash Balloon.",
    "w": "https://smashballoon.com/instagram-feed",
    "i": "Smash Balloon.svg"
  },
  "Smile": {
    "d": "Smile is a provider of ecommerce loyalty programs.",
    "w": "https://smile.io",
    "i": "Smile.svg"
  },
  "Smile App": {
    "d": "Smile App offers a loyalty program for Shopify stores.",
    "w": "https://apps.shopify.com/smile-io",
    "i": "Smile.svg"
  },
  "SmtpJS": {
    "d": "SmtpJS is a free library you can use for sending emails from JavaScript.",
    "w": "https://smtpjs.com",
    "i": "default.svg"
  },
  "SmugMug": {
    "d": "SmugMug is a paid image sharing, image hosting service, and online video platform on which users can upload photos and videos.",
    "w": "https://www.smugmug.com",
    "i": "SmugMug.svg"
  },
  "Snap": {
    "w": "http://snapframework.com",
    "i": "Snap.png"
  },
  "Snap Pixel": {
    "d": "Snap Pixel is a piece of JavaScript code that helps advertisers measure the cross-device impact of campaigns.",
    "w": "https://businesshelp.snapchat.com/s/article/snap-pixel-about",
    "i": "Snap Pixel.svg"
  },
  "Snap.svg": {
    "w": "http://snapsvg.io",
    "i": "Snap.svg.svg"
  },
  "SnapEngage": {
    "d": "SnapEngage is a live chat solution that caters to businesses across various industries.",
    "w": "https://snapengage.com/",
    "i": "SnapEngage.svg"
  },
  "SnapWidget": {
    "d": "SnapWidget is a set of interactive Instagram, Twitter and 500px widgets.",
    "w": "https://snapwidget.com",
    "i": "SnapWidget.svg"
  },
  "Snipcart": {
    "d": "Snipcart is a shopping cart platform that can be integrated into any website with simple HTML and JavaScript.",
    "w": "https://snipcart.com",
    "i": "Snipcart.svg"
  },
  "SniperFast": {
    "d": "SniperFast is instant search system for ecommerce sites.",
    "w": "https://www.sniperfast.com",
    "i": "SniperFast.png"
  },
  "Sniply": {
    "d": "Sniply is a special URL shortener that allows to add a call-to-action to any landing page.",
    "w": "https://sniply.io",
    "i": "Sniply.svg"
  },
  "Snoobi": {
    "w": "http://www.snoobi.com",
    "i": "Snoobi.png"
  },
  "Snowplow Analytics": {
    "d": "Snowplow is an open-source behavioral data management platform for businesses.",
    "w": "https://snowplowanalytics.com",
    "i": "Snowplow.svg"
  },
  "SobiPro": {
    "w": "http://sigsiu.net/sobipro.html",
    "i": "SobiPro.png"
  },
  "Social9": {
    "d": "Social9 is a social sharing widgets and plugins.",
    "w": "https://social9.com",
    "i": "Social9.svg"
  },
  "SocialJuice": {
    "d": "SocialJuice is a simple tool to collect video testimonials or textual testimonials from your clients.",
    "w": "https://socialjuice.io",
    "i": "SocialJuice.svg"
  },
  "SocialLadder": {
    "d": "SocialLadder is a complete end-to-end creator management solution for brands looking to maximize and scale their brand ambassador, influencer, and affiliate marketing efforts.",
    "w": "https://socialladderapp.com",
    "i": "SocialLadder.png"
  },
  "Socket.io": {
    "w": "https://socket.io",
    "i": "Socket.io.svg"
  },
  "SoftTr": {
    "w": "http://www.softtr.com",
    "i": "softtr.png"
  },
  "Softr": {
    "d": "Softr is a tool designed to help users build custom websites, web apps, clients portals, or internal tools using Airtable or Google Sheets data.",
    "w": "https://www.softr.io",
    "i": "Softr.svg"
  },
  "Soisy": {
    "d": "Soisy is a buy now, pay later solution provider.",
    "w": "https://www.soisy.it",
    "i": "Soisy.png"
  },
  "SolidJS": {
    "d": "SolidJS is a purely reactive library. It was designed from the ground up with a reactive core. It's influenced by reactive principles developed by previous libraries.",
    "w": "https://www.solidjs.com/",
    "i": "SolidJS.svg"
  },
  "SolidPixels": {
    "d": "Solidpixels is platform to build websites.",
    "w": "https://www.solidpixels.net",
    "i": "SolidPixels.png"
  },
  "SolidStart": {
    "d": "SolidStart is the Solid app framework.",
    "w": "https://start.solidjs.com",
    "i": "SolidJS.svg"
  },
  "Solodev": {
    "w": "http://www.solodev.com",
    "i": "Solodev.png"
  },
  "Solr": {
    "d": "Solr is an open-source enterprise-search platform, written in Java.",
    "w": "http://lucene.apache.org/solr/",
    "i": "Solr.png"
  },
  "Solusquare OmniCommerce Cloud": {
    "w": "https://www.solusquare.com",
    "i": "Solusquare.png"
  },
  "Solve Media": {
    "w": "http://solvemedia.com",
    "i": "Solve Media.png"
  },
  "Solvemate": {
    "d": "Solvemate is a customer service automation platform that enables brands to deliver quality customer service through meaningful conversations via chatbots.",
    "w": "https://www.solvemate.com",
    "i": "Solvemate.svg"
  },
  "Solvvy": {
    "d": "Solvvy provides live chat and chatbot services.",
    "w": "https://solvvy.com/",
    "i": "solvvy.png"
  },
  "SonarQubes": {
    "d": "SonarQube is an open-source platform for the continuous inspection of code quality to perform automatic reviews with static analysis of code to detect bugs, code smells, and security vulnerabilities on 20+ programming languages.",
    "w": "https://www.sonarqube.org/",
    "i": "sonar.png"
  },
  "Sonobi": {
    "d": "Sonobi is an ad technology developer that designs advertising tools and solutions for the media publishers, brand advertisers and media agencies.",
    "w": "https://sonobi.com",
    "i": "Sonobi.png"
  },
  "Sortable": {
    "d": "Sortable is a broad-spectrum platform that helps publishers unify demand partners, data, and tools.",
    "w": "https://sortable.com",
    "i": "Sortable.png"
  },
  "Sorted Return": {
    "d": "Sorted is a global SaaS company that provides data-driven software for checkouts, warehouses, and shipping.",
    "w": "https://sorted.com/give-your-customers-a-5-returns-experience/",
    "i": "Sorted.svg"
  },
  "SoteShop": {
    "d": "SoteShop is an e-shop management software.",
    "w": "https://www.soteshop.com/",
    "i": "SoteShop.svg"
  },
  "Sotel": {
    "w": "https://www.soteledu.com/en/",
    "i": "Sotel.png"
  },
  "Sotoon": {
    "d": "Sotoon is a CDN provider serving users specially in the MENA region.",
    "w": "https://sotoon.ir",
    "i": "Sotoon.svg"
  },
  "SoundCloud": {
    "d": "SoundCloud widget gives you the ability to upload, manage and share tracks.",
    "w": "https://developers.soundcloud.com/docs/api/html5-widget",
    "i": "SoundCloud.svg"
  },
  "SoundManager": {
    "w": "http://www.schillmania.com/projects/soundmanager2",
    "i": "SoundManager.png"
  },
  "Sourcepoint": {
    "d": "Sourcepoint is the data privacy software company for the digital marketing ecosystem.",
    "w": "https://sourcepoint.com",
    "i": "Sourcepoint.svg"
  },
  "Sovrn": {
    "d": "Sovrn is a advertising products and services provider for publishers.",
    "w": "https://www.sovrn.com",
    "i": "Sovrn.png"
  },
  "Sovrn//Commerce": {
    "d": "Sovrn//Commerce is  a content monetization tool for publishers.",
    "w": "https://www.sovrn.com/publishers/commerce/",
    "i": "Sovrn.png"
  },
  "SparkPost": {
    "d": "SparkPost is an email infrastructure provider.",
    "w": "https://www.sparkpost.com/",
    "i": "SparkPost.svg"
  },
  "Spatie Support Bubble": {
    "d": "Spatie Support Bubble is a non-intrusive support form.",
    "w": "https://github.com/spatie/laravel-support-bubble",
    "i": "Spatie.png"
  },
  "Speed Kit": {
    "d": "Speed Kit develops a performance add-on that uses caching algorithms to minimize loading times of ecommerce websites.",
    "w": "https://www.speedkit.com",
    "i": "Speed Kit.svg"
  },
  "SpeedCurve": {
    "d": "SpeedCurve is a front-end performance monitoring service.",
    "w": "https://www.speedcurve.com",
    "i": "SpeedCurve.svg"
  },
  "SpeedSize": {
    "d": "SpeedSize is an AI-based media-compression technology that can auto-detect and compress all of a website's images and videos down to 99% of their original size without lowering the image quality.",
    "w": "https://speedsize.com",
    "i": "SpeedSize.svg"
  },
  "Speedimize": {
    "d": "Speedimize is a Shopify agency that focuses on website speed optimisation and performance issues.",
    "w": "https://speedimize.io",
    "i": "Speedimize.svg"
  },
  "Sphinx": {
    "d": "Sphinx is a tool that makes it easy to create documentation.",
    "w": "https://www.sphinx-doc.org/",
    "i": "Sphinx.svg"
  },
  "SpiceThemes SpicePress": {
    "d": "SpicePress is a responsive and fully customizable business template by SpiceThemes.",
    "w": "https://spicethemes.com/spicepress-wordpress-theme",
    "i": "SpiceThemes.png"
  },
  "Spin-a-Sale": {
    "d": "Spin-a-Sale adds the intensity of gamification to your site. Spin-a-Sale overlay displays a special prize wheel for visitors that you can fully configure.",
    "w": "https://spinasale.com",
    "i": "Spin-a-Sale.png"
  },
  "Spinnakr": {
    "d": "Spinnakr is a startup with a platform designed to personalise messages on blogs and websites.",
    "w": "https://www.spinnakr.com",
    "i": "Spinnakr.png"
  },
  "Split": {
    "d": "Split is a feature delivery platform that powers feature flag management, software experimentation, and continuous delivery.",
    "w": "https://www.split.io",
    "i": "Split.png"
  },
  "SplitIt": {
    "d": "SplitIt is a payment solution that divides a purchase into smaller monthly installments.",
    "w": "https://www.splitit.com",
    "i": "SplitIt.svg"
  },
  "Splitbee": {
    "w": "https://splitbee.io",
    "i": "splitbee.svg"
  },
  "SplittyPay": {
    "d": "SplittyPay is an alternative payment platform designed for group reservations and purchases.",
    "w": "https://www.splittypay.com",
    "i": "SplittyPay.png"
  },
  "Splunk RUM": {
    "d": "Splunk RUM is a real-time, front-end user monitoring and troubleshooting.",
    "w": "https://www.splunk.com/en_us/observability/real-user-monitoring.html",
    "i": "Splunk.svg"
  },
  "Splunkd": {
    "d": "Splunkd is the system process that handles indexing, searching, forwarding.",
    "w": "http://splunk.com",
    "i": "Splunk.svg"
  },
  "SpotHopper": {
    "d": "SpotHopper is an all-in-one marketing and online revenue platform for restaurants.",
    "w": "https://www.spothopperapp.com",
    "i": "SpotHopper.png"
  },
  "SpotX": {
    "d": "SpotX is a video advertising platform.",
    "w": "https://www.spotx.tv",
    "i": "SpotX.png"
  },
  "Spotify Web API": {
    "d": "Spotify Web API endpoints return JSON metadata about music artists, albums, and tracks, directly from the Spotify Data Catalogue.",
    "w": "https://developer.spotify.com/documentation/web-api",
    "i": "Spotify.svg"
  },
  "Spotify Widgets": {
    "d": "Spotify Widgets provide an embeddable view of a track, artist, album, user, playlist, podcast or episode for use within your web project.",
    "w": "https://developer.spotify.com/documentation/widgets",
    "i": "Spotify.svg"
  },
  "Spotii": {
    "d": "Spotii is a tech-enabled payments platform where anyone can Shop Now and Pay Later with absolutely zero interest or cost.",
    "w": "https://www.spotii.com/",
    "i": "Spotii.svg"
  },
  "Spree": {
    "w": "https://spreecommerce.org",
    "i": "Spree.png"
  },
  "Sprig": {
    "d": "Sprig is a UX analysis and management tool to understand what motivates customers to sign up, engage, and remain loyal to products.",
    "w": "https://sprig.com",
    "i": "Sprig.png"
  },
  "Spring": {
    "w": "https://spring.io/",
    "i": "Spring.png"
  },
  "Spring for creators": {
    "d": "Spring for creators (formerly Teespring) is a creator-centric social ecommerce platform.",
    "w": "https://www.spri.ng",
    "i": "Spring for creators.svg"
  },
  "SprintHub": {
    "d": "SprintHub is an all-in-one marketing platform.",
    "w": "https://lp.sprinthub.com",
    "i": "SprintHub.svg"
  },
  "Spryker": {
    "d": "Spryker is a ecommerce technology platform that enables global enterprises to build transactional business models.",
    "w": "https://www.spryker.com",
    "i": "Spryker.svg"
  },
  "SpurIT": {
    "d": "SpurIT is a team of certified Shopify experts which provide ecommerce software solutions.",
    "w": "https://spur-i-t.com",
    "i": "SpurIT.svg"
  },
  "SpurIT Abandoned Cart Reminder": {
    "d": "SpurIT Abandoned Cart Reminder bring back your Shopify store visitors who moved to another tab by blinking your store tab.",
    "w": "https://spur-i-t.com/shopify-apps/abandoned-cart-reminder/",
    "i": "SpurIT.svg"
  },
  "SpurIT Loyalty App": {
    "d": "SpurIT Loyalty App is a turnkey solution allowing you to reward existing customers in a number of ways.",
    "w": "https://spur-i-t.com/shopify-apps/loyalty-points-manager",
    "i": "SpurIT.svg"
  },
  "SpurIT Partial Payments App": {
    "d": "SpurIT Partial Payments App allow your customers to pay for the order in several ways or to share a payment with other people.",
    "w": "https://spur-i-t.com/shopify-apps/split-partial-payments/",
    "i": "SpurIT.svg"
  },
  "SpurIT Recurring Payments App": {
    "d": "SpurIT Recurring Payments App is a simple way to create a system of bill payment,subscriptions and invoicing.",
    "w": "https://spur-i-t.com/shopify-apps/recurring-order-subscription",
    "i": "SpurIT.svg"
  },
  "Sqreen": {
    "d": "Sqreen is the application security platform for the modern enterprise. Acquired by Datadog in Apr 2021.",
    "w": "https://sqreen.io",
    "i": "Sqreen.svg"
  },
  "Squadata": {
    "d": "Squadata provides data based marketing and advertising solutions including email retargeting, CRM onboarding, data monetisation, data management platform.",
    "w": "https://www.squadata.net",
    "i": "Squadata.png"
  },
  "Squadded": {
    "d": "Squadded is a social ecommerce solution that allows visitors to shop together with their friends and with other members of the brands online community.",
    "w": "https://www.squadded.co",
    "i": "Squadded.svg"
  },
  "Square": {
    "d": "Square is a mobile payment company that offers business software, payment hardware products and small business services.",
    "w": "https://squareup.com/",
    "i": "Square.svg"
  },
  "Square Online": {
    "d": "Square Online is a subscription based service that provides ecommerce solutions to small and medium sized businesses.",
    "w": "https://squareup.com/us/en/online-store",
    "i": "Square.svg"
  },
  "Squarespace": {
    "d": "Squarespace provides Software-as-a-Service (SaaS) for website building and hosting, and allows users to use pre-built website templates.",
    "w": "http://www.squarespace.com",
    "i": "Squarespace.svg"
  },
  "Squarespace Commerce": {
    "d": "Squarespace Commerce is an ecommerce platform designed to facilitate the creation of websites and online stores, with domain registration and web hosting included.",
    "w": "https://www.squarespace.com/ecommerce-website",
    "i": "Squarespace.svg"
  },
  "SquirrelMail": {
    "d": "SquirrelMail is an open-source web-mail package that is based on PHP language. It provides a web-based-email client and a proxy server for IMAP protocol.",
    "w": "http://squirrelmail.org",
    "i": "SquirrelMail.png"
  },
  "Squiz Matrix": {
    "d": "A flexible, low-code enterprise content management system designed to manage multiple sites with many editors.",
    "w": "https://www.squiz.net/matrix",
    "i": "Squiz Matrix.png"
  },
  "Stack Analytix": {
    "d": "Stack Analytix offers heatmaps, session recording, conversion analysis and user engagement tools.",
    "w": "https://www.stackanalytix.com",
    "i": "Stack Analytix.svg"
  },
  "StackCommerce": {
    "d": "StackCommerce is a product discovery platform.",
    "w": "https://www.stackcommerce.com/",
    "i": "Stackcommerce.png"
  },
  "StackPath": {
    "d": "StackPath is a cloud computing and services provider.",
    "w": "https://www.stackpath.com",
    "i": "StackPath.svg"
  },
  "StackerHQ": {
    "d": "StackerHQ is a tool in the low code platforms and application builders categories.",
    "w": "https://www.stackerhq.com",
    "i": "StackerHQ.svg"
  },
  "Stackify": {
    "d": "Stackify offers the only solution that fully integrates application performance monitoring with errors and logs.",
    "w": "https://stackify.com",
    "i": "Stackify.svg"
  },
  "Stage Try": {
    "d": "Stage Try is an end-to-end ecommerce platform amplifying AOV and conversions of online stores.",
    "w": "https://stagetry.com",
    "i": "Stage Try.svg"
  },
  "Stamped": {
    "d": "Stamped is a provider of reviews and ratings solution.",
    "w": "https://stamped.io/",
    "i": "Stamped.svg"
  },
  "Starhost": {
    "d": "Starhost provides a Platform-as-a-Service (PaaS) for website building, web hosting, and domain registration.",
    "w": "https://starhost.verbosec.com",
    "i": "Starhost.svg"
  },
  "Starlet": {
    "w": "http://metacpan.org/pod/Starlet",
    "i": "Starlet.png"
  },
  "Statamic": {
    "d": "Statamic is an open-source and self-hosted content management system based on the PHP programming language.",
    "w": "https://statamic.com",
    "i": "Statamic.svg"
  },
  "Statcounter": {
    "w": "http://www.statcounter.com",
    "i": "Statcounter.svg"
  },
  "Statically": {
    "d": "Statically is a free, fast and modern CDN for open-source projects, WordPress, images, and any static assets.",
    "w": "https://statically.io",
    "i": "Statically.svg"
  },
  "Statsig": {
    "d": "Statsig is a modern product experimentation platform that helps product teams continuously measure impact of every single feature they launch.",
    "w": "https://statsig.com/",
    "i": "Statsig.svg"
  },
  "Status.io": {
    "d": "Status.io is a hosted system status page manager with features such as customised incident tracking, subscriber notifications, and more.",
    "w": "https://status.io",
    "i": "Status.io.png"
  },
  "StatusCast": {
    "d": "StatusCast is a hosted status page management software.",
    "w": "https://statuscast.com/status-page/",
    "i": "StatusCast.svg"
  },
  "Statuspal": {
    "d": "Statuspal is a hosted status page and monitoring software for businesses of all kinds.",
    "w": "https://statuspal.io",
    "i": "Statuspal.svg"
  },
  "Staytus": {
    "d": "Staytus is a free, open-source status site that you can install on your own servers.",
    "w": "https://staytus.co",
    "i": "Staytus.svg"
  },
  "SteelHouse": {
    "d": "SteelHouse is an advertising software company which provides services for brands, agencies, and direct marketers.",
    "w": "https://steelhouse.com",
    "i": "SteelHouse.png"
  },
  "Stencil": {
    "d": "Stencil is a compiler that generates Web Components developed by the Ionic team.",
    "w": "https://stenciljs.com",
    "i": "Stencil.svg"
  },
  "Stimulus": {
    "d": "A modest JavaScript framework for the HTML you already have.",
    "w": "https://stimulusjs.org/",
    "i": "Stimulus.svg"
  },
  "StimulusReflex": {
    "d": "StimulusReflex lets you create reactive web interfaces with Ruby on Rails.",
    "w": "https://docs.stimulusreflex.com",
    "i": "stimulus-reflex-logo.svg"
  },
  "Stitches": {
    "d": "Stitches is a is a CSS-in-JS styling framework with near-zero runtime, SSR, and multi-variant support.",
    "w": "https://stitches.dev",
    "i": "Stitches.svg"
  },
  "StoreHippo": {
    "d": "StoreHippo is a SaaS based ecommerce platform.",
    "w": "https://www.storehippo.com",
    "i": "StoreHippo.png"
  },
  "Storeden": {
    "w": "https://www.storeden.com",
    "i": "storeden.svg"
  },
  "Storefront UI": {
    "d": "Storefront UI is an independent, Vue. js-based, library of UI components.",
    "w": "https://vuestorefront.io/storefront-ui",
    "i": "Storefront UI.svg"
  },
  "Storeino": {
    "d": "Storeino is an ecommerce platform that enables businesses and physical store owners to open a professional online store and sell products online regardless of their geographical location.",
    "w": "https://www.storeino.com",
    "i": "Storeino.png"
  },
  "Storeplum": {
    "d": "Storeplum is a no-code ecommerce platform.",
    "w": "https://www.storeplum.com",
    "i": "Storeplum.svg"
  },
  "StorifyMe": {
    "d": "StorifyMe is a storytelling platform for creating and distributing web stories on social networks and the open web.",
    "w": "https://www.storifyme.com",
    "i": "StorifyMe.png"
  },
  "StoryStream": {
    "d": "StoryStream is a content curation platform that specialises in user generated content.",
    "w": "https://storystream.ai",
    "i": "StoryStream.png"
  },
  "Storyblok": {
    "d": "Storyblok is a headless CMS with a visual editor for developers, marketers and content editors. Storyblok helps your team to manage content and digital experiences for every use-case from corporate websites, ecommerce, helpdesks, mobile apps, screen displays, and more.",
    "w": "https://www.storyblok.com",
    "i": "Storyblok.svg"
  },
  "Storybook": {
    "d": "Storybook is a frontend workshop for building UI components and pages in isolation.",
    "w": "https://storybook.js.org",
    "i": "storybook.svg"
  },
  "Strapdown.js": {
    "w": "http://strapdownjs.com",
    "i": "strapdown.js.png"
  },
  "Strapi": {
    "d": "Strapi is an open-source headless CMS used for building fast and easily manageable APIs written in JavaScript.",
    "w": "https://strapi.io",
    "i": "Strapi.svg"
  },
  "Strato": {
    "d": "Strato is an internet hosting service provider headquartered in Berlin, Germany which provide dedicated server hosting, a website builder and a cloud storage services.",
    "w": "https://www.strato.com",
    "i": "Strato.svg"
  },
  "Strato Website": {
    "d": "Strato Website is a website builder by Strato hosting provider.",
    "w": "https://www.strato.de/homepage-baukasten",
    "i": "Strato.svg"
  },
  "Strattic": {
    "d": "Strattic offers static and headless hosting for WordPress sites.",
    "w": "https://www.strattic.com/",
    "i": "strattic-icon.png"
  },
  "Strikingly": {
    "w": "https://strikingly.com",
    "i": "Strikingly.png"
  },
  "Stripe": {
    "d": "Stripe offers online payment processing for internet businesses as well as fraud prevention, invoicing and subscription management.",
    "w": "http://stripe.com",
    "i": "Stripe.svg"
  },
  "StrutFit": {
    "d": "StrutFit is an online sizing platform for footwear retailers.",
    "w": "https://www.strut.fit",
    "i": "StrutFit.svg"
  },
  "Stylitics": {
    "d": "Stylitics is a cloud-based SaaS platform for retailers to automate and distribute visual content at scale.",
    "w": "https://stylitics.com",
    "i": "Stylitics.svg"
  },
  "Sub2Tech": {
    "d": "Sub2Tech is combining real time customer data with industry-leading technology.",
    "w": "https://www.sub2tech.com",
    "i": "Sub2Tech.png"
  },
  "Subbly": {
    "d": "Subbly is a web-based subscription ecommerce platform designed to help businesses build websites, enhance marketing automation, create coupon and discount codes and manage customers.",
    "w": "https://www.subbly.co",
    "i": "Subbly.svg"
  },
  "Sublime": {
    "d": "Sublime (formerly Sublime Skinz) operator of an advertising agency intended to offer skin-based advertising services to clients.",
    "w": "https://www.sublime.xyz",
    "i": "Sublime.svg"
  },
  "SublimeVideo": {
    "d": "SublimeVideo is a framework for HTML5 Video Player.",
    "w": "http://sublimevideo.net",
    "i": "SublimeVideo.png"
  },
  "Subrion": {
    "w": "http://subrion.com",
    "i": "Subrion.png"
  },
  "Substack": {
    "d": "Substack is an American online platform that provides publishing, payment, analytics, and design infrastructure to support subscription newsletters.",
    "w": "http://substack.com/",
    "i": "Substack.svg"
  },
  "Sucuri": {
    "d": "Sucuri is a WordPress security plugin used to protect websites from malware and hacks.",
    "w": "https://sucuri.net/",
    "i": "sucuri.png"
  },
  "Suiteshare": {
    "d": "Suiteshare powers conversational shopping experiences.",
    "w": "https://suiteshare.com/",
    "i": "Suiteshare.png"
  },
  "Sulu": {
    "d": "Sulu is the go-to CMS for back-end projects written within the PHP Symfony framework.",
    "w": "http://sulu.io",
    "i": "Sulu.svg"
  },
  "SummerCart": {
    "d": "SummerCart is an ecommerce platform written in PHP.",
    "w": "http://www.summercart.com",
    "i": "SummerCart.svg"
  },
  "Sumo": {
    "d": "Sumo is a plugin offering set of marketing tools to automate a website's growth. These tools help drive extra traffic, engage visitors, increase email subscribers and build community.",
    "w": "http://sumo.com",
    "i": "Sumo.png"
  },
  "SunOS": {
    "d": "SunOS is a Unix-branded operating system developed by Sun Microsystems for their workstation and server computer systems.",
    "w": "http://oracle.com/solaris",
    "i": "Oracle.svg"
  },
  "Suncel": {
    "d": "Suncel is a powerful and versatile content platform with a simple visual builder for marketers and publishers.",
    "w": "https://suncel.io",
    "i": "Suncel.svg"
  },
  "Super Builder": {
    "d": "Super Builder is a new tool for creating sleek landing pages right in Notion.",
    "w": "https://super.so",
    "i": "Super Builder.svg"
  },
  "Super Socializer": {
    "d": "Super Socializer is a multipurpose social media plugin for WordPress.",
    "w": "https://super-socializer-wordpress.heateor.com",
    "i": "Super Socializer.png"
  },
  "SuperLemon app": {
    "d": "SuperLemon app is an all-in-one WhatsApp plugin for Shopify stores.",
    "w": "https://apps.shopify.com/whatsapp-chat-button",
    "i": "SuperLemon.png"
  },
  "Supersized": {
    "w": "http://buildinternet.com/project/supersized",
    "i": "Supersized.png"
  },
  "Superspeed": {
    "d": "Superspeed is a page speed optimizer app for Shopify based sites.",
    "w": "https://apps.shopify.com/superspeed-free-speed-boost",
    "i": "Superspeed.png"
  },
  "Support Hero": {
    "d": "Support Hero is a knowledge base solution to reduce inbound support requests.",
    "w": "https://www.supporthero.com/",
    "i": "Support Hero.png"
  },
  "Survicate": {
    "d": "Survicate is an all-in-one customer feedback tool that allows you collect feedback.",
    "w": "https://survicate.com",
    "i": "Survicate.svg"
  },
  "Svbtle": {
    "w": "https://www.svbtle.com",
    "i": "svbtle.png"
  },
  "Svelte": {
    "d": "Svelte is a free and open-source front end compiler created by Rich Harris and maintained by the Svelte core team members.",
    "w": "https://svelte.dev",
    "i": "Svelte.svg"
  },
  "SvelteKit": {
    "d": "SvelteKit is the official Svelte framework for building web applications with a flexible filesystem-based routing.",
    "w": "https://kit.svelte.dev",
    "i": "Svelte.svg"
  },
  "Swagger UI": {
    "d": "Swagger UI is a collection of HTML, JavaScript, and CSS assets that dynamically generate documentation from a Swagger-compliant API.",
    "w": "https://swagger.io/tools/swagger-ui",
    "i": "Swagger UI.svg"
  },
  "Swagify": {
    "d": "Swagify allows you to upsell, cross-sell, and promote, by creating as many completely customizable offers as you want.",
    "w": "https://swagifyapp.com",
    "i": "Swagify.png"
  },
  "SweetAlert": {
    "d": "SweetAlert is a beautiful replacement for JavaScript's alert.",
    "w": "https://sweetalert.js.org",
    "i": "SweetAlert.png"
  },
  "SweetAlert2": {
    "d": "SweetAlert2 is a beautiful, responsive, customizable, accessible replacement for JavaScript's popup boxes.",
    "w": "https://sweetalert2.github.io/",
    "i": "SweetAlert2.svg"
  },
  "Swell": {
    "d": "Swell is a headless ecommerce platform for modern brands, startups, and agencies.",
    "w": "https://www.swell.is/",
    "i": "Swell.svg"
  },
  "Swiffy Slider": {
    "d": "Swiffy Slider is a wrapper defined in html with slides, navigation and indicators as its children.",
    "w": "https://swiffyslider.com",
    "i": "Swiffy Slider.svg"
  },
  "Swiftype": {
    "d": "Swiftype provides search software for organisations, websites, and computer programs.",
    "w": "http://swiftype.com",
    "i": "Swiftype.svg"
  },
  "Swiper": {
    "d": "Swiper is a JavaScript library that creates modern touch sliders with hardware-accelerated transitions.",
    "w": "https://swiperjs.com",
    "i": "Swiper.svg"
  },
  "Swym Wishlist Plus": {
    "d": "Swym Wishlist Plus enables your customers to bookmark their favorite products and pick up where they left off when they return.",
    "w": "https://swym.it/apps/wishlist/",
    "i": "Swym.png"
  },
  "Sylius": {
    "d": "Sylius is an open source ecommerce framework based on Symfony full stack.",
    "w": "https://sylius.com",
    "i": "Sylius.svg"
  },
  "Symfony": {
    "d": "Symfony is a PHP web application framework and a set of reusable PHP components/libraries.",
    "w": "https://symfony.com",
    "i": "Symfony.svg"
  },
  "Sympa": {
    "d": "Sympa is an open-source mailing list management (MLM) software.",
    "w": "https://www.sympa.org/",
    "i": "sympa.png"
  },
  "Syndeca": {
    "d": "Syndeca is a visual commerce platform that allows brands to quickly create engaging, actionable campaigns.",
    "w": "https://www.syndeca.com",
    "i": "Syndeca.svg"
  },
  "Synerise": {
    "w": "https://synerise.com/",
    "i": "Synerise.svg"
  },
  "Synology DiskStation": {
    "d": "DiskStation provides a full-featured network attached storage.",
    "w": "http://synology.com",
    "i": "Synology DiskStation.svg"
  },
  "SyntaxHighlighter": {
    "w": "https://github.com/syntaxhighlighter",
    "i": "SyntaxHighlighter.png"
  },
  "Systeme.io": {
    "d": "Systeme.io is an all-in-one marketing platform that helps businesses create and launch sales funnels, affiliate programs, email marketing campaigns, online courses, blogs, and websites.",
    "w": "https://systeme.io",
    "i": "Systeme.io.svg"
  },
  "Syte": {
    "d": "Syte is a provider of visual AI technology that aims to improve retailers' site navigation, product discovery, and user experience by powering solutions that engage and convert shoppers.",
    "w": "https://www.syte.ai",
    "i": "Syte.svg"
  },
  "sIFR": {
    "d": "sIFR is a JavaScript and Adobe Flash dynamic web fonts implementation.",
    "w": "https://www.mikeindustries.com/blog/sifr",
    "i": "sIFR.png"
  },
  "sNews": {
    "w": "https://snewscms.com",
    "i": "sNews.png"
  },
  "script.aculo.us": {
    "w": "https://script.aculo.us",
    "i": "script.aculo.us.png"
  },
  "scrollreveal": {
    "w": "https://scrollrevealjs.org",
    "i": "scrollreveal.svg"
  },
  "shine.js": {
    "w": "https://bigspaceship.github.io/shine.js/"
  },
  "siimple": {
    "d": "siimple is a minimal CSS toolkit for building flat, clean and responsive web designs.",
    "w": "https://siimple.xyz",
    "i": "siimple.svg"
  },
  "snigel AdConsent": {
    "d": "snigel AdConsent is a IAB-registered consent management platfrom (CMP) which help keep sites speed intact while remaining compliant with GDPR and CCPA.",
    "w": "https://www.snigel.com/adconsent/",
    "i": "snigel.svg"
  },
  "snigel AdEngine": {
    "d": "snigel AdEngine is a header bidding solution product from snigel.",
    "w": "https://www.snigel.com/adengine/",
    "i": "snigel.svg"
  },
  "stores.jp": {
    "d": "stores.jp is an ecommerce platform which allows users to create their own ecommerce website.",
    "w": "https://stores.jp/ec/",
    "i": "stores.jp.svg"
  },
  "styled-components": {
    "d": "Styled components is a CSS-in-JS styling framework that uses tagged template literals in JavaScript.",
    "w": "https://styled-components.com",
    "i": "styled-components.svg"
  },
  "T-Soft": {
    "w": "https://www.tsoft.com.tr/",
    "i": "Tsoft.png"
  },
  "T1 Comercios": {
    "d": "T1 Comercios is an integrator platform with marketplaces(https://www.claroshop.com/,https://www.sears.com.mx/,https://www.sanborns.com.mx/).",
    "w": "https://www.t1comercios.com",
    "i": "T1 Comercios.svg"
  },
  "T1 Envios": {
    "d": "T1 Envios is a delivery solution, allows the business to select the best courier to send their packages.",
    "w": "https://t1envios.com",
    "i": "T1 Envios.svg"
  },
  "T1 Paginas": {
    "d": "T1 Paginas is an ecommerce platform.",
    "w": "https://t1paginas.com",
    "i": "T1 Paginas.svg"
  },
  "T1 Pagos": {
    "d": "T1 Pagos is a payment processing platform.",
    "w": "https://www.t1pagos.com",
    "i": "T1 Pagos.svg"
  },
  "TCAdmin": {
    "d": "TCAdmin is the game hosting control panel.",
    "w": "https://www.tcadmin.com",
    "i": "TCAdmin.png"
  },
  "TDesign": {
    "d": "TDesign launched by Tencent contains rich and reusable design component resources, such as color system, text system, motion design, etc.",
    "w": "https://tdesign.tencent.com",
    "i": "TDesign.svg"
  },
  "THG Ingenuity": {
    "d": "THG Ingenuity is completely unique in that it's both a peer-to-peer ecommerce retailer and a service provider to global cross-border commerce operations.",
    "w": "https://www.thgingenuity.com",
    "i": "THG Ingenuity.png"
  },
  "TN Express Web": {
    "d": "Tessitura is an enterprise application to manage activities in ticketing, fundraising, customer relationship management, and marketing.",
    "w": "https://www.tessituranetwork.com",
    "i": "tessitura.svg"
  },
  "TNS Payments": {
    "d": "TNS Payments, is designed to deliver payment transaction information to banks, merchants, processors and other payment institutions.",
    "w": "https://tnsi.com/products/payments/",
    "i": "tnsi.png"
  },
  "TRISOshop": {
    "d": "TRISOshop is an ecommerce platform.",
    "w": "https://www.trisoshop.pl",
    "i": "TRISOshop.svg"
  },
  "TRUENDO": {
    "d": "TRUENDO is a GDPR compliance software.",
    "w": "https://truendo.com",
    "i": "TRUENDO.svg"
  },
  "TVSquared": {
    "d": "TVSquared is a cross-platform TV ad measurement, analytics and optimisation platform.",
    "w": "https://www.tvsquared.com",
    "i": "TVSquared.png"
  },
  "TWiki": {
    "d": "TWiki is an open-source wiki and application platform.",
    "w": "http://twiki.org",
    "i": "TWiki.png"
  },
  "TYPO3 CMS": {
    "d": "TYPO3 is a free and open-source Web content management system written in PHP.",
    "w": "https://typo3.org/",
    "i": "TYPO3.svg"
  },
  "Tabarnapp": {
    "d": "Tabarnapp is a platform for Shopify apps and themes.",
    "w": "https://tabarnapp.com",
    "i": "Tabarnapp.png"
  },
  "Tabby": {
    "d": "Tabby is a Buy now pay later solution from Middle East.",
    "w": "https://tabby.ai/",
    "i": "Tabby.svg"
  },
  "TableBooker": {
    "d": "Tablebooker is an online reservation system for restaurants.",
    "w": "https://www.tablebooker.com",
    "i": "TableBooker.svg"
  },
  "TableCheck": {
    "d": "TableCheck is a restaurant table booking widget.",
    "w": "https://www.tablecheck.com",
    "i": "TableCheck.svg"
  },
  "TablePress": {
    "d": "TablePress is a free and open source plugin for the WordPress publishing platform. It enables you to create and manage tables on your website, without any coding knowledge.",
    "w": "https://tablepress.org",
    "i": "TablePress.png"
  },
  "Taboola": {
    "d": "Taboola is a content discovery & native advertising platform for publishers and advertisers.",
    "w": "https://www.taboola.com",
    "i": "Taboola.svg"
  },
  "Tachyons": {
    "d": "Tachyons is a functional CSS framework.",
    "w": "https://tachyons.io",
    "i": "Tachyons.svg"
  },
  "Tada": {
    "d": "Tada offers interactive website popups that allow Shopify merchants to collect more emails and increase sales by engaging website visitors through gamification.",
    "w": "https://trytada.com",
    "i": "Tada.png"
  },
  "TagPro": {
    "d": "TagPro is software that updates and allows you to manage tags within websites, identifying various types of variables to optimise loads for advertising.",
    "w": "https://tagpro.adpromedia.net",
    "i": "TagPro.png"
  },
  "Tagboard": {
    "d": "Tagboard is a platform which allows users to aggregate data from major social networking websites and embed, repost and redisplay it on various media.",
    "w": "https://tagboard.com",
    "i": "Tagboard.svg"
  },
  "Tagembed": {
    "d": "Tagembed is a social media aggregator that collects and displays engaging user-generated content from any social media network such as Instagram, Facebook, Twitter, Youtube, Tiktok, Google Reviews, Airbnb, and 18+ networks.",
    "w": "https://tagembed.com",
    "i": "Tagembed.svg"
  },
  "Taggbox": {
    "d": "Taggbox is an UGC platform to collect, curate, manage rights, and publish user-generated content marketing campaigns across multiple channels.",
    "w": "https://taggbox.com/",
    "i": "Taggbox.svg"
  },
  "Taiga": {
    "w": "http://taiga.io",
    "i": "Taiga.png"
  },
  "Tail": {
    "d": "Tail is a customer data management platform.",
    "w": "https://www.tail.digital",
    "i": "Tail.svg"
  },
  "Tailwind CSS": {
    "d": "Tailwind is a utility-first CSS framework.",
    "w": "https://tailwindcss.com/",
    "i": "tailwindcss.svg"
  },
  "TakeDrop": {
    "d": "TakeDrop is an ecommerce platform.",
    "w": "https://takedrop.pl",
    "i": "TakeDrop.png"
  },
  "Talkable": {
    "d": "Talkable is a cloud-based referral marketing system that assists medium to large businesses with campaign creation and channel performance tracking.",
    "w": "https://www.talkable.com",
    "i": "Talkable.svg"
  },
  "Tallentor": {
    "d": "Tallentor is a subscription-based software website analytics, heatmap, channel chat intergration.",
    "w": "https://tallentor.com",
    "i": "Tallentor.png"
  },
  "Tallentor Widget": {
    "d": "Tallentor is a subscription-based software website analytics, heatmap, channel chat intergration.",
    "w": "https://tallentor.com",
    "i": "Tallentor.png"
  },
  "Tally": {
    "d": "Tally is the simplest way to create free forms & surveys. Create any type of form in seconds, without knowing how to code, and for free.",
    "w": "https://tally.so/",
    "i": "Tally.svg"
  },
  "Tamago": {
    "w": "http://tamago.temonalab.com",
    "i": "Tamago.png"
  },
  "Tamara": {
    "d": "Tamara ia a BNPL (Buy now pay later) provider in Saudi Arabia.",
    "w": "https://tamara.co/",
    "i": "Tamara.svg"
  },
  "Tangled Network": {
    "d": "Tangled Network provides a managed services in website devleopment, web and database hosting and domain registration, with a focus on everything managed for small and medium sized businesses.",
    "w": "https://tanglednetwork.com",
    "i": "atws.png"
  },
  "Tapad": {
    "d": "Tapad is a venture-funded startup company that develops and markets software and services for cross-device advertising and content delivery.",
    "w": "https://www.tapad.com",
    "i": "Tapad.svg"
  },
  "Tapcart": {
    "d": "Tapcart is a mobile commerce SaaS platform that integrates directly with Shopify.",
    "w": "https://tapcart.com",
    "i": "Tapcart.svg"
  },
  "Target2Sell": {
    "d": "Target2Sell is a personalisation solution for ecommerce sites.",
    "w": "https://www.target2sell.com/",
    "i": "Target2Sell.png"
  },
  "Tatari": {
    "d": "Tatari is a data and analytics company focused on buying and measuring ads across TV and streaming platforms.",
    "w": "https://www.tatari.tv",
    "i": "Tatari.svg"
  },
  "Tawk.to": {
    "d": "Tawk.to is a free messaging app to monitor and chat with the visitors to a website, mobile app.",
    "w": "http://tawk.to",
    "i": "TawkTo.svg"
  },
  "Teachable": {
    "d": "Teachable is a learning management system or LMS platform.",
    "w": "https://teachable.com",
    "i": "Teachable.png"
  },
  "Teads": {
    "d": "Teads is a technology provider that sells ads on publisher websites.",
    "w": "https://www.teads.com",
    "i": "Teads.svg"
  },
  "Tealium": {
    "d": "Tealium provides a sales enterprise tag management system and marketing software.",
    "w": "http://tealium.com",
    "i": "Tealium.png"
  },
  "Tealium AudienceStream": {
    "d": "Tealium AudienceStream is an omnichannel customer segmentation and real-time action engine.",
    "w": "https://tealium.com/products/audiencestream",
    "i": "Tealium.png"
  },
  "Tealium Consent Management": {
    "d": "Tealium Consent Management adds consent and data privacy support.",
    "w": "https://docs.tealium.com/platforms/getting-started/consent-management",
    "i": "Tealium.png"
  },
  "TeamCity": {
    "d": "TeamCity is a build management and continuous integration server from JetBrains.",
    "w": "https://www.jetbrains.com/teamcity/",
    "i": "TeamCity.svg"
  },
  "Teamtailor": {
    "d": "Teamtailor is an applicant tracking system, career site and analytics dashboard combined, mobile friendly, and  all-in-one recruitment platform.",
    "w": "https://www.teamtailor.com",
    "i": "teamtailor.svg"
  },
  "Tebex": {
    "d": "Tebex specialises in providing gcommerce solutions for online games.",
    "w": "https://www.tebex.io",
    "i": "Tebex.svg"
  },
  "Telescope": {
    "w": "http://telescopeapp.org",
    "i": "Telescope.png"
  },
  "Tencent Analytics (腾讯分析)": {
    "w": "https://ta.qq.com/",
    "i": "tajs.png"
  },
  "Tencent Cloud": {
    "d": "Tencent Cloud is China's leading public cloud service provider.",
    "w": "https://intl.cloud.tencent.com",
    "i": "Tencent Cloud.svg"
  },
  "Tencent QQ": {
    "d": "Tencent QQ also known as QQ, is an instant messaging software service and web portal developed by the Chinese tech giant Tencent.",
    "w": "https://im.qq.com",
    "i": "Tencent QQ.svg"
  },
  "Tencent Waterproof Wall": {
    "w": "https://007.qq.com/",
    "i": "TencentWaterproofWall.png"
  },
  "Tengine": {
    "d": "Tengine is a web server which is based on the Nginx HTTP server.",
    "w": "http://tengine.taobao.org",
    "i": "Tengine.png"
  },
  "Termly": {
    "d": "Termly provides free website policy resources and web-based policy creation software.",
    "w": "https://termly.io/",
    "i": "termly.svg"
  },
  "Tern": {
    "d": "Tern is a plug and play ecommerce app, built for Shopify, that offers merchants the ability to provide a seamless trade-in service.",
    "w": "https://www.tern.eco",
    "i": "Tern.png"
  },
  "TerriaJS": {
    "d": "TerriaJS is an open-source framework for web-based geospatial catalogue explorers.",
    "w": "https://terria.io/",
    "i": "TerriaJS.png"
  },
  "Tessitura": {
    "w": "https://www.tessituranetwork.com",
    "i": "tessitura.svg"
  },
  "TestFreaks": {
    "d": "TestFreaks is an impartial source that provides product and seller review content for ecommerce websites.",
    "w": "https://www.testfreaks.com",
    "i": "TestFreaks.svg"
  },
  "Texthelp": {
    "d": "TextHelp is a literacy, accessibility and dyslexia software developer for people with reading and writing difficulties.",
    "w": "https://www.texthelp.com/en-gb/products/browsealoud/",
    "i": "Texthelp.svg"
  },
  "Textpattern CMS": {
    "w": "http://textpattern.com",
    "i": "Textpattern CMS.png"
  },
  "The Arena Group": {
    "d": "The Arena Group is a media coalition of professional content destinations. It operates on a shared digital publishing, advertising, and distribution platform, providing a major media-scale alternative to news and information distributed on social platforms.",
    "w": "https://thearenagroup.net",
    "i": "The Arena Group.svg"
  },
  "The Events Calendar": {
    "d": "The Events Calendar is a free event management plugin for WordPress.",
    "w": "https://theeventscalendar.com",
    "i": "The Events Calendar.png"
  },
  "The Hotels Network": {
    "d": "The Hotels Network provides a SaaS software that enhances hotelier websites with predictive marketing personalisation and user behavior analytics.",
    "w": "https://thehotelsnetwork.com",
    "i": "The Hotels Network.svg"
  },
  "The SEO Framework": {
    "d": "The SEO Framework is the only WordPress plugin that can intelligently generate critical SEO meta tags by reading your WordPress environment.",
    "w": "https://theseoframework.com",
    "i": "The SEO Framework.svg"
  },
  "The Theme Foundry Make": {
    "d": "Make is a free, open-source builder WordPress theme by The Theme Foundry.",
    "w": "https://thethemefoundry.com/wordpress-themes/make",
    "i": "The Theme Foundry.svg"
  },
  "The.com": {
    "d": "The.com is a low-code website building platform with community-created components that you can share and own.",
    "w": "https://www.the.com",
    "i": "The.com.svg"
  },
  "Thefork": {
    "d": "Thefork is a restaurant booking, managing system.",
    "w": "https://www.thefork.com",
    "i": "Thefork.svg"
  },
  "Thelia": {
    "w": "http://thelia.net",
    "i": "Thelia.png"
  },
  "Theme Freesia Edge": {
    "d": "Edge is a responsive blogger WordPress theme by Theme Freesia.",
    "w": "https://themefreesia.com/themes/edge",
    "i": "Theme Freesia.png"
  },
  "Theme Freesia Photograph": {
    "d": "Photograph is a WordPress theme exclusively built for photographer, blogger, portfolio, photography agency or photo studio websites.",
    "w": "https://themefreesia.com/themes/Photograph",
    "i": "Theme Freesia.png"
  },
  "Theme Freesia ShoppingCart": {
    "d": "ShoppingCart is a WordPress theme especially build for store and ecommerce by Theme Freesia.",
    "w": "https://themefreesia.com/themes/shoppingcart",
    "i": "Theme Freesia.png"
  },
  "Theme Horse Attitude": {
    "d": "Attitude is a simple, clean and responsive retina ready WordPress theme by Theme Horse.",
    "w": "https://www.themehorse.com/themes/attitude",
    "i": "Theme Horse.png"
  },
  "Theme Horse NewsCard": {
    "d": "NewsCard is a multi-purpose magazine/news WordPress theme by Theme Horse.",
    "w": "https://www.themehorse.com/themes/newscard",
    "i": "Theme Horse.png"
  },
  "Theme Vision Agama": {
    "d": "Agama is a free multi-purpose WordPress theme by Theme Vision.",
    "w": "https://theme-vision.com/agama",
    "i": "Theme Vision.png"
  },
  "Theme4Press Evolve": {
    "d": "Theme4Press Evolve is an multipurpose and minimal WordPress theme.",
    "w": "https://theme4press.com/evolve-multipurpose-wordpress-theme",
    "i": "Theme4Press.png"
  },
  "ThemeGrill Accelerate": {
    "d": "ThemeGrill Accelerate is free minimal WordPress theme.",
    "w": "https://themegrill.com/themes/accelerate",
    "i": "ThemeGrill.png"
  },
  "ThemeGrill Cenote": {
    "d": "ThemeGrill Cenote is a creative blogging WordPress theme, fully compatible with WooCommerce and popular page builders.",
    "w": "https://themegrill.com/themes/cenote",
    "i": "ThemeGrill.png"
  },
  "ThemeGrill ColorMag": {
    "d": "ThemeGrill ColorMag is most popular magazine-newspaper style WordPress theme.",
    "w": "https://themegrill.com/themes/colormag",
    "i": "ThemeGrill.png"
  },
  "ThemeGrill Flash": {
    "d": "ThemeGrill Flash is one of the most flexible multipurpose WordPress themes.",
    "w": "https://themegrill.com/themes/flash",
    "i": "ThemeGrill.png"
  },
  "ThemeGrill Radiate": {
    "d": "ThemeGrill Radiate is a simple and minimal WordPress theme focused on blogging.",
    "w": "https://themegrill.com/themes/radiate",
    "i": "ThemeGrill.png"
  },
  "ThemeGrill Spacious": {
    "d": "ThemeGrill Spacious is beautiful small to medium business responsive WordPress theme.",
    "w": "https://themegrill.com/themes/spacious",
    "i": "ThemeGrill.png"
  },
  "ThemeGrill eStore": {
    "d": "ThemeGrill eStore is one of the most popular WooCommerce integrated WordPress themes.",
    "w": "https://themegrill.com/themes/estore",
    "i": "ThemeGrill.png"
  },
  "ThemeIsle Menu Icons": {
    "d": "ThemeIsle Menu Icons plugin gives you the ability to add icons to your menu items, similar to the look of the latest dashboard menu.",
    "w": "https://wordpress.org/plugins/menu-icons",
    "i": "ThemeIsle.png"
  },
  "ThemeZee Donovan": {
    "d": "ThemeZee Donovan is a flexible, yet easy-to-use blogging WordPress theme.",
    "w": "https://themezee.com/themes/donovan",
    "i": "ThemeZee.png"
  },
  "ThemeZee Poseidon": {
    "d": "ThemeZee Poseidon is an elegant designed WordPress theme featuring a splendid fullscreen image slideshow.",
    "w": "https://themezee.com/themes/poseidon",
    "i": "ThemeZee.png"
  },
  "ThemeZee Wellington": {
    "d": "Wellington is a clean and simple magazine WordPress theme by ThemeZee.",
    "w": "https://themezee.com/themes/wellington",
    "i": "ThemeZee.png"
  },
  "Themeansar Newsberg": {
    "d": "Themeansar Newsberg is a fast, clean, modern-looking, responsive news magazine WordPress theme.",
    "w": "https://themeansar.com/free-themes/newsberg",
    "i": "Themeansar.png"
  },
  "Themeansar Newsup": {
    "d": "Themeansar Newsup is a fast, clean, modern-looking responsive news magazine WordPress theme.",
    "w": "https://themeansar.com/free-themes/newsup",
    "i": "Themeansar.png"
  },
  "Themebeez Cream Magazine": {
    "d": "Cream Magazine is a news and magazine WordPress theme by Themebeez.",
    "w": "https://themebeez.com/themes/cream-magazine",
    "i": "Themebeez.png"
  },
  "Themebeez Orchid Store": {
    "d": "Orchid Store is a clean, flexible, stylish and dynamic ecommerce WordPress theme by Themebeez.",
    "w": "https://themebeez.com/themes/orchid-store",
    "i": "Themebeez.png"
  },
  "Themegraphy Graphy": {
    "d": "Themegraphy Graphy is now compatible with WordPress 5.0 and Gutenberg blog-oriented WordPress theme.",
    "w": "https://themegraphy.com/wordpress-themes/graphy",
    "i": "Themegraphy.png"
  },
  "Themes4Wp Bulk": {
    "d": "Themes4Wp Bulk is a modern and responsive multipurpose WordPress theme.",
    "w": "https://themes4wp.com/theme/bulk",
    "i": "Themes4Wp.png"
  },
  "ThemezHut Bam": {
    "d": "ThemezHut Bam is a great flexible WordPress theme for blogging sites.",
    "w": "https://themezhut.com/themes/bam",
    "i": "ThemezHut.png"
  },
  "ThemezHut HitMag": {
    "d": "ThemezHut HitMag is a stylish and powerful WordPress theme crafted for magazines, newspapers or personal blogs.",
    "w": "https://themezhut.com/themes/hitmag",
    "i": "ThemezHut.png"
  },
  "Themonic Iconic One": {
    "d": "Themonic Iconic One is a premium quality WordPress theme with pixel perfect typography and responsiveness and is built for speed.",
    "w": "https://themonic.com/iconic-one",
    "i": "Themonic.png"
  },
  "Thesis": {
    "d": "Thesis is a conversion rate optimisation company.",
    "w": "https://www.thesistesting.com",
    "i": "Thesis.svg"
  },
  "ThimPress Course Review": {
    "d": "Course Review is a WordPress plugin by ThimPress. Course Review gives students the opportunity to evaluate and provide feedback in order to improve the course.",
    "w": "https://wordpress.org/plugins/learnpress-course-review",
    "i": "ThimPress.svg"
  },
  "ThimPress Course Wishlist": {
    "d": "Course Wishlist is a WordPress plugin by ThimPress. Course Wishlist bring wishlist feature for LearnPress.",
    "w": "https://wordpress.org/plugins/learnpress-wishlist",
    "i": "ThimPress.svg"
  },
  "ThimPress Gradebook": {
    "d": "Gradebook is a WordPress plugin by ThimPress. Gradebook add-on for LearnPress makes it easier to track the students learning progress and result.",
    "w": "https://thimpress.com/product/gradebook-add-on-for-learnpress",
    "i": "ThimPress.svg"
  },
  "ThimPress LearnPress": {
    "d": "LearnPress is a WordPress LMS plugin by ThimPress.",
    "w": "https://wordpress.org/plugins/learnpress",
    "i": "ThimPress.svg"
  },
  "Thimatic": {
    "d": "Thimatic is a Shopify app for product reviews.",
    "w": "https://thimatic-apps.com/",
    "i": "Thimatic.png"
  },
  "Think Up Themes Consulting": {
    "d": "Think Up Themes Consulting is a multipurpose WordPress theme that is available for free download and also offers a pro version.",
    "w": "https://www.thinkupthemes.com/themes/consulting",
    "i": "Think Up Themes.png"
  },
  "Think Up Themes Minamaze": {
    "d": "Think Up Themes Minamaze is a multipurpose WordPress theme that is available for free download and also offers a pro version.",
    "w": "https://www.thinkupthemes.com/themes/minamaze",
    "i": "Think Up Themes.png"
  },
  "ThinkPHP": {
    "d": "ThinkPHP is an open-source PHP framework with MVC structure developed and maintained by Shanghai Topthink Company.",
    "w": "http://www.thinkphp.cn",
    "i": "ThinkPHP.png"
  },
  "Thinkific": {
    "d": "Thinkific is a software platform that enables entrepreneurs to create, market, sell, and deliver their own online courses.",
    "w": "https://www.thinkific.com",
    "i": "Thinkific.svg"
  },
  "ThreatMetrix": {
    "d": "LexisNexis ThreatMetrix is an enterprise solution for online risk and fraud protection ('digital identity intelligence and digital authentication').",
    "w": "https://risk.lexisnexis.com/products/threatmetrix",
    "i": "threatmetrix.png"
  },
  "Three.js": {
    "d": "Three.js is a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL.",
    "w": "https://threejs.org",
    "i": "Three.js.svg"
  },
  "Threekit": {
    "d": "Threekit is a visual customer experience solution that enables brands to create, manage and scale photorealistic images and 3D product visuals, all from a single design file.",
    "w": "https://www.threekit.com",
    "i": "Threekit.svg"
  },
  "Thrive Apprentice": {
    "d": "Thrive Apprentice is a WordPress plugin for creating online courses and also a membership plugin.",
    "w": "https://thrivethemes.com/apprentice/",
    "i": "Thrive.svg"
  },
  "Thrive Architect": {
    "d": "Thrive Architect is the visual page builder for WordPress.",
    "w": "https://thrivethemes.com/architect/",
    "i": "Thrive.svg"
  },
  "Thrive Comments": {
    "d": "Thrive Comments plugin replaces the standard WordPress comments from your website.",
    "w": "https://thrivethemes.com/comments/",
    "i": "Thrive.svg"
  },
  "Thrive Leads": {
    "d": "Thrive Leads is an all-in-one email list building plugin for WordPress.",
    "w": "https://thrivethemes.com/leads/",
    "i": "Thrive.svg"
  },
  "Thrive Quiz Builder": {
    "d": "Thrive Quiz Builder is a powerful WordPress plugin that can help you to create quizzes for your website or blog.",
    "w": "https://thrivethemes.com/quizbuilder",
    "i": "Thrive.svg"
  },
  "Thrive Ultimatum": {
    "d": "Thrive Ultimatum is a WordPress scarcity marketing plugin with built-in templates and campaign tracking tools from developer Thrive Themes.",
    "w": "https://thrivethemes.com/ultimatum/",
    "i": "Thrive.svg"
  },
  "ThriveCart": {
    "d": "ThriveCart is a sales cart solution that lets you create checkout pages for your online products and services.",
    "w": "https://thrivecart.com",
    "i": "ThriveCart.svg"
  },
  "Ticimax": {
    "w": "https://www.ticimax.com",
    "i": "Ticimax.png"
  },
  "Tictail": {
    "w": "https://tictail.com",
    "i": "tictail.png"
  },
  "TiddlyWiki": {
    "d": "TiddlyWiki is an open-source notebook for capturing, organising and sharing complex information.",
    "w": "http://tiddlywiki.com",
    "i": "TiddlyWiki.png"
  },
  "Tidio": {
    "d": "Tidio is a customer communication product. It provides multi-channel support so users can communicate with customers on the go. Live chat, messenger, or email are all supported.",
    "w": "https://www.tidio.com",
    "i": "Tidio.svg"
  },
  "Tiendanube": {
    "d": "Tiendanube is an ecommerce platform.",
    "w": "https://www.tiendanube.com",
    "i": "Tiendanube.svg"
  },
  "TikTok Pixel": {
    "w": "https://ads.tiktok.com",
    "i": "TikTok.svg"
  },
  "Tiki Wiki CMS Groupware": {
    "d": "Tiki Wiki is a free and open-source wiki-based content management system and online office suite written primarily in PHP.",
    "w": "http://tiki.org",
    "i": "Tiki Wiki CMS Groupware.png"
  },
  "Tilda": {
    "d": "Tilda is a web design tool.",
    "w": "https://tilda.cc",
    "i": "Tilda.svg"
  },
  "Tiledesk": {
    "d": "Tiledesk is the full-stack open-source Live Chat with built-in Chatbots, written in Node.js and Angular.",
    "w": "https://tiledesk.com",
    "i": "Tiledesk.png"
  },
  "Timeplot": {
    "w": "http://www.simile-widgets.org/timeplot/",
    "i": "Timeplot.png"
  },
  "Timify": {
    "d": "Timify is an online scheduling and resource management software for small, medium and large businesses.",
    "w": "https://www.timify.com",
    "i": "Timify.svg"
  },
  "Tiny Slider": {
    "d": "Tiny Slider is a vanilla javascript slider for all purposes.",
    "w": "https://github.com/ganlanyuan/tiny-slider",
    "i": "default.svg"
  },
  "TinyMCE": {
    "d": "TinyMCE is an online rich-text editor released as open-source software. TinyMCE is designed to integrate with JavaScript libraries, Vue.js, and AngularJS as well as content management systems such as Joomla!, and WordPress.",
    "w": "https://www.tiny.cloud/tinymce/",
    "i": "TinyMCE.svg"
  },
  "Tippy.js": {
    "d": "Tippy.js is the complete tooltip, popover, dropdown, and menu solution for the web, powered by Popper.",
    "w": "https://atomiks.github.io/tippyjs",
    "i": "Tippy.js.svg"
  },
  "Tipsa": {
    "d": "TIPSA is a parcel delivery company in Spain, Portugal and Andorra.",
    "w": "https://www.tip-sa.com",
    "i": "Tipsa.svg"
  },
  "Tiqets": {
    "d": "Tiqets provides a complete overview of a city - museums, attractions, zoos, canal cruises, concerts. Publishers joined to the Tiqets affiliate program can receive 6% commission during our 30-day cookie window from completed total bookings resulting from featuring links to Tiqets products and content across their brand: blog/website, social media, newsletters, etc.",
    "w": "https://www.tiqets.com/affiliate",
    "i": "Tiqets.svg"
  },
  "Titan": {
    "w": "http://titan360.com",
    "i": "Titan.png"
  },
  "TomTom Maps": {
    "d": "TomTom Maps is a web mapping service.",
    "w": "https://www.tomtom.com",
    "i": "TomTom.svg"
  },
  "TomatoCart": {
    "w": "http://tomatocart.com",
    "i": "TomatoCart.png"
  },
  "TornadoServer": {
    "w": "http://tornadoweb.org",
    "i": "TornadoServer.png"
  },
  "TotalCode": {
    "w": "http://www.totalcode.com",
    "i": "TotalCode.png"
  },
  "Totango": {
    "d": "Totango is a customer success platform that helps recurring revenue businesses simplify the complexities of customer success by connecting the dots of customer data, actively monitoring customer health changes, and driving proactive engagements.",
    "w": "https://www.totango.com",
    "i": "Totango.svg"
  },
  "Totara": {
    "d": "Totara is a learning management system designed for businesses.",
    "w": "https://www.totaralearning.com",
    "i": "Totara.svg"
  },
  "Touch2Success": {
    "d": "Touch2Success is a fully featured restaurant POS software designed to serve startups, enterprises.",
    "w": "https://www.touch2success.com",
    "i": "Touch2Success.svg"
  },
  "TownNews": {
    "d": "TownNews is a CMS platform built for local media organizations.",
    "w": "https://townnews.com/",
    "i": "townnews.png"
  },
  "Trac": {
    "w": "http://trac.edgewall.org",
    "i": "Trac.png"
  },
  "TrackJs": {
    "d": "TrackJS is an error monitoring agent for production web sites and applications.",
    "w": "http://trackjs.com",
    "i": "TrackJs.svg"
  },
  "Trackify X": {
    "d": "Trackify X is a pixel engine that helps merchants backup their pixel data and manage multiple pixels.",
    "w": "https://trackifyapp.com",
    "i": "Trackify X.png"
  },
  "Tradedoubler": {
    "d": "Tradedoubler is a global affiliate marketing network.",
    "w": "https://www.tradedoubler.com/",
    "i": "Tradedoubler.svg"
  },
  "TradingView": {
    "d": "TradingView is used to show world chart, chats and trades markets.",
    "w": "https://www.tradingview.com",
    "i": "trading_view.svg"
  },
  "Traek": {
    "d": "Traek is a website insights, analytics and lead generation tool.",
    "w": "https://www.traek.io",
    "i": "Traek.svg"
  },
  "TrafficStars": {
    "d": "TrafficStars is a self-served ad network and ad exchange that operates mainly in adult-related verticals.",
    "w": "https://trafficstars.com",
    "i": "TrafficStars.png"
  },
  "Transcend": {
    "d": "Transcend is data privacy management compliance platform.",
    "w": "http://www.transcend.io",
    "i": "Transcend.svg"
  },
  "Transcy": {
    "d": "Transcy is a Shopify translation app. Transcy allows you to translate your whole store content into target languages to reach different nation shoppers.",
    "w": "https://transcy.io",
    "i": "Transcy.png"
  },
  "Transifex": {
    "w": "https://www.transifex.com",
    "i": "transifex.png"
  },
  "Transistor.fm": {
    "d": "Transistor.fm is a podcast host, distribution and management platform.",
    "w": "https://transistor.fm",
    "i": "Transistor.fm.svg"
  },
  "Translate WordPress": {
    "d": "Translate WordPress is a website translator plugin which can translate any website to any language automatically. Translate WordPress plugin is now a part of GTranslate family.",
    "w": "https://gtranslate.io",
    "i": "GTranslate.svg"
  },
  "Transmart": {
    "d": "Transmart is a shipping company in Turkey.",
    "w": "https://transmartshipping.com"
  },
  "Tray": {
    "d": "Tray is an all-in-one ecommerce platform from Brazil.",
    "w": "https://www.tray.com.br",
    "i": "tray.png"
  },
  "Trbo": {
    "d": "Trbo is a personalisation, recommendations, A/B testing platform from Germany.",
    "w": "https://www.trbo.com",
    "i": "Trbo.svg"
  },
  "Treasure Data": {
    "d": "Treasure Data is the only enterprise customer data platform.",
    "w": "https://www.treasuredata.com",
    "i": "Treasure Data.svg"
  },
  "Trengo": {
    "d": "Trengo is an omnichannel communication platform that unifies all messaging channels into one single view.",
    "w": "https://trengo.com",
    "i": "Trengo.svg"
  },
  "Triggerbee": {
    "d": "Triggerbee is an onsite personalisation platform that lets you use customer and behavioral data to build and launch personalised campaigns.",
    "w": "https://triggerbee.com",
    "i": "Triggerbee.png"
  },
  "Trinity Audio": {
    "d": "Trinity Audio's AI-driven solutions help publishers and content creators create a world of smart audio experiences for their audiences, covering every stage of the audio journey from creation to distribution.",
    "w": "https://www.trinityaudio.ai",
    "i": "Trinity Audio.svg"
  },
  "Tripadviser.Widget": {
    "d": "Tripadvisor embed reviews widget.",
    "w": "https://www.tripadvisor.com/Widgets",
    "i": "Tripadviser.Widget.svg"
  },
  "Triple Whale": {
    "d": "The Triple Whale platform combines centralization, visualization, and attribution into a dashboard that presents and illustrates KPIs in an actionable way.",
    "w": "https://triplewhale.com/",
    "i": "triplewhale.svg"
  },
  "TripleLift": {
    "d": "TripleLift is an advertising technology company providing native programmatic to buyers and sellers.",
    "w": "https://triplelift.com",
    "i": "TripleLift.png"
  },
  "Tritac Katana Commerce": {
    "d": "Katana Commerce is Tritac's B2B and B2C ecommerce platform.",
    "w": "https://www.tritac.com/nl/producten/katana-commerce/",
    "i": "Tritac.svg"
  },
  "Trix": {
    "d": "Trix is an open-source project from Basecamp, the creators of Ruby on Rails.",
    "w": "https://trix-editor.org",
    "i": "trix.png"
  },
  "Trove Recommerce": {
    "d": "Trove (formerly Yerdle) builds white-label technology and end-to-end operations for ecommerce platforms.",
    "w": "https://trove.co",
    "i": "trove.png"
  },
  "TruValidate": {
    "d": "TransUnion TruValidate (previously ReputationShield/IDVision from iovation) is an online risk and fraud detection platform.",
    "w": "https://www.transunion.com/solution/truvalidate",
    "i": "TruValidate.svg"
  },
  "True Fit": {
    "d": "True Fit is a data-driven personalisation platform for footwear and apparel retailers.",
    "w": "https://www.truefit.com",
    "i": "True Fit.png"
  },
  "TrueCommerce": {
    "d": "TrueCommerce is an eCommerce platform.",
    "w": "https://www.truecommerce.com",
    "i": "Truecommerce.svg"
  },
  "Truepush": {
    "d": "Truepush is web-based push notification service available for PWA, AMP, WordPress, and Shopify.",
    "w": "https://www.truepush.com",
    "i": "truepush.svg"
  },
  "Trumba": {
    "d": "Trumba offers web-hosted event calendar software for publishing online, interactive, calendars of events.",
    "w": "https://www.trumba.com",
    "i": "Trumba.png"
  },
  "Trunkrs": {
    "d": "Trunkrs is a Dutch parcel delivery service.",
    "w": "https://trunkrs.nl",
    "i": "Trunkrs.svg"
  },
  "TrustArc": {
    "d": "TrustArc provides software and services to help corporations update their privacy management processes so they comply with government laws and best practices.",
    "w": "http://trustarc.com",
    "i": "TrustArc.svg"
  },
  "TrustYou": {
    "d": "TrustYou is guest feedback and hotel reputation software company located in Germany.",
    "w": "https://www.trustyou.com",
    "i": "TrustYou.svg"
  },
  "Trusted Shops": {
    "d": "Trusted Shops is a company that acts as a 3'rd party representing the common interests of both consumers and retailers.",
    "w": "https://www.trustedshops.co.uk",
    "i": "Trusted Shops.svg"
  },
  "Trustindex Google Reviews": {
    "d": "Google Reviews s a premium plugin that can help you to embed reviews on your site by Trustindex.",
    "w": "https://www.trustindex.io",
    "i": "Trustindex.svg"
  },
  "Trustpilot": {
    "d": "Trustpilot is a Danish consumer review website which provide embed stand-alone applications in your website to show your most recent reviews, TrustScore, and star ratings.",
    "w": "https://business.trustpilot.com",
    "i": "Trustpilot.svg"
  },
  "Trustspot": {
    "d": "TrustSpot provides a solution to capture ratings & reviews, video testimonials, photos, social experiences, and product Q&A.",
    "w": "https://trustspot.io/",
    "i": "Trustspot.png"
  },
  "Trustvox": {
    "d": "Trustvox collects reviews from customers who purchased ecommerce products and publishes them on product pages with Sincerity Seals.",
    "w": "https://site.trustvox.com.br",
    "i": "Trustvox.png"
  },
  "TryNow": {
    "d": "TryNow is an ecommerce platform designed to offer a try before you buy experience for shoppers.",
    "w": "https://www.trynow.io",
    "i": "TryNow.svg"
  },
  "Tumblr": {
    "d": "Tumblr is a microblogging and social networking website. The service allows users to post multimedia and other content to a short-form blog.",
    "w": "http://www.tumblr.com",
    "i": "Tumblr.png"
  },
  "Turbo": {
    "d": "Turbo is a JavaScript framework for building fast web applications.",
    "w": "https://turbo.hotwired.dev/",
    "i": "Turbo.svg"
  },
  "Turbolinks": {
    "d": "Turbolinks is a Rails feature, available as a gem and enabled by default in new Rails apps. It is intended to speed up navigating between pages of your application.",
    "w": "https://github.com/turbolinks/turbolinks"
  },
  "TurfJS": {
    "d": "Turf is a modular geospatial engine written in JavaScript.",
    "w": "https://turfjs.org/",
    "i": "TurfJS.svg"
  },
  "Twenty Eleven": {
    "d": "Twenty Eleven is the default WordPress theme for 2011.",
    "w": "https://wordpress.org/themes/twentyeleven",
    "i": "WordPress.svg"
  },
  "Twenty Fifteen": {
    "d": "Twenty Fifteen is the default WordPress theme for 2015.",
    "w": "https://wordpress.org/themes/twentyfifteen",
    "i": "WordPress.svg"
  },
  "Twenty Fourteen": {
    "d": "Twenty Fourteen is the default WordPress theme for 2014.",
    "w": "https://wordpress.org/themes/twentyfourteen",
    "i": "WordPress.svg"
  },
  "Twenty Nineteen": {
    "d": "Twenty Nineteen is the default WordPress theme for 2019.",
    "w": "https://wordpress.org/themes/twentynineteen",
    "i": "WordPress.svg"
  },
  "Twenty Seventeen": {
    "d": "Twenty Seventeen is the default WordPress theme for 2017.",
    "w": "https://wordpress.org/themes/twentyseventeen",
    "i": "WordPress.svg"
  },
  "Twenty Sixteen": {
    "d": "Twenty Sixteen is the default WordPress theme for 2016.",
    "w": "https://wordpress.org/themes/twentysixteen",
    "i": "WordPress.svg"
  },
  "Twenty Ten": {
    "d": "Twenty Ten is the default WordPress theme for 2010.",
    "w": "https://wordpress.org/themes/twentyten",
    "i": "WordPress.svg"
  },
  "Twenty Thirteen": {
    "d": "Twenty Thirteen is the default WordPress theme for 2013.",
    "w": "https://wordpress.org/themes/twentythirteen",
    "i": "WordPress.svg"
  },
  "Twenty Twelve": {
    "d": "Twenty Twelve is the default WordPress theme for 2012.",
    "w": "https://wordpress.org/themes/twentytwelve",
    "i": "WordPress.svg"
  },
  "Twenty Twenty": {
    "d": "Twenty Twenty is the default WordPress theme for 2020.",
    "w": "https://wordpress.org/themes/twentytwenty",
    "i": "WordPress.svg"
  },
  "Twenty Twenty-One": {
    "d": "Twenty Twenty-One is the default WordPress theme for 2021.",
    "w": "https://wordpress.org/themes/twentytwentyone",
    "i": "WordPress.svg"
  },
  "Twenty Twenty-Three": {
    "d": "Twenty Twenty-Three is the default WordPress theme for 2023.",
    "w": "https://wordpress.org/themes/twentytwentythree",
    "i": "WordPress.svg"
  },
  "Twenty Twenty-Two": {
    "d": "Twenty Twenty-Two is the default WordPress theme for 2022.",
    "w": "https://wordpress.org/themes/twentytwentytwo",
    "i": "WordPress.svg"
  },
  "TwicPics": {
    "d": "TwicPics offers on-demand responsive image generation.",
    "w": "https://www.twicpics.com",
    "i": "TwicPics.svg"
  },
  "Twik": {
    "d": "Twik provides a automated, no-configuration business intelligence & personalization automation engine.",
    "w": "https://www.twik.io/",
    "i": "Twik.svg"
  },
  "Twikoo": {
    "d": "Twikoo is a simple, safe, free comment system.",
    "w": "https://twikoo.js.org",
    "i": "Twikoo.png"
  },
  "Twilight CMS": {
    "w": "http://www.twilightcms.com",
    "i": "Twilight CMS.png"
  },
  "Twilio Authy": {
    "d": "Twilio Authy provides Two-factor authentication (2FA) adds an additional layer of protection beyond passwords.",
    "w": "https://authy.com",
    "i": "twilio_authy.svg"
  },
  "TwistPHP": {
    "w": "http://twistphp.com",
    "i": "TwistPHP.png"
  },
  "TwistedWeb": {
    "w": "http://twistedmatrix.com/trac/wiki/TwistedWeb",
    "i": "TwistedWeb.png"
  },
  "Twitch Player": {
    "d": "Twitch is an American video live streaming service that focuses on video game live streaming, including broadcasts of esports competitions.",
    "w": "https://dev.twitch.tv/docs/embed/video-and-clips/",
    "i": "Twitch.svg"
  },
  "Twitter": {
    "d": "Twitter is a 'microblogging' system that allows you to send and receive short posts called tweets.",
    "w": "http://twitter.com",
    "i": "Twitter.svg"
  },
  "Twitter Ads": {
    "d": "Twitter Ads is an advertising platform for Twitter 'microblogging' system.",
    "w": "https://ads.twitter.com",
    "i": "Twitter.svg"
  },
  "Twitter Analytics": {
    "d": "Twitter Analytics is a built-in data-tracking platform that shows you insights specific to your Twitter account and activity.",
    "w": "https://analytics.twitter.com",
    "i": "Twitter.svg"
  },
  "Twitter Emoji (Twemoji)": {
    "d": "Twitter Emoji is a set of open-source emoticons and emojis for Twitter, TweetDeck, and also for Android and iOS versions of the application.",
    "w": "https://twitter.github.io/twemoji/"
  },
  "Twitter Flight": {
    "w": "https://flightjs.github.io/",
    "i": "Twitter Flight.png"
  },
  "Twitter typeahead.js": {
    "w": "https://twitter.github.io/typeahead.js",
    "i": "Twitter typeahead.js.png"
  },
  "TypeDoc": {
    "d": "TypeDoc is an API documentation generator for TypeScript projects.",
    "w": "https://typedoc.org",
    "i": "TypeDoc.png"
  },
  "TypePad": {
    "d": "Typepad is a blog hosting service.",
    "w": "http://www.typepad.com",
    "i": "TypePad.png"
  },
  "TypeScript": {
    "d": "TypeScript is an open-source language which builds on JavaScript  by adding static type definitions.",
    "w": "https://www.typescriptlang.org",
    "i": "TypeScript.svg"
  },
  "Typecho": {
    "d": "Typecho is a PHP Blogging Platform.",
    "w": "http://typecho.org/",
    "i": "typecho.svg"
  },
  "Typeform": {
    "d": "Typeform is a Spanish online software as a service (SaaS) company that specialises in online form building and online surveys.",
    "w": "https://www.typeform.com",
    "i": "Typeform.png"
  },
  "Typekit": {
    "d": "Typekit is an online service which offers a subscription library of fonts.",
    "w": "http://typekit.com",
    "i": "Typekit.png"
  },
  "Typof": {
    "d": "Typof is an ecommerce platform for artisans that allows to create a premium website and sell items directly to the consumer.",
    "w": "https://typof.com",
    "i": "Typof.png"
  },
  "Tyslo EasySell": {
    "d": "Tyslo EasySell replaces default Shopify checkout process by embedding (or popup) a simple order form on the product or cart page.",
    "w": "https://tyslo.com",
    "i": "Tyslo EasySell.png"
  },
  "theTradeDesk": {
    "d": "theTradeDesk is an technology company that markets a software platform used by digital ad buyers to purchase data-driven digital advertising campaigns across various ad formats and devices.",
    "w": "https://www.thetradedesk.com",
    "i": "theTradeDesk.svg"
  },
  "thttpd": {
    "w": "https://acme.com/software/thttpd",
    "i": "thttpd.png"
  },
  "toastr": {
    "d": "toastr is a Javascript library for non-blocking notifications. The goal is to create a simple core library that can be customized and extended.",
    "w": "https://github.com/CodeSeven/toastr",
    "i": "toastr.png"
  },
  "total.js": {
    "w": "https://totaljs.com",
    "i": "total.js.png"
  },
  "U-KOMI": {
    "d": "U-KOMI is a user generated content review marketing tool.",
    "w": "https://u-komi.com/en/",
    "i": "U-KOMI.svg"
  },
  "UIKit": {
    "d": "UIKit is the framework used for developing iOS applications.",
    "w": "https://getuikit.com",
    "i": "UIKit.svg"
  },
  "UK Mail": {
    "d": "UK Mail is a postal service company operating in the United Kingdom.",
    "w": "https://www.ukmail.com",
    "i": "UK Mail.png"
  },
  "UKFast": {
    "d": "UKFast is a business-to-business internet hosting company based in Manchester, UK.",
    "w": "https://www.ukfast.co.uk",
    "i": "UKFast.png"
  },
  "UMI.CMS": {
    "w": "https://www.umi-cms.ru",
    "i": "UMI.CMS.png"
  },
  "UNIX": {
    "d": "Unix is a family of multitasking, multiuser computer operating systems.",
    "w": "http://unix.org",
    "i": "UNIX.png"
  },
  "UPS": {
    "d": "UPS is an American multinational shipping & receiving and supply chain management company.",
    "w": "https://www.ups.com",
    "i": "UPS.svg"
  },
  "USPS": {
    "d": "The United States Postal Service (USPS) is an independent agency of the executive branch of the United States federal government responsible for providing postal service in the United States.",
    "w": "https://www.usps.com",
    "i": "USPS.svg"
  },
  "USWDS": {
    "d": "USWDS is a design system for the federal government.",
    "w": "https://designsystem.digital.gov",
    "i": "USWDS.svg"
  },
  "Ubercart": {
    "w": "http://www.ubercart.org",
    "i": "Ubercart.png"
  },
  "Ubiliz": {
    "d": "Ubiliz is a gift voucher ecommerce solution.",
    "w": "https://www.ubiliz.com",
    "i": "Ubiliz.svg"
  },
  "Ubuntu": {
    "d": "Ubuntu is a free and open-source operating system on Linux for the enterprise server, desktop, cloud, and IoT.",
    "w": "http://www.ubuntu.com/server",
    "i": "Ubuntu.svg"
  },
  "Ueeshop": {
    "d": "Ueeshop is a ecommerce platform from China.",
    "w": "https://www.ueeshop.com",
    "i": "Ueeshop.png"
  },
  "Ultimate GDPR & CCPA": {
    "d": "Ultimate GDPR & CCPA is a compliance toolkit for WordPress by createIT",
    "w": "https://www.createit.com/gdpr",
    "i": "Ultimate GDPR & CCPA.png"
  },
  "UltimatelySocial": {
    "d": "Ultimately Social (Share Buttons & Sharing Icons) is a plugin that allows you to place fancy social media icons and buttons on your WordPress website.",
    "w": "https://www.ultimatelysocial.com",
    "i": "UltimatelySocial.png"
  },
  "UltraCart": {
    "w": "http://ultracart.com",
    "i": "UltraCart.png"
  },
  "Umami": {
    "d": "Umami is a self-hosted web analytics solution. It's goal is to provide a friendlier, privacy-focused alternative to Google Analytics and a free, open-sourced alternative to paid solutions.",
    "w": "https://umami.is/",
    "i": "umami.svg"
  },
  "Umbraco": {
    "d": "Umbraco is an open-source Microsoft ASP.NET based content management system.",
    "w": "https://umbraco.com/",
    "i": "Umbraco.png"
  },
  "UmiJs": {
    "d": "UmiJs is a scalable, enterprise-class frontend application framework that supports both configuration and conventional routing while maintaining functional completeness, such as dynamic routing, nested routing, and permission routing.",
    "w": "https://umijs.org",
    "i": "UmiJs.png"
  },
  "Umso": {
    "d": "Umso is a website builder for Startups.",
    "w": "https://www.umso.com",
    "i": "Umso.svg"
  },
  "Unbounce": {
    "d": "Unbounce is a tool to build landing pages.",
    "w": "http://unbounce.com",
    "i": "Unbounce.png"
  },
  "Unbxd": {
    "d": "Unbxd is an ecommerce product discovery platform that applies artificial intelligence and advanced data sciences to connect shoppers to the products they are most likely to buy.",
    "w": "https://unbxd.com",
    "i": "Unbxd.svg"
  },
  "Underscore.js": {
    "d": "Underscore.js is a JavaScript library which provides utility functions for common programming tasks. It is comparable to features provided by Prototype.js and the Ruby language, but opts for a functional programming design instead of extending object prototypes.",
    "w": "http://underscorejs.org",
    "i": "Underscore.js.png"
  },
  "Understrap": {
    "d": "Understrap is a renowned WordPress starter theme framework that combined Underscores and Bootstrap.",
    "w": "https://understrap.com",
    "i": "Understrap.png"
  },
  "UniFi OS": {
    "d": "UniFi OS is the operating system for UniFi products, which provides a user interface.",
    "w": "https://www.ui.com/",
    "i": "UniFi_OS.png"
  },
  "Uniconsent": {
    "w": "https://www.uniconsent.com/",
    "i": "Uniconsent.png"
  },
  "Unicorn Platform": {
    "d": "Unicorn Platform is a drag and drop website and blog builder for startups, mobile apps, and SaaS.",
    "w": "https://unicornplatform.com",
    "i": "Unicorn Platform.svg"
  },
  "UnoCSS": {
    "d": "UnoCSS is instant on-demand Atomic CSS engine.",
    "w": "https://uno.antfu.me/",
    "i": "UnoCSS.svg"
  },
  "Unpkg": {
    "d": "Unpkg is a content delivery network for everything on npm.",
    "w": "https://unpkg.com",
    "i": "Unpkg.png"
  },
  "Unruly": {
    "d": "Unruly is a video advertising platform.",
    "w": "https://unruly.co",
    "i": "Unruly.png"
  },
  "UpSellit": {
    "d": "UpSellit is a performance based lead and cart abandonment recovery solutions.",
    "w": "https://us.upsellit.com",
    "i": "UpSellit.png"
  },
  "Upfluence": {
    "d": "Upfluence is the all-in-one affiliate and influencer marketing platform for ecommerce and direct-to-consumer brands.",
    "w": "https://www.upfluence.com",
    "i": "Upfluence.svg"
  },
  "Uploadcare": {
    "d": "Uploadcare is a complete file handling platform for online business. Receive files from you users via File Uploader or File Upload API, implement image optimization and transformations with Image CDN API, and get HIPAA-compliant storage.",
    "w": "https://uploadcare.com",
    "i": "Uploadcare.svg"
  },
  "Upptime": {
    "d": "Upptime is the open-source uptime monitor and status page, powered entirely by GitHub Actions, Issues, and Pages.",
    "w": "https://upptime.js.org",
    "i": "Upptime.svg"
  },
  "Upserve": {
    "d": "Upserve is a restaurant management solution featuring an Android or iOS-based point-of-sale system, online ordering, contactless payments, automated inventory management, sales analytics, and more.",
    "w": "https://onlineordering.upserve.com",
    "i": "Upserve.svg"
  },
  "UptimeRobot": {
    "d": "UptimeRobot is a web-based software that is designed to monitor the sites frequently to check whether any site is down owing to server problem or any bug in coding.",
    "w": "https://uptimerobot.com",
    "i": "UptimeRobot.svg"
  },
  "Uptrends": {
    "d": "Uptrends is a website and web performance monitoring solution.",
    "w": "https://www.uptrends.com",
    "i": "Uptrends.svg"
  },
  "Upvoty": {
    "w": "https://upvoty.com",
    "i": "upvoty.png"
  },
  "UsableNet": {
    "d": "UsableNet is a technology for web accessibility and digital transformation, providing end-to-end services.",
    "w": "https://usablenet.com",
    "i": "UsableNet.png"
  },
  "Uscreen": {
    "d": "Uscreen is a CMS to monetize VOD and live content. They provide site hosting, video hosting, and a payment gateway for selling video based content.",
    "w": "https://uscreen.tv/",
    "i": "Uscreen.svg"
  },
  "UserLike": {
    "d": "Userlike is a cloud-based live chat solution that can be integrated with existing websites.",
    "w": "http://userlike.com",
    "i": "UserLike.svg"
  },
  "UserReport": {
    "d": "UserReport is an online survey and feedback management platform.",
    "w": "https://www.userreport.com",
    "i": "UserReport.svg"
  },
  "UserRules": {
    "w": "http://www.userrules.com",
    "i": "UserRules.png"
  },
  "UserVoice": {
    "d": "UserVoice is a management to collect and analyse feedback from customers.",
    "w": "http://uservoice.com",
    "i": "UserVoice.svg"
  },
  "UserWay": {
    "d": "UserWay is a web accessibility overlay for websites that claims to improve compliance with accessibility standards.",
    "w": "https://userway.org/",
    "i": "UserWay.svg"
  },
  "UserZoom": {
    "d": "UserZoom is a cloud-based user experience solution.",
    "w": "https://www.userzoom.com",
    "i": "UserZoom.png"
  },
  "Usercentrics": {
    "d": "Usercentrics is a SaaS enterprise solution for Consent Management (CMP) that helps enterprise customers to obtain, manage and document the user consent.",
    "w": "https://usercentrics.com",
    "i": "Usercentrics.svg"
  },
  "Userflow": {
    "d": "Userflow is a user onboarding software for building product tours and onboarding checklists, tailored to your app and your users.",
    "w": "https://userflow.com",
    "i": "Userflow.svg"
  },
  "Userpilot": {
    "d": "Userpilot is a cloud-based product experience platform designed for customer success and product teams to onboard users and increase product adoption through behavior-triggered experiences.",
    "w": "https://userpilot.com",
    "i": "Userpilot.svg"
  },
  "Ushahidi": {
    "d": "Ushahidi is a tool that collects crowdsourced data and targeted survey responses from multiple data sources.",
    "w": "http://www.ushahidi.com",
    "i": "Ushahidi.png"
  },
  "Usizy": {
    "d": "Usizy is the top size recommendation and prediction solution for ecommerce using machine learning, big data, and isomoprhic algorythms.",
    "w": "https://usizy.com",
    "i": "Usizy.svg"
  },
  "Uvicorn": {
    "w": "https://www.uvicorn.org/",
    "i": "uvicorn.png"
  },
  "uKnowva": {
    "w": "https://uknowva.com",
    "i": "uKnowva.png"
  },
  "uLogin": {
    "d": "uLogin is a tool that enables its users to get unified access to various Internet services.",
    "w": "https://ulogin.ru",
    "i": "uLogin.png"
  },
  "uMarketingSuite": {
    "d": "uMarketingSuite is a set of diverse features that together form a full marketing suite for the Umbraco platform.",
    "w": "https://www.umarketingsuite.com",
    "i": "uMarketingSuite.svg"
  },
  "uPlot": {
    "d": "uPlot is a small, fast chart for time series, lines, areas, ohlc and bars.",
    "w": "https://leeoniya.github.io/uPlot",
    "i": "uPlot.png"
  },
  "uPortal": {
    "d": "uPortal is an open source enterprise portal framework built by and for higher education institutions.",
    "w": "https://www.apereo.org/projects/uportal",
    "i": "uPortal.png"
  },
  "uRemediate": {
    "d": "uRemediate provides web accessibility testing tools and accessibility overlays.",
    "w": "https://www.user1st.com/uremediate/",
    "i": "User1st.png"
  },
  "user.com": {
    "w": "https://user.com",
    "i": "user.com.svg"
  },
  "utterances": {
    "d": "Utterances is a lightweight comments widget built on GitHub issues.",
    "w": "https://utteranc.es/",
    "i": "utterances.svg"
  },
  "VAPTCHA": {
    "d": "VAPTCHA is the abbreviation of (Variation Analysis based Public Turing Test to Tell Computers and Humans Apart), also known as gesture verification code, is a human-machine verification solution based on artificial intelligence and big data.",
    "w": "https://en.vaptcha.com",
    "i": "VAPTCHA.svg"
  },
  "VDX.tv": {
    "d": "VDX.tv (formerly Exponential) is a global advertising technology company that is transforming the way brands connect with relevant audiences in today's converging video landscape.",
    "w": "https://vdx.tv",
    "i": "VDX.tv.png"
  },
  "VIVVO": {
    "w": "http://vivvo.net",
    "i": "VIVVO.png"
  },
  "VK Pixel": {
    "d": "VK is a Russian online social media and social networking service.",
    "w": "https://vk.com/",
    "i": "vk.svg"
  },
  "VKUI": {
    "d": "VKUI is a set of React components with which you can create interfaces that are visually indistinguishable from our iOS and Android applications.",
    "w": "https://vkcom.github.io/VKUI",
    "i": "vk.svg"
  },
  "VP-ASP": {
    "w": "http://www.vpasp.com",
    "i": "VP-ASP.png"
  },
  "VTEX": {
    "d": "VTEX is an ecommerce software that manages multiple online stores.",
    "w": "https://vtex.com/",
    "i": "VTEX.svg"
  },
  "VWO": {
    "d": "VWO is a website testing and conversion optimisation platform.",
    "w": "https://vwo.com",
    "i": "VWO.svg"
  },
  "VWO Engage": {
    "d": "VWO Engage is a part of the VWO Platform, which is a web-based push notification platform used by SaaS and B2B marketers, online content publishers, and ecommerce store owners.",
    "w": "https://vwo.com/engage",
    "i": "VWO.svg"
  },
  "Vaadin": {
    "d": "Vaadin is an open-source framework for building user interfaces and single-page applications using Java and TypeScript.",
    "w": "https://vaadin.com",
    "i": "Vaadin.svg"
  },
  "ValueCommerce": {
    "d": "ValueCommerce is a pay-per-performance advertising affiliate marketing network.",
    "w": "https://www.valuecommerce.co.jp",
    "i": "ValueCommerce.png"
  },
  "Vanco Payment Solutions": {
    "d": "Vanco Payment Solutions provides credit card processing to nonprofits.",
    "w": "https://www.vancopayments.com",
    "i": "Vanco.svg"
  },
  "Vanilla": {
    "d": "Vanilla is a both a cloud-based (SaaS) open-source community forum software.",
    "w": "http://vanillaforums.org",
    "i": "Vanilla.png"
  },
  "Varbase": {
    "w": "https://www.vardot.com/solutions/varbase",
    "i": "varbase.png"
  },
  "Variti": {
    "d": "Variti is a network security solutions firm that blocks bad bots, protects users from various automated abuse, attacks and fraud techniques.",
    "w": "https://variti.io",
    "i": "Variti.png"
  },
  "Varnish": {
    "d": "Varnish is a reverse caching proxy.",
    "w": "http://www.varnish-cache.org",
    "i": "Varnish.svg"
  },
  "Ve Global": {
    "d": "Ve Global, formerly known as Ve Interactive, is a global technology company that provides ecommerce businesses with a managed-service of proprietary marketing software and digital advertising solutions.",
    "w": "https://ve.com",
    "i": "Ve Global.png"
  },
  "Vendre": {
    "d": "Vendre is a module-based ecommerce system where you choose which functions your organisation needs.",
    "w": "https://vendre.io",
    "i": "Vendre.png"
  },
  "Venmo": {
    "d": "Venmo is a mobile payment service owned by PayPal. Venmo account holders can transfer funds to others via a mobile phone app.",
    "w": "https://venmo.com",
    "i": "Venmo.svg"
  },
  "VentraIP": {
    "d": "VentraIP is the largest privately owned web host and domain name registrar in Australia.",
    "w": "https://ventraip.com.au",
    "i": "VentraIP.svg"
  },
  "VentryShield": {
    "d": "VentryShield offers DDoS Protected VPS and Web Hosting.",
    "w": "https://ventryshield.net",
    "i": "ventry_shield.png"
  },
  "Veoxa": {
    "w": "http://veoxa.com",
    "i": "Veoxa.png"
  },
  "Vercel": {
    "d": "Vercel is a cloud platform for static frontends and serverless functions.",
    "w": "https://vercel.com",
    "i": "vercel.svg"
  },
  "Vercel Analytics": {
    "w": "https://vercel.com/analytics",
    "i": "vercel.svg"
  },
  "Verifone 2Checkout": {
    "d": "Verifone is an American multinational corporation headquartered in Coral Springs, Florida, that provides technology for electronic payment transactions and value-added services at the point-of-sale.",
    "w": "https://www.2checkout.com",
    "i": "Verifone.svg"
  },
  "VerifyPass": {
    "d": "VerifyPass is a company which provide secure identity proofing, authentication, and group affiliation verification for teachers and students.",
    "w": "https://verifypass.com",
    "i": "VerifyPass.png"
  },
  "Verizon Media": {
    "d": "Verizon Media is a tech and media company with global assets for advertisers, consumers and media companies.",
    "w": "https://www.verizonmedia.com",
    "i": "Verizon Media.svg"
  },
  "Verloop": {
    "d": "Verloop is provider of conversational AI platform for customer support automation.",
    "w": "https://verloop.io/",
    "i": "Verloop.png"
  },
  "ViaBill": {
    "d": "ViaBill is a cloud-based payment management solution designed to help small to midsize retailers and webshops.",
    "w": "https://viabill.com",
    "i": "ViaBill.png"
  },
  "Viafoura": {
    "d": "Viafoura is an audience engagement and social monetisation platform.",
    "w": "https://viafoura.com",
    "i": "viafoura.svg"
  },
  "Vidazoo": {
    "d": "Vidazoo is a video content and yield management platform.",
    "w": "https://www.vidazoo.com",
    "i": "Vidazoo.svg"
  },
  "Video Greet": {
    "d": "Video Greet lets your customers add a video message to gifts with QR codes.",
    "w": "https://apps.shopify.com/videogreet-gift-messages",
    "i": "Video Greet.png"
  },
  "VideoJS": {
    "d": "Video.js is a JavaScript and CSS library that makes it easier to work with and build on HTML5 video.",
    "w": "http://videojs.com",
    "i": "VideoJS.svg"
  },
  "Vigbo": {
    "w": "https://vigbo.com",
    "i": "vigbo.png"
  },
  "Vigil": {
    "d": "Vigil is a microservices status page. Monitors a distributed infrastructure and sends alerts (Slack, SMS, etc.).",
    "w": "https://github.com/valeriansaliou/vigil",
    "i": "default.svg"
  },
  "Vignette": {
    "w": "http://www.vignette.com",
    "i": "Vignette.png"
  },
  "Vimeo": {
    "d": "Vimeo is a video hosting, sharing and services platform. Vimeo operation an ad-free basis by providing subscription plans.",
    "w": "http://vimeo.com",
    "i": "Vimeo.svg"
  },
  "Vimeo OTT": {
    "d": "Vimeo OTT allows brands and creators to launch their own white-label video subscription channels, where subscribers can access video content for free, as a rental, or for purchase.",
    "w": "https://vimeo.com/ott",
    "i": "Vimeo.svg"
  },
  "Viqeo": {
    "d": "Viqeo is a short video platform to make media and ecommerce more visual and interesting.",
    "w": "https://viqeo.tv",
    "i": "Viqeo.svg"
  },
  "Viral Loops": {
    "d": "Viral Loops is a viral and referral marketing platform to launch ranking competitions, sweepstakes, pre-launch and referral programs.",
    "w": "https://viral-loops.com",
    "i": "Viral Loops.svg"
  },
  "Virgool": {
    "w": "https://virgool.io",
    "i": "Virgool.svg"
  },
  "Virtooal": {
    "d": "Virtooal allows shoppers to try on and combine decorative cosmetics, sunglasses, contact lenses, jewellery and fashion accessories using models, their own photo or a live webcam feed.",
    "w": "https://try.virtooal.com",
    "i": "Virtooal.svg"
  },
  "Virtuagym": {
    "d": "Virtuagym is a cloud-based membership management and coaching platform designed for personal trainers and fitness businesses of all sizes.",
    "w": "https://business.virtuagym.com",
    "i": "Virtuagym.svg"
  },
  "Virtual Chat": {
    "d": "Virtual Chat is a live-chat service for web sites.",
    "w": "https://www.virtual-chat.co.il",
    "i": "Virtual Chat.png"
  },
  "VirtualSpirits": {
    "d": "VirtualSpirits is a chatbot and live-chat service for websites.",
    "w": "https://www.virtualspirits.com",
    "i": "VirtualSpirits.png"
  },
  "VirtueMart": {
    "w": "http://virtuemart.net",
    "i": "VirtueMart.png"
  },
  "Virtuoso": {
    "w": "https://virtuoso.openlinksw.com/"
  },
  "Virtuous": {
    "d": "Virtuous is the responsive fundraising software platform.",
    "w": "https://virtuous.org",
    "i": "Virtuous.svg"
  },
  "Virtusize": {
    "d": "Virtusize is a personalisation service that provides size and product recommendations specific to a user's size and trend preferences.",
    "w": "https://www.virtusize.com",
    "i": "Virtusize.svg"
  },
  "Visa": {
    "w": "https://www.visa.com",
    "i": "Visa.svg"
  },
  "Visa Checkout": {
    "d": "Visa facilitates electronic funds transfers throughout the world, most commonly through Visa-branded credit cards, debit cards and prepaid cards.",
    "w": "https://checkout.visa.com",
    "i": "Visa.svg"
  },
  "Visely": {
    "d": "Visely is a Shopify app which personalise product recommendations for Shopify sites.",
    "w": "https://visely.io",
    "i": "Visely.svg"
  },
  "Visual Composer": {
    "d": "Visual Composer is an all-in-one web design tool for anyone who uses WordPress.",
    "w": "https://visualcomposer.com",
    "i": "visualcomposer.svg"
  },
  "Visual Quiz Builder": {
    "d": "Visual Quiz Builder is a Shopify app built by AskWhai.",
    "w": "https://apps.shopify.com/product-recommendation-quiz",
    "i": "Visual Quiz Builder.png"
  },
  "Visualsoft": {
    "d": "Visualsoft is an ecommerce agency that delivers web design, development and marketing services to online retailers.",
    "w": "https://www.visualsoft.co.uk/",
    "i": "Visualsoft.svg"
  },
  "Visx": {
    "d": "Visx is a collection of React-based data visualisation tools developed by Airbnb.",
    "w": "https://airbnb.io/visx/",
    "i": "Visx.svg"
  },
  "Vitals": {
    "d": "Vitals is an all-in-one Shopify marketing software.",
    "w": "https://vitals.co",
    "i": "Vitals.svg"
  },
  "Vite": {
    "d": "Vite is a rapid development tool for modern web projects.",
    "w": "https://vitejs.dev",
    "i": "vite.svg"
  },
  "VitePress": {
    "d": "VitePress is a Vite & Vue Powered Static Site Generator.",
    "w": "https://vitepress.vuejs.org/",
    "i": "vite.svg"
  },
  "Vitrin.me": {
    "d": "Vitrin.me is a no-code platform that lets anyone build web apps without writing any code.",
    "w": "https://vitrin.me",
    "i": "Vitrin.me.svg"
  },
  "Vizury": {
    "d": "Vizury is a ecommerce marketing platform.",
    "w": "https://www.vizury.com",
    "i": "Vizury.png"
  },
  "Vnda": {
    "d": "Vnda is a omnichannel ecommerce platform.",
    "w": "https://www.vnda.com.br",
    "i": "Vnda.svg"
  },
  "Vntana": {
    "d": "Vntana (stylised as VNTANA) is an American social augmented reality company.",
    "w": "https://www.vntana.com",
    "i": "Vntana.png"
  },
  "Volusion": {
    "d": "Volusion is a cloud-based, hosted ecommerce solution.",
    "w": "https://www.volusion.com",
    "i": "Volusion.svg"
  },
  "Vonage Video API": {
    "d": "Vonage Video API platform makes it easy to embed real-time, high-quality interactive video, messaging, screen-sharing, and more into web and mobile apps.",
    "w": "https://www.vonage.com/communications-apis/video/",
    "i": "Vonage.svg"
  },
  "Voog.com Website Builder": {
    "w": "https://www.voog.com/",
    "i": "Voog.png"
  },
  "Voracio": {
    "d": "Voracio is a cloud SaaS ecommerce platform powered by Microsoft .NET and built on the Microsoft Azure cloud framework.",
    "w": "https://www.voracio.co.uk",
    "i": "Voracio.svg"
  },
  "Vtiger": {
    "d": "Vtiger is a cloud-based suite of marketing, sales and help desk offerings, which can be deployed separately or as an integrated, all-in-one ecosystem.",
    "w": "https://www.vtiger.com",
    "i": "Vtiger.svg"
  },
  "VuFind": {
    "d": "VuFind is a library resource portal designed and developed by Villanova University library.",
    "w": "https://vufind.org",
    "i": "VuFind.png"
  },
  "Vue Storefront": {
    "d": "Vue Storefront is a frontend platform for headless ecommerce.",
    "w": "https://www.vuestorefront.io/",
    "i": "vue-storefront.svg"
  },
  "Vue.ai": {
    "d": "Vue.ai is an AI-powered experience management suite which combines the power of product, customer and business intelligence using computer vision and NLP.",
    "w": "https://vue.ai",
    "i": "Vue.ai.svg"
  },
  "Vue.js": {
    "d": "Vue.js is an open-source model–view–viewmodel JavaScript framework for building user interfaces and single-page applications.",
    "w": "https://vuejs.org",
    "i": "vue.svg"
  },
  "Vue2-animate": {
    "d": "Vue2-animate is a Vue.js port of Animate.css.",
    "w": "https://github.com/asika32764/vue2-animate",
    "i": "vue.svg"
  },
  "VuePress": {
    "d": "VuePress is a static site generator with a Vue-powered theming system, and a default theme for writing technical documentation.",
    "w": "https://vuepress.vuejs.org/",
    "i": "VuePress.svg"
  },
  "Vuetify": {
    "d": "Vuetify is a reusable semantic component framework for Vue.js that aims to provide clean, semantic and reusable components.",
    "w": "https://vuetifyjs.com",
    "i": "Vuetify.svg"
  },
  "Vultr": {
    "d": "Vultr is a cloud computing service provider.",
    "w": "https://www.vultr.com",
    "i": "Vultr.svg"
  },
  "Vuukle": {
    "d": "Vuukle is an audience engagement and commenting platform.",
    "w": "https://vuukle.com",
    "i": "vuukle.svg"
  },
  "vBulletin": {
    "d": "vBulletin is tool that is used to create and manage online forums or discussion boards. It is written in PHP and uses a MySQL database server.",
    "w": "https://www.vbulletin.com",
    "i": "vBulletin.png"
  },
  "vcita": {
    "d": "vcita is an all-in-one customer service and business management software designed for service providers.",
    "w": "https://www.vcita.com",
    "i": "vcita.svg"
  },
  "vibecommerce": {
    "w": "http://vibecommerce.com.br",
    "i": "vibecommerce.png"
  },
  "vxe-table": {
    "d": "vxe-table is a Vue.js based PC form component, support add, delete, change, virtual scroll, lazy load, shortcut menu, data validation, tree structure, print export, form rendering, data paging, virtual list, modal window, custom template, renderer, flexible configuration items, extension interface.",
    "w": "https://vxetable.cn",
    "i": "vxe-table.png"
  },
  "W3 Total Cache": {
    "d": "W3 Total Cache (W3TC) improves the SEO and increases website performance and reducing load times by leveraging features like content delivery network (CDN) integration and the latest best practices.",
    "w": "http://www.w3-edge.com/wordpress-plugins/w3-total-cache",
    "i": "W3 Total Cache.png"
  },
  "W3Counter": {
    "w": "http://www.w3counter.com",
    "i": "W3Counter.png"
  },
  "WEBDEV": {
    "d": "WEBDEV is a tool to develop internet and intranet sites and applications that support data and processes",
    "w": "https://www.windev.com/webdev/index.html",
    "i": "webdev.png"
  },
  "WEBXPAY": {
    "d": "WEBXPAY is a specialised online payment gateway that expedites buying and selling in a highly secured environment.",
    "w": "https://webxpay.com",
    "i": "WEBXPAY.png"
  },
  "WEN Themes Education Hub": {
    "d": "WEN Themes Education Hub is a clean and elegant WordPress education theme.",
    "w": "https://wenthemes.com/item/wordpress-themes/education-hub",
    "i": "WEN Themes.png"
  },
  "WEN Themes Signify Dark": {
    "d": "Signify Dark is a free dark blog and corporate WordPress theme that is trendy, responsive, and dynamic by WEN Themes.",
    "w": "https://wenthemes.com/item/wordpress-themes/signify-dark",
    "i": "WEN Themes.png"
  },
  "WHMCS": {
    "d": "WHMCS is an automation platform that simplifies and automates all aspects of operating an online web hosting and domain registrar business.",
    "w": "http://www.whmcs.com",
    "i": "WHMCS.png"
  },
  "WP Engine": {
    "d": "WP Engine is a website hosting provider.",
    "w": "https://wpengine.com",
    "i": "wpengine.svg"
  },
  "WP Fastest Cache": {
    "d": "WP Fastest Cache is one of a number of plugins for WordPress designed to accelerate the performance of your website.",
    "w": "https://www.wpfastestcache.com",
    "i": "WP Fastest Cache.png"
  },
  "WP Google Map Plugin": {
    "d": "WP Google Map Plugin allows you to create google maps shortcodes to display responsive google maps on pages, widgets and custom templates.",
    "w": "https://www.wpmapspro.com",
    "i": "WP Google Map Plugin.png"
  },
  "WP Job Openings": {
    "d": "WP Job Openings is a job listing and recruitment plugin for WordPress websites.",
    "w": "https://wpjobopenings.com",
    "i": "WP Job Openings.svg"
  },
  "WP Maintenance Mode": {
    "d": "WP Maintenance Mode is a WordPress plugin which add a maintenance page to your blog.",
    "w": "https://github.com/andrianvaleanu/WP-Maintenance-Mode",
    "i": "WP Maintenance Mode.png"
  },
  "WP Puzzle Basic": {
    "d": "WP Puzzle Basic is fully responsive, clean and minimal WordPress theme.",
    "w": "https://wp-puzzle.com/basic",
    "i": "WP Puzzle.svg"
  },
  "WP Rocket": {
    "d": "WP Rocket is a caching and performance optimisation plugin to improve the loading speed of WordPress websites.",
    "w": "https://wp-rocket.me",
    "i": "WP Rocket.png"
  },
  "WP-Optimize": {
    "d": "WP-Optimize is an all-in-one WordPress plugin that cleans your database, compresses your large images and caches your site.",
    "w": "https://getwpo.com",
    "i": "WP-Optimize.png"
  },
  "WP-PageNavi": {
    "d": "WP-PageNavi is a WordPress plugin which adds a more advanced paging navigation interface to your WordPress blog.",
    "w": "https://github.com/lesterchan/wp-pagenavi",
    "i": "WP-PageNavi.svg"
  },
  "WP-Royal Ashe": {
    "d": "WP-Royal Ashe is a personal and multi-author WordPress blog theme.",
    "w": "https://wp-royal.com/themes/item-ashe-free",
    "i": "WP-Royal.png"
  },
  "WP-Royal Bard": {
    "d": "WP-Royal Bard is a personal and multi-author WordPress blog theme.",
    "w": "https://wp-royal.com/themes/item-bard-free",
    "i": "WP-Royal.png"
  },
  "WP-Statistics": {
    "d": "WP-Statistics is a WordPress plugin which allows you to know your website statistics.",
    "w": "https://wp-statistics.com",
    "i": "WP-Statistics.svg"
  },
  "WPCacheOn": {
    "d": "WPCacheOn is a caching and performance optimisation plugin, which improves the loading speed of WordPress websites.",
    "w": "https://wpcacheon.io",
    "i": "WPCacheOn.png"
  },
  "WPForms": {
    "d": "WPForms is a drag and drop WordPress form builder.",
    "w": "https://wpforms.com",
    "i": "WPForms.svg"
  },
  "WPML": {
    "d": "WPML plugin makes it possible to build and run fully multilingual WordPress sites.",
    "w": "https://wpml.org/",
    "i": "WPML.svg"
  },
  "WPMU DEV Smush": {
    "d": "WPMU DEV Smush is a WordPress plugin that allows you to optimise images without losing quality.",
    "w": "https://wpmudev.com/project/wp-smush-pro",
    "i": "WPMU DEV.png"
  },
  "Wagtail": {
    "d": "Wagtail is a Django content management system (CMS) focused on flexibility and user experience.",
    "w": "https://wagtail.org",
    "i": "Wagtail.svg"
  },
  "Wair": {
    "d": "Wair is the widget to personalised fit.",
    "w": "https://getwair.com",
    "i": "Wair.png"
  },
  "Wakav Performance Monitoring": {
    "d": "Wakav Performance Monitoring is a real user monitoring (RUM), Web/App performance and availability test platform.",
    "w": "https://www.wakav.ir",
    "i": "Wakav Performance Monitoring.png"
  },
  "WalkMe": {
    "d": "WalkMe is a cloud-based interactive guidance and engagement platform.",
    "w": "https://www.walkme.com",
    "i": "WalkMe.svg"
  },
  "Wangsu": {
    "d": "Wangsu is a China-based company that provides content delivery network and internet data center services.",
    "w": "https://en.wangsu.com",
    "i": "Wangsu.png"
  },
  "Warp": {
    "w": "http://www.stackage.org/package/warp",
    "i": "Warp.png"
  },
  "Wazimo": {
    "d": "Wazimo is a digital media company focused on combining engaging content with advanced real-time tendering (RTB) capabilities.",
    "w": "https://wazimo.com",
    "i": "wazimo.png"
  },
  "Weaver Xtreme": {
    "d": "Weaver Xtreme is the orginal options-based WordPress theme.",
    "w": "https://weavertheme.com",
    "i": "Weaver Xtreme.png"
  },
  "Web Shop Manager": {
    "d": "Web Shop Manager is an ecommerce and search platform for the automotive industry and markets with complex product catalogs.",
    "w": "https://webshopmanager.com",
    "i": "Web Shop Manager.png"
  },
  "Web Stories": {
    "d": "Web Stories is a format for visual storytelling for the open web.",
    "w": "https://amp.dev/about/stories/",
    "i": "Web-Stories.svg"
  },
  "Web Stories for WordPress": {
    "d": "Web Stories for WordPress is a visual editor for creating Web Stories.",
    "w": "https://wp.stories.google",
    "i": "Web-Stories.svg"
  },
  "Web2py": {
    "w": "http://web2py.com",
    "i": "Web2py.png"
  },
  "WebAssembly": {
    "d": "WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications.",
    "w": "https://webassembly.org/",
    "i": "WebAssembly.svg"
  },
  "WebEngage": {
    "d": "WebEngage is a customer data platform and marketing automation suite.",
    "w": "https://webengage.com",
    "i": "WebEngage.png"
  },
  "WebFactory Maintenance": {
    "d": "WebFactory Maintenance is a WordPress plugin which allows you to create an maintenance page.",
    "w": "https://wordpress.org/plugins/maintenance",
    "i": "WebFactory.png"
  },
  "WebFactory Under Construction": {
    "d": "WebFactory Under Construction is a WordPress plugin which allows you to create an under construction page.",
    "w": "https://wordpress.org/plugins/under-construction-page",
    "i": "WebFactory.png"
  },
  "WebGUI": {
    "w": "http://www.webgui.org",
    "i": "WebGUI.png"
  },
  "WebHostUK": {
    "d": "WebHostUK is a UK based web hosting company offering cheap yet reliable and secure web hosting solutions on both Linux and Windows servers.",
    "w": "https://www.webhostuk.co.uk",
    "i": "WebHostUK.png"
  },
  "WebMetric": {
    "w": "https://webmetric.ir/",
    "i": "WebMetric.svg"
  },
  "WebNode": {
    "d": "Webnode is a drag-and-drop online website builder.",
    "w": "https://www.webnode.com",
    "i": "WebNode.svg"
  },
  "WebRTC": {
    "d": "WebRTC is an open-source project that enables real-time voice, text and video communications capabilities between web browsers and devices.",
    "w": "https://webrtc.org",
    "i": "WebRTC.svg"
  },
  "WebSite X5": {
    "d": "WebSite X5 is a tools to create and publish websites.",
    "w": "http://websitex5.com",
    "i": "WebSite X5.png"
  },
  "WebZi": {
    "d": "WebZi is a professional website builder.",
    "w": "https://webzi.ir",
    "i": "Webzi.svg"
  },
  "Webasyst Shop-Script": {
    "d": "Webasyst Shop-Script is a feature-rich PHP ecommerce framework and shopping cart solution.",
    "w": "https://www.shop-script.com",
    "i": "Webasyst Shop-Script.svg"
  },
  "Webflow": {
    "d": "Webflow is Software-as-a-Service (SaaS) for website building and hosting.",
    "w": "https://webflow.com",
    "i": "webflow.svg"
  },
  "Webflow Ecommerce": {
    "d": "Webflow is a zero-code visual website builder, with Webflow Ecommerce, you can build and design online stores.",
    "w": "https://webflow.com/ecommerce",
    "i": "webflow.svg"
  },
  "Webgains": {
    "d": "Webgains is an affiliate marketing network.",
    "w": "https://www.webgains.com/",
    "i": "Webgains.svg"
  },
  "Webix": {
    "w": "http://webix.com",
    "i": "Webix.png"
  },
  "Weblication": {
    "d": "Weblication is an enterprise-class website content management system developed by Scholl Communications AG in Germany.",
    "w": "https://weblication.de",
    "i": "Weblication.svg"
  },
  "Weblium": {
    "d": "Weblium let's you create a web site or online store without the need for a web developer or designer.",
    "w": "https://weblium.com",
    "i": "Weblium.svg"
  },
  "Weblogic Server": {
    "d": "WebLogic Server is an Application Server that runs on a middle tier, between back-end databases and related applications and browser-based thin clients.",
    "w": "https://www.oracle.com/java/weblogic",
    "i": "Oracle.svg"
  },
  "Webmin": {
    "d": "Webmin is a free, open-source application for Linux server administration.",
    "w": "https://www.webmin.com",
    "i": "Webmin.png"
  },
  "Webpack": {
    "d": "Webpack is an open-source JavaScript module bundler.",
    "w": "https://webpack.js.org/",
    "i": "Webpack.svg"
  },
  "Webpushr": {
    "d": "Webpushr is a web push notification platform that supports mobile and desktop devices.",
    "w": "https://www.webpushr.com",
    "i": "webpushr.svg"
  },
  "Webriti Busiprof": {
    "d": "Busiprof is a fully responsive and translation-ready WordPress theme by Webriti.",
    "w": "https://webriti.com/busiprof-premium-wordpress-theme-1",
    "i": "Webriti.png"
  },
  "WebsPlanet": {
    "w": "http://websplanet.com",
    "i": "WebsPlanet.png"
  },
  "Websale": {
    "w": "http://websale.de",
    "i": "Websale.png"
  },
  "Website Creator": {
    "w": "https://www.hosttech.ch/websitecreator",
    "i": "WebsiteCreator.png"
  },
  "WebsiteBaker": {
    "w": "http://websitebaker2.org/en/home.php",
    "i": "WebsiteBaker.png"
  },
  "WebsiteBuilder": {
    "d": "WebsiteBuilder is a page-builder for creating web pages without knowledge of programming languages.",
    "w": "https://www.websitebuilder.com",
    "i": "WebsiteBuilder.svg"
  },
  "Websocket": {
    "w": "https://en.wikipedia.org/wiki/WebSocket",
    "i": "websocket.png"
  },
  "Webtrends": {
    "w": "http://worldwide.webtrends.com",
    "i": "Webtrends.png"
  },
  "Webx": {
    "d": "Webx is a hosted ecommerce solution from Pakistan.",
    "w": "https://www.webx.pk",
    "i": "Webx.svg"
  },
  "Webzie": {
    "d": "Webzie is a website builder optimised for performance.",
    "w": "https://www.webzie.com/",
    "i": "Webzie.svg"
  },
  "Weebly": {
    "d": "Weebly is a website and ecommerce service.",
    "w": "https://www.weebly.com",
    "i": "Weebly.svg"
  },
  "Weglot": {
    "w": "https://www.weglot.com",
    "i": "Weglot.png"
  },
  "Welcart": {
    "d": "Welcart is a free ecommerce plugin for WordPress with top market share in Japan.",
    "w": "https://www.welcart.com",
    "i": "Welcart.svg"
  },
  "WeltPixel Pearl Theme": {
    "d": "Pearl Theme for Magento 2 by WeltPixel. Pearl Theme is following the Magento architecture, layouts and best practice in order to assure highest compatibility with 3rd party extensions.",
    "w": "https://www.weltpixel.com/magento-2-theme-pearl",
    "i": "WeltPixel.svg"
  },
  "Whatfix": {
    "d": "Whatfix is a SaaS based platform which provides in-app guidance and performance support for web applications and software products.",
    "w": "https://whatfix.com",
    "i": "Whatfix.svg"
  },
  "WhatsApp Business Chat": {
    "d": "WhatsApp Business is a free to download app available on Android and iPhone using which businesses can connect with their customers.",
    "w": "https://www.whatsapp.com/business",
    "i": "WhatsApp.svg"
  },
  "Wheelio": {
    "d": "Wheelio is gamified pop-up/widget for ecommerce sites.",
    "w": "https://wheelio-app.com/",
    "i": "Wheelio.png"
  },
  "Whistl": {
    "d": "Whistl is a postal delivery company operating in the United Kingdom.",
    "w": "https://www.whistl.co.uk",
    "i": "Whistl.svg"
  },
  "Whooshkaa": {
    "w": "https://www.whooshkaa.com",
    "i": "Whooshkaa.svg"
  },
  "WideBundle": {
    "d": "WideBundle is a Shopify application that allows a merchant to set up bundles on his store.",
    "w": "https://en.widebundle.com",
    "i": "WideBundle.png"
  },
  "Widen": {
    "d": "Widen is a digital asset management and product information management solutions provider.",
    "w": "https://www.widen.com",
    "i": "Widen.svg"
  },
  "WidgetWhats": {
    "d": "WidgetWhats is a fully customizable chat widget with appearance, text, color, button style and position.",
    "w": "https://widgetwhats.com",
    "i": "WidgetWhats.png"
  },
  "Wigzo": {
    "d": "Wigzo is e-commerce marketing automation platform that helps businesses of every size dig deeper into data to find opportunities to increase their sales and revenue.",
    "w": "https://www.wigzo.com/",
    "i": "Wigzo.png"
  },
  "Wiki.js": {
    "d": "Wiki.js is a wiki engine running on Node.js and written in JavaScript.",
    "w": "https://js.wiki",
    "i": "Wiki.js.png"
  },
  "Wikinggruppen": {
    "w": "https://wikinggruppen.se/",
    "i": "wikinggruppen.png"
  },
  "WikkaWiki": {
    "d": "WikkaWiki is an open-source wiki application written in PHP.",
    "w": "http://wikkawiki.org",
    "i": "WikkaWiki.png"
  },
  "WildJar": {
    "d": "WildJar is a call tracking and intelligence platform which helps you understand where your leads are coming from, who is calling you, what your conversations are about and connect that data into other platforms.",
    "w": "https://www.wildjar.com",
    "i": "WildJar.png"
  },
  "Windows CE": {
    "d": "Windows CE is an operating system designed for small footprint devices or embedded systems.",
    "w": "http://microsoft.com",
    "i": "Microsoft.svg"
  },
  "Windows Server": {
    "d": "Windows Server is a brand name for a group of server operating systems.",
    "w": "http://microsoft.com/windowsserver",
    "i": "WindowsServer.png"
  },
  "Wink": {
    "d": "Wink Toolkit is a JavaScript toolkit used to build mobile web apps.",
    "w": "http://winktoolkit.org",
    "i": "Wink.png"
  },
  "Winstone Servlet Container": {
    "w": "http://winstone.sourceforge.net"
  },
  "Wirecard": {
    "d": "Wirecard is a defunct German payment processor and financial services provider.",
    "w": "https://www.wirecard.com",
    "i": "Wirecard.svg"
  },
  "Wisepops": {
    "d": "Wisepops is an intelligent popup and marketing automation system that offers marketers a single platform from which to create and manage website popups.",
    "w": "https://wisepops.com",
    "i": "Wisepops.svg"
  },
  "Wishlist King": {
    "d": "Wishlist King is a Shopify app which helps you to add your favorite products or share the wishlist with your friends built by Appmate.",
    "w": "https://appmate.io",
    "i": "Wishlist King.png"
  },
  "Wistia": {
    "d": "Wistia is designed exclusively to serve companies using video on their websites for marketing, support, and sales.",
    "w": "https://wistia.com",
    "i": "Wistia.svg"
  },
  "With Reach": {
    "d": "With Reach is a fintech/payments service provider that helps retailers connect with customers around the world.",
    "w": "https://www.withreach.com",
    "i": "With Reach.svg"
  },
  "Wix": {
    "d": "Wix provides cloud-based web development services, allowing users to create HTML5 websites and mobile sites.",
    "w": "https://www.wix.com",
    "i": "Wix.svg"
  },
  "Wix Answers": {
    "d": "Wix Answers is a cloud-based help desk software.",
    "w": "https://www.wixanswers.com",
    "i": "Wix Answers.svg"
  },
  "Wix eCommerce": {
    "w": "https://www.wix.com/freesitebuilder/tae-store",
    "i": "Wix.svg"
  },
  "WiziShop": {
    "d": "WiziShop is an ecommerce solution provider.",
    "w": "https://wizishop.com",
    "i": "WiziShop.png"
  },
  "Wizpay": {
    "d": "Wizpay is a buy now pay later solution.",
    "w": "https://www.wizpay.com.au",
    "i": "Wizpay.png"
  },
  "Wolf CMS": {
    "w": "http://www.wolfcms.org",
    "i": "Wolf CMS.png"
  },
  "Woltlab Community Framework": {
    "w": "http://www.woltlab.com",
    "i": "Woltlab Community Framework.png"
  },
  "WooCommerce": {
    "d": "WooCommerce is an open-source ecommerce plugin for WordPress.",
    "w": "https://woocommerce.com",
    "i": "WooCommerce.svg"
  },
  "WooCommerce Blocks": {
    "d": "WooCommerce Blocks offers a range of Gutenberg blocks you can use to build and customise your site.",
    "w": "https://github.com/woocommerce/woocommerce-gutenberg-products-block",
    "i": "WooCommerce Blocks.png"
  },
  "WooCommerce Multilingual": {
    "d": "WooCommerce Multilingual plugin makes it possible to run fully multilingual ecommerce sites using WooCommerce and WPML.",
    "w": "https://wordpress.org/plugins/woocommerce-multilingual",
    "i": "WooCommerce Multilingual.png"
  },
  "WooCommerce PayPal Checkout Payment Gateway": {
    "d": "WooCommerce PayPal Checkout Payment Gateway is a WordPress plugin which allows you to securely sell your products and subscriptions online using in-context checkout.",
    "w": "https://github.com/woocommerce/woocommerce-gateway-paypal-express-checkout",
    "i": "WooCommerce PayPal.png"
  },
  "WooCommerce PayPal Payments": {
    "d": "WooCommerce PayPal Payments is a latest WordPress plugin with most complete payment processing solution. Accept PayPal exclusives, credit/debit cards and local payment methods.",
    "w": "https://github.com/woocommerce/woocommerce-paypal-payments",
    "i": "WooCommerce PayPal.png"
  },
  "WooCommerce Stripe Payment Gateway": {
    "d": "WooCommerce Stripe Payment Gateway plugin extends WooCommerce allowing you to take payments directly on your store via Stripe’s API.",
    "w": "https://woocommerce.com/products/stripe",
    "i": "WooCommerce Stripe Payment Gateway.png"
  },
  "Woopra": {
    "w": "http://www.woopra.com",
    "i": "Woopra.png"
  },
  "Woostify": {
    "d": "Woostify is fast, lightweight, responsive and flexible WooCommerce theme built with SEO, speed, and usability in mind.",
    "w": "https://woostify.com",
    "i": "Woostify.png"
  },
  "WoowUp": {
    "d": "WoowUp is a tool of CRM and predictive marketing.",
    "w": "https://www.woowup.com",
    "i": "WoowUp.png"
  },
  "WordAds": {
    "d": "WordAds is an advertising platform run by Automatic that allows bloggers and website owners to place advertisements on their blogs and websites.",
    "w": "https://wordads.co",
    "i": "WordAds.png"
  },
  "WordPress": {
    "d": "WordPress is a free and open-source content management system written in PHP and paired with a MySQL or MariaDB database. Features include a plugin architecture and a template system.",
    "w": "https://wordpress.org",
    "i": "WordPress.svg"
  },
  "WordPress Default": {
    "d": "WordPress Default is a default WordPress theme.",
    "w": "https://wordpress.org/themes/default",
    "i": "WordPress.svg"
  },
  "WordPress Super Cache": {
    "d": "WordPress Super Cache is a static caching plugin for WordPress.",
    "w": "http://z9.io/wp-super-cache/",
    "i": "wp_super_cache.png"
  },
  "WordPress VIP": {
    "d": "WordPress VIP is a managed hosting platform for WordPress.",
    "w": "https://wpvip.com",
    "i": "wpvip.svg"
  },
  "WordPress.com": {
    "d": "WordPress.com is a platform for self-publishing that is popular for blogging and other works.",
    "w": "https://wordpress.com",
    "i": "WordPress.svg"
  },
  "Wordfence": {
    "d": "Wordfence is a security plugin for sites that use WordPress. Wordfence includes an endpoint firewall and malware scanner.",
    "w": "https://www.wordfence.com",
    "i": "Wordfence.svg"
  },
  "Wordfence Login Security": {
    "d": "Wordfence Login Security contains a subset of the functionality found in the full Wordfence plugin: Two-factor Authentication, XML-RPC Protection and Login Page CAPTCHA.",
    "w": "https://www.wordfence.com",
    "i": "Wordfence.svg"
  },
  "Workable": {
    "d": "Workable is the all-in-one hiring solution.",
    "w": "https://www.workable.com",
    "i": "Workable.svg"
  },
  "Workarea": {
    "d": "Workarea is a SaaS ecommerce platform for medium to large businesses.",
    "w": "https://www.workarea.com",
    "i": "Workarea.svg"
  },
  "World4You": {
    "d": "World4You operates homepage and domain solutions. World4Youu operates data centers in Austria and provides data protection.",
    "w": "https://www.world4you.com",
    "i": "World4You.svg"
  },
  "WorldPay": {
    "d": "WorldPay is a merchant services and payment processing provider offering a payment gateway for online transactions.",
    "w": "https://online.worldpay.com",
    "i": "WorldPay.svg"
  },
  "WorldShopping": {
    "d": "WorldShopping makes online purchases in Japan easier for international visitors.",
    "w": "https://www.worldshopping.global/",
    "i": "worldshopping.png"
  },
  "Worldz": {
    "d": "Worldz calculates the economic value of a user’s social popularity (qualitatively and quantitatively). In proportion to this value, it provides a personalised discount, which can be applied in exchange for a social sharing by the user on their Instagram or Facebook profile.",
    "w": "https://www.worldz-business.net",
    "i": "Worldz.png"
  },
  "Wowza Video Player": {
    "d": "Wowza Video Player is a robust, industry standard player that provides HTML5, HLS, MPEG-DASH, and LL-DASH playback.",
    "w": "https://www.wowza.com/video/player",
    "i": "wowza.svg"
  },
  "Wufoo": {
    "d": "Wufoo is an online form builder that creates forms including contact forms, online payments, online surveys and event registrations.",
    "w": "https://www.wufoo.com",
    "i": "Wufoo.svg"
  },
  "Wuilt": {
    "d": "Wuilt is the first Arab platform of its kind to help individuals and businesses create ready-made websites and ecommerce stores.",
    "w": "https://wuilt.com",
    "i": "Wuilt.png"
  },
  "Wunderkind": {
    "d": "Wunderkind (Formerly BounceX) is a software for behavioural marketing technologies, created to de-anonymise site visitors, analyse their digital behaviour and create relevant digital experiences regardless of channel or device.",
    "w": "https://www.wunderkind.co",
    "i": "Wunderkind.svg"
  },
  "Wurfl": {
    "d": "WURFL.js is JavaScript that detects device models of smartphones, tablets, smart TVs and game consoles accessing your website.",
    "w": "https://web.wurfl.io/",
    "i": "Wurfl.png"
  },
  "WysiBB": {
    "d": "WysiBB very simple and functional open-source WYSIWYG BBCode editor based on jQuery.",
    "w": "http://wysibb.com",
    "i": "WysiBB.svg"
  },
  "wBuy": {
    "d": "wBuy is a SaaS ecommerce platform.",
    "w": "https://www.wbuy.com.br",
    "i": "wBuy.svg"
  },
  "web-vitals": {
    "d": "The web-vitals JavaScript is a tiny, modular library for measuring all the web vitals metrics on real users.",
    "w": "https://github.com/GoogleChrome/web-vitals",
    "i": "web-vitals.svg"
  },
  "webEdition": {
    "w": "http://webedition.de/en",
    "i": "webEdition.png"
  },
  "wisyCMS": {
    "w": "https://wisy.3we.de",
    "i": "wisyCMS.svg"
  },
  "wpBakery": {
    "d": "WPBakery is a drag and drop visual page builder plugin for WordPress.",
    "w": "https://wpbakery.com",
    "i": "wpBakery.svg"
  },
  "wpCache": {
    "d": "WPCache is a static caching plugin for WordPress.",
    "w": "https://wpcache.co",
    "i": "wpCache.png"
  },
  "X-Cart": {
    "d": " X-Cart is an open source PHP shopping cart ecommerce software platform.",
    "w": "https://kb.x-cart.com",
    "i": "X-Cart.png"
  },
  "X.ai": {
    "d": "X.ai is a scheduling tool that organizes meeting times and improves lead conversion by adding embedded booking buttons to websites or within live chat applications.",
    "w": "https://x.ai",
    "i": "X.ai.png"
  },
  "XAMPP": {
    "w": "http://www.apachefriends.org/en/xampp.html",
    "i": "XAMPP.png"
  },
  "XGen Ai": {
    "d": "XGen Ai is a cloud-based customer journey mapping tool that helps businesses manage product recommendations via artificial intelligence (AI).",
    "w": "https://xgen.ai",
    "i": "XGen Ai.svg"
  },
  "XMB": {
    "w": "http://www.xmbforum.com",
    "i": "XMB.png"
  },
  "XOOPS": {
    "w": "http://xoops.org",
    "i": "XOOPS.png"
  },
  "XRegExp": {
    "w": "http://xregexp.com",
    "i": "XRegExp.png"
  },
  "XSLT": {
    "d": "XSLT is designed for use as part of XSL, which is a stylesheet language for XML.",
    "w": "https://www.w3.org/TR/xslt-10",
    "i": "W3C.png"
  },
  "XWiki": {
    "d": "XWiki is a free wiki software platform written in Java.",
    "w": "http://www.xwiki.org",
    "i": "xwiki.png"
  },
  "Xajax": {
    "w": "http://xajax-project.org",
    "i": "Xajax.png"
  },
  "Xanario": {
    "w": "http://xanario.de",
    "i": "Xanario.png"
  },
  "XenForo": {
    "d": "XenForo is a PHP-based forum hosting program for communities that is designed to be deployed on a remote web server.",
    "w": "http://xenforo.com",
    "i": "XenForo.png"
  },
  "Xeora": {
    "w": "http://www.xeora.org",
    "i": "xeora.png"
  },
  "Xitami": {
    "w": "http://xitami.com",
    "i": "Xitami.png"
  },
  "Xonic": {
    "w": "http://www.xonic-solutions.de",
    "i": "xonic.png"
  },
  "XpressEngine": {
    "w": "http://www.xpressengine.com/",
    "i": "XpressEngine.png"
  },
  "Xpresslane": {
    "d": "Xpresslane is a checkout platform for ecommerce that focuses on increasing conversion during the checkout process.",
    "w": "https://www.xpresslane.in",
    "i": "Xpresslane.png"
  },
  "Xretail": {
    "d": "Xretail is a subscription based product that enables the omni-channel ecommerce approach to its customers.",
    "w": "https://xretail.com",
    "i": "Xretail.png"
  },
  "Xserver": {
    "d": "Xserver engages in web hosting, web application and internet-related services.",
    "w": "https://www.xserver.ne.jp",
    "i": "Xserver.png"
  },
  "Xtra": {
    "d": "Xtra is a creative, responsive, live drag and drop and easy-to-use WordPress theme for any kind of websites.",
    "w": "https://xtratheme.com",
    "i": "Xtra.png"
  },
  "Xtremepush": {
    "d": "Xtremepush is a customer engagement, personalisation and data platform. It's purpose-built for multichannel and mobile marketing.",
    "w": "https://xtremepush.com",
    "i": "Xtremepush.svg"
  },
  "xCharts": {
    "w": "https://tenxer.github.io/xcharts/"
  },
  "xtCommerce": {
    "w": "https://www.xt-commerce.com",
    "i": "xtCommerce.png"
  },
  "YMQ Product Options Variant Option": {
    "d": "YMQ Product Options Variant Option help add an unlimited number of product options to your items so you're not restricted by Shopify's limit of 3 options and 100 variants.",
    "w": "https://apps.shopify.com/ymq-options",
    "i": "YMQ Product Options Variant Option.png"
  },
  "YNAP Ecommerce": {
    "d": "YNAP provides a suite of B2B luxury services including online and mobile store development, omnichannel logistics, customer care, digital marketing, data-driven merchandising and global strategy development.",
    "w": "https://www.ynap.com/pages/about-us/what-we-do/monobrand/",
    "i": "YNAP.png"
  },
  "YUI": {
    "d": "YUI is a JavaScript and CSS library with more than 30 unique components including low-level DOM utilities and high-level user-interface widgets.",
    "w": "https://clarle.github.io/yui3",
    "i": "YUI.png"
  },
  "YUI Doc": {
    "d": "UIDoc is a Node.js application used at build time to generate API documentation.",
    "w": "http://developer.yahoo.com/yui/yuidoc",
    "i": "Yahoo.svg"
  },
  "YaBB": {
    "w": "http://www.yabbforum.com",
    "i": "YaBB.png"
  },
  "Yahoo Advertising": {
    "d": "Yahoo Advertising includes a comprehensive suite of web, mobile, and video ad products across native, audience, and premium display, which are accessible through a new buying platform.",
    "w": "https://www.adtech.yahooinc.com",
    "i": "Yahoo.svg"
  },
  "Yahoo! Ecommerce": {
    "w": "http://smallbusiness.yahoo.com/ecommerce",
    "i": "Yahoo.svg"
  },
  "Yahoo! Tag Manager": {
    "w": "https://tagmanager.yahoo.co.jp/",
    "i": "Yahoo.svg"
  },
  "Yahoo! Web Analytics": {
    "w": "http://web.analytics.yahoo.com",
    "i": "Yahoo.svg"
  },
  "YalinHost": {
    "d": "YalinHost is a web hosting service provider.",
    "w": "https://yalinhost.com",
    "i": "YalinHost.png"
  },
  "Yampi Checkout": {
    "d": "Yampi Checkout is an payment processor from Brazil.",
    "w": "https://www.yampi.com.br/checkout",
    "i": "Yampi.svg"
  },
  "Yampi Virtual store": {
    "d": "Yampi Virtual store is an ecommerce platform from Brazil.",
    "w": "https://www.yampi.com.br/loja-virtual",
    "i": "Yampi.svg"
  },
  "Yandex SmartCaptcha": {
    "d": "Yandex SmartCaptcha is a service for verifying queries to identify user requests and block bots.",
    "w": "https://cloud.yandex.com/en/services/smartcaptcha",
    "i": "yandex_smartcaptcha.svg"
  },
  "Yandex.Cloud": {
    "d": "Yandex.Cloud is a public cloud platform where companies can create and develop projects using Yandex's scalable computing power, advanced technologies, and infrastructure.",
    "w": "https://cloud.yandex.com/en/",
    "i": "Yandex.Cloud.svg"
  },
  "Yandex.Cloud CDN": {
    "d": "Yandex.Cloud CDN helps you streamline static content delivery for your web service.",
    "w": "https://cloud.yandex.com/en/services/cdn",
    "i": "Yandex.Cloud.svg"
  },
  "Yandex.Direct": {
    "d": "Yandex Direct is the platform designed for sponsored ad management.",
    "w": "http://partner.yandex.com",
    "i": "Yandex.Direct.png"
  },
  "Yandex.Messenger": {
    "d": "Yandex.Messenger is an instant messaging application.",
    "w": "https://dialogs.yandex.ru",
    "i": "Yandex.Messenger.svg"
  },
  "Yandex.Metrika": {
    "d": "Yandex.Metrica is a free web analytics service that tracks and reports website traffic.",
    "w": "http://metrika.yandex.com",
    "i": "Yandex.Metrika.png"
  },
  "Yaws": {
    "w": "http://yaws.hyber.org",
    "i": "Yaws.png"
  },
  "Yektanet": {
    "d": "Yektanet is the biggest and most advanced native advertising network in Iran.",
    "w": "https://www.yektanet.com",
    "i": "Yektanet.png"
  },
  "Yelp Reservations": {
    "d": "Yelp Reservations is a cloud-based restaurant management system.",
    "w": "http://yelp.com",
    "i": "Yelp.svg"
  },
  "Yelp Review Badge": {
    "d": "Yelp Review Badges showcase business reviews from Yelp on websites.",
    "w": "http://yelp.com",
    "i": "Yelp.svg"
  },
  "Yepcomm": {
    "w": "https://www.yepcomm.com.br",
    "i": "yepcomm.png"
  },
  "Yett": {
    "d": "Yett is a small webpage library to control the execution of (third party) scripts like analytics.",
    "w": "https://github.com/elbywan/yett",
    "i": "Yett.png"
  },
  "Yext": {
    "d": "Yext is a hosted search-as-a-service platform.",
    "w": "https://www.yext.com",
    "i": "Yext.svg"
  },
  "Yieldify": {
    "d": "Yieldify is a customer journey optimisation platform that brings personalisation to the full customer journey.",
    "w": "https://www.yieldify.com",
    "i": "Yieldify.svg"
  },
  "Yieldlab": {
    "w": "http://yieldlab.de",
    "i": "Yieldlab.png"
  },
  "Yii": {
    "d": "Yii is an open-source, object-oriented, component-based MVC PHP web application framework.",
    "w": "https://www.yiiframework.com",
    "i": "Yii.png"
  },
  "Yoast Duplicate Post": {
    "d": "Yoast Duplicate Post is a WordPress plugin which allows users to clone posts of any type, or copy them to new drafts for further editing.",
    "w": "https://wordpress.org/plugins/duplicate-post",
    "i": "Yoast SEO.png"
  },
  "Yoast SEO": {
    "d": "Yoast SEO is a search engine optimisation plugin for WordPress and other platforms.",
    "w": "https://yoast.com/wordpress/plugins/seo/",
    "i": "Yoast SEO.png"
  },
  "Yoast SEO Premium": {
    "d": "Yoast SEO Premium is a search engine optimisation plugin for WordPress and other platforms.",
    "w": "https://yoast.com/wordpress/plugins/seo/",
    "i": "Yoast SEO.png"
  },
  "Yoast SEO for Shopify": {
    "d": "Yoast SEO for Shopify optimizes Shopify shops.",
    "w": "https://yoast.com/shopify/apps/yoast-seo/",
    "i": "yoast-seo-shopify.png"
  },
  "Yodel": {
    "d": "Yodel is a delivery company for B2B and B2C orders in the United Kingdom.",
    "w": "https://www.yodel.co.uk/"
  },
  "Yola": {
    "d": "Yola is a website builder and website hosting company headquartered in San Francisco.",
    "w": "https://www.yola.com",
    "i": "Yola.png"
  },
  "YooMoney": {
    "d": "YooMoney is an IT company working with electronic payments on the Internet, creating and supporting financial services for individuals and businesses.",
    "w": "https://yoomoney.ru",
    "i": "YooMoney.svg"
  },
  "Yoori": {
    "d": "Yoori is a multi-vendor PWA ecommerce CMS.",
    "w": "https://spagreen.net/yoori-ecommerce-solution",
    "i": "Yoori.png"
  },
  "Yotpo Loyalty & Referrals": {
    "d": "Yotpo is a user-generated content marketing platform.",
    "w": "https://www.yotpo.com/platform/loyalty/",
    "i": "Yotpo.svg"
  },
  "Yotpo Reviews": {
    "d": "Yotpo is a user-generated content marketing platform.",
    "w": "https://www.yotpo.com/platform/reviews/",
    "i": "Yotpo.svg"
  },
  "Yotpo SMSBump": {
    "d": "SMS Bump is a SMS marketing and automations app which was acquired by Yotpo.",
    "w": "https://www.yotpo.com/platform/smsbump-sms-marketing/",
    "i": "Yotpo.svg"
  },
  "Yottaa": {
    "d": "Yottaa is an ecommerce optimisation platform that helps with conversions, performance and security.",
    "w": "https://www.yottaa.com",
    "i": "Yottaa.svg"
  },
  "YouCam Makeup": {
    "d": "YouCam Makeup is a cross-platform virtual makeup solution for omnichannel ecommerce.",
    "w": "https://www.perfectcorp.com/business/products/virtual-makeup",
    "i": "YouCam Makeup.png"
  },
  "YouCan": {
    "d": "YouCan is an integrated platform specialised in ecommerce, offering a wide range of services needed by merchants and entrepreneurs.",
    "w": "https://youcan.shop",
    "i": "YouCan.svg"
  },
  "YouPay": {
    "d": "YouPay is an alternative method of payment that allows you to give someone else the ability to pay for your shopping cart with no fees or interest.",
    "w": "https://youpay.co",
    "i": "YouPay.svg"
  },
  "YouTrack": {
    "d": "YouTrack is a browser-based bug tracker, issue tracking system and project management software.",
    "w": "http://www.jetbrains.com/youtrack/",
    "i": "YouTrack.png"
  },
  "YouTube": {
    "d": "YouTube is a video sharing service where users can create their own profile, upload videos, watch, like and comment on other videos.",
    "w": "http://www.youtube.com",
    "i": "YouTube.png"
  },
  "yellow.ai": {
    "d": "yellow.ai provides chatbot and automation services.",
    "w": "https://yellow.ai/",
    "i": "yellow.ai.svg"
  },
  "ZK": {
    "w": "http://zkoss.org",
    "i": "ZK.png"
  },
  "ZURB Foundation": {
    "d": "Zurb Foundation is used to prototype in the browser. Allows rapid creation of websites or applications while leveraging mobile and responsive technology. The front end framework is the collection of HTML, CSS, and Javascript containing design patterns.",
    "w": "http://foundation.zurb.com",
    "i": "ZURB Foundation.png"
  },
  "Zabbix": {
    "w": "http://zabbix.com",
    "i": "Zabbix.png"
  },
  "Zakeke": {
    "d": "Zakeke is a product customisation tool compatible with services and apps mostly used to manage ecommerce store.",
    "w": "https://www.zakeke.com",
    "i": "Zakeke.png"
  },
  "Zakeke Interactive Product Designer": {
    "d": "Zakeke Interactive Product Designer lets customers personalise any product and visualise how they’ll look before checking out.",
    "w": "https://www.zakeke.com",
    "i": "Zakeke.png"
  },
  "Zakeke Visual Customizer": {
    "d": "Zakeke Visual Customizer is a cloud-connected visual ecommerce tool that allows brands and retailers to offer live, personalised, 2D, 3D, and augmented reality (AR) functionality for their products.",
    "w": "https://www.zakeke.com",
    "i": "Zakeke.png"
  },
  "Zakra": {
    "d": "Zakra is flexible, fast, lightweight and modern multipurpose WordPress theme that comes with many starter free sites.",
    "w": "https://zakratheme.com",
    "i": "Zakra.png"
  },
  "Zanox": {
    "w": "http://zanox.com",
    "i": "Zanox.png"
  },
  "Zeald": {
    "d": "Zeald is a full-service website design and digital marketing company.",
    "w": "https://www.zeald.com",
    "i": "Zeald.png"
  },
  "Zeleris": {
    "d": "Zeleris provides door to door shipment delivery to Ireland, UK and the EU.",
    "w": "https://www.zeleris.com"
  },
  "Zen Cart": {
    "w": "http://www.zen-cart.com",
    "i": "Zen Cart.png"
  },
  "Zend": {
    "w": "http://zend.com",
    "i": "Zend.png"
  },
  "Zendesk": {
    "d": "Zendesk is a cloud-based help desk management solution offering customizable tools to build customer service portal, knowledge base and online communities.",
    "w": "https://zendesk.com",
    "i": "Zendesk.svg"
  },
  "Zendesk Chat": {
    "d": "Zendesk Chat is a live chat and communication widget.",
    "w": "http://zopim.com",
    "i": "Zendesk Chat.png"
  },
  "Zendesk Sunshine Conversations": {
    "d": "Zendesk Sunshine Conversations lets you share a single, continuous conversation with every team in your business. With a unified API and native connectors to popular business applications like Zendesk and Slack, everyone in your organization can get access to a single view of the customer conversation.",
    "w": "https://www.zendesk.com/platform/conversations",
    "i": "Zendesk.svg"
  },
  "Zenfolio": {
    "d": "Zenfolio is a photography website builder.",
    "w": "https://zenfolio.com",
    "i": "Zenfolio.png"
  },
  "Zeotap": {
    "d": "Zeotap is a customer intelligence platform that helps brands better understand their customers and predict behaviors.",
    "w": "https://zeotap.com",
    "i": "Zeotap.png"
  },
  "Zepto": {
    "w": "http://zeptojs.com",
    "i": "Zepto.png"
  },
  "ZestMoney": {
    "d": "ZestMoney is a fintech company that uses digital EMI without the need for a credit card or a credit score.",
    "w": "https://www.zestmoney.in",
    "i": "ZestMoney.png"
  },
  "Zeus Technology": {
    "d": "Zeus Technology is a media monetisation platform that levels the playing field for publishers and advertisers of all sizes.",
    "w": "https://www.zeustechnology.com",
    "i": "Zeus Technology.svg"
  },
  "Zid": {
    "d": "Zid is an ecommerce SaaS that allows merchants to build and manage their online stores.",
    "w": "https://zid.sa",
    "i": "Zid.png"
  },
  "Zimbra": {
    "w": "https://www.zimbra.com/",
    "i": "Zimbra.png"
  },
  "ZingChart": {
    "d": "ZingChart is a open-source and free JavaScript library for building interactive and intuitive charts.",
    "w": "https://www.zingchart.com",
    "i": "ZingChart.svg"
  },
  "Zinnia": {
    "d": "Zimbra is a is a collaborative software suite that includes an email server and a web client.",
    "w": "http://django-blog-zinnia.com",
    "i": "Zinnia.png"
  },
  "Zinrelo": {
    "d": "Zinrelo is an enterprise-grade, loyalty rewards platform.",
    "w": "https://www.zinrelo.com",
    "i": "Zinrelo.png"
  },
  "Zip": {
    "d": "Zip is a payment service that lets you receive your purchase now and spread the total cost over a interest-free payment schedule.",
    "w": "https://www.zip.co/",
    "i": "zip_pay.svg"
  },
  "Zipify OCU": {
    "d": "Zipify OCU allows you to add upsells and cross-sells to your checkout sequence.",
    "w": "https://zipify.com/apps/ocu/",
    "i": "Zipify OCU.svg"
  },
  "Zipify Pages": {
    "d": "Zipify Pages the first landing page builder uniquely designed for ecommerce.",
    "w": "https://zipify.com/apps/pages/",
    "i": "Zipify Pages.svg"
  },
  "Zipkin": {
    "w": "https://zipkin.io/",
    "i": "Zipkin.png"
  },
  "Zmags Creator": {
    "d": "Zmags Creator enables marketers to design and publish endless types of interactive digital experiences without coding.",
    "w": "https://www.creatorbyzmags.com",
    "i": "Zmags Creator.png"
  },
  "Zocdoc": {
    "d": "Zocdoc is a New York City-based company offering an online service that allows people to find and book in-person or telemedicine appointments for medical or dental care.",
    "w": "https://www.zocdoc.com",
    "i": "Zocdoc.svg"
  },
  "Zoey": {
    "d": "Zoey is a cloud-based ecommerce platform for B2B and wholesale businesses.",
    "w": "https://www.zoey.com/",
    "i": "Zoey.svg"
  },
  "Zoho": {
    "d": "Zoho is a web-based online office suite.",
    "w": "https://www.zoho.com/",
    "i": "Zoho.svg"
  },
  "Zoho Mail": {
    "d": "Zoho Mail is an email hosting service for businesses.",
    "w": "https://www.zoho.com/mail/",
    "i": "Zoho.svg"
  },
  "Zoho PageSense": {
    "d": "Zoho PageSense is a conversion optimisation platform which combines the power of web analytics, A/B testing, and personalisation.",
    "w": "https://www.zoho.com/pagesense/",
    "i": "Zoho.svg"
  },
  "Zoko": {
    "d": "Zoko is an all-in-one system that leverages the WhatsApp API to help you do business, on WhatsApp",
    "w": "https://www.zoko.io/",
    "i": "Zoko.png"
  },
  "Zone.js": {
    "w": "https://github.com/angular/angular/tree/master/packages/zone.js",
    "i": "Angular.svg"
  },
  "Zonos": {
    "d": "Zonos is a cross-border ecommerce software and app solution for companies with international business.",
    "w": "https://zonos.com",
    "i": "Zonos.svg"
  },
  "ZoodPay": {
    "w": "https://www.zoodpay.com",
    "i": "ZoodPay.png"
  },
  "Zoominfo": {
    "d": "ZoomInfo provides actionable B2B contact and company information for sales and marketing teams.",
    "w": "https://www.zoominfo.com/",
    "i": "Zoominfo.svg"
  },
  "Zoominfo Chat": {
    "d": "ZoomInfo chat is a live chat solution.",
    "w": "https://www.zoominfo.com/chat",
    "i": "Zoominfo.svg"
  },
  "Zope": {
    "w": "http://zope.org",
    "i": "Zope.png"
  },
  "Zotabox": {
    "d": "Zotabox is marketing tool which includes popups, header bars, page/form builder, testimonial, live chat, etc.",
    "w": "https://info.zotabox.com",
    "i": "zotabox.png"
  },
  "Zozo": {
    "d": "Zozo is a multi-channel ecommerce services provider from Vietnam.",
    "w": "https://zozo.vn",
    "i": "Zozo.png"
  },
  "Zuppler": {
    "d": "Zuppler is a complete and branded online ordering solution for restaurants and caterers with multi-locations.",
    "w": "https://www.zuppler.com",
    "i": "Zuppler.png"
  },
  "Zyro": {
    "d": "Zyro is a website builder service by the Hostinger group.",
    "w": "https://zyro.com",
    "i": "Zyro.svg"
  }
}

export const data = handleData(originData)
