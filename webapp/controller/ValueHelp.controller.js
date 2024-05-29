sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,Filter,FilterOperator,Sorter,Fragment) {
        "use strict";

        return Controller.extend("dev1.controller.ValueHelp", {
            onInit: function () {
                
               
            },

            onPress9:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView1");
            },
            onValueHelp(){
                
              if(!this._dialog){
                this._dialog=sap.ui.xmlfragment(this.getView().getId(),"dev1.view.ValueHelpfrag",this);              
                this.getView().addDependent(this._dialog);
                var oModel = new JSONModel("/model/data.json");                  
                this._dialog.setModel(oModel);
              }
              this._dialog.open();
            // alert("hi");
            },
            onSelectFragment:function(oEvent){
                var empId=oEvent.getParameter("listItem").getBindingContext().getProperty("empid");
                this.getView().byId("EmpId").setValue(empId);
                this.onClose();
            },
            onClose(){
                this._dialog.close();
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
            }
            
           
        });
    });
