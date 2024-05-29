    sap.ui.define([
        "sap/ui/core/mvc/Controller"
    ],
        /**
         * @param {typeof sap.ui.core.mvc.Controller} Controller
         */
        function (Controller) {
            "use strict";

            return Controller.extend("dev1.controller.ObjHeader", {
                onInit: function () {

                },
                onPress7:function(){
                    this.getOwnerComponent().getRouter().navTo("RouteView1");
                }
            });
        });
