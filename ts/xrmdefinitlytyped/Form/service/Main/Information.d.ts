declare namespace Form.service.Main {
  namespace Information {
    namespace Tabs {
      interface ResourceRequirements extends Xrm.SectionCollectionBase {
        get(name: "ResourceRequirement"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface general extends Xrm.SectionCollectionBase {
        get(name: "scheduling"): Xrm.PageSection;
        get(name: "scheduling_uci"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface required_resources_uci extends Xrm.SectionCollectionBase {
        get(name: "tab_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface requiredresources extends Xrm.SectionCollectionBase {
        get(name: "resources"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "anchoroffset"): Xrm.NumberAttribute;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "duration"): Xrm.NumberAttribute;
      get(name: "granularity"): Xrm.Attribute<string>;
      get(name: "initialstatuscode"): Xrm.OptionSetAttribute<service_initialstatuscode>;
      get(name: "isschedulable"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_SchedulingEngine"): Xrm.OptionSetAttribute<msdyn_service_schedulingengine>;
      get(name: "msdyn_requirementgroupid"): Xrm.LookupAttribute<"msdyn_resourcerequirement">;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "resourcespecid"): Xrm.LookupAttribute<"resourcespec">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "IFRAME_RuleTree"): Xrm.IFrameControl;
      get(name: "IFRAME_Scheduling"): Xrm.IFrameControl;
      get(name: "ResourceRequirements"): Xrm.LookupControl<"msdyn_resourcerequirement">;
      get(name: "anchoroffset"): Xrm.NumberControl;
      get(name: "anchoroffset_uci"): Xrm.NumberControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "duration"): Xrm.NumberControl;
      get(name: "duration_uci"): Xrm.NumberControl;
      get(name: "granularity"): Xrm.StringControl;
      get(name: "granularity_uci"): Xrm.StringControl;
      get(name: "initialstatuscode"): Xrm.OptionSetControl<service_initialstatuscode>;
      get(name: "isschedulable"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_SchedulingEngine"): Xrm.OptionSetControl<msdyn_service_schedulingengine>;
      get(name: "name"): Xrm.StringControl;
      get(name: "resourcespecid"): Xrm.LookupControl<"resourcespec">;
      get(name: "resourcespecid1"): Xrm.LookupControl<"resourcespec">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Resource Requirements"): Xrm.PageTab<Tabs.ResourceRequirements>;
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: "required_resources_uci"): Xrm.PageTab<Tabs.required_resources_uci>;
      get(name: "required resources"): Xrm.PageTab<Tabs.requiredresources>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "anchoroffset"): Xrm.NumberAttribute;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "duration"): Xrm.NumberAttribute;
    getAttribute(attributeName: "granularity"): Xrm.Attribute<string>;
    getAttribute(attributeName: "initialstatuscode"): Xrm.OptionSetAttribute<service_initialstatuscode>;
    getAttribute(attributeName: "isschedulable"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_SchedulingEngine"): Xrm.OptionSetAttribute<msdyn_service_schedulingengine>;
    getAttribute(attributeName: "msdyn_requirementgroupid"): Xrm.LookupAttribute<"msdyn_resourcerequirement">;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "resourcespecid"): Xrm.LookupAttribute<"resourcespec">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "IFRAME_RuleTree"): Xrm.IFrameControl;
    getControl(controlName: "IFRAME_Scheduling"): Xrm.IFrameControl;
    getControl(controlName: "ResourceRequirements"): Xrm.LookupControl<"msdyn_resourcerequirement">;
    getControl(controlName: "anchoroffset"): Xrm.NumberControl;
    getControl(controlName: "anchoroffset_uci"): Xrm.NumberControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "duration"): Xrm.NumberControl;
    getControl(controlName: "duration_uci"): Xrm.NumberControl;
    getControl(controlName: "granularity"): Xrm.StringControl;
    getControl(controlName: "granularity_uci"): Xrm.StringControl;
    getControl(controlName: "initialstatuscode"): Xrm.OptionSetControl<service_initialstatuscode>;
    getControl(controlName: "isschedulable"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_SchedulingEngine"): Xrm.OptionSetControl<msdyn_service_schedulingengine>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "resourcespecid"): Xrm.LookupControl<"resourcespec">;
    getControl(controlName: "resourcespecid1"): Xrm.LookupControl<"resourcespec">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
