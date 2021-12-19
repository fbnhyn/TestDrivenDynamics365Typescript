declare namespace Form.msdyn_invoicelinetransaction.Quick {
  namespace LineDetailQuickView {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_amount"): Xrm.NumberAttribute;
      get(name: "msdyn_billingtype"): Xrm.OptionSetAttribute<msdyn_billingtype>;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_price"): Xrm.NumberAttribute;
      get(name: "msdyn_quantity"): Xrm.NumberAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_amount"): Xrm.NumberControl;
      get(name: "msdyn_billingtype"): Xrm.OptionSetControl<msdyn_billingtype>;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_price"): Xrm.NumberControl;
      get(name: "msdyn_quantity"): Xrm.NumberControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface LineDetailQuickView extends Xrm.PageBase<LineDetailQuickView.Attributes,LineDetailQuickView.Tabs,LineDetailQuickView.Controls> {
    getAttribute(attributeName: "msdyn_amount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_billingtype"): Xrm.OptionSetAttribute<msdyn_billingtype>;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_price"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_quantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_amount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_billingtype"): Xrm.OptionSetControl<msdyn_billingtype>;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_price"): Xrm.NumberControl;
    getControl(controlName: "msdyn_quantity"): Xrm.NumberControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
