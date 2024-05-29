sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("dev1.controller.View1", {
            onInit: function () {

            },
            onPressTable:function(){
                this.getOwnerComponent().getRouter().navTo("Table");
            },
            onPress:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView2");
            },
            onPressGrid:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView4");
            },
            onPressForm:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView5");
            },
            onPressObj:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView6");
            },
            onPressFormBinding:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView8");
            },
            onPressList(){
                this.getOwnerComponent().getRouter().navTo("List");
            },
            onPressValueHelp(){
                this.getOwnerComponent().getRouter().navTo("ValueHelp");
            },
            
            onNameChange:function(){

                //to set the text
                var name = this.getView().byId("idInpName").getValue();
                var title = "Welcome to "+ name;
                this.getView().byId("idWelcome").setText(title);

                //to set the alignment of text
                var name2 = this.getView().byId("idInpName2").getValue();
                this.getView().byId("idWelcome").setTextAlign(name2);

                //to disable to the editable fields
                this.getView().byId("idInpName").setEnabled(false);
                this.getView().byId("idInpName2").setEnabled(false);

            },

            onHideShow(){
                
            var txtBtn = this.getView().byId("idBtnHide").getText();

             if(txtBtn === "Hide")
             {
               this.getView().byId("idWelcome").setVisible(false);
               this.getView().byId("idLbl").setVisible(false);
               this.getView().byId("idInpName").setVisible(false);
               this.getView().byId("idLbl2").setVisible(false);
               this.getView().byId("idInpName2").setVisible(false);
               this.getView().byId("idNameChg").setVisible(false);

               this.getView().byId("idBtnHide").setText("Show");
             }

             else
             {
               this.getView().byId("idWelcome").setVisible(true);
               this.getView().byId("idLbl").setVisible(true);
               this.getView().byId("idInpName").setVisible(true);
               this.getView().byId("idLbl2").setVisible(true);
               this.getView().byId("idInpName2").setVisible(true);
               this.getView().byId("idNameChg").setVisible(true);

               this.getView().byId("idBtnHide").setText("Hide");
             }
               

            }
        });
    });
