declare namespace Form.salesorder.Main {
  namespace ProjectInformation {
    namespace Tabs {
      interface LinesTab extends Xrm.SectionCollectionBase {
        get(name: "DynamicProperties"): Xrm.PageSection;
        get(name: "ProductLinesSection"): Xrm.PageSection;
        get(name: "ProjectLinesSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface ProjectPriceListsTab extends Xrm.SectionCollectionBase {
        get(name: "ProjectPriceListsSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface summary_tab extends Xrm.SectionCollectionBase {
        get(name: "BillingPrintSetup"): Xrm.PageSection;
        get(name: "Social Pane"): Xrm.PageSection;
        get(name: "Summary"): Xrm.PageSection;
        get(name: "addresses"): Xrm.PageSection;
        get(name: "shipping information"): Xrm.PageSection;
        get(name: "suggestionsection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_ContractPerformance extends Xrm.SectionCollectionBase {
        get(name: "tab_ContractPerformance_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "billto_composite"): Xrm.Attribute<string>;
      get(name: "billto_contactname"): Xrm.Attribute<string>;
      get(name: "billto_name"): Xrm.Attribute<string>;
      get(name: "customerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "freighttermscode"): Xrm.OptionSetAttribute<salesorder_freighttermscode>;
      get(name: "ispricelocked"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_accountmanagerid"): Xrm.LookupAttribute<"systemuser">;
      get(name: "msdyn_contractorganizationalunitid"): Xrm.LookupAttribute<"msdyn_organizationalunit">;
      get(name: "msdyn_ordertype"): Xrm.OptionSetAttribute<msdyn_salesorder_msdyn_ordertype>;
      get(name: "msdyn_psastate"): Xrm.OptionSetAttribute<msdyn_projectcontractstate>;
      get(name: "msdyn_psastatusreason"): Xrm.OptionSetAttribute<msdyn_projectcontractstatus>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "opportunityid"): Xrm.LookupAttribute<"opportunity">;
      get(name: "ordernumber"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "paymenttermscode"): Xrm.OptionSetAttribute<salesorder_paymenttermscode>;
      get(name: "pricelevelid"): Xrm.LookupAttribute<"pricelevel">;
      get(name: "quoteid"): Xrm.LookupAttribute<"quote">;
      get(name: "requestdeliveryby"): Xrm.DateAttribute;
      get(name: "shippingmethodcode"): Xrm.OptionSetAttribute<salesorder_shippingmethodcode>;
      get(name: "shipto_composite"): Xrm.Attribute<string>;
      get(name: "statecode"): Xrm.OptionSetAttribute<salesorder_statecode>;
      get(name: "totalamount"): Xrm.NumberAttribute;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "willcall"): Xrm.OptionSetAttribute<boolean>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ContractPerformance_ContractLines"): Xrm.BaseControl;
      get(name: "ContractPerformance_ProductContractLines"): Xrm.SubGridControl<"msdyn_contractperformance">;
      get(name: "DynamicPropertiesList_LinkControl"): Xrm.BaseControl;
      get(name: "ProductSuggestions_LinkControl"): Xrm.BaseControl;
      get(name: "ProjectContractLines"): Xrm.SubGridControl<"salesorderdetail">;
      get(name: "ProjectPriceListsSubGrid"): Xrm.SubGridControl<"msdyn_orderpricelist">;
      get(name: "WebResource_ContractPerformance"): Xrm.WebResourceControl;
      get(name: "billto_composite"): Xrm.StringControl;
      get(name: "billto_contactname"): Xrm.StringControl;
      get(name: "billto_name"): Xrm.StringControl;
      get(name: "customerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "freighttermscode"): Xrm.OptionSetControl<salesorder_freighttermscode>;
      get(name: "header_msdyn_psastate"): Xrm.OptionSetControl<msdyn_projectcontractstate>;
      get(name: "header_msdyn_psastatusreason"): Xrm.OptionSetControl<msdyn_projectcontractstatus>;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_totalamount"): Xrm.NumberControl;
      get(name: "ispricelocked"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_accountmanagerid"): Xrm.LookupControl<"systemuser">;
      get(name: "msdyn_contractorganizationalunitid"): Xrm.LookupControl<"msdyn_organizationalunit">;
      get(name: "msdyn_ordertype"): Xrm.OptionSetControl<msdyn_salesorder_msdyn_ordertype>;
      get(name: "msdyn_psastatusreason"): Xrm.OptionSetControl<msdyn_projectcontractstatus>;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "opportunityid"): Xrm.LookupControl<"opportunity">;
      get(name: "ordernumber"): Xrm.StringControl;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<salesorder_paymenttermscode>;
      get(name: "pricelevelid"): Xrm.LookupControl<"pricelevel">;
      get(name: "quoteid"): Xrm.LookupControl<"quote">;
      get(name: "requestdeliveryby"): Xrm.DateControl;
      get(name: "salesorderdetailsGrid"): Xrm.SubGridControl<"salesorderdetail">;
      get(name: "shippingmethodcode"): Xrm.OptionSetControl<salesorder_shippingmethodcode>;
      get(name: "shipto_composite"): Xrm.StringControl;
      get(name: "statecode"): Xrm.OptionSetControl<salesorder_statecode>;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: "willcall"): Xrm.OptionSetControl<boolean>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "LinesTab"): Xrm.PageTab<Tabs.LinesTab>;
      get(name: "ProjectPriceListsTab"): Xrm.PageTab<Tabs.ProjectPriceListsTab>;
      get(name: "summary_tab"): Xrm.PageTab<Tabs.summary_tab>;
      get(name: "tab_ContractPerformance"): Xrm.PageTab<Tabs.tab_ContractPerformance>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface ProjectInformation extends Xrm.PageBase<ProjectInformation.Attributes,ProjectInformation.Tabs,ProjectInformation.Controls> {
    getAttribute(attributeName: "billto_composite"): Xrm.Attribute<string>;
    getAttribute(attributeName: "billto_contactname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "billto_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "customerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "freighttermscode"): Xrm.OptionSetAttribute<salesorder_freighttermscode>;
    getAttribute(attributeName: "ispricelocked"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_accountmanagerid"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "msdyn_contractorganizationalunitid"): Xrm.LookupAttribute<"msdyn_organizationalunit">;
    getAttribute(attributeName: "msdyn_ordertype"): Xrm.OptionSetAttribute<msdyn_salesorder_msdyn_ordertype>;
    getAttribute(attributeName: "msdyn_psastate"): Xrm.OptionSetAttribute<msdyn_projectcontractstate>;
    getAttribute(attributeName: "msdyn_psastatusreason"): Xrm.OptionSetAttribute<msdyn_projectcontractstatus>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opportunityid"): Xrm.LookupAttribute<"opportunity">;
    getAttribute(attributeName: "ordernumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "paymenttermscode"): Xrm.OptionSetAttribute<salesorder_paymenttermscode>;
    getAttribute(attributeName: "pricelevelid"): Xrm.LookupAttribute<"pricelevel">;
    getAttribute(attributeName: "quoteid"): Xrm.LookupAttribute<"quote">;
    getAttribute(attributeName: "requestdeliveryby"): Xrm.DateAttribute;
    getAttribute(attributeName: "shippingmethodcode"): Xrm.OptionSetAttribute<salesorder_shippingmethodcode>;
    getAttribute(attributeName: "shipto_composite"): Xrm.Attribute<string>;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<salesorder_statecode>;
    getAttribute(attributeName: "totalamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "willcall"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "ContractPerformance_ContractLines"): Xrm.BaseControl;
    getControl(controlName: "ContractPerformance_ProductContractLines"): Xrm.SubGridControl<"msdyn_contractperformance">;
    getControl(controlName: "DynamicPropertiesList_LinkControl"): Xrm.BaseControl;
    getControl(controlName: "ProductSuggestions_LinkControl"): Xrm.BaseControl;
    getControl(controlName: "ProjectContractLines"): Xrm.SubGridControl<"salesorderdetail">;
    getControl(controlName: "ProjectPriceListsSubGrid"): Xrm.SubGridControl<"msdyn_orderpricelist">;
    getControl(controlName: "WebResource_ContractPerformance"): Xrm.WebResourceControl;
    getControl(controlName: "billto_composite"): Xrm.StringControl;
    getControl(controlName: "billto_contactname"): Xrm.StringControl;
    getControl(controlName: "billto_name"): Xrm.StringControl;
    getControl(controlName: "customerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "freighttermscode"): Xrm.OptionSetControl<salesorder_freighttermscode>;
    getControl(controlName: "header_msdyn_psastate"): Xrm.OptionSetControl<msdyn_projectcontractstate>;
    getControl(controlName: "header_msdyn_psastatusreason"): Xrm.OptionSetControl<msdyn_projectcontractstatus>;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_totalamount"): Xrm.NumberControl;
    getControl(controlName: "ispricelocked"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_accountmanagerid"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "msdyn_contractorganizationalunitid"): Xrm.LookupControl<"msdyn_organizationalunit">;
    getControl(controlName: "msdyn_ordertype"): Xrm.OptionSetControl<msdyn_salesorder_msdyn_ordertype>;
    getControl(controlName: "msdyn_psastatusreason"): Xrm.OptionSetControl<msdyn_projectcontractstatus>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "opportunityid"): Xrm.LookupControl<"opportunity">;
    getControl(controlName: "ordernumber"): Xrm.StringControl;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<salesorder_paymenttermscode>;
    getControl(controlName: "pricelevelid"): Xrm.LookupControl<"pricelevel">;
    getControl(controlName: "quoteid"): Xrm.LookupControl<"quote">;
    getControl(controlName: "requestdeliveryby"): Xrm.DateControl;
    getControl(controlName: "salesorderdetailsGrid"): Xrm.SubGridControl<"salesorderdetail">;
    getControl(controlName: "shippingmethodcode"): Xrm.OptionSetControl<salesorder_shippingmethodcode>;
    getControl(controlName: "shipto_composite"): Xrm.StringControl;
    getControl(controlName: "statecode"): Xrm.OptionSetControl<salesorder_statecode>;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: "willcall"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
