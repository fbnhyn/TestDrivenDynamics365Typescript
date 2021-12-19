declare namespace Form.msdyn_conversationactionlocale.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_label"): Xrm.Attribute<string>;
      get(name: "msdyn_locale_picklist"): Xrm.Attribute<string>;
      get(name: "msdyn_slashcommands"): Xrm.Attribute<string>;
      get(name: "msdyn_tooltip"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_label"): Xrm.StringControl;
      get(name: "msdyn_locale_picklist"): Xrm.StringControl;
      get(name: "msdyn_slashcommands"): Xrm.StringControl;
      get(name: "msdyn_tooltip"): Xrm.StringControl;
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
    getAttribute(attributeName: "msdyn_label"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_locale_picklist"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_slashcommands"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_tooltip"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_label"): Xrm.StringControl;
    getControl(controlName: "msdyn_locale_picklist"): Xrm.StringControl;
    getControl(controlName: "msdyn_slashcommands"): Xrm.StringControl;
    getControl(controlName: "msdyn_tooltip"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
