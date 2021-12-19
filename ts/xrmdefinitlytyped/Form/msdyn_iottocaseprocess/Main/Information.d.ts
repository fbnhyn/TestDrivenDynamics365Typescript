declare namespace Form.msdyn_iottocaseprocess.Main {
  namespace Information {
    namespace Tabs {
      interface StageStep12 extends Xrm.SectionCollectionBase {
        get(name: "StageStep11_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep18 extends Xrm.SectionCollectionBase {
        get(name: "StageStep19_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep24 extends Xrm.SectionCollectionBase {
        get(name: "StageStep27_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep30 extends Xrm.SectionCollectionBase {
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface StageStep4 extends Xrm.SectionCollectionBase {
        get(name: "StageStep3_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "customerid"): Xrm.LookupAttribute<"incidents">;
      get(name: "msdyn_alerttime"): Xrm.DateAttribute;
      get(name: "msdyn_customerasset"): Xrm.LookupAttribute<"msdyn_iotalerts">;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"incidents">;
      get(name: "primarycontactid"): Xrm.LookupAttribute<"incidents">;
      get(name: "title"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "bpf_incident_msdyn_iottocaseprocess:contact"): Xrm.LookupControl<"incidents">;
      get(name: "bpf_incident_msdyn_iottocaseprocess:customer"): Xrm.LookupControl<"incidents">;
      get(name: "bpf_incident_msdyn_iottocaseprocess:customer1"): Xrm.LookupControl<"incidents">;
      get(name: "bpf_incident_msdyn_iottocaseprocess:ownerid"): Xrm.LookupControl<"incidents">;
      get(name: "bpf_incident_msdyn_iottocaseprocess:title"): Xrm.StringControl;
      get(name: "bpf_msdyn_iotalert_msdyn_iottocaseprocess:msdyn_alerttime"): Xrm.DateControl;
      get(name: "bpf_msdyn_iotalert_msdyn_iottocaseprocess:msdyn_customerasset"): Xrm.LookupControl<"msdyn_iotalerts">;
      get(name: "bpf_msdyn_iotalert_msdyn_iottocaseprocess:msdyn_description"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "StageStep12"): Xrm.PageTab<Tabs.StageStep12>;
      get(name: "StageStep18"): Xrm.PageTab<Tabs.StageStep18>;
      get(name: "StageStep24"): Xrm.PageTab<Tabs.StageStep24>;
      get(name: "StageStep30"): Xrm.PageTab<Tabs.StageStep30>;
      get(name: "StageStep4"): Xrm.PageTab<Tabs.StageStep4>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "customerid"): Xrm.LookupAttribute<"incidents">;
    getAttribute(attributeName: "msdyn_alerttime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_customerasset"): Xrm.LookupAttribute<"msdyn_iotalerts">;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"incidents">;
    getAttribute(attributeName: "primarycontactid"): Xrm.LookupAttribute<"incidents">;
    getAttribute(attributeName: "title"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "bpf_incident_msdyn_iottocaseprocess:contact"): Xrm.LookupControl<"incidents">;
    getControl(controlName: "bpf_incident_msdyn_iottocaseprocess:customer"): Xrm.LookupControl<"incidents">;
    getControl(controlName: "bpf_incident_msdyn_iottocaseprocess:customer1"): Xrm.LookupControl<"incidents">;
    getControl(controlName: "bpf_incident_msdyn_iottocaseprocess:ownerid"): Xrm.LookupControl<"incidents">;
    getControl(controlName: "bpf_incident_msdyn_iottocaseprocess:title"): Xrm.StringControl;
    getControl(controlName: "bpf_msdyn_iotalert_msdyn_iottocaseprocess:msdyn_alerttime"): Xrm.DateControl;
    getControl(controlName: "bpf_msdyn_iotalert_msdyn_iottocaseprocess:msdyn_customerasset"): Xrm.LookupControl<"msdyn_iotalerts">;
    getControl(controlName: "bpf_msdyn_iotalert_msdyn_iottocaseprocess:msdyn_description"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
