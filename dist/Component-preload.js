jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"workspace/MoviesAPI/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","workspace/MoviesAPI/model/models"],function(e,i,t){"use strict";return e.extend("workspace.MoviesAPI.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});
},
	"workspace/MoviesAPI/controller/S0.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/m/MessageToast"],function(e,t,o){"use strict";return e.extend("workspace.MoviesAPI.controller.S0",{onInit:function(){var e=new t("https://www.omdbapi.com/?s=sicario&apikey=b4c9ae4e");this._oModelo=e;this.getView().setModel(e)},onSearch:function(e){var t=this.getView().byId("inputTitle").getValue();var o=this.getView().byId("inputYear").getValue();var i=this.getView().byId("selectType").getSelectedKey();var a="https://www.omdbapi.com/?s=*"+t+"*&type="+i+"&y="+o+"&apikey=b4c9ae4e";this._oModelo.loadData(a)},goToDetails:function(e){var t=e.getSource().getBindingContext().getProperty("imdbID");o.show(t);var i=sap.ui.core.UIComponent.getRouterFor(this);i.navTo("RouteDetails",{imdbID:t})}})});
},
	"workspace/MoviesAPI/controller/S1.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/ui/model/json/JSONModel"],function(e,o,t){"use strict";return e.extend("workspace.MoviesAPI.controller.S1",{onInit:function(){var e=sap.ui.core.UIComponent.getRouterFor(this);e.getRoute("RouteDetails").attachMatched(this._onRouteMatched,this)},_onRouteMatched:function(e){var o,n;o=e.getParameter("arguments");console.log(o.imdbID);var i=new t("https://www.omdbapi.com/?i="+o.imdbID+"&apikey=b4c9ae4e");this._oModelo=i;this.getView().setModel(i);console.log(i)},getRouter:function(){return UIComponent.getRouterFor(this)},pageBack:function(){var e=sap.ui.core.UIComponent.getRouterFor(this);e.navTo("RouteS0",true)}})});
},
	"workspace/MoviesAPI/i18n/i18n.properties":'title=Search movie details app (API - http://www.omdbapi.com)\nappTitle=MoviesAPI\nappDescription=Search movie details app (API - http://www.omdbapi.com)',
	"workspace/MoviesAPI/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"workspace.MoviesAPI","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","sourceTemplate":{"id":"ui5template.basicSAPUI5ApplicationProject","version":"1.40.12"}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":false,"rootView":{"viewName":"workspace.MoviesAPI.view.S0","type":"XML","async":true,"id":"S0"},"dependencies":{"minUI5Version":"1.65.6","libs":{"sap.ui.layout":{},"sap.ui.core":{},"sap.m":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"workspace.MoviesAPI.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"workspace.MoviesAPI.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteS0","pattern":"RouteS0","target":["TargetS0"]},{"name":"RouteDetails","pattern":"RouteDetails/{imdbID}","target":["S1"]}],"targets":{"TargetS0":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewName":"S0","viewlevel":0},"S1":{"viewType":"XML","viewName":"S1","viewlevel":1}}}},"sap.platform.hcp":{"uri":"webapp","_version":"1.1.0"}}',
	"workspace/MoviesAPI/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"workspace/MoviesAPI/view/S0.view.xml":'<mvc:View \n\tcontrollerName="workspace.MoviesAPI.controller.S0" \n\txmlns:mvc="sap.ui.core.mvc" \n\tdisplayBlock="true" \n\txmlns="sap.m"\n\txmlns:f="sap.ui.layout.form"\n\txmlns:l="sap.ui.layout"\n\txmlns:core="sap.ui.core" ><Shell id="shell"><App id="app"><pages><Page id="page" title="{i18n>title}"><content><f:SimpleForm id="simpleForm" title="Search Movie" \n\t\t\t\t\t\tminWidth="1024" maxContainerCols="2" layout="ResponsiveLayout" editable="true" visible="true"><Label text="Title" /><Input submit="onSearch" id="inputTitle" width="350px" /><Label text="Year" /><Input submit="onSearch" id="inputYear" width="100px" maxLength="4" /><Label text="Type" /><Select id="selectType" width="200px" selectedKey="movie" ><items><core:Item text="Movies" key="movie" /><core:Item text="Series" key="series" /><core:Item text="Episode" key="episode" /></items></Select></f:SimpleForm ><Bar><contentRight><Button text="Search" press="onSearch" type="Emphasized" /></contentRight></Bar><List\n\t\t\t\t\t\t\t\tid="items"\n\t\t\t\t\t\t\t\theaderText="Movies"\n\t\t\t\t\t\t\t\titems="{path:\'/Search\'}"><items><StandardListItem\n\t\t\t\t\t\t\t\t\t\ttitle="{Title}"\n\t\t\t\t\t\t\t\t\t\tdescription="{Year}"\n\t\t\t\t\t\t\t\t\t\ticon="{Poster}"\n\t\t\t\t\t\t\t\t\t\ticonDensityAware="false"\n\t\t\t\t\t\t\t\t\t\ticonInset="false"\n\t\t\t\t\t\t\t\t\t\tadaptTitleSize="false"\n\t\t\t\t\t\t\t\t\t\ttype="Navigation"\n\t\t\t\t\t\t\t\t\t\tpress="goToDetails" /></items></List></content></Page></pages></App></Shell></mvc:View>',
	"workspace/MoviesAPI/view/S1.view.xml":'<mvc:View xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m" xmlns:f="sap.ui.layout.form" xmlns:html="http://www.w3.org/1999/xhtml" controllerName="workspace.MoviesAPI.controller.S1"><App><pages><Page title="Movie Details" showNavButton="true" navButtonPress="pageBack"><content><VBox class="sapUiSmallMargin"><f:SimpleForm id="SimpleFormDisplay354" editable="false" layout="ResponsiveGridLayout" title="{/Title}" labelSpanXL="3" labelSpanL="3" labelSpanM="3" labelSpanS="12" adjustLabelSpan="false" emptySpanXL="4" emptySpanL="4" emptySpanM="4" emptySpanS="0" columnsXL="1" columnsL="1" columnsM="1" singleContainerFullSize="false"><f:content><Image class="imgPoster" src="{/Poster}" id="imgPoster" alt="{/Title}"/><Label text="Year"/><Text id="titelText" text="{/Year}"/><Label text="Rated"/><Text text="{/Rated}"/><Label text="Released"/><Text text="{/Released}"/><Label text="Runtime"/><Text text="{/Runtime}"/><Label text="Genre"/><Text text="{/Genre}"/><Label text="Director"/><Text text="{/Director}"/><Label text="Actors"/><Text text="{/Actors}"/><Label text="Language"/><Text text="{/Language}"/><Label text="Country"/><Text text="{/Country}"/><Label text="Awards"/><Text text="{/Awards}"/><Label text="Plot"/><Text text="{/Plot}"/><Label text="BoxOffice"/><Text text="{/BoxOffice}"/><Label text="Production"/><Text text="{/Production}"/></f:content></f:SimpleForm></VBox></content></Page></pages></App></mvc:View>'
}});