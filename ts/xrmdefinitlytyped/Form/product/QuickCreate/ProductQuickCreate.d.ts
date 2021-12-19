declare namespace Form.product.QuickCreate {
  namespace ProductQuickCreate {
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
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "parentproductid"): Xrm.LookupAttribute<"product">;
      get(name: "productnumber"): Xrm.Attribute<string>;
      get(name: "quantitydecimal"): Xrm.NumberAttribute;
      get(name: "subjectid"): Xrm.LookupAttribute<"subject">;
      get(name: "validfromdate"): Xrm.DateAttribute;
      get(name: "validtodate"): Xrm.DateAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "defaultuomid"): Xrm.LookupControl<"uom">;
      get(name: "defaultuomscheduleid"): Xrm.LookupControl<"uomschedule">;
      get(name: "description"): Xrm.StringControl;
      get(name: "name"): Xrm.StringControl;
      get(name: "parentproductid"): Xrm.LookupControl<"product">;
      get(name: "productnumber"): Xrm.StringControl;
      get(name: "quantitydecimal"): Xrm.NumberControl;
      get(name: "subjectid"): Xrm.LookupControl<"subject">;
      get(name: "validfromdate"): Xrm.DateControl;
      get(name: "validtodate"): Xrm.DateControl;
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
  interface ProductQuickCreate extends Xrm.PageBase<ProductQuickCreate.Attributes,ProductQuickCreate.Tabs,ProductQuickCreate.Controls> {
    getAttribute(attributeName: "defaultuomid"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: "defaultuomscheduleid"): Xrm.LookupAttribute<"uomschedule">;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "parentproductid"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: "productnumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "quantitydecimal"): Xrm.NumberAttribute;
    getAttribute(attributeName: "subjectid"): Xrm.LookupAttribute<"subject">;
    getAttribute(attributeName: "validfromdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "validtodate"): Xrm.DateAttribute;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "defaultuomid"): Xrm.LookupControl<"uom">;
    getControl(controlName: "defaultuomscheduleid"): Xrm.LookupControl<"uomschedule">;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "parentproductid"): Xrm.LookupControl<"product">;
    getControl(controlName: "productnumber"): Xrm.StringControl;
    getControl(controlName: "quantitydecimal"): Xrm.NumberControl;
    getControl(controlName: "subjectid"): Xrm.LookupControl<"subject">;
    getControl(controlName: "validfromdate"): Xrm.DateControl;
    getControl(controlName: "validtodate"): Xrm.DateControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
