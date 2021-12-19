declare namespace Form.msdyn_iotprovider.Main {
  namespace Information {
    namespace Tabs {
      interface General extends Xrm.SectionCollectionBase {
        get(name: "ActionNamesSection"): Xrm.PageSection;
        get(name: "{6cf7b2c6-4bbf-4cfa-aa41-cde683aac5d2}_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_iotsource"): Xrm.OptionSetAttribute<msdyn_iotsource>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_pulldevicedataaction"): Xrm.Attribute<string>;
      get(name: "msdyn_querydevicereadingsaction"): Xrm.Attribute<string>;
      get(name: "msdyn_registeraction"): Xrm.Attribute<string>;
      get(name: "msdyn_sendcommandaction"): Xrm.Attribute<string>;
      get(name: "msdyn_updatedevicedataaction"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "msdyn_iotsource"): Xrm.OptionSetControl<msdyn_iotsource>;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_pulldevicedataaction"): Xrm.StringControl;
      get(name: "msdyn_querydevicereadingsaction"): Xrm.StringControl;
      get(name: "msdyn_registeraction"): Xrm.StringControl;
      get(name: "msdyn_sendcommandaction"): Xrm.StringControl;
      get(name: "msdyn_updatedevicedataaction"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "General"): Xrm.PageTab<Tabs.General>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_iotsource"): Xrm.OptionSetAttribute<msdyn_iotsource>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_pulldevicedataaction"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_querydevicereadingsaction"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_registeraction"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_sendcommandaction"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_updatedevicedataaction"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "msdyn_iotsource"): Xrm.OptionSetControl<msdyn_iotsource>;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_pulldevicedataaction"): Xrm.StringControl;
    getControl(controlName: "msdyn_querydevicereadingsaction"): Xrm.StringControl;
    getControl(controlName: "msdyn_registeraction"): Xrm.StringControl;
    getControl(controlName: "msdyn_sendcommandaction"): Xrm.StringControl;
    getControl(controlName: "msdyn_updatedevicedataaction"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
