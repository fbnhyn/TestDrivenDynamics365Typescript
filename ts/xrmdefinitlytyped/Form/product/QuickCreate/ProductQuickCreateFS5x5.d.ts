declare namespace Form.product.QuickCreate {
  namespace ProductQuickCreateFS5x5 {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "defaultuomid"): Xrm.LookupAttribute<"uom">;
      get(name: "defaultuomscheduleid"): Xrm.LookupAttribute<"uomschedule">;
      get(name: "msdyn_fieldserviceproducttype"): Xrm.OptionSetAttribute<msdyn_fieldserviceproducttype>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "productnumber"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "defaultuomid"): Xrm.LookupControl<"uom">;
      get(name: "defaultuomscheduleid"): Xrm.LookupControl<"uomschedule">;
      get(name: "msdyn_fieldserviceproducttype"): Xrm.OptionSetControl<msdyn_fieldserviceproducttype>;
      get(name: "name"): Xrm.StringControl;
      get(name: "productnumber"): Xrm.StringControl;
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
  interface ProductQuickCreateFS5x5 extends Xrm.PageBase<ProductQuickCreateFS5x5.Attributes,ProductQuickCreateFS5x5.Tabs,ProductQuickCreateFS5x5.Controls> {
    getAttribute(attributeName: "defaultuomid"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: "defaultuomscheduleid"): Xrm.LookupAttribute<"uomschedule">;
    getAttribute(attributeName: "msdyn_fieldserviceproducttype"): Xrm.OptionSetAttribute<msdyn_fieldserviceproducttype>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "productnumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "defaultuomid"): Xrm.LookupControl<"uom">;
    getControl(controlName: "defaultuomscheduleid"): Xrm.LookupControl<"uomschedule">;
    getControl(controlName: "msdyn_fieldserviceproducttype"): Xrm.OptionSetControl<msdyn_fieldserviceproducttype>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "productnumber"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
