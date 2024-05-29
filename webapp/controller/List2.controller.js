    sap.ui.define([
        "sap/ui/core/mvc/Controller"
    ],
        /**
         * @param {typeof sap.ui.core.mvc.Controller} Controller
         */
        function (Controller) {
            "use strict";

            return Controller.extend("dev1.controller.List2", {
                onInit: function () {
                    // sap.ui.core.UIComponent.this.getOwnerComponent().getRouter().getRoute("List2").attachPatternMatched(this.onPatternMatched,this);
                    // var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    // oRouter.getRoute("List2").attachPatternMatched(this.onPatternMatched,this);
                },
                 onBack(){
                    this.getOwnerComponent().getRouter().navTo("List");
                },
                            
            });
        });
