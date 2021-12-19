declare namespace Form.msfp_alert.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "modifiedon"): Xrm.DateAttribute;
      get(name: "msfp_assigneeemail"): Xrm.Attribute<string>;
      get(name: "msfp_assigneename"): Xrm.Attribute<string>;
      get(name: "msfp_customeremail"): Xrm.Attribute<string>;
      get(name: "msfp_customername"): Xrm.Attribute<string>;
      get(name: "msfp_notes"): Xrm.Attribute<string>;
      get(name: "msfp_project"): Xrm.LookupAttribute<"msfp_project">;
      get(name: "msfp_questions"): Xrm.Attribute<string>;
      get(name: "msfp_reason"): Xrm.Attribute<string>;
      get(name: "msfp_resolutiondetail"): Xrm.Attribute<string>;
      get(name: "msfp_resolutionsentiment"): Xrm.NumberAttribute;
      get(name: "msfp_resolveremail"): Xrm.Attribute<string>;
      get(name: "msfp_resolvername"): Xrm.Attribute<string>;
      get(name: "msfp_satisfactionmetric"): Xrm.LookupAttribute<"msfp_satisfactionmetric">;
      get(name: "msfp_survey"): Xrm.LookupAttribute<"msfp_survey">;
      get(name: "msfp_surveyresponse"): Xrm.LookupAttribute<"msfp_surveyresponse">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "prioritycode"): Xrm.OptionSetAttribute<msfp_alert_prioritycode>;
      get(name: "regardingobjectid"): Xrm.LookupAttribute<"account" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "incident" | "interactionforemail" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "uii_action" | "uii_hostedapplication" | "uii_nonhostedapplication" | "uii_option" | "uii_savedsession" | "uii_workflow" | "uii_workflowstep" | "uii_workflow_workflowstep_mapping">;
      get(name: "scheduledend"): Xrm.DateAttribute;
      get(name: "statecode"): Xrm.OptionSetAttribute<msfp_alert_statecode>;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: "to"): Xrm.LookupAttribute<"account" | "contact" | "lead" | "systemuser">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "createdon"): Xrm.DateControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_prioritycode"): Xrm.OptionSetControl<msfp_alert_prioritycode>;
      get(name: "header_scheduledend"): Xrm.DateControl;
      get(name: "header_statecode"): Xrm.OptionSetControl<msfp_alert_statecode>;
      get(name: "modifiedon"): Xrm.DateControl;
      get(name: "msfp_assigneeemail"): Xrm.StringControl;
      get(name: "msfp_assigneename"): Xrm.StringControl;
      get(name: "msfp_customeremail"): Xrm.StringControl;
      get(name: "msfp_customername"): Xrm.StringControl;
      get(name: "msfp_notes"): Xrm.StringControl;
      get(name: "msfp_project"): Xrm.LookupControl<"msfp_project">;
      get(name: "msfp_questions"): Xrm.StringControl;
      get(name: "msfp_reason"): Xrm.StringControl;
      get(name: "msfp_resolutiondetail"): Xrm.StringControl;
      get(name: "msfp_resolutionsentiment"): Xrm.NumberControl;
      get(name: "msfp_resolveremail"): Xrm.StringControl;
      get(name: "msfp_resolvername"): Xrm.StringControl;
      get(name: "msfp_satisfactionmetric"): Xrm.LookupControl<"msfp_satisfactionmetric">;
      get(name: "msfp_survey"): Xrm.LookupControl<"msfp_survey">;
      get(name: "msfp_surveyresponse"): Xrm.LookupControl<"msfp_surveyresponse">;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "regardingobjectid"): Xrm.LookupControl<"account" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "incident" | "interactionforemail" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "uii_action" | "uii_hostedapplication" | "uii_nonhostedapplication" | "uii_option" | "uii_savedsession" | "uii_workflow" | "uii_workflowstep" | "uii_workflow_workflowstep_mapping">;
      get(name: "subject"): Xrm.StringControl;
      get(name: "to"): Xrm.LookupControl<"account" | "contact" | "lead" | "systemuser">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "modifiedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "msfp_assigneeemail"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_assigneename"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_customeremail"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_customername"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_notes"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_project"): Xrm.LookupAttribute<"msfp_project">;
    getAttribute(attributeName: "msfp_questions"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_reason"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_resolutiondetail"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_resolutionsentiment"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msfp_resolveremail"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_resolvername"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_satisfactionmetric"): Xrm.LookupAttribute<"msfp_satisfactionmetric">;
    getAttribute(attributeName: "msfp_survey"): Xrm.LookupAttribute<"msfp_survey">;
    getAttribute(attributeName: "msfp_surveyresponse"): Xrm.LookupAttribute<"msfp_surveyresponse">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "prioritycode"): Xrm.OptionSetAttribute<msfp_alert_prioritycode>;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute<"account" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "incident" | "interactionforemail" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "uii_action" | "uii_hostedapplication" | "uii_nonhostedapplication" | "uii_option" | "uii_savedsession" | "uii_workflow" | "uii_workflowstep" | "uii_workflow_workflowstep_mapping">;
    getAttribute(attributeName: "scheduledend"): Xrm.DateAttribute;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msfp_alert_statecode>;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: "to"): Xrm.LookupAttribute<"account" | "contact" | "lead" | "systemuser">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "createdon"): Xrm.DateControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_prioritycode"): Xrm.OptionSetControl<msfp_alert_prioritycode>;
    getControl(controlName: "header_scheduledend"): Xrm.DateControl;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<msfp_alert_statecode>;
    getControl(controlName: "modifiedon"): Xrm.DateControl;
    getControl(controlName: "msfp_assigneeemail"): Xrm.StringControl;
    getControl(controlName: "msfp_assigneename"): Xrm.StringControl;
    getControl(controlName: "msfp_customeremail"): Xrm.StringControl;
    getControl(controlName: "msfp_customername"): Xrm.StringControl;
    getControl(controlName: "msfp_notes"): Xrm.StringControl;
    getControl(controlName: "msfp_project"): Xrm.LookupControl<"msfp_project">;
    getControl(controlName: "msfp_questions"): Xrm.StringControl;
    getControl(controlName: "msfp_reason"): Xrm.StringControl;
    getControl(controlName: "msfp_resolutiondetail"): Xrm.StringControl;
    getControl(controlName: "msfp_resolutionsentiment"): Xrm.NumberControl;
    getControl(controlName: "msfp_resolveremail"): Xrm.StringControl;
    getControl(controlName: "msfp_resolvername"): Xrm.StringControl;
    getControl(controlName: "msfp_satisfactionmetric"): Xrm.LookupControl<"msfp_satisfactionmetric">;
    getControl(controlName: "msfp_survey"): Xrm.LookupControl<"msfp_survey">;
    getControl(controlName: "msfp_surveyresponse"): Xrm.LookupControl<"msfp_surveyresponse">;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl<"account" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "incident" | "interactionforemail" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "uii_action" | "uii_hostedapplication" | "uii_nonhostedapplication" | "uii_option" | "uii_savedsession" | "uii_workflow" | "uii_workflowstep" | "uii_workflow_workflowstep_mapping">;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: "to"): Xrm.LookupControl<"account" | "contact" | "lead" | "systemuser">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
