declare namespace Form.uii_action.Main {
  namespace Information {
    namespace Tabs {
      interface General extends Xrm.SectionCollectionBase {
        get(name: "Automation"): Xrm.PageSection;
        get(name: "General"): Xrm.PageSection;
        get(name: "URLNavigation"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface _49a2fdf8181449b5be5ae7cac97e0ee3 extends Xrm.SectionCollectionBase {
        get(name: "{b4b540bd-52d0-4cc9-bd42-16f4ddaeddad}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface _80c2eeb79addde118e8000155d289c61 extends Xrm.SectionCollectionBase {
        get(name: "{aaa1f133-9bdd-de11-8e80-00155d289c61}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<uii_action_statecode>;
      get(name: "uii_automationmode"): Xrm.OptionSetAttribute<uii_action_uii_automationmode>;
      get(name: "uii_extensionsxml"): Xrm.Attribute<string>;
      get(name: "uii_hostedapplicationid"): Xrm.LookupAttribute<"uii_hostedapplication">;
      get(name: "uii_isdefault"): Xrm.OptionSetAttribute<boolean>;
      get(name: "uii_isfocussedapplication"): Xrm.OptionSetAttribute<boolean>;
      get(name: "uii_isrunmodeasynchronous"): Xrm.OptionSetAttribute<boolean>;
      get(name: "uii_method"): Xrm.OptionSetAttribute<uii_action_uii_method>;
      get(name: "uii_name"): Xrm.Attribute<string>;
      get(name: "uii_querystring"): Xrm.Attribute<string>;
      get(name: "uii_url"): Xrm.Attribute<string>;
      get(name: "uii_workflowassemblytype"): Xrm.Attribute<string>;
      get(name: "uii_workflowxaml"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "footer_statecode"): Xrm.OptionSetControl<uii_action_statecode>;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "uii_automationmode"): Xrm.OptionSetControl<uii_action_uii_automationmode>;
      get(name: "uii_extensionsxml"): Xrm.StringControl;
      get(name: "uii_hostedapplicationid"): Xrm.LookupControl<"uii_hostedapplication">;
      get(name: "uii_isdefault"): Xrm.OptionSetControl<boolean>;
      get(name: "uii_isfocussedapplication"): Xrm.OptionSetControl<boolean>;
      get(name: "uii_isrunmodeasynchronous"): Xrm.OptionSetControl<boolean>;
      get(name: "uii_method"): Xrm.OptionSetControl<uii_action_uii_method>;
      get(name: "uii_name"): Xrm.StringControl;
      get(name: "uii_querystring"): Xrm.StringControl;
      get(name: "uii_url"): Xrm.StringControl;
      get(name: "uii_workflowassemblytype"): Xrm.StringControl;
      get(name: "uii_workflowxaml"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "General"): Xrm.PageTab<Tabs.General>;
      get(name: "{49a2fdf8-1814-49b5-be5a-e7cac97e0ee3}"): Xrm.PageTab<Tabs._49a2fdf8181449b5be5ae7cac97e0ee3>;
      get(name: "{80c2eeb7-9add-de11-8e80-00155d289c61}"): Xrm.PageTab<Tabs._80c2eeb79addde118e8000155d289c61>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<uii_action_statecode>;
    getAttribute(attributeName: "uii_automationmode"): Xrm.OptionSetAttribute<uii_action_uii_automationmode>;
    getAttribute(attributeName: "uii_extensionsxml"): Xrm.Attribute<string>;
    getAttribute(attributeName: "uii_hostedapplicationid"): Xrm.LookupAttribute<"uii_hostedapplication">;
    getAttribute(attributeName: "uii_isdefault"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "uii_isfocussedapplication"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "uii_isrunmodeasynchronous"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "uii_method"): Xrm.OptionSetAttribute<uii_action_uii_method>;
    getAttribute(attributeName: "uii_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "uii_querystring"): Xrm.Attribute<string>;
    getAttribute(attributeName: "uii_url"): Xrm.Attribute<string>;
    getAttribute(attributeName: "uii_workflowassemblytype"): Xrm.Attribute<string>;
    getAttribute(attributeName: "uii_workflowxaml"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<uii_action_statecode>;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "uii_automationmode"): Xrm.OptionSetControl<uii_action_uii_automationmode>;
    getControl(controlName: "uii_extensionsxml"): Xrm.StringControl;
    getControl(controlName: "uii_hostedapplicationid"): Xrm.LookupControl<"uii_hostedapplication">;
    getControl(controlName: "uii_isdefault"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "uii_isfocussedapplication"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "uii_isrunmodeasynchronous"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "uii_method"): Xrm.OptionSetControl<uii_action_uii_method>;
    getControl(controlName: "uii_name"): Xrm.StringControl;
    getControl(controlName: "uii_querystring"): Xrm.StringControl;
    getControl(controlName: "uii_url"): Xrm.StringControl;
    getControl(controlName: "uii_workflowassemblytype"): Xrm.StringControl;
    getControl(controlName: "uii_workflowxaml"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
