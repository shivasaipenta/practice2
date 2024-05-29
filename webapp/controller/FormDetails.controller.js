sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("dev1.controller.FormDetails", {
            onInit: function () {
                // this.getOwnerComponent().getRouter().getRoute("RouteView7").attachedPatternMatched(this.onPatternMatched,this);
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("RouteView7").attachPatternMatched(this.onPatternMatched, this);
            },
            onPress9:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView5");
            },
            onPatternMatched(){
                var Inp1 = this.getOwnerComponent().getModel().getProperty("/inp1");
                var Inp2 = this.getOwnerComponent().getModel().getProperty("/inp2");
                var Inp3 = this.getOwnerComponent().getModel().getProperty("/inp3");
                var Inp4 = this.getOwnerComponent().getModel().getProperty("/inp4");
                var Inp5 = this.getOwnerComponent().getModel().getProperty("/inp5");
                var Inp6 = this.getOwnerComponent().getModel().getProperty("/inp6"); 
             

                this.getView().byId("idTxtEmpId").setText(Inp1);
                this.getView().byId("idTxtEmpName").setText(Inp2);
                this.getView().byId("idTxtEmpDesg").setText(Inp3);
                this.getView().byId("idTxtEmpSkill").setText(Inp4);
                this.getView().byId("idTxtEmpEmail").setText(Inp5);
                this.getView().byId("idTxtEmpPhone").setText(Inp6);
                
            }
            
           
        });
    });
