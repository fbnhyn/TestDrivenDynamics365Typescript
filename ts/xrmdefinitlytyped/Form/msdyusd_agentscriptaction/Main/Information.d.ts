declare namespace Form.msdyusd_agentscriptaction.Main {
  namespace Information {
    namespace Tabs {
      interface AdvancedTab extends Xrm.SectionCollectionBase {
        get(name: "tab_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyusd_action"): Xrm.LookupAttribute<"uii_action">;
      get(name: "msdyusd_actiondata"): Xrm.Attribute<string>;
      get(name: "msdyusd_application"): Xrm.LookupAttribute<"uii_hostedapplication">;
      get(name: "msdyusd_condition"): Xrm.Attribute<string>;
      get(name: "msdyusd_name"): Xrm.Attribute<string>;
      get(name: "msdyusd_order"): Xrm.NumberAttribute;
      get(name: "msdyusd_shortcutkey"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyusd_agentscriptaction_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "WebResource_ParameterInput"): Xrm.WebResourceControl;
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyusd_agentscriptaction_statecode>;
      get(name: "msdyusd_action"): Xrm.LookupControl<"uii_action">;
      get(name: "msdyusd_actiondata"): Xrm.StringControl;
      get(name: "msdyusd_application"): Xrm.LookupControl<"uii_hostedapplication">;
      get(name: "msdyusd_condition"): Xrm.StringControl;
      get(name: "msdyusd_name"): Xrm.StringControl;
      get(name: "msdyusd_order"): Xrm.NumberControl;
      get(name: "msdyusd_shortcutkey"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "AdvancedTab"): Xrm.PageTab<Tabs.AdvancedTab>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyusd_action"): Xrm.LookupAttribute<"uii_action">;
    getAttribute(attributeName: "msdyusd_actiondata"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyusd_application"): Xrm.LookupAttribute<"uii_hostedapplication">;
    getAttribute(attributeName: "msdyusd_condition"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyusd_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyusd_order"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyusd_shortcutkey"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyusd_agentscriptaction_statecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "WebResource_ParameterInput"): Xrm.WebResourceControl;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyusd_agentscriptaction_statecode>;
    getControl(controlName: "msdyusd_action"): Xrm.LookupControl<"uii_action">;
    getControl(controlName: "msdyusd_actiondata"): Xrm.StringControl;
    getControl(controlName: "msdyusd_application"): Xrm.LookupControl<"uii_hostedapplication">;
    getControl(controlName: "msdyusd_condition"): Xrm.StringControl;
    getControl(controlName: "msdyusd_name"): Xrm.StringControl;
    getControl(controlName: "msdyusd_order"): Xrm.NumberControl;
    getControl(controlName: "msdyusd_shortcutkey"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
