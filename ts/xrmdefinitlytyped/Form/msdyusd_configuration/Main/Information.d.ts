declare namespace Form.msdyusd_configuration.Main {
  namespace Information {
    namespace Tabs {
      interface tab_3 extends Xrm.SectionCollectionBase {
        get(name: "tab_3_section_1"): Xrm.PageSection;
        get(name: "tab_3_section_2"): Xrm.PageSection;
        get(name: "tab_3_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_4 extends Xrm.SectionCollectionBase {
        get(name: "tab_4_section_1"): Xrm.PageSection;
        get(name: "tab_4_section_2"): Xrm.PageSection;
        get(name: "tab_4_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_5 extends Xrm.SectionCollectionBase {
        get(name: "tab_5_section_1"): Xrm.PageSection;
        get(name: "tab_5_section_2"): Xrm.PageSection;
        get(name: "tab_5_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_6 extends Xrm.SectionCollectionBase {
        get(name: "tab_6_section_1"): Xrm.PageSection;
        get(name: "tab_6_section_2"): Xrm.PageSection;
        get(name: "tab_6_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyusd_Description"): Xrm.Attribute<string>;
      get(name: "msdyusd_auditanddiagnosticssettingfield"): Xrm.LookupAttribute<"msdyusd_auditanddiagnosticssetting">;
      get(name: "msdyusd_clientconfigcacheversionnumber"): Xrm.Attribute<string>;
      get(name: "msdyusd_isdefault"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyusd_name"): Xrm.Attribute<string>;
      get(name: "msdyusd_ucisettingsid"): Xrm.LookupAttribute<"msdyusd_ucisettings">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyusd_configuration_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ActionCalls"): Xrm.SubGridControl<"msdyusd_agentscriptaction">;
      get(name: "AgentScripts"): Xrm.SubGridControl<"msdyusd_task">;
      get(name: "CustomizationFiles"): Xrm.SubGridControl<"msdyusd_customizationfiles">;
      get(name: "EntitySearches"): Xrm.SubGridControl<"msdyusd_entitysearch">;
      get(name: "Events"): Xrm.SubGridControl<"msdyusd_uiievent">;
      get(name: "Forms"): Xrm.SubGridControl<"msdyusd_form">;
      get(name: "HostedControls"): Xrm.SubGridControl<"uii_hostedapplication">;
      get(name: "Options"): Xrm.SubGridControl<"uii_option">;
      get(name: "Scriplets"): Xrm.SubGridControl<"msdyusd_scriptlet">;
      get(name: "SessionLines"): Xrm.SubGridControl<"msdyusd_sessioninformation">;
      get(name: "Toolbars"): Xrm.SubGridControl<"msdyusd_toolbarstrip">;
      get(name: "WindowNavigationRules"): Xrm.SubGridControl<"msdyusd_windowroute">;
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyusd_configuration_statecode>;
      get(name: "msdyusd_Description"): Xrm.StringControl;
      get(name: "msdyusd_auditanddiagnosticssettingfield"): Xrm.LookupControl<"msdyusd_auditanddiagnosticssetting">;
      get(name: "msdyusd_clientconfigcacheversionnumber"): Xrm.StringControl;
      get(name: "msdyusd_isdefault"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyusd_name"): Xrm.StringControl;
      get(name: "msdyusd_ucisettingsid"): Xrm.LookupControl<"msdyusd_ucisettings">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "usergrid"): Xrm.SubGridControl<"systemuser">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_3"): Xrm.PageTab<Tabs.tab_3>;
      get(name: "tab_4"): Xrm.PageTab<Tabs.tab_4>;
      get(name: "tab_5"): Xrm.PageTab<Tabs.tab_5>;
      get(name: "tab_6"): Xrm.PageTab<Tabs.tab_6>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyusd_Description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyusd_auditanddiagnosticssettingfield"): Xrm.LookupAttribute<"msdyusd_auditanddiagnosticssetting">;
    getAttribute(attributeName: "msdyusd_clientconfigcacheversionnumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyusd_isdefault"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyusd_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyusd_ucisettingsid"): Xrm.LookupAttribute<"msdyusd_ucisettings">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyusd_configuration_statecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "ActionCalls"): Xrm.SubGridControl<"msdyusd_agentscriptaction">;
    getControl(controlName: "AgentScripts"): Xrm.SubGridControl<"msdyusd_task">;
    getControl(controlName: "CustomizationFiles"): Xrm.SubGridControl<"msdyusd_customizationfiles">;
    getControl(controlName: "EntitySearches"): Xrm.SubGridControl<"msdyusd_entitysearch">;
    getControl(controlName: "Events"): Xrm.SubGridControl<"msdyusd_uiievent">;
    getControl(controlName: "Forms"): Xrm.SubGridControl<"msdyusd_form">;
    getControl(controlName: "HostedControls"): Xrm.SubGridControl<"uii_hostedapplication">;
    getControl(controlName: "Options"): Xrm.SubGridControl<"uii_option">;
    getControl(controlName: "Scriplets"): Xrm.SubGridControl<"msdyusd_scriptlet">;
    getControl(controlName: "SessionLines"): Xrm.SubGridControl<"msdyusd_sessioninformation">;
    getControl(controlName: "Toolbars"): Xrm.SubGridControl<"msdyusd_toolbarstrip">;
    getControl(controlName: "WindowNavigationRules"): Xrm.SubGridControl<"msdyusd_windowroute">;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyusd_configuration_statecode>;
    getControl(controlName: "msdyusd_Description"): Xrm.StringControl;
    getControl(controlName: "msdyusd_auditanddiagnosticssettingfield"): Xrm.LookupControl<"msdyusd_auditanddiagnosticssetting">;
    getControl(controlName: "msdyusd_clientconfigcacheversionnumber"): Xrm.StringControl;
    getControl(controlName: "msdyusd_isdefault"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyusd_name"): Xrm.StringControl;
    getControl(controlName: "msdyusd_ucisettingsid"): Xrm.LookupControl<"msdyusd_ucisettings">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "usergrid"): Xrm.SubGridControl<"systemuser">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
