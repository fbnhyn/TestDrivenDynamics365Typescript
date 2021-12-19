declare namespace Form.msdyn_sessiontemplate.Main {
  namespace Information {
    namespace Tabs {
      interface Agentscripts extends Xrm.SectionCollectionBase {
        get(name: "Agent scripts_column_4_section_1"): Xrm.PageSection;
        get(name: "tab_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface f804df38fca6488a928ea5dcca6fca2b extends Xrm.SectionCollectionBase {
        get(name: "{f804df38-fca6-488a-928e-a5dcca6fca2b}_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ismanaged"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_anchortab"): Xrm.LookupAttribute<"msdyn_applicationtabtemplate">;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_enablebuildexpression"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_entity"): Xrm.Attribute<string>;
      get(name: "msdyn_expressiondata"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_panelstate"): Xrm.OptionSetAttribute<msdyn_panelstateoptions>;
      get(name: "msdyn_sessiontype"): Xrm.Attribute<any>;
      get(name: "msdyn_title"): Xrm.Attribute<string>;
      get(name: "msdyn_uniquename"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "AdditionalTabs"): Xrm.SubGridControl<"msdyn_applicationtabtemplate">;
      get(name: "Agentscripts"): Xrm.SubGridControl<"msdyn_productivityagentscript">;
      get(name: "WebResource_Disclaimer"): Xrm.WebResourceControl;
      get(name: "ismanaged"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_anchortab"): Xrm.LookupControl<"msdyn_applicationtabtemplate">;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_enablebuildexpression"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_entity"): Xrm.StringControl;
      get(name: "msdyn_expressiondata"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_panelstate"): Xrm.OptionSetControl<msdyn_panelstateoptions>;
      get(name: "msdyn_sessiontype"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "msdyn_title"): Xrm.StringControl;
      get(name: "msdyn_uniquename"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Agent scripts"): Xrm.PageTab<Tabs.Agentscripts>;
      get(name: "{f804df38-fca6-488a-928e-a5dcca6fca2b}"): Xrm.PageTab<Tabs.f804df38fca6488a928ea5dcca6fca2b>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "ismanaged"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_anchortab"): Xrm.LookupAttribute<"msdyn_applicationtabtemplate">;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_enablebuildexpression"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_entity"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_expressiondata"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_panelstate"): Xrm.OptionSetAttribute<msdyn_panelstateoptions>;
    getAttribute(attributeName: "msdyn_sessiontype"): Xrm.Attribute<any>;
    getAttribute(attributeName: "msdyn_title"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_uniquename"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "AdditionalTabs"): Xrm.SubGridControl<"msdyn_applicationtabtemplate">;
    getControl(controlName: "Agentscripts"): Xrm.SubGridControl<"msdyn_productivityagentscript">;
    getControl(controlName: "WebResource_Disclaimer"): Xrm.WebResourceControl;
    getControl(controlName: "ismanaged"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_anchortab"): Xrm.LookupControl<"msdyn_applicationtabtemplate">;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_enablebuildexpression"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_entity"): Xrm.StringControl;
    getControl(controlName: "msdyn_expressiondata"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_panelstate"): Xrm.OptionSetControl<msdyn_panelstateoptions>;
    getControl(controlName: "msdyn_sessiontype"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "msdyn_title"): Xrm.StringControl;
    getControl(controlName: "msdyn_uniquename"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
