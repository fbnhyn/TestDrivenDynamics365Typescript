declare namespace Form.msdyn_omnichannelconfiguration.Main {
  namespace Supervisorsettings {
    namespace Tabs {
      interface Supervisorsettings extends Xrm.SectionCollectionBase {
        get(name: "{44effe7c-a18d-4d4c-b111-db98e28bc808}_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface _44effe7ca18d4d4cb111db98e28bc808 extends Xrm.SectionCollectionBase {
        get(name: "{26ff56c2-88fe-41f2-be7f-af3c273cfce3}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_enable_supervisor_assign"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_enable_supervisor_monitor"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_enable_supervisor_transfer"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_enable_supervisor_assign"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_enable_supervisor_monitor"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_enable_supervisor_transfer"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Supervisor settings"): Xrm.PageTab<Tabs.Supervisorsettings>;
      get(name: "{44effe7c-a18d-4d4c-b111-db98e28bc808}"): Xrm.PageTab<Tabs._44effe7ca18d4d4cb111db98e28bc808>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Supervisorsettings extends Xrm.PageBase<Supervisorsettings.Attributes,Supervisorsettings.Tabs,Supervisorsettings.Controls> {
    getAttribute(attributeName: "msdyn_enable_supervisor_assign"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_enable_supervisor_monitor"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_enable_supervisor_transfer"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_enable_supervisor_assign"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_enable_supervisor_monitor"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_enable_supervisor_transfer"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
