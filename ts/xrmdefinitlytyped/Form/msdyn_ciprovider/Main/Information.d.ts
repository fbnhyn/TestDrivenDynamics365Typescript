declare namespace Form.msdyn_ciprovider.Main {
  namespace Information {
    namespace Tabs {
      interface _2190ec7ebb484408aa646008072a8a39 extends Xrm.SectionCollectionBase {
        get(name: "{2190ec7e-bb48-4408-aa64-6008072a8a39}_section_3"): Xrm.PageSection;
        get(name: "{c8623d8d-affd-453d-8cae-3da82648ccf0}_section_4"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_appselector"): Xrm.Attribute<string>;
      get(name: "msdyn_ciproviderapiversion"): Xrm.OptionSetAttribute<msdyn_ciproviderapiversion>;
      get(name: "msdyn_clicktoact"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_customparams"): Xrm.Attribute<string>;
      get(name: "msdyn_enableanalytics"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_label"): Xrm.Attribute<string>;
      get(name: "msdyn_landingurl"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_roleselector"): Xrm.Attribute<string>;
      get(name: "msdyn_sortorder"): Xrm.NumberAttribute;
      get(name: "msdyn_trusteddomain"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "WebResource_msdyn_cifmessage"): Xrm.WebResourceControl;
      get(name: "msdyn_appselector"): Xrm.StringControl;
      get(name: "msdyn_ciproviderapiversion"): Xrm.OptionSetControl<msdyn_ciproviderapiversion>;
      get(name: "msdyn_clicktoact"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_customparams"): Xrm.StringControl;
      get(name: "msdyn_enableanalytics"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_label"): Xrm.StringControl;
      get(name: "msdyn_landingurl"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_roleselector"): Xrm.StringControl;
      get(name: "msdyn_sortorder"): Xrm.NumberControl;
      get(name: "msdyn_trusteddomain"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{2190ec7e-bb48-4408-aa64-6008072a8a39}"): Xrm.PageTab<Tabs._2190ec7ebb484408aa646008072a8a39>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_appselector"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_ciproviderapiversion"): Xrm.OptionSetAttribute<msdyn_ciproviderapiversion>;
    getAttribute(attributeName: "msdyn_clicktoact"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_customparams"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_enableanalytics"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_label"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_landingurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_roleselector"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_sortorder"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_trusteddomain"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "WebResource_msdyn_cifmessage"): Xrm.WebResourceControl;
    getControl(controlName: "msdyn_appselector"): Xrm.StringControl;
    getControl(controlName: "msdyn_ciproviderapiversion"): Xrm.OptionSetControl<msdyn_ciproviderapiversion>;
    getControl(controlName: "msdyn_clicktoact"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_customparams"): Xrm.StringControl;
    getControl(controlName: "msdyn_enableanalytics"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_label"): Xrm.StringControl;
    getControl(controlName: "msdyn_landingurl"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_roleselector"): Xrm.StringControl;
    getControl(controlName: "msdyn_sortorder"): Xrm.NumberControl;
    getControl(controlName: "msdyn_trusteddomain"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
