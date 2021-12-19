declare namespace Form.msdyusd_windowroute.Main {
  namespace Information {
    namespace Tabs {
      interface CTITab extends Xrm.SectionCollectionBase {
        get(name: "CTI"): Xrm.PageSection;
        get(name: "MultipleMatchesTab"): Xrm.PageSection;
        get(name: "NoMatchesTab"): Xrm.PageSection;
        get(name: "SingleMatchTab"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface GeneralTab extends Xrm.SectionCollectionBase {
        get(name: "{b27d995d-ea0a-4463-9253-92f19878b844}_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface ResultTab extends Xrm.SectionCollectionBase {
        get(name: "EntitySearch"): Xrm.PageSection;
        get(name: "OptionsSection"): Xrm.PageSection;
        get(name: "Result"): Xrm.PageSection;
        get(name: "Tab"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_5 extends Xrm.SectionCollectionBase {
        get(name: "tab_5_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyusd_action"): Xrm.OptionSetAttribute<msdyusd_windowroute_msdyusd_action>;
      get(name: "msdyusd_application"): Xrm.LookupAttribute<"uii_hostedapplication">;
      get(name: "msdyusd_condition"): Xrm.Attribute<string>;
      get(name: "msdyusd_dashboardframe"): Xrm.Attribute<string>;
      get(name: "msdyusd_destination"): Xrm.OptionSetAttribute<msdyusd_windowroute_msdyusd_destination>;
      get(name: "msdyusd_direction"): Xrm.OptionSetAttribute<msdyusd_windowroute_msdyusd_direction>;
      get(name: "msdyusd_entity"): Xrm.LookupAttribute<"msdyusd_entityassignment">;
      get(name: "msdyusd_entitysearch"): Xrm.LookupAttribute<"msdyusd_entitysearch">;
      get(name: "msdyusd_field"): Xrm.Attribute<string>;
      get(name: "msdyusd_from"): Xrm.LookupAttribute<"uii_hostedapplication">;
      get(name: "msdyusd_fromsearch"): Xrm.LookupAttribute<"msdyusd_entitysearch">;
      get(name: "msdyusd_hidenavbar"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyusd_hideribbon"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyusd_initiatingactivity"): Xrm.LookupAttribute<"msdyusd_entityassignment">;
      get(name: "msdyusd_multiplematches"): Xrm.LookupAttribute<"msdyusd_agentscriptaction">;
      get(name: "msdyusd_multiplematchesdecision"): Xrm.OptionSetAttribute<msdyusd_windowroute_msdyusd_multiplematchesdecision>;
      get(name: "msdyusd_name"): Xrm.Attribute<string>;
      get(name: "msdyusd_nomatchdecision"): Xrm.OptionSetAttribute<msdyusd_windowroute_msdyusd_nomatchdecision>;
      get(name: "msdyusd_nomatchesaction"): Xrm.LookupAttribute<"msdyusd_agentscriptaction">;
      get(name: "msdyusd_order"): Xrm.NumberAttribute;
      get(name: "msdyusd_routetype"): Xrm.OptionSetAttribute<msdyusd_windowroute_msdyusd_routetype>;
      get(name: "msdyusd_showtab"): Xrm.LookupAttribute<"uii_hostedapplication">;
      get(name: "msdyusd_singlematchaction"): Xrm.LookupAttribute<"msdyusd_agentscriptaction">;
      get(name: "msdyusd_singlematchdecision"): Xrm.OptionSetAttribute<msdyusd_windowroute_msdyusd_singlematchdecision>;
      get(name: "msdyusd_sourceframe"): Xrm.Attribute<string>;
      get(name: "msdyusd_url"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyusd_windowroute_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "CTISearches"): Xrm.SubGridControl<"msdyusd_search">;
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyusd_windowroute_statecode>;
      get(name: "msdyusd_action"): Xrm.OptionSetControl<msdyusd_windowroute_msdyusd_action>;
      get(name: "msdyusd_application"): Xrm.LookupControl<"uii_hostedapplication">;
      get(name: "msdyusd_condition"): Xrm.StringControl;
      get(name: "msdyusd_dashboardframe"): Xrm.StringControl;
      get(name: "msdyusd_destination"): Xrm.OptionSetControl<msdyusd_windowroute_msdyusd_destination>;
      get(name: "msdyusd_direction"): Xrm.OptionSetControl<msdyusd_windowroute_msdyusd_direction>;
      get(name: "msdyusd_entity"): Xrm.LookupControl<"msdyusd_entityassignment">;
      get(name: "msdyusd_entitysearch"): Xrm.LookupControl<"msdyusd_entitysearch">;
      get(name: "msdyusd_field"): Xrm.StringControl;
      get(name: "msdyusd_from"): Xrm.LookupControl<"uii_hostedapplication">;
      get(name: "msdyusd_fromsearch"): Xrm.LookupControl<"msdyusd_entitysearch">;
      get(name: "msdyusd_hidenavbar"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyusd_hideribbon"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyusd_initiatingactivity"): Xrm.LookupControl<"msdyusd_entityassignment">;
      get(name: "msdyusd_multiplematches"): Xrm.LookupControl<"msdyusd_agentscriptaction">;
      get(name: "msdyusd_multiplematchesdecision"): Xrm.OptionSetControl<msdyusd_windowroute_msdyusd_multiplematchesdecision>;
      get(name: "msdyusd_name"): Xrm.StringControl;
      get(name: "msdyusd_nomatchdecision"): Xrm.OptionSetControl<msdyusd_windowroute_msdyusd_nomatchdecision>;
      get(name: "msdyusd_nomatchesaction"): Xrm.LookupControl<"msdyusd_agentscriptaction">;
      get(name: "msdyusd_order"): Xrm.NumberControl;
      get(name: "msdyusd_routetype"): Xrm.OptionSetControl<msdyusd_windowroute_msdyusd_routetype>;
      get(name: "msdyusd_showtab"): Xrm.LookupControl<"uii_hostedapplication">;
      get(name: "msdyusd_singlematchaction"): Xrm.LookupControl<"msdyusd_agentscriptaction">;
      get(name: "msdyusd_singlematchdecision"): Xrm.OptionSetControl<msdyusd_windowroute_msdyusd_singlematchdecision>;
      get(name: "msdyusd_sourceframe"): Xrm.StringControl;
      get(name: "msdyusd_url"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "CTITab"): Xrm.PageTab<Tabs.CTITab>;
      get(name: "GeneralTab"): Xrm.PageTab<Tabs.GeneralTab>;
      get(name: "ResultTab"): Xrm.PageTab<Tabs.ResultTab>;
      get(name: "tab_5"): Xrm.PageTab<Tabs.tab_5>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyusd_action"): Xrm.OptionSetAttribute<msdyusd_windowroute_msdyusd_action>;
    getAttribute(attributeName: "msdyusd_application"): Xrm.LookupAttribute<"uii_hostedapplication">;
    getAttribute(attributeName: "msdyusd_condition"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyusd_dashboardframe"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyusd_destination"): Xrm.OptionSetAttribute<msdyusd_windowroute_msdyusd_destination>;
    getAttribute(attributeName: "msdyusd_direction"): Xrm.OptionSetAttribute<msdyusd_windowroute_msdyusd_direction>;
    getAttribute(attributeName: "msdyusd_entity"): Xrm.LookupAttribute<"msdyusd_entityassignment">;
    getAttribute(attributeName: "msdyusd_entitysearch"): Xrm.LookupAttribute<"msdyusd_entitysearch">;
    getAttribute(attributeName: "msdyusd_field"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyusd_from"): Xrm.LookupAttribute<"uii_hostedapplication">;
    getAttribute(attributeName: "msdyusd_fromsearch"): Xrm.LookupAttribute<"msdyusd_entitysearch">;
    getAttribute(attributeName: "msdyusd_hidenavbar"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyusd_hideribbon"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyusd_initiatingactivity"): Xrm.LookupAttribute<"msdyusd_entityassignment">;
    getAttribute(attributeName: "msdyusd_multiplematches"): Xrm.LookupAttribute<"msdyusd_agentscriptaction">;
    getAttribute(attributeName: "msdyusd_multiplematchesdecision"): Xrm.OptionSetAttribute<msdyusd_windowroute_msdyusd_multiplematchesdecision>;
    getAttribute(attributeName: "msdyusd_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyusd_nomatchdecision"): Xrm.OptionSetAttribute<msdyusd_windowroute_msdyusd_nomatchdecision>;
    getAttribute(attributeName: "msdyusd_nomatchesaction"): Xrm.LookupAttribute<"msdyusd_agentscriptaction">;
    getAttribute(attributeName: "msdyusd_order"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyusd_routetype"): Xrm.OptionSetAttribute<msdyusd_windowroute_msdyusd_routetype>;
    getAttribute(attributeName: "msdyusd_showtab"): Xrm.LookupAttribute<"uii_hostedapplication">;
    getAttribute(attributeName: "msdyusd_singlematchaction"): Xrm.LookupAttribute<"msdyusd_agentscriptaction">;
    getAttribute(attributeName: "msdyusd_singlematchdecision"): Xrm.OptionSetAttribute<msdyusd_windowroute_msdyusd_singlematchdecision>;
    getAttribute(attributeName: "msdyusd_sourceframe"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyusd_url"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyusd_windowroute_statecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "CTISearches"): Xrm.SubGridControl<"msdyusd_search">;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyusd_windowroute_statecode>;
    getControl(controlName: "msdyusd_action"): Xrm.OptionSetControl<msdyusd_windowroute_msdyusd_action>;
    getControl(controlName: "msdyusd_application"): Xrm.LookupControl<"uii_hostedapplication">;
    getControl(controlName: "msdyusd_condition"): Xrm.StringControl;
    getControl(controlName: "msdyusd_dashboardframe"): Xrm.StringControl;
    getControl(controlName: "msdyusd_destination"): Xrm.OptionSetControl<msdyusd_windowroute_msdyusd_destination>;
    getControl(controlName: "msdyusd_direction"): Xrm.OptionSetControl<msdyusd_windowroute_msdyusd_direction>;
    getControl(controlName: "msdyusd_entity"): Xrm.LookupControl<"msdyusd_entityassignment">;
    getControl(controlName: "msdyusd_entitysearch"): Xrm.LookupControl<"msdyusd_entitysearch">;
    getControl(controlName: "msdyusd_field"): Xrm.StringControl;
    getControl(controlName: "msdyusd_from"): Xrm.LookupControl<"uii_hostedapplication">;
    getControl(controlName: "msdyusd_fromsearch"): Xrm.LookupControl<"msdyusd_entitysearch">;
    getControl(controlName: "msdyusd_hidenavbar"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyusd_hideribbon"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyusd_initiatingactivity"): Xrm.LookupControl<"msdyusd_entityassignment">;
    getControl(controlName: "msdyusd_multiplematches"): Xrm.LookupControl<"msdyusd_agentscriptaction">;
    getControl(controlName: "msdyusd_multiplematchesdecision"): Xrm.OptionSetControl<msdyusd_windowroute_msdyusd_multiplematchesdecision>;
    getControl(controlName: "msdyusd_name"): Xrm.StringControl;
    getControl(controlName: "msdyusd_nomatchdecision"): Xrm.OptionSetControl<msdyusd_windowroute_msdyusd_nomatchdecision>;
    getControl(controlName: "msdyusd_nomatchesaction"): Xrm.LookupControl<"msdyusd_agentscriptaction">;
    getControl(controlName: "msdyusd_order"): Xrm.NumberControl;
    getControl(controlName: "msdyusd_routetype"): Xrm.OptionSetControl<msdyusd_windowroute_msdyusd_routetype>;
    getControl(controlName: "msdyusd_showtab"): Xrm.LookupControl<"uii_hostedapplication">;
    getControl(controlName: "msdyusd_singlematchaction"): Xrm.LookupControl<"msdyusd_agentscriptaction">;
    getControl(controlName: "msdyusd_singlematchdecision"): Xrm.OptionSetControl<msdyusd_windowroute_msdyusd_singlematchdecision>;
    getControl(controlName: "msdyusd_sourceframe"): Xrm.StringControl;
    getControl(controlName: "msdyusd_url"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
