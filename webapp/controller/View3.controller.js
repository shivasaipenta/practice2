sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("dev1.controller.View3", {
            onInit: function () {

            },
            onPress4:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView1");
            }
        });
    });
