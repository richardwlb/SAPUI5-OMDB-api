sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast ) {
	"use strict";

	return Controller.extend("workspace.MoviesAPI.controller.S0", {
		onInit: function () {

			var oModelo = new JSONModel("https://www.omdbapi.com/?s=sicario&apikey=b4c9ae4e");
			this._oModelo = oModelo; 
		    this.getView().setModel(oModelo);

		},
		
		onSearch: function(oEvent){
			
			var title = this.getView().byId("inputTitle").getValue();
			var year  = this.getView().byId("inputYear").getValue();
			var type  = this.getView().byId("selectType").getSelectedKey();
			
			var sUrl =  "https://www.omdbapi.com/?s=*"+title+"*&type="+type+"&y="+year+"&apikey=b4c9ae4e";
			
			this._oModelo.loadData(sUrl);	
		},
		
		goToDetails: function(oEvent){
			
			var idMovie = oEvent.getSource().getBindingContext().getProperty("imdbID");
			// MessageToast.show(idMovie);
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			oRouter.navTo("RouteDetails", { 
				imdbID : idMovie 
				} 
			);
		}
	});
});