declare namespace Form.msfp_surveyresponse.Main {
  namespace Information {
    namespace Tabs {
      interface fe5be043870f4d0fb79f195dcba93f38 extends Xrm.SectionCollectionBase {
        get(name: "General"): Xrm.PageSection;
        get(name: "QuestionResponses"): Xrm.PageSection;
        get(name: "{fe5be043-870f-4d0f-b79f-195dcba93f38}_section_4"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "createdby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "from"): Xrm.LookupAttribute<"account" | "contact" | "lead" | "systemuser">;
      get(name: "msfp_embedcontextparameters"): Xrm.Attribute<string>;
      get(name: "msfp_language"): Xrm.Attribute<string>;
      get(name: "msfp_locale"): Xrm.Attribute<string>;
      get(name: "msfp_name"): Xrm.Attribute<string>;
      get(name: "msfp_npsscore"): Xrm.NumberAttribute;
      get(name: "msfp_otherproperties"): Xrm.Attribute<string>;
      get(name: "msfp_questionresponseslist"): Xrm.Attribute<string>;
      get(name: "msfp_respondent"): Xrm.Attribute<string>;
      get(name: "msfp_respondentemailaddress"): Xrm.Attribute<string>;
      get(name: "msfp_responsetype"): Xrm.Attribute<string>;
      get(name: "msfp_satisfactionmetricvalue"): Xrm.Attribute<string>;
      get(name: "msfp_sentiment"): Xrm.OptionSetAttribute<msfp_surveyresponse_msfp_sentiment>;
      get(name: "msfp_sourcesurveyidentifier"): Xrm.Attribute<string>;
      get(name: "msfp_submitdate"): Xrm.DateAttribute;
      get(name: "msfp_surveyid"): Xrm.LookupAttribute<"msfp_survey">;
      get(name: "msfp_surveyinviteid"): Xrm.LookupAttribute<"msfp_surveyinvite">;
      get(name: "msfp_surveyresponseurl"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "prioritycode"): Xrm.OptionSetAttribute<msfp_surveyresponse_prioritycode>;
      get(name: "regardingobjectid"): Xrm.LookupAttribute<"account" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "incident" | "interactionforemail" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "uii_action" | "uii_hostedapplication" | "uii_nonhostedapplication" | "uii_option" | "uii_savedsession" | "uii_workflow" | "uii_workflowstep" | "uii_workflow_workflowstep_mapping">;
      get(name: "scheduledend"): Xrm.DateAttribute;
      get(name: "scheduledstart"): Xrm.DateAttribute;
      get(name: "statecode"): Xrm.OptionSetAttribute<msfp_surveyresponse_statecode>;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "IFRAME_SurveyResponse"): Xrm.IFrameControl;
      get(name: "QuestionResponses"): Xrm.SubGridControl<"msfp_questionresponse">;
      get(name: "createdby"): Xrm.LookupControl<"systemuser">;
      get(name: "from"): Xrm.LookupControl<"account" | "contact" | "lead" | "systemuser">;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_prioritycode"): Xrm.OptionSetControl<msfp_surveyresponse_prioritycode>;
      get(name: "header_scheduledend"): Xrm.DateControl;
      get(name: "header_statecode"): Xrm.OptionSetControl<msfp_surveyresponse_statecode>;
      get(name: "msfp_embedcontextparameters"): Xrm.StringControl;
      get(name: "msfp_language"): Xrm.StringControl;
      get(name: "msfp_locale"): Xrm.StringControl;
      get(name: "msfp_name"): Xrm.StringControl;
      get(name: "msfp_npsscore"): Xrm.NumberControl;
      get(name: "msfp_otherproperties"): Xrm.StringControl;
      get(name: "msfp_questionresponseslist"): Xrm.StringControl;
      get(name: "msfp_respondent"): Xrm.StringControl;
      get(name: "msfp_respondentemailaddress"): Xrm.StringControl;
      get(name: "msfp_responsetype"): Xrm.StringControl;
      get(name: "msfp_satisfactionmetricvalue"): Xrm.StringControl;
      get(name: "msfp_sentiment"): Xrm.OptionSetControl<msfp_surveyresponse_msfp_sentiment>;
      get(name: "msfp_sourcesurveyidentifier"): Xrm.StringControl;
      get(name: "msfp_submitdate"): Xrm.DateControl;
      get(name: "msfp_surveyid"): Xrm.LookupControl<"msfp_survey">;
      get(name: "msfp_surveyinviteid"): Xrm.LookupControl<"msfp_surveyinvite">;
      get(name: "msfp_surveyresponseurl"): Xrm.StringControl;
      get(name: "regardingobjectid"): Xrm.LookupControl<"account" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "incident" | "interactionforemail" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "uii_action" | "uii_hostedapplication" | "uii_nonhostedapplication" | "uii_option" | "uii_savedsession" | "uii_workflow" | "uii_workflowstep" | "uii_workflow_workflowstep_mapping">;
      get(name: "scheduledstart"): Xrm.DateControl;
      get(name: "subject"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{fe5be043-870f-4d0f-b79f-195dcba93f38}"): Xrm.PageTab<Tabs.fe5be043870f4d0fb79f195dcba93f38>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "createdby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "from"): Xrm.LookupAttribute<"account" | "contact" | "lead" | "systemuser">;
    getAttribute(attributeName: "msfp_embedcontextparameters"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_language"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_locale"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_npsscore"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msfp_otherproperties"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_questionresponseslist"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_respondent"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_respondentemailaddress"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_responsetype"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_satisfactionmetricvalue"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_sentiment"): Xrm.OptionSetAttribute<msfp_surveyresponse_msfp_sentiment>;
    getAttribute(attributeName: "msfp_sourcesurveyidentifier"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_submitdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msfp_surveyid"): Xrm.LookupAttribute<"msfp_survey">;
    getAttribute(attributeName: "msfp_surveyinviteid"): Xrm.LookupAttribute<"msfp_surveyinvite">;
    getAttribute(attributeName: "msfp_surveyresponseurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "prioritycode"): Xrm.OptionSetAttribute<msfp_surveyresponse_prioritycode>;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute<"account" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "incident" | "interactionforemail" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "uii_action" | "uii_hostedapplication" | "uii_nonhostedapplication" | "uii_option" | "uii_savedsession" | "uii_workflow" | "uii_workflowstep" | "uii_workflow_workflowstep_mapping">;
    getAttribute(attributeName: "scheduledend"): Xrm.DateAttribute;
    getAttribute(attributeName: "scheduledstart"): Xrm.DateAttribute;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msfp_surveyresponse_statecode>;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "IFRAME_SurveyResponse"): Xrm.IFrameControl;
    getControl(controlName: "QuestionResponses"): Xrm.SubGridControl<"msfp_questionresponse">;
    getControl(controlName: "createdby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "from"): Xrm.LookupControl<"account" | "contact" | "lead" | "systemuser">;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_prioritycode"): Xrm.OptionSetControl<msfp_surveyresponse_prioritycode>;
    getControl(controlName: "header_scheduledend"): Xrm.DateControl;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<msfp_surveyresponse_statecode>;
    getControl(controlName: "msfp_embedcontextparameters"): Xrm.StringControl;
    getControl(controlName: "msfp_language"): Xrm.StringControl;
    getControl(controlName: "msfp_locale"): Xrm.StringControl;
    getControl(controlName: "msfp_name"): Xrm.StringControl;
    getControl(controlName: "msfp_npsscore"): Xrm.NumberControl;
    getControl(controlName: "msfp_otherproperties"): Xrm.StringControl;
    getControl(controlName: "msfp_questionresponseslist"): Xrm.StringControl;
    getControl(controlName: "msfp_respondent"): Xrm.StringControl;
    getControl(controlName: "msfp_respondentemailaddress"): Xrm.StringControl;
    getControl(controlName: "msfp_responsetype"): Xrm.StringControl;
    getControl(controlName: "msfp_satisfactionmetricvalue"): Xrm.StringControl;
    getControl(controlName: "msfp_sentiment"): Xrm.OptionSetControl<msfp_surveyresponse_msfp_sentiment>;
    getControl(controlName: "msfp_sourcesurveyidentifier"): Xrm.StringControl;
    getControl(controlName: "msfp_submitdate"): Xrm.DateControl;
    getControl(controlName: "msfp_surveyid"): Xrm.LookupControl<"msfp_survey">;
    getControl(controlName: "msfp_surveyinviteid"): Xrm.LookupControl<"msfp_surveyinvite">;
    getControl(controlName: "msfp_surveyresponseurl"): Xrm.StringControl;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl<"account" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "incident" | "interactionforemail" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "uii_action" | "uii_hostedapplication" | "uii_nonhostedapplication" | "uii_option" | "uii_savedsession" | "uii_workflow" | "uii_workflowstep" | "uii_workflow_workflowstep_mapping">;
    getControl(controlName: "scheduledstart"): Xrm.DateControl;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
