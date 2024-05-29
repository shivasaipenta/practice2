sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("dev1.controller.View2", {
            onInit: function () {

            },
            onPress2:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView1");
            },
            onPress3:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView3");
            }
        });
    });
