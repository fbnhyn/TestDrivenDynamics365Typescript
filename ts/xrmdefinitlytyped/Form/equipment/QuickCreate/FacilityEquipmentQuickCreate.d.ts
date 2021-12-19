declare namespace Form.equipment.QuickCreate {
  namespace FacilityEquipmentQuickCreate {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "businessunitid"): Xrm.LookupAttribute<"businessunit">;
      get(name: "msdyn_organizationalunitid"): Xrm.LookupAttribute<"msdyn_organizationalunit">;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "siteid"): Xrm.LookupAttribute<"site">;
      get(name: "timezonecode"): Xrm.NumberAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "businessunitid"): Xrm.LookupControl<"businessunit">;
      get(name: "msdyn_organizationalunitid"): Xrm.LookupControl<"msdyn_organizationalunit">;
      get(name: "name"): Xrm.StringControl;
      get(name: "siteid"): Xrm.LookupControl<"site">;
      get(name: "timezonecode"): Xrm.Control<Xrm.NumberAttribute>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface FacilityEquipmentQuickCreate extends Xrm.PageBase<FacilityEquipmentQuickCreate.Attributes,FacilityEquipmentQuickCreate.Tabs,FacilityEquipmentQuickCreate.Controls> {
    getAttribute(attributeName: "businessunitid"): Xrm.LookupAttribute<"businessunit">;
    getAttribute(attributeName: "msdyn_organizationalunitid"): Xrm.LookupAttribute<"msdyn_organizationalunit">;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "siteid"): Xrm.LookupAttribute<"site">;
    getAttribute(attributeName: "timezonecode"): Xrm.NumberAttribute;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "businessunitid"): Xrm.LookupControl<"businessunit">;
    getControl(controlName: "msdyn_organizationalunitid"): Xrm.LookupControl<"msdyn_organizationalunit">;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "siteid"): Xrm.LookupControl<"site">;
    getControl(controlName: "timezonecode"): Xrm.Control<Xrm.NumberAttribute>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
