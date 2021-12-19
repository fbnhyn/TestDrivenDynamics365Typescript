declare namespace Form.msdyn_sentimentanalysis.Main {
  namespace Information {
    namespace Tabs {
      interface GeneralTab extends Xrm.SectionCollectionBase {
        get(name: "AgentNotificationsSection"): Xrm.PageSection;
        get(name: "GeneralSection"): Xrm.PageSection;
        get(name: "SupervisorNotificationsSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_additionallanguagesenabled"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_agentthreshold"): Xrm.Attribute<any>;
      get(name: "msdyn_enabled"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_supervisorthreshold"): Xrm.Attribute<any>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_additionallanguagesenabled"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_agentsettingssubheading"): Xrm.BaseControl;
      get(name: "msdyn_agentthreshold"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "msdyn_enabled"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_generalsubheading"): Xrm.BaseControl;
      get(name: "msdyn_supervisorsettingssubheading"): Xrm.BaseControl;
      get(name: "msdyn_supervisorthreshold"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "GeneralTab"): Xrm.PageTab<Tabs.GeneralTab>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_additionallanguagesenabled"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_agentthreshold"): Xrm.Attribute<any>;
    getAttribute(attributeName: "msdyn_enabled"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_supervisorthreshold"): Xrm.Attribute<any>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_additionallanguagesenabled"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_agentsettingssubheading"): Xrm.BaseControl;
    getControl(controlName: "msdyn_agentthreshold"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "msdyn_enabled"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_generalsubheading"): Xrm.BaseControl;
    getControl(controlName: "msdyn_supervisorsettingssubheading"): Xrm.BaseControl;
    getControl(controlName: "msdyn_supervisorthreshold"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
