declare namespace Form.salesorder.Main {
  namespace FieldServiceInformation {
    namespace Tabs {
      interface order_line_items extends Xrm.SectionCollectionBase {
        get(name: "ProductLinesSection"): Xrm.PageSection;
        get(name: "ServiceLinesSection"): Xrm.PageSection;
        get(name: "totals"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface summary_tab extends Xrm.SectionCollectionBase {
        get(name: "BillingPrintSetup"): Xrm.PageSection;
        get(name: "SocialPanTab"): Xrm.PageSection;
        get(name: "Summary"): Xrm.PageSection;
        get(name: "order_line_items_section_4"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "billto_composite"): Xrm.Attribute<string>;
      get(name: "billto_contactname"): Xrm.Attribute<string>;
      get(name: "customerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "datefulfilled"): Xrm.DateAttribute;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "discountamount"): Xrm.NumberAttribute;
      get(name: "discountpercentage"): Xrm.NumberAttribute;
      get(name: "freightamount"): Xrm.NumberAttribute;
      get(name: "freighttermscode"): Xrm.OptionSetAttribute<salesorder_freighttermscode>;
      get(name: "ispricelocked"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_account"): Xrm.LookupAttribute<"account">;
      get(name: "msdyn_ordertype"): Xrm.OptionSetAttribute<msdyn_salesorder_msdyn_ordertype>;
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
      get(name: "statuscode"): Xrm.OptionSetAttribute<salesorder_statuscode>;
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
      get(name: "OrderServicesGrid"): Xrm.SubGridControl<"salesorderdetail">;
      get(name: "billto_composite"): Xrm.StringControl;
      get(name: "billto_contactname"): Xrm.StringControl;
      get(name: "customerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "datefulfilled"): Xrm.DateControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "discountamount"): Xrm.NumberControl;
      get(name: "discountpercentage"): Xrm.NumberControl;
      get(name: "freightamount"): Xrm.NumberControl;
      get(name: "freighttermscode"): Xrm.OptionSetControl<salesorder_freighttermscode>;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_statecode"): Xrm.OptionSetControl<salesorder_statecode>;
      get(name: "header_statuscode"): Xrm.OptionSetControl<salesorder_statuscode>;
      get(name: "header_totalamount"): Xrm.NumberControl;
      get(name: "ispricelocked"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_account"): Xrm.LookupControl<"account">;
      get(name: "msdyn_ordertype"): Xrm.OptionSetControl<msdyn_salesorder_msdyn_ordertype>;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "opportunityid"): Xrm.LookupControl<"opportunity">;
      get(name: "ordernumber"): Xrm.StringControl;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<salesorder_paymenttermscode>;
      get(name: "pricelevelid"): Xrm.LookupControl<"pricelevel">;
      get(name: "quoteid"): Xrm.LookupControl<"quote">;
      get(name: "requestdeliveryby"): Xrm.DateControl;
      get(name: "salesorderdetailsGrid"): Xrm.BaseControl;
      get(name: "shippingmethodcode"): Xrm.OptionSetControl<salesorder_shippingmethodcode>;
      get(name: "shipto_composite"): Xrm.StringControl;
      get(name: "statecode"): Xrm.OptionSetControl<salesorder_statecode>;
      get(name: "statuscode"): Xrm.OptionSetControl<salesorder_statuscode>;
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
      get(name: "order_line_items"): Xrm.PageTab<Tabs.order_line_items>;
      get(name: "summary_tab"): Xrm.PageTab<Tabs.summary_tab>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface FieldServiceInformation extends Xrm.PageBase<FieldServiceInformation.Attributes,FieldServiceInformation.Tabs,FieldServiceInformation.Controls> {
    getAttribute(attributeName: "billto_composite"): Xrm.Attribute<string>;
    getAttribute(attributeName: "billto_contactname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "customerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "datefulfilled"): Xrm.DateAttribute;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "discountamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "discountpercentage"): Xrm.NumberAttribute;
    getAttribute(attributeName: "freightamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "freighttermscode"): Xrm.OptionSetAttribute<salesorder_freighttermscode>;
    getAttribute(attributeName: "ispricelocked"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_account"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "msdyn_ordertype"): Xrm.OptionSetAttribute<msdyn_salesorder_msdyn_ordertype>;
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
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<salesorder_statuscode>;
    getAttribute(attributeName: "totalamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "totalamountlessfreight"): Xrm.NumberAttribute;
    getAttribute(attributeName: "totallineitemamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "totaltax"): Xrm.NumberAttribute;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "willcall"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "OrderServicesGrid"): Xrm.SubGridControl<"salesorderdetail">;
    getControl(controlName: "billto_composite"): Xrm.StringControl;
    getControl(controlName: "billto_contactname"): Xrm.StringControl;
    getControl(controlName: "customerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "datefulfilled"): Xrm.DateControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "discountamount"): Xrm.NumberControl;
    getControl(controlName: "discountpercentage"): Xrm.NumberControl;
    getControl(controlName: "freightamount"): Xrm.NumberControl;
    getControl(controlName: "freighttermscode"): Xrm.OptionSetControl<salesorder_freighttermscode>;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<salesorder_statecode>;
    getControl(controlName: "header_statuscode"): Xrm.OptionSetControl<salesorder_statuscode>;
    getControl(controlName: "header_totalamount"): Xrm.NumberControl;
    getControl(controlName: "ispricelocked"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_account"): Xrm.LookupControl<"account">;
    getControl(controlName: "msdyn_ordertype"): Xrm.OptionSetControl<msdyn_salesorder_msdyn_ordertype>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "opportunityid"): Xrm.LookupControl<"opportunity">;
    getControl(controlName: "ordernumber"): Xrm.StringControl;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<salesorder_paymenttermscode>;
    getControl(controlName: "pricelevelid"): Xrm.LookupControl<"pricelevel">;
    getControl(controlName: "quoteid"): Xrm.LookupControl<"quote">;
    getControl(controlName: "requestdeliveryby"): Xrm.DateControl;
    getControl(controlName: "salesorderdetailsGrid"): Xrm.BaseControl;
    getControl(controlName: "shippingmethodcode"): Xrm.OptionSetControl<salesorder_shippingmethodcode>;
    getControl(controlName: "shipto_composite"): Xrm.StringControl;
    getControl(controlName: "statecode"): Xrm.OptionSetControl<salesorder_statecode>;
    getControl(controlName: "statuscode"): Xrm.OptionSetControl<salesorder_statuscode>;
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
