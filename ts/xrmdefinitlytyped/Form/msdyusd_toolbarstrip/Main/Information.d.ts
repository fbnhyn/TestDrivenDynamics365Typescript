declare namespace Form.msdyusd_toolbarstrip.Main {
  namespace Information {
    namespace Tabs {
      interface Conditions extends Xrm.SectionCollectionBase {
        get(name: "Conditons_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Styles extends Xrm.SectionCollectionBase {
        get(name: "Custom Styles"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyusd_autoload"): Xrm.OptionSetAttribute<msdyusd_toolbarstrip_msdyusd_autoload>;
      get(name: "msdyusd_customstyles"): Xrm.Attribute<string>;
      get(name: "msdyusd_enabledcondition"): Xrm.Attribute<string>;
      get(name: "msdyusd_name"): Xrm.Attribute<string>;
      get(name: "msdyusd_order"): Xrm.NumberAttribute;
      get(name: "msdyusd_title"): Xrm.Attribute<string>;
      get(name: "msdyusd_visiblecondition"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyusd_toolbarstrip_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Buttons"): Xrm.SubGridControl<"msdyusd_toolbarbutton">;
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyusd_toolbarstrip_statecode>;
      get(name: "msdyusd_autoload"): Xrm.OptionSetControl<msdyusd_toolbarstrip_msdyusd_autoload>;
      get(name: "msdyusd_customstyles"): Xrm.StringControl;
      get(name: "msdyusd_enabledcondition"): Xrm.StringControl;
      get(name: "msdyusd_name"): Xrm.StringControl;
      get(name: "msdyusd_order"): Xrm.NumberControl;
      get(name: "msdyusd_title"): Xrm.StringControl;
      get(name: "msdyusd_visiblecondition"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Conditions"): Xrm.PageTab<Tabs.Conditions>;
      get(name: "Styles"): Xrm.PageTab<Tabs.Styles>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyusd_autoload"): Xrm.OptionSetAttribute<msdyusd_toolbarstrip_msdyusd_autoload>;
    getAttribute(attributeName: "msdyusd_customstyles"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyusd_enabledcondition"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyusd_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyusd_order"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyusd_title"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyusd_visiblecondition"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyusd_toolbarstrip_statecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Buttons"): Xrm.SubGridControl<"msdyusd_toolbarbutton">;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyusd_toolbarstrip_statecode>;
    getControl(controlName: "msdyusd_autoload"): Xrm.OptionSetControl<msdyusd_toolbarstrip_msdyusd_autoload>;
    getControl(controlName: "msdyusd_customstyles"): Xrm.StringControl;
    getControl(controlName: "msdyusd_enabledcondition"): Xrm.StringControl;
    getControl(controlName: "msdyusd_name"): Xrm.StringControl;
    getControl(controlName: "msdyusd_order"): Xrm.NumberControl;
    getControl(controlName: "msdyusd_title"): Xrm.StringControl;
    getControl(controlName: "msdyusd_visiblecondition"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
