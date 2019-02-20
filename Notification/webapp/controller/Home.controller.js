sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("AvelonNamespace.AvelonNotification.controller.Home", {
		
		onInit: function () {
			
		
			
		},
		
		handleUserInput: function(oEvent) {
			var sUserInput = oEvent.getParameter("value");
			var oInputControl = oEvent.getSource();
			if(sUserInput) {
				oInputControl.setValueState(sap.ui.core.ValueState.Success);
			} else {
				oInputControl.setValueState(sap.ui.core.ValueState.Error);
			}
		},
		
		createNotification : function(){
			
			/*var NotificationID = this.getView().byId("notifid").getValue();
			
			var InstID = this.getView().byId("instid").getValue();
			
			var TypeID = this.getView().byId("typeid").getValue();
			
			var CategoryID = this.getView().byId("catid").getValue();
			
			var NotificationDate = this.getView().byId("notifdate").getValue();
			
			var Description = this.getView().byId("descr").getValue();
			
			
		
				var properties = {
				 	"ManualNotifId" : NotificationID,
					"Instid" : InstID,
					"Typeid" : TypeID,
					"Catid" : CategoryID,
					"Notifdate" : NotificationDate,
					"Description" : Description
				};*/
				
				
				
				
			var oData = this.getView().getModel("NotificationForm").getData();

			// boolEmptyFields = this.checkEmptyFields(oData);
			/*var checkManualNotif = this.getView().getModel("NotificationForm").getProperty("ManualNotifId");
			
			if(checkManualNotif = null){
				
				
				
			}*/
			
			
			//if(this.checkEmptyFields(oData) === false){
				
			
			this.getView().getModel("Default").create("/NotificationInfoSet",oData,
			{
				
				success : function(data)
				{
					MessageToast.show("Notification created!");
					//this.getView().getModel("NotificationForm").setData("");
					
				}.bind(this),
			
				error : function(data)
				{
					MessageToast.show("Error Creating Notification");
				}
			});
			
			/*} else {
				MessageToast.show("Fill in all the fields");
			}*/
			
		},
		
		checkEmptyFields: function (oData) {
			
			delete oData.__metadata;
			for (var property in oData) {
				if (oData.hasOwnProperty(property)) {
					var value = oData[property];
					if (value.replace(/\s/g, "").length === 0) {
						return true;
					}
				}
			}
			return false;
		}
		
		
	});
});