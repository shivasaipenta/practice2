sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,Filter,FilterOperator,Sorter) {
        "use strict";

        return Controller.extend("dev1.controller.Table", {
            onInit: function () {
               
                var oModel = new JSONModel("/model/data.json");
                   
                this.getView().setModel(oModel);

            },
            onSearchEmp(oEvent){
                var value= oEvent.getParameter("newValue");
                var aFilters=[];
                if(value !==""){
                    var oFilter = new Filter("empName",FilterOperator.Contains,value);
                    aFilters.push(oFilter);
                    this.getView().byId("tableEmp").getBinding("items").filter(aFilters);
                }

            },
            onAsc(){
                var oSort= new Sorter("empName",false);
                this.getView().byId("tableEmp").getBinding("items").sort(oSort);
            },
            onDesc(){
                var oSort = new Sorter("empName",true);
                this.getView().byId("tableEmp").getBinding("items").sort(oSort);
            },
             onBack(){
                this.getOwnerComponent().getRouter().navTo("RouteView1");
            },
                        
        });
    });
