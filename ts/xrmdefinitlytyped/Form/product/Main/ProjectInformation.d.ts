declare namespace Form.product.Main {
  namespace ProjectInformation {
    namespace Tabs {
      interface notes extends Xrm.SectionCollectionBase {
        get(name: "notes"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface price_list_items extends Xrm.SectionCollectionBase {
        get(name: "price_list_items_section"): Xrm.PageSection;
        get(name: "productsubstitute_items_section"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface product_computed_fields extends Xrm.SectionCollectionBase {
        get(name: "tab_6_section_1"): Xrm.PageSection;
        get(name: "tab_6_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface product_details extends Xrm.SectionCollectionBase {
        get(name: "costs"): Xrm.PageSection;
        get(name: "product information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface product_dynamic_properties extends Xrm.SectionCollectionBase {
        get(name: "product_dynamic_properties_section"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface productassocaition_items extends Xrm.SectionCollectionBase {
        get(name: "DynamicProperties"): Xrm.PageSection;
        get(name: "productassocaition_items_section"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "currentcost"): Xrm.NumberAttribute;
      get(name: "defaultuomid"): Xrm.LookupAttribute<"uom">;
      get(name: "defaultuomscheduleid"): Xrm.LookupAttribute<"uomschedule">;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "parentproductid"): Xrm.LookupAttribute<"product">;
      get(name: "price"): Xrm.NumberAttribute;
      get(name: "pricelevelid"): Xrm.LookupAttribute<"pricelevel">;
      get(name: "productnumber"): Xrm.Attribute<string>;
      get(name: "quantitydecimal"): Xrm.NumberAttribute;
      get(name: "standardcost"): Xrm.NumberAttribute;
      get(name: "statecode"): Xrm.OptionSetAttribute<product_statecode>;
      get(name: "subjectid"): Xrm.LookupAttribute<"subject">;
      get(name: "validfromdate"): Xrm.DateAttribute;
      get(name: "validtodate"): Xrm.DateAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Computed_Fields"): Xrm.SubGridControl<"msdyn_fieldcomputation">;
      get(name: "DynamicPropertiesList_LinkControl"): Xrm.BaseControl;
      get(name: "Price_List_Items"): Xrm.SubGridControl<"productpricelevel">;
      get(name: "currentcost"): Xrm.NumberControl;
      get(name: "defaultuomid"): Xrm.LookupControl<"uom">;
      get(name: "defaultuomscheduleid"): Xrm.LookupControl<"uomschedule">;
      get(name: "description"): Xrm.StringControl;
      get(name: "header_statecode"): Xrm.OptionSetControl<product_statecode>;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "parentproductid"): Xrm.LookupControl<"product">;
      get(name: "price"): Xrm.NumberControl;
      get(name: "pricelevelid"): Xrm.LookupControl<"pricelevel">;
      get(name: "product_dynamic_properties"): Xrm.SubGridControl<"dynamicproperty">;
      get(name: "productassocaition_items"): Xrm.SubGridControl<"productassociation">;
      get(name: "productnumber"): Xrm.StringControl;
      get(name: "productsubstitute_items"): Xrm.SubGridControl<"productsubstitute">;
      get(name: "quantitydecimal"): Xrm.NumberControl;
      get(name: "standardcost"): Xrm.NumberControl;
      get(name: "subjectid"): Xrm.LookupControl<"subject">;
      get(name: "validfromdate"): Xrm.DateControl;
      get(name: "validtodate"): Xrm.DateControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "notes"): Xrm.PageTab<Tabs.notes>;
      get(name: "price_list_items"): Xrm.PageTab<Tabs.price_list_items>;
      get(name: "product_computed_fields"): Xrm.PageTab<Tabs.product_computed_fields>;
      get(name: "product_details"): Xrm.PageTab<Tabs.product_details>;
      get(name: "product_dynamic_properties"): Xrm.PageTab<Tabs.product_dynamic_properties>;
      get(name: "productassocaition_items"): Xrm.PageTab<Tabs.productassocaition_items>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface ProjectInformation extends Xrm.PageBase<ProjectInformation.Attributes,ProjectInformation.Tabs,ProjectInformation.Controls> {
    getAttribute(attributeName: "currentcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "defaultuomid"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: "defaultuomscheduleid"): Xrm.LookupAttribute<"uomschedule">;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "parentproductid"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: "price"): Xrm.NumberAttribute;
    getAttribute(attributeName: "pricelevelid"): Xrm.LookupAttribute<"pricelevel">;
    getAttribute(attributeName: "productnumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "quantitydecimal"): Xrm.NumberAttribute;
    getAttribute(attributeName: "standardcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<product_statecode>;
    getAttribute(attributeName: "subjectid"): Xrm.LookupAttribute<"subject">;
    getAttribute(attributeName: "validfromdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "validtodate"): Xrm.DateAttribute;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Computed_Fields"): Xrm.SubGridControl<"msdyn_fieldcomputation">;
    getControl(controlName: "DynamicPropertiesList_LinkControl"): Xrm.BaseControl;
    getControl(controlName: "Price_List_Items"): Xrm.SubGridControl<"productpricelevel">;
    getControl(controlName: "currentcost"): Xrm.NumberControl;
    getControl(controlName: "defaultuomid"): Xrm.LookupControl<"uom">;
    getControl(controlName: "defaultuomscheduleid"): Xrm.LookupControl<"uomschedule">;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<product_statecode>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "parentproductid"): Xrm.LookupControl<"product">;
    getControl(controlName: "price"): Xrm.NumberControl;
    getControl(controlName: "pricelevelid"): Xrm.LookupControl<"pricelevel">;
    getControl(controlName: "product_dynamic_properties"): Xrm.SubGridControl<"dynamicproperty">;
    getControl(controlName: "productassocaition_items"): Xrm.SubGridControl<"productassociation">;
    getControl(controlName: "productnumber"): Xrm.StringControl;
    getControl(controlName: "productsubstitute_items"): Xrm.SubGridControl<"productsubstitute">;
    getControl(controlName: "quantitydecimal"): Xrm.NumberControl;
    getControl(controlName: "standardcost"): Xrm.NumberControl;
    getControl(controlName: "subjectid"): Xrm.LookupControl<"subject">;
    getControl(controlName: "validfromdate"): Xrm.DateControl;
    getControl(controlName: "validtodate"): Xrm.DateControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
