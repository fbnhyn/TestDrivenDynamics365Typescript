declare namespace Form.quote.Main {
  namespace Quote {
    namespace Tabs {
      interface Summary_tab extends Xrm.SectionCollectionBase {
        get(name: "DynamicProperties"): Xrm.PageSection;
        get(name: "addresses"): Xrm.PageSection;
        get(name: "description_section"): Xrm.PageSection;
        get(name: "products"): Xrm.PageSection;
        get(name: "quote information"): Xrm.PageSection;
        get(name: "sales_information"): Xrm.PageSection;
        get(name: "shipping information"): Xrm.PageSection;
        get(name: "suggestionsection"): Xrm.PageSection;
        get(name: "totals"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface details_tab extends Xrm.SectionCollectionBase {
        get(name: "Social Pane"): Xrm.PageSection;
        get(name: "tab_2_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "billto_composite"): Xrm.Attribute<string>;
      get(name: "customerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "discountamount"): Xrm.NumberAttribute;
      get(name: "discountpercentage"): Xrm.NumberAttribute;
      get(name: "effectivefrom"): Xrm.DateAttribute;
      get(name: "effectiveto"): Xrm.DateAttribute;
      get(name: "freightamount"): Xrm.NumberAttribute;
      get(name: "freighttermscode"): Xrm.OptionSetAttribute<quote_freighttermscode>;
      get(name: "msdyn_ordertype"): Xrm.OptionSetAttribute<msdyn_quote_msdyn_ordertype>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "opportunityid"): Xrm.LookupAttribute<"opportunity">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "paymenttermscode"): Xrm.OptionSetAttribute<quote_paymenttermscode>;
      get(name: "pricelevelid"): Xrm.LookupAttribute<"pricelevel">;
      get(name: "quotenumber"): Xrm.Attribute<string>;
      get(name: "revisionnumber"): Xrm.NumberAttribute;
      get(name: "shippingmethodcode"): Xrm.OptionSetAttribute<quote_shippingmethodcode>;
      get(name: "shipto_composite"): Xrm.Attribute<string>;
      get(name: "statuscode"): Xrm.OptionSetAttribute<quote_statuscode>;
      get(name: "totalamount"): Xrm.NumberAttribute;
      get(name: "totalamountlessfreight"): Xrm.NumberAttribute;
      get(name: "totallineitemamount"): Xrm.NumberAttribute;
      get(name: "totaltax"): Xrm.NumberAttribute;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "willcall"): Xrm.OptionSetAttribute<boolean>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "DynamicPropertiesList_LinkControl"): Xrm.BaseControl;
      get(name: "ProductSuggestions_LinkControl"): Xrm.BaseControl;
      get(name: "billto_composite"): Xrm.StringControl;
      get(name: "customerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "description"): Xrm.StringControl;
      get(name: "discountamount"): Xrm.NumberControl;
      get(name: "discountpercentage"): Xrm.NumberControl;
      get(name: "freightamount"): Xrm.NumberControl;
      get(name: "freighttermscode"): Xrm.OptionSetControl<quote_freighttermscode>;
      get(name: "header_effectivefrom"): Xrm.DateControl;
      get(name: "header_effectiveto"): Xrm.DateControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_statuscode"): Xrm.OptionSetControl<quote_statuscode>;
      get(name: "header_totalamount"): Xrm.NumberControl;
      get(name: "msdyn_ordertype"): Xrm.OptionSetControl<msdyn_quote_msdyn_ordertype>;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "opportunityid"): Xrm.LookupControl<"opportunity">;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<quote_paymenttermscode>;
      get(name: "pricelevelid"): Xrm.LookupControl<"pricelevel">;
      get(name: "quotedetailsGrid"): Xrm.BaseControl;
      get(name: "quotenumber"): Xrm.StringControl;
      get(name: "revisionnumber"): Xrm.NumberControl;
      get(name: "shippingmethodcode"): Xrm.OptionSetControl<quote_shippingmethodcode>;
      get(name: "shipto_composite"): Xrm.StringControl;
      get(name: "totalamount"): Xrm.NumberControl;
      get(name: "totalamountlessfreight"): Xrm.NumberControl;
      get(name: "totallineitemamount"): Xrm.NumberControl;
      get(name: "totaltax"): Xrm.NumberControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: "willcall"): Xrm.OptionSetControl<boolean>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Summary_tab"): Xrm.PageTab<Tabs.Summary_tab>;
      get(name: "details_tab"): Xrm.PageTab<Tabs.details_tab>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Quote extends Xrm.PageBase<Quote.Attributes,Quote.Tabs,Quote.Controls> {
    getAttribute(attributeName: "billto_composite"): Xrm.Attribute<string>;
    getAttribute(attributeName: "customerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "discountamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "discountpercentage"): Xrm.NumberAttribute;
    getAttribute(attributeName: "effectivefrom"): Xrm.DateAttribute;
    getAttribute(attributeName: "effectiveto"): Xrm.DateAttribute;
    getAttribute(attributeName: "freightamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "freighttermscode"): Xrm.OptionSetAttribute<quote_freighttermscode>;
    getAttribute(attributeName: "msdyn_ordertype"): Xrm.OptionSetAttribute<msdyn_quote_msdyn_ordertype>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opportunityid"): Xrm.LookupAttribute<"opportunity">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "paymenttermscode"): Xrm.OptionSetAttribute<quote_paymenttermscode>;
    getAttribute(attributeName: "pricelevelid"): Xrm.LookupAttribute<"pricelevel">;
    getAttribute(attributeName: "quotenumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "revisionnumber"): Xrm.NumberAttribute;
    getAttribute(attributeName: "shippingmethodcode"): Xrm.OptionSetAttribute<quote_shippingmethodcode>;
    getAttribute(attributeName: "shipto_composite"): Xrm.Attribute<string>;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<quote_statuscode>;
    getAttribute(attributeName: "totalamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "totalamountlessfreight"): Xrm.NumberAttribute;
    getAttribute(attributeName: "totallineitemamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "totaltax"): Xrm.NumberAttribute;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "willcall"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "DynamicPropertiesList_LinkControl"): Xrm.BaseControl;
    getControl(controlName: "ProductSuggestions_LinkControl"): Xrm.BaseControl;
    getControl(controlName: "billto_composite"): Xrm.StringControl;
    getControl(controlName: "customerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "discountamount"): Xrm.NumberControl;
    getControl(controlName: "discountpercentage"): Xrm.NumberControl;
    getControl(controlName: "freightamount"): Xrm.NumberControl;
    getControl(controlName: "freighttermscode"): Xrm.OptionSetControl<quote_freighttermscode>;
    getControl(controlName: "header_effectivefrom"): Xrm.DateControl;
    getControl(controlName: "header_effectiveto"): Xrm.DateControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_statuscode"): Xrm.OptionSetControl<quote_statuscode>;
    getControl(controlName: "header_totalamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_ordertype"): Xrm.OptionSetControl<msdyn_quote_msdyn_ordertype>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "opportunityid"): Xrm.LookupControl<"opportunity">;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<quote_paymenttermscode>;
    getControl(controlName: "pricelevelid"): Xrm.LookupControl<"pricelevel">;
    getControl(controlName: "quotedetailsGrid"): Xrm.BaseControl;
    getControl(controlName: "quotenumber"): Xrm.StringControl;
    getControl(controlName: "revisionnumber"): Xrm.NumberControl;
    getControl(controlName: "shippingmethodcode"): Xrm.OptionSetControl<quote_shippingmethodcode>;
    getControl(controlName: "shipto_composite"): Xrm.StringControl;
    getControl(controlName: "totalamount"): Xrm.NumberControl;
    getControl(controlName: "totalamountlessfreight"): Xrm.NumberControl;
    getControl(controlName: "totallineitemamount"): Xrm.NumberControl;
    getControl(controlName: "totaltax"): Xrm.NumberControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: "willcall"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
