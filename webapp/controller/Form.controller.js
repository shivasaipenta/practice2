sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("dev1.controller.Form", {
            onInit: function () {

            },
            onPress6:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView1");
            },

            onSubmit(){
                
                var inp1 = this.getView().byId("idEmpId").getValue();
                var inp2 = this.getView().byId("idEmpName").getValue();
                var inp3 = this.getView().byId("idEmpDesg").getValue();
                var inp4 = this.getView().byId("idEmpSkill").getValue();
                var inp5 = this.getView().byId("idEmpEmail").getValue();
                var inp6 = this.getView().byId("idEmpPhone").getValue();

                this.getOwnerComponent().getModel().setProperty("/inp1",inp1);
                this.getOwnerComponent().getModel().setProperty("/inp2",inp2);
                this.getOwnerComponent().getModel().setProperty("/inp3",inp3);
                this.getOwnerComponent().getModel().setProperty("/inp4",inp4);
                this.getOwnerComponent().getModel().setProperty("/inp5",inp5);
                this.getOwnerComponent().getModel().setProperty("/inp6",inp6);

                this.getOwnerComponent().getRouter().navTo("RouteView7");

                
                var allFine =true;

               //code for Employee Id
                if(inp1===""){
                    allFine =false;
                    this.getView().byId("idEmpId").setValueState("Error");
                    this.getView().byId("idEmpId").setValueStateText("Please fill the Employee ID");
                }
                else{
                    this.getView().byId("idEmpId").setValueState("None");
                   
                    var RegEx= /^[0-9]+$/;

                    if(!inp1.match(RegEx) || inp1.length!=6){
                        allFine =false;
                    this.getView().byId("idEmpId").setValueState("Error");
                    this.getView().byId("idEmpId").setValueStateText("Please give Emp Id in numbers with length six");
                    } 
                }

                //code for Employee Name
                if(inp2===""){
                    allFine =false;
                    this.getView().byId("idEmpName").setValueState("Error");
                    this.getView().byId("idEmpName").setValueStateText("Please fill the Employee Name");
                }
                else{
                    this.getView().byId("idEmpName").setValueState("None");
                   
                    var RegEx= /^[a-zA-Z]+$/;

                    if(!inp2.match(RegEx)){
                        allFine =false;
                    this.getView().byId("idEmpName").setValueState("Error");
                    this.getView().byId("idEmpName").setValueStateText("Please give Employee name in alphabets max length as 20");
                    } 
                }

                //code for Employee Designation
                if(inp3===""){
                    allFine =false;
                    this.getView().byId("idEmpDesg").setValueState("Error");
                    this.getView().byId("idEmpDesg").setValueStateText("Please fill the Employee ID");
                }
                else{
                    this.getView().byId("idEmpDesg").setValueState("None");
                   
                    var RegEx= /^[a-zA-Z]+$/;

                    if(!inp3.match(RegEx) ){
                        allFine =false;
                    this.getView().byId("idEmpDesg").setValueState("Error");
                    this.getView().byId("idEmpDesg").setValueStateText("Please give correct Emp Designation");
                    } 
                }

                //code for Employee Skill with alphanumeric
                if(inp4===""){
                    allFine =false;
                    this.getView().byId("idEmpSkill").setValueState("Error");
                    this.getView().byId("idEmpSkill").setValueStateText("Please fill the Employee ID");
                }
                else{
                    this.getView().byId("idEmpSkill").setValueState("None");
                   
                    var RegEx= /^[a-zA-Z0-9]+$/;

                    if(!inp4.match(RegEx)){
                        allFine =false;
                    this.getView().byId("idEmpSkill").setValueState("Error");
                    this.getView().byId("idEmpSkill").setValueStateText("Please give Emp Id in numbers with length six");
                    } 
                }

                //code for Employee Email
                if(inp5===""){
                    allFine =false;
                    this.getView().byId("idEmpEmail").setValueState("Error");
                    this.getView().byId("idEmpEmail").setValueStateText("Please fill the Employee ID");
                }
                else{
                    this.getView().byId("idEmpEmail").setValueState("None");
                   
                    var RegEx= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

                    if(!inp5.match(RegEx)){
                        allFine =false;
                    this.getView().byId("idEmpEmail").setValueState("Error");
                    this.getView().byId("idEmpEmail").setValueStateText("Please give Emp Id in numbers with length six");
                    } 
                }

                //code for employee Phone
                if(inp6===""){
                    allFine =false;
                    this.getView().byId("idEmpPhone").setValueState("Error");
                    this.getView().byId("idEmpPhone").setValueStateText("Please fill the Employee ID");
                }
                else{
                    this.getView().byId("idEmpPhone").setValueState("None");
                   
                    var RegEx= /^[0-9]+$/;

                    if(!inp6.match(RegEx) || inp6.length!=10){
                    allFine =false;
                    this.getView().byId("idEmpPhone").setValueState("Error");
                    this.getView().byId("idEmpPhone").setValueStateText("Please give Emp Id in numbers with length six");
                    } 
                }
                if(allFine===true){
                    alert("Successfully Submitted")
                }
            
            }

        
        });
    });
