declare namespace Form.msdyn_fieldservicepricelistitem.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_durationroundingpolicy"): Xrm.OptionSetAttribute<msdyn_durationroundingpolicy>;
      get(name: "msdyn_durationroundto"): Xrm.NumberAttribute;
      get(name: "msdyn_flatfee"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_minimumchargeamount"): Xrm.NumberAttribute;
      get(name: "msdyn_minimumchargeduration"): Xrm.NumberAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_pricelist"): Xrm.LookupAttribute<"pricelevel">;
      get(name: "msdyn_productservice"): Xrm.LookupAttribute<"product">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyn_fieldservicepricelistitem_statecode>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyn_fieldservicepricelistitem_statecode>;
      get(name: "msdyn_durationroundingpolicy"): Xrm.OptionSetControl<msdyn_durationroundingpolicy>;
      get(name: "msdyn_durationroundto"): Xrm.NumberControl;
      get(name: "msdyn_flatfee"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_minimumchargeamount"): Xrm.NumberControl;
      get(name: "msdyn_minimumchargeduration"): Xrm.NumberControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_pricelist"): Xrm.LookupControl<"pricelevel">;
      get(name: "msdyn_productservice"): Xrm.LookupControl<"product">;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
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
    getAttribute(attributeName: "msdyn_durationroundingpolicy"): Xrm.OptionSetAttribute<msdyn_durationroundingpolicy>;
    getAttribute(attributeName: "msdyn_durationroundto"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_flatfee"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_minimumchargeamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_minimumchargeduration"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_pricelist"): Xrm.LookupAttribute<"pricelevel">;
    getAttribute(attributeName: "msdyn_productservice"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyn_fieldservicepricelistitem_statecode>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyn_fieldservicepricelistitem_statecode>;
    getControl(controlName: "msdyn_durationroundingpolicy"): Xrm.OptionSetControl<msdyn_durationroundingpolicy>;
    getControl(controlName: "msdyn_durationroundto"): Xrm.NumberControl;
    getControl(controlName: "msdyn_flatfee"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_minimumchargeamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_minimumchargeduration"): Xrm.NumberControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_pricelist"): Xrm.LookupControl<"pricelevel">;
    getControl(controlName: "msdyn_productservice"): Xrm.LookupControl<"product">;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
