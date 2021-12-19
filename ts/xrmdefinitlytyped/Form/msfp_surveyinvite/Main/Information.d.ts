declare namespace Form.msfp_surveyinvite.Main {
  namespace Information {
    namespace Tabs {
      interface _9556faf0fb19453fa2293f55e2787722 extends Xrm.SectionCollectionBase {
        get(name: "Email Message"): Xrm.PageSection;
        get(name: "{d2018d44-de86-424d-889d-319b33bf6825}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "createdby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "msfp_channel"): Xrm.OptionSetAttribute<msfp_surveyinvite_msfp_channel>;
      get(name: "msfp_emailmessage"): Xrm.Attribute<string>;
      get(name: "msfp_inviteemailaddress"): Xrm.Attribute<string>;
      get(name: "msfp_invitesentdate"): Xrm.DateAttribute;
      get(name: "msfp_invitestatus"): Xrm.OptionSetAttribute<msfp_surveyinvite_msfp_invitestatus>;
      get(name: "msfp_otherproperties"): Xrm.Attribute<string>;
      get(name: "msfp_respondent"): Xrm.Attribute<string>;
      get(name: "msfp_sourcesurveyidentifier"): Xrm.Attribute<string>;
      get(name: "msfp_surveyid"): Xrm.LookupAttribute<"msfp_survey">;
      get(name: "msfp_surveyinvitationurl"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "regardingobjectid"): Xrm.LookupAttribute<"account" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "incident" | "interactionforemail" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "uii_action" | "uii_hostedapplication" | "uii_nonhostedapplication" | "uii_option" | "uii_savedsession" | "uii_workflow" | "uii_workflowstep" | "uii_workflow_workflowstep_mapping">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msfp_surveyinvite_statecode>;
      get(name: "statuscode"): Xrm.OptionSetAttribute<msfp_surveyinvite_statuscode>;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: "to"): Xrm.LookupAttribute<"account" | "contact" | "lead" | "systemuser">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "createdby"): Xrm.LookupControl<"systemuser">;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_statecode"): Xrm.OptionSetControl<msfp_surveyinvite_statecode>;
      get(name: "msfp_channel"): Xrm.OptionSetControl<msfp_surveyinvite_msfp_channel>;
      get(name: "msfp_emailmessage"): Xrm.StringControl;
      get(name: "msfp_inviteemailaddress"): Xrm.StringControl;
      get(name: "msfp_invitesentdate"): Xrm.DateControl;
      get(name: "msfp_invitestatus"): Xrm.OptionSetControl<msfp_surveyinvite_msfp_invitestatus>;
      get(name: "msfp_otherproperties"): Xrm.StringControl;
      get(name: "msfp_respondent"): Xrm.StringControl;
      get(name: "msfp_sourcesurveyidentifier"): Xrm.StringControl;
      get(name: "msfp_surveyid"): Xrm.LookupControl<"msfp_survey">;
      get(name: "msfp_surveyinvitationurl"): Xrm.StringControl;
      get(name: "regardingobjectid"): Xrm.LookupControl<"account" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "incident" | "interactionforemail" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "uii_action" | "uii_hostedapplication" | "uii_nonhostedapplication" | "uii_option" | "uii_savedsession" | "uii_workflow" | "uii_workflowstep" | "uii_workflow_workflowstep_mapping">;
      get(name: "statuscode"): Xrm.OptionSetControl<msfp_surveyinvite_statuscode>;
      get(name: "subject"): Xrm.StringControl;
      get(name: "to"): Xrm.LookupControl<"account" | "contact" | "lead" | "systemuser">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{9556faf0-fb19-453f-a229-3f55e2787722}"): Xrm.PageTab<Tabs._9556faf0fb19453fa2293f55e2787722>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "createdby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "msfp_channel"): Xrm.OptionSetAttribute<msfp_surveyinvite_msfp_channel>;
    getAttribute(attributeName: "msfp_emailmessage"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_inviteemailaddress"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_invitesentdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msfp_invitestatus"): Xrm.OptionSetAttribute<msfp_surveyinvite_msfp_invitestatus>;
    getAttribute(attributeName: "msfp_otherproperties"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_respondent"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_sourcesurveyidentifier"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_surveyid"): Xrm.LookupAttribute<"msfp_survey">;
    getAttribute(attributeName: "msfp_surveyinvitationurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute<"account" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "incident" | "interactionforemail" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "uii_action" | "uii_hostedapplication" | "uii_nonhostedapplication" | "uii_option" | "uii_savedsession" | "uii_workflow" | "uii_workflowstep" | "uii_workflow_workflowstep_mapping">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msfp_surveyinvite_statecode>;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<msfp_surveyinvite_statuscode>;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: "to"): Xrm.LookupAttribute<"account" | "contact" | "lead" | "systemuser">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "createdby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<msfp_surveyinvite_statecode>;
    getControl(controlName: "msfp_channel"): Xrm.OptionSetControl<msfp_surveyinvite_msfp_channel>;
    getControl(controlName: "msfp_emailmessage"): Xrm.StringControl;
    getControl(controlName: "msfp_inviteemailaddress"): Xrm.StringControl;
    getControl(controlName: "msfp_invitesentdate"): Xrm.DateControl;
    getControl(controlName: "msfp_invitestatus"): Xrm.OptionSetControl<msfp_surveyinvite_msfp_invitestatus>;
    getControl(controlName: "msfp_otherproperties"): Xrm.StringControl;
    getControl(controlName: "msfp_respondent"): Xrm.StringControl;
    getControl(controlName: "msfp_sourcesurveyidentifier"): Xrm.StringControl;
    getControl(controlName: "msfp_surveyid"): Xrm.LookupControl<"msfp_survey">;
    getControl(controlName: "msfp_surveyinvitationurl"): Xrm.StringControl;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl<"account" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "entitlement" | "entitlementtemplate" | "incident" | "interactionforemail" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "uii_action" | "uii_hostedapplication" | "uii_nonhostedapplication" | "uii_option" | "uii_savedsession" | "uii_workflow" | "uii_workflowstep" | "uii_workflow_workflowstep_mapping">;
    getControl(controlName: "statuscode"): Xrm.OptionSetControl<msfp_surveyinvite_statuscode>;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: "to"): Xrm.LookupControl<"account" | "contact" | "lead" | "systemuser">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
