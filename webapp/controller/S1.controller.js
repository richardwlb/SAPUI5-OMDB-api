sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel"
], function (Controller, History, JSONModel) {
	"use strict";

	return Controller.extend("workspace.MoviesAPI.controller.S1", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf workspace.MoviesAPI.view.S1
		 */
		onInit: function () {
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("RouteDetails").attachMatched(this._onRouteMatched, this);

		},
		
		// Função para pegar o valor que vem por parametro
		_onRouteMatched : function (oEvent) {
			var oArgs, oView;
			oArgs = oEvent.getParameter("arguments");
		  
			console.log(oArgs.imdbID);

			var oModelo 	= new JSONModel("https://www.omdbapi.com/?i="+oArgs.imdbID+"&apikey=b4c9ae4e");
			this._oModelo	= oModelo; 
		    this.getView().setModel(oModelo);
			console.log(oModelo);

		},
		
		getRouter : function () {
			return UIComponent.getRouterFor(this);
		},
		
		pageBack: function(){

				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("RouteS0", true);

		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf workspace.MoviesAPI.view.S1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf workspace.MoviesAPI.view.S1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf workspace.MoviesAPI.view.S1
		 */
		//	onExit: function() {
		//
		//	}

	});

});