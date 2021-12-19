declare namespace Form.msdyusd_ucisettings.Main {
  namespace Information1 {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyusd_name"): Xrm.Attribute<string>;
      get(name: "msdyusd_theme"): Xrm.OptionSetAttribute<msdyusd_ucisettings_msdyusd_theme>;
      get(name: "msdyusd_uciapp"): Xrm.Attribute<string>;
      get(name: "msdyusd_uciappid"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyusd_name"): Xrm.StringControl;
      get(name: "msdyusd_theme"): Xrm.OptionSetControl<msdyusd_ucisettings_msdyusd_theme>;
      get(name: "msdyusd_uciapp"): Xrm.StringControl;
      get(name: "msdyusd_uciappid"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
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
  interface Information1 extends Xrm.PageBase<Information1.Attributes,Information1.Tabs,Information1.Controls> {
    getAttribute(attributeName: "msdyusd_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyusd_theme"): Xrm.OptionSetAttribute<msdyusd_ucisettings_msdyusd_theme>;
    getAttribute(attributeName: "msdyusd_uciapp"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyusd_uciappid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyusd_name"): Xrm.StringControl;
    getControl(controlName: "msdyusd_theme"): Xrm.OptionSetControl<msdyusd_ucisettings_msdyusd_theme>;
    getControl(controlName: "msdyusd_uciapp"): Xrm.StringControl;
    getControl(controlName: "msdyusd_uciappid"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
