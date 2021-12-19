declare namespace Form.salesorderdetail.Main {
  namespace FieldServiceInformation {
    namespace Tabs {
      interface address extends Xrm.SectionCollectionBase {
        get(name: "ship to address"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface delivery extends Xrm.SectionCollectionBase {
        get(name: "delivery information"): Xrm.PageSection;
        get(name: "fulfillment"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface general extends Xrm.SectionCollectionBase {
        get(name: "pricing"): Xrm.PageSection;
        get(name: "sales order detail information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface servicemaintenanceline extends Xrm.SectionCollectionBase {
        get(name: "servicemaintenanceline"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "baseamount"): Xrm.NumberAttribute;
      get(name: "extendedamount"): Xrm.NumberAttribute;
      get(name: "ispriceoverridden"): Xrm.OptionSetAttribute<boolean>;
      get(name: "isproductoverridden"): Xrm.OptionSetAttribute<boolean>;
      get(name: "manualdiscountamount"): Xrm.NumberAttribute;
      get(name: "msdyn_agreement"): Xrm.LookupAttribute<"msdyn_agreement">;
      get(name: "msdyn_linetype"): Xrm.OptionSetAttribute<msdyn_linetype>;
      get(name: "priceperunit"): Xrm.NumberAttribute;
      get(name: "productdescription"): Xrm.Attribute<string>;
      get(name: "productid"): Xrm.LookupAttribute<"product">;
      get(name: "quantity"): Xrm.NumberAttribute;
      get(name: "quantitybackordered"): Xrm.NumberAttribute;
      get(name: "quantitycancelled"): Xrm.NumberAttribute;
      get(name: "quantityshipped"): Xrm.NumberAttribute;
      get(name: "requestdeliveryby"): Xrm.DateAttribute;
      get(name: "salesrepid"): Xrm.LookupAttribute<"systemuser">;
      get(name: "shipto_city"): Xrm.Attribute<string>;
      get(name: "shipto_contactname"): Xrm.Attribute<string>;
      get(name: "shipto_country"): Xrm.Attribute<string>;
      get(name: "shipto_fax"): Xrm.Attribute<string>;
      get(name: "shipto_freighttermscode"): Xrm.OptionSetAttribute<salesorderdetail_shipto_freighttermscode>;
      get(name: "shipto_line1"): Xrm.Attribute<string>;
      get(name: "shipto_line2"): Xrm.Attribute<string>;
      get(name: "shipto_line3"): Xrm.Attribute<string>;
      get(name: "shipto_name"): Xrm.Attribute<string>;
      get(name: "shipto_postalcode"): Xrm.Attribute<string>;
      get(name: "shipto_stateorprovince"): Xrm.Attribute<string>;
      get(name: "shipto_telephone"): Xrm.Attribute<string>;
      get(name: "tax"): Xrm.NumberAttribute;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "uomid"): Xrm.LookupAttribute<"uom">;
      get(name: "volumediscountamount"): Xrm.NumberAttribute;
      get(name: "willcall"): Xrm.OptionSetAttribute<boolean>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "baseamount"): Xrm.NumberControl;
      get(name: "extendedamount"): Xrm.NumberControl;
      get(name: "ispriceoverridden"): Xrm.OptionSetControl<boolean>;
      get(name: "isproductoverridden"): Xrm.OptionSetControl<boolean>;
      get(name: "manualdiscountamount"): Xrm.NumberControl;
      get(name: "msdyn_agreement"): Xrm.LookupControl<"msdyn_agreement">;
      get(name: "msdyn_linetype"): Xrm.OptionSetControl<msdyn_linetype>;
      get(name: "priceperunit"): Xrm.NumberControl;
      get(name: "productdescription"): Xrm.StringControl;
      get(name: "productid"): Xrm.LookupControl<"product">;
      get(name: "quantity"): Xrm.NumberControl;
      get(name: "quantitybackordered"): Xrm.NumberControl;
      get(name: "quantitycancelled"): Xrm.NumberControl;
      get(name: "quantityshipped"): Xrm.NumberControl;
      get(name: "requestdeliveryby"): Xrm.DateControl;
      get(name: "salesrepid"): Xrm.LookupControl<"systemuser">;
      get(name: "shipto_city"): Xrm.StringControl;
      get(name: "shipto_contactname"): Xrm.StringControl;
      get(name: "shipto_country"): Xrm.StringControl;
      get(name: "shipto_fax"): Xrm.StringControl;
      get(name: "shipto_freighttermscode"): Xrm.OptionSetControl<salesorderdetail_shipto_freighttermscode>;
      get(name: "shipto_line1"): Xrm.StringControl;
      get(name: "shipto_line2"): Xrm.StringControl;
      get(name: "shipto_line3"): Xrm.StringControl;
      get(name: "shipto_name"): Xrm.StringControl;
      get(name: "shipto_postalcode"): Xrm.StringControl;
      get(name: "shipto_stateorprovince"): Xrm.StringControl;
      get(name: "shipto_telephone"): Xrm.StringControl;
      get(name: "tax"): Xrm.NumberControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: "uomid"): Xrm.LookupControl<"uom">;
      get(name: "volumediscountamount"): Xrm.NumberControl;
      get(name: "willcall"): Xrm.OptionSetControl<boolean>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "address"): Xrm.PageTab<Tabs.address>;
      get(name: "delivery"): Xrm.PageTab<Tabs.delivery>;
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: "servicemaintenanceline"): Xrm.PageTab<Tabs.servicemaintenanceline>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface FieldServiceInformation extends Xrm.PageBase<FieldServiceInformation.Attributes,FieldServiceInformation.Tabs,FieldServiceInformation.Controls> {
    getAttribute(attributeName: "baseamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "extendedamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ispriceoverridden"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "isproductoverridden"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "manualdiscountamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_agreement"): Xrm.LookupAttribute<"msdyn_agreement">;
    getAttribute(attributeName: "msdyn_linetype"): Xrm.OptionSetAttribute<msdyn_linetype>;
    getAttribute(attributeName: "priceperunit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "productdescription"): Xrm.Attribute<string>;
    getAttribute(attributeName: "productid"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: "quantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "quantitybackordered"): Xrm.NumberAttribute;
    getAttribute(attributeName: "quantitycancelled"): Xrm.NumberAttribute;
    getAttribute(attributeName: "quantityshipped"): Xrm.NumberAttribute;
    getAttribute(attributeName: "requestdeliveryby"): Xrm.DateAttribute;
    getAttribute(attributeName: "salesrepid"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "shipto_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_contactname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_country"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_freighttermscode"): Xrm.OptionSetAttribute<salesorderdetail_shipto_freighttermscode>;
    getAttribute(attributeName: "shipto_line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_line2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_line3"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_stateorprovince"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_telephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "tax"): Xrm.NumberAttribute;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "uomid"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: "volumediscountamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "willcall"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "baseamount"): Xrm.NumberControl;
    getControl(controlName: "extendedamount"): Xrm.NumberControl;
    getControl(controlName: "ispriceoverridden"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "isproductoverridden"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "manualdiscountamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_agreement"): Xrm.LookupControl<"msdyn_agreement">;
    getControl(controlName: "msdyn_linetype"): Xrm.OptionSetControl<msdyn_linetype>;
    getControl(controlName: "priceperunit"): Xrm.NumberControl;
    getControl(controlName: "productdescription"): Xrm.StringControl;
    getControl(controlName: "productid"): Xrm.LookupControl<"product">;
    getControl(controlName: "quantity"): Xrm.NumberControl;
    getControl(controlName: "quantitybackordered"): Xrm.NumberControl;
    getControl(controlName: "quantitycancelled"): Xrm.NumberControl;
    getControl(controlName: "quantityshipped"): Xrm.NumberControl;
    getControl(controlName: "requestdeliveryby"): Xrm.DateControl;
    getControl(controlName: "salesrepid"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "shipto_city"): Xrm.StringControl;
    getControl(controlName: "shipto_contactname"): Xrm.StringControl;
    getControl(controlName: "shipto_country"): Xrm.StringControl;
    getControl(controlName: "shipto_fax"): Xrm.StringControl;
    getControl(controlName: "shipto_freighttermscode"): Xrm.OptionSetControl<salesorderdetail_shipto_freighttermscode>;
    getControl(controlName: "shipto_line1"): Xrm.StringControl;
    getControl(controlName: "shipto_line2"): Xrm.StringControl;
    getControl(controlName: "shipto_line3"): Xrm.StringControl;
    getControl(controlName: "shipto_name"): Xrm.StringControl;
    getControl(controlName: "shipto_postalcode"): Xrm.StringControl;
    getControl(controlName: "shipto_stateorprovince"): Xrm.StringControl;
    getControl(controlName: "shipto_telephone"): Xrm.StringControl;
    getControl(controlName: "tax"): Xrm.NumberControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: "uomid"): Xrm.LookupControl<"uom">;
    getControl(controlName: "volumediscountamount"): Xrm.NumberControl;
    getControl(controlName: "willcall"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
