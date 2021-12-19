declare namespace Form.msdyusd_auditanddiagnosticssetting.Main {
  namespace Information {
    namespace Tabs {
      interface ActivityTrackingTab extends Xrm.SectionCollectionBase {
        get(name: "tab_2_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Diagnosticstab extends Xrm.SectionCollectionBase {
        get(name: "Diagnosticstab_section_2"): Xrm.PageSection;
        get(name: "tab_3_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface UserSchemaSettingstab extends Xrm.SectionCollectionBase {
        get(name: "tab_4_section_1"): Xrm.PageSection;
        get(name: "tab_4_section_UCI"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyusd_ATEnabled"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyusd_ATforActionCalls"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyusd_ATforAgentLogin"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyusd_ATforAgentScripts"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyusd_ATforCustomerSession"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyusd_ATforEvents"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyusd_ATforHostedControl"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyusd_ATforSubActionCalls"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyusd_ATforUIIAction"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyusd_ATforWindowsNavRules"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyusd_CacheSize"): Xrm.NumberAttribute;
      get(name: "msdyusd_CrashDumpEnabled"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyusd_DGTEnabled"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyusd_DGTVerbosityLevel"): Xrm.OptionSetAttribute<msdyusd_auditanddiagnosticssetting_dgtverbositylevel>;
      get(name: "msdyusd_EnableCaching"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyusd_ExitMonitoringEnabled"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyusd_LogsDirectory"): Xrm.Attribute<string>;
      get(name: "msdyusd_MaxDiagnosticLogsSizeInMB"): Xrm.NumberAttribute;
      get(name: "msdyusd_ODDShortcut"): Xrm.Attribute<string>;
      get(name: "msdyusd_name"): Xrm.Attribute<string>;
      get(name: "msdyusd_odperfbeginshortcut"): Xrm.Attribute<string>;
      get(name: "msdyusd_odperfendshortcut"): Xrm.Attribute<string>;
      get(name: "msdyusd_userschemasettings"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "IFRAME_userschemasettings"): Xrm.IFrameControl;
      get(name: "TraceSourceSettings"): Xrm.SubGridControl<"msdyusd_tracesourcesetting">;
      get(name: "msdyusd_ATEnabled"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyusd_ATforActionCalls"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyusd_ATforAgentLogin"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyusd_ATforAgentScripts"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyusd_ATforCustomerSession"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyusd_ATforEvents"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyusd_ATforHostedControl"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyusd_ATforSubActionCalls"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyusd_ATforUIIAction"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyusd_ATforWindowsNavRules"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyusd_CacheSize"): Xrm.NumberControl;
      get(name: "msdyusd_CrashDumpEnabled"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyusd_DGTEnabled"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyusd_DGTVerbosityLevel"): Xrm.OptionSetControl<msdyusd_auditanddiagnosticssetting_dgtverbositylevel>;
      get(name: "msdyusd_EnableCaching"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyusd_ExitMonitoringEnabled"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyusd_LogsDirectory"): Xrm.StringControl;
      get(name: "msdyusd_MaxDiagnosticLogsSizeInMB"): Xrm.NumberControl;
      get(name: "msdyusd_ODDShortcut"): Xrm.StringControl;
      get(name: "msdyusd_name"): Xrm.StringControl;
      get(name: "msdyusd_odperfbeginshortcut"): Xrm.StringControl;
      get(name: "msdyusd_odperfendshortcut"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "usercontrol_id"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "ActivityTrackingTab"): Xrm.PageTab<Tabs.ActivityTrackingTab>;
      get(name: "Diagnosticstab"): Xrm.PageTab<Tabs.Diagnosticstab>;
      get(name: "UserSchemaSettingstab"): Xrm.PageTab<Tabs.UserSchemaSettingstab>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyusd_ATEnabled"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyusd_ATforActionCalls"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyusd_ATforAgentLogin"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyusd_ATforAgentScripts"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyusd_ATforCustomerSession"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyusd_ATforEvents"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyusd_ATforHostedControl"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyusd_ATforSubActionCalls"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyusd_ATforUIIAction"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyusd_ATforWindowsNavRules"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyusd_CacheSize"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyusd_CrashDumpEnabled"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyusd_DGTEnabled"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyusd_DGTVerbosityLevel"): Xrm.OptionSetAttribute<msdyusd_auditanddiagnosticssetting_dgtverbositylevel>;
    getAttribute(attributeName: "msdyusd_EnableCaching"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyusd_ExitMonitoringEnabled"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyusd_LogsDirectory"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyusd_MaxDiagnosticLogsSizeInMB"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyusd_ODDShortcut"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyusd_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyusd_odperfbeginshortcut"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyusd_odperfendshortcut"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyusd_userschemasettings"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "IFRAME_userschemasettings"): Xrm.IFrameControl;
    getControl(controlName: "TraceSourceSettings"): Xrm.SubGridControl<"msdyusd_tracesourcesetting">;
    getControl(controlName: "msdyusd_ATEnabled"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyusd_ATforActionCalls"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyusd_ATforAgentLogin"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyusd_ATforAgentScripts"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyusd_ATforCustomerSession"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyusd_ATforEvents"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyusd_ATforHostedControl"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyusd_ATforSubActionCalls"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyusd_ATforUIIAction"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyusd_ATforWindowsNavRules"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyusd_CacheSize"): Xrm.NumberControl;
    getControl(controlName: "msdyusd_CrashDumpEnabled"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyusd_DGTEnabled"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyusd_DGTVerbosityLevel"): Xrm.OptionSetControl<msdyusd_auditanddiagnosticssetting_dgtverbositylevel>;
    getControl(controlName: "msdyusd_EnableCaching"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyusd_ExitMonitoringEnabled"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyusd_LogsDirectory"): Xrm.StringControl;
    getControl(controlName: "msdyusd_MaxDiagnosticLogsSizeInMB"): Xrm.NumberControl;
    getControl(controlName: "msdyusd_ODDShortcut"): Xrm.StringControl;
    getControl(controlName: "msdyusd_name"): Xrm.StringControl;
    getControl(controlName: "msdyusd_odperfbeginshortcut"): Xrm.StringControl;
    getControl(controlName: "msdyusd_odperfendshortcut"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "usercontrol_id"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
