declare namespace Form.opportunity.Main {
  namespace AIforSales {
    namespace Tabs {
      interface Product_Line_Items extends Xrm.SectionCollectionBase {
        get(name: "DynamicProperties"): Xrm.PageSection;
        get(name: "opportunityproducts"): Xrm.PageSection;
        get(name: "suggestionsection"): Xrm.PageSection;
        get(name: "totals"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface QUOTES extends Xrm.SectionCollectionBase {
        get(name: "opportunityquotes"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Summary extends Xrm.SectionCollectionBase {
        get(name: "Notes_pane"): Xrm.PageSection;
        get(name: "Opportunity_details"): Xrm.PageSection;
        get(name: "Social_pane"): Xrm.PageSection;
        get(name: "Summary_CadenceWidget"): Xrm.PageSection;
        get(name: "Summary_section_6"): Xrm.PageSection;
        get(name: "opportunity_information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "budgetamount"): Xrm.NumberAttribute;
      get(name: "completefinalproposal"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "completeinternalreview"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "currentsituation"): Xrm.Attribute<string>;
      get(name: "customerneed"): Xrm.Attribute<string>;
      get(name: "decisionmaker"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "developproposal"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "discountamount"): Xrm.NumberAttribute;
      get(name: "discountpercentage"): Xrm.NumberAttribute;
      get(name: "emailaddress1"): Xrm.Attribute<string> | null;
      get(name: "estimatedclosedate"): Xrm.DateAttribute;
      get(name: "estimatedvalue"): Xrm.NumberAttribute;
      get(name: "filedebrief"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "finaldecisiondate"): Xrm.DateAttribute | null;
      get(name: "freightamount"): Xrm.NumberAttribute;
      get(name: "identifycompetitors"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "identifycustomercontacts"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "identifypursuitteam"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "isrevenuesystemcalculated"): Xrm.OptionSetAttribute<boolean>;
      get(name: "mobilephone"): Xrm.Attribute<string> | null;
      get(name: "msdyn_ordertype"): Xrm.OptionSetAttribute<msdyn_opportunity_msdyn_ordertype>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account">;
      get(name: "parentcontactid"): Xrm.LookupAttribute<"contact">;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "presentfinalproposal"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "presentproposal"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "pricelevelid"): Xrm.LookupAttribute<"pricelevel">;
      get(name: "proposedsolution"): Xrm.Attribute<string>;
      get(name: "purchaseprocess"): Xrm.OptionSetAttribute<purchaseprocess>;
      get(name: "purchasetimeframe"): Xrm.OptionSetAttribute<purchasetimeframe>;
      get(name: "sendthankyounote"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "statuscode"): Xrm.OptionSetAttribute<opportunity_statuscode>;
      get(name: "telephone1"): Xrm.Attribute<string> | null;
      get(name: "totalamount"): Xrm.NumberAttribute;
      get(name: "totalamountlessfreight"): Xrm.NumberAttribute;
      get(name: "totallineitemamount"): Xrm.NumberAttribute;
      get(name: "totaltax"): Xrm.NumberAttribute;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ActionCards"): Xrm.BaseControl;
      get(name: "CadenceWidgetControl"): Xrm.BaseControl;
      get(name: "Competitors"): Xrm.SubGridControl<"competitor">;
      get(name: "DynamicPropertiesList_LinkControl"): Xrm.BaseControl;
      get(name: "ProductSuggestions_LinkControl"): Xrm.BaseControl;
      get(name: "Pursuit_Team"): Xrm.SubGridControl<"connection">;
      get(name: "Stakeholders"): Xrm.SubGridControl<"connection">;
      get(name: "budgetamount"): Xrm.NumberControl;
      get(name: "currentsituation"): Xrm.StringControl;
      get(name: "customerneed"): Xrm.StringControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "discountamount"): Xrm.NumberControl;
      get(name: "discountpercentage"): Xrm.NumberControl;
      get(name: "freightamount"): Xrm.NumberControl;
      get(name: "header_estimatedclosedate"): Xrm.DateControl;
      get(name: "header_estimatedvalue"): Xrm.NumberControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_process_budgetamount"): Xrm.NumberControl | null;
      get(name: "header_process_completefinalproposal"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_completefinalproposal_1"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_completeinternalreview"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_completeinternalreview_1"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_currentsituation"): Xrm.StringControl | null;
      get(name: "header_process_customerneed"): Xrm.StringControl | null;
      get(name: "header_process_customerneed_1"): Xrm.StringControl | null;
      get(name: "header_process_customerneed_2"): Xrm.StringControl | null;
      get(name: "header_process_decisionmaker"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_description"): Xrm.StringControl | null;
      get(name: "header_process_description_1"): Xrm.StringControl | null;
      get(name: "header_process_developproposal"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_developproposal_1"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_filedebrief"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_filedebrief_1"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_finaldecisiondate"): Xrm.DateControl | null;
      get(name: "header_process_finaldecisiondate_1"): Xrm.DateControl | null;
      get(name: "header_process_identifycompetitors"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_identifycompetitors_1"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_identifycustomercontacts"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_identifycustomercontacts_1"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_identifypursuitteam"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_identifypursuitteam_1"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"opportunity"> | null;
      get(name: "header_process_parentaccountid_1"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_parentcontactid"): Xrm.LookupControl<"opportunity"> | null;
      get(name: "header_process_parentcontactid_1"): Xrm.LookupControl<"contact"> | null;
      get(name: "header_process_preferredcontactmethodcode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_presentfinalproposal"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_presentfinalproposal_1"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_presentproposal"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_presentproposal_1"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_proposedsolution"): Xrm.StringControl | null;
      get(name: "header_process_proposedsolution_1"): Xrm.StringControl | null;
      get(name: "header_process_purchaseprocess"): Xrm.OptionSetControl<purchaseprocess> | null;
      get(name: "header_process_purchasetimeframe"): Xrm.OptionSetControl<purchasetimeframe> | null;
      get(name: "header_process_sendthankyounote"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_sendthankyounote_1"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_statuscode"): Xrm.OptionSetControl<opportunity_statuscode>;
      get(name: "isrevenuesystemcalculated"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_ordertype"): Xrm.OptionSetControl<msdyn_opportunity_msdyn_ordertype>;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "opportunityproductsGrid"): Xrm.SubGridControl<"opportunityproduct">;
      get(name: "parentaccountid"): Xrm.LookupControl<"account">;
      get(name: "parentcontactid"): Xrm.LookupControl<"contact">;
      get(name: "pricelevelid"): Xrm.LookupControl<"pricelevel">;
      get(name: "proposedsolution"): Xrm.StringControl;
      get(name: "purchaseprocess"): Xrm.OptionSetControl<purchaseprocess>;
      get(name: "purchasetimeframe"): Xrm.OptionSetControl<purchasetimeframe>;
      get(name: "quote"): Xrm.SubGridControl<"quote">;
      get(name: "totalamount"): Xrm.NumberControl;
      get(name: "totalamountlessfreight"): Xrm.NumberControl;
      get(name: "totallineitemamount"): Xrm.NumberControl;
      get(name: "totaltax"): Xrm.NumberControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Product_Line_Items"): Xrm.PageTab<Tabs.Product_Line_Items>;
      get(name: "QUOTES"): Xrm.PageTab<Tabs.QUOTES>;
      get(name: "Summary"): Xrm.PageTab<Tabs.Summary>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface AIforSales extends Xrm.PageBase<AIforSales.Attributes,AIforSales.Tabs,AIforSales.Controls> {
    getAttribute(attributeName: "budgetamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "completefinalproposal"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "completeinternalreview"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "currentsituation"): Xrm.Attribute<string>;
    getAttribute(attributeName: "customerneed"): Xrm.Attribute<string>;
    getAttribute(attributeName: "decisionmaker"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "developproposal"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "discountamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "discountpercentage"): Xrm.NumberAttribute;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "estimatedclosedate"): Xrm.DateAttribute;
    getAttribute(attributeName: "estimatedvalue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "filedebrief"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "finaldecisiondate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "freightamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "identifycompetitors"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "identifycustomercontacts"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "identifypursuitteam"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "isrevenuesystemcalculated"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "msdyn_ordertype"): Xrm.OptionSetAttribute<msdyn_opportunity_msdyn_ordertype>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "parentcontactid"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "presentfinalproposal"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "presentproposal"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "pricelevelid"): Xrm.LookupAttribute<"pricelevel">;
    getAttribute(attributeName: "proposedsolution"): Xrm.Attribute<string>;
    getAttribute(attributeName: "purchaseprocess"): Xrm.OptionSetAttribute<purchaseprocess>;
    getAttribute(attributeName: "purchasetimeframe"): Xrm.OptionSetAttribute<purchasetimeframe>;
    getAttribute(attributeName: "sendthankyounote"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<opportunity_statuscode>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "totalamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "totalamountlessfreight"): Xrm.NumberAttribute;
    getAttribute(attributeName: "totallineitemamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "totaltax"): Xrm.NumberAttribute;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "ActionCards"): Xrm.BaseControl;
    getControl(controlName: "CadenceWidgetControl"): Xrm.BaseControl;
    getControl(controlName: "Competitors"): Xrm.SubGridControl<"competitor">;
    getControl(controlName: "DynamicPropertiesList_LinkControl"): Xrm.BaseControl;
    getControl(controlName: "ProductSuggestions_LinkControl"): Xrm.BaseControl;
    getControl(controlName: "Pursuit_Team"): Xrm.SubGridControl<"connection">;
    getControl(controlName: "Stakeholders"): Xrm.SubGridControl<"connection">;
    getControl(controlName: "budgetamount"): Xrm.NumberControl;
    getControl(controlName: "currentsituation"): Xrm.StringControl;
    getControl(controlName: "customerneed"): Xrm.StringControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "discountamount"): Xrm.NumberControl;
    getControl(controlName: "discountpercentage"): Xrm.NumberControl;
    getControl(controlName: "freightamount"): Xrm.NumberControl;
    getControl(controlName: "header_estimatedclosedate"): Xrm.DateControl;
    getControl(controlName: "header_estimatedvalue"): Xrm.NumberControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_process_budgetamount"): Xrm.NumberControl | null;
    getControl(controlName: "header_process_completefinalproposal"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_completefinalproposal_1"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_completeinternalreview"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_completeinternalreview_1"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_currentsituation"): Xrm.StringControl | null;
    getControl(controlName: "header_process_customerneed"): Xrm.StringControl | null;
    getControl(controlName: "header_process_customerneed_1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_customerneed_2"): Xrm.StringControl | null;
    getControl(controlName: "header_process_decisionmaker"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_description"): Xrm.StringControl | null;
    getControl(controlName: "header_process_description_1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_developproposal"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_developproposal_1"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_filedebrief"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_filedebrief_1"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_finaldecisiondate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_finaldecisiondate_1"): Xrm.DateControl | null;
    getControl(controlName: "header_process_identifycompetitors"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_identifycompetitors_1"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_identifycustomercontacts"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_identifycustomercontacts_1"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_identifypursuitteam"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_identifypursuitteam_1"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"opportunity"> | null;
    getControl(controlName: "header_process_parentaccountid_1"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_parentcontactid"): Xrm.LookupControl<"opportunity"> | null;
    getControl(controlName: "header_process_parentcontactid_1"): Xrm.LookupControl<"contact"> | null;
    getControl(controlName: "header_process_preferredcontactmethodcode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_presentfinalproposal"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_presentfinalproposal_1"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_presentproposal"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_presentproposal_1"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_proposedsolution"): Xrm.StringControl | null;
    getControl(controlName: "header_process_proposedsolution_1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_purchaseprocess"): Xrm.OptionSetControl<purchaseprocess> | null;
    getControl(controlName: "header_process_purchasetimeframe"): Xrm.OptionSetControl<purchasetimeframe> | null;
    getControl(controlName: "header_process_sendthankyounote"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_sendthankyounote_1"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_statuscode"): Xrm.OptionSetControl<opportunity_statuscode>;
    getControl(controlName: "isrevenuesystemcalculated"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_ordertype"): Xrm.OptionSetControl<msdyn_opportunity_msdyn_ordertype>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "opportunityproductsGrid"): Xrm.SubGridControl<"opportunityproduct">;
    getControl(controlName: "parentaccountid"): Xrm.LookupControl<"account">;
    getControl(controlName: "parentcontactid"): Xrm.LookupControl<"contact">;
    getControl(controlName: "pricelevelid"): Xrm.LookupControl<"pricelevel">;
    getControl(controlName: "proposedsolution"): Xrm.StringControl;
    getControl(controlName: "purchaseprocess"): Xrm.OptionSetControl<purchaseprocess>;
    getControl(controlName: "purchasetimeframe"): Xrm.OptionSetControl<purchasetimeframe>;
    getControl(controlName: "quote"): Xrm.SubGridControl<"quote">;
    getControl(controlName: "totalamount"): Xrm.NumberControl;
    getControl(controlName: "totalamountlessfreight"): Xrm.NumberControl;
    getControl(controlName: "totallineitemamount"): Xrm.NumberControl;
    getControl(controlName: "totaltax"): Xrm.NumberControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
