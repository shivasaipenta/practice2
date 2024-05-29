    sap.ui.define([
        "sap/ui/core/mvc/Controller"
    ],
        /**
         * @param {typeof sap.ui.core.mvc.Controller} Controller
         */
        function (Controller) {
            "use strict";

            return Controller.extend("dev1.controller.View4", {
                onInit: function () {

                },
                onPress5:function(){
                    this.getOwnerComponent().getRouter().navTo("RouteView1");
                }
            });
        });
