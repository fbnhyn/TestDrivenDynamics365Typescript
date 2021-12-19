declare namespace Form.transactioncurrency.Main {
  namespace Information {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "Currency conversion"): Xrm.PageSection;
        get(name: "Select Base Currency"): Xrm.PageSection;
        get(name: "Transaction currency information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "currencyname"): Xrm.Attribute<string>;
      get(name: "currencyprecision"): Xrm.NumberAttribute;
      get(name: "currencysymbol"): Xrm.Attribute<string>;
      get(name: "exchangerate"): Xrm.NumberAttribute;
      get(name: "isocurrencycode"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "currencyname"): Xrm.StringControl;
      get(name: "currencyprecision"): Xrm.NumberControl;
      get(name: "currencysymbol"): Xrm.StringControl;
      get(name: "currencytype"): Xrm.OptionSetControl<number>;
      get(name: "exchangerate"): Xrm.NumberControl;
      get(name: "isocurrencycode"): Xrm.StringControl;
      get(name: "systemcurrency"): Xrm.BaseControl;
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
    getAttribute(attributeName: "currencyname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "currencyprecision"): Xrm.NumberAttribute;
    getAttribute(attributeName: "currencysymbol"): Xrm.Attribute<string>;
    getAttribute(attributeName: "exchangerate"): Xrm.NumberAttribute;
    getAttribute(attributeName: "isocurrencycode"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "currencyname"): Xrm.StringControl;
    getControl(controlName: "currencyprecision"): Xrm.NumberControl;
    getControl(controlName: "currencysymbol"): Xrm.StringControl;
    getControl(controlName: "currencytype"): Xrm.OptionSetControl<number>;
    getControl(controlName: "exchangerate"): Xrm.NumberControl;
    getControl(controlName: "isocurrencycode"): Xrm.StringControl;
    getControl(controlName: "systemcurrency"): Xrm.BaseControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
