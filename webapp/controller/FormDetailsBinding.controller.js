sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("dev1.controller.FormDetailsBinding", {
            onInit: function () {
              
            },
            onPress10:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView8");
            }
                   
        });
    });
