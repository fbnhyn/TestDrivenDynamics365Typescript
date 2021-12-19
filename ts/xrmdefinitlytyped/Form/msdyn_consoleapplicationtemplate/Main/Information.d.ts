declare namespace Form.msdyn_consoleapplicationtemplate.Main {
  namespace Information {
    namespace Tabs {
      interface _1c7ca19956274de2b6c483d0be0be5be extends Xrm.SectionCollectionBase {
        get(name: "{1c7ca199-5627-4de2-b6c4-83d0be0be5be}_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_icon"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_pagetype"): Xrm.LookupAttribute<"msdyn_consoleapplicationtype">;
      get(name: "msdyn_pinned"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_title"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Parameters"): Xrm.SubGridControl<"msdyn_consoleapplicationtemplateparameter">;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_icon"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_pagetype"): Xrm.LookupControl<"msdyn_consoleapplicationtype">;
      get(name: "msdyn_pinned"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_title"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{1c7ca199-5627-4de2-b6c4-83d0be0be5be}"): Xrm.PageTab<Tabs._1c7ca19956274de2b6c483d0be0be5be>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_icon"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_pagetype"): Xrm.LookupAttribute<"msdyn_consoleapplicationtype">;
    getAttribute(attributeName: "msdyn_pinned"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_title"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Parameters"): Xrm.SubGridControl<"msdyn_consoleapplicationtemplateparameter">;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_icon"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_pagetype"): Xrm.LookupControl<"msdyn_consoleapplicationtype">;
    getControl(controlName: "msdyn_pinned"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_title"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
