declare namespace Form.msdyn_applicationtabtemplate.Main {
  namespace Information {
    namespace Tabs {
      interface fcc0a0d20a044593a7433a1a41353188 extends Xrm.SectionCollectionBase {
        get(name: "{fcc0a0d2-0a04-4593-a743-3a1a41353188}_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ismanaged"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_pagetype"): Xrm.OptionSetAttribute<msdyn_applicationtype>;
      get(name: "msdyn_pinned"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_title"): Xrm.Attribute<string>;
      get(name: "msdyn_uniquename"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Parameters"): Xrm.SubGridControl<"msdyn_templateparameter">;
      get(name: "ismanaged"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_pagetype"): Xrm.OptionSetControl<msdyn_applicationtype>;
      get(name: "msdyn_pinned"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_title"): Xrm.StringControl;
      get(name: "msdyn_uniquename"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{fcc0a0d2-0a04-4593-a743-3a1a41353188}"): Xrm.PageTab<Tabs.fcc0a0d20a044593a7433a1a41353188>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "ismanaged"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_pagetype"): Xrm.OptionSetAttribute<msdyn_applicationtype>;
    getAttribute(attributeName: "msdyn_pinned"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_title"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_uniquename"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Parameters"): Xrm.SubGridControl<"msdyn_templateparameter">;
    getControl(controlName: "ismanaged"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_pagetype"): Xrm.OptionSetControl<msdyn_applicationtype>;
    getControl(controlName: "msdyn_pinned"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_title"): Xrm.StringControl;
    getControl(controlName: "msdyn_uniquename"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
