declare namespace Form.customeraddress.Main {
  namespace Information {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "additional information"): Xrm.PageSection;
        get(name: "customer address information"): Xrm.PageSection;
        get(name: "phone numbers"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "addresstypecode"): Xrm.OptionSetAttribute<customeraddress_addresstypecode>;
      get(name: "city"): Xrm.Attribute<string>;
      get(name: "country"): Xrm.Attribute<string>;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "freighttermscode"): Xrm.OptionSetAttribute<customeraddress_freighttermscode>;
      get(name: "line1"): Xrm.Attribute<string>;
      get(name: "line2"): Xrm.Attribute<string>;
      get(name: "line3"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "postalcode"): Xrm.Attribute<string>;
      get(name: "primarycontactname"): Xrm.Attribute<string>;
      get(name: "shippingmethodcode"): Xrm.OptionSetAttribute<customeraddress_shippingmethodcode>;
      get(name: "stateorprovince"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "telephone2"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "addresstypecode"): Xrm.OptionSetControl<customeraddress_addresstypecode>;
      get(name: "city"): Xrm.StringControl;
      get(name: "country"): Xrm.StringControl;
      get(name: "fax"): Xrm.StringControl;
      get(name: "freighttermscode"): Xrm.OptionSetControl<customeraddress_freighttermscode>;
      get(name: "line1"): Xrm.StringControl;
      get(name: "line2"): Xrm.StringControl;
      get(name: "line3"): Xrm.StringControl;
      get(name: "name"): Xrm.StringControl;
      get(name: "postalcode"): Xrm.StringControl;
      get(name: "primarycontactname"): Xrm.StringControl;
      get(name: "shippingmethodcode"): Xrm.OptionSetControl<customeraddress_shippingmethodcode>;
      get(name: "stateorprovince"): Xrm.StringControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "telephone2"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "addresstypecode"): Xrm.OptionSetAttribute<customeraddress_addresstypecode>;
    getAttribute(attributeName: "city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "country"): Xrm.Attribute<string>;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "freighttermscode"): Xrm.OptionSetAttribute<customeraddress_freighttermscode>;
    getAttribute(attributeName: "line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "line2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "line3"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "primarycontactname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shippingmethodcode"): Xrm.OptionSetAttribute<customeraddress_shippingmethodcode>;
    getAttribute(attributeName: "stateorprovince"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone2"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "addresstypecode"): Xrm.OptionSetControl<customeraddress_addresstypecode>;
    getControl(controlName: "city"): Xrm.StringControl;
    getControl(controlName: "country"): Xrm.StringControl;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "freighttermscode"): Xrm.OptionSetControl<customeraddress_freighttermscode>;
    getControl(controlName: "line1"): Xrm.StringControl;
    getControl(controlName: "line2"): Xrm.StringControl;
    getControl(controlName: "line3"): Xrm.StringControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "postalcode"): Xrm.StringControl;
    getControl(controlName: "primarycontactname"): Xrm.StringControl;
    getControl(controlName: "shippingmethodcode"): Xrm.OptionSetControl<customeraddress_shippingmethodcode>;
    getControl(controlName: "stateorprovince"): Xrm.StringControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "telephone2"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
