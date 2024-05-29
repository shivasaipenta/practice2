
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

        return Controller.extend("dev1.controller.List", {
            onInit: function () {

                var oModel = new JSONModel("/model/data.json");
                   
                this.getView().setModel(oModel);
            },
            onSelcEmp(oEvent){
                var emp = oEvent.getParameter("listItem").getBindingContext().getPath("empid");
                this.getOwnerComponent().getRouter().navTo("List2");
                // console.log(emp);
            },

            onSearchEmp(oEvent){
                var value = oEvent.getParameter("newValue");
                var aFilters=[];
                if(value !== "") {
                    var oFilter=new Filter("empName",FilterOperator.Contains,value);
                    aFilters.push(oFilter);
                }
                this.getView().byId("listEmp").getBinding("items").filter(aFilters);
            },

            onAsc(){
                var oSorter=new Sorter("empName",false);
                this.getView().byId("listEmp").getBinding("items").sort(oSorter);               
            },
            onDesc(){
                var oSorter=new Sorter("empName",true);
                this.getView().byId("listEmp").getBinding("items").sort(oSorter);
            },
            onBack(){
                this.getOwnerComponent().getRouter().navTo("RouteView1");
            },
          
        });
    });

