declare namespace Form.msdyn_taxcode.Main {
  namespace Information {
    namespace Tabs {
      interface f1tab_taxinfo extends Xrm.SectionCollectionBase {
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface taxcodedetailstab extends Xrm.SectionCollectionBase {
        get(name: "taxcodedetailssection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_actastaxgroup"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_agreementtaxable"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_productstaxable"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_servicestaxable"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_taxrate"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyn_taxcode_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyn_taxcode_statecode>;
      get(name: "msdyn_actastaxgroup"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_agreementtaxable"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_productstaxable"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_servicestaxable"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_taxrate"): Xrm.NumberControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "taxcodedetailsgrid"): Xrm.SubGridControl<"msdyn_taxcodedetail">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "f1tab_taxinfo"): Xrm.PageTab<Tabs.f1tab_taxinfo>;
      get(name: "taxcodedetailstab"): Xrm.PageTab<Tabs.taxcodedetailstab>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_actastaxgroup"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_agreementtaxable"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_productstaxable"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_servicestaxable"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_taxrate"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyn_taxcode_statecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyn_taxcode_statecode>;
    getControl(controlName: "msdyn_actastaxgroup"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_agreementtaxable"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_productstaxable"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_servicestaxable"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_taxrate"): Xrm.NumberControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "taxcodedetailsgrid"): Xrm.SubGridControl<"msdyn_taxcodedetail">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
