declare namespace Form.msdyn_omnichannelconfiguration.Main {
  namespace Maskingsettings {
    namespace Tabs {
      interface Selfservicesettings extends Xrm.SectionCollectionBase {
        get(name: "{44effe7c-a18d-4d4c-b111-db98e28bc808}_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface dcc1eb867ef24ff48d562a0f28fd1b5e extends Xrm.SectionCollectionBase {
        get(name: "{26ff56c2-88fe-41f2-be7f-af3c273cfce3}"): Xrm.PageSection;
        get(name: "{44effe7c-a18d-4d4c-b111-db98e28bc808}_section_3"): Xrm.PageSection;
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
      get(name: "msdyn_enable_visitorjourney"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_maskforagent"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_maskforcustomer"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "MaskingRulesInSettings"): Xrm.SubGridControl<"msdyn_maskingrule">;
      get(name: "msdyn_enable_supervisor_assign"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_enable_supervisor_monitor"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_enable_supervisor_transfer"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_enable_visitorjourney"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_maskforagent"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_maskforcustomer"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Self service settings"): Xrm.PageTab<Tabs.Selfservicesettings>;
      get(name: "{dcc1eb86-7ef2-4ff4-8d56-2a0f28fd1b5e}"): Xrm.PageTab<Tabs.dcc1eb867ef24ff48d562a0f28fd1b5e>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Maskingsettings extends Xrm.PageBase<Maskingsettings.Attributes,Maskingsettings.Tabs,Maskingsettings.Controls> {
    getAttribute(attributeName: "msdyn_enable_supervisor_assign"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_enable_supervisor_monitor"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_enable_supervisor_transfer"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_enable_visitorjourney"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_maskforagent"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_maskforcustomer"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "MaskingRulesInSettings"): Xrm.SubGridControl<"msdyn_maskingrule">;
    getControl(controlName: "msdyn_enable_supervisor_assign"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_enable_supervisor_monitor"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_enable_supervisor_transfer"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_enable_visitorjourney"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_maskforagent"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_maskforcustomer"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
