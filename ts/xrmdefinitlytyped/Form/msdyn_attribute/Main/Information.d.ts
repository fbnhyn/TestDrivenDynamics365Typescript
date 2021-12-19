declare namespace Form.msdyn_attribute.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_autogenerateattributevalues"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_linkedattributename"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_reviewstatus"): Xrm.OptionSetAttribute<msdyn_reviewstatus>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Attributevalues"): Xrm.SubGridControl<"msdyn_attributevalue">;
      get(name: "msdyn_autogenerateattributevalues"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_linkedattributename"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_reviewstatus"): Xrm.OptionSetControl<msdyn_reviewstatus>;
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
    getAttribute(attributeName: "msdyn_autogenerateattributevalues"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_linkedattributename"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_reviewstatus"): Xrm.OptionSetAttribute<msdyn_reviewstatus>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Attributevalues"): Xrm.SubGridControl<"msdyn_attributevalue">;
    getControl(controlName: "msdyn_autogenerateattributevalues"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_linkedattributename"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_reviewstatus"): Xrm.OptionSetControl<msdyn_reviewstatus>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
