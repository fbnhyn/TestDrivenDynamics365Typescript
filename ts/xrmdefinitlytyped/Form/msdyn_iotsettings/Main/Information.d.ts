declare namespace Form.msdyn_iotsettings.Main {
  namespace Information {
    namespace Tabs {
      interface AlertAggregationRulesTab extends Xrm.SectionCollectionBase {
        get(name: "AlertAggregationRulesSection"): Xrm.PageSection;
        get(name: "tab_3_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface General extends Xrm.SectionCollectionBase {
        get(name: "Command Settings Section"): Xrm.PageSection;
        get(name: "Deployment"): Xrm.PageSection;
        get(name: "Other Section"): Xrm.PageSection;
        get(name: "tab_2_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface IoTProviderSettingsTab extends Xrm.SectionCollectionBase {
        get(name: "DefaultIoTProviderInstanceSection"): Xrm.PageSection;
        get(name: "IoTProviderSettingsEmptySection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface SuggestionsTab extends Xrm.SectionCollectionBase {
        get(name: "ModelStatusSection"): Xrm.PageSection;
        get(name: "SuggestionsEmptySection"): Xrm.PageSection;
        get(name: "SuggestionsSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface eddc3ea8b755416e8d97c3b1fee65aad extends Xrm.SectionCollectionBase {
        get(name: "{e07187a8-1c2c-40ff-8c3a-05845b3a09f2}"): Xrm.PageSection;
        get(name: "{eddc3ea8-b755-416e-8d97-c3b1fee65aad}_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_commandnameproperty"): Xrm.Attribute<string>;
      get(name: "msdyn_commandparametersproperty"): Xrm.Attribute<string>;
      get(name: "msdyn_defaultiotproviderinstance"): Xrm.LookupAttribute<"msdyn_iotproviderinstance">;
      get(name: "msdyn_deploymentappurl"): Xrm.Attribute<string>;
      get(name: "msdyn_devicedatapullfrequency"): Xrm.NumberAttribute;
      get(name: "msdyn_enableiotsuggestions"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_enhancedbackgroundprocessing"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_iotalertaggregationrule"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_nextdevicedatapulltime"): Xrm.DateAttribute;
      get(name: "msdyn_scheduleddevicedatapull"): Xrm.OptionSetAttribute<boolean>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "msdyn_commandnameproperty"): Xrm.StringControl;
      get(name: "msdyn_commandparametersproperty"): Xrm.StringControl;
      get(name: "msdyn_defaultiotproviderinstance"): Xrm.LookupControl<"msdyn_iotproviderinstance">;
      get(name: "msdyn_deploymentappurl"): Xrm.StringControl;
      get(name: "msdyn_devicedatapullfrequency"): Xrm.NumberControl;
      get(name: "msdyn_enableiotsuggestions"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_enableiotsuggestions1"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_enhancedbackgroundprocessing"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_iotalertaggregationrule"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_nextdevicedatapulltime"): Xrm.DateControl;
      get(name: "msdyn_scheduleddevicedatapull"): Xrm.OptionSetControl<boolean>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "AlertAggregationRulesTab"): Xrm.PageTab<Tabs.AlertAggregationRulesTab>;
      get(name: "General"): Xrm.PageTab<Tabs.General>;
      get(name: "IoTProviderSettingsTab"): Xrm.PageTab<Tabs.IoTProviderSettingsTab>;
      get(name: "SuggestionsTab"): Xrm.PageTab<Tabs.SuggestionsTab>;
      get(name: "{eddc3ea8-b755-416e-8d97-c3b1fee65aad}"): Xrm.PageTab<Tabs.eddc3ea8b755416e8d97c3b1fee65aad>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_commandnameproperty"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_commandparametersproperty"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_defaultiotproviderinstance"): Xrm.LookupAttribute<"msdyn_iotproviderinstance">;
    getAttribute(attributeName: "msdyn_deploymentappurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_devicedatapullfrequency"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_enableiotsuggestions"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_enhancedbackgroundprocessing"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_iotalertaggregationrule"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_nextdevicedatapulltime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_scheduleddevicedatapull"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "msdyn_commandnameproperty"): Xrm.StringControl;
    getControl(controlName: "msdyn_commandparametersproperty"): Xrm.StringControl;
    getControl(controlName: "msdyn_defaultiotproviderinstance"): Xrm.LookupControl<"msdyn_iotproviderinstance">;
    getControl(controlName: "msdyn_deploymentappurl"): Xrm.StringControl;
    getControl(controlName: "msdyn_devicedatapullfrequency"): Xrm.NumberControl;
    getControl(controlName: "msdyn_enableiotsuggestions"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_enableiotsuggestions1"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_enhancedbackgroundprocessing"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_iotalertaggregationrule"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_nextdevicedatapulltime"): Xrm.DateControl;
    getControl(controlName: "msdyn_scheduleddevicedatapull"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
