(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{323:function(e,a,t){e.exports=t.p+"assets/img/service-relationship-diagram.4d818237.png"},472:function(e,a,t){"use strict";t.r(a);var i=t(15),s=Object(i.a)({},function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"api-mediation-layer"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#api-mediation-layer","aria-hidden":"true"}},[e._v("#")]),e._v(" API Mediation Layer")]),e._v(" "),i("p",[e._v("The API Mediation Layer provides a single point of access for mainframe service REST APIs. The layer offers enterprise, cloud-like features such as high-availability, scalability, dynamic API discovery, consistent security, a single sign-on experience, and documentation. The API Mediation Layer facilitates secure communication across loosely coupled microservices through the API Gateway. The API Mediation Layer consists of three components: the Gateway, the Discovery Service, and the Catalog. The Gateway provides secure communication across loosely coupled API services. The Discovery Service enables you to determine the location and status of service instances running inside the API ML ecosystem. The Catalog provides an easy-to-use interface to view all discovered services, their associated APIs, and Swagger documentation in a user-friendly manner.")]),e._v(" "),i("h2",{attrs:{id:"key-features"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#key-features","aria-hidden":"true"}},[e._v("#")]),e._v(" Key features")]),e._v(" "),i("ul",[i("li",[e._v("Consistent Access: API routing and standardization of API service URLs through the Gateway component provides users with a consistent way to access mainframe APIs at a predefined address.")]),e._v(" "),i("li",[e._v("Dynamic Discovery: The Discovery Service automatically determines the location and status of API services.")]),e._v(" "),i("li",[e._v("High-Availability: API Mediation Layer is designed with high-availability of services and scalability in mind.")]),e._v(" "),i("li",[e._v("Redundancy and Scalability: API service throughput is easily increased by starting multiple API service instances without the need to change configuration.")]),e._v(" "),i("li",[e._v("Presentation of Services: The API Catalog component provides easy access to discovered API services and their associated documentation in a user-friendly manner. Access to the contents of the API Catalog is controlled through a z/OS security facility.")]),e._v(" "),i("li",[e._v("Encrypted Communication: API ML facilitates secure and trusted communication across both internal components and discovered API services.")])]),e._v(" "),i("h2",{attrs:{id:"api-mediation-layer-architecture"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#api-mediation-layer-architecture","aria-hidden":"true"}},[e._v("#")]),e._v(" API Mediation Layer architecture")]),e._v(" "),i("p",[e._v("The following diagram illustrates the single point of access through the Gateway, and the interactions between API ML components and services:")]),e._v(" "),i("p",[i("img",{attrs:{src:t(323),alt:"API Mediation Layer Architecture diagram"}})]),e._v(" "),i("h2",{attrs:{id:"components"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#components","aria-hidden":"true"}},[e._v("#")]),e._v(" Components")]),e._v(" "),i("p",[e._v("The API Layer consists of the following key components:")]),e._v(" "),i("h3",{attrs:{id:"api-gateway"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#api-gateway","aria-hidden":"true"}},[e._v("#")]),e._v(" API Gateway")]),e._v(" "),i("p",[e._v("Services that comprise the API ML service ecosystem are located behind a gateway (reverse proxy). All end users and API client applications interact through the Gateway. Each service is assigned a unique service ID that is used in the access URL. Based on the service ID, the Gateway forwards incoming API requests to the appropriate service. Multiple Gateway instances can be started to achieve high-availability. The Gateway access URL remains unchanged. The Gateway is built using Netflix Zuul and Spring Boot technology.")]),e._v(" "),i("h3",{attrs:{id:"discovery-service"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#discovery-service","aria-hidden":"true"}},[e._v("#")]),e._v(" Discovery Service")]),e._v(" "),i("p",[e._v("The Discovery Service is the central repository of active services in the API ML ecosystem. The Discovery Service continuously collects and aggregates service information and serves as a repository of active services. When a service is started, it sends its metadata, such as the original URL, assigned serviceId, and status information to the Discovery Service. Back-end microservices register with this service either directly or by using a Eureka client. Multiple enablers are available to help with service on-boarding of various application achitectures including plain Java applications and Java applications that use the Spring Boot framework. The Discovery Service is built on Eureka and Spring Boot technology.")]),e._v(" "),i("h4",{attrs:{id:"discovery-service-tls-ssl"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#discovery-service-tls-ssl","aria-hidden":"true"}},[e._v("#")]),e._v(" Discovery Service TLS/SSL")]),e._v(" "),i("p",[e._v("HTTPS protocol can be enabled during API ML configuration and is highly recommended. Beyond encrypting communication, the HTTPS configuration for the Discovery Service enables hightened security for service registration. Without HTTPS, services provide a username and password to register in the API ML ecosystem. When using HTTPS, only trusted services that provide HTTPS certificates signed by a trusted certificate authority can be registered.")]),e._v(" "),i("h3",{attrs:{id:"api-catalog"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#api-catalog","aria-hidden":"true"}},[e._v("#")]),e._v(" API Catalog")]),e._v(" "),i("p",[e._v("The API Catalog is the catalog of published API services and their associated documentation. The Catalog provides both the REST APIs and a web user interface (UI) to access them. The web UI follows the industry standard Swagger UI component to visualize API documentation in OpenAPI JSON format for each service. A service can be implemented by one or more service instances, which provide exactly the same service for high-availability or scalability.")]),e._v(" "),i("h4",{attrs:{id:"catalog-security"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#catalog-security","aria-hidden":"true"}},[e._v("#")]),e._v(" Catalog Security")]),e._v(" "),i("p",[e._v("Access to the API Catalog can be protected with an Enterprise z/OS Security Manager such as IBM RACF, CA ACF2, or CA Top Secret. Only users who provide proper mainframe credentials can access the Catalog. Client authentication is implemented through the zOSMF API.")]),e._v(" "),i("h2",{attrs:{id:"onboarding-apis"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#onboarding-apis","aria-hidden":"true"}},[e._v("#")]),e._v(" Onboarding APIs")]),e._v(" "),i("p",[e._v("The most important part of the ecosystem are the real API services that provide useful APIs. Use the following topics to understand what options you have for adding new APIs to the Mediation Layer:")]),e._v(" "),i("ul",[i("li",[i("router-link",{attrs:{to:"/extend/extend-apiml/api-mediation-onboard-overview.html"}},[e._v("Onboarding Overview")])],1)])])},[],!1,null,null,null);a.default=s.exports}}]);